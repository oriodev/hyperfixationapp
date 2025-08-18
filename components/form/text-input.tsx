'use client'

import { InputType } from "@/types";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing React Icons

interface TextInput {
  title: string;
  type: InputType;
  error?: string;
  register: UseFormRegisterReturn; 
}

const TextInput = ({ title, type, error, register }: TextInput) => {
  const isPassword = type === InputType.password;
  const [visible, setVisible] = useState<boolean>(isPassword ? false : true);

  return (
    <div className="flex flex-col gap-1 w-3/4 relative">
      <label className="text-white" htmlFor={title}>
        {title}
      </label>

      <div className="flex gap-1 items-center">
        <input
          id={title}
          className="input bg-white text-black rounded-md p-2 text-lg w-full pr-10"
          type={!isPassword ? type : visible ? 'text' : 'password'}
          {...register}
        />
        {isPassword && (
          <div
            onClick={() => setVisible((prev) => !prev)}
            className="flex items-center justify-center absolute right-3 h-full cursor-pointer"
          >
            {visible ? (
              <FaEye className="text-black" size={20} />
            ) : (
              <FaEyeSlash className="text-black" size={20} />
            )}
          </div>
        )}
      </div>
      {error ? <p className="text-rose-400">{error}</p> : <p></p>}
    </div>
  );
}

export default TextInput;
