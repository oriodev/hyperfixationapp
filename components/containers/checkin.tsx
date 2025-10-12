// TYPES
import { Checkin, CheckinType } from "@/types";

// PACKAGES
import { BiBook, BiGame, BiMovie, BiMusic, BiTv } from "react-icons/bi";
import { FcEmptyBattery } from "react-icons/fc";

interface CheckinProps {
  checkins: Checkin[];
}

const CheckIn = ({ checkins }: CheckinProps) => {

  const iconmap = {
    [CheckinType.book]: BiBook,
    [CheckinType.game]: BiGame,
    [CheckinType.movie]: BiMovie,
    [CheckinType.music]: BiMusic,
    [CheckinType.tvshow]: BiTv
  }

  const noCheckins = checkins.length === 0;

  return (
      <div className="flex-1 min-w-[200px] flex flex-col gap-3">
        <div className="flex flex-col gap-2">

          {/* TITLE */}
          <div className="flex gap-2 items-center bg-white rounded-2xl p-2 pl-5">
            <p className="text-2xl font-bold">CHECK IN</p>
          </div>

          {
            noCheckins && (
              <div className="flex gap-2 items-center bg-white rounded-2xl p-2 pl-5">
                  <FcEmptyBattery size={20} className="font-black" />
                  <p className="text-lg">Nothing going on here</p>
                </div>
            ) 
          }

          {/* CHECK IN STATUS BOXES */}
          {
            checkins.map(checkin => {
              const Icon = iconmap[checkin.type];

              return (
                <div key={checkin.text} className="flex gap-2 items-center bg-white rounded-2xl p-2 pl-5">
                  <Icon size={20} className="font-black" />
                  <p className="text-lg">{ checkin.text }</p>
                </div>
              )
            })
          }
          
        </div>
      </div>
  )
}

export default CheckIn;