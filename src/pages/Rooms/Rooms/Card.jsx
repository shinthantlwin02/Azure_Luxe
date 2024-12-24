import Button from '@/components/Button';
import { Link } from 'react-router-dom';

const Card = ({ room }) => {
  return (
    <div className='w-[30%] h-[380px] object-cover relative'>
      <img
        src={room.imageUrl}
        alt='room'
        className='absolute w-full h-full object-cover top-0'
      />
      <div className='h-full w-full absolute top-0 px-3 py-6 bg-black/[.3] hover:bg-black/[.7] flex flex-col justify-between group transition-all delay-75 duration-1000'>
        <div className='opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-1000 flex items-center justify-center gap-2 h-full'>
          <Link to={`/rooms/detail/${room.id}`}>
            <Button
              text={'Book Now'}
              className={'bg-[#BDA16B] rounded-none text-sm'}
            />
          </Link>
          <Link
            to={`/rooms/detail/${room.id}`}
            className='text-white underline text-sm'
          >
            View Details
          </Link>
        </div>
        <div>
          <p className='text-xs text-[#BDA16B] font-raleway font-semibold'>
            {room.price} / {room.perDuration}
          </p>
          <h1 className='text-white font-raleway font-semibold text-lg mb-4'>
            {room.roomName}
          </h1>
          <div className='flex flex-wrap items-center gap-2'>
            <div className='flex items-center gap-1'>
              <img src='/icons/bed.svg' />
              <p className='font-raleway text-xs text-white'>
                {room.bedCount} Bed
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/icons/area.svg' />
              <p className='font-raleway text-xs text-white'>
                {room.areaInSqm} Sqm
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/icons/bath.svg' />
              <p className='font-raleway text-xs text-white'>
                {room.noOfBedRoom} Bathroom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
