import { rooms } from '@/data/data';
import Card from './Card';
import { useEffect, useState } from 'react';
import { deleteBooking, fetchBookings } from '@/services/BookingService';
import { Button } from '@/components/ui/button';
import * as dayjs from 'dayjs';

const Rooms = () => {
  const [bookings, setBookings] = useState([]);
  console.log('bookings', bookings);
  useEffect(() => {
    (async () => {
      const data = await fetchBookings();
      setBookings(data?._data?.data);
    })();
  }, []);

  const cancelBooking = async (id) => {
    await deleteBooking(id);
    location.reload();
  };

  return (
    <div className='px-8 py-10 bg-[#f5f5f5]'>
      {bookings.length ? (
        bookings?.map((booking, index) => {
          return (
            <Card key={index} booking={booking} cancelBooking={cancelBooking} />
          );
        })
      ) : (
        <p className='text-xl font-medium uppercase text-[#1A1A1A] my-10 text-center'>
          You haven&apos;t booked any rooms
        </p>
      )}
    </div>
  );
};

export default Rooms;
