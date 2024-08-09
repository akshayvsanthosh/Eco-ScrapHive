import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import addImage from '../assets/addImage.png'
import TaskAltIcon from '@mui/icons-material/TaskAlt'

import bookIcon from '../assets/bookIcon.png'
import plasticIcon from '../assets/plasticIcon.png'
import metalIcon from '../assets/metalIcon.png'
import motorIcon from '../assets/motorIcon.png'
import eWasteIcon from '../assets/eWasteIcon.png'
import vehicleIcon from '../assets/vehicleIcon.png'
import otherIcon from '../assets/otherIcon.png'

function BookingStep1({ steps,setDisableStep1Next }) {
    const [preview, setPreview] = useState(addImage)
    const [productImage, setProductImage] = useState("")
    
    const [isClicked, setIsClicked] = useState({
        paper: false, plastic: false, metals: false, motor: false, eWaste: false, vehicle: false, others: false
    });

    useEffect(() => {
        if (productImage?.type == "image/png" || productImage?.type == "image/jpg" || productImage?.type == "image/jpeg") {
            setPreview(URL.createObjectURL(productImage))
            handleNext()
        } else {
            setProductImage("")
            setPreview(addImage)
            handleNext()
        }
    }, [productImage,isClicked])

    const handleNext = () =>{
        if (productImage && Object.values(isClicked).some(values=>values)) {
            setDisableStep1Next(false)
        }else{
            setDisableStep1Next(true)
        }
    }

    return (
        <>
            {/* step 1 */}
            <Grid className='bookingStepsGrid flex items-center' container  sx={{ display: steps === 0 ? "" : "none" }}>
                {/* leftside */}
                <Grid item xs={6}>
                    <div>
                        <label className='flex justify-center'>
                            <input type="file" style={{ display: "none" }} onChange={e => setProductImage(e.target.files[0])} />
                            <img className='img-fluid bookingStepsImage' src={preview} alt="" />
                        </label>
                    </div>
                </Grid>
                {/* rightside - categories*/}
                <Grid item xs={6}>
                    <div>
                        {/* division of right side into 3 row */}
                        <Grid container spacing={2}>
                            {/* first row */}
                            <Grid item xs={12}>
                                <div>
                                    <Grid container spacing={3}>
                                        <Grid item xs={4} className='flex justify-end'>
                                            <div className='categoryContainer'
                                                onClick={() => setIsClicked({ ...isClicked, paper: !isClicked.paper })}>
                                                {isClicked.paper &&
                                                    <TaskAltIcon className='categoryCheck' />
                                                }
                                                <img className='categoryImage' src={bookIcon} alt="Image" />
                                                <h6 className='categoryName'>PAPER</h6>
                                                <p className='subCategories'>Carton Box, Magazine, Mixed..</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4} className='flex justify-center'>
                                            <div className='categoryContainer'
                                                onClick={() => setIsClicked({ ...isClicked, plastic: !isClicked.plastic })}>
                                                {isClicked.plastic &&
                                                    <TaskAltIcon className='categoryCheck' />
                                                }
                                                <img className='categoryImage' src={plasticIcon} alt="Image" />
                                                <h6 className='categoryName'>PLASTIC</h6>
                                                <p className='subCategories'>Fiber, Hard Plastic, PVC</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4} className='flex justify-start'>
                                            <div className='categoryContainer'
                                                onClick={() => setIsClicked({ ...isClicked, metals: !isClicked.metals })}>
                                                {isClicked.metals &&
                                                    <TaskAltIcon className='categoryCheck' />
                                                }
                                                <img className='categoryImage' src={metalIcon} alt="Image" />
                                                <h6 className='categoryName'>METALS</h6>
                                                <p className='subCategories'>Alum channel, Aluminium</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            {/* 2nd row */}
                            <Grid item xs={12}>
                                <div>
                                    <Grid container spacing={3}>
                                        <Grid item xs={4} className='flex justify-end'>
                                            <div className={`categoryContainer ${isClicked ? 'clicked' : ''}`}
                                                onClick={() => setIsClicked({ ...isClicked, motor: !isClicked.motor })}>
                                                {isClicked.motor &&
                                                    <TaskAltIcon className='categoryCheck' />
                                                }
                                                <img className='categoryImage' src={motorIcon} alt="Image" />
                                                <h6 className='categoryName'>MOTOR</h6>
                                                <p className='subCategories'>Engine, Fan, Motor, Pump</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4} className='flex justify-center'>
                                            <div className={`categoryContainer ${isClicked ? 'clicked' : ''}`}
                                                onClick={() => setIsClicked({ ...isClicked, eWaste: !isClicked.eWaste })}>
                                                {isClicked.eWaste &&
                                                    <TaskAltIcon className='categoryCheck' />
                                                }
                                                <img className='categoryImage' src={eWasteIcon} alt="Image" />
                                                <h6 className='categoryName'>E WASTE</h6>
                                                <p className='subCategories'>Cooler big, Cooler small</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4} className='flex justify-start'>
                                            <div className={`categoryContainer ${isClicked ? 'clicked' : ''}`}
                                                onClick={() => setIsClicked({ ...isClicked, vehicle: !isClicked.vehicle })}>
                                                {isClicked.vehicle &&
                                                    <TaskAltIcon className='categoryCheck' />
                                                }
                                                <img className='categoryImage' src={vehicleIcon} alt="Image" />
                                                <h6 className='categoryName'>VEHICLE</h6>
                                                <p className='subCategories'>Four wheeler, Two wheeler</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            {/* 3rd row */}
                            <Grid item xs={12}>
                                <div>
                                    <Grid container spacing={3}>
                                        <Grid item xs={4} className='flex justify-end'>
                                            <div className={`categoryContainer ${isClicked ? 'clicked' : ''}`}
                                                onClick={() => setIsClicked({ ...isClicked, others: !isClicked.others })}>
                                                {isClicked.others &&
                                                    <TaskAltIcon className='categoryCheck' />
                                                }
                                                <img className='categoryImage' src={otherIcon} alt="Image" />
                                                <h6 className='categoryName'>OTHERS</h6>
                                                <p className='subCategories'>AC aluminium, AC copper</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default BookingStep1
