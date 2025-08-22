import Tag from "@/components/labels/tag";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end items-center gap-2">
      {tags.map(tag => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  )
}

export default Tags;