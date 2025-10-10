'use client'

import { SetSearchContent, SetStarred } from "@/types";

// PACKAGES
import { BiStar } from "react-icons/bi";
import Searchbar from "../form/searchbar";

interface FixationTopBarProps {
  starred: boolean;
  setStarred: SetStarred;
  setSearchContent: SetSearchContent

}

const FixationTopBar = ({ starred, setStarred, setSearchContent }: FixationTopBarProps) => {


  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="hidden bg-white text-black w-full rounded-2xl lg:flex justify-between p-5 pl-10 pr-10">
        <div className="flex gap-8 items-center">
          <p className="text-3xl font-black">FIXATIONS</p>

          {/* FILTERS */}

          <div className="flex gap-3">

            <div
              className={`${starred ? 'bg-amber-200' : 'bg-slate-200'} rounded-xl p-2 pl-5 pr-5 border flex gap-2 items-center hover:cursor-pointer hover:opacity-80 transition shadow`}
              onClick={() => setStarred(prev => !prev)}
            >
              <BiStar size={25} />
              <p className="font-bold text-lg">Starred</p>
            </div>

          </div>

        </div>

        <Searchbar setSearchContent={setSearchContent} />
      </div>


      {/* MOBILE AND TABLET VERSION */}
      <div className="flex lg:hidden flex-col gap-4 bg-white text-black w-full items-center justify-center p-5 sm:rounded-xl">
          <div className="flex flex-col gap-2 items-center w-full">
            <p className="text-3xl font-black">FIXATIONS</p>
            <Searchbar setSearchContent={setSearchContent} />
          </div>

          <div className="flex gap-2">
            <div
              className={`${starred ? 'bg-amber-200' : 'bg-slate-200'} rounded-xl p-2 pl-5 pr-5 border flex gap-2 items-center hover:cursor-pointer hover:opacity-80 transition shadow`}
              onClick={() => setStarred(prev => !prev)}
            >
              <BiStar size={25} />
              <p className="font-bold text-lg">Starred</p>
            </div>
          </div>

      </div>
    </>
  )
}

export default FixationTopBar;