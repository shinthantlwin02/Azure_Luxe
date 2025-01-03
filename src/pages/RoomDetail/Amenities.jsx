import { amenities } from "@/data/data";

const Amenities = () => {
 
  return (
    <div className='py-20'>
      <h1 className='font-cinzel text-[28px] text-[#1A1A1A] text-center mb-10'>
        Amentities
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-12 max-w-[800px] mx-auto'>
        {amenities?.map((data, index) => (
          <div key={index} className='flex flex-col items-center gap-3'>
            <img src={data.icon} alt='icon' className='w-12 h-12' />
            <p className='text-xs text-[#1A1A1A] font-raleway uppercase font-semibold'>
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
