import { rooms } from '@/data/data';
import Card from './Card';
import { useEffect, useState } from 'react';
import { fetchBookings } from '@/services/BookingService';
import { Button } from '@/components/ui/button';
import * as dayjs from 'dayjs';
import { CircleAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const [bookings, setBookings] = useState([]);
  console.log('bookings', bookings);
  useEffect(() => {
    (async () => {
      const data = await fetchBookings();
      setBookings(data?._data?.data);
    })();
  }, []);


  return (
    <div className='px-8 py-10 bg-[#f5f5f5]'>
      {bookings.length ? (
        <div>
          {bookings?.map((booking, index) => {
            return (
              <Card
                key={index}
                booking={booking}
              />
            );
          })}
          <div className='flex items-center justify-center gap-2 text-red-500 text-base my-10'>
            <CircleAlert color='red' size={16} />
            To Cancel the Booking or need something to ask? Feel free to
            <Link to={'/contact'}>
              <p className='-ml-1 underline'>contact</p>
            </Link>
            !
          </div>
        </div>
      ) : (
        <p className='text-xl font-medium uppercase text-[#1A1A1A] my-10 text-center'>
          You haven&apos;t booked any rooms
        </p>
      )}
    </div>
  );
};

export default Rooms;
