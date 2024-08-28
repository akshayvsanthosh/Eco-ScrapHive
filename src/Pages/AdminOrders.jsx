import React, { useEffect, useState } from 'react'
import SideNav from '../Components/SideNav'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { getAllAdminOrdersAPI, updateOrderPriceAPI, updateOrderStatusAPI } from '../services/allAPI';
import SERVER_URL from '../services/server_url';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../Redux/slices/deleteOrderSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputLabel from '@mui/material/InputLabel';
import { fetchOrders } from '../Redux/slices/getOrderSlice';

function AdminOrders() {
  const [anchorEl, setAnchorEl] = useState({});
  const [amount, setAmount] = useState({})
  const [invalidAmount, setInvalidAmount] = useState({})
  const [allOrders, setAllOrders] = useState([])
  const [submitOrderId, setSubmitOrderId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState({
    image: "", itemNames: "", orderStatus: "", price: "", date: "", userName: "", phone: "", pincode: "", state: "", buildingName: "", city: "", areaName: "", landMark: "", addressType: ""
  })
  const [sideBar, setSideBar] = useState(false)
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleModalClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    getAllAdminOrders()
  }, [])

  useEffect(() => {
    const initialAmounts = allOrders.reduce((acc, order) => {
      acc[order._id] = order.price;
      return acc;
    }, {});

    setAmount(initialAmounts);
  }, [allOrders]);

  // getAllAdminOrders
  const getAllAdminOrders = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllAdminOrdersAPI(reqHeader)
        if (result.status == 200) {
          setAllOrders(result.data.reverse())
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  // updateOrderStatus
  const updateOrderStatus = async (orderToEdit, status) => {
    const { userName, phone, pincode, state, date, buildingName, city, areaName, landMark, addressType } = orderToEdit.address
    const { image, itemNames, price, orderStatus, userId, _id } = orderToEdit
    // console.log(userName, phone, pincode, state, date, buildingName, city, areaName, landMark, addressType, image, itemNames, price, status, userId, _id);

    if (userName && phone && pincode && state && date && buildingName && city && areaName && landMark && image && itemNames && orderStatus && userId && _id) {
      const reqbody = new FormData()
      reqbody.append("image", image)
      reqbody.append("itemNames", itemNames)
      reqbody.append("address[userName]", userName)
      reqbody.append("address[phone]", phone)
      reqbody.append("address[pincode]", pincode)
      reqbody.append("address[state]", state)
      reqbody.append("address[date]", date)
      reqbody.append("address[buildingName]", buildingName)
      reqbody.append("address[city]", city)
      reqbody.append("address[areaName]", areaName)
      reqbody.append("address[landMark]", landMark)
      reqbody.append("address[addressType]", addressType)
      reqbody.append("price", price ? price : "")
      reqbody.append("orderStatus", status)
      reqbody.append("userId", userId)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result = await updateOrderStatusAPI(_id, reqbody, reqHeader)
          if (result.status == 200) {
            // console.log(result);
            getAllAdminOrders()
            dispatch(fetchOrders())
          } else {
            toast.warning(result.response.data)
          }
        } catch (error) {
          toast.warning(error.response.data)
          console.log(error);
        }
      } else {
        toast.warning("token missing")
      }
    } else {
      toast.warning("Some fields are missing! Try again after some times!")
    }

  }

  // update price
  const updateOrderPrice = async (orderToEdit, amount) => {
    const { userName, phone, pincode, state, date, buildingName, city, areaName, landMark, addressType } = orderToEdit.address
    const { image, itemNames, orderStatus, price, userId, _id } = orderToEdit
    const newPrice = amount[_id]
    // console.log(userName, phone, pincode, state, date, buildingName, city, areaName, landMark, addressType, image, itemNames, orderStatus, price, userId, _id, newPrice);

    if (userName && phone && pincode && state && date && buildingName && city && areaName && landMark && image && itemNames && orderStatus && userId && _id && newPrice) {
      const reqbody = new FormData()
      reqbody.append("image", image)
      reqbody.append("itemNames", itemNames)
      reqbody.append("address[userName]", userName)
      reqbody.append("address[phone]", phone)
      reqbody.append("address[pincode]", pincode)
      reqbody.append("address[state]", state)
      reqbody.append("address[date]", date)
      reqbody.append("address[buildingName]", buildingName)
      reqbody.append("address[city]", city)
      reqbody.append("address[areaName]", areaName)
      reqbody.append("address[landMark]", landMark)
      reqbody.append("address[addressType]", addressType)
      reqbody.append("price", newPrice)
      reqbody.append("orderStatus", orderStatus)
      reqbody.append("userId", userId)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result = await updateOrderPriceAPI(_id, reqbody, reqHeader)
          if (result.status == 200) {
            // console.log(result);
            updateOrderStatus(result.data, 30)
            getAllAdminOrders()
            setAmount("")
            setSubmitOrderId(null)
            dispatch(fetchOrders())
          } else {
            toast.warning(result.response.data)
          }
        } catch (error) {
          toast.warning(error.response.data)
          console.log(error);
        }
      } else {
        toast.warning("token missing")
      }
    } else {
      toast.warning("Some fields are missing! Try again after some times!")
    }
  }

  const handleAmount = (e, id) => {
    if (!!e.target.value.match(/^[1-9]\d*$/)) {
      setInvalidAmount(prevState => ({ ...prevState, [id]: false }))
      setAmount(prevAmount => ({ ...prevAmount, [id]: e.target.value }));
      setSubmitOrderId(id)
      // const orderToEdit = allOrders.find(order => order._id == id)
      // console.log(orderToEdit);
      // updateOrderPrice(orderToEdit,e.target.value)
    } else {
      setInvalidAmount(prevState => ({ ...prevState, [id]: true }));
      setSubmitOrderId(null)
      setAmount(prevAmount => ({ ...prevAmount, [id]: e.target.value }));
    }
  }

  const handleSubmit = (id) => {
    const orderToEdit = allOrders.find(order => order._id == id)
    //   console.log(orderToEdit);
    // console.log(amount);    
    updateOrderPrice(orderToEdit, amount)
  }

  const handleChange = (event, id) => {
    const orderToEdit = allOrders.find(order => order._id == id)
    // console.log(orderToEdit);
    updateOrderStatus(orderToEdit, event.target.value)
  };

  const handleDelete = async (orderId) => {
    // console.log(orderId);
    try {
      const result = await dispatch(deleteOrder(orderId))
      if (result.meta.requestStatus === 'fulfilled') {
        // console.log('Order deleted successfully:', result.payload);
        getAllAdminOrders()
        handleClose()
      } else if (result.meta.requestStatus === 'rejected') {
        toast.warning('Failed to delete order')
        // console.log('Failed to delete order:', result.payload || result.error.message);
      }
    } catch (error) {
      console.log('An unexpected error occurred:', error);
    }
  }

  const handleClick = (event, id) => {
    setAnchorEl((prevState) => ({
      ...prevState,
      [id]: event.currentTarget,
    }));
  };

  const handleClose = (id) => {
    setAnchorEl((prevState) => ({
      ...prevState,
      [id]: null,
    }));
  };

  const handleModal = (id) => {
    allOrders.find(order => order._id == id && setSelectedOrder({
      image: order?.image, itemNames: order?.itemNames, orderStatus: order?.orderStatus, price: order?.price, date: order?.address?.date, userName: order?.address?.userName, phone: order?.address?.phone, pincode: order?.address?.pincode, state: order?.address?.state, buildingName: order?.address?.buildingName, city: order?.address?.city, areaName: order?.address?.areaName, landMark: order?.address?.landMark, addressType: order?.address?.addressType
    }))
    handleClose(id)
    handleShow()
  }

  const handleSideBar = () => {
    setSideBar(!sideBar)
  }

  // console.log(allOrders);
  // console.log(amount);
  // console.log(selectedOrder);

  return (
    <div className='flex justify-end' style={{ width: "100%", minHeight: "100vh" }}>
      <SideNav sideBar={sideBar} setSideBar={setSideBar}/>
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#010036", backdropFilter: "blur(5px)" }}>
        <i onClick={handleSideBar} class="fa-solid fa-bars text-white text-end fa-xl mt-4" style={{ marginLeft: "93%" }}></i>
        <div className='d-flex flex-column align-items-center adminOders' style={{ minHeight: "100vh", width: "100%" }}>
          <Grid container spacing={2}>
            {allOrders?.length > 0 ?
              allOrders?.map(order => (
                <Grid key={order?._id} item xs={12}>
                  {/* orders container */}
                  <div className='orderDetailsBox'>
                    {/* division of container to 3 */}
                    <Grid container spacing={0} sx={{ minHeight: "109px" }}>
                      {/* 1st col */}
                      <Grid item xs={12} md={6}>
                        <div className='h-100'>
                          {/* division of 1st col into 2 col */}
                          <Grid container spacing={0} className='h-100'>
                            {/* 1st col in 1st */}
                            <Grid item xs={12} md={3}>
                              <div className='h-100'>
                                <img style={{ borderRadius: "7px" }} src={`${SERVER_URL}/uploads/${order?.image}`} alt="Image" />
                              </div>
                            </Grid>
                            {/* 2nd col in 1st */}
                            <Grid item xs={12} md={8}>
                              <div className='h-100 ps-md-5'>
                                <p className='orderDetailsHeading'>{order?.itemNames.slice(0, 18)}..</p>
                                <p>{order?.address.date.split('T')[0]}</p>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      {/* 2nd col */}
                      <Grid item xs={12} md={2} className='flex justify-md-end'>
                        <div className='h-100 d-flex flex-col'>
                          <TextField onChange={e => handleAmount(e, order?._id)} error={invalidAmount[order?._id] || false} helperText={invalidAmount[order?._id] ? "Invalid amount" : ""} value={amount[order?._id]} disabled={order?.orderStatus === 10 || order?.orderStatus === 30} id="standard-start-adornment" sx={{ m: 1, width: '80px' }} InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment>, }} variant="standard" />
                          {submitOrderId === order?._id && (<button onClick={() => handleSubmit(order?._id)} className='btn-link'>Submit</button>)}
                        </div>
                      </Grid>
                      {/* 3rd col */}
                      <Grid item xs={8} md={3} className='flex justify-md-end'>
                        <div className='h-100 flex justify-center pt-1'>

                          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={order?.orderStatus}
                              onChange={e => handleChange(e, order?._id)}
                              label="Age"
                            >
                              <MenuItem value={10}><span className='bg-warning orderStatusIcon me-2'></span>Processing</MenuItem>
                              <MenuItem value={20}><span className='bg-yellow-400 orderStatusIcon me-2'></span>Out for pickup</MenuItem>
                              <MenuItem disabled={order?.price === null || ""} value={30}><span className='bg-success orderStatusIcon me-2'></span>Completed</MenuItem>
                            </Select>
                          </FormControl>

                        </div>
                      </Grid>
                      {/* 4th col */}
                      <Grid item xs={4} md={1}>
                        <div className='h-100'>
                          <div className='flex justify-end'>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={anchorEl[order._id] ? 'long-menu' : undefined}
                              aria-expanded={anchorEl[order._id] ? 'true' : undefined}
                              aria-haspopup="true"
                              onClick={(e) => handleClick(e, order._id)}
                              className="p-0"
                            >
                              <MoreVertIcon />
                            </IconButton>

                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                'aria-labelledby': 'long-button',
                              }}
                              anchorEl={anchorEl[order._id]}
                              open={Boolean(anchorEl[order._id])}
                              onClose={() => handleClose(order._id)}
                              PaperProps={{
                                style: {
                                  maxHeight: '90px',
                                  width: '10ch',
                                },
                              }}
                            >
                              <MenuItem onClick={() => handleModal(order?._id)}>
                                <Link className='text-decoration-none text-black'>View</Link>
                              </MenuItem>
                              {(order?.orderStatus == 10 || order?.orderStatus == 20) &&
                                <MenuItem onClick={() => handleDelete(order?._id)}>
                                  <Link className='text-decoration-none text-black'>Cancel</Link>
                                </MenuItem>
                              }
                            </Menu>
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                  </div>
                </Grid>
              ))
              :
              <div className='fw-bolder text-danger m-5 text-center'>No Orders to show</div>
            }
          </Grid>
        </div>

        <Modal show={show} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid container spacing={2} className='detailsBox p-0'>
              <Grid item xs={12} className='p-3'>
                <div className='flex justify-center'>
                  <img style={{ height: "160px" }} src={`${SERVER_URL}/uploads/${selectedOrder?.image}`} alt="Image" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div><TextField InputProps={{ readOnly: true, }} value={selectedOrder?.itemNames} name='itemNames' className='w-100' id="outlined-itemNames" label="Items" variant="outlined" rows={3} multiline /></div>
              </Grid>
              <Grid item xs={12}>
                <div><TextField InputProps={{ readOnly: true, }} value={selectedOrder?.userName} name='userName' className='w-100' id="outlined-userName" label="User Name" variant="outlined" /></div>
              </Grid>
              <Grid item xs={6}>
                <div><TextField InputProps={{ readOnly: true, }} value={selectedOrder?.price} name='price' className='w-100' id="outlined-price" label="Price" variant="outlined" /></div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Order Status</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedOrder?.orderStatus}
                      label="Order Status"
                      inputProps={{ readOnly: true }}
                    >
                      <MenuItem value={10}>Processing</MenuItem>
                      <MenuItem value={20}>Out for pickup</MenuItem>
                      <MenuItem value={30}>Completed</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div><TextField InputProps={{ readOnly: true, }} value={selectedOrder?.date.split('T')[0]} name='price' className='w-100' id="outlined-price" label="Selected Date" variant="outlined" /></div>
              </Grid>
              <Grid item xs={12}>
                <div><TextField InputProps={{ readOnly: true, }} value={`${selectedOrder?.buildingName}, ${selectedOrder?.areaName}, ${selectedOrder?.city}, ${selectedOrder?.state} - ${selectedOrder?.pincode}`} name='address' className='w-100' id="outlined-address" label="Address" variant="outlined" rows={5} multiline /></div>
              </Grid>
              <Grid item xs={12}>
                <div><TextField InputProps={{ readOnly: true, }} value={selectedOrder?.landMark} name='landMark' className='w-100' id="outlined-landMark" label="LandMark" variant="outlined" /></div>
              </Grid>
            </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default AdminOrders
