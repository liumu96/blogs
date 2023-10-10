import "../../styles/globals.css";
import "easymde/dist/easymde.min.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "../providers";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
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
