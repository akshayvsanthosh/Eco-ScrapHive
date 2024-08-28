import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import logo from '../assets/logo1.png'
import Headroom from 'react-headroom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardImg1 from '../assets/ResidentialScrap.avif'
import cardImg2 from '../assets/CommercialScrap.webp'
import cardImg3 from '../assets/DomesticBiomedical.jpg'
import cardImg4 from '../assets/bulkWaste.jpg'
import cardImg5 from '../assets/recycling.jpg'
import CampaignsHome from '../Components/CampaignsHome';
import Testimonials from '../Components/Testimonials';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';



function Home() {
    const [insideHome, setInsideHome] = useState(true)

    return (
        <div>
            {/* navbar */}
            <Headroom className='position-absolute top-0 z-3 w-100'><Header insideHome={insideHome} /></Headroom>

            {/* carousel */}
            <Carousel fade pause="false" className='w-100 ' style={{ height: "100vh" }}>
                <Carousel.Item interval={1000} >
                    <div className="bg1" style={{ height: "100vh" }} text="First slide" />
                    <Carousel.Caption>
                        <Grid container spacing={0} style={{ height: "100%" }}>
                            <Grid xs={12} md={10} lg={7}>
                                <div className='insideCarouselCaption'>
                                    <div className='d-flex' style={{ paddingLeft: "35px" }}>
                                        <img className='homeLogo' width={"90px"} src={logo} alt="Logo" />
                                        <h3 className='homeHeading'>Eco-ScrapHive</h3>
                                    </div>
                                    <p className='homePara'>Eco-ScrapHive: Pioneering a Greener Future, One Scrap at a Time. Join us in our mission to declutter the planet and pave the way for a cleaner, healthier tomorrow. Together, we can transform waste into worth and make sustainability a reality.
                                    </p>
                                    <Link to={'/user/booking'} className='btn btn-warning rounded-4 bttnHome'>Book Now</Link>
                                </div>
                            </Grid>
                            <Grid xs={0} md={0}>

                            </Grid>
                        </Grid>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className="bg2" style={{ height: "100vh" }} text="Second slide" />
                    <Carousel.Caption>
                        <Grid container spacing={0} style={{ height: "100%" }}>
                            <Grid xs={12} md={10} lg={7}>
                                <div className='insideCarouselCaption'>
                                    <div className='d-flex' style={{ paddingLeft: "35px" }}>
                                        <img className='homeLogo' width={"90px"} src={logo} alt="Logo" />
                                        <h3 className='homeHeading'>Eco-ScrapHive</h3>
                                    </div>
                                    <p className='homePara'>Eco-ScrapHive: Pioneering a Greener Future, One Scrap at a Time. Join us in our mission to declutter the planet and pave the way for a cleaner, healthier tomorrow. Together, we can transform waste into worth and make sustainability a reality.
                                    </p>
                                    <Link to={'/user/booking'} className='btn btn-warning rounded-4 bttnHome'>Book Now</Link>
                                </div>
                            </Grid>
                            <Grid xs={0} md={5}>

                            </Grid>
                        </Grid>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className="bg3" style={{ height: "100vh" }} text="Third slide" />
                    <Carousel.Caption>
                        <Grid container spacing={0} style={{ height: "100%" }}>
                            <Grid xs={12} md={10} lg={7}>
                                <div className='insideCarouselCaption'>
                                    <div className='d-flex' style={{ paddingLeft: "35px" }}>
                                        <img className='homeLogo' width={"90px"} src={logo} alt="Logo" />
                                        <h3 className='homeHeading'>Eco-ScrapHive</h3>
                                    </div>
                                    <p className='homePara'>Eco-ScrapHive: Pioneering a Greener Future, One Scrap at a Time. Join us in our mission to declutter the planet and pave the way for a cleaner, healthier tomorrow. Together, we can transform waste into worth and make sustainability a reality.
                                    </p>
                                    <Link to={'/user/booking'} className='btn btn-warning rounded-4 bttnHome'>Book Now</Link>
                                </div>
                            </Grid>
                            <Grid xs={0} md={5}>

                            </Grid>
                        </Grid>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="bg4" style={{ height: "100vh" }} text="Third slide" />
                    <Carousel.Caption>
                        <Grid container spacing={0} style={{ height: "100%" }}>
                            <Grid xs={12} md={10} lg={7}>
                                <div className='insideCarouselCaption'>
                                    <div className='d-flex' style={{ paddingLeft: "35px" }}>
                                        <img className='homeLogo' width={"90px"} src={logo} alt="Logo" />
                                        <h3 className='homeHeading'>Eco-ScrapHive</h3>
                                    </div>
                                    <p className='homePara'>Eco-ScrapHive: Pioneering a Greener Future, One Scrap at a Time. Join us in our mission to declutter the planet and pave the way for a cleaner, healthier tomorrow. Together, we can transform waste into worth and make sustainability a reality.
                                    </p>
                                    <Link to={'/user/booking'} className='btn btn-warning rounded-4 bttnHome'>Book Now</Link>
                                </div>
                            </Grid>
                            <Grid xs={0} md={5}>

                            </Grid>
                        </Grid>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* services */}
            <div className='d-flex flex-column align-items-center' style={{ minHeight: "100vh", width: "100%", backgroundColor: "#e5ffe1", paddingBottom: "90px" }}>
                <h1 className='servicesHeading'>Our Services</h1>
                <div className='w-100 mt-5 pt-5' >
                    <Grid container rowSpacing={20} spacing={3} className="w-100">
                        <Grid item xs={12} md={4}>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: "#c7a3a2", borderRadius: "8px", border: 0, height: "421px" }}>
                                    <Card.Img className='cardImage' variant="top" src={cardImg1} />
                                    <Card.Body style={{ marginTop: "204px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontWeight: 600 }}>Residential Scrap Removal</Card.Title>
                                        <Card.Text className='pt-2' style={{ textAlign: "justify" }}>
                                            Eco-ScrapHive Residential Scrap Removal is your premier choice for hassle-free scrap removal.
                                        </Card.Text>
                                        <Link className='btn btn-primary' to={'/user/booking'} style={{ borderRadius: "7px" }}>Book Now</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: "#cebb98", borderRadius: "8px", border: 0, height: "421px" }}>
                                    <Card.Img className='cardImage' variant="top" src={cardImg2} />
                                    <Card.Body style={{ marginTop: "204px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontWeight: 600 }}>Commercial Scrap Removal</Card.Title>
                                        <Card.Text className='pt-2' style={{ textAlign: "justify" }}>
                                            Is the accumulation of old junk and scraps hindering your workspace efficiency?
                                        </Card.Text>
                                        <Link className='btn btn-primary' to={'/user/booking'} style={{ borderRadius: "7px" }}>Book Now</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: "#babac6", borderRadius: "8px", border: 0, height: "421px" }}>
                                    <Card.Img className='cardImage' variant="top" src={cardImg3} />
                                    <Card.Body style={{ marginTop: "204px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontWeight: 600 }}>Domestic Biomedical Waste Removal</Card.Title>
                                        <Card.Text className='pt-2' style={{ textAlign: "justify" }}>
                                            Looking where to dump urinal bags, diapers, sanitary napkins, expired medicines, or laboratory waste?
                                        </Card.Text>
                                        <Link className='btn btn-primary' to={'/user/booking'} style={{ borderRadius: "7px" }}>Book Now</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: "#f7b484", borderRadius: "8px", border: 0, height: "421px" }}>
                                    <Card.Img className='cardImage' variant="top" src={cardImg4} />
                                    <Card.Body style={{ marginTop: "204px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontWeight: 600 }}>Bulk Waste Generator (BWG)</Card.Title>
                                        <Card.Text className='pt-2' style={{ textAlign: "justify" }}>
                                            Eco-ScrapHives BWG offers a convenient solution for those classified as "Bulk Waste Generators"
                                        </Card.Text>
                                        <Link className='btn btn-primary' to={'/user/booking'} style={{ borderRadius: "7px" }}>Book Now</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: "#dac5a8", borderRadius: "8px", border: 0, height: "421px" }}>
                                    <Card.Img className='cardImage' variant="top" src={cardImg5} />
                                    <Card.Body style={{ marginTop: "204px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontWeight: 600 }}>Recycling Marketplace</Card.Title>
                                        <Card.Text className='pt-2' style={{ textAlign: "justify" }}>
                                            Marketplace by Eco-ScrapHive is an online platform where buyers and sellers in the scrap industry can connect and trade.
                                        </Card.Text>
                                        <Link className='btn btn-primary' to={'/user/booking'} style={{ borderRadius: "7px" }}>Book Now</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* campaigns */}
            <CampaignsHome />

            {/*Testimonials  */}
            <Testimonials />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>


    )
}

export default Home
