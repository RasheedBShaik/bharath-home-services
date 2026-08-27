"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

interface FooterProps {
  gtReady: boolean;
}

const Footer: React.FC<FooterProps> = ({ gtReady }) => {
  const [activeLang, setActiveLang] = useState("en");

  const languages = [
    { label: "English", code: "en" },
    { label: "हिंदी", code: "hi" },
    { label: "తెలుగు", code: "te" },
    { label: "தமிழ்", code: "ta" },
    { label: "ಕನ್ನಡ", code: "kn" },
    { label: "മലയാളം", code: "ml" },
    { label: "मराठी", code: "mr" },
    { label: "বাংলা", code: "bn" },
    { label: "ગુજરાતી", code: "gu" },
    { label: "ਪੰਜਾਬੀ", code: "pa" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Videos", path: "/videos" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleTranslate = (langCode: string) => {
    if (!gtReady) {
      console.warn("Google Translate not ready yet!");
      return;
    }

    const select = document.querySelector<HTMLSelectElement>(
      "select.goog-te-combo",
    );
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
      setActiveLang(langCode); // update active language
    }
  };

  // optional: sync with Google Translate if it changes outside
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector<HTMLSelectElement>(
        "select.goog-te-combo",
      );
      if (select && select.value !== activeLang) {
        setActiveLang(select.value);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [activeLang]);

  return (
    <footer className="bg-black text-white pt-16 pb-16  px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link href="/#top">
            <div className="font-bold text-2xl tracking-tighter border-2 border-white w-fit px-3 py-1">
              BHS
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Your trusted multi-service partner for a better living experience.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-green-400">
            Useful Links
          </h3>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-green-400">
            Contact
          </h3>
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <a
              href="https://www.google.com/maps/place/Nellore,+Andhra+Pradesh/@14.4394814,79.9321467,13z/data=!3m1!4b1!4m6!3m5!1s0x3a4c8cca0e958771:0xd3036c2025161f55!8m2!3d14.4425987!4d79.986456!16zL20vMDF0Y2Rr?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-white/20 hover:text-green-500 transition-all duration-300 group"
            >
              <div className="flex gap-3">
                {/* shrink-0 prevents the icon from squishing if the text wraps */}
                <FaMapMarkerAlt className=" mt-1 shrink-0 group-hover:text-green-500 transition-colors" />

                <span className="text-sm">
                  {/* Savitri Nagar, <br className="md:hidden" /> */}
                  Nellore, AP 524004
                </span>
              </div>
            </a>
            <a
              href="tel:+918985833307"
              className="flex items-center gap-3  hover:text-green-500 transition-colors group"
            >
              <div className="flex items-center gap-3">
                {/* shrink-0 ensures the icon stays perfectly round/square even if text wraps */}
                <FaPhoneAlt className="text-gray-400 shrink-0 group-hover:text-green-500 transition-colors size-4" />

                <span className=" text-sm">+91 1234567890</span>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-green-400">
            Change Language
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => handleTranslate(l.code)}
                className={`text-[10px] px-2 py-1 border rounded transition-all ${
                  activeLang === l.code
                    ? "bg-green-400 text-black border-green-400"
                    : "bg-transparent border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-[10px] text-gray-500 tracking-widest uppercase">
        © 2026 - 2027 Bharathi Home Services.
        <div className="text-center text-xs text-gray-500 py-2">
          Demo website • Content and business details are for demonstration
          purposes only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
