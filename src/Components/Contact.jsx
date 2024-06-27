import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function Contact() {
    return (
        <div className='d-flex flex-column align-items-center contactContainer' style={{ minHeight: "100vh", width: "100%", backdropFilter: "blur(5px)" }}>
            <Grid container spacing={2} sx={{ minHeight: "100vh",marginTop:"0px" }}>
                <Grid item xs={6}>
                    <div className='contactTextDiv'>
                        <h1 className='contactHeading'>Eco-ScrapHive</h1>
                        <h2 className='contactSubHeading'>Shaping Tomorrow's <br />Future<span style={{ color: "yellow" }}>  Today!</span></h2>
                        <p style={{ color: "#fff", marginTop: "17px" }}>Want to make a difference? Reach out to us!.</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className='h-100 pe-5 d-flex flex-column justify-content-center align-items-center'>
                        <Grid container spacing={2} className='contactBox'>
                            <Grid item xs={6}>
                                <div><TextField className='w-100' id="outlined-basic" label="Name*" variant="outlined" /></div>
                            </Grid>
                            <Grid item xs={6}>
                                <div><TextField className='w-100' id="outlined-basic" label="Phone Number*" variant="outlined" /></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div><TextField className='w-100' id="outlined-basic" label="Email*" variant="outlined" /></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div><TextField className='w-100' id="outlined-multiline-static" label="Message*" multiline rows={4} defaultValue="" /></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div><button className='btn btn-primary' style={{width:"78px", borderRadius:"8px", fontSize:"19px"}}>SEND</button></div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
