import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Styles/campaignsHome.css"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cardImg1 from '../assets/beachCleanup.jpg'
import cardImg2 from '../assets/treePlantation.jpg'
import cardImg3 from '../assets/recyclingDrive.jpg'
import cardImg4 from '../assets/worldEarthDay.jpg'
import cardImg5 from '../assets/1TonPlastic.webp'
import cardImg6 from '../assets/basket.avif'
import cardImg7 from '../assets/plasticFreeForest.jpg'


function CampaignsHome() {
    const theme = useTheme();

    return (
        <div className='d-flex flex-column align-items-center' style={{ minHeight: "100vh", width: "100%", backgroundColor: "#c6daff", paddingBottom: "90px" }}>
            <h1 className='servicesHeading'>Popular Campaigns</h1>

            <div style={{ width: "100%", height: "55vh", marginTop: "77px" }}>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={10}
                    centerMode={false}
                    containerClass="container-with-dots"
                    customTransition="all 8s linear"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 2.3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                    transitionDuration={8000}
                    className='campCardCarouseal'
                >
                    <div className='campCards'>
                        <Card sx={{ display: 'flex', height:"100%", backgroundColor: "#56aeff9e" }}>
                            <CardMedia
                                className='campCardImages'
                                component="img"
                                sx={{ width: "40%" }}
                                image={cardImg1}
                                alt="Image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className='campCardHeading' sx={{mt:0.5}} variant='h6' component="div" color={"#f2f2f2"}>
                                        BEACH CLEAN-UP CAMPAIGN
                                    </Typography>
                                    <Typography className='campCardBody' sx={{mt:1.5}} variant="subtitle1" component="div" color={"#ababab"}>
                                    The pervasive threat of plastic waste choking our rivers and oceans demands urgent attention. Eco-ScrapHive's cleanup drives focus on preventing these plastics from reaching our precious waters, ensuring a cleaner and healthier environment.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                    <div className='campCards'>
                        <Card sx={{ display: 'flex', height:"100%", backgroundColor: "#ffe099a6" }}>
                            <CardMedia
                                className='campCardImages'
                                component="img"
                                sx={{ width: "40%" }}
                                image={cardImg2}
                                alt="Image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className='campCardHeading' sx={{mt:0.5}} variant='h6' component="div" color={"#f2f2f2"}>
                                    TREE PLANTATION DRIVE
                                    </Typography>
                                    <Typography className='campCardBody' sx={{mt:1.5}} variant="subtitle1" component="div" color={"#ababab"}>
                                    The rise of concrete structures and lesser green cover signifies the peak of urbanization. Eco-ScrapHive's plantation drives serve as a reminder that as we progress economically, we must also honor our responsibility to the environment.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                    <div className='campCards'>
                        <Card sx={{ display: 'flex', height:"100%", backgroundColor: "#72ca69" }}>
                            <CardMedia
                                className='campCardImages'
                                component="img"
                                sx={{ width: "40%" }}
                                image={cardImg3}
                                alt="Image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className='campCardHeading' sx={{mt:0.5}} variant='h6' component="div" color={"#f2f2f2"}>
                                    RECYCLING DRIVES
                                    </Typography>
                                    <Typography className='campCardBody' sx={{mt:1.5}} variant="subtitle1" component="div" color={"#ababab"}>
                                    Eco-ScrapHive actively collaborates with schools, colleges, and various communities to foster a culture of recycling. We are dedicated to instilling this environmentally conscious behavior everywhere for a brighter and sustainable tomorrow.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                    <div className='campCards'>
                        <Card sx={{ display: 'flex', height:"100%", backgroundColor: "#efc7c7" }}>
                            <CardMedia
                                className='campCardImages'
                                component="img"
                                sx={{ width: "40%" }}
                                image={cardImg4}
                                alt="Image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className='campCardHeading' sx={{mt:0.5}} variant='h6' component="div" color={"#f2f2f2"}>
                                    WORLD EARTH DAY
                                    </Typography>
                                    <Typography className='campCardBody' sx={{mt:1.5}} variant="subtitle1" component="div" color={"#ababab"}>
                                    Eco-ScrapHive Marked World Earth Day with a partnership with Treker Warrior to conduct a Nature Restoration where waste was collected during a trekking event.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                    <div className='campCards'>
                        <Card sx={{ display: 'flex', height:"100%", backgroundColor: "#c6eced" }}>
                            <CardMedia
                                className='campCardImages'
                                component="img"
                                sx={{ width: "40%" }}
                                image={cardImg5}
                                alt="Image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className='campCardHeading' sx={{mt:0.5}} variant='h6' component="div" color={"#f2f2f2"}>
                                    1-Ton Plastic collection
                                    </Typography>
                                    <Typography className='campCardBody' sx={{mt:1.5}} variant="subtitle1" component="div" color={"#ababab"}>
                                    Eco-ScrapHive partnered with several NGOs marking the World Environment Day, collecting about 1 tonne plastic bottles and other plastic waste.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                    <div className='campCards'>
                        <Card sx={{ display: 'flex', height:"100%", backgroundColor: "#8f9fb4" }}>
                            <CardMedia
                                className='campCardImages'
                                component="img"
                                sx={{ width: "40%" }}
                                image={cardImg6}
                                alt="Image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className='campCardHeading' sx={{mt:0.5}} variant='h6' component="div" color={"#f2f2f2"}>
                                    Trash Talk CAMPAIGN
                                    </Typography>
                                    <Typography className='campCardBody' sx={{mt:1.5}} variant="subtitle1" component="div" color={"#ababab"}>
                                    Educating the public about proper waste disposal and the significance of different waste basket colors
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                    <div className='campCards'>
                        <Card sx={{ display: 'flex', height:"100%", backgroundColor: "#7dd574" }}>
                            <CardMedia
                                className='campCardImages'
                                component="img"
                                sx={{ width: "40%" }}
                                image={cardImg7}
                                alt="Image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className='campCardHeading' sx={{mt:0.5}} variant='h6' component="div" color={"#f2f2f2"}>
                                    Plastic Free Forest
                                    </Typography>
                                    <Typography className='campCardBody' sx={{mt:1.5}} variant="subtitle1" component="div" color={"#ababab"}>
                                    Eco-ScrapHive partnered with Forest Department marked the International Day of Forests, by conducting a forest restoration drive for collecting plastic bottles and other plastic waste.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default CampaignsHome