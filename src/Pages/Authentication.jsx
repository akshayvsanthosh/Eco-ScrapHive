import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function Authentication({ insideRegister }) {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "100vh", width: "100%", backgroundColor: "#8da6fa", backdropFilter: "blur(5px)" }}>
            <Grid container spacing={2} sx={{ minHeight: "80vh", width: "86%", marginTop: "0px", backgroundColor: "#ffffff7d", borderRadius: "20px" }}>
                <Grid item xs={12} md={6}>
                    <div className='contactTextDiv' style={{ paddingLeft: "10px" }}>
                        <h1 className='contactHeading' style={{ color: "#0dc709d2", textShadow: "-5px 4px 2px #1b511ad2" }}>Eco-ScrapHive</h1>
                        <h2 className='contactSubHeading mt-3' style={{ textShadow: "#1a4a19d2 -3px 1px 4px" }}>Shaping Tomorrow's <br />Future<span style={{ color: "yellow" }}>  Today!</span></h2>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='pe-5 d-flex flex-column justify-content-center align-items-center' style={{ height: "488px" }}>
                        <Grid container spacing={2} className='detailsBox'>
                            {insideRegister &&
                                <>
                                    <Grid item xs={6}>
                                        <div><TextField className='w-100' id="outlined-basic" label="Name*" variant="outlined" /></div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div><TextField className='w-100' id="outlined-basic" label="Phone Number*" variant="outlined" /></div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div><TextField size='small' className='w-100' id="outlined-multiline-static" label="Address*" multiline rows={4} defaultValue="" /></div>
                                    </Grid>
                                </>
                            }
                            <Grid item xs={insideRegister ? 6 : 12}>
                                <div><TextField className='w-100' id="outlined-basic" label="Email*" variant="outlined" /></div>
                            </Grid>
                            <Grid item xs={insideRegister ? 6 : 12}>
                                <div><TextField className='w-100' id="outlined-basic" label="Password*" variant="outlined" /></div>
                            </Grid>
                            <Grid item xs={12}>
                                <div>
                                    {
                                        insideRegister ?
                                            <div className="mt-3">
                                                <button className='btn btn-primary mb-2' style={{ borderRadius: "8px", fontSize: "19px" }}>Register</button>
                                                <p className='mt-2 mb-0'>Already have an Account? Click here to <Link to={'/login'}>Login</Link></p>
                                                <hr className='my-2' />
                                            </div>
                                            :
                                            <div className="mt-3">
                                                <button className='btn btn-primary mb-2' style={{ borderRadius: "8px", fontSize: "19px" }}>Login
                                                    {/* {
                                                        isLoggedIn && <Spinner animation="border" variant="light" />
                                                    } */}
                                                </button>
                                                <p className='mt-2 mb-0'>New User? Click here to <Link to={'/register'}>Register</Link></p>
                                                <hr className='my-2' />
                                            </div>
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12} className='pb-5'>
                                <button
                                    type="button"
                                    className="w-11/12 flex border-1 border-gray-100 items-center justify-center gap-2 text-lg font-medium py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out"
                                >
                                    <i class="fa-brands fa-google"></i>
                                    {insideRegister ? "Sign Up with Google" : "Sign In with Google"}
                                </button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Authentication
