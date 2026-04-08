"use client";
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
    { name: "Contact Us", path: "/contact" }
  ];

  const handleTranslate = (langCode: string) => {
    if (!gtReady) {
      console.warn("Google Translate not ready yet!");
      return;
    }

    const select = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
      setActiveLang(langCode); // update active language
    }
  };

  // optional: sync with Google Translate if it changes outside
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
      if (select && select.value !== activeLang) {
        setActiveLang(select.value);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [activeLang]);

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="font-bold text-2xl tracking-tighter border-2 border-white w-fit px-3 py-1">BHS</div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Your trusted multi-service partner for a better living experience.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-green-400">Useful Links</h3>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} className="text-sm text-gray-400 hover:text-white">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-green-400">Contact</h3>
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <div className="flex gap-3"><FaMapMarkerAlt className="text-white mt-1" /><span>Savitri Nagar, Nellore, AP 524004</span></div>
            <div className="flex gap-3 items-center"><FaPhoneAlt className="text-white" /><span>+91 89858 33307</span></div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-green-400">Change Language</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => handleTranslate(l.code)}
                className={`text-[10px] px-2 py-1 border rounded transition-all ${
                  activeLang === l.code 
                    ? 'bg-green-400 text-black border-green-400'
                    : 'bg-transparent border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-[10px] text-gray-500 tracking-widest uppercase">
        © 2026 - 2027 Bharath Home Services.
      </div>
    </footer>
  );
};

export default Footer;