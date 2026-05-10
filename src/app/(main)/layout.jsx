import AboutBookLoop from "@/components/about/AboutBookLoop";
import FAQSection from "@/components/faq/FaqSection";
import FeaturedBooks from "@/components/featured/FeaturedBooks";
import Footer from "@/components/footer/Footer";
import BooksMarquee from "@/components/homepage/BooksMarquee";
import Navbar from "@/components/nav/Navbar";
import { getBooks, getFaq } from "@/lib/load-data";
import React from "react";

const MainLayout = async ({ children }) => {
  const books = await getBooks();
  const faqs = await getFaq();
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <BooksMarquee books={books}></BooksMarquee>
      <FeaturedBooks books={books}></FeaturedBooks>
      <AboutBookLoop></AboutBookLoop>
      <FAQSection faqs={faqs}></FAQSection>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
