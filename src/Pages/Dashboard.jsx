import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import Grid from '@mui/material/Grid';
import avatar from '../assets/avatar.png'
import HomeIcon from '@mui/icons-material/Home';
import OutboxIcon from '@mui/icons-material/Outbox';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteAccount, getUserDetailsAPI, updateUserDetailsAPI } from '../services/allAPI';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SERVER_URL from '../services/server_url';

function Dashboard() {
    // for validation of inputs
    const [invalidUserDetails, setInvalidUserDetails] = useState({
        userName: false, phone: false, email: false, password: false, pincode: false, state: false, buildingName: false, city: false, areaName: false, landMark: false
    })
    const [userDetails, setUserDetails] = useState({
        userName: "", phone: "", email: "", password: "", pincode: "", state: "", buildingName: "", city: "", areaName: "", landMark: "", userImage: ""
    })
    const [existingUser, setExistingUser] = useState({})
    const [existingImg, setExistingImg] = useState("")
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("")
    const [imageFileStatus, setImageFileStatus] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getUserDetails()
    }, [])

    useEffect(() => {
        if (existingUser) {
            setUserDetails({
                ...userDetails, userName: existingUser.userName, phone: existingUser.phone, email: existingUser.email, password: existingUser.password, pincode: existingUser.pincode, state: existingUser.state, buildingName: existingUser.buildingName, city: existingUser.city, areaName: existingUser.areaName, landMark: existingUser.landMark
            })            
            if (existingUser.userImage!="undefined" && existingUser.userImage!="" && existingUser.userImage!=null && existingUser.userImage!=undefined) {                
                setExistingImg(existingUser.userImage)
            }            
        }
    }, [existingUser])

    useEffect(() => {
        if (userDetails.userImage) {
            setPreview(URL.createObjectURL(userDetails.userImage))
        } else {
            setPreview("")
        }
    }, [userDetails.userImage])

    const getUserDetails = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await getUserDetailsAPI(reqHeader)
                if (result.status == 200) {
                    setExistingUser(result.data)
                    console.log(result.data);
                } else {
                    console.log(result.response.data)
                }
            } catch (error) {
                console.log(error);
                // toast.warning(error)
            }
        } else {
            toast.warning("Token Missing")
        }
    }

    // to set input fields valid or not
    const handleInput = (tag) => {
        const { name, value, files } = tag

        switch (name) {
            case 'userImage':
                if (files[0].type === "image/png" || files[0].type === "image/jpg" || files[0].type === "image/jpeg") {
                    setUserDetails({ ...userDetails, userImage: files[0] });
                    setImageFileStatus(true);
                } else {
                    setUserDetails({ ...userDetails, userImage: null });
                    setImageFileStatus(false);
                }
                break;


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

    // update user
    const handleSubmit = async () => {
        const { userName, phone, email, password, pincode, state, buildingName, city, areaName, landMark, userImage } = userDetails
        console.log(preview,existingImg);
        
        // console.log(userName, phone, email, password, pincode, state, buildingName, city, areaName, landMark, userImage);
        if (phone && pincode && state && buildingName && city && areaName && landMark) {
            const reqbody = new FormData()
            reqbody.append("userName", userName)
            reqbody.append("phone", phone)
            reqbody.append("email", email)
            reqbody.append("password", password)
            reqbody.append("pincode", pincode)
            reqbody.append("state", state)
            reqbody.append("buildingName", buildingName)
            reqbody.append("city", city)
            reqbody.append("areaName", areaName)
            reqbody.append("landMark", landMark)
            preview ? reqbody.append("userImage", userImage) : reqbody.append("userImage", existingImg)
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type": preview ? "multipart/form-data" : "application/json",
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await updateUserDetailsAPI(reqbody,reqHeader)
                    if (result.status==200) {
                        // console.log(result);
                        getUserDetails()
                        handleClose()
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                    toast.warning("Action not allowed, try after sometimes")
                }
            }
        } else {
            toast.warning("Please fill the form completely")
        }
        setPreview("")
    }

    // cancel
    const handleCancel = () => {
        setPreview("")
        getUserDetails()
        handleClose()
    }

    // logOut
    const handleLogout = () => {
        sessionStorage.clear()
        navigate("/")
    }

    // delete account
    const handleDelete =  async () => {
        const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await deleteAccount(reqHeader)
                    console.log(result);
                    if (result.status==200) {
                        toast.warning("Deleted Successfully")
                        handleLogout()
                    }
                } catch (error) {
                    console.log(error);
                    toast.warning("Action not allowed, try after sometimes")
                }
            }    
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(existingUser);
    // console.log(userDetails);
    // console.log(existingImg);
    // console.log(preview);


    return (
        <>
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
                                                    {existingImg ?
                                                        <img className='rounded-circle' style={{ padding: "15px" }} src={preview ? preview : `${SERVER_URL}/uploads/${existingImg}`} alt="" />
                                                        :
                                                        <img className='rounded-circle' style={{ padding: "15px" }} src={preview ? preview : avatar} alt="" />
                                                    }
                                                    {/* <img className='rounded-circle' style={{ padding: "15px" }} src={avatar} alt="" /> */}
                                                </div>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <div>
                                                    <p className='mb-0 mt-4'>Hello,</p>
                                                    <h5 className='fw-bolder'>{userDetails?.userName?.slice(0,17)}</h5>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                {/* bottom panel */}
                                <Grid item xs={12} sx={{ height: "82%", }}>
                                    <div className='h-100 bg-slate-200' style={{ borderRadius: "3px", paddingTop: "20px" }}>
                                        <h5 className='fw-bolder' style={{ padding: "23px 0px 0px 27px" }}>
                                            <Link to={'/'} className='text-decoration-none text-gray-700'>
                                                <HomeIcon sx={{ marginTop: "-6px", marginRight: "20px" }} />
                                                Home
                                            </Link>
                                        </h5>
                                        <h5 className='fw-bolder' style={{ padding: "23px 0px 0px 27px" }}>
                                            <Link to={'/user/orders'} className='text-decoration-none text-gray-700'>
                                                <OutboxIcon sx={{ marginTop: "-6px", marginRight: "20px" }} />
                                                Bookings
                                            </Link>
                                        </h5>
                                        <h5 onClick={handleDelete} className='fw-bolder' style={{ padding: "23px 0px 0px 27px" }}>
                                            <Link className='text-decoration-none text-gray-700'>
                                                <DeleteForeverIcon sx={{ marginTop: "-6px", marginRight: "20px" }} />
                                                Delete Account
                                            </Link>
                                        </h5>
                                        <h5 onClick={handleLogout} className='fw-bolder' style={{ padding: "23px 0px 0px 27px" }}>
                                            <Link className='text-decoration-none text-gray-700'>
                                                <LogoutIcon sx={{ marginTop: "-6px", marginRight: "20px" }} />
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
                        <div className='h-100 bg-slate-200' style={{ borderRadius: "3px", padding: "22px 18px 10px 45px" }}>
                            <h5 className='fw-bolder'>
                                Personal Information
                                <Link onClick={handleShow} className='text-decoration-none ms-5 fw-medium text-base'>Edit</Link>
                            </h5>
                            <TextField value={userDetails.userName} InputProps={{ readOnly: true, }} sx={{ width: "35%", marginTop: "18px" }} id="outlined-userNameView" label="Name" variant="outlined" focused />

                            <h5 className='fw-bolder' style={{ marginTop: "55px" }}>
                                Email Address
                                <Link onClick={handleShow} className='text-decoration-none ms-5 fw-medium text-base'>Edit</Link>
                            </h5>
                            <TextField InputProps={{ readOnly: true, }} value={userDetails.email} sx={{ width: "35%", marginTop: "18px" }} id="outlined-emailView" label="Email" variant="outlined" focused />

                            <h5 className='fw-bolder' style={{ marginTop: "55px" }}>
                                Mobile Number
                                <Link onClick={handleShow} className='text-decoration-none ms-5 fw-medium text-base'>Edit</Link>
                            </h5>
                            <TextField value={userDetails.phone} InputProps={{ readOnly: true, }} sx={{ width: "35%", marginTop: "18px" }} id="outlined-phoneView" label="Mobile" variant="outlined" focused />

                            <h6 className='fw-bolder' style={{ marginTop: "55px" }}>
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

            {/* for editing details */}
            <Modal
                show={show}
                onHide={handleCancel}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder'>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Grid container spacing={2} className='detailsBox p-0'>
                        <Grid item xs={12} className='p-3'>
                            <div className='flex justify-center'>
                                <label>
                                    <input onChange={e => handleInput(e.target)} type="file" style={{ display: "none" }} name='userImage' />
                                    {existingImg ?
                                        <img style={{ height: "140px" }} src={preview ? preview : `${SERVER_URL}/uploads/${existingImg}`} alt="Image" />
                                        :
                                        <img style={{ height: "140px" }} src={preview ? preview : avatar} alt="Image" />
                                    }
                                    {/* <img style={{ height: "140px" }} src={preview} alt="Image" /> */}
                                </label>
                            </div>
                            {!imageFileStatus &&
                                <div className="text-warning fw-semibold my-2 text-center">Upload only following file types(jpeg,jpg,png)</div>
                            }
                        </Grid>
                        <Grid item xs={6}>
                            <div><TextField {...(invalidUserDetails.userName && { error: true, helperText: "Invalid name" })} onChange={e => handleInput(e.target)} value={userDetails.userName} name='userName' className='w-100' id="outlined-userName" label="Name*" variant="outlined" /></div>
                        </Grid>
                        <Grid item xs={6}>
                            <div><TextField {...(invalidUserDetails.phone && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.phone} name='phone' className='w-100' id="outlined-phone" label="Phone Number" variant="outlined" /></div>
                        </Grid>
                        <Grid item xs={6}>
                            <div><TextField {...(invalidUserDetails.email && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.email} name='email' className='w-100' id="outlined-email" label="Email*" variant="outlined" /></div>
                        </Grid>
                        <Grid item xs={6}>
                            <div><TextField {...(invalidUserDetails.password && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} value={userDetails.password} name='password' className='w-100' id="outlined-password" label="Password*" type="password" variant="outlined" /></div>
                        </Grid>
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
                    </Grid>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Close
                    </Button>
                    <Button onClick={handleSubmit} variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Dashboard
