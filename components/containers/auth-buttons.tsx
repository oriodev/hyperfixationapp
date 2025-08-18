'use client'

import Button from "@/components/form/button";
import { useRouter } from "next/navigation";

const AuthButtons = () => {

  const router = useRouter()

  const handleLoginClick = () => {
    router.push('/login')
  }

  const handleSignupClick = () => {
    router.push('/signup')
  }

  return (
    <div className="w-1/4 flex justify-center items-center gap-5">
      <Button text="Login" submit={false} handleClick={handleLoginClick} />
      <Button text="Signup" submit={false} handleClick={handleSignupClick} />
    </div>
  )
}

export default AuthButtons;