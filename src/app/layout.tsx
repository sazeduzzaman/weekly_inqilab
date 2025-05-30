import { Roboto, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const fontRobot = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const fontNotoBD = Noto_Sans_Bengali({
  variable: "--font-notobd",
  subsets: ["bengali"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${fontRobot.variable} ${fontNotoBD.variable} antialiased`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
