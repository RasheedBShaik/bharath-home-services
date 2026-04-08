// NO "use client" here
import Nav from "./components/Nav";
import TranslateProvider from "./components/TranslateProvider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bharath Home Services",
  description: "Bharat Home Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {/* Wrap children and footer in the Translate Provider */}
        <TranslateProvider>
          {children}
        </TranslateProvider>
      </body>
    </html>
  );
}