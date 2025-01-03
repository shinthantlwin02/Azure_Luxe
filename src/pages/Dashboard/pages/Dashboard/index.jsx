import { fetchBookings } from '@/services/BookingService';
import { fetchRooms } from '@/services/RoomService';
import { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchBookings();
      setBookings(data?._data?.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await fetchRooms();
      setRooms(data?._data?.data);
    })();
  }, []);

  return (
    <div className='p-20 bg-[#F0EEEE] h-screen'>
      <h1 className='text-2xl uppercase font-bold text-[#1A1A1A] font-raleway mb-4'>
        Admin&apos;s Dashboard
      </h1>
      <p className='text-green-500 font-raleway mb-20'>Login success!</p>
      <div className='w-full p-4 rounded-md shadow-md mb-4'>
        <h1 className='text-base text-[#1A1A1A] font-raleway font-semibold mb-1'>
          Total Reservations
        </h1>
        <p className='text-sm text-[#7D7D7D] font-raleway font-semibold'>
          Number of Reservations: <span className='text-[#1A1A1A]'>{bookings?.length}</span>
        </p>
      </div>
      <div className='w-full p-4 rounded-md shadow-md mb-4'>
        <h1 className='text-base text-[#1A1A1A] font-raleway font-semibold mb-1'>
          Total Rooms
        </h1>
        <p className='text-sm text-[#7D7D7D] font-raleway font-semibold'>
          Rooms generated:{' '}
          <span className='text-[#1A1A1A]'>{rooms?.length}</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
