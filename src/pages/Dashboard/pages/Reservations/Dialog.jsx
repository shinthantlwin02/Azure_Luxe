import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Button from '@/components/Button';
import axios from 'axios';

export function DialogComponent() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomId: '',
    checkInDate: '',
    checkOutDate: '',
    adults: 1,
    children: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === 'checkInDate' || name === 'checkOutDate') {
      // Keep the date as 'YYYY-MM-DD' format for UI
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (name === 'adults' || name === 'children') {
      setFormData((prev) => ({
        ...prev,
        [name]: parseInt(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'number' ? parseInt(value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    //Format the checkInDate and checkOutDate before sending to API
    const formattedCheckInDate = new Date(formData.checkInDate).toISOString();
    const formattedCheckOutDate = new Date(formData.checkOutDate).toISOString();

    console.log('Payload:', {
      name: formData.name,
      phone: formData.phone,
      roomId: formData.roomId,
      checkInDate: formattedCheckInDate,
      checkOutDate: formattedCheckOutDate,
      adults: formData.adults,
      children: formData.children,
    });
    try {
      const token = localStorage.getItem('authToken');

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/book/register?name=${
          formData.name
        }&phone=${formData.phone}&roomId=${
          formData.roomId
        }&checkInDate=${formattedCheckInDate}&checkOutDate=${formattedCheckOutDate}&adults=${
          formData.adults
        }&children=${formData.children}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      console.log('token', token);

      setSuccess('created successfully!');
      return response.data;
    } catch (err) {
      setError(
        err.response?.data?.message || 'An error occurred. Please try again.'
      );
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex bg-[#BDA16B] gap-2 font-raleway'>Create</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] max-h-[600px] overflow-scroll'>
        <DialogHeader>
          <DialogTitle>Create Booking</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <div className='mb-2 w-[250px]'>
            <label htmlFor='name' className='mb-1'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='w-full border border-[#BDA16B] px-2 py-1.5 bg-transparent'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-2 w-[250px]'>
            <label htmlFor='phone' className='mb-1'>
              Phone
            </label>
            <input
              type='text'
              name='phone'
              id='phone'
              className='w-full border border-[#BDA16B] px-2 py-1.5 bg-transparent'
              placeholder='Enter your phone no.'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-2 w-[250px]'>
            <label htmlFor='roomId' className='mb-1'>
              Room ID
            </label>
            <input
              type='text'
              name='roomId'
              id='roomId'
              className='w-full border border-[#BDA16B] px-2 py-1.5 bg-transparent'
              placeholder='Enter the room ID'
              value={formData.roomId}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-2'>
            <p className='text-xs text-[#1A1A1A] font-raleway font-medium uppercase mb-1'>
              Check-in Date
            </p>
            <input
              type='date'
              name='checkInDate'
              className='w-[250px] px-2 py-1.5 border border-[#BDA16B] bg-transparent'
              value={formData.checkInDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-2'>
            <p className='text-xs text-[#1A1A1A] font-raleway font-medium uppercase mb-1'>
              Check-out Date
            </p>
            <input
              type='date'
              name='checkOutDate'
              className='w-[250px] px-2 py-1.5 border border-[#BDA16B] bg-transparent'
              value={formData.checkOutDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className='w-[250px] flex gap-4 mb-10'>
            <div className='w-full'>
              <p>Adults</p>
              <select
                name='adults'
                id='adults'
                className='w-full px-2 py-1.5 border border-[#BDA16B]'
                value={formData.adults}
                onChange={handleChange}
                required
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
            <div className='w-full'>
              <p>Children</p>
              <select
                name='children'
                id='children'
                className='w-full px-2 py-1.5 border border-[#BDA16B]'
                value={formData.children}
                onChange={handleChange}
              >
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
          </div>

          {error ? (
            <p className='text-red-500'>{error}</p>
          ) : (
            success && <p className='text-green-500'>{success}</p>
          )}

          <Button
            text='Book Now'
            className='bg-[#BDA16B] text-white w-[250px] capitalize rounded-none'
            disabled={loading}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
