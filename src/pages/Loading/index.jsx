import { motion as m } from 'framer-motion';

const Loading = () => {
  return (
    <div className='flex justify-center items-center gap-2 h-screen bg-[#1E1E1E]'>
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <img src='/icons/logo.svg' alt='logo' />
      </m.div>
    </div>
  );
};

export default Loading;
