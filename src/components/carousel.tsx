// components/Carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { products } from "@/data/products";

const Carousel = () => {
  return (
    <div className="w-full max-w-8xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="rounded-lg overflow-hidden"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center bg-neutral-200">
              <Image
                src={product.image}
                alt={product.title as string}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  {product.title}
                </h2>
                <p className="text-base sm:text-lg">{product.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
