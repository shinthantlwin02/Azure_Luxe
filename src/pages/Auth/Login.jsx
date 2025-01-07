import Button from '@/components/Button';
import PasswordTextField from '@/components/PasswordTextField';
import TextField from '@/components/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  // Hardcoded credentials
  const ADMIN_EMAIL = 'admin123@gmail.com';
  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    //   localStorage.setItem('authToken', 'hardcoded-admin-token');
    //   localStorage.setItem('userRole', 'admin');
    //   setLoading(false);
    //   nav('/dashboard');
    //   return;
    // }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        null,
        {
          params: { email, password },
          headers: { accept: '*/*' },
        }
      );
      const { token } = response.data._data;
      console.log('data', response.data);
      if (token) {
        localStorage.setItem('authToken', token);
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          localStorage.setItem('userRole', 'admin');
          setTimeout(() => {
            nav('/dashboard');
          }, 2000);
        } else {
          localStorage.setItem('userRole', 'user');
          setTimeout(() => {
            nav('/');
          }, 2000);
        }
        setLoading(false);

        toast.success('Logged in successfully!');
      }
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

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

        <form onSubmit={handleLogin}>
          <TextField
            name='email'
            label='Email'
            placeholder='Enter your Email'
            className='mb-4'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordTextField
            name='password'
            label='Password'
            placeholder='Enter your Password'
            className='mb-8'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          {/* <Button className='flex items-center gap-2 font-raleway bg-white border border-[#D4D4D4] w-full mb-3 text-sm rounded-none'>
            <img src='/icons/google.svg' />
            Sign in with Google
          </Button> */}
          <Button
            text={loading ? 'Logging in...' : 'Sign In'}
            className='font-raleway bg-[#BDA16B] text-white w-full text-sm mb-6 rounded-none'
            disabled={loading}
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
