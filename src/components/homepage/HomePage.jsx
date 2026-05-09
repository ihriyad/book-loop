import Image from "next/image";
import React from "react";
import banner from "@/assets/banner2.png";
import { Poppins } from "next/font/google";
import { Button } from "@heroui/react";
import Link from "next/link";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const HomePage = () => {
  return (
    <div className="my-6 flex flex-col justify-center items-center">
      <div>
        <h2 className={`${poppins.className}  text-3xl md:text-6xl`}>
          Find Your Next Read
        </h2>
      </div>
      <div>
        <Image
          className=" md:w-100 md:h-100"
          src={banner}
          height={300}
          width={300}
          alt="banner image"
        ></Image>
      </div>
   <div className="">
       <Link href="/books">
    <Button
  className="w-full md:w-40 text-lg"
  variant="secondary"
>
  Browse Now
</Button></Link>
   </div>
    </div>
  );
};

export default HomePage;
