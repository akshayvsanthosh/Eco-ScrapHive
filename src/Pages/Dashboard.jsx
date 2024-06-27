import React from 'react'
import Header from '../Components/Header';
import Headroom from 'react-headroom';
import Footer from '../Components/Footer';
import Grid from '@mui/material/Grid';
import avatar from '../assets/avatar.png'
import HomeIcon from '@mui/icons-material/Home';
import OutboxIcon from '@mui/icons-material/Outbox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function Dashboard() {

    return (
        <>
            {/* navbar */}
            {/* <Headroom className='position-absolute top-0 z-3 w-100'><Header /></Headroom> */}

            <div className='dashboardContainer' style={{ minHeight: "100vh", width: "100%" }}>
                <Grid container spacing={1.5} sx={{ minHeight: "85vh" }}>
                    {/* left panel */}
                    <Grid item xs={3}>
                        <div className='h-100'>
                            {/* divided left panel into 2 panel */}
                            <Grid container rowSpacing={1.5} height={"100vh"}>
                                {/* top panel*/}
                                <Grid item xs={12} sx={{ height: "20%" }}>
                                    <div className='h-100 bg-slate-200' style={{ borderRadius: "3px" }}>
                                        <Grid container spacing={0} className='h-100'>
                                            <Grid item xs={4}>
                                                <div>
                                                    <img className='rounded-circle' style={{padding:"15px"}} src={avatar} alt="" />
                                                </div>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <div>
                                                    <p className='mb-0 mt-4'>Hello,</p>
                                                    <h5 className='fw-bolder'>Max Miller</h5>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                {/* bottom panel */}
                                <Grid item xs={12} sx={{ height: "82%", }}>
                                    <div className='h-100 bg-slate-200' style={{ borderRadius: "3px", paddingTop:"20px" }}>
                                        <h5 className='fw-bolder' style={{padding:"23px 0px 0px 27px"}}>
                                            <Link to={'/'} className='text-decoration-none text-gray-700'>
                                                <HomeIcon sx={{marginTop:"-6px", marginRight:"20px"}}/>
                                                Home
                                            </Link>
                                        </h5>
                                        <h5 className='fw-bolder' style={{padding:"23px 0px 0px 27px"}}>
                                            <Link to={'/orders'} className='text-decoration-none text-gray-700'>
                                                <OutboxIcon sx={{marginTop:"-6px", marginRight:"20px"}}/>
                                                Bookings
                                            </Link>
                                        </h5>
                                        <h5 className='fw-bolder' style={{padding:"23px 0px 0px 27px"}}>
                                            <Link className='text-decoration-none text-gray-700'>
                                                <LogoutIcon sx={{marginTop:"-6px", marginRight:"20px"}}/>
                                                Logout
                                            </Link>
                                        </h5>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    {/* right panel */}
                    <Grid item xs={9}>
                        <div className='h-100 bg-slate-200' style={{ borderRadius: "3px", padding:"22px 18px 10px 45px" }}>
                            <h5 className='fw-bolder'>
                                Personal Information
                                <Link className='text-decoration-none ms-5 fw-medium text-base'>Edit</Link>
                            </h5>
                            <TextField InputProps={{ readOnly: true, }} defaultValue="Max Miller" sx={{width:"35%", marginTop:"18px"}} id="outlined-basic" label="Name" variant="outlined" />

                            <h5 className='fw-bolder' style={{marginTop:"55px"}}>
                                Email Address
                                <Link className='text-decoration-none ms-5 fw-medium text-base'>Edit</Link>
                            </h5>
                            <TextField InputProps={{ readOnly: true, }} defaultValue="max@gamil.com" sx={{width:"35%", marginTop:"18px"}} id="outlined-basic" label="Email" variant="outlined" />

                            <h5 className='fw-bolder' style={{marginTop:"55px"}}>
                                Mobile Number
                                <Link className='text-decoration-none ms-5 fw-medium text-base'>Edit</Link>
                            </h5>
                            <TextField InputProps={{ readOnly: true, }} defaultValue="6282434549" sx={{width:"35%", marginTop:"18px"}} id="outlined-basic" label="Mobile" variant="outlined" />

                            <h6 className='fw-bolder' style={{marginTop:"55px"}}>
                            FAQs
                            </h6>
                            <p className='fw-semibold'>What happens when I update my email address (or mobile number)?</p>
                            <p className=''>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>

                            <p className='fw-semibold'>When will my Eco-ScrapHive account be updated with the new email address (or mobile number)?</p>
                            <p className=''>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>

                            <p className='fw-semibold'>What happens to my existing Eco-ScrapHive account when I update my email address (or mobile number)?</p>
                            <p className=''>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>

                            
                        </div>
                    </Grid>
                </Grid>

            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Dashboard
