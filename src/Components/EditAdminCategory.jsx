import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import SERVER_URL from '../services/server_url';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editCategoryAPI } from '../services/allAPI';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../Redux/slices/categorySlice';

function EditAdminCategory({ setAnchorEl, setEditMenuDisplay, catId, allCategory }) {
    const [modalShow, setModalShow] = useState(false);
    const [preview, setPreview] = useState("")
    const [imageFileStatus, setImageFileStatus] = useState(false)
    const [categoryDetails, setCategoryDetails] = useState({
        categoryImage: "", categoryName: "", categoryItems: "", categoryId: catId
    })
    const [categoryImg, setCategoryImg] = useState({
        categoryImage: ""
    })
    const dispatch = useDispatch()

    useEffect(() => {
        if (categoryDetails.categoryImage?.type == "image/png" || categoryDetails.categoryImage?.type == "image/jpg" || categoryDetails.categoryImage?.type == "image/jpeg") {
            setPreview(URL.createObjectURL(categoryDetails.categoryImage))
            setImageFileStatus(true)
        } else {
            setCategoryDetails({ ...categoryDetails, categoryImage: "" })
            setPreview("")
            setImageFileStatus(false)
        }
    }, [categoryDetails.categoryImage])
    // console.log(categoryDetails);

    // modal close
    const handleCloseModal = () => {
        setCategoryDetails({
            categoryImage: "", categoryName: "", categoryItems: ""
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
        allCategory.find(category => {
            if (category?._id == catId) {
                // console.log(category)
                setCategoryImg({ categoryImage: category?.categoryImage })
                setCategoryDetails({
                    categoryImage: "", categoryName: category?.categoryName, categoryItems: category?.categoryItems, categoryId: category?._id
                })
            }
        })
    }

    // edit
    const handleSubmit = async () => {
        const { categoryImage, categoryName, categoryItems, categoryId } = categoryDetails
        if (categoryName && categoryItems) {
            const reqbody = new FormData()
            preview ? reqbody.append("categoryImage", categoryImage) : reqbody.append("categoryImage", categoryImg.categoryImage)
            reqbody.append("categoryName", categoryName)
            reqbody.append("categoryItems", categoryItems)
            // console.log(reqbody);
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type": preview ? "multipart/form-data" : "application/json",
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await editCategoryAPI(categoryId, reqbody, reqHeader)
                    if (result.status == 200) {
                        handleCloseModal()
                        dispatch(fetchCategories())
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
                        <input onChange={e => setCategoryDetails({ ...categoryDetails, categoryImage: e.target.files[0] })} type="file" style={{ display: "none" }} />
                        <img className='img-fluid border-2 border-solid border-black rounded-md' width={"75px"} src={preview ? preview : `${SERVER_URL}/uploads/${categoryImg.categoryImage}`} alt="" />
                    </label>
                    {!imageFileStatus &&
                        <div className="text-warning fw-semibold my-2">Upload only following file types(jpeg,jpg,png)</div>
                    }
                    <TextField value={categoryDetails.categoryName} onChange={e => setCategoryDetails({ ...categoryDetails, categoryName: e.target.value })} id="standard-basic" label="Category Name" variant="standard" />
                    <TextField value={categoryDetails.categoryItems} onChange={e => setCategoryDetails({ ...categoryDetails, categoryItems: e.target.value })} id="standard-basic" label="Items example" variant="standard" />
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

export default EditAdminCategory
