import { rooms } from '@/data/data';
import Card from './Card';
import { useEffect, useState } from 'react';
import { deleteBooking, fetchBookings } from '@/services/BookingService';
import { Button } from '@/components/ui/button';
import * as dayjs from 'dayjs';

const Rooms = () => {

  const [bookings,setBookings] = useState()
console.log("bookings", bookings)
  useEffect(()=>{
    (async()=>{
      const data = await fetchBookings()
        setBookings(data?._data?.data)
    })()
  },[])

  const cancelBooking = async (id) => {
    await deleteBooking(id)
    location.reload()
  }

  return (
    <div className='px-8 py-10 bg-[#f5f5f5]'>
      {bookings?.map((booking, index) => {
        return (
          <Card key={index} booking={booking} cancelBooking={cancelBooking}/>
        );
      })}
    </div>
  );
};

export default Rooms;
