import React from 'react'
import logo from '../assets/logo3.png'
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


function SideNav({ sideBar,setSideBar }) {

  const navigate = useNavigate()

  // logOut
  const handleLogout = () => {
    sessionStorage.clear()
    // navigate("/login")
  }

  const handleSideBar = () => {
    setSideBar(!sideBar)
  }  

  return (
    <>
      {sideBar &&
        <div style={{ width: "200px", minHeight: "100vh", backgroundColor: "#020069", position: "fixed", left: "0%", zIndex: "10" }}>
          <Link to={'/admin/order'} onClick={handleSideBar} className='text-decoration-none flex items-center'><img width={"17%"} src={logo} alt="LOGO" /><p className='sideNavHeading'>ECO-SCRAPHIVE</p></Link>
          <Link to={'/admin/order'} onClick={handleSideBar} className='sideNavLinks'>ORDERS</Link>
          <Link to={'/admin/category'} onClick={handleSideBar} className='sideNavLinks'>CATEGORIES</Link>
          <Link to={'/admin/item'} onClick={handleSideBar} className='sideNavLinks'>ITEMS</Link>
          <Link onClick={handleLogout} to={'/login'} className='sideNavLinks'>
            <LogoutIcon sx={{ marginTop: "-6px", marginRight: "5px" }} />
            Logout
          </Link>
        </div>
      }
    </>
  )
}

export default SideNav
