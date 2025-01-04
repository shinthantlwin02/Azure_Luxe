import { motion as m } from 'framer-motion';
import './style.css';
import { useEffect, useRef, useState } from 'react';
import { getAllReview } from '@/services/ReviewService';

const Reviews = () => {
  const [width, setWidth] = useState(0);
  const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const d = await getAllReview();
        setReviews(d._data.data);
      } catch (error) {
        setIsError(true);
      }
    })();
  }, []);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <m.div ref={carousel} className='carousel no-scrollbar'>
        <m.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inner-carousel flex'
        >
          {reviews.map((data, index) => {
            return (
              <m.div
                key={index}
                className='min-w-[400px] h-[200px] flex flex-col justify-between bg-white shadow-lg shadow-gray-300 rounded-2xl px-4 py-3 my-10 mx-10'
              >
                <div className='h-full overflow-hidden'>
                  <h1 className='text-lg font-medium mb-2'>
                    {data.user.email.split('@')[0]}
                  </h1>
                  <div className='h-full'>
                    <p className='text-sm font-light mb-4 max-h-[85px] overflow-hidden'>
                      {data.content}
                    </p>
                  </div>
                </div>

                <div className='flex items-center justify-end gap-2 me-3'>
                  {[...Array(data.rating)].map((index) => (
                    <img
                      key={index}
                      src='/icons/star.svg'
                      className='w-4 h-4'
                    />
                  ))}
                </div>
              </m.div>
            );
          })}
        </m.div>
      </m.div>
    </div>
  );
};

export default Reviews;
