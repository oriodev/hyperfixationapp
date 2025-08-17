import { InputType } from "@/types";

interface TextInput {
  title: string;
  value?: string;
  type: InputType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ title, value, type, onChange }: TextInput) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white" htmlFor={title}>
        {title}
      </label>
      <input
        id="title"
        className="input bg-white text-black rounded-md p-2 text-lg" 
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TextInput;