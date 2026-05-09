import FeaturedBooks from "@/components/featured/FeaturedBooks";
import Footer from "@/components/footer/Footer";
import BooksMarquee from "@/components/homepage/BooksMarquee";
import Navbar from "@/components/nav/Navbar";
import { getBooks } from "@/lib/load-data";
import React from "react";

const MainLayout = async ({ children }) => {
  const books = await getBooks();
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <BooksMarquee books={books}></BooksMarquee>
      <FeaturedBooks books={books}></FeaturedBooks>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
