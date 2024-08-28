import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Redux/slices/categorySlice';
import { fetchItems } from '../Redux/slices/itemSlice';
import SERVER_URL from '../services/server_url';
import { setSelectedItem } from '../Redux/slices/selectItemSlice';

function BookingStep2({ steps, setDisableStep2Next }) {
    const dispatch = useDispatch()
    const { allCategory, loading, error } = useSelector(state => state.categoryReducer)
    const { allItems, loadingItem, errorItem } = useSelector(state => state.itemReducer)
    const selectedCategory = useSelector(state=>state.selectCategoryReducer)
    const selectedItem = useSelector(state=>state.selectItemReducer)

    // get all category
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    // get all items
    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    useEffect(() => {
        handleNext()
    }, [selectedItem])

    const filteredCategories = allCategory.filter(category => 
        selectedCategory.includes(category._id)
    );

    const handleIsItemClicked = (id) => {
        dispatch(setSelectedItem(id))
    };

    const handleNext = () => {
        if (selectedItem.length > 0) {
            setDisableStep2Next(false)
        } else {
            setDisableStep2Next(true)
        }
    }

    // console.log(allCategory);
    // console.log(allItems);


    return (
        <>
            {/* step 2 */}
                <Grid className='bookingStepsGrid px-3 pt-2' rowSpacing={3} container sx={{ display: steps === 1 ? "" : "none", overflowY: "scroll", overflowX: "hidden", paddingBottom:"50px" }}>
                    {/* 1st row */}
                    {filteredCategories?.length > 0 ?
                        filteredCategories.map(category => (
                            <Grid key={category?._id} item xs={12} >
                                <div>
                                    <h6 className='categoryHeading'>{category?.categoryName}</h6>
                                    <Grid container spacing={1} rowSpacing={4}>
                                        {allItems?.length > 0 ?
                                            allItems.map(items => (
                                                items?.itemCategory == category?.categoryName &&
                                                <Grid key={items?._id} item xs={6} sm={4} md={2} className='flex justify-center'>
                                                    <div className='categoryContainer'
                                                        onClick={() => handleIsItemClicked(items?._id)}>
                                                        {selectedItem.includes(items?._id) &&
                                                            <TaskAltIcon className='categoryCheck' />
                                                        }
                                                        <img className='categoryImage' src={`${SERVER_URL}/uploads/${items?.itemImage}`} alt="Image" />
                                                        <h6 className='categoryName'>{items?.itemName.slice(0, 10)}..</h6>
                                                        <p className='subCategories'>₹ {items?.itemPrice}</p>
                                                    </div>
                                                </Grid>
                                            ))
                                            :
                                            <div className='fw-bolder text-danger m-5 text-center'>No Item to show</div>
                                        }
                                    </Grid>
                                </div>
                            </Grid>
                        ))
                        :
                        <div className='fw-bolder text-danger m-5 text-center'>No Item to show</div>
                    }
                </Grid>
        </>
    )
}

export default BookingStep2