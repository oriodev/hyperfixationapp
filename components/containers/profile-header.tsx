// COMPONENTS
import Tags from "@/components/containers/tags";

interface ProfileHeaderProps {
  username: string;
  bio: string;
  profilePicture: string;
  tags: string[];
}

const ProfileHeader = ({ username, bio, tags, profilePicture }: ProfileHeaderProps) => {

  // CHANGES USERNAME FONT SIZE BASED ON IT'S LENGTH FOR MOBILE RESPONSIVITY
  const fontSize = username.length < 10 ? '4rem' : username.length < 15 ? '3rem' : '2rem';

  return (

    // HANDLES THE SHAPE OF THE HEADER
    <div
      className="
        bg-[url('/test_images/pokemon.png')] bg-cover bg-center 
        w-full h-110 md:h-150 clipped-rect 
        flex items-center justify-center md:justify-end 
        rounded-bl-3xl rounded-br-3xl md:rounded-3xl 
        md:p-10 lg:p-0
        pr-0 md:pr-5 lg:pr-16 
        pt-10 md:pt-110 lg:pt-90 
        shadow
        "
    >

        <div className="flex flex-col md:items-end md:justify-end gap-4">

          {/* USER INFO DISPLAY */}
          <div className="flex flex-col items-center md:items-end justify-end gap-5 md:gap-1">
            <div
              className="flex md:hidden rounded-full h-[150px] w-[150px] border bg-cover bg-center"
              style={{backgroundImage: `url(/test_images/${profilePicture})`}}
            />
            <p 
              className="text-black font-black text-center md:text-right md:pl-4 break-words"
              style={{ fontSize }} 
            >@{username}</p>
            <p className="w-[450px] text-wrap text-center md:text-right">{ bio }</p>
          </div>
        
        {/* USER TAGS */}
        <Tags tags={tags} />
        </div>
      </div>
  )
}

export default ProfileHeader;