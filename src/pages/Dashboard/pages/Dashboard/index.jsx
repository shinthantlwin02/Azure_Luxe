import { fetchBookings } from "@/services/BookingService"
import { useEffect, useState } from "react"

const DashboardPage = () => {
  const [bookings,setBookings] = useState()

  useEffect(()=>{
    (async()=>{
      const data = await fetchBookings()
        setBookings(data?._data?.data)
    })()
  },[])

  return (
    <div className="p-20 bg-[#F0EEEE] h-screen">
      <h1 className="text-2xl uppercase font-bold text-[#1A1A1A] font-raleway mb-4">Admin&apos;s Dashboard</h1>  
      <p className="text-green-500 font-raleway mb-20">Login success!</p>
      <div className="w-full p-4 rounded-md shadow-md mb-4">
        <h1 className="text-base text-[#1A1A1A] font-raleway font-semibold mb-1">Total Reservations</h1>
        <p className="text-sm text-[#7D7D7D] font-raleway font-semibold">Number of Reservations: {bookings?.length}</p>
      </div>
      <div className="w-full p-4 rounded-md shadow-md mb-4">
        <h1 className="text-base text-[#1A1A1A] font-raleway font-semibold mb-1">Total Rooms</h1>
        <p className="text-sm text-[#7D7D7D] font-raleway font-semibold">Rooms generated:</p>
      </div>
      <div className="w-full p-4 rounded-md shadow-md mb-4">
        <h1 className="text-base text-[#1A1A1A] font-raleway font-semibold mb-1">Total Guests</h1>
        <p className="text-sm text-[#7D7D7D] font-raleway font-semibold">Number of Guests:</p>
      </div>
    </div>
  )
}

export default DashboardPage
