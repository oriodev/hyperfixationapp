// COMPONENTS
import FixationDisplay from "@/components/containers/fixation-display";
import Navbar from "@/components/containers/navbar";
import ProfileHeader from "@/components/containers/profile-header";
import ProfilePinnedBar from "@/components/containers/profile-pinned-bar";

export default function Home() {

  return (
    <div className="w-screen flex flex-col gap-8 blue-mesh-gradient p-0 md:p-10 overflow-hidden">
      
      {/* HEADER */}
      <div>
        <Navbar />
        <ProfileHeader />
      </ div>
        
      {/* PINNED POSTS AND CHECK IN */}
      <ProfilePinnedBar />
      
      {/* FIXATIONS */}
      <FixationDisplay />

    </div>
  )
}
