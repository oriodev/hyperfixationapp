import AuthContainer from "@/components/containers/auth-container";

export default function Login() {
  const title = 'Login'

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <AuthContainer title={title} />
    </div>
  );
}