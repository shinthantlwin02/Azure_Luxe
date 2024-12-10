import { motion as m } from 'framer-motion';
import Button from '../../../components/Button';
import Navbar from '../../../components/Navbar';
import ReservationBar from '../../../components/ReservationBar';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-[url('/images/hero-background.png')] h-screen">
      <div className='bg-[#1E1E1E]/[.70] h-screen relative'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-full pt-20'>
          {/* stars with transition */}
          <div className='flex gap-4 justify-center mb-4'>
            <m.img
              src='/icons/star.svg'
              className='w-3 h-3'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                stiffness: 60,
                type: 'spring',
                delay: 2.8,
              }}
            />
            <m.img
              src='/icons/star.svg'
              className='w-6 h-6 -mt-4'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                stiffness: 60,
                type: 'spring',
                delay: 2.4,
              }}
            />
            <m.img
              src='/icons/star.svg'
              className='w-auto h-auto -mt-10'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                stiffness: 60,
                type: 'spring',
                delay: 2,
              }}
            />
            <m.img
              src='/icons/star.svg'
              className='w-6 h-6 -mt-4'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                stiffness: 60,
                type: 'spring',
                delay: 2.4,
              }}
            />
            <m.img
              src='/icons/star.svg'
              className='w-3 h-3'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                stiffness: 60,
                type: 'spring',
                delay: 2.8,
              }}
            />
          </div>
          {/* stars with transition end */}

          {/* hotel name with transition */}
          <div className='flex items-center gap-4'>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, stiffness: 60, type: 'spring' }}
            >
              A
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 0.2,
              }}
            >
              z
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 0.4,
              }}
            >
              u
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 0.6,
              }}
            >
              r
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 0.8,
              }}
            >
              e
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3 w-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 1,
              }}
            >
              {''}
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 1.2,
              }}
            >
              l
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 1.4,
              }}
            >
              u
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 1.6,
              }}
            >
              x
            </m.h1>
            <m.h1
              className='text-[80px] text-white font-cinzel tracking-[0.4em] mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                stiffness: 60,
                type: 'spring',
                delay: 1.8,
              }}
            >
              e
            </m.h1>
          </div>
          {/* hotel name with transition end */}

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
            Azure Luxe is your sanctuary. We are honored to be your host and
            look forward to offering you an experience of relaxation and
            exclusivity that is uniquely Azure Luxe.
          </m.p>
          <m.p
            className='text-sm text-[#DEDEDE] font-raleway text-center mb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              stiffness: 60,
              type: 'spring',
            }}
          >
            Since 1998
          </m.p>

          <div className='flex gap-6 justify-center'>
            <Link to={`/rooms`}>
              <Button
                text='view rooms'
                className='bg-transparent text-[#BDA16B] border border-[#BDA16B] text-sm font-raleway font-semibold uppercase'
              />
            </Link>
            <Button
              text='book now'
              className='bg-[#BDA16B] text-[#0C2A44] text-sm font-raleway font-semibold uppercase'
            />
          </div>

          <ReservationBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
