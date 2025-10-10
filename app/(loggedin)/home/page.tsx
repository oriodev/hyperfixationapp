// COMPONENTS
import FixationDisplay from "@/components/containers/fixation-display";
import Navbar from "@/components/containers/navbar";
import ProfileHeader from "@/components/containers/profile-header";
import ProfilePinnedBar from "@/components/containers/profile-pinned-bar";

// UTILS
import { user } from "@/mock_data";

export default function Home() {
  // TODO: IMPORT ACTUAL USER DATA
  const { username, bio, profile_picture, profile_tags, pinned_infodumps, fixations, checkin } = user;

  return (
    <div className="w-screen flex flex-col gap-8 blue-mesh-gradient p-0 md:p-10 overflow-hidden">
      
      {/* HEADER */}
      <div>
        <Navbar />
        <ProfileHeader
          username={username}
          bio={bio}
          tags={profile_tags}
          profilePicture={profile_picture}
        />
      </ div>
        
      {/* PINNED POSTS AND CHECK IN */}
      <ProfilePinnedBar pinnedInfodumps={pinned_infodumps} checkins={checkin} />
      
      {/* FIXATIONS */}
      <FixationDisplay fixations={fixations} />

    </div>
  )
}
