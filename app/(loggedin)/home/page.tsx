// COMPONENTS
import FixationDisplay from "@/components/containers/fixation-display";
import Navbar from "@/components/containers/navbar";
import ProfileHeader from "@/components/containers/profile-header";
import ProfilePinnedBar from "@/components/containers/profile-pinned-bar";

// UTILS
import { fetchUserFromSession } from "@/utils/session.utils";

// PACKAGES
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await fetchUserFromSession();
  if (!user) redirect('/');

  return (
    <div className="w-screen flex flex-col gap-8 blue-mesh-gradient p-0 md:p-10 overflow-hidden">
      
      {/* HEADER */}
      <div>
        <Navbar />
        <ProfileHeader user={user} />
      </ div>
        
      {/* PINNED POSTS AND CHECK IN */}
      <ProfilePinnedBar user={user} />
      
      {/* FIXATIONS */}
      <FixationDisplay user={user} />

    </div>
  )
}
