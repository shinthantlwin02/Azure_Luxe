import Button from '@/components/Button';
import { ChevronRight } from 'lucide-react';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

const Location = () => {
  return (
    <div className='bg-[#1A1A1A] py-20'>
      <div className='flex items-center gap-20 pl-20'>
        <div>
          <h1 className='font-cinzel text-3xl text-[#D9D9D9] uppercase mb-4'>
            Where We Located
          </h1>
          <p className='font-raleway text-sm text-[#DEDEDE] font-light mb-2'>
            Nestled on{' '}
            <span className='font-bold'>Shin Saw Pu Road, near Link Lane</span>,
            in the heart of <span className='font-bold'>Yangon</span>, Azure
            Luxe Hotel offers a serene escape for travelers seeking tranquility
            and elegance.{' '}
          </p>
          <p className='font-raleway text-sm text-[#DEDEDE] font-light mb-2'>
            Established in 1998, the hotel combines refined luxury with
            personalized service to create an unforgettable experience. From
            exquisitely designed rooms to top-tier amenities, including a serene
            infinity pool, Azure Luxe is dedicated to making each guest&apos;s
            stay a harmonious blend of comfort and sophistication.
          </p>
          <p className='font-raleway text-sm text-[#DEDEDE] font-light mb-6'>
            Welcome to Azure Luxe—your sanctuary of calm and luxury in{' '}
            <span className='font-bold'>Myanmar</span>.
          </p>
          <Link to={`/contact`}>
            <Button className={'flex uppercase bg-[#BDA16B] rounded-none'}>
              contact us <ChevronRight />
            </Button>
          </Link>
        </div>

        <m.div
          initial={{ x: 400 }}
          whileInView={{ x: 0 }}
          transition={{ stiffness: 20, type: 'spring' }}
          className='border border-[#BDA16B] border-r-0 pl-2 py-2 min-w-[650px] h-full relative'
        >
          <img
            src='/images/map-white.png'
            alt='map'
            className='w-full h-full object-cover'
          />
          <img
            src='/icons/pin-rounded.svg'
            alt='pin'
            className='absolute top-16 right-36'
          />
        </m.div>
      </div>
    </div>
  );
};

export default Location;
