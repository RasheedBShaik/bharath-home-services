import Nav from "./components/Nav";
import TranslateProvider from "./components/TranslateProvider";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Bharathi Home Services",
  description: "Bharati Home Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />

        {/* Wrap children and footer in the Translate Provider */}
        <TranslateProvider>
          {children}
        </TranslateProvider>

        <Analytics />
      </body>
    </html>
  );
}