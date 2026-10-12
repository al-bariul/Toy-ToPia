import React from "react";
import { Link } from "react-router";
import {
  ShieldCheck,
  Heart,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      hoverBg: "hover:bg-[#1877F2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      hoverBg: "hover:bg-[#E4405F]",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com",
      hoverBg: "hover:bg-[#CD201F]",
    },
    {
      name: "Twitter / X",
      icon: Twitter,
      href: "https://twitter.com",
      hoverBg: "hover:bg-[#1DA1F2]",
    },
  ];

  return (
    <footer className="bg-[#1B2338] text-[#C3C8D2] border-t border-[#2E3B5C] pt-16 pb-8">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand, Mission & Social Links */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#FF7052] transition-colors">
              Toy<span className="text-[#FF7052]">-ToPia</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-[#8A99AD] leading-relaxed max-w-sm">
            Toy-ToPia is a dedicated marketplace connecting caring families with
            pediatric-approved, non-toxic, and heirloom-quality toys crafted by
            passionate artisans and ethical makers.
          </p>

          <div className="mt-5 flex items-center gap-3 text-xs font-semibold text-[#C3C8D2]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#232D47] border border-[#2E3B5C]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              ASTM & EN71 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#232D47] border border-[#2E3B5C]">
              <Sparkles className="w-4 h-4 text-[#FF7052]" />
              Screen-Free Play
            </span>
          </div>

          {/* Social Channels */}
          <div className="mt-6">
            <h5 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
              Follow Our Community
            </h5>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Toy-ToPia on ${item.name}`}
                    className={`w-9 h-9 rounded-xl bg-[#232D47] border border-[#2E3B5C] text-[#C3C8D2] hover:text-white ${item.hoverBg} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-white hover:underline transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/alltoys"
                className="hover:text-white hover:underline transition"
              >
                Explore All Toys
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-white hover:underline transition"
              >
                Play & Parenting Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white hover:underline transition"
              >
                About Toy-ToPia
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-white hover:underline transition"
              >
                My Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories & Collections */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Toy Collections
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                to="/alltoys"
                className="hover:text-white hover:underline transition"
              >
                STEM & Robotics
              </Link>
            </li>
            <li>
              <Link
                to="/alltoys"
                className="hover:text-white hover:underline transition"
              >
                Wooden Building Blocks
              </Link>
            </li>
            <li>
              <Link
                to="/alltoys"
                className="hover:text-white hover:underline transition"
              >
                Montessori Sensory Kits
              </Link>
            </li>
            <li>
              <Link
                to="/alltoys"
                className="hover:text-white hover:underline transition"
              >
                Hypoallergenic Soft Toys
              </Link>
            </li>
            <li>
              <Link
                to="/alltoys"
                className="hover:text-white hover:underline transition"
              >
                Remote Control Cars
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Get in Touch
          </h4>
          <div className="space-y-3 text-xs sm:text-sm text-[#8A99AD]">
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FF7052] shrink-0 mt-0.5" />
              <span>Dhanmondi, Road 27, Dhaka, Bangladesh</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#FF7052] shrink-0" />
              <span>care@toytopia-bd.com</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#FF7052] shrink-0" />
              <span>+880 1712-345678</span>
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-1">
                Customer Support Hours:
              </span>
              <span className="text-xs text-white font-medium">
                Mon - Sat: 9:00 AM - 8:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Legal Links */}
      <div className="w-11/12 max-w-7xl mx-auto mt-12 pt-8 border-t border-[#2E3B5C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A99AD] gap-4">
        <p>
          Copyright © {currentYear} Toy-ToPia. All rights reserved.
          Dedicated to healthy, screen-free childhood development.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/about" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/about" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link to="/about" className="hover:text-white transition">
            Safety Guarantee
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
