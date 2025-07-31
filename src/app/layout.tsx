import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

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
    // If you prefer WOFF2 over TTF for modern browsers, use only one:
    // {
    //   path: "./Font/Shurjo/ShurjoWeb_700.woff2",
    //   weight: "700",
    //   style: "normal",
    // },
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
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
