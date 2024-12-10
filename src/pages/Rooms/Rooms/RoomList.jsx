import { rooms } from '@/data/data';
import Card from './Card';

const RoomList = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-between container mx-auto'>
      {rooms.map((room, index) => (
        <Card key={index} room={room} />
      ))}
    </div>
  );
};

export default RoomList;
