import React, { useState, useEffect, useRef, useContext } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthenticationContext } from "../Provider/AuthenticationContext";
import {
  Home,
  Compass,
  Info,
  BookOpen,
  LayoutDashboard,
  User,
  LogOut,
  LogIn,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Sun,
  Moon,
} from "lucide-react";

/**
 * Color Palette extracted from uploaded screenshot:
 * - Primary Background: #232D47 (Dark Navy Slate)
 * - Primary Font:       #FFFFFF (Pure White)
 * - Secondary Font:     #C3C8D2 (Light Slate / Soft Silver)
 * - Primary Accent/CTA: #FF7052 (Coral Orange)
 * - Optional Neutrals:  #1B2338 (Deep Card/Dropdown), #2B3654 (Hover/Border), #8A99AD (Muted text)
 */
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);

  // Dark mode state — reads initial theme set by index.html script
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.getAttribute("data-theme") === "dark";
  });

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("tt-theme", next);
    setIsDark(!isDark);
  };

  const profileRef = useRef(null);
  const exploreRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setIsExploreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
    setIsExploreDropdownOpen(false);
  };

  const handleSignOut = () => {
    closeAllMenus();
    signOutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error("Sign out error:", error));
  };

  const navLinkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
      isActive
        ? "text-[#FFFFFF] bg-[#2B3654] shadow-xs"
        : "text-[#C3C8D2] hover:text-[#FFFFFF] hover:bg-[#2B3654]/60"
    }`;

  const mobileNavLinkStyle = ({ isActive }) =>
    `w-full px-4 py-2.5 rounded-xl text-base font-semibold transition-all duration-200 flex items-center gap-3 ${
      isActive
        ? "text-[#FFFFFF] bg-[#2B3654] font-bold border-l-4 border-[#FF7052]"
        : "text-[#C3C8D2] hover:text-[#FFFFFF] hover:bg-[#2B3654]/60"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#232D47] text-[#C3C8D2] border-b border-[#2E3B5C] shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={closeAllMenus}
            className="flex items-center gap-3 group shrink-0"
          >
            {/* <div className="relative">
              <img
                src={logo}
                alt="Toy-ToPia Logo"
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7052] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF7052]"></span>
              </span>
            </div> */}
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#FFFFFF] group-hover:text-[#FF7052] transition-colors">
                Toy<span className="text-[#FF7052]">-ToPia</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8A99AD] -mt-1">
                Kids Toy World
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Routes */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Home */}
            <NavLink to="/" className={navLinkStyle}>
              <Home className="w-4 h-4 text-[#FF7052]" />
              <span>Home</span>
            </NavLink>

            {/* 2. Explore (with Mega / Category Dropdown) */}
            <div className="relative" ref={exploreRef}>
              <button
                type="button"
                onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isExploreDropdownOpen
                    ? "text-[#FFFFFF] bg-[#2B3654]"
                    : "text-[#C3C8D2] hover:text-[#FFFFFF] hover:bg-[#2B3654]/60"
                }`}
              >
                <Compass className="w-4 h-4 text-[#FF7052]" />
                <span>Explore</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isExploreDropdownOpen
                      ? "rotate-180 text-[#FF7052]"
                      : "text-[#8A99AD]"
                  }`}
                />
              </button>

              {/* Explore Advanced Dropdown */}
              {isExploreDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#1B2338] text-[#C3C8D2] rounded-2xl shadow-2xl border border-[#2E3B5C] p-3 z-50">
                  <div className="px-3 py-2 border-b border-[#2E3B5C] mb-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8A99AD]">
                      Toy Marketplace
                    </p>
                    <p className="text-sm font-semibold text-[#FFFFFF]">
                      Explore Collections
                    </p>
                  </div>
                  <NavLink
                    to="/alltoys"
                    onClick={() => setIsExploreDropdownOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#2B3654] text-[#C3C8D2] hover:text-[#FFFFFF] transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#2B3654] text-[#FF7052] flex items-center justify-center shrink-0">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#FFFFFF]">
                        All Toys Catalog
                      </div>
                      <div className="text-xs text-[#8A99AD]">
                        View our complete 2026 collection
                      </div>
                    </div>
                  </NavLink>
                  <Link
                    to="/alltoys"
                    onClick={() => setIsExploreDropdownOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#2B3654] text-[#C3C8D2] hover:text-[#FFFFFF] transition mt-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#2B3654] text-[#FF7052] flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#FFFFFF]">
                        Popular & Trending
                      </div>
                      <div className="text-xs text-[#8A99AD]">
                        Top picks loved by kids
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/alltoys"
                    onClick={() => setIsExploreDropdownOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#2B3654] text-[#C3C8D2] hover:text-[#FFFFFF] transition mt-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#2B3654] text-[#FF7052] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#FFFFFF]">
                        STEM & Educational
                      </div>
                      <div className="text-xs text-[#8A99AD]">
                        Learning toys for young minds
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Logged in specific links */}
            {user ? (
              <>
                {/* 3. Dashboard (Logged In) */}
                <NavLink to="/dashboard" className={navLinkStyle}>
                  <LayoutDashboard className="w-4 h-4 text-[#FF7052]" />
                  <span>Dashboard</span>
                </NavLink>

                {/* 4. Blog (Logged In) */}
                <NavLink to="/blog" className={navLinkStyle}>
                  <BookOpen className="w-4 h-4 text-[#FF7052]" />
                  <span>Blog</span>
                </NavLink>

                {/* 5. About */}
                <NavLink to="/about" className={navLinkStyle}>
                  <Info className="w-4 h-4 text-[#FF7052]" />
                  <span>About</span>
                </NavLink>
              </>
            ) : (
              <>
                {/* 3. About (Logged Out) */}
                <NavLink to="/about" className={navLinkStyle}>
                  <Info className="w-4 h-4 text-[#FF7052]" />
                  <span>About</span>
                </NavLink>

                {/* 4. Blog (Logged Out) */}
                <NavLink to="/blog" className={navLinkStyle}>
                  <BookOpen className="w-4 h-4 text-[#FF7052]" />
                  <span>Blog</span>
                </NavLink>
              </>
            )}
          </nav>

          {/* Desktop Right Side (Dark Mode Toggle + Auth controls) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="tt-theme-toggle"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            {user ? (
              /* LOGGED IN: Profile Menu Dropdown + Logout Action */
              <div className="flex items-center gap-3">
                {/* Advanced Profile Dropdown */}
                <div className="relative" ref={profileRef}>
                  <button
                    type="button"
                    onClick={() =>
                      setIsProfileDropdownOpen(!isProfileDropdownOpen)
                    }
                    className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full border border-[#2E3B5C] bg-[#1B2338] hover:border-[#FF7052] transition-all cursor-pointer shadow-xs"
                  >
                    <div className="relative">
                      <img
                        src={
                          user?.photoURL ||
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                        }
                        alt={user?.displayName || "User Avatar"}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#FF7052]"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#1B2338] rounded-full"></span>
                    </div>
                    <div className="text-left hidden xl:block">
                      <p className="text-xs font-bold text-[#FFFFFF] leading-tight truncate max-w-[100px]">
                        {user?.displayName || "My Account"}
                      </p>
                      <p className="text-[10px] text-[#8A99AD] font-medium">
                        Member
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8A99AD] transition-transform duration-200 ${
                        isProfileDropdownOpen ? "rotate-180 text-[#FF7052]" : ""
                      }`}
                    />
                  </button>

                  {/* Advanced Profile Menu Modal/Flyout */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 top-full mt-3 w-80 bg-[#1B2338] text-[#C3C8D2] rounded-2xl shadow-2xl border border-[#2E3B5C] p-4 z-50">
                      {/* User Header Details */}
                      <div className="flex items-center gap-3 pb-3 border-b border-[#2E3B5C]">
                        <img
                          src={
                            user?.photoURL ||
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                          }
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FF7052] shrink-0"
                        />
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-[#FFFFFF] text-sm truncate">
                            {user?.displayName || "Toy Adventurer"}
                          </h4>
                          <p className="text-xs text-[#8A99AD] truncate">
                            {user?.email || "user@toytopia.com"}
                          </p>
                          <span className="inline-block mt-1 px-2 py-0.5 bg-[#2B3654] text-[#FF7052] text-[10px] font-bold rounded-full border border-[#2E3B5C]">
                            Verified Family
                          </span>
                        </div>
                      </div>

                      {/* Dropdown Options List */}
                      <div className="py-2 space-y-1">
                        <NavLink
                          to="/profile"
                          onClick={() => setIsProfileDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-[#C3C8D2] hover:text-[#FFFFFF] hover:bg-[#2B3654] transition"
                        >
                          <User className="w-4 h-4 text-[#FF7052]" />
                          <div className="flex-1">
                            <div>My Profile</div>
                            <span className="text-[10px] text-[#8A99AD] font-normal">
                              View & edit profile details
                            </span>
                          </div>
                        </NavLink>

                        <NavLink
                          to="/dashboard"
                          onClick={() => setIsProfileDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-[#C3C8D2] hover:text-[#FFFFFF] hover:bg-[#2B3654] transition"
                        >
                          <LayoutDashboard className="w-4 h-4 text-[#FF7052]" />
                          <div className="flex-1">
                            <div>Dashboard</div>
                            <span className="text-[10px] text-[#8A99AD] font-normal">
                              Stats, orders & activity
                            </span>
                          </div>
                        </NavLink>

                        <NavLink
                          to="/alltoys"
                          onClick={() => setIsProfileDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-[#C3C8D2] hover:text-[#FFFFFF] hover:bg-[#2B3654] transition"
                        >
                          <ShoppingBag className="w-4 h-4 text-[#FF7052]" />
                          <div className="flex-1">
                            <div>My Wishlist & Orders</div>
                            <span className="text-[10px] text-[#8A99AD] font-normal">
                              Browse saved toys
                            </span>
                          </div>
                        </NavLink>
                      </div>

                      {/* Logout Action in Dropdown */}
                      <div className="pt-2 border-t border-[#2E3B5C]">
                        <button
                          type="button"
                          onClick={handleSignOut}
                          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm font-bold text-[#FFFFFF] bg-[#FF7052] hover:bg-[#E65C3F] transition cursor-pointer"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Logout Action Button */}
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="btn btn-sm px-4 rounded-xl bg-[#FF7052] hover:bg-[#E65C3F] text-[#FFFFFF] font-bold border-none flex items-center gap-1.5 shadow-sm"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              /* LOGGED OUT: Login + Register Buttons */
              <div className="flex items-center gap-2">
                <Link
                  to="/auth/login"
                  className="btn btn-sm px-4 rounded-xl bg-[#FF7052] hover:bg-[#E65C3F] text-[#FFFFFF] font-bold border-none flex items-center gap-1.5 shadow-sm"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/auth/register"
                  className="btn btn-sm px-4 rounded-xl border border-[#2E3B5C] bg-[#1B2338] hover:border-[#FF7052] text-[#C3C8D2] hover:text-[#FFFFFF] font-semibold"
                >
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex lg:hidden items-center gap-2">
            {user && (
              <Link to="/profile" onClick={closeAllMenus} className="p-1">
                <img
                  src={
                    user?.photoURL ||
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                  }
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-[#FF7052]"
                />
              </Link>
            )}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#C3C8D2] hover:text-[#FFFFFF] hover:bg-[#2B3654] focus:outline-hidden transition"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FFFFFF]" />
              ) : (
                <Menu className="w-6 h-6 text-[#C3C8D2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden border-t border-[#2E3B5C] bg-[#232D47] text-[#C3C8D2] px-4 pt-4 pb-6 space-y-3 shadow-2xl"
        >
          {/* User Profile Card on Mobile (if logged in) */}
          {user && (
            <div className="p-3 bg-[#1B2338] border border-[#2E3B5C] rounded-2xl flex items-center gap-3 mb-2">
              <img
                src={
                  user?.photoURL ||
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                }
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FF7052]"
              />
              <div className="overflow-hidden flex-1">
                <div className="font-bold text-[#FFFFFF] text-sm truncate">
                  {user?.displayName || "Toy Explorer"}
                </div>
                <div className="text-xs text-[#8A99AD] truncate">
                  {user?.email}
                </div>
              </div>
              <span className="badge bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px]">
                Online
              </span>
            </div>
          )}

          {/* Mobile Links List */}
          <div className="space-y-1">
            <NavLink
              to="/"
              onClick={closeAllMenus}
              className={mobileNavLinkStyle}
            >
              <Home className="w-5 h-5 text-[#FF7052]" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/alltoys"
              onClick={closeAllMenus}
              className={mobileNavLinkStyle}
            >
              <Compass className="w-5 h-5 text-[#FF7052]" />
              <span>Explore (All Toys)</span>
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  onClick={closeAllMenus}
                  className={mobileNavLinkStyle}
                >
                  <LayoutDashboard className="w-5 h-5 text-[#FF7052]" />
                  <span>Dashboard</span>
                </NavLink>

                <NavLink
                  to="/blog"
                  onClick={closeAllMenus}
                  className={mobileNavLinkStyle}
                >
                  <BookOpen className="w-5 h-5 text-[#FF7052]" />
                  <span>Blog</span>
                </NavLink>

                <NavLink
                  to="/profile"
                  onClick={closeAllMenus}
                  className={mobileNavLinkStyle}
                >
                  <User className="w-5 h-5 text-[#FF7052]" />
                  <span>My Profile</span>
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={closeAllMenus}
                  className={mobileNavLinkStyle}
                >
                  <Info className="w-5 h-5 text-[#FF7052]" />
                  <span>About</span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/about"
                  onClick={closeAllMenus}
                  className={mobileNavLinkStyle}
                >
                  <Info className="w-5 h-5 text-[#FF7052]" />
                  <span>About</span>
                </NavLink>

                <NavLink
                  to="/blog"
                  onClick={closeAllMenus}
                  className={mobileNavLinkStyle}
                >
                  <BookOpen className="w-5 h-5 text-[#FF7052]" />
                  <span>Blog</span>
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#C3C8D2] hover:text-[#FFFFFF] hover:bg-[#2B3654] transition font-semibold text-base"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[#FF7052]" />
            ) : (
              <Moon className="w-5 h-5 text-[#FF7052]" />
            )}
            <span>{isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
          </button>

          {/* Mobile Auth Button */}
          <div className="pt-3 border-t border-[#2E3B5C] flex flex-col gap-2">
            {user ? (
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full btn bg-[#FF7052] hover:bg-[#E65C3F] text-[#FFFFFF] font-bold rounded-xl flex items-center justify-center gap-2 border-none"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/auth/login"
                  onClick={closeAllMenus}
                  className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-[#FFFFFF] font-bold rounded-xl flex items-center justify-center gap-1.5 border-none"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/auth/register"
                  onClick={closeAllMenus}
                  className="btn bg-[#1B2338] border border-[#2E3B5C] hover:border-[#FF7052] text-[#C3C8D2] hover:text-[#FFFFFF] font-bold rounded-xl flex items-center justify-center"
                >
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
