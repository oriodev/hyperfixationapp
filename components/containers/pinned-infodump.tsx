// TYPES
import { Infodump } from "@/types";

// PACKAGES
import { BiPin } from "react-icons/bi";

interface PinnedInfodumpProps {
  infodump?: Infodump;
}

const PinnedInfodump = ({ infodump }: PinnedInfodumpProps) => {
  const containerClass = "min-w-[200px] h-[200px] flex flex-col flex-1 bg-cover bg-center p-3 shadow-lg rounded-2xl transition";
  const imageUrl = infodump ? `/test_images/${infodump.image}` : '';
  const title = infodump ? infodump.title : 'Empty';

  return (
    <div
      className={`${containerClass} ${infodump ? 'bg-white hover:cursor-pointer hover:opacity-80' : 'bg-white'}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <BiPin size={50} className={`${infodump ? 'text-white' : ''}`} />
      <p className={`w-full h-full flex items-end justify-end font-bold text-xl ${infodump ? 'text-white text-shadow-lg' : ''}`}>
        {title}
      </p>
    </div>
  );
};

export default PinnedInfodump;
