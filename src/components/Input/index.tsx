import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type InputProps = {
  value: string;
  onChange: (e) => void;
  label: string;
  placeholder?: string;
  type?: string;
  name: string;
};

const Input = ({
  value,
  onChange,
  label,
  placeholder = "",
  type = "text",
  name,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <label htmlFor={name} className="text-[13px] text-slate-800">
        {label}
      </label>
      <div className="input-box">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className="w-full bg-transparent outline-none text-base tracking-widest font-medium"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
