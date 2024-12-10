import Form from './Form';

const ContactForm = () => {
  return (
    <div className='py-20 container mx-auto'>
      <header className='flex flex-col items-center mb-20'>
        <h1 className='text-3xl font-cinzel text-[#BDA16B] mb-4'>
          Get In Touch
        </h1>
        <p className='text-sm text-[#BDA16B] font-raleway text-center max-w-[800px]'>
          At Azure Luxe, we warmly welcome you to discover stories of luxury and
          tranquility. Thank you for being part of our journey. We look forward
          to making your experience extraordinary!
        </p>
      </header>

      <div className='flex justify-between items-center'>
        <div className='max-w-[500px]'>
          <div className='mb-6'>
            <img src='/icons/map.svg' alt='map' className='mb-2' />
            <h1 className='text-base font-semibold text-[#BDA16B] font-raleway mb-2'>
              Location
            </h1>
            <p className='text-sm text-[#BDA16B] font-raleway'>
              The Azure Luxe Hotel is situated on Shin Saw Pu Road, near Link
              Lane, in the lively Sanchaung Township of Yangon, Myanmar
            </p>
          </div>
          <div className='mb-6'>
            <img src='/icons/phone.svg' alt='map' className='mb-2' />
            <h1 className='text-base font-semibold text-[#BDA16B] font-raleway mb-2'>
              Phone
            </h1>
            <p className='text-sm text-[#BDA16B] font-raleway'>
              +959 789876545
            </p>
            <p className='text-sm text-[#BDA16B] font-raleway'>
              +959 789876560
            </p>
          </div>
          <div className='mb-6'>
            <img src='/icons/mail.svg' alt='map' className='mb-2' />
            <h1 className='text-base font-semibold text-[#BDA16B] font-raleway mb-2'>
              Email
            </h1>
            <p className='text-sm text-[#BDA16B] font-raleway'>
              info.azureluxe@gmail.com
            </p>
            <p className='text-sm text-[#BDA16B] font-raleway'>
              azureluxehotel@gmail.com
            </p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
