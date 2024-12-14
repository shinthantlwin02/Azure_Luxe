import ReservationForm from './ReservationForm';

const Description = ({ room }) => {
  if (!room) {
    return <p>Loading room details...</p>;
  }
  return (
    <div className='container mx-auto py-20'>
      <header className='flex flex-col items-center mb-8'>
        <p className='font-raleway text-xs font-bold text-[#BDA16B] uppercase mb-2'>
          welcome to Azure luxe
        </p>
        <h1 className='font-cinzel text-[#1A1A1A] text-[28px] uppercase'>
          {room.title}
        </h1>
      </header>

      <div className='w-full h-[600px] mb-8'>
        <img src={room.img} alt='room' className='w-full h-full object-cover' />
      </div>

      <div className='flex items-center gap-10'>
        <div className='w-[70%]'>
          <h1 className='font-raleway font-semibold text-2xl text-[#BDA16B] mb-6'>
            {room.price}$ /Night
          </h1>
          <h1 className='text-xl font-raleway font-medium text-[#1A1A1A] mb-2'>
            Description
          </h1>
          <p className='text-md font-raleway text-[#1A1A1A] mb-6'>
            {room.description}
          </p>
          <div className='flex items-center gap-4 mb-10'>
            <div className='flex items-center gap-2'>
              <img src='/icons/bed.svg' className='w-4 h-4' />
              <p className='font-raleway text-sm text-[#1D1D1D]'>
                {room.features.bed} Bed
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <img src='/icons/area.svg' className='w-4 h-4' />
              <p className='font-raleway text-sm text-[#1D1D1D]'>
                {room.features.area}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <img src='/icons/bath.svg' className='w-4 h-4' />
              <p className='font-raleway text-sm text-[#1D1D1D]'>
                {room.features.bathroom} Bathroom
              </p>
            </div>
          </div>
        </div>
        <hr className='border border-[#BDA16B] h-[300px]' />
        <ReservationForm />
      </div>
    </div>
  );
};

export default Description;
