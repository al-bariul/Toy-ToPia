import React from "react";
import firstImage from "../assets/first.jpg";
import secondImage from "../assets/second.jpg";
import thirdImage from "../assets/third.jpg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="h-[90vh]"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide className="relative">
        {/* image */}
        <div className="image absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src={firstImage}
            alt=""
          />
        </div>

        {/* Overlay */}
        <div className="overlay absolute top-0 bg-[rgba(0,0,0,0.7)] z-10 w-full h-full"></div>

        {/* Information */}
        <div className="text z-20 absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] w-11/12 max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Find The Best Toys For Your Kids
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            autem tempora saepe! Blanditiis iure aperiam harum iusto eius quod,
            magni recusandae, praesentium eveniet esse quasi possimus, nulla
            fugiat! Aliquam, laboriosam?
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        {/* image */}
        <div className="image absolute inset-0">
          <img
            className="object-cover object-center w-full h-full"
            src={secondImage}
            alt=""
          />
        </div>

        {/* Overlay */}
        <div className="overlay absolute top-0 bg-[rgba(0,0,0,0.7)] z-10 w-full h-full"></div>

        {/* Information */}
        <div className="text z-20 absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] w-11/12 max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Variety Of Products Safe Material
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            autem tempora saepe! Blanditiis iure aperiam harum iusto eius quod,
            magni recusandae, praesentium eveniet esse quasi possimus, nulla
            fugiat! Aliquam, laboriosam?
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        {/* image */}
        <div className="image absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src={thirdImage}
            alt=""
          />
        </div>

        {/* Overlay */}
        <div className="overlay absolute top-0 bg-[rgba(0,0,0,0.7)] z-10 w-full h-full"></div>

        {/* Information */}
        <div className="text z-20 absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] w-11/12 max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Get 25% discount in all kind of toys
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            autem tempora saepe! Blanditiis iure aperiam harum iusto eius quod,
            magni recusandae, praesentium eveniet esse quasi possimus, nulla
            fugiat! Aliquam, laboriosam?
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
