import { motion as m } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import { DiamondIcon } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-[url('/images/booking-bg.png')] h-screen">
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
            className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3 uppercase'
          >
            Your Bookings
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
            At Azure Luxe Hotel, our first priority is delivering unparalleled
            quality in every detail. From our luxurious accommodations to our
            attentive service, we are committed to ensuring every guest
            experiences the very best. Your comfort and satisfaction inspire us
            to set the highest standards, because excellence is not just our
            goal
          </m.p>
          <div className='flex items-center'>
            <DiamondIcon fill='white' color='white' size={10} />
            <hr className='w-12 border-white' />
            <p className='text-sm text-[#DEDEDE] font-raleway uppercase px-2'>
              It is our promise
            </p>
            <hr className='w-12 border-white' />
            <DiamondIcon fill='white' color='white' size={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
