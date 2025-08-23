// TYPES
import { IconType } from "react-icons";

interface MenuButtonProps {
  title: string;
  Icon: IconType;
}

// TODO: ONLY APPLY BG-WHITE WHEN ON THIS PAGE

const MenuButton = ({ title, Icon }: MenuButtonProps) => {
  return (
    <div className="flex justify-center items-center gap-2 bg-white text-black p-2 pl-4 pr-4 rounded-2xl">
      <Icon size={20} />
      <p className="font-bold">{title.toUpperCase()}</p>
    </div>
  )
}

export default MenuButton;