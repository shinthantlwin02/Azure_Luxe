import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#1A1A1A]'>
      <div className='container mx-auto py-4 flex flex-col items-center'>
        {/* social links */}
        <ul className='flex items-center gap-10 justify-center mb-4'>
          <li>
            <a href='#'>
              <img src='/icons/facebook.svg' alt='facebook' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/icons/instagram.svg' alt='instagram' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/icons/twitter.svg' alt='twitter' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/icons/youtube.svg' alt='youtube' />
            </a>
          </li>
        </ul>
        {/* social links end */}

        <p className='text-[#BDA16B] font-raleway text-base font-light text-center mb-4 max-w-[1000px]'>
          Thank you for choosing Azure Luxe, where elegance meets tranquility.
          It’s our honor to provide you with a refined experience, and we look
          forward to welcoming you back to your sanctuary of luxury.
        </p>

        <img src='/icons/logo-lg.svg' alt='logo' className='text-center mb-4' />

        <div className='text-[#BDA16B] font-light font-raleway flex items-center gap-4 mb-4'>
          <p>Privacy Policy</p>
          <hr className='w-4 rotate-90 border border-[#BDA16B]' />
          <p>Terms & Conditions</p>
          <hr className='w-4 rotate-90 border border-[#BDA16B]' />
          <p>Cancellation Policy</p>
        </div>

        <p className='text-[#BDA16B] font-raleway text-base font-light text-center'>
          &copy;2024 Azure Luxe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
