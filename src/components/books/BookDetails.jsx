import { ArrowLeft } from "@gravity-ui/icons";
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookDetails = ({ data }) => {
  const { author, title, image_url, description, category } = data;
  return (
    <div className="my-6">
      <Link href={"/books"}>
        <Button className={"my-4 rounded-md"} variant="secondary">
          <ArrowLeft></ArrowLeft> Back
        </Button>
      </Link>
      <Card>
        <div className="md:flex gap-6 p-4">
          <div>
            <Image
              className="md:w-[400px] sm:mb-4 rounded-md"
              src={image_url}
              width={200}
              height={200}
              alt="Book image"
            ></Image>
          </div>
          <div className="flex justify-center flex-col gap-6 md:gap-10">
            <div>
              <Card.Header className="gap-1">
                <Card.Title className="pr-8 md:text-2xl">{title}</Card.Title>
                <Card.Description>{description}</Card.Description>
              </Card.Header>
            </div>
            <div>
              <div className="flex flex-col mb-3 md:mb-6">
                <span className="text-sm font-medium text-foreground">
                  Category:{" "}
                  <span className="text-cyan-600 font-bold">{category}</span>
                </span>
                <span className="text-xs text-muted">by {author}</span>
              </div>
              <Button variant="secondary" className="w-full  rounded-md">
                Borrow Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookDetails;
