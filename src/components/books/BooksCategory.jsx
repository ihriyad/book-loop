"use client";
import React, { useState } from "react";
import { Button, Drawer, Label, SearchField } from "@heroui/react";
import BookCard from "./BookCard";

const categories = ["All", "Story", "Tech", "Science"];

const BooksCategory = ({ books }) => {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filtered = books
    .filter((book) => selected === "All" || book.category === selected)
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="my-4 md:my-6">
      <div className="w-auto md:w-1/2 mx-auto">
        {/* search */}
        <div>
          <SearchField name="search">
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                placeholder="Search books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
        {/* drawer */}
        <div className="mt-2 md:mt-4">
          <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button className={"md:text-lg rounded-md"} variant="secondary">
              Books Category
            </Button>
            <Drawer.Backdrop>
              <Drawer.Content placement="left">
                <Drawer.Dialog>
                  <Drawer.Header>
                    <Drawer.Heading>Categories</Drawer.Heading>
                  </Drawer.Header>
                  <Drawer.Body className="flex flex-col gap-4">
                    {categories.map((c, index) => (
                      <div
                        onClick={() => setSelected(c)}
                        className={`${selected === c ? "bg-cyan-400 text-black" : "hover:text-cyan-400"} p-3 text-lg rounded-md cursor-pointer`}
                        key={index}
                      >
                        {c}
                      </div>
                    ))}
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Button variant="secondary" slot="close">
                      Close
                    </Button>
                  </Drawer.Footer>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>
      </div>
      <h2 className="text-center text-md my-4">
        Showing Category:{" "}
        <span className="text-cyan-600 font-bold">{selected}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksCategory;
