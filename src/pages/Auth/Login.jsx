import Button from '@/components/Button';
import PasswordTextField from '@/components/PasswordTextField';
import TextField from '@/components/TextField';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex items-center'>
      <div className='w-[45%] px-20 py-8'>
        <div className='flex flex-col items-center mb-10'>
          <p className='text-xs font-cinzel font-bold text-[#BDA16B] uppercase mb-2'>
            Sign In
          </p>
          <h1 className='text-xl font-cinzel text-[#1A1A1A] uppercase mb-4'>
            Sign in and start booking
          </h1>
          <p className='text-sm font-raleway font-light text-[#1A1A1A] text-center'>
            Log in to access your account, manage bookings, and enjoy exclusive
            offers. Your next hotel stay is just a few clicks away!
          </p>
        </div>

        <form type='submit'>
          <TextField
            name='email'
            label='Email'
            placeholder='Enter your Email'
            className='mb-4'
          />
          <PasswordTextField
            name='password'
            label='Password'
            placeholder='Enter your Password'
            className='mb-8'
          />

          <Button className='flex items-center gap-2 font-raleway bg-white border border-[#D4D4D4] w-full mb-3 text-sm rounded-none'>
            <img src='/icons/google.svg' />
            Sign in with Google
          </Button>
          <Button
            text='Sign In'
            className='font-raleway bg-[#BDA16B] text-white w-full text-sm mb-6 rounded-none'
          />

          <p className='text-sm text-[#1A1A1A] text-center font-raleway'>
            Not a Member yet?{' '}
            <Link to={`/signup`} className='text-[#BDA16B] font-bold'>
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <div className='w-[55%] h-screen'>
        <img
          src='/images/login-img.png'
          alt='room'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default Login;
