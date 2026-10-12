import React from "react";
import { Link } from "react-router";
import firstImage from "../assets/first.jpg";
import secondImage from "../assets/second.jpg";
import thirdImage from "../assets/third.jpg";
import { Sparkles, ArrowRight, ShieldCheck, Gift } from "lucide-react";

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
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-[65vh] min-h-[460px] max-h-[620px] w-full"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative overflow-hidden">
          <div className="image absolute inset-0">
            <img
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
              src={firstImage}
              alt="Safe and joyful kid toys"
            />
          </div>
          <div className="overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40 z-10"></div>
          <div className="text z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl px-4 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-semibold mb-3 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7052]" />
              Welcome to Toy-ToPia Marketplace
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Find The Best Toys For Your Kids
            </h1>
            <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Curated, pediatrician-approved STEM kits, wooden blocks, and creative play essentials crafted to inspire curiosity without screens.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/alltoys"
                className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white border-0 rounded-xl px-6 font-semibold shadow-lg shadow-[#FF7052]/30 hover:scale-105 transition-all text-sm md:text-base"
              >
                Explore All Toys
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <a
                href="#category-section"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1B2338] rounded-xl px-6 font-semibold backdrop-blur-sm transition-all text-sm md:text-base"
              >
                Shop By Category
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative overflow-hidden">
          <div className="image absolute inset-0">
            <img
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
              src={secondImage}
              alt="Safe materials and certified toys"
            />
          </div>
          <div className="overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40 z-10"></div>
          <div className="text z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl px-4 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-200 text-xs md:text-sm font-semibold mb-3 border border-emerald-400/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Certified Safe & Non-Toxic
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Variety Of Products, Safe Material
            </h1>
            <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Every toy meets rigorous ASTM & EN71 child-safety benchmarks, finished with organic water-based dyes so babies and toddlers play worry-free.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/alltoys"
                className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white border-0 rounded-xl px-6 font-semibold shadow-lg shadow-[#FF7052]/30 hover:scale-105 transition-all text-sm md:text-base"
              >
                Browse Safe Toys
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                to="/about"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1B2338] rounded-xl px-6 font-semibold backdrop-blur-sm transition-all text-sm md:text-base"
              >
                Our Safety Standards
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative overflow-hidden">
          <div className="image absolute inset-0">
            <img
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
              src={thirdImage}
              alt="Holiday discount and deals on toys"
            />
          </div>
          <div className="overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40 z-10"></div>
          <div className="text z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl px-4 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-200 text-xs md:text-sm font-semibold mb-3 border border-amber-400/30">
              <Gift className="w-4 h-4 text-amber-300" />
              Limited-Time Celebration Offer
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Get Up To 25% Off Across All Categories
            </h1>
            <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Order today to claim special family bundle pricing, complimentary gift packaging, and express doorstep delivery across all districts.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/alltoys"
                className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white border-0 rounded-xl px-6 font-semibold shadow-lg shadow-[#FF7052]/30 hover:scale-105 transition-all text-sm md:text-base"
              >
                Claim Your Discount
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                to="/blog"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1B2338] rounded-xl px-6 font-semibold backdrop-blur-sm transition-all text-sm md:text-base"
              >
                Read Gift Guide
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
