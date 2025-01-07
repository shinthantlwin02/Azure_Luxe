import TextArea from '@/components/Textarea';
import TextField from '@/components/TextField';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { createRoom } from '@/services/RoomService';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export function DialogComponent() {
  const [formData, setFormData] = useState({
    price: '',
    perDuration: '',
    roomName: '',
    bedCount: '',
    imageUrl: '',
    areaInSqm: '',
    noOfBedRoom: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || null : value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');
  //   setSuccess('');

  //   try {
  //     const response = await axios.post(
  //       `${import.meta.env.VITE_API_BASE_URL}/room/create?price=${
  //         formData.price
  //       }&perDuration=${formData.perDuration}&roomName=${
  //         formData.roomName
  //       }&bedCount=${formData.bedCount}&imageUrl=${
  //         formData.imageUrl
  //       }&areaInSqm=${formData.areaInSqm}&noOfBedRoom=${
  //         formData.noOfBedRoom
  //       }&description=${formData.description}`,
  //       {
  //         headers: { accept: '*/*' },
  //       }
  //     );

  //     if (response.status === 201) {
  //       setSuccess('Room created successfully!');
  //       setFormData({
  //         price: '',
  //         perDuration: '',
  //         roomName: '',
  //         bedCount: '',
  //         imageUrl: '',
  //         areaInSqm: '',
  //         noOfBedRoom: '',
  //         description: '',
  //       });
  //     }
  //   } catch (err) {
  //     setError('Failed to create room. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await createRoom(formData);
      setSuccess('Room created successfully!');
      // location.reload()

      setFormData({
        price: '',
        perDuration: '',
        roomName: '',
        bedCount: '',
        imageUrl: '',
        areaInSqm: '',
        noOfBedRoom: '',
        description: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex bg-[#BDA16B] gap-2 font-raleway'>
          <Plus />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] max-h-[600px] overflow-scroll'>
        <DialogHeader>
          <DialogTitle>Create Room</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <TextField
            label='Room Name'
            name='roomName'
            placeholder='Enter room name'
            value={formData.roomName}
            onChange={handleChange}
          />
          <div className='flex gap-2'>
            <TextField
              label='Price'
              name='price'
              placeholder='Enter price'
              value={formData.price}
              onChange={handleChange}
              inputType='number'
            />
            <TextField
              label='Per Duration'
              name='perDuration'
              placeholder='Enter duration'
              value={formData.perDuration}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-2'>
            <TextField
              label='Bed Count'
              name='bedCount'
              placeholder='Enter bed count'
              value={formData.bedCount}
              onChange={handleChange}
              inputType='number'
            />
            <TextField
              label='Area (in sqm)'
              name='areaInSqm'
              placeholder='Enter area in sqm'
              value={formData.areaInSqm}
              onChange={handleChange}
              inputType='number'
            />
          </div>
          <TextField
            label='Image URL'
            name='imageUrl'
            placeholder='Enter image URL'
            value={formData.imageUrl}
            onChange={handleChange}
          />
          <TextField
            label='Number of Bedrooms'
            name='noOfBedRoom'
            placeholder='Enter number of bedrooms'
            value={formData.noOfBedRoom}
            onChange={handleChange}
            inputType='number'
          />
          <TextArea
            label='Description'
            name='description'
            placeholder='Enter description'
            value={formData.description}
            onChange={handleChange}
            rows={5}
          />

          {error && <p className='text-red-500'>{error}</p>}
          {success && <p className='text-green-500'>{success}</p>}

          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded'
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Room'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
