import Card from './Card';

const RoomList = ({ rooms }) => {
  return (
    <div className='flex flex-wrap gap-x-[5%] gap-y-10 container mx-auto'>
      {rooms?.map((room, index) => (
        <Card key={index} room={room} />
      ))}
      test
    </div>
  );
};

export default RoomList;
