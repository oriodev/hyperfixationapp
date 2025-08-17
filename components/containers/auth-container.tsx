'use client'

interface AuthContainerProps {
  title: string;
  children: React.ReactNode;
}

const AuthContainer = ({ title, children }: AuthContainerProps) => {
  return (
    <div className="h-3/4 w-3/4 md:h-3/4 md:w-1/2 color-animation rounded-md p-1">
      <div className="h-full w-full bg-black flex flex-col justify-center items-center gap-6 p-10">
        <h2 className="text-white font-black text-5xl">{title.toUpperCase()}</h2>
        <div className="flex flex-col items-center justify-center gap-5">
          { children }
        </div>
      </div>
    </div>
  )
}

export default AuthContainer;