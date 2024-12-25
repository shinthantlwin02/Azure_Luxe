import { rooms } from '@/data/data';
import Card from './Card';
import { useEffect, useState } from 'react';
import { deleteBooking, fetchBookings } from '@/services/BookingService';
import { Button } from '@/components/ui/button';
import * as dayjs from 'dayjs';

const Rooms = () => {

  const [bookings,setBookings] = useState()

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

    // TODO: need to add booked roomlists here 
  return (
    <><div>
      {bookings?.map((booking, index) => {
        // const room = rooms.find((data) => data.id === booking.id)
        return (
          <div key={index} className="px-3 py-4 shadow-md rounded-sm my-4 flex items-center gap-4 w-full">
            {/* <Card room={room}/> */}
            <div className="flex items-center w-full justify-between">
              <div className="flex flex-col items-center">
                <h1 className="text-[#BDA16B] text-md font-raleway font-semibold mb-2"> Name</h1>
                <p className="text-[#BDA16B] text-sm font-raleway mb-2">{booking.name}</p>
              </div>
              {/* <div className="flex flex-col items-center">
                <h1 className="text-[#BDA16B] text-md font-raleway font-semibold mb-2">Booking id</h1>
                <p className="text-[#BDA16B] text-sm font-raleway mb-2"></p>
              </div> */}
              <div className="flex flex-col items-center">
                <h1 className="text-[#BDA16B] text-md font-raleway font-semibold mb-2">Adults</h1>
                <p className="text-[#BDA16B] text-sm font-raleway mb-2">{booking.adults}</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[#BDA16B] text-md font-raleway font-semibold mb-2">Children</h1>
                <p className="text-[#BDA16B] text-sm font-raleway mb-2">{booking.children}</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[#BDA16B] text-md font-raleway font-semibold mb-2">Check in</h1>
                <p className="text-[#BDA16B] text-sm font-raleway mb-2">{dayjs(booking.checkInDate).format('DD/MM/YYYY h:mm A ')}</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[#BDA16B] text-md font-raleway font-semibold mb-2">Check out</h1>
                <p className="text-[#BDA16B] text-sm font-raleway mb-2">{dayjs(booking.checkOutDate).format('DD/MM/YYYY h:mm A ')}</p>
              </div>
              <div className="flex flex-col items-center">
                <Button onClick={()=>cancelBooking(booking.id)} color='red'>Cancel</Button>
              </div>
            </div>
          </div>
        );
      })}
    </div><div></div></>
  );
};

export default Rooms;
