import { useEffect, useState } from 'react';
import Hero from './Hero';
import RoomsSection from './Rooms';
import Amentities from './Rooms/Amentities';
import { fetchRooms } from '@/services/RoomService';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const data = await fetchRooms();
        setRooms(data._data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRooms();
  }, []);

  if (loading) return <div className='bg-[#1A1A1A] w-full h-screen flex items-center justify-center'>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <Hero />
      <RoomsSection rooms={rooms}/>
      <Amentities />
    </div>
  );
};

export default Rooms;
