// PACKAGES
import { BiCog, BiHome, BiLogOut, BiSearch } from "react-icons/bi";

// COMPONENTS
import MenuButton from "@/components/buttons/menu-button";

const Navbar = () => {
  return (
    <div 
    /* TODO: MAKE A MOBILE DROPDOWN NAV */
        className="
          w-full md:w-auto 
          md:absolute md:top-0 md:left-0 md:top-15 md:left-15 
          flex justify-center gap-3 
          blue-mesh-gradient 
          rounded-3xl z-10 p-3
        "
        >
        <MenuButton title="Home" Icon={BiHome} />
        <MenuButton title="Search" Icon={BiSearch} />
        <MenuButton title="Settings" Icon={BiCog} />
        <MenuButton title="Logout" Icon={BiLogOut} />
      </div>
  )
}

export default Navbar;