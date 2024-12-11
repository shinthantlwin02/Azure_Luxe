import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-[#1E1E1E]/[.80] w-full py-2 fixed top-0 z-50'>
      <div className='container mx-auto grid grid-cols-3'>
        <ul className='flex gap-10 items-center'>
          <Link to={`/`}>
            <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
              Home
            </li>
          </Link>
          <Link to={`/rooms`}>
            <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
              Rooms
            </li>
          </Link>
          <Link to={`/contact`}>
            <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
              Contact
            </li>
          </Link>
          <a href='/#services'>
            <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
              Services
            </li>
          </a>
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
