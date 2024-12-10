import { useState } from 'react';
import { faqData } from './../../data/data';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className='container mx-auto py-20'>
      <h1 className='text-3xl font-cinzel text-center mb-20'>
        Frequently Asked Questions
      </h1>
      {faqData.map((data, index) => (
        <div
          key={index}
          className='py-4 cursor-pointer'
          onClick={() => handleClick(index)}
        >
          <div className='flex items-center justify-between w-full mb-2 font-raleway font-medium'>
            <h1>{data.question}</h1>
            <ChevronDown
              size={20}
              className={`${
                openIndex === index
                  ? 'rotate-180 transition-all duration-100'
                  : ''
              } cursor-pointer`}
            />
          </div>
          {openIndex === index && (
            <div>
              <p className='font-raleway font-light'>{data.answer}</p>
            </div>
          )}
          <hr className='my-2' />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
