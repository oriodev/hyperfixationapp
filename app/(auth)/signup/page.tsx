'use client'

// COMPONENTS
import AuthContainer from "@/components/containers/auth-container";
import Button from "@/components/form/button";
import TextInput from "@/components/form/text-input";

// SCHEMAS
import { signupSchema } from "@/schemas/signup_schemas";

// TYPES
import { InputType } from "@/types";

// UTILS
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export default function SignUp() {
  const title = "Sign up"

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (values: signupSchema) => {
    console.log('values: ', values);
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <AuthContainer title={title}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-5">
          
          {/* USERNAME */}
          <TextInput 
            title="Username" 
            type={InputType.text} 
            error={errors.username?.message} 
            register={register('username')} 
          />

          {/* EMAIL */}
          <TextInput 
            title="Email" 
            type={InputType.email} 
            error={errors.email?.message} 
            register={register('email')} 
          />

          {/* PASSWORDS */}
          <div className="flex flex-wrap w-full justify-center items-center md:flex-nowrap gap-5 md:w-3/4">
          <TextInput 
            title="Password" 
            type={InputType.password} 
            error={errors.password?.message} 
            register={register('password')} 
          />

          <TextInput 
            title="Re-enter password" 
            type={InputType.password} 
            error={errors.password?.message} 
            register={register('passwordCheck')} 
          />

          </div>
          
          
          <Button text="Sign Up" submit={true} />
          <Link href={'/login'} className="text-white underline">Got an account? Log in</Link>

        </form>
      </AuthContainer>
    </div>
  );
}