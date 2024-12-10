import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-[#1E1E1E]/[.80] w-full absolute top-0 py-2'>
      <div className='container mx-auto grid grid-cols-3'>
        <ul className='flex gap-10 items-center'>
          <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
            Home
          </li>
          <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
            Rooms
          </li>
          <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
            Contact
          </li>
          <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
            Services
          </li>
        </ul>
        <div className='flex justify-center'>
          <img src='/icons/logo.svg' />
        </div>
        <ul className='flex gap-10 items-center justify-end'>
          <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
            login
          </li>
          <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
            sign up
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
