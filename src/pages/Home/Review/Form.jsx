import Button from '@/components/Button';
import { saveReview } from '@/services/ReviewService';
import { useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Form = () => {

  const [form,setForm] = useState({
    rating:0,
    content:""
  })

  const setRating = (count) => {
    setForm(pre=> ({...pre,rating:count}))
  } 

  const sentReview = async (e) => {
    e.preventDefault();
    try {
      await saveReview(form)
      setForm({rating:0,content:""})
    } catch (error) {
      console.log(error)
    }
  } 
  return (
    <div className='container mx-auto py-10'>
      <form onSubmit={(e) => sentReview(e)} className='px-8 py-4 bg-white shadow-gray-300 shadow-lg rounded-2xl'>
        <div className='mb-2'>
          <label className='text-gray-400'>Rating</label>
          <div className='mt-1 flex items-center gap-1'>
            {
              [1,2,3,4,5].map(i=> (
                i <= form.rating ? (
                  <FaStar key={i} color={"#BCA16B"} className='cursor-pointer' onClick={()=> setRating(i)}/>
                ) : (
                  <FaRegStar key={i}  className='cursor-pointer' onClick={()=> setRating(i)}/>
                )
              ))
            }
          </div>
        </div>
        <textarea
          name='review'
          id='review'
          value={form.content}
          onChange={(e) => setForm(pre=> ({...pre,content:e.target.value}))}
          className='bg-transparent w-full h-[200px] resize-none focus:outline-none'
          placeholder="What's on your thoughts?"
        ></textarea>

        <Button
        type="submit"
          className={
            'bg-[#BDA16B] justify-self-end rounded-none uppercase text-sm w-[100px]'
          }
          text={'send'}
        />
      </form>
    </div>
  );
};

export default Form;
