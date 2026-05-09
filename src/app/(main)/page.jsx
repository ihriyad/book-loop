import React from "react";
import { Button, Drawer } from "@heroui/react";
import HomePage from "@/components/homepage/HomePage";
import BooksMarquee from "@/components/homepage/BooksMarquee";
const Home = () => {
  return (
    <div>
        <HomePage></HomePage>
        <BooksMarquee></BooksMarquee>
          
    </div>
  );
};

export default Home;
