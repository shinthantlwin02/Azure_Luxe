import { getAllReview } from '@/services/ReviewService';
import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const d = await getAllReview();
        setReviews(d._data.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div className='p-20'>
      <h1 className='text-2xl uppercase font-bold text-[#1A1A1A] font-raleway mb-8'>
        Reviews
      </h1>
      {reviews.map((data, index) => {
        return (
          <div
            key={index}
            className='max-w-[950px] bg-white shadow-lg shadow-gray-300 rounded-2xl px-4 py-3 my-10'
          >
            <div className='h-full '>
              <div className='flex items-center gap-2 mb-3'>
                {[...Array(data.rating)].map((index) => (
                  <Star key={index} color='#BDA16B' fill='#BDA16B' size={14} />
                ))}
              </div>
              <h1 className='text-lg font-medium mb-2'>
                {data.user.email.split('@')[0]}
              </h1>

              <div className='h-full'>
                <p className='text-sm font-light mb-4 max-h-[85px] '>
                  {data.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
