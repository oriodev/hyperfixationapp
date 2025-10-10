interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps ) => {
  return (
    <div className="flex justify-center items-center bg-white hover:cursor-pointer hover:opacity-70 transition text-black p-2 pl-4 pr-4 rounded-2xl">
      <p>{ text }</p>
    </div>
  )
}

export default Tag;