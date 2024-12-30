import { useEffect, useState } from 'react';
import Form from './Form';
import Reviews from './Reviews';

const Review = () => {

  const [auth,setAuth] = useState()

  useEffect(()=>{
    if(localStorage.getItem('authToken')){
      setAuth('authToken')
    }
  },[])
  return (
    <div className='py-20 bg-gray-100'>
      <h1 className='font-cinzel text-3xl text-center mb-10'>
        What Others Think About Us
      </h1>
      <Reviews />
      {
        auth && (
          <Form />
        )
      }
    </div>
  );
};

export default Review;
