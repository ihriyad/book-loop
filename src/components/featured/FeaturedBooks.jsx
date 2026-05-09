"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const FeaturedBooks = ({ books }) => {
  const featured = books.slice(0, 7);

  return (
    <section className="w-full py-12 px-4">
      <h2 className="text-2xl font-medium mb-6">Featured Books</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {featured.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="rounded-xl overflow-hidden border border-default-200 bg-default-50 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-52">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {book.category}
                </span>
                <h3 className="mt-2 font-medium text-sm line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-xs text-default-500 mt-1">{book.author}</p>
                <p className="text-xs text-default-400 mt-2 line-clamp-2">
                  {book.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-default-400">
                    {book.available_quantity} available
                  </span>
                  <button className="text-xs text-primary font-medium hover:underline">
                    Borrow →
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedBooks;
