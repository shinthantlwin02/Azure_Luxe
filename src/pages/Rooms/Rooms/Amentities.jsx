import { amenities } from '@/data/data';

const Amentities = () => {
  return (
    <div className='bg-white py-20'>
      <header className='flex flex-col items-center mb-20'>
        <p className='font-raleway text-xs uppercase font-semibold text-[#BDA16B] text-center mb-4'>
          In-room amenities
        </p>
        <h1 className='font-cinzel text-[28px] text-[#1A1A1A] uppercase text-center max-w-[730px]'>
          Our spaces have all the essentials you need for your stay.
        </h1>
      </header>

      <div className='flex items-center justify-center gap-10 flex-wrap max-w-[800px] mx-auto'>
        {amenities.map((data, index) => (
          <div key={index} className='flex flex-col items-center gap-4'>
            <img src={data.icon} alt='icon' className='w-10 h-10' />
            <p className='text-xs text-[#1A1A1A] font-raleway uppercase font-medium'>
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amentities;
