import { useState } from 'react';
import { DatePicker } from './ui/datepicker';
import Button from './Button';

const ReservationBar = () => {
  const [guests, setGuests] = useState(0);

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
        <DatePicker placeholderClassName={`text-[#BDA16B]`} className={`text-[#BDA16B] w-[280px]`}/>
      </div>

      <div>
        <p className='text-xs text-[#BDA16B] font-raleway uppercase'>
          Check out
        </p>
        <DatePicker placeholderClassName={`text-[#BDA16B]`} className={`text-[#BDA16B] w-[280px]`}/>
      </div>

      <div className='flex flex-col items-center'>
        <p className='text-xs text-[#BDA16B] font-raleway uppercase'>Guest</p>
        <div className='flex items-center'>
          <Button onClick={handleDecreaseGuests} disabled={guests < 1}>
            <img src='/icons/minus.svg' />
          </Button>
          <span className='text-md font-semibold text-[#BDA16B]'>{guests}</span>
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
