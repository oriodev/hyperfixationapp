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
import { createSession } from "@/app/api/session.api";

export default function Login() {
  const title = 'Login';

 const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // make login api call
  const onSubmit = async (values: loginSchema) => {
    
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    // set errors based on response from login call
    if (!response.ok) {
      const errors = await response.json();
    
      if (errors.error) {
        switch(true) {
          case errors.error.includes("PASSWORDS DO NOT MATCH"):
            setError("password", {
              type: "manual",
              message: "Incorrect Password"
            });
            break;

          case errors.error.includes("COULD NOT FIND USER IN DB"):
            setError("email", {
              type: "manual",
              message: "Email does not exist"
            })
            break;
  
          default:
            break;
        }
      }
    }

    // TODO: create the session from the token
    const data = await response.json();
    if (data.token) {
      await createSession(data.token);
    }
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
