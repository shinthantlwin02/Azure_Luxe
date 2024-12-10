import React from 'react'

const TextField = ({label, name, placeholder, className}) => {
  return (
    <div>
      <label htmlFor={name} className='text-sm font-raleway font-medium text-[#1A1A1A]'>{label}</label>
      <input type="text" placeholder={placeholder} id={name} className={`${className} px-2 py-2.5 bg-[#EAEAEA] w-full mt-1`}/>
    </div>
  )
}

export default TextField
