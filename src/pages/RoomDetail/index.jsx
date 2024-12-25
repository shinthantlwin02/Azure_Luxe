import { rooms } from '@/data/data';
import Hero from './Hero';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Description from './Description';
import Amenities from './Amenities';

const RoomDetail = () => {
  const id = useParams().id;
  const roomId = Number(id);
  const location = useLocation();
  const [room, setRoom] = useState(null);

useEffect(()=>{
  if(location.state.room){
     setRoom(location.state.room)
  }
},[location.state])


  return (
    <div>
      <Hero />
      <Description room={room} />
      <Amenities room={room} />
    </div>
  );
};

export default RoomDetail;
