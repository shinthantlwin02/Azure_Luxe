const WhatWeOffer = () => {
  return (
    <div className='py-10'>
      <h1 className='text-center font-cinzel text-[#1A1A1A] text-4xl'>
        What We Offer
      </h1>
      <div className='flex justify-center items-center gap-20 mb-10'>
        <div className='mt-28'>
          <div className='w-[320px] h-[420px] relative mb-2'>
            <div className='w-[320px] h-[420px] bg-black/[.2] absolute top-0'></div>
            <img
              src='/images/spa.png'
              alt='spa'
              className='w-[320px] h-[420px] object-cover'
            />
          </div>

          <p className='text-sm font-raleway font-semibold text-[#BDA16B] uppercase'>
            Amenities
          </p>
          <h1 className='text-base font-raleway font-semibold text-[#1D1D1D]'>
            Spa & Wellness Retreats
          </h1>
        </div>

        <div className='relative'>
          <div className='w-[320px] h-[420px] relative mb-2 z-10'>
            <div className='absolute top-28'>
              <img
                src='/images/azure-luxe-maskgroup.png'
                alt='azure luxe'
                className='mb-6'
              />
              <h1 className='text-6xl font-cinzel text-white text-center'>
                Hotel
              </h1>
            </div>

            <div className='w-[320px] h-[420px] bg-black/[.2] absolute top-0'></div>
            <img
              src='/images/pool.png'
              alt='spa'
              className='w-[320px] h-[420px] object-cover'
            />
          </div>
          <h1 className='text-[56px] font-cinzel font-semibold uppercase text-[#BDA16B] absolute top-[115px] tracking-[.12em] -left-14 text-nowrap z-0'>
            Azure Luxe
          </h1>

          <p className='text-sm font-raleway font-semibold text-[#BDA16B] uppercase'>
            Amenities
          </p>
          <h1 className='text-base font-raleway font-semibold text-[#1D1D1D]'>
            Swimming Pool
          </h1>
        </div>

        <div className='mt-28'>
          <div className='w-[320px] h-[420px] relative mb-2'>
            <div className='w-[320px] h-[420px] bg-black/[.2] absolute top-0'></div>
            <img
              src='/images/chef.png'
              alt='spa'
              className='w-[320px] h-[420px] object-cover'
            />
          </div>

          <p className='text-sm font-raleway font-semibold text-[#BDA16B] uppercase'>
            Amenities
          </p>
          <h1 className='text-base font-raleway font-semibold text-[#1D1D1D]'>
            Fine Dining Experiences
          </h1>
        </div>
      </div>

      <p className='text-sm font-light text-[#1A1A1A] max-w-[600px] mx-auto text-center'>
        Indulge in unparalleled comfort and world-class amenities, meticulously
        crafted to elevate every moment. At Azure Luxe, every detail is designed
        to make your stay an unforgettable experience in luxury and tranquility.
      </p>
    </div>
  );
};

export default WhatWeOffer;
