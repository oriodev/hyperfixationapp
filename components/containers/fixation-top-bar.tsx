// PACKAGES
import { MdArrowDropDown } from "react-icons/md";

const FixationTopBar = () => {
  return (
    <div className="bg-white text-black w-full rounded-2xl flex justify-between p-5 pl-10 pr-10">
      <div className="flex gap-8 items-center">
        <p className="text-3xl font-black">FIXATIONS</p>

          {/* FILTERS */}

          {/* TODO: MAKE THESE REAL DROPDOWNS */}
          <div className="flex gap-3">
            <div className="rounded-xl p-2 pr-4 border flex gap-2 items-center">
              <MdArrowDropDown size={30} />
              <p>RECENTLY UPDATED</p>
            </div>

            <div className="rounded-xl p-2 pr-4 border flex gap-2 items-center">
              <MdArrowDropDown size={30} />
              <p>FAVOURITES</p>
            </div>

            <div className="rounded-xl p-2 pr-4 border flex gap-2 items-center">
              <MdArrowDropDown size={30} />
              <p>FORM OF MEDIA</p>
            </div>

            <div className="rounded-xl p-2 pr-4 border flex gap-2 items-center">
              <MdArrowDropDown size={30} />
              <p>ALPHABETICAL</p>
            </div>
          </div>

        </div>

        {/* TODO: MAKE THIS A REAL SEARCHBAR */}
        <div className="w-1/6 h-full rounded-xl p-2 border">
          <p>search...</p>
        </div>
      </div>
  )
}

export default FixationTopBar;