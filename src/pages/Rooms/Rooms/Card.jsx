const Card = ({ room }) => {
  return (
    <div className='w-[330px] h-[380px] object-cover relative'>
      <img
        src={room.img}
        alt='room'
        className='absolute w-full h-full object-cover top-0'
      />
      <div className='h-full w-full absolute top-0 px-3 py-6 bg-black/[.3] flex flex-col justify-between'>
        <div>{''}</div>
        <div className=''>
          <p className='text-xs text-[#BDA16B] font-raleway font-semibold'>
            {room.price} /night
          </p>
          <h1 className='text-white font-raleway font-semibold text-lg mb-4'>
            {room.title}
          </h1>
          <div className='flex flex-wrap items-center gap-2'>
            <div className='flex items-center gap-1'>
              <img src='/icons/bed.svg' />
              <p className='font-raleway text-xs text-white'>
                {room.features.bed} Bed
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/icons/area.svg' />
              <p className='font-raleway text-xs text-white'>
                {room.features.area}
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <img src='/icons/bath.svg' />
              <p className='font-raleway text-xs text-white'>
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
