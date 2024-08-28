import React, { useEffect } from 'react'
import SideNav from '../Components/SideNav'
import Grid from '@mui/material/Grid';
import addImage from '../assets/addImage.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Redux/slices/categorySlice';
import TextField from '@mui/material/TextField';
import { addItemAPI, deleteItemAPI } from '../services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchItems } from '../Redux/slices/itemSlice';
import SERVER_URL from '../services/server_url';
import EditAdminItem from '../Components/EditAdminItem';
import CircularProgress from '@mui/material/CircularProgress';

function AdminItems() {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(addImage)
  const [imageFileStatus, setImageFileStatus] = useState(false)
  const [itemDetails, setItemDetails] = useState({
    itemImage: "", itemCategory: "", itemName: "", itemPrice: ""
  })
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [itemAddResponse, setitemAddResponse] = useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [itemId, setItemId] = useState("")
  const [editMenuDisplay, setEditMenuDisplay] = useState(false)
  const [sideBar,setSideBar] = useState(false)

  const handleShow = () => setShow(true);
  const open = Boolean(anchorEl);


  const dispatch = useDispatch()
  const { allCategory, loading, error } = useSelector(state => state.categoryReducer)
  const { allItems, loadingItem, errorItem } = useSelector(state => state.itemReducer)

  // get all category
  useEffect(() => {
    dispatch(fetchCategories())
  }, [itemAddResponse])

  // get all items
  useEffect(() => {
    dispatch(fetchItems())
  }, [itemAddResponse])

  useEffect(() => {
    if (itemDetails.itemImage?.type == "image/png" || itemDetails.itemImage?.type == "image/jpg" || itemDetails.itemImage?.type == "image/jpeg") {
      setPreview(URL.createObjectURL(itemDetails.itemImage))
      setImageFileStatus(true)
    } else {
      setItemDetails({ ...itemDetails, itemImage: "" })
      setPreview(addImage)
      setImageFileStatus(false)
    }
  }, [itemDetails.itemImage])

  useEffect(() => {
    handleSubmitBttnStatus()
  }, [itemDetails])

  // for add item
  const handleSubmitBttnStatus = () => {
    if (itemDetails.itemImage && itemDetails.itemCategory && itemDetails.itemName && itemDetails.itemPrice) {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }
  }

  // for add item
  const handleCloseModal = () => {
    setItemDetails({
      itemImage: "", itemCategory: "", itemName: "", itemPrice: ""
    })
    setShow(false);
  }

  const handleClick = (event, itmid) => {
    setAnchorEl(event.currentTarget);
    setItemId(itmid)
  };

  // add item
  const handleSubmit = async () => {
    const { itemImage, itemCategory, itemName, itemPrice } = itemDetails
    if (itemImage && itemCategory && itemName && itemPrice) {
      const reqbody = new FormData()
      reqbody.append("itemImage", itemImage)
      reqbody.append("itemCategory", itemCategory)
      reqbody.append("itemName", itemName)
      reqbody.append("itemPrice", itemPrice)
      const token = sessionStorage.getItem("token")
      // console.log(token);
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result = await addItemAPI(reqbody, reqHeader)
          if (result.status == 200) {
            handleCloseModal()
            setitemAddResponse(result)
            console.log(result);
          } else {
            // console.log(result.response.data);
            toast.warning(result.response.data)
          }
        } catch (error) {
          toast.warning(error.response.data)
          console.log(error);
        }
      } else {
        toast.warning("token missin")
      }
    } else {
      toast.error("Please fill the form completely!")
    }
  }

  // delete category
  const handleDelete = async (itmid) => {
    setAnchorEl(null);
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteItemAPI(itmid, reqHeader)
        if (result.status == 200) {
          dispatch(fetchItems())
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
        toast.warning(error.response.data)
      }
    }
  };

  const handleSideBar = () => {
    setSideBar(!sideBar)
  }

  // console.log(allItems);


  return (
    <div className='flex justify-end' style={{ width: "100%", minHeight: "100vh" }}>
      <SideNav sideBar={sideBar} setSideBar={setSideBar}/>
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#010036", paddingTop: "30px", paddingBottom: "25px" }}>

        {loading ?
          <div className='d-flex justify-content-center align-items-center w-100' style={{ height: "50vh" }}>
            <svg width={0} height={0}>
              <defs>
                <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e01cd5" />
                  <stop offset="100%" stopColor="#1CB5E0" />
                </linearGradient>
              </defs>
            </svg>
            <CircularProgress className='me-2' sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} /> <h5 className='text-white'>Logging in</h5>
          </div>
          :
          <Grid rowSpacing={3} container>
            {/* button row */}
            <Grid item xs={12} className='flex items-start justify-between pe-5'>
              <button onClick={handleShow} className='btn btn-primary rounded ms-5'>Add Item</button>
              <i onClick={handleSideBar} class="fa-solid fa-bars text-white text-end fa-xl" ></i>
            </Grid>
            {/* 1st row */}
            {allCategory?.length > 0 ?
              allCategory.map(category => (
                <Grid key={category?._id} item xs={12} >
                  <div>
                    <h6 className='categoryHeading text-white w-auto'>{category?.categoryName}</h6>
                    <Grid container spacing={1} rowSpacing={4}>
                      {allItems?.length > 0 ?
                        allItems.map(items => (
                          items?.itemCategory == category?.categoryName &&
                          <Grid key={items?._id} item xs={6} sm={4} md={3} lg={2} className='flex justify-center'>
                            <div className='categoryContainer' style={{ height: "144.5px", width: "130.5px" }}>
                              <MoreVertIcon className='categoryCheck' aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={(e) => handleClick(e, items?._id)} />
                              <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleDelete}
                                MenuListProps={{
                                  'aria-labelledby': 'basic-button',
                                }}
                                sx={{ display: editMenuDisplay ? "none" : "block" }}
                              >
                                <EditAdminItem setAnchorEl={setAnchorEl} setEditMenuDisplay={setEditMenuDisplay} category={category} itemId={itemId} allItems={allItems} />
                                <MenuItem onClick={() => handleDelete(itemId)}>Delete</MenuItem>
                              </Menu>

                              <img className='categoryImage' style={{ width: "50%" }} src={`${SERVER_URL}/uploads/${items?.itemImage}`} alt="Image" />
                              <h6 className='categoryName' style={{ letterSpacing: "-0.6px" }}>{items?.itemName.slice(0, 10)}..</h6>
                              <p className='subCategories'>₹ {items?.itemPrice}</p>
                            </div>
                          </Grid>
                        ))
                        :
                        <div className='fw-bolder text-danger m-5 text-center'>No Item to show</div>
                      }
                    </Grid>
                  </div>
                </Grid>
              ))
              :
              <div className='fw-bolder text-danger m-5 text-center'>No Item to show</div>
            }
          </Grid>
        }

        <Modal
          show={show}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
        >
          <ToastContainer position='top-center' theme='colored' autoClose={1000} />
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body className='flex flex-col'>
            {/* modal body */}
            <label>
              <input onChange={e => setItemDetails({ ...itemDetails, itemImage: e.target.files[0] })} type="file" style={{ display: "none" }} />
              <img className='img-fluid border-2 border-solid border-black rounded-md' width={"75px"} src={preview} alt="" />
            </label>
            {!imageFileStatus &&
              <div className="text-warning fw-semibold my-2">Upload only following file types(jpeg,jpg,png)</div>
            }
            <TextField onChange={e => setItemDetails({ ...itemDetails, itemCategory: e.target.value })} id="standard-basic" label="Item Category" variant="standard" />
            <TextField onChange={e => setItemDetails({ ...itemDetails, itemName: e.target.value })} id="standard-basic" label="Item Name" variant="standard" />
            <TextField onChange={e => setItemDetails({ ...itemDetails, itemPrice: e.target.value })} id="standard-basic" label="Items price(per Kg/Pcs)" variant="standard" />

          </Modal.Body>
          <Modal.Footer>
            <Button className='rounded-md' variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={disableSubmit} className='rounded-md' variant="primary">Submit</Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default AdminItems
