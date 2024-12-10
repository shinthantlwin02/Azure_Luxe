import { motion as m } from 'framer-motion';

const About = () => {
  return (
    <div className='py-20 bg-[#1A1A1A]'>
      <h1 className='text-3xl text-[#D9D9D9] mb-8 uppercase font-cinzel text-center'>
        About Us
      </h1>
      <div className='flex items-center container mx-auto'>
        <m.div
          initial={{ x: -400 }}
          whileInView={{ x: 0 }}
          transition={{ stiffness: 20, type: 'spring' }}
          className='w-content h-[350px] border-r-2 border-b-2 border-[#BDA16B] pl-3 pr-40 py-2 bg-[#1A1A1A] z-10 -mr-56'
        >
          <h1 className='text-2xl text-[#D9D9D9] font-cinzel mb-6 uppercase'>
            Welcome to azure luxe
          </h1>
          <p className='text-sm text-[#DEDEDE] font-raleway mb-3'>
            Azure Luxe Hotel, established in 1998, is a sanctuary of luxury and
            tranquility, designed for discerning travelers seeking a refined
            escape. Nestled in serene surroundings, we offer an elegant
            experience marked by personalized service, sophisticated
            accommodations, and a peaceful ambiance.
          </p>
          <p className='text-sm text-[#DEDEDE] font-raleway mb-3'>
            At Azure Luxe, our mission is simple: to deliver an unforgettable
            stay where every detail inspires comfort and relaxation. With
            amenities like exquisite dining, a full-service spa, and tailored
            experiences, we strive to create memorable moments that reflect our
            commitment to excellence and sustainability.
          </p>
          <p className='text-sm text-[#DEDEDE] font-raleway mb-3'>
            Join us at Azure Luxe, where luxury meets calm.
          </p>
        </m.div>
        <m.img
          initial={{ opacity: -10 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src='/images/about-us.png'
          className=''
        />
      </div>
    </div>
  );
};

export default About;
