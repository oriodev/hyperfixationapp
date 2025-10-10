// COMPONENTS
import FixationDisplay from "@/components/containers/fixation-display";
import Navbar from "@/components/containers/navbar";
import ProfileHeader from "@/components/containers/profile-header";
import ProfilePinnedBar from "@/components/containers/profile-pinned-bar";

// UTILS
import { user } from "@/mock_data";

export default function Home() {

  return (
    <div className="w-screen h-screen flex flex-col gap-8 blue-mesh-gradient p-0 md:p-10">
      
      {/* HEADER */}
      <div>
        <Navbar />
        <ProfileHeader
          username={'search'}
          bio={'find some friends'}
          tags={[]}
        />
      </ div>
        
    </div>
  )
}
