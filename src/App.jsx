import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Pages/Home';
import Authentication from './Pages/Authentication';
import Booking from './Pages/Booking';
import Orders from './Pages/Orders';
import Dashboard from './Pages/Dashboard';
import AdminCategory from './Pages/AdminCategory';
import AdminItems from './Pages/AdminItems';
import AdminOrders from './Pages/AdminOrders';
import WithRole from './Components/WithRole';

function App() {
  return (
    <div className='mainContainer'>
      <Routes>
        <Route path='/' element={<WithRole component={Home} allowedRoles={['user','guest']} />} />
        <Route path='/register' element={<Authentication insideRegister={true} />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/user/booking' element={<WithRole component={Booking} allowedRoles={['user']} />} />
        <Route path='/user/orders' element={<WithRole component={Orders} allowedRoles={['user']} />} />
        <Route path='/user/dashboard' element={<WithRole component={Dashboard} allowedRoles={['user']} />} />
        <Route path='/admin/order' element={<WithRole component={AdminOrders} allowedRoles={['admin']} />} />
        <Route path='/admin/category' element={<WithRole component={AdminCategory} allowedRoles={['admin']} />} />
        <Route path='/admin/item' element={<WithRole component={AdminItems} allowedRoles={['admin']} />} />
      </Routes>
      <ToastContainer position='top-center' theme='colored' autoClose={1000} />
    </div>
  );
}

export default App;
