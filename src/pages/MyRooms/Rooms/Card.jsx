import Button from '@/components/Button';
import * as dayjs from 'dayjs';

const Card = ({ booking, cancelBooking }) => {
  return (
    <div className='px-4 py-6 shadow-md rounded-md my-4 flex items-center gap-4 w-full bg-white'>
      <div className='flex items-center gap-10 w-full'>
        <div className='w-[300px] h-[150px] object-cover relative rounded-sm'>
          <img
            src={booking?.room?.imageUrl}
            alt='room'
            className='absolute w-full h-full object-cover top-0'
          />
          <div className='h-full w-full absolute top-0 px-2 py-4 bg-black/[.3] flex flex-col justify-between'>
            <div className='mt-auto'>
              <p className='text-[8px] text-[#BDA16B] font-raleway font-semibold'>
                {booking?.room?.price} /night
              </p>
              <h1 className='text-white font-raleway font-semibold text-xs mb-2'>
                {booking?.room?.roomName}
              </h1>
              <div className='flex flex-wrap items-center gap-2'>
                <div className='flex items-center gap-1'>
                  <img src='/icons/bed.svg' />
                  <p className='font-raleway text-[8px] text-white'>
                    {booking?.room?.bedCount} Bed
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <img src='/icons/area.svg' />
                  <p className='font-raleway text-[8px] text-white'>
                    {booking?.room?.areaInSqm}
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <img src='/icons/bath.svg' />
                  <p className='font-raleway text-[8px] text-white'>
                    {booking?.room?.noOfBedRoom} Bathroom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex items-center w-full justify-between mb-4'>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#BDA16B] text-md font-raleway font-semibold mb-2'>
                {' '}
                Name
              </h1>
              <p className='text-[#BDA16B] text-sm font-raleway mb-2'>
                {booking.name}
              </p>
            </div>

            <div className='flex flex-col items-center'>
              <h1 className='text-[#BDA16B] text-md font-raleway font-semibold mb-2'>
                Adults
              </h1>
              <p className='text-[#BDA16B] text-sm font-raleway mb-2'>
                {booking.adults}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#BDA16B] text-md font-raleway font-semibold mb-2'>
                Children
              </h1>
              <p className='text-[#BDA16B] text-sm font-raleway mb-2'>
                {booking.children}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#BDA16B] text-md font-raleway font-semibold mb-2'>
                Check in
              </h1>
              <p className='text-[#BDA16B] text-sm font-raleway mb-2'>
                {dayjs(booking.checkInDate).format('DD/MM/YYYY h:mm A ')}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#BDA16B] text-md font-raleway font-semibold mb-2'>
                Check out
              </h1>
              <p className='text-[#BDA16B] text-sm font-raleway mb-2'>
                {dayjs(booking.checkOutDate).format('DD/MM/YYYY h:mm A ')}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4 ml-auto'>
            <Button
              onClick={() => cancelBooking(booking.id)}
              className={'bg-[#BDA16B] text-white'}
            >
              Cancel
            </Button>
            <Button
              onClick={() => cancelBooking(booking.id)}
              className={'bg-white border border-[#BDA16B] text-[#BDA16B]'}
            >
              View Rooms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
