import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo3.png'
import { Link } from 'react-router-dom';

function Header({ insideBooking, insideHome }) {

    return (
        <>
            {/* <Headroom> */}
            <Navbar expand="lg" className={`w-100 headerContainer ${insideBooking && 'bookingHeader'}`} style={{  borderBottom: `${insideHome && '0px'}` }}>
                <Container className='ms-3'>
                    <Navbar.Brand >
                        <Link to={'/'} className='text-decoration-none '><img className='navLogo' src={logo} alt="LOGO" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='me-4 text-white fw-semibold'>
                                <Link className='text-decoration-none text-white' to={'/'}>Home</Link>
                            </Nav.Link>
                            <Nav.Link className='me-4 text-white fw-semibold'>
                                <Link className='text-decoration-none text-white' to={'/booking'}>Book Now</Link>
                            </Nav.Link>
                            <Nav.Link className='me-0 text-white fw-semibold'>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* </Headroom> */}
        </>
    )
}

export default Header
