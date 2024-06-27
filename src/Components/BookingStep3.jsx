import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function BookingStep3({ steps }) {

    return (
        <>
            {/* step 3 */}
            <Grid className='bookingStepsGrid' container sx={{ display: steps === 2 ? "" : "none" }}>
                <Grid item xs={6}>
                    <div className='h-100 flex flex-col items-start' style={{ padding: "46px 70px", paddingLeft: "108px" }}>
                        <TextField className='bookingStep3TextBox' id="outlined-basic" label="Full Name*" variant="outlined" />
                        <TextField className='bookingStep3TextBox' id="outlined-basic" label="Phone number*" variant="outlined" />
                        <div className='flex bookingStep3TextBox justify-between'>
                            <TextField sx={{ width: "46%" }} id="outlined-basic" label="Pincode*" variant="outlined" />
                            <TextField sx={{ width: "46%" }} id="outlined-basic" label="State*" variant="outlined" />
                        </div>
                        <div className='flex bookingStep3TextBox justify-between'>
                            <TextField  sx={{ width: "46%" }} id="outlined-basic" label="City*" variant="outlined" />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker sx={{ width: "46%" }}/>
                            </LocalizationProvider>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className='h-100 flex flex-col items-start' style={{ padding: "46px 70px", paddingLeft: "108px" }}>
                        <TextField className='bookingStep3TextBox' id="outlined-basic" label="House No., Bulding Name*" variant="outlined" />
                        <TextField className='bookingStep3TextBox' id="outlined-basic" label="Road name, Area, Colony*" variant="outlined" />
                        <TextField className='bookingStep3TextBox' id="outlined-basic" label="Nearby Famous Shop/Mall/Landmark" variant="outlined" />
                                <FormLabel className='bookingStep3TextBox'  id="demo-row-radio-buttons-group-label">Type of address</FormLabel>
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
