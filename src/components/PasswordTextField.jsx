import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const PasswordTextField = ({ label, name, placeholder, className, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='mb-4 w-full'>
      <label
        htmlFor={name}
        className='text-sm font-raleway font-medium text-[#1A1A1A] mb-1 block'
      >
        {label}
      </label>
      <div className='relative w-full'>
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${className} px-3 py-2 bg-[#EAEAEA] w-full border border-[#D4D4D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BDA16B]`}
        />
        <button
          type='button'
          onClick={togglePasswordVisibility}
          className='absolute right-3 top-3 text-sm text-[#1A1A1A]'
        >
          {showPassword ? <Eye size={18}/> : <EyeOff size={18}/>}
        </button>
      </div>
    </div>
  );
};

export default PasswordTextField;
