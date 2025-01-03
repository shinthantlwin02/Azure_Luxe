import { useState } from 'react';
import { DatePicker } from './ui/datepicker';
import Button from './Button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';

import * as dayjs from 'dayjs';

const ReservationBar = () => {
  const [guests, setGuests] = useState(0);
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const handleIncreaseGuests = () => {
    setGuests(guests + 1);
  };

  const handleDecreaseGuests = () => {
    setGuests(guests - 1);
  };
  return (
    <div className='container mx-auto  h-[100px] absolute -bottom-[50px]'>
      <div className='w-full h-full bg-[#121212] flex items-center justify-between border-t-2 border-t-[#BDA16B] px-20'>
        <div>
          <p className='text-xs text-[#BDA16B] font-raleway uppercase'>
            Check in
          </p>
          <Popover>
            <PopoverTrigger>
              <div
                className={`w-[250px] flex  gap-2 items-center text-[#BDA16B] text-left text-md font-semibold bg-transparent`}
              >
                {checkInDate ? (
                  format(checkInDate, 'PPP')
                ) : (
                  <span className={`text-[#BDA16B] text-md font-semibold`}>
                    Pick a date
                  </span>
                )}
                <CalendarIcon className='mr-2 h-4 w-4' color='#BDA16B' />
              </div>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={checkInDate}
                onSelect={(date) => setCheckInDate(dayjs(date).toISOString())}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <p className='text-xs text-[#BDA16B] font-raleway uppercase'>
            Check out
          </p>
          <Popover>
            <PopoverTrigger>
              <div
                className={`w-[250px] flex  gap-2 items-center text-[#BDA16B] text-left text-md font-semibold bg-transparent`}
              >
                {checkOutDate ? (
                  format(checkOutDate, 'PPP')
                ) : (
                  <span className={`text-[#BDA16B] text-md font-semibold`}>
                    Pick a date
                  </span>
                )}
                <CalendarIcon className='mr-2 h-4 w-4' color='#BDA16B' />
              </div>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={checkOutDate}
                onSelect={(date) => setCheckOutDate(dayjs(date).toISOString())}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className='flex flex-col items-center'>
          <p className='text-xs text-[#BDA16B] font-raleway uppercase'>Guest</p>
          <div className='flex items-center'>
            <Button onClick={handleDecreaseGuests} disabled={guests < 1}>
              <img src='/icons/minus.svg' />
            </Button>
            <span className='text-md font-semibold text-[#BDA16B]'>
              {guests}
            </span>
            <Button onClick={handleIncreaseGuests}>
              <img src='/icons/plus.svg' />
            </Button>
          </div>
        </div>

        <Button className='bg-[#BDA16B] text-sm font-semibold text-center rounded-none uppercase ml-20 py-1 px-10'>
          Check <br /> Availability
        </Button>
      </div>
    </div>
  );
};

export default ReservationBar;
