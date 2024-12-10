import { motion as m } from 'framer-motion';
import Navbar from '../../../components/Navbar';

const Hero = () => {
  return (
    <div className="bg-[url('/images/room-detail-bg.png')] h-screen">
      <div className='bg-[#1E1E1E]/[.70] h-screen relative'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-full pt-20'>
          <m.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              stiffness: 60,
              type: 'spring',
            }}
            className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
          >
            Room Detail
          </m.h1>

          <m.p
            className='text-sm text-[#DEDEDE] font-raleway text-center mb-2 max-w-[600px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              stiffness: 60,
              type: 'spring',
            }}
          >
            Relax in style with our comfortable rooms and luxurious suites. Each
            space is thoughtfully designed with modern amenities to make your
            stay unforgettable.
          </m.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
