import React, { useEffect, useState } from 'react'
import Header from '../Components/Header';
import Headroom from 'react-headroom';
import Footer from '../Components/Footer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../Redux/slices/getOrderSlice';
import SERVER_URL from '../services/server_url';
import { deleteOrder } from '../Redux/slices/deleteOrderSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Orders() {
    const [anchorEl, setAnchorEl] = useState({});
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()
    const [selectedOrder, setSelectedOrder] = useState({
        image: "", itemNames: "", orderStatus: "", price: "", date: "", userName: "", phone: "", pincode: "", state: "", buildingName: "", city: "", areaName: "", landMark: "", addressType: ""
    })
    const { allOrders, loading, error } = useSelector(state => state.getOrderReducer)
    const [show, setShow] = useState(false);
    const handleModalClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])

    const handleDelete = async (orderId) => {
        // console.log(orderId);
        try {
            const result = await dispatch(deleteOrder(orderId))
            if (result.meta.requestStatus === 'fulfilled') {
                console.log('Order deleted successfully:', result.payload);
                dispatch(fetchOrders())
                handleClose()
            } else if (result.meta.requestStatus === 'rejected') {
                toast.warning('Failed to delete order')
                console.log('Failed to delete order:', result.payload || result.error.message);
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


    // console.log(allOrders);
    // allOrders.map(item=>console.log(JSON.parse(item.itemNames[0]).join(', ')))

    return (
        <>
            {/* navbar */}
            <Headroom className='position-absolute top-0 z-3 w-100'><Header /></Headroom>

            <div className='d-flex flex-column align-items-center orderContainer pb-5' style={{ minHeight: "100vh", width: "100%" }}>
                <Grid container spacing={2}>
                    {allOrders.length > 0 ?
                        allOrders.map(order => (
                            <Grid key={order?._id} item xs={12}>
                                {/* orders container */}
                                <div className='orderDetailsBox'>
                                    {/* division of container to 3 */}
                                    <Grid container spacing={0} sx={{ minHeight: "109px" }}>
                                        {/* 1st col */}
                                        <Grid item xs={6}>
                                            <div className='h-100'>
                                                {/* division of 1st col into 2 col */}
                                                <Grid container spacing={0} className='h-100'>
                                                    {/* 1st col in 1st */}
                                                    <Grid item xs={3}>
                                                        <div className='h-100'>
                                                            <img style={{ borderRadius: "7px" }} src={`${SERVER_URL}/uploads/${order.image}`} alt="Image" />
                                                        </div>
                                                    </Grid>
                                                    {/* 2nd col in 1st */}
                                                    <Grid item xs={8}>
                                                        <div className='h-100 ps-5'>
                                                            <p className='orderDetailsHeading'>{order?.itemNames.slice(0, 18)}..</p>
                                                            <p>{order?.address.date.split('T')[0]}</p>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </Grid>
                                        {/* 2nd col */}
                                        <Grid item xs={2} className='flex justify-end'>
                                            <div className='h-100'>
                                                <p className='orderDetailsHeading'>₹ {order?.price}</p>
                                            </div>
                                        </Grid>
                                        {/* 3rd col */}
                                        <Grid item xs={3} className='flex justify-end'>
                                            <div className='h-100 flex justify-center pt-1'>
                                                <span className={`${order?.orderStatus == 10 ? "bg-warning" : order?.orderStatus == 20 ? "bg-yellow-400" : "bg-success"}  orderStatusIcon`}></span>
                                                <p className='orderDetailsHeading ps-2' style={{ marginTop: "-7px" }}>{order?.orderStatus == 10 ? 'Processing' : order?.orderStatus == 20 ? 'Out for pickup' : 'Completed'}</p>
                                            </div>
                                        </Grid>
                                        {/* 4th col */}
                                        <Grid item xs={1}>
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
                                                        {(order?.orderStatus == 10) &&
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
                            </Grid >
                        ))
                        :
                        <div className='fw-bolder text-danger m-5 text-center'>No Orders to show</div>
                    }
                </Grid >
            </div >

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

            {/* Footer */}
            < Footer />
        </>
    )
}

export default Orders
