import Button from '@/components/Button';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const nav = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src='/images/error-404.png' alt='404' className='mb-8' />
      <h1 className='text-3xl font-semibold mb-4 font-raleway text-[#1A1A1A]'>
        Page Not Found !
      </h1>
      <p className='max-w-[400px] text-sm font-raleway text-[#1D1D1D] text-center mb-8'>
        The link you clicked may be broken or the page may have been removed or
        renamed
      </p>
      <Button
        className={'flex items-center gap-2 bg-[#BDA16B] text-white text-sm'}
        onClick={() => nav(-1)}
      >
        <ChevronLeft />
        Go Back
      </Button>
    </div>
  );
};

export default NotFoundPage;
