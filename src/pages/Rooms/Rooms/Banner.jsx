import Button from '@/components/Button';
import { rooms } from '@/data/data';

const Banner = () => {
  const room = rooms.find((room) => room.title === 'Superior Room');
  return (
    <div className='flex justify-between container mx-auto py-20'>
      <div className='w-[65%] pt-10'>
        <div className='flex gap-1 mb-2'>
          {[...Array(5)].map((_, index) => (
            <img key={index} src='/icons/star.svg' alt='star' className='w-4' />
          ))}
        </div>

        <h1 className='font-cinzel text-5xl text-[#1A1A1A] mb-6'>
          {room.title}
        </h1>
        <p className='font-raleway text-sm font-light text-[#1D1D1D] mb-8'>
          {room.description}
        </p>

        <div className='flex items-center gap-4 mb-10'>
          <div className='flex items-center gap-2'>
            <img src='/icons/bed.svg' />
            <p className='font-raleway text-xs text-[#1D1D1D]'>
              {room.features.bed} Bed
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <img src='/icons/area.svg' />
            <p className='font-raleway text-xs text-[#1D1D1D]'>
              {room.features.area}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <img src='/icons/bath.svg' />
            <p className='font-raleway text-xs text-[#1D1D1D]'>
              {room.features.bathroom} Bathroom
            </p>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Button
            text='Book Now'
            className='font-raleway text-sm text-[#1A1A1A] bg-[#BDA16B] rounded-none'
          />
          <Button className='font-raleway text-sm text-[#1A1A1A] bg-transparent flex items-center gap-2'>
            View Details <img src='/icons/chevron-right.svg' />
          </Button>
        </div>
      </div>

      <div className='relative w-auto'>
        <div className='w-[350px] h-[400px] border-2 border-[#BDA16B] absolute top-0 right-0 '></div>
        <div className='w-[350px] h-[400px] absolute top-4 right-4 '>
          <img
            src={room.img}
            alt='room'
            className='w-full h-full object-cover object-left'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
