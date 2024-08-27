import React from 'react'
import logo from '../assets/logo3.png'
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


function SideNav() {

  const navigate = useNavigate()

  // logOut
  const handleLogout = () => {
    sessionStorage.clear()
    // navigate("/login")
}

  return (
    <div style={{ width: "15%", minHeight: "100vh", backgroundColor: "#020069", position: "fixed", left: "0%" }}>
      <Link to={'/admin/order'} className='text-decoration-none flex items-center'><img width={"17%"} src={logo} alt="LOGO" /><p className='sideNavHeading'>ECO-SCRAPHIVE</p></Link>
      <Link to={'/admin/order'} className='sideNavLinks'>ORDERS</Link>
      <Link to={'/admin/category'} className='sideNavLinks'>CATEGORIES</Link>
      <Link to={'/admin/item'} className='sideNavLinks'>ITEMS</Link>
      <Link onClick={handleLogout} to={'/login'} className='sideNavLinks'>
        <LogoutIcon sx={{ marginTop: "-6px", marginRight: "5px" }} />
        Logout
      </Link>
    </div>
  )
}

export default SideNav
