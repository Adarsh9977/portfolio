
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Header } from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";

export const metadata = {
  title: "Adarsh Tiwari | Personal Portfolio",
  description: 
    "Adarsh Tiwari is a software engineer based in India. He is passionate about building web applications."
}

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
