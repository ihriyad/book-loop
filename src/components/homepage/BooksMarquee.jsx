import { getBooks } from "@/lib/load-data";
import { Button } from "@heroui/react";
import { Span } from "next/dist/trace";
import React from "react";
import Marquee from "react-fast-marquee";

const BooksMarquee =async () => {
  const books = await getBooks();
  // console.log(books)
  return (
    <div className="flex justify-between items-center gap-2 container mx-auto py-3 px-2 rounded mt-4">
      <Button variant="tertiary">New Arrivals</Button>

      <Marquee pauseOnHover={true} speed={50}>
        {
          books.map(book=>
          <span 
          className="mr-6"
          key={book.id}>
          {book.title}
          </span>)
        }
      </Marquee>
    </div>
  );
};

export default BooksMarquee;
