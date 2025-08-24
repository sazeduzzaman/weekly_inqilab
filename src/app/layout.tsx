import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import GoogleTranslateWidget from "@/components/GoogleTranslateWidget/GoogleTranslateWidget";

const shurjo = localFont({
  display: "swap", // bonus tip: improves font loading
  src: [
    {
      path: "./Font/Shurjo/Shurjo-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Font/Shurjo/Shurjo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="bn">
      <body className={`${shurjo.className} antialiased overflow-x-hidden`}>
        <GoogleTranslateWidget />
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
