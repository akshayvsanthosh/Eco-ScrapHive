import React, { useState } from 'react'
import SideNav from '../Components/SideNav'
import Grid from '@mui/material/Grid';
import demoOrderImg from '../assets/ResidentialScrap.avif'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

function AdminOrders() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [amount,setAmount] = useState("")
  const [orderStatus, setOrderStatus] = useState(10);
  const [invalidAmount,setInvalidAmount]=useState(false)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAmount = (e) =>{
    if (!!e.target.value.match(/^[1-9]\d*$/)) {
      setInvalidAmount(false)
      setAmount("e.target.value")
    } else {
      setInvalidAmount(true)
      setAmount("e.target.value")
    }
  }

  const handleChange = (event) => {
    setOrderStatus(event.target.value);
  };

  return (
    <div className='flex justify-end' style={{ width: "100%", minHeight: "100vh" }}>
      <SideNav />
      <div style={{ minHeight: "200vh", width: "85%", backgroundColor: "#010036", backdropFilter: "blur(5px)" }}>

        <div className='d-flex flex-column align-items-center adminOders' style={{ minHeight: "100vh", width: "100%" }}>
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
                      <TextField onChange={e=>handleAmount(e)} {...invalidAmount && { error: true, helperText: "Invalid amount" }} disabled={orderStatus === 10 || orderStatus === 30} id="standard-start-adornment" sx={{ m: 1, width: '80px' }} InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment>, }} variant="standard" />
                    </div>
                  </Grid>
                  {/* 3rd col */}
                  <Grid item xs={3} className='flex justify-end'>
                    <div className='h-100 flex justify-center pt-1'>

                      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={orderStatus}
                          onChange={e=>handleChange(e)}
                          label="Age"
                        >
                          <MenuItem value={10}><span className='bg-warning orderStatusIcon me-2'></span>Processing</MenuItem>
                          <MenuItem value={20}><span className='bg-yellow-400 orderStatusIcon me-2'></span>Out for pickup</MenuItem>
                          <MenuItem disabled={amount===""} value={30}><span className='bg-success orderStatusIcon me-2'></span>Completed</MenuItem>
                        </Select>
                      </FormControl>

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
                      <TextField onChange={e=>handleAmount(e)} {...invalidAmount && { error: true, helperText: "Invalid amount" }} disabled={orderStatus === 10 || orderStatus === 30} id="standard-start-adornment" sx={{ m: 1, width: '80px' }} InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment>, }} variant="standard" />
                    </div>
                  </Grid>
                  {/* 3rd col */}
                  <Grid item xs={3} className='flex justify-end'>
                    <div className='h-100 flex justify-center pt-1'>

                      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={orderStatus}
                          onChange={handleChange}
                          label="Age"
                        >
                          <MenuItem value={10}><span className='bg-warning orderStatusIcon me-2'></span>Processing</MenuItem>
                          <MenuItem value={20}><span className='bg-yellow-400 orderStatusIcon me-2'></span>Out for pickup</MenuItem>
                          <MenuItem disabled={amount===""} value={30}><span className='bg-success orderStatusIcon me-2'></span>Completed</MenuItem>
                        </Select>
                      </FormControl>

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
                            <Link className='text-decoration-none text-black'>Cancel</Link>
                          </MenuItem>

                        </Menu>
                      </div>
                    </div>
                  </Grid>
                </Grid>

              </div>
            </Grid>
          </Grid>
        </div>

      </div>
    </div>
  )
}

export default AdminOrders
