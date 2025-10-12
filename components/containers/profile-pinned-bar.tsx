"use client"

// COMPONENTS
import CheckIn from "@/components/containers/checkin";
import PinnedInfodump from "@/components/containers/pinned-infodump";

// TYPES
import { Infodump, User } from "@/types";

interface ProfilePinnedBarProps {
  user: User;
}

const ProfilePinnedBar = ({ user }: ProfilePinnedBarProps) => {
    const { checkins, pinnedInfodumps } = user;

  // ENSURE 3 MAX PINNED INFODUMPS
  const infodumps = pinnedInfodumps.slice(0, 3);

  return (
    <div className="p-5 pt-0 md:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <CheckIn checkins={checkins} />

      {
        infodumps.map((infodump: Infodump) => (
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