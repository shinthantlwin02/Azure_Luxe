import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button"

const Sidebar = () => {
    const path = useLocation().pathname;
    const nav = useNavigate();
  return (
    <div className="w-[250px] h-screen max-h-screen relative">

    <div className="bg-[#1D1D1D] px-6 py-8 w-[250px] h-screen fixed top-0">
      <div className="w-full flex flex-col items-center">
        <img src="/icons/logo-lg.svg" alt="logo" className="mb-4"/>
        <h1 className="text-lg font-semibold text-[#F0EEEE] mb-16">Admin Dashboard</h1>
        <div className='w-full'>
            <Button text={'Dashboard'} className={`w-full mb-4 ${path == '/dashboard' ? 'bg-[#BDA16B] text-[#1A1A1A]' : 'bg-[#5B5B5B] text-[#D9D9D9]'}`} onClick={() => nav('/dashboard')}/>
            <Button text={'Reservations'} className={`w-full mb-4 ${path == '/dashboard/reservations' ? 'bg-[#BDA16B] text-[#1A1A1A]' : 'bg-[#5B5B5B] text-[#D9D9D9]'}`} onClick={() => nav('/dashboard/reservations')}/>
            <Button text={'Rooms'} className={`w-full mb-4 ${path == '/dashboard/rooms' ? 'bg-[#BDA16B] text-[#1A1A1A]' : 'bg-[#5B5B5B] text-[#D9D9D9]'}`} onClick={() => nav('/dashboard/rooms')}/>
            <Button text={'Guests'} className={`w-full mb-4 ${path == '/dashboard/guests' ? 'bg-[#BDA16B] text-[#1A1A1A]' : 'bg-[#5B5B5B] text-[#D9D9D9]'}`} onClick={() => nav('/dashboard/guests')}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
