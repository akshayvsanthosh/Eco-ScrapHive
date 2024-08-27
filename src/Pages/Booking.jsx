import React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BookingStep1 from '../Components/BookingStep1';
import BookingStep2 from '../Components/BookingStep2';
import BookingStep3 from '../Components/BookingStep3';
import orderConfirmed from '../assets/orderConfirmed.png'
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderAPI } from '../services/allAPI';
import { clearSelectedItem } from '../Redux/slices/selectItemSlice';
import { clearSelectedCategories } from '../Redux/slices/selectCategorySlice';

const steps = ['Upload and Select categories', 'Select types', 'Preview'];

export default function HorizontalLinearStepper() {
    const [loading, setLoading] = useState(true)
    const [disableStep1Next, setDisableStep1Next] = useState(true)
    const [disableStep2Next, setDisableStep2Next] = useState(true)
    const [disableStep3Finish, setDisableStep3Finish] = useState(true)
    const [activeStep, setActiveStep] = React.useState(0);
    const [insideBooking, setInsideBooking] = useState(true)
    const [productImage, setProductImage] = useState("")
    // for details of order
    const [orderDetails, setOrderDetails] = useState({
        userName: "", phone: "", pincode: "", state: "", date: "", buildingName: "", city: "", areaName: "", landMark: "", addressType: ""
    })
    const { allItems, loadingItem, errorItem } = useSelector(state => state.itemReducer)
    const selectedItem = useSelector(state => state.selectItemReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    // console.log(disableStep1Next);    

    const addOrder = async (itemssel) => {
        const { userName, phone, pincode, state, date, buildingName, city, areaName, landMark, addressType } = orderDetails
        // console.log(productImage);
        // console.log(orderDetails);
        // console.log(itemssel);
       if (userName && phone && pincode && state && date && buildingName && city && areaName && landMark && productImage && itemssel) {
        const reqbody = new FormData()
        reqbody.append("image", productImage)
        reqbody.append("itemNames", itemssel)
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
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await addOrderAPI(reqbody, reqHeader)
                if (result.status == 200) {
                    // console.log(result);
                    setOrderDetails({
                        userName: "", phone: "", pincode: "", state: "", date: "", buildingName: "", city: "", areaName: "", landMark: "", addressType: ""
                    })
                    setProductImage("")
                    dispatch(clearSelectedCategories())
                    dispatch(clearSelectedItem())
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
            toast.warning("Please fill the form completely!")
       }
    }

    const handleNext = () => {
        if (activeStep == 2) {
            let orderItems = allItems.filter(items => selectedItem.includes(items._id))
            addOrder(orderItems.map(item => item.itemName));
        } 
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        navigate('/user/orders')
        setActiveStep(0);
    };

    // console.log(address);
    // console.log(itemNames);
    // console.log(image);
    // let itemssel=[]
    // itemssel.push(itemNames.map(item=>item.itemName))
    // console.log(itemssel);


    return (
        <>
            {loading ?
                <div className='d-flex flex-col justify-content-center align-items-center w-100 bg-slate-500' style={{ height: "100vh" }}>
                    <Skeleton variant="rectangular" width="95%" sx={{ backgroundColor: "#0000003d" }}>
                        <div style={{ paddingTop: '50%' }} ></div>
                    </Skeleton>
                </div>
                :
                <>
                    <Header insideBooking={insideBooking} />
                    <div className='bookingMainDiv ' style={{ minHeight: "100vh", width: "100%" }}>
                        <Box className='bookingInnerDiv' sx={{ width: '100%', minHeight: "100vh" }}>
                            <Stepper activeStep={activeStep} sx={{ width: "80%", margin: "13px 0px" }}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label} className='testing'>
                                            <StepLabel className='testdemo'>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <div className='stepsConfirmation'>
                                        <Typography sx={{ mt: 2, mb: 1, color: "green", fontSize: "27px" }} className='text-center flex justify-center'>
                                            Thank you for confirming your order! <img className='confirmTick' src={orderConfirmed} alt="" />
                                        </Typography>
                                        <p className='text-center text-gray-500'>Our executive will be in touch with you shortly.</p>
                                        <Box className="flex justify-center pt-4">
                                            <Button className='confirmOkBttn' sx={{ backgroundColor: "#3fb618", color: "#fff", }} onClick={handleReset}>ok</Button>
                                        </Box>
                                    </div>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {/* components in each  */}
                                    <Box className="bookingSteps position-relative">
                                        {/* content of each steps */}
                                        <BookingStep1 steps={activeStep} setDisableStep1Next={setDisableStep1Next} productImage={productImage} setProductImage={setProductImage} />
                                        <BookingStep2 steps={activeStep} setDisableStep2Next={setDisableStep2Next} />
                                        <BookingStep3 steps={activeStep} setDisableStep3Finish={setDisableStep3Finish} orderDetails={orderDetails} setOrderDetails={setOrderDetails} />
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'row', width: "84%", position: "relative", bottom: "35px" }}>
                                        {activeStep > 0 &&
                                            <Button
                                                className='bookingNextBttn'
                                                onClick={handleBack}
                                                sx={{ color: "#fff ", backgroundColor: "#1d9aff", padding: "5px 12px 5px 3px" }}
                                            >
                                                <KeyboardArrowLeftSharpIcon sx={{ marginRight: "-3px" }} />
                                                Back
                                            </Button>
                                        }
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button disabled={activeStep === 0 ? disableStep1Next : activeStep === 1 ? disableStep2Next : disableStep3Finish} className='bookingNextBttn' onClick={handleNext} sx={{ color: "#fff", backgroundColor: "#1d9aff", padding: "5px 3px 5px 12px" }}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            <KeyboardArrowRightSharpIcon sx={{ marginLeft: "-3px" }} />
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>
                    </div>

                    <Footer />
                </>
            }
        </>
    );
}
