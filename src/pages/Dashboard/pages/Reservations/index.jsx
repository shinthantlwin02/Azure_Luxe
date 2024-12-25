import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import ContentLayout from "@/layouts/admin/ContentLayout"
import { deleteBooking, fetchBookings } from "@/services/BookingService"
import * as dayjs from "dayjs"
import { useEffect, useState } from "react"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export default function Reservations() {

    const [bookings,setBookings] = useState()

    useEffect(()=>{
      (async()=>{
        const data = await fetchBookings()
        setBookings(data._data.data)
      })()
    },[])
  
    const cancelBooking = async (id) => {
      await deleteBooking(id)
      location.reload()
    }


    return (
      <ContentLayout routeName={'Reservations'} >

<table className='w-full border-separate border-spacing-y-6'>
      <thead>
        <tr className='bg-white shadow-md rounded-md mb-10'>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Name
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Adults
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Children
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Check In
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Check Out
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {
          bookings?.map((booking, index) => (
            <tr key={index} className='bg-white shadow-md rounded-md'>
              <td className='text-sm font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                {booking.name}
              </td>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                {booking.adults}
              </td>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                {booking.children}
              </td>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                {dayjs(booking.checkInDate).format('DD/MM/YYYY h:mm A ')}
              </td>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                {dayjs(booking.checkOutDate).format('DD/MM/YYYY h:mm A ')}
              </td>
             
              <td>
              <Button onClick={()=>cancelBooking(booking.id)} size={'sm'} variant="destructive">Cancel</Button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>

      </ContentLayout>
    )
  }
  