import * as React from 'react';
import { useState } from 'react'
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


const steps = ['Upload and Select categories', 'Select types', 'Preview'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [insideBooking, setInsideBooking] = useState(true)
    const navigate = useNavigate()
    // const [skipped, setSkipped] = React.useState(new Set());

    // const isStepOptional = (step) => {
    //     return step === 1;
    // };

    // const isStepSkipped = (step) => {
    //     return skipped.has(step);
    // };

    const handleNext = () => {
        // let newSkipped = skipped;
        // if (isStepSkipped(activeStep)) {
        //     newSkipped = new Set(newSkipped.values());
        //     newSkipped.delete(activeStep);
        // }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //         // You probably want to guard against something like this,
    //         // it should never occur unless someone's actively trying to break something.
    //         throw new Error("You can't skip a step that isn't optional.");
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };

    const handleReset = () => {
        navigate('/orders')
        setActiveStep(0);
    };

    return (
        <>
            {/* navbar */}
            {/* <Headroom className='position-absolute top-0 z-3 w-100'><Header /></Headroom> */}
            <Header insideBooking={insideBooking}/>
            <div className='bookingMainDiv ' style={{ minHeight: "100vh", width: "100%" }}>
                <Box className='bookingInnerDiv' sx={{ width: '100%', minHeight: "100vh" }}>
                    <Stepper activeStep={activeStep} sx={{ width: "80%", margin: "13px 0px" }}>
                        {steps.map((label, index) => {
                            // if (isStepOptional(index)) {
                            //     labelProps.optional = (
                            //         <Typography variant="caption">Optional</Typography>
                            //     );
                            // }
                            // if (isStepSkipped(index)) {
                            //     stepProps.completed = false;
                            // }
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
                                <Typography sx={{ mt: 2, mb: 1, color:"green", fontSize:"27px" }} className='text-center flex justify-center'>
                                Thank you for confirming your order! <img className='confirmTick' src={orderConfirmed} alt="" />
                                </Typography>
                                <p className='text-center text-gray-500'>Our executive will be in touch with you shortly.</p>
                                <Box className="flex justify-center pt-4">
                                    <Button className='confirmOkBttn' sx={{backgroundColor:"#3fb618", color:"#fff", }} onClick={handleReset}>ok</Button>
                                </Box>
                            </div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {/* components in each  */}
                            <Box className="bookingSteps position-relative">
                                {/* content of each steps */}
                                <BookingStep1 steps={activeStep}/>
                                <BookingStep2 steps={activeStep}/>
                                <BookingStep3 steps={activeStep} />
    
                            </Box>
    
                            {/* <Typography sx={{ mt: 2, mb: 1 }}>step {activeStep + 1}</Typography> */}
                            <Box sx={{ display: 'flex', flexDirection: 'row', width: "84%", position: "relative", bottom: "35px" }}>
                                <Button
                                    className='bookingNextBttn'
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ color: "#fff !important", backgroundColor: "#1d9aff", padding: "5px 12px 5px 3px" }}
                                >
                                    <KeyboardArrowLeftSharpIcon sx={{ marginRight: "-3px" }} />
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {/* {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )} */}
    
                                <Button className='bookingNextBttn' onClick={handleNext} sx={{ color: "#fff", backgroundColor: "#1d9aff", padding: "5px 3px 5px 12px" }}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    <KeyboardArrowRightSharpIcon sx={{ marginLeft: "-3px" }} />
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    );
}
