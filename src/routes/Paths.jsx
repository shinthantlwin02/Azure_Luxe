import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Rooms from '@/pages/Rooms';
import Login from '@/pages/Auth/Login';
import Signup from '@/pages/Auth/Signup';
import RoomDetail from '@/pages/RoomDetail';

const Paths = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/rooms/detail/:id' element={<RoomDetail />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};

export default Paths;
