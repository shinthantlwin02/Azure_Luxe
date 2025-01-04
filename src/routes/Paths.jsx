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
import NotFoundPage from '@/pages/NotFoundPage';
import Reviews from '@/pages/Dashboard/pages/Reviews';

const ProtectedRoute = ({ role }) => {
  const userRole = localStorage.getItem('userRole');
  console.log('User role:', userRole);

  if (userRole === role) {
    return <Outlet />;
  }

  return <Navigate to='/notFound' replace />;
};

const Paths = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/rooms/detail/:id' element={<RoomDetail />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/bookings' element={<MyRooms />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/notFound' element={<NotFoundPage />} />

      {/* Protected Route for Admin Dashboard */}
      <Route path='/dashboard' element={<ProtectedRoute role='admin' />}>
        <Route index element={<Dashboard />} />
        <Route path='reservations' element={<Reservations />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='rooms' element={<RoomsDashboard />} />
      </Route>
    </Routes>
  );
};

export default Paths;
