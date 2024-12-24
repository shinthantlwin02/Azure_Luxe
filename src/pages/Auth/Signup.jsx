import Button from '@/components/Button';
import PasswordTextField from '@/components/PasswordTextField';
import TextField from '@/components/TextField';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const nav = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, null, {
        params: {
          email: formData.email,
          password: formData.password,
        },
        headers: {
          accept: '*/*',
        },
      });
      setSuccess('Account created successfully!');
      nav('/login');
    } catch (err) {
      setError(
        err.response?.data?.message || 'An error occurred. Please try again.'
      );
    }
  };

  return (
    <div className='flex items-center h-screen max-h-screen'>
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
            Welcome to Azure Luxe
          </h1>
          <p className='text-sm font-raleway font-light text-[#1A1A1A] text-center'>
            Sign up now to book your perfect hotel stay. Create an account to
            access seamless reservations and exclusive deals.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <TextField
            name='name'
            label='Name'
            placeholder='Enter your Full Name'
            value={formData.name}
            onChange={handleChange}
            className='mb-1'
          />
          <TextField
            name='email'
            label='Email'
            placeholder='Enter your Email'
            value={formData.email}
            onChange={handleChange}
            className='mb-1'
          />
          <div className='flex items-center gap-4 mb-4'>
            <PasswordTextField
              name='password'
              label='Password'
              placeholder='Enter your Password'
              value={formData.password}
              onChange={handleChange}
            />
            <PasswordTextField
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {error ? (
            <p className='text-red-500 mb-4 text-center'>{error}</p>
          ) : success ? (
            <p className='text-green-500 mb-4 text-center'>{success}</p>
          ) : null}

          {/* <Button className='flex items-center gap-2 font-raleway bg-white border border-[#D4D4D4] w-full mb-3 text-sm rounded-none'>
            <img src='/icons/google.svg' alt='Google' />
            Sign up with Google
          </Button> */}
          <Button
            text='Create Account'
            className='font-raleway bg-[#BDA16B] text-white w-full text-sm mb-6 rounded-none'
            type='submit'
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
