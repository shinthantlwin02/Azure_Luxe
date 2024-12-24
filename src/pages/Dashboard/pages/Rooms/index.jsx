import { DialogComponent } from './Dialog';
import RoomList from './RoomList';

const RoomsDashboard = () => {
  return (
    <div className='p-20'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-2xl uppercase font-bold text-[#1A1A1A] font-raleway'>
          Rooms
        </h1>
        <DialogComponent />
      </div>
      <RoomList />
    </div>
  );
};

export default RoomsDashboard;
