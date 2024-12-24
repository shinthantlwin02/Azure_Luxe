import { DialogComponent } from './Dialog';

const Reservations = () => {
  return (
    <div>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-2xl uppercase font-bold text-[#1A1A1A] font-raleway'>
          Reservations
        </h1>
        <DialogComponent />
      </div>
    </div>
  );
};

export default Reservations;
