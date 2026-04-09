"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Videos", path: "/videos" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact Us", path: "/contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    document.body.style.overflow = nextState ? "hidden" : "unset";
  };

  // --- NEW LOGIC START ---
  const handleLinkClick = (path:any) => {
    if (pathname === path) {
      // If we are already on this page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Close mobile menu
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };
  // --- NEW LOGIC END ---

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 h-20 flex items-center ${
          pathname === "/" 
            ? scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
            : "bg-black shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          {/* LOGO */}
          <Link 
            href="/" 
            className="font-black text-2xl tracking-tighter border-2 px-3 py-1 rounded text-white border-white z-110"
            onClick={() => handleLinkClick("/")} // Apply logic to logo
          >
            BHS
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => handleLinkClick(link.path)} // Apply logic here
                className={`hover:text-green-400 transition-colors font-bold text-xs uppercase tracking-[0.2em] ${
                  pathname === link.path ? "text-green-400" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-110 p-2 text-white outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-90 md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-start space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => handleLinkClick(link.path)} // Apply logic here
                    className={`text-3xl font-black uppercase tracking-tighter transition-colors ${
                      pathname === link.path ? "text-green-500" : "text-white active:text-green-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;