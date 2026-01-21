import Image from "next/image";

export type MenuCardProps = {
  imageUrl: string;
  name: string;
  description: string;
  author: string;
};

export default function MenuCard({
  imageUrl,
  name,
  description,
  author,
}: MenuCardProps) {
  return (
    <div className="flex overflow-hidden pr-4 gap-4 border rounded-2xl">
      <Image
        className="shrink-0"
        src={imageUrl}
        alt={name}
        width={128}
        height={128}
      />
      <div className="flex flex-col py-4">
        <h3 className="font-bold line-clamp-1">{name}</h3>
        <p className="line-clamp-2">{description}</p>
        <p className="mt-auto text-sm line-clamp-1">by {author}</p>
      </div>
    </div>
  );
}
