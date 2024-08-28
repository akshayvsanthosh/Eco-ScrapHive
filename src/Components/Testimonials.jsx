import React from 'react'
import Grid from '@mui/material/Grid';
import { Card } from 'react-bootstrap'

function Testimonials() {
    return (
        <div className='d-flex align-items-center flex-column' style={{ minHeight: "100vh", width: "100%", paddingBottom: "90px", backdropFilter: "blur(8px)" }}>
            <h1 className='servicesHeading mt-4' style={{ color: "#ff911d" }}>Our Testimonials</h1>
            <Grid container rowSpacing={4} spacing={3} className='mt-5 pt-4 w-100'>
                <Grid xs={12} md={4}>
                    <div className='d-flex justify-content-center mt-3'>
                        <Card className='testimonialCard'>
                            <Card.Body>
                                <Card.Title className='mt-4 d-flex align-items-center justify-content-center flex-column'>
                                    <img className='rounded-circle img-fluid' width={"60px"} height={"60px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BxnJvfe-jW3MSctMfM3mkkVk5RbhE4Khfg&s" alt="image" />
                                    <span className='mt-3'>Max Miller</span>
                                </Card.Title>
                                <Card.Text className='mt-1'>
                                    <div className='d-flex justify-content-center'>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                    </div>
                                    <p className='mt-3 text-center'>
                                        Laudantium sint odit facilis. Quasi magni adipisci iusto expedita recusandae eaque quaerat magnam debitis!
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={12} md={4}>
                    <div className='d-flex justify-content-center mt-3'>
                        <Card className='testimonialCard'>
                            <Card.Body>
                                <Card.Title className='mt-4 d-flex align-items-center justify-content-center flex-column'>
                                    <img className='rounded-circle img-fluid' width={"60px"} height={"60px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4pO2rWHeSEqWwAotcGJZ58ibTKjes1CpHg&s" alt="image" />
                                    <span className='mt-3'>Emy Sai</span>
                                </Card.Title>
                                <Card.Text  className='mt-1'>
                                    <div className='d-flex justify-content-center'>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                    </div>
                                    <p className='mt-3 text-center'>
                                    Consequuntur eveniet. Aliquid totam nulla aut repellendus esse, veniam sequi inventore incidunt sit dicta autem.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Grid>
                <Grid xs={12} md={4}>
                    <div className='d-flex justify-content-center mt-3'>
                        <Card className='testimonialCard'>
                            <Card.Body>
                                <Card.Title className='mt-4 d-flex align-items-center justify-content-center flex-column'>
                                    <img className='rounded-circle img-fluid' width={"60px"} height={"60px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLcPyhPXJZFMKDmMCmADeTlMUrw29NgNsKQ&s" alt="image" />
                                    <span className='mt-3'>John</span>
                                </Card.Title>
                                <Card.Text  className='mt-1'>
                                    <div className='d-flex justify-content-center'>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                        <div className='fa-solid fa-star text-warning'></div>
                                    </div>
                                    <p className='mt-3 text-center'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum dolorem dolores eum tempore ducimus.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Testimonials
