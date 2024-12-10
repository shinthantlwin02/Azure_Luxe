import Button from '@/components/Button';
import { DatePicker } from '@/components/ui/datepicker';

const ReservationForm = () => {
  return (
    <div className='w-[30%]'>
      <h1 className='text-xl font-raleway font-medium text-[#1A1A1A] text-center mb-6'>
        Reservation
      </h1>
      <form type='submit' className='flex flex-col items-center'>
        <div className='mb-2'>
          <p className='text-xs text-[#1A1A1A] font-raleway font-medium uppercase mb-1'>
            Check in
          </p>
          <DatePicker
            className={`w-[250px] px-2 py-1.5 border border-[#BDA16B] flex justify-between`}
            placeholderClassName={`text-[#1A1A1A]`}
          />
        </div>
        <div className='mb-2'>
          <p className='text-xs text-[#1A1A1A] font-raleway font-medium uppercase mb-1'>
            Check out
          </p>
          <DatePicker
            className={`w-[250px] px-2 py-1.5 border border-[#BDA16B] flex justify-between`}
            placeholderClassName={`text-[#1A1A1A] font-light`}
          />
        </div>

        <div className='w-[250px] flex gap-4 mb-10'>
          <div className='w-full'>
            <p>Adult</p>
            <select
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

        <Button
          text='book now'
          className='bg-[#BDA16B] text-white w-[250px] capitalize rounded-none'
        />
      </form>
    </div>
  );
};

export default ReservationForm;
