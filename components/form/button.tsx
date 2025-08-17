interface ButtonProps {
  text: string;
  submit: boolean;
  handleClick?: () => void;
}

const Button = ({ text, submit, handleClick }: ButtonProps) => {
  return (
    <button
      className="w-3/4 color-animation pt-4 pb-4 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:opacity-90 transition"
      onClick={handleClick}
      type={submit ? 'submit' : 'button'}
    >
      <p className="text-black text-xl font-bold">{text.toUpperCase()}</p>
    </button>
  )
}

export default Button;