import React, { useState } from 'react'
import SideNav from '../Components/SideNav'

function AdminDashboard() {
  const [dashBoardStatus,setDashBoardStatus] = useState(true)
  return (
   <div className='flex justify-end' style={{width:"100%", minHeight:"100vh"}}>
      <SideNav dashBoardStatus={dashBoardStatus}/>
      <div style={{ minHeight: "200vh", width: "85%", backgroundColor: "#010036", backdropFilter: "blur(5px)" }}>
        
      </div>
   </div>
  )
}

export default AdminDashboard
