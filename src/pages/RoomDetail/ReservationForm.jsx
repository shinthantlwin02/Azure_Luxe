import Button from '@/components/Button';
// import { DatePicker } from '@/components/ui/datepicker';
import { createBooking } from '@/services/BookingService';
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import dayjs from 'dayjs';

import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const ReservationForm = ({ roomId }) => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomId: roomId,
    checkInDate: '',
    checkOutDate: '',
    adults: 1,
    children: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBooking(formData);
      setFormData({
        name: '',
        phone: '',
        roomId: roomId,
        checkInDate: '',
        checkOutDate: '',
        adults: 1,
        children: 0,
      });
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className='w-[30%]'>
      <h1 className='text-xl font-raleway font-medium text-[#1A1A1A] text-center mb-6'>
        Reservation
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div className='mb-2 w-[250px]'>
          <label htmlFor='name' className='mb-1'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            className='w-full border border-[#BDA16B] px-2 py-1.5 bg-transparent'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-2 w-[250px]'>
          <label htmlFor='phone' className='mb-1'>
            Phone
          </label>
          <input
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            type='text'
            className='w-full border border-[#BDA16B] px-2 py-1.5 bg-transparent'
            placeholder='Enter your phone no.'
          />
        </div>
        <div className='mb-2'>
          <p className='text-xs text-[#1A1A1A] font-raleway font-medium uppercase mb-1'>
            Check in
          </p>

          <Popover>
            <PopoverTrigger>
              <div
                className={`w-[250px] px-2 py-1.5 border border-[#BDA16B] flex justify-between  gap-2 items-center  text-left text-md font-semibold bg-transparent px-0`}
              >
                {formData.checkInDate ? (
                  format(formData.checkInDate, 'PPP')
                ) : (
                  <span className={`text-[#1A1A1A] text-md font-semibold`}>
                    Pick a date
                  </span>
                )}
                <CalendarIcon className='mr-2 h-4 w-4' color='#BDA16B' />
              </div>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={formData.checkInDate}
                onSelect={(date) =>
                  setFormData((pre) => ({
                    ...formData,
                    checkInDate: dayjs(date).toISOString(),
                  }))
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='mb-2'>
          <p className='text-xs text-[#1A1A1A] font-raleway font-medium uppercase mb-1'>
            Check out
          </p>
          {/* <DatePicker
          value={formData.checkOutDate}
          onChange={(date)=> setFormData({...formData, checkOutDate: date})}
            className={`w-[250px] px-2 py-1.5 border border-[#BDA16B] flex justify-between`}
            placeholderClassName={`text-[#1A1A1A] font-light`}
          /> */}
          <Popover>
            <PopoverTrigger>
              <div
                className={`w-[250px] px-2 py-1.5 border border-[#BDA16B] flex justify-between  gap-2 items-center  text-left text-md font-semibold bg-transparent px-0`}
              >
                {formData.checkOutDate ? (
                  format(formData.checkOutDate, 'PPP')
                ) : (
                  <span className={`text-[#1A1A1A] text-md font-semibold`}>
                    Pick a date
                  </span>
                )}
                <CalendarIcon className='mr-2 h-4 w-4' color='#BDA16B' />
              </div>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={formData.checkOutDate}
                onSelect={(date) =>
                  setFormData((pre) => ({
                    ...formData,
                    checkOutDate: dayjs(date).toISOString(),
                  }))
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className='w-[250px] flex gap-4 mb-10'>
          <div className='w-full'>
            <p>Adult</p>
            <select
              value={formData.adults}
              onChange={(e) =>
                setFormData({ ...formData, adults: e.target.value })
              }
              name='adult'
              id='adult'
              className='w-full px-2 py-1.5 border border-[#BDA16B]'
            >
              <option value='0'>0</option>
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
              value={formData.children}
              onChange={(e) =>
                setFormData({ ...formData, children: e.target.value })
              }
              className='w-full px-2 py-1.5 border border-[#BDA16B]'
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

        {error && (
          <p className='py-2 text-red-500 text-sm'>
            Failed to reserve room! Please try again later
          </p>
        )}

        <Button
          type='submit'
          text='book now'
          className='bg-[#BDA16B] text-white w-[250px] capitalize rounded-none'
        />
      </form>
    </div>
  );
};

export default ReservationForm;
