// COMPONENTS
import Tags from "@/components/containers/tags";
import Image from "next/image";

interface ProfileHeaderProps {
  username: string;
  bio: string;
  profilePicture: string;
  tags: string[];
}

const ProfileHeader = ({ username, bio, tags, profilePicture }: ProfileHeaderProps) => {

  return (

    // HANDLES THE SHAPE OF THE HEADER
    <div
      className="
        bg-[url('/test_images/pokemon.png')] bg-cover bg-center 
        w-full h-100 md:h-150 clipped-rect 
        flex items-center justify-center md:justify-end 
        rounded-bl-3xl rounded-br-3xl md:rounded-3xl 
        pr-0 md:pr-5 lg:pr-16 
        pt-10 md:pt-110 lg:pt-90 
        shadow
        "
    >

        <div className="flex flex-col justify-end gap-4">

          {/* USER INFO DISPLAY */}
          <div className="flex flex-col items-center md:items-end justify-end gap-3 md:gap-0">
            <div
              className="flex md:hidden rounded-full h-[150px] w-[150px] border bg-cover bg-center"
              style={{backgroundImage: `url(/test_images/${profilePicture})`}}
            />
            <p className="text-5xl lg:text-8xl text-black font-black text-center md:text-right md:pl-4">@{username}</p>
            <p className="text-center md:text-right">{ bio }</p>
          </div>
        
        {/* USER TAGS */}
        <Tags tags={tags} />
        </div>
      </div>
  )
}

export default ProfileHeader;