import React from 'react'
import logo from '../assets/logo3.png'
import { Link } from 'react-router-dom';

function SideNav({dashBoardStatus}) {
  return (
    <div style={{width:"15%", minHeight:"100vh", backgroundColor:"#020069", position:"fixed",left:"0%"}}>
      <Link to={'/admin/dashboard'} className='text-decoration-none flex items-center'><img width={"17%"} src={logo} alt="LOGO" /><p className='sideNavHeading'>ECO-SCRAPHIVE</p></Link>

      { !dashBoardStatus &&
        <Link to={'/admin/dashboard'} className='sideNavLinks'>HOME</Link>
      }
      <Link to={'/admin/order'} className='sideNavLinks'>ORDERS</Link>
      <Link to={'/admin/category'} className='sideNavLinks'>CATEGORIES</Link>
      <Link to={'/admin/item'} className='sideNavLinks'>ITEMS</Link>
    </div>
  )
}

export default SideNav
