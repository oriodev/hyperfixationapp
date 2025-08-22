import { Fixation } from "@/types";
import FixationTopBar from "./fixation-top-bar";

interface FixationDisplayProps {
  fixations: Fixation[];
}

const FixationDisplay = ({ fixations }: FixationDisplayProps ) => {
  return (
    <div className="flex flex-col gap-8">

      {/* FIXATION TOP BAR */}
      <FixationTopBar />

      {/* FIXATION BOX DISPLAY */}
      <div className="p-10 md:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          fixations.map((fixation) => (
            <div 
              key={fixation.title} 
              className="flex flex-col p-3 shadow-lg bg-cover bg-center bg-blue-100 rounded-2xl flex-1 min-w-[200px] h-[300px] hover:cursor-pointer hover:opacity-80 transition"
              style={{backgroundImage: `url(/test_images/${fixation.image})`}}
            >
              <p className="w-full h-full flex items-end justify-end font-bold text-xl text-white">{ fixation.title }</p> 
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FixationDisplay;