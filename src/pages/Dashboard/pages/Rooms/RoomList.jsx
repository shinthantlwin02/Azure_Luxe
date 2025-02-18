import Button from '@/components/Button';
import DeleteModal from '@/components/DeleteModal';
import { deleteRoom, fetchRooms } from '@/services/RoomService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('rooms', rooms);

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
  }, [rooms]);

  const handleDelete = async (roomId) => {
    try {
      await deleteRoom(roomId);
      toast.success('deleted successfully');
      const updatedRooms = await fetchRooms();
      setRooms(updatedRooms._data.data);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <table className='table-auto w-full border-separate border-spacing-y-6'>
      <thead>
        <tr className='bg-white shadow-md rounded-md mb-10'>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Name
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            ID
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Price
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Bed no.
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Area
          </th>
          <th className='text-start text-base pr-2 font-semibold text-[#1A1A1A] px-3 py-2 my-2'>
            Image
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rooms &&
          rooms.map((room, index) => (
            <tr key={index} className='bg-white shadow-md rounded-md'>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2 max-w-[80px]'>
                {room.roomName}
              </td>
              <td className='text-sm font-regular text-[#1A1A1A] px-3 py-2 my-2 max-w-[150px]'>
                {room.id}
              </td>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                {room.price}
              </td>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                {room.bedCount}
              </td>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                {room.areaInSqm}
              </td>
              <td className='text-base font-regular text-[#1A1A1A] px-3 py-2 my-2'>
                <img
                  src={room.imageUrl}
                  alt='room image'
                  className='w-10 h-8 object-cover'
                />
              </td>

              <td>
                <DeleteModal handleDelete={() => handleDelete(room.id)} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default RoomList;
