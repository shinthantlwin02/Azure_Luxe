import Button from '@/components/Button';

const Form = () => {
  return (
    <div className='container mx-auto py-10'>
      <form className='px-8 py-4 bg-white shadow-gray-300 shadow-lg rounded-2xl'>
        <input
          type='text'
          name='title'
          id='title'
          className='bg-transparent w-full focus:outline-none'
          placeholder='title'
        />
        <hr className='border-[#BDA16B] w-full my-2' />
        <textarea
          name='review'
          id='review'
          className='bg-transparent w-full h-[200px] resize-none focus:outline-none'
          placeholder="What's on your thoughts?"
        ></textarea>

        <Button
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
