import Banner from './Banner';
import RoomList from './RoomList';

const RoomsSection = ({rooms}) => {
  return (
    <div className='py-20'>
      <header className='flex flex-col items-center'>
        <p className='font-raleway text-xs font-bold text-center text-[#BDA16B] mb-6'>
          Welcome to Azure Luxe
        </p>
        <h1 className='font-cinzel text-[28px] text-center text-[#1A1A1A] max-w-[738px]'>
          Explore our refined accommodation options and find the perfect space
          for your stay.
        </h1>
      </header>

      <Banner rooms={rooms}/>
      <RoomList rooms={rooms}/>
    </div>
  );
};

export default RoomsSection;
