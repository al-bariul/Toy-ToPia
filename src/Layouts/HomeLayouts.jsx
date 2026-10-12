import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import ToyStats from "../Components/ToyStats";
import Category from "../Components/Category/Category";
import PopularToys from "../Components/PopularToys/PopularToys";
import Choose from "../Components/Choose";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";
import BlogPreview from "../Components/BlogPreview";
import FAQ from "../Components/FAQ";
import NewsletterCTA from "../Components/NewsletterCTA";
import Footer from "../Components/Footer";

const HomeLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      {/* 1. Navigation Bar */}
      <nav className="sticky top-0 z-50">
        <Navbar></Navbar>
      </nav>

      <main className="flex-grow">
        {/* Section 1: Hero Section (60-70% Viewport, Clear CTAs, Swiper Carousel) */}
        <Slider></Slider>

        {/* Section 2: Live Marketplace Statistics (Dynamic data from /toys.json) */}
        <ToyStats></ToyStats>

        {/* Section 3: Shop By Category */}
        <Category></Category>

        {/* Section 4: Popular / Top-Rated Toys */}
        <PopularToys></PopularToys>

        {/* Section 5: Why Toy-ToPia (Safety & Quality Commitments) */}
        <Choose></Choose>

        {/* Section 6: How It Works (4-Step Guided Process) */}
        <HowItWorks></HowItWorks>

        {/* Section 7: Verified Parent & Educator Testimonials */}
        <Testimonials></Testimonials>

        {/* Section 8: Play & Parenting Blog Preview */}
        <BlogPreview></BlogPreview>

        {/* Section 9: Frequently Asked Questions (Interactive Accordion) */}
        <FAQ></FAQ>

        {/* Section 10: Family Club Newsletter & 25% Off CTA */}
        <NewsletterCTA></NewsletterCTA>
      </main>

      {/* Footer: Fully functional links, social channels, contact info, copyright */}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
