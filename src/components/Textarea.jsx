const TextArea = ({ label, name, placeholder, value, onChange, className, rows = 4 }) => {
    return (
      <div className='mb-4'>
        <label
          htmlFor={name}
          className='text-sm font-raleway font-medium text-[#1A1A1A] mb-1 block'
        >
          {label}
        </label>
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${className} px-3 py-2 bg-[#EAEAEA] w-full border border-[#D4D4D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BDA16B]`}
        ></textarea>
      </div>
    );
  };
  
  export default TextArea;
  