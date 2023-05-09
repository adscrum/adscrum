"use client";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {AuthContextProvider} from "@/context/AuthContext";

//adding nextjs fonts https://blog.logrocket.com/next-js-font-optimization-custom-google-fonts/
import {Figtree} from "@next/font/google";
const figtree = Figtree({weight: ["400", "700", "900"], subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* Set flex and 100vh to stick footer component to bottom page https://dev.to/nehalahmadkhan/how-to-make-footer-stick-to-bottom-of-web-page-3i14 */}
      <body className="flex h-screen flex-col">
        <AuthContextProvider>
          <Navbar />
          <style jsx global>{`
            :root {
              --roboto-font: ${figtree.style.fontFamily};
            }
          `}</style>
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
