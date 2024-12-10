import Button from '@/components/Button';
import PasswordTextField from '@/components/PasswordTextField';
import TextField from '@/components/TextField';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='flex items-center'>
      <div className='w-[55%] h-screen'>
        <img
          src='/images/signup-img.png'
          alt='room'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-[45%] px-20 py-8'>
        <div className='flex flex-col items-center mb-10'>
          <p className='text-xs font-cinzel font-bold text-[#BDA16B] uppercase mb-2'>
            Register
          </p>
          <h1 className='text-xl font-cinzel text-[#1A1A1A] uppercase mb-4'>
            Welcome to azure luxe
          </h1>
          <p className='text-sm font-raleway font-light text-[#1A1A1A] text-center'>
            Sign up now to book your perfect hotel stay. Create an account to
            access seamless reservations and exclusive deals.
          </p>
        </div>

        <form type='submit'>
          <TextField
            name='name'
            label='Name'
            placeholder='Enter your Full Name'
            className='mb-4'
          />
          <TextField
            name='email'
            label='Email'
            placeholder='Enter your Email'
            className='mb-4'
          />
          <div className='flex items-center gap-4 mb-10'>
            <PasswordTextField
              name='password'
              label='Password'
              placeholder='Enter your Password'
            />
            <PasswordTextField
              name='confirm-password'
              label='Confirm Password'
              placeholder='Confirm Password'
            />
          </div>

          <Button className='flex items-center gap-2 font-raleway bg-white border border-[#D4D4D4] w-full mb-3 text-sm rounded-none'>
            <img src='/icons/google.svg' />
            Sign up with Google
          </Button>
          <Button
            text='Create Account'
            className='font-raleway bg-[#BDA16B] text-white w-full text-sm mb-6 rounded-none'
          />

          <p className='text-sm text-[#1A1A1A] text-center font-raleway'>
            Already Registered?{' '}
            <Link to={`/login`} className='text-[#BDA16B] font-bold'>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
