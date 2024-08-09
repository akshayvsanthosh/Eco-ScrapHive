import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import CircularProgress from '@mui/material/CircularProgress';


function Authentication({ insideRegister }) {
    // for validation of inputs
    const [invalidUserDetails, setInvalidUserDetails] = useState({
        userName: false, phone: false, email: false, password: false, pincode: false, state: false, buildingName: false, city: false, areaName: false, landMark: false
    })
    // for details of user
    const [userDetails, setUserDetails] = useState({
        userName: "", phone: "", email: "", password: "", pincode: "", state: "", buildingName: "", city: "", areaName: "", landMark: ""
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()


    // to set input fields valid or not
    const handleInput = (tag) => {
        const { name, value } = tag
        switch (name) {
            case 'userName': !!value.match(/^[A-Za-z ]{3,}$/) ? setInvalidUserDetails({ ...invalidUserDetails, userName: false }) : setInvalidUserDetails({ ...invalidUserDetails, userName: true })
                setUserDetails({ ...userDetails, userName: value })
                break;

            case 'phone': !!value.match(/^[1-9]\d{9}$/) ? setInvalidUserDetails({ ...invalidUserDetails, phone: false }) : setInvalidUserDetails({ ...invalidUserDetails, phone: true })
                setUserDetails({ ...userDetails, phone: value })
                break;

            case 'email': !!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? setInvalidUserDetails({ ...invalidUserDetails, email: false }) : setInvalidUserDetails({ ...invalidUserDetails, email: true })
                setUserDetails({ ...userDetails, email: value })
                break;

            case 'password': !!value.match(/^(([a-zA-Z0-9])+([@#$&*_])*){4,}$/) ? setInvalidUserDetails({ ...invalidUserDetails, password: false }) : setInvalidUserDetails({ ...invalidUserDetails, password: true })
                setUserDetails({ ...userDetails, password: value })
                break;

            case 'pincode': !!value.match(/^[1-9]\d{5}$/) ? setInvalidUserDetails({ ...invalidUserDetails, pincode: false }) : setInvalidUserDetails({ ...invalidUserDetails, pincode: true })
                setUserDetails({ ...userDetails, pincode: value })
                break;

            case 'state': !!value.match(/^[a-zA-Z]+$/) ? setInvalidUserDetails({ ...invalidUserDetails, state: false }) : setInvalidUserDetails({ ...invalidUserDetails, state: true })
                setUserDetails({ ...userDetails, state: value })
                break;

            case 'buildingName': !!value.match(/^[a-zA-Z0-9 ]+$/) ? setInvalidUserDetails({ ...invalidUserDetails, buildingName: false }) : setInvalidUserDetails({ ...invalidUserDetails, buildingName: true })
                setUserDetails({ ...userDetails, buildingName: value })
                break;

            case 'city': !!value.match(/^[a-zA-Z0-9 ]+$/) ? setInvalidUserDetails({ ...invalidUserDetails, city: false }) : setInvalidUserDetails({ ...invalidUserDetails, city: true })
                setUserDetails({ ...userDetails, city: value })
                break;

            case 'areaName': !!value.match(/^[a-zA-Z0-9 ]+$/) ? setInvalidUserDetails({ ...invalidUserDetails, areaName: false }) : setInvalidUserDetails({ ...invalidUserDetails, areaName: true })
                setUserDetails({ ...userDetails, areaName: value })
                break;

            case 'landMark': !!value.match(/^[a-zA-Z0-9 ]+$/) ? setInvalidUserDetails({ ...invalidUserDetails, landMark: false }) : setInvalidUserDetails({ ...invalidUserDetails, landMark: true })
                setUserDetails({ ...userDetails, landMark: value })
                break;

            default:
                break;
        }
    }

    // register
    const handleRegiter = async () => {
        const hasInvalidProperty = Object.values(invalidUserDetails).some((value) => value)
        if (userDetails.userName && userDetails.email && userDetails.password && !hasInvalidProperty) {
            try {
                const result = await registerAPI(userDetails)
                if (result.status == 200) {
                    toast.success("Successfully registered, Please login!")
                    navigate('/login')
                    setUserDetails({
                        userName: "", phone: "", email: "", password: "", pincode: "", state: "", buildingName: "", city: "", areaName: "", landMark: ""
                    })
                } else {
                    if (result.response.status == 406) {
                        toast.error(result.response.data)
                        setUserDetails({
                            userName: "", phone: "", email: "", password: "", pincode: "", state: "", buildingName: "", city: "", areaName: "", landMark: ""
                        })
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            toast.info("Please fill the form properly!!")
        }
    }

    // login
    const handleLogin = async () => {
        const hasInvalidProperty = Object.values(invalidUserDetails).some(values => values)
        if (userDetails.email && userDetails.password && !hasInvalidProperty) {
            try {
                const result = await loginAPI(userDetails)
                if (result.status == 200) {
                    setIsLoggedIn(true)
                    const role = result?.data?.user?.role
                    console.log(result?.data?.user);
                    console.log(role);
                    sessionStorage.setItem("user", JSON.stringify(result?.data?.user))
                    sessionStorage.setItem("token", result.data.token)
                    setUserDetails({
                        userName: "", phone: "", email: "", password: "", pincode: "", state: "", buildingName: "", city: "", areaName: "", landMark: ""
                    })
                    setTimeout(() => {
                        setIsLoggedIn(false)
                        if (role == "user") {
                            navigate("/")
                        } else {
                            navigate("/admin/dashboard")
                        }
                    }, 600);
                } else {
                    if (result.response.status == 404) {
                        toast.error(result.response.data)
                        setUserDetails({
                            userName: "", phone: "", email: "", password: "", pincode: "", state: "", buildingName: "", city: "", areaName: "", landMark: ""
                        })
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            toast.info("Please fill the form properly!!")
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "100vh", width: "100%", backgroundColor: "#8da6fa", backdropFilter: "blur(5px)" }}>
            {isLoggedIn ?
                <div className='d-flex justify-content-center align-items-center w-100 bg-slate-300' style={{ height: "100vh" }}>
                    <svg width={0} height={0}>
                        <defs>
                            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#e01cd5" />
                                <stop offset="100%" stopColor="#1CB5E0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgress className='me-2' sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} /> <h5>Logging in</h5>
                </div>

                :

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
                                            <div><TextField {...(invalidUserDetails.userName && { error: true, helperText: "Invalid name" })} onChange={e => handleInput(e.target)} value={userDetails.userName} name='userName' className='w-100' id="outlined-userName" label="Name*" variant="outlined" /></div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div><TextField {...(invalidUserDetails.phone && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.phone} name='phone' className='w-100' id="outlined-phone" label="Phone Number" variant="outlined" /></div>
                                        </Grid>
                                    </>
                                }
                                <Grid item xs={insideRegister ? 6 : 12}>
                                    <div><TextField {...(invalidUserDetails.email && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.email} name='email' className='w-100' id="outlined-email" label="Email*" variant="outlined" /></div>
                                </Grid>
                                <Grid item xs={insideRegister ? 6 : 12}>
                                    <div><TextField {...(invalidUserDetails.password && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.password} name='password' className='w-100' id="outlined-password" label="Password*" type="password" variant="outlined" /></div>
                                </Grid>
                                {insideRegister &&
                                    <>
                                        <Grid item xs={6}>
                                            <div><TextField {...(invalidUserDetails.pincode && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.pincode} name='pincode' className='w-100' id="outlined-pincode" label="Pincode" variant="outlined" /></div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div><TextField {...(invalidUserDetails.state && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.state} name='state' className='w-100' id="outlined-state" label="State" variant="outlined" /></div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div><TextField {...(invalidUserDetails.buildingName && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.buildingName} name='buildingName' className='w-100' id="outlined-buildingName" label="House No., Bulding Name" variant="outlined" /></div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div><TextField {...(invalidUserDetails.city && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.city} name='city' className='w-100' id="outlined-city" label="City" variant="outlined" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div><TextField {...(invalidUserDetails.areaName && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.areaName} name='areaName' className='w-100' id="outlined-areaName" label="Road name, Area, Colony" variant="outlined" /></div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div><TextField {...(invalidUserDetails.landMark && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.landMark} name='landMark' className='w-100' id="outlined-landMark" label="Nearby Famous Shop/Mall/Landmark" variant="outlined" /></div>
                                        </Grid>
                                    </>
                                }
                                <Grid item xs={12}>
                                    <div>
                                        {
                                            insideRegister ?
                                                <div className="mt-3">
                                                    <button onClick={handleRegiter} className='btn btn-primary mb-2' style={{ borderRadius: "8px", fontSize: "19px" }}>Register</button>
                                                    <p className='mt-2 mb-0'>Already have an Account? Click here to <Link to={'/login'}>Login</Link></p>
                                                    <hr className='my-2' />
                                                </div>
                                                :
                                                <div className="mt-3">
                                                    <button onClick={handleLogin} className='btn btn-primary mb-2' style={{ borderRadius: "8px", fontSize: "19px" }}>Login
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
                                        <i className="fa-brands fa-google"></i>
                                        {insideRegister ? "Sign Up with Google" : "Sign In with Google"}
                                    </button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            }
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </div>
    )
}

export default Authentication
