import React, { useEffect, useState } from 'react'
import SideNav from '../Components/SideNav'
import Grid from '@mui/material/Grid';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import addImage from '../assets/addImage.png'
import TextField from '@mui/material/TextField';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, deleteCategoryAPI } from '../services/allAPI';
import SERVER_URL from '../services/server_url';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Redux/slices/categorySlice';
import CircularProgress from '@mui/material/CircularProgress';
import EditAdminCategory from '../Components/EditAdminCategory';

function AdminCategory() {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(addImage)
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [imageFileStatus, setImageFileStatus] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categoryDetails, setCategoryDetails] = useState({
    categoryImage: "", categoryName: "", categoryItems: ""
  })
  const [categoryAddResponse, setCategoryAddResponse] = useState(null)
  const [catId, setCatId] = useState("")

  const [editMenuDisplay, setEditMenuDisplay] = useState(false)

  const dispatch = useDispatch()
  const { allCategory, loading, error } = useSelector(state => state.categoryReducer)

  const open = Boolean(anchorEl);

  useEffect(() => {
    if (categoryDetails.categoryImage?.type == "image/png" || categoryDetails.categoryImage?.type == "image/jpg" || categoryDetails.categoryImage?.type == "image/jpeg") {
      setPreview(URL.createObjectURL(categoryDetails.categoryImage))
      setImageFileStatus(true)
    } else {
      setCategoryDetails({ ...categoryDetails, categoryImage: "" })
      setPreview(addImage)
      setImageFileStatus(false)
    }
  }, [categoryDetails.categoryImage])

  useEffect(() => {
    handleSubmitBttnStatus()
  }, [categoryDetails])

  // get all category
  useEffect(() => {
    dispatch(fetchCategories())
  }, [categoryAddResponse])

  const handleClick = (event, cid) => {
    // console.log(cid);
    setAnchorEl(event.currentTarget);
    setCatId(cid)
    // console.log(catId);
  };

  const handleCloseModal = () => {
    setCategoryDetails({
      categoryImage: "", categoryName: "", categoryItems: ""
    })
    setShow(false);
  }

  const handleShow = () => setShow(true);

  const handleSubmitBttnStatus = () => {
    if (categoryDetails.categoryImage && categoryDetails.categoryName && categoryDetails.categoryItems) {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }
  }

  // add categoey
  const handleSubmit = async () => {
    const { categoryImage, categoryName, categoryItems } = categoryDetails
    if (categoryImage && categoryName && categoryItems) {

      const reqbody = new FormData()
      reqbody.append("categoryImage", categoryImage)
      reqbody.append("categoryName", categoryName)
      reqbody.append("categoryItems", categoryItems)
      console.log(reqbody);
      const token = sessionStorage.getItem("token")
      console.log(token);
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        try {
          const result = await addCategoryAPI(reqbody, reqHeader)
          if (result.status == 200) {
            handleCloseModal()
            setCategoryAddResponse(result)
            console.log(result);
          } else {
            toast.warning(result.response.data)
          }
        } catch (error) {
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
  const handleDelete = async (cid) => {
    setAnchorEl(null);
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteCategoryAPI(cid, reqHeader)
        if (result.status == 200) {
          dispatch(fetchCategories())
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };



  return (
    <div className='flex justify-end' style={{ width: "100%", minHeight: "100vh" }}>
      <SideNav />
      <div style={{ minHeight: "100vh", width: "85%", backgroundColor: "#010036", paddingTop: "30px" }}>

        <Grid container columnSpacing={2} rowSpacing={5} sx={{ marginLeft: "0px", maxWidth: "100%" }}>

          <Grid item xs={12} >
            <button onClick={handleShow} className='btn btn-primary rounded ms-5'>Add Category</button>
          </Grid>

          {/* first row */}
          <Grid item xs={12} >
            <div>
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
                <Grid container spacing={3} rowSpacing={7}>
                  {allCategory?.length > 0 ?
                    allCategory.map(category => (
                      <Grid key={category?._id} item xs={3} className='flex justify-center'>
                        <div className='categoryContainer' style={{ width: "160.5px", height: "184.5px" }}>
                          <MoreVertIcon className='categoryCheck' aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={(e) => handleClick(e, category?._id)} />
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
                            <EditAdminCategory setAnchorEl={setAnchorEl} setEditMenuDisplay={setEditMenuDisplay} catId={catId} allCategory={allCategory} />
                            <MenuItem onClick={() => handleDelete(catId)}>Delete</MenuItem>
                          </Menu>
                          <img className='categoryImage' src={`${SERVER_URL}/uploads/${category.categoryImage}`} alt="Image" />
                          <h6 className='categoryName'>{category.categoryName}</h6>
                          <p className='subCategories'>{category.categoryItems.slice(0, 27)}...</p>
                        </div>
                      </Grid>
                    ))
                    :
                    <div className='fw-bolder text-danger m-5 text-center'>No Category to show</div>
                  }
                </Grid>
              }
            </div>
          </Grid>
        </Grid>
        <ToastContainer position='top-center' theme='colored' autoClose={1000} />
      </div>

      <Modal
        show={show}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='flex flex-col'>
          {/* modal body */}
          <label>
            <input onChange={e => setCategoryDetails({ ...categoryDetails, categoryImage: e.target.files[0] })} type="file" style={{ display: "none" }} />
            <img className='img-fluid border-2 border-solid border-black rounded-md' width={"75px"} src={preview} alt="" />
          </label>
          {!imageFileStatus &&
            <div className="text-warning fw-semibold my-2">Upload only following file types(jpeg,jpg,png)</div>
          }
          <TextField onChange={e => setCategoryDetails({ ...categoryDetails, categoryName: e.target.value })} id="standard-basic" label="Category Name" variant="standard" />
          <TextField onChange={e => setCategoryDetails({ ...categoryDetails, categoryItems: e.target.value })} id="standard-basic" label="Items example" variant="standard" />

        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded-md' variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={disableSubmit} className='rounded-md' variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>

      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleDelete}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{display:editMenuDisplay?"none":"block"}}
      >
        {allCategory.find(category=>category._id==catId&&
          <EditAdminCategory setAnchorEl={setAnchorEl} setEditMenuDisplay={setEditMenuDisplay} category={category}/>)}
        <MenuItem onClick={() => handleDelete(catId)}>Delete</MenuItem>
      </Menu> */}
    </div>
  )
}

export default AdminCategory


{/* 
<h6 className='categoryName'>PLASTIC</h6>
<p className='subCategories'>Fiber, Hard Plastic, PVC</p>                  
               
<h6 className='categoryName'>METALS</h6>
<p className='subCategories'>Alum channel, Aluminium</p>
                 
<h6 className='categoryName'>MOTOR</h6>
<p className='subCategories'>Engine, Fan, Motor, Pump</p>
               
<h6 className='categoryName'>E WASTE</h6>
<p className='subCategories'>Cooler big, Cooler small</p>
                 
<h6 className='categoryName'>VEHICLE</h6>
<p className='subCategories'>Four wheeler, Two wheeler</p>
                  
<h6 className='categoryName'>OTHERS</h6>
<p className='subCategories'>AC aluminium, AC copper</p>
*/}