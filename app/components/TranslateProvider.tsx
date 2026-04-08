"use client"; // This is the key!

import { useEffect, useState, ReactNode } from "react";
import Script from "next/script";
import Footer from "./Footer";

export default function TranslateProvider({ children }: { children: ReactNode }) {
  const [gtReady, setGtReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const gtCombo = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
      if (gtCombo) {
        setGtReady(true);
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,hi,te,ta,kn,ml,mr,bn,gu,pa',
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}
      </Script>

      <main>{children}</main>
      
      <Footer gtReady={gtReady} />

      <div 
        id="google_translate_element" 
        style={{ visibility: "hidden", position: "absolute", top: "-9999px" }} 
      />
    </>
  );
}