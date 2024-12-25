import Button from '@/components/Button';
import { Link } from 'react-router-dom';

const Card = ({ room }) => {

  
  return (
    <div className='w-[300px] h-[200px] object-cover relative rounded-sm'>
      <img
        src={room.img}
        alt='room'
        className='absolute w-full h-full object-cover top-0'
      />
      <div className='h-full w-full absolute top-0 px-2 py-4 bg-black/[.3] hover:bg-black/[.7] flex flex-col justify-between group transition-all delay-75 duration-1000'>
        <div className='mt-auto'>
          <p className='text-[8px] text-[#BDA16B] font-raleway font-semibold'>
            {room.price} /night
          </p>
          <h1 className='text-white font-raleway font-semibold text-xs mb-2'>
            {room.title}
          </h1>
          <div className='flex flex-wrap items-center gap-2'>
            <div className='flex items-center gap-1'>
              <img src='/icons/bed.svg' />
              <p className='font-raleway text-[8px] text-white'>
                {room.features.bed} Bed
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/icons/area.svg' />
              <p className='font-raleway text-[8px] text-white'>
                {room.features.area}
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/icons/bath.svg' />
              <p className='font-raleway text-[8px] text-white'>
                {room.features.bathroom} Bathroom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
