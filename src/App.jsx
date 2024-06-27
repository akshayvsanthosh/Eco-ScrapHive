import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Authentication from './Pages/Authentication'
import Booking from './Pages/Booking'
import Orders from './Pages/Orders'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <div className='mainContainer'>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Authentication insideRegister={true}/>} path='/register'/>
        <Route element={<Authentication/>} path='/login'/>
        <Route element={<Booking/>} path='/booking'/>
        <Route element={<Orders/>} path='/orders'/>
        <Route element={<Dashboard/>} path='/dashboard'/>
      </Routes>
    </div>
  )
}

export default App
