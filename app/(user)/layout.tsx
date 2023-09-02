import "../../styles/globals.css";
import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Liuxing's Blogs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Navbar */}
          <Navbar />
          {/* Banner */}
          {/* <Banner /> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
