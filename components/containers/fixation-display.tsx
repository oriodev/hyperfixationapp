'use client'

// TYPES
import { Fixation, User } from "@/types";

// COMPONENTS
import FixationTopBar from "./fixation-top-bar";
import { useEffect, useState } from "react";
import { userStore } from "@/store/user";

const FixationDisplay = () => {
  const user: User = userStore((state: any) => state.user);
  const { fixations } = user;

  const [starred, setStarred] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<string>('');

  const [displayFixations, setDisplayFixations] = useState<Fixation[]>(fixations);

  useEffect(() => {

    const starredFiltered = starred 
      ? fixations.filter((fixation) => fixation.starred) 
      : fixations;
    
    const searchFiltered = starredFiltered.filter((fixation) => fixation.title.includes(searchContent))

    setDisplayFixations(searchFiltered);

  }, [starred, searchContent])

  return (
    <div className="flex flex-col gap-8">

      {/* FIXATION TOP BAR */}
      <FixationTopBar starred={starred} setStarred={setStarred} setSearchContent={setSearchContent} />

      {/* FIXATION BOX DISPLAY */}
      <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          displayFixations.map((fixation) => (
            <div 
              key={fixation.title} 
              className="flex flex-col p-3 shadow-lg bg-cover bg-center bg-blue-100 rounded-2xl flex-1 min-w-[200px] h-[300px] hover:cursor-pointer hover:opacity-80 transition"
              style={{backgroundImage: `url(/test_images/${fixation.image})`}}
            >
              <p className="w-full h-full flex items-end justify-end font-bold text-2xl text-white text-shadow-lg">{ fixation.title }</p> 
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FixationDisplay;