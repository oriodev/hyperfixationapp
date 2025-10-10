// TYPES
import { NavLink } from "@/types";

// COMPONENT
import Link from "next/link";

interface MenuButtonProps {
  link: NavLink;
  active: boolean;
}

const MenuButton = ({ link, active }: MenuButtonProps) => {
  const { text, icon: Icon, href } = link;

  return (
    <Link
      href={href}
      className={`flex justify-left md:justify-center items-center gap-2 ${active && 'bg-blue-200 md:bg-white'} text-black p-2 md:pl-4 md:pr-4 rounded-2xl`}
    >
      <Icon size={20} />
      <p className="font-bold">{text.toUpperCase()}</p>
    </Link>
  )
}

export default MenuButton;