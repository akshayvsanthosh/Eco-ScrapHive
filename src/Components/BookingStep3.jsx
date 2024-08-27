import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useSelector } from 'react-redux';

function BookingStep3({ steps,setDisableStep3Finish,orderDetails,setOrderDetails }) {
    // for validation of inputs
    const [invalidOrderDetails, setInvalidOrderDetails] = useState({
        userName: false, phone: false, pincode: false, state: false, date: false, buildingName: false, city: false, areaName: false, landMark: false
    })
    const selectedItem = useSelector(state=>state.selectItemReducer)


    useEffect(()=>{
        const user=JSON.parse(sessionStorage.getItem("user"))
        // console.log(user);
        setOrderDetails({
            userName: user.userName, phone: user.phone, pincode: user.pincode, state: user.state, date: "", buildingName: user.buildingName, city: user.city, areaName: user.areaName, landMark: user.landMark, addressType: ""
        })
    },[])

    useEffect(()=>{
        handleFinish()
    },[orderDetails,invalidOrderDetails])

    // to set input fields valid or not
    const handleInput = (tag) => {
        const { name, value } = tag
        switch (name) {
            case 'userName': !!value.match(/^[A-Za-z ]{3,}$/) ? setInvalidOrderDetails({ ...invalidOrderDetails, userName: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, userName: true })
                setOrderDetails({ ...orderDetails, userName: value })
                break;

            case 'phone': !!value.match(/^[1-9]\d{9}$/) ? setInvalidOrderDetails({ ...invalidOrderDetails, phone: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, phone: true })
                setOrderDetails({ ...orderDetails, phone: value })
                break;

            case 'pincode': !!value.match(/^[1-9]\d{5}$/) ? setInvalidOrderDetails({ ...invalidOrderDetails, pincode: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, pincode: true })
                setOrderDetails({ ...orderDetails, pincode: value })
                break;

            case 'state': !!value.match(/^[a-zA-Z]+$/) ? setInvalidOrderDetails({ ...invalidOrderDetails, state: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, state: true })
                setOrderDetails({ ...orderDetails, state: value })
                break;

            case 'buildingName': !!value.match(/^[a-zA-Z0-9 ]+$/) ? setInvalidOrderDetails({ ...invalidOrderDetails, buildingName: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, buildingName: true })
                setOrderDetails({ ...orderDetails, buildingName: value })
                break;

            case 'city': !!value.match(/^[a-zA-Z0-9 ]+$/) ? setInvalidOrderDetails({ ...invalidOrderDetails, city: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, city: true })
                setOrderDetails({ ...orderDetails, city: value })
                break;

            case 'areaName': !!value.match(/^[a-zA-Z0-9 ]+$/) ? setInvalidOrderDetails({ ...invalidOrderDetails, areaName: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, areaName: true })
                setOrderDetails({ ...orderDetails, areaName: value })
                break;

            case 'landMark': !!value.match(/^[a-zA-Z0-9 ]+$/) ? setInvalidOrderDetails({ ...invalidOrderDetails, landMark: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, landMark: true })
                setOrderDetails({ ...orderDetails, landMark: value })
                break;

            case 'pickupDate': handledate(tag) ? setInvalidOrderDetails({ ...invalidOrderDetails, date: false }) : setInvalidOrderDetails({ ...invalidOrderDetails, date: true })
                setOrderDetails({...orderDetails, date:value})
                break;

            default:
                break;
        }
    }
    
    const handledate=(tag)=>{
        // console.log(tag.value);
        const today = new Date()
        const startDate = new Date(today)
        startDate.setDate(startDate.getDate()+1)

        const endDate = new Date(today)
        endDate.setMonth(endDate.getMonth()+1)
        
        const inputDate = new Date(tag.value)
        return inputDate >=startDate && inputDate<=endDate
    }

    const handleFinish = () =>{
        const hasInvalidProperty = Object.values(invalidOrderDetails).some(values => values)
        if (orderDetails.userName && orderDetails.phone && orderDetails.pincode && orderDetails.state && orderDetails.date && orderDetails.buildingName && orderDetails.city && orderDetails.areaName && !hasInvalidProperty) {
            setDisableStep3Finish(false)
        }else{
            setDisableStep3Finish(true)
        }
    }

    // console.log(selectedItem);
    // console.log(orderDetails);
    
    return (
        <>
            {/* step 3 */}
            <Grid className='bookingStepsGrid' container sx={{ display: steps === 2 ? "" : "none" }}>
                <Grid item xs={6}>
                    <div className='h-100 flex flex-col items-start' style={{ padding: "46px 70px", paddingLeft: "108px" }}>

                        <TextField value={orderDetails.userName} {...(invalidOrderDetails.userName && { error: true, helperText: "Invalid name" })} onChange={e => handleInput(e.target)} name='userName' className='bookingStep3TextBox' id="outlined-basic" label="Full Name*" variant="outlined" />
                        <TextField value={orderDetails.phone} {...(invalidOrderDetails.phone && { error: true, helperText: "Invalid number" })} onChange={e => handleInput(e.target)} name='phone' className='bookingStep3TextBox' id="outlined-basic" label="Phone number*" variant="outlined" />

                        <div className='flex bookingStep3TextBox justify-between'>
                            <TextField value={orderDetails.pincode} {...(invalidOrderDetails.pincode && { error: true, helperText: "Invalid pincode" })} onChange={e => handleInput(e.target)} name='pincode' sx={{ width: "46%" }} id="outlined-basic" label="Pincode*" variant="outlined" />
                            <TextField value={orderDetails.state} {...(invalidOrderDetails.state && { error: true, helperText: "Invalid state" })} onChange={e => handleInput(e.target)} name='state' sx={{ width: "46%" }} id="outlined-basic" label="State*" variant="outlined" />
                        </div>

                        <div className='flex bookingStep3TextBox justify-between'>
                            <TextField value={orderDetails.city} {...(invalidOrderDetails.city && { error: true, helperText: "Invalid city" })} onChange={e => handleInput(e.target)} name='city'  sx={{ width: "46%" }} id="outlined-basic" label="City*" variant="outlined" />
                            <TextField value={orderDetails.date} {...(invalidOrderDetails.date && { error: true, helperText: "Date not available" })} onChange={e => handleInput(e.target)} name='pickupDate' focused sx={{ width: "46%" }} id="outlined-basic" label="Pickup Date" variant="outlined" type='date'/>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className='h-100 flex flex-col items-start' style={{ padding: "46px 70px", paddingLeft: "108px" }}>

                        <TextField value={orderDetails.buildingName} {...(invalidOrderDetails.buildingName && { error: true, helperText: "Invalid buildingName" })} onChange={e => handleInput(e.target)} name='buildingName' className='bookingStep3TextBox' id="outlined-basic" label="House No., Bulding Name*" variant="outlined" />
                        <TextField value={orderDetails.areaName} {...(invalidOrderDetails.areaName && { error: true, helperText: "Invalid Road/Area/ColonyName" })} onChange={e => handleInput(e.target)} name='areaName' className='bookingStep3TextBox' id="outlined-basic" label="Road name, Area, Colony*" variant="outlined" />
                        <TextField value={orderDetails.landMark} {...(invalidOrderDetails.landMark && { error: true, helperText: "Invalid landMark" })} onChange={e => handleInput(e.target)} name='landMark' className='bookingStep3TextBox' id="outlined-basic" label="Nearby Famous Shop/Mall/Landmark" variant="outlined" />
                        <FormLabel className='bookingStep3TextBox' id="demo-row-radio-buttons-group-label">Type of address</FormLabel>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Home" />
                            <FormControlLabel value="male" control={<Radio />} label="Office" />
                        </RadioGroup>

                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default BookingStep3
