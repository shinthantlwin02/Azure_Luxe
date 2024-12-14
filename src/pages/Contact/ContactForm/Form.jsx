import Button from '@/components/Button';

const Form = () => {
  return (
    <div>
      <form
        type='submit'
        className='shadow-gray-500 shadow-md rounded-lg p-4 w-[450px]'
      >
        <h1 className='text-3xl font-cinzel text-[#BDA16B] mb-4'>
          Send Us Message
        </h1>
        <input
          type='text'
          className='border border-[#BDA16B] rounded-md p-2 w-full mb-4'
        />
        <textarea
          name='message'
          id='message'
          className='w-full h-[200px] border border-[#BDA16B] rounded-md resize-none'
        ></textarea>
        <Button
          text={'Send'}
          className={'bg-[#BDA16B] ml-auto mt-4 uppercase font-raleway text-sm'}
        />
      </form>
    </div>
  );
};

export default Form;
