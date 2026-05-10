import React from "react";
import { Label, SearchField } from "@heroui/react";
import { getBooks } from "@/lib/load-data";
import BooksCategory from "@/components/books/BooksCategory";
import BookCard from "@/components/books/BookCard";

const BooksPage = async () => {
  const books = await getBooks();

  return (
    <div>
      <div>
        <BooksCategory books={books}></BooksCategory>
      </div>
    </div>
  );
};

export default BooksPage;
