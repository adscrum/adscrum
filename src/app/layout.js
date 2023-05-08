"use client";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {AuthContextProvider} from "@/context/AuthContext";

//adding nextjs fonts https://blog.logrocket.com/next-js-font-optimization-custom-google-fonts/
import {Roboto} from "@next/font/google";
const roboto = Roboto({weight: ["400", "700", "900"], subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContextProvider>
          <Navbar />
          <style jsx global>{`
            :root {
              --roboto-font: ${roboto.style.fontFamily};
            }
          `}</style>
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
