import React from 'react'
import Header from '../Components/Header';
import Headroom from 'react-headroom';
import Footer from '../Components/Footer';
import Grid from '@mui/material/Grid';
import demoOrderImg from '../assets/ResidentialScrap.avif'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

function Orders() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* navbar */}
            <Headroom className='position-absolute top-0 z-3 w-100'><Header /></Headroom>

            <div className='d-flex flex-column align-items-center orderContainer' style={{ minHeight: "100vh", width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
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
                                                    <img style={{ borderRadius: "7px" }} src={demoOrderImg} alt="Image" />
                                                </div>
                                            </Grid>
                                            {/* 2nd col in 1st */}
                                            <Grid item xs={8}>
                                                <div className='h-100 ps-5'>
                                                    <p className='orderDetailsHeading'>Paper, Plastic, Meta..</p>
                                                    <p>05/28/2024</p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                {/* 2nd col */}
                                <Grid item xs={2} className='flex justify-end'>
                                    <div className='h-100'>
                                        <p className='orderDetailsHeading'>₹ __</p>
                                    </div>
                                </Grid>
                                {/* 3rd col */}
                                <Grid item xs={3} className='flex justify-end'>
                                    <div className='h-100 flex justify-center pt-1'>
                                        <span className='bg-warning orderStatusIcon'></span>
                                        <p className='orderDetailsHeading ps-2' style={{ marginTop: "-7px" }}>Processing</p>
                                    </div>
                                </Grid>
                                {/* 4th col */}
                                <Grid item xs={1}>
                                    <div className='h-100'>
                                        <div className='flex justify-end'>
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls={open ? 'long-menu' : undefined}
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                                className='p-0'
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                            <Menu
                                                id="long-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                PaperProps={{
                                                    style: {
                                                        maxHeight: "90px",
                                                        width: '10ch',
                                                    },
                                                }}
                                            >

                                                <MenuItem onClick={handleClose}>
                                                    <Link to={'/booking'} className='w-100 text-decoration-none text-black'>Edit</Link>
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    <Link className='text-decoration-none text-black'>Cancel</Link>
                                                </MenuItem>

                                            </Menu>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                    <Grid item xs={12}>
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
                                                    <img style={{ borderRadius: "7px" }} src={demoOrderImg} alt="Image" />
                                                </div>
                                            </Grid>
                                            {/* 2nd col in 1st */}
                                            <Grid item xs={8}>
                                                <div className='h-100 ps-5'>
                                                    <p className='orderDetailsHeading'>Plastic, Metals</p>
                                                    <p>01/12/2024</p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                {/* 2nd col */}
                                <Grid item xs={2} className='flex justify-end'>
                                    <div className='h-100'>
                                        <p className='orderDetailsHeading'>₹ 1500</p>
                                    </div>
                                </Grid>
                                {/* 3rd col */}
                                <Grid item xs={3} className='flex justify-end'>
                                    <div className='h-100 flex justify-center pt-1'>
                                        <span className='bg-success orderStatusIcon '></span>
                                        <p className='orderDetailsHeading ps-2' style={{ marginTop: "-7px" }}>Completed</p>
                                    </div>
                                </Grid>
                                {/* 4th col */}
                                <Grid item xs={1}>
                                    
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Orders
