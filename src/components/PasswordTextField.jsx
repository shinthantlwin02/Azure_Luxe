import React from 'react'

const PasswordTextField = ({label, name, placeholder, className}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="password" placeholder={placeholder} name={name} id={name} className={`${className} px-2 py-2.5 bg-[#EAEAEA] w-full mt-1`}/>
    </div>
  )
}

export default PasswordTextField
