'use client'

// COMPONENTS
import AuthContainer from "@/components/containers/auth-container";
import Button from "@/components/form/button";
import TextInput from "@/components/form/text-input";

// SCHEMAS
import { loginSchema } from "@/schemas/login_schema";

// TYPES
import { InputType } from "@/types";

// UTILS
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export default function Login() {
  const title = 'Login';

 const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: loginSchema) => {
    console.log('values: ', values);
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <AuthContainer title={title}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-5">
          
          <TextInput 
            title="Email" 
            type={InputType.email} 
            error={errors.email?.message}
            register={register('email')}
          />

          <TextInput 
            title="Password" 
            type={InputType.password} 
            error={errors.password?.message}
            register={register('password')}
          />

          <Button text="Login" submit={true} />
          <Link href={'/signup'} className="text-white underline">No account? Sign up</Link>
        </form>
      </AuthContainer>
    </div>
  );
}
