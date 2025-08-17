'use client'

import AuthContainer from "@/components/containers/auth-container";
import Button from "@/components/form/button";
import TextInput from "@/components/form/text-input";
import { InputType } from "@/types";

export default function SignUp() {
  const title = "Signup"

  const handleClick = () => {}

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <AuthContainer title={title}>
        <TextInput title="Username" type={InputType.text} />
        <TextInput title="Email" type={InputType.email} />
        <TextInput title="Password" type={InputType.password} />
        <TextInput title="Re-enter password" type={InputType.password} />
        <Button text="button" handleClick={handleClick} />
      </AuthContainer>
    </div>
  );
}