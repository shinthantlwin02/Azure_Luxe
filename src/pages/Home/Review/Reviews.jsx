import { motion as m } from 'framer-motion';
import './style.css';
import { useEffect, useRef, useState } from 'react';
import { reviews } from '@/data/data';

const Reviews = () => {
  const [width, setWidth] = useState(0);
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
          className='inner-carousel flex gap-10'
        >
          {reviews.map((data, index) => {
            return (
              <m.div
                key={index}
                className='min-w-[400px] h-[200px] flex flex-col justify-between bg-white shadow-lg shadow-gray-300 rounded-2xl px-4 py-3 my-10'
              >
                <div>
                  <h1 className='text-lg font-medium mb-2'>{data.reviewer}</h1>
                  <p className='text-sm font-light mb-4'>{data.review}</p>
                </div>

                <div className='flex items-center justify-end gap-2'>
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
