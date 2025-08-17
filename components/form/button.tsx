interface ButtonProps {
  text: string;
  handleClick: () => void;
}

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button
      className="w-full color-animation pt-4 pb-4 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:opacity-90 transition"
      onClick={handleClick}
    >
      <p className="text-black text-xl font-bold">{text.toUpperCase()}</p>
    </button>
  )
}

export default Button;