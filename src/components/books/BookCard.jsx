import { Button, Card, CardContent, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const categoryColors = {
  Story: "bg-green-100 text-green-800",
  Tech: "bg-blue-100 text-blue-800",
  Science: "bg-pink-100 text-pink-800",
};

const BookCard = ({ book }) => {
  const { id, category, image_url, title, available_quantity } = book;

  return (
    <Card className="w-full hover:-translate-y-1 transition-transform duration-200 border border-default-200 shadow-none">
      {/* cover image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover rounded-md"
        />

        {/* category badge */}
        <span
          className={`absolute top-2 left-2 text-[11px] font-medium px-2.5 py-1 rounded-full ${categoryColors[category] ?? "bg-default-100 text-default-700"}`}
        >
          {category}
        </span>

        {/* quantity pill */}
        <span className="absolute top-2 right-2 text-[11px] text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
          {available_quantity} left
        </span>
      </div>

      {/* body */}
      <CardContent className="px-4 pt-3 pb-2 gap-1">
        <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
      </CardContent>

      {/* footer */}
      <CardFooter className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-default-100">
        <span className="flex items-center gap-1.5 text-[11px] text-default-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          {available_quantity > 0 ? "Available" : "Unavailable"}
        </span>
        <Link href={`/books/${id}`}>
          <Button variant="secondary">See Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
