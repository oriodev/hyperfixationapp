import CheckIn from "@/components/containers/checkin";
import PinnedInfodump from "@/components/containers/pinned-infodump";

import { Checkin, Infodump } from "@/types";

interface ProfilePinnedBar {
  checkins: Checkin[];
  pinnedInfodumps: Infodump[];
}

const ProfilePinnedBar = ({ checkins, pinnedInfodumps }: ProfilePinnedBar ) => {

  // ENSURE 3 MAX PINNED INFODUMPS
  const infodumps = pinnedInfodumps.slice(0, 3);

  return (
    <div className="p-10 md:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <CheckIn checkins={checkins} />

      {
        infodumps.map(infodump => (
          <PinnedInfodump
            key={infodump.title}
            infodump={infodump}
          />
        ))
      }

    </div>
  )
}

export default ProfilePinnedBar;