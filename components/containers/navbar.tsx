'use client'

// PACKAGES
import { BiCog, BiHome, BiMenu, BiSearch, BiX } from "react-icons/bi";

// COMPONENTS
import MenuButton from "@/components/buttons/menu-button";
import { NavLink } from "@/types";

// HOOKS
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const links: NavLink[] = [
    { text: 'Home', href: '/home', icon: BiHome },
    { text: 'Search', href: '/', icon: BiSearch },
    { text: 'Settings', href: '/', icon: BiCog },
  ]

  return (
    <nav>

      {/* DESKTOP LINKS */}
      <div
        className="
          w-full md:w-auto 
          hidden md:flex justify-center gap-3
          md:absolute md:top-0 md:left-0 md:top-15 md:left-15 
          blue-mesh-gradient 
          rounded-3xl z-10 p-3
        "
      >
        {
          links.map(link => (
            <MenuButton key={link.text} title={link.text} Icon={link.icon} />          
          ))
        }
      </div>

      {/* MOBILE BUTTON */}
      <div
        className="md:hidden absolute left-2 top-2 hover:cursor text-gray-700"
        onClick={() => setOpen(!open)}
      >
        { open ? <BiX size={40} /> : <BiMenu size={40} /> }
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white p-3 pt-5 pb-5 rounded-2xl absolute top-12 left-2 flex flex-col gap-3">
          {
            links.map(link => (
              <MenuButton key={link.text} title={link.text} Icon={link.icon} />
            ))
          }
        </div>
      )}

    </nav>
  )
}

export default Navbar;