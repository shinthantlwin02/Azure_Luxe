// TextField component: A reusable input field.

const TextField = ({ label, name, placeholder, className, value, onChange, inputType="text" }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="text-sm font-raleway font-medium text-[#1A1A1A] mb-1 block"
      >
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${className} px-3 py-2 bg-[#EAEAEA] w-full border border-[#D4D4D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BDA16B]`}
      />
    </div>
  );
};

export default TextField;
