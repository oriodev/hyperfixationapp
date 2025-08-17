import AuthContainer from "@/components/containers/auth-container";

export default function SignUp() {
  const title = "Signup"

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <AuthContainer title={title} />
    </div>
  );
}