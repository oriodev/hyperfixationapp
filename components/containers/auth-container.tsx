"use client"

import TextInput from "../form/text-input";

interface AuthContainerProps {
  title: string;
}

const AuthContainer = ({ title }: AuthContainerProps) => {
  return (
    <div className="h-1/2 w-1/2 color-change-2x-alternate rounded-md p-1">
      <div className="h-full w-full bg-black flex flex-col items-center p-10">
        <h2 className="text-white font-black text-4xl">{title}</h2>
      </div>
    </div>
  )
}

export default AuthContainer;