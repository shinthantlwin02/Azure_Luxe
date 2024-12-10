import { rooms } from '@/data/data';
import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Description from './Description';
import Amenities from './Amenities';

const RoomDetail = () => {
  const id = useParams().id;
  const roomId = Number(id);
  const [room, setRoom] = useState(null);
  useEffect(() => {
    if (rooms) {
      setRoom(rooms.find((room) => room.id === roomId));
    }
  }, [roomId]);

  return (
    <div>
      <Hero />
      <Description room={room} />
      <Amenities room={room} />
    </div>
  );
};

export default RoomDetail;
