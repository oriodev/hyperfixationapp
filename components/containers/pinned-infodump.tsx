import { Infodump } from "@/types";
import { BiPin } from "react-icons/bi";

interface PinnedInfodumpProps {
  infodump: Infodump;
}

const PinnedInfodump = ({ infodump }: PinnedInfodumpProps) => {
  const { title, image } = infodump;
  const imagePath = '/test_images/' + image;

  return (
    <div
      className="
        min-w-[200px] h-[200px]
        flex flex-col flex-1
        bg-cover bg-center bg-white 
        p-3 shadow-lg rounded-2xl 
        hover:cursor-pointer hover:opacity-80 transition"
      style={{backgroundImage: `url(${imagePath})`}}
    >
        <BiPin size={50} className="text-white" />
        <p className="w-full h-full flex items-end justify-end font-bold text-xl text-white">{ title }</p> 
    </div>
  )
}

export default PinnedInfodump;