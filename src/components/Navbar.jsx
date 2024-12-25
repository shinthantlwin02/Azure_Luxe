import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';

const Navbar = () => {

  const [auth,setAuth] = useState()

  useEffect(()=>{
    if(localStorage.getItem('authToken')){
      setAuth('authToken')
    }
  },[])
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
          <a href={`/bookings`}>
            <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
              My Rooms
            </li>
          </a>
        </ul>
        <div className='flex justify-center'>
          <img src='/icons/logo.svg' />
        </div>
        {
          auth ? (<div className='flex items-center justify-end'>
             <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <img src='https://i.pinimg.com/474x/ca/a8/5b/caa85bcb687dbbfdd691f190d8e1bdd2.jpg' className=' w-10 h-10 rounded-full'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
          <DropdownMenuItem asChild >
            <Link to='/dashboard'>
            <Button className='w-full' variant='outline' >Dashboard</Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild >
            <Button className='w-full' variant='destructive' onClick={()=> {
              localStorage.removeItem('authToken')
              location.reload()
            }}>Logout</Button>
          </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
          </div>) : (
            <ul className='flex gap-10 items-center justify-end'>
            <Link to={`/login`}>
              <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
                login
              </li>
            </Link>
            <Link to={`/signup`}>
              <li className={`text-[#BDA16B] font-medium text-sm uppercase`}>
                sign up
              </li>
            </Link>
          </ul>
          )
        }
       
      </div>
    </div>
  );
};

export default Navbar;
