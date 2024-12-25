import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Rooms from '@/pages/Rooms';
import Login from '@/pages/Auth/Login';
import Signup from '@/pages/Auth/Signup';
import RoomDetail from '@/pages/RoomDetail';
import Contact from '@/pages/Contact';
import Dashboard from '@/pages/Dashboard';
import Reservations from '@/pages/Dashboard/pages/Reservations';
import RoomsDashboard from '@/pages/Dashboard/pages/Rooms';
import MyRooms from '@/pages/MyRooms';

const ProtectedRoute = ({ children, role }) => {
  const userRole = localStorage.getItem('authToken');
  // console.log('user role', userRole);
  if (!userRole) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet/>
  // return children;
};

const Paths = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/rooms/detail/:id' element={<RoomDetail />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/bookings' element={<MyRooms />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      {/* Protected Route for Admin Dashboard */}
      <Route path='/dashboard' element={<ProtectedRoute role='admin'/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='reservations' element={<Reservations />}/>
        <Route path='rooms' element={<RoomsDashboard />}/>
      </Route>
    </Routes>
  );
};

export default Paths;
