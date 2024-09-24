import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Header } from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased`}
      ><ActiveSectionContextProvider>
          <BackgroundGradientAnimation className="-z-30 h-screen">
            <Header/>
            {children}
          </BackgroundGradientAnimation>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
