import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import SERVER_URL from '../services/server_url';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { editItemAPI } from '../services/allAPI';
import { fetchItems } from '../Redux/slices/itemSlice';


function EditAdminItem({ setAnchorEl, setEditMenuDisplay, category, itemId, allItems }) {

  const [modalShow, setModalShow] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    itemImage: "", itemCategory: "", itemName: "", itemPrice: "", itemId: ""
  })
  const [preview, setPreview] = useState("")
  const [imageFileStatus, setImageFileStatus] = useState(false)
  const [itemImg, setItemImg] = useState({
    itemImage: ""
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (itemDetails.itemImage?.type == "image/png" || itemDetails.itemImage?.type == "image/jpg" || itemDetails.itemImage?.type == "image/jpeg") {
      setPreview(URL.createObjectURL(itemDetails.itemImage))
      setImageFileStatus(true)
    } else {
      setItemDetails({ ...itemDetails, itemImage: "" })
      setPreview("")
      setImageFileStatus(false)
    }
  }, [itemDetails.itemImage])

  // modal close
  const handleCloseModal = () => {
    setItemDetails({
      itemImage: "", itemCategory: "", itemName: "", itemPrice: "", itemId: ""
    })
    setPreview("")
    setModalShow(false);
    setAnchorEl(null);
    setEditMenuDisplay(false)
    setTimeout(() => {
      document.body.style.overflow = "auto"; //scrollbar is reset after all state changes
      document.body.style.paddingRight = "0px" // removing padding
    }, 500);
  }

  // edit menuItem
  const handleEditBttn = () => {
    setEditMenuDisplay(true)
    setModalShow(true);
    allItems.find(item => {
      if (item?._id == itemId) {
        setItemImg({ itemImage: item?.itemImage })
        setItemDetails({
          itemImage: "", itemCategory: item?.itemCategory, itemName: item?.itemName, itemPrice: item?.itemPrice, itemId: item?._id
        })
      }
    })
  }

  // edit
  const handleSubmit = async () => {
    const { itemImage, itemCategory, itemName, itemPrice, itemId } = itemDetails
    if (itemCategory && itemName && itemPrice) {
      const reqbody = new FormData()
      preview ? reqbody.append("itemImage", itemImage) : reqbody.append("itemImage", itemImg.itemImage)
      reqbody.append("itemCategory", itemCategory)
      reqbody.append("itemName", itemName)
      reqbody.append("itemPrice", itemPrice)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result = await editItemAPI(itemId, reqbody, reqHeader)
          if (result.status == 200) {
            handleCloseModal()
            dispatch(fetchItems())
          } else {
            toast.warning(result.response.data)
            // console.log(result.response);
          }
        } catch (error) {
          // console.log(error);
          toast.warning(error.response.data)
        }
      }
    } else {
      toast.warning("Please fill the form completely..")
    }
  }

  // console.log(allItems);


  return (
    <div>
      <MenuItem onClick={handleEditBttn}>Edit</MenuItem>

      <Modal
        show={modalShow}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <ToastContainer position='top-center' theme='colored' autoClose={1000} />

        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='flex flex-col'>
          {/* modal body */}
          <label>
            <input onChange={e => setItemDetails({ ...itemDetails, itemImage: e.target.files[0] })} type="file" style={{ display: "none" }} />
            <img className='img-fluid border-2 border-solid border-black rounded-md' width={"75px"} src={preview ? preview : `${SERVER_URL}/uploads/${itemImg.itemImage}`} alt="" />
          </label>
          {!imageFileStatus &&
            <div className="text-warning fw-semibold my-2">Upload only following file types(jpeg,jpg,png)</div>
          }
          <TextField value={itemDetails.itemCategory} onChange={e => setItemDetails({ ...itemDetails, itemCategory: e.target.value })} id="standard-basic" label="Item Category" variant="standard" />
          <TextField value={itemDetails.itemName} onChange={e => setItemDetails({ ...itemDetails, itemName: e.target.value })} id="standard-basic" label="Item Name" variant="standard" />
          <TextField value={itemDetails.itemPrice} onChange={e => setItemDetails({ ...itemDetails, itemPrice: e.target.value })} id="standard-basic" label="Items Price" variant="standard" />
        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded-md' variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className='rounded-md' variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditAdminItem
