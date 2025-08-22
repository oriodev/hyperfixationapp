import { Checkin, CheckinType } from "@/types";
import { BiBook, BiGame, BiMovie, BiMusic, BiTv } from "react-icons/bi";

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

  return (
      <div className="flex-1 min-w-[200px] flex flex-col gap-3">
        <div className="flex flex-col gap-2">

          {/* TITLE */}
          <div className="flex gap-2 items-center bg-white rounded-2xl p-2 pl-5">
            <p className="text-2xl font-bold">CHECK IN</p>
          </div>

          {/* CHECK IN STATUS BOXES */}
          {
            checkins.map(checkin => {
              const Icon = iconmap[checkin.type];

              return (
                <div className="flex gap-2 items-center bg-white rounded-2xl p-2 pl-5">
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