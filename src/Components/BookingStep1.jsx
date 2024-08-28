import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import addImage from '../assets/addImage.png'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Redux/slices/categorySlice';
import SERVER_URL from '../services/server_url';
import CircularProgress from '@mui/material/CircularProgress';
import { setSelectedCategory } from '../Redux/slices/selectCategorySlice';

function BookingStep1({ steps, setDisableStep1Next, productImage, setProductImage }) {
    const [preview, setPreview] = useState(addImage)
    const { allCategory, loading, error } = useSelector(state => state.categoryReducer)
    const selectedCategory = useSelector(state=>state.selectCategoryReducer)

    const dispatch = useDispatch()

    // get all category
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        if (productImage?.type == "image/png" || productImage?.type == "image/jpg" || productImage?.type == "image/jpeg") {
            setPreview(URL.createObjectURL(productImage))
            handleNext()
        } else {
            setProductImage("")
            setPreview(addImage)
            handleNext()
        }
    }, [productImage, selectedCategory])

    const handleIsCategoryClicked = (id) => {
        dispatch(setSelectedCategory(id))
    };

    const handleNext = () => {
        if (productImage && selectedCategory.length > 0) {
            setDisableStep1Next(false)
        } else {
            setDisableStep1Next(true)
        }
    }

    // console.log(allCategory);

    return (
        <>
            {/* step 1 */}
            {loading ?
                <div className='d-flex justify-content-center align-items-center w-100' style={{ height: "50vh" }}>
                    <svg width={0} height={0}>
                        <defs>
                            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#e01cd5" />
                                <stop offset="100%" stopColor="#1CB5E0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgress className='me-2' sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} /> <h5 className='text-white'>Logging in</h5>
                </div>
            :
                <Grid className='bookingStepsGrid flex items-center' container  rowSpacing={3} sx={{ display: steps === 0 ? "" : "none" }}>
                    {/* leftside */}
                    <Grid item xs={12} md={6}>
                        <div>
                            <label className='flex justify-center'>
                                <input type="file" style={{ display: "none" }} onChange={e => setProductImage(e.target.files[0])} />
                                <img className='img-fluid bookingStepsImage' src={preview} alt="" />
                            </label>
                        </div>
                    </Grid>
                    {/* rightside - categories*/}
                    <Grid item xs={12} md={6}>
                        <div>
                            {/* division of right side into 3 row */}
                            <Grid container spacing={2}>
                                {/* first row */}
                                <Grid item xs={12}>
                                    <div>
                                        <Grid container spacing={3}>
                                            {allCategory?.length > 0 ?
                                                allCategory.map(category => (
                                                    <Grid key={category?._id} item xs={6} sm={4} className='flex justify-evenly'>
                                                        <div className='categoryContainer'
                                                            onClick={() => handleIsCategoryClicked(category?._id)}>
                                                            {selectedCategory?.includes(category?._id) &&
                                                                <TaskAltIcon className='categoryCheck' />
                                                            }
                                                            <img className='categoryImage' src={`${SERVER_URL}/uploads/${category.categoryImage}`} alt="Image" />
                                                            <h6 className='categoryName'>{category?.categoryName}</h6>
                                                            <p className='subCategories'>{category?.categoryItems}..</p>
                                                        </div>
                                                    </Grid>
                                                ))
                                                :
                                                <div className='fw-bolder text-danger m-5 text-center'>No Category to show</div>
                                            }
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default BookingStep1
