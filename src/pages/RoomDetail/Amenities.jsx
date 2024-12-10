import React from 'react';

const Amenities = ({ room }) => {
  if (!room) {
    return <p>Loading amenities...</p>;
  }
  return (
    <div className='flex flex-wrap items-center justify-center gap-12 max-w-[800px] mx-auto py-20'>
      {room?.amenities.map((data, index) => (
        <div key={index} className='flex flex-col items-center gap-3'>
          <img src={data.icon} alt='icon' className='w-12 h-12' />
          <p className='text-xs text-[#1A1A1A] font-raleway uppercase font-semibold'>
            {data.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
