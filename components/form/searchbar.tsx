'use client'

import { SetSearchContent } from "@/types";
import { ChangeEvent } from "react";

interface SearchbarProps {
  setSearchContent: SetSearchContent;
}

const Searchbar = ({ setSearchContent }: SearchbarProps ) => {

  const filterSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchContent(e.target.value);
  }

  return (
    <div className="flex flex-col gap-1 w-full md:w-1/4 relative">
        <input
          id={'searchbar'}
          className="h-full rounded-xl p-2 border"
          placeholder={"Search Fixations"}
          onChange={(e) => {
            filterSearch(e)
          }}
        />
    </div>
  );
}

export default Searchbar;