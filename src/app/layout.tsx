import { Tiro_Bangla, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import { commonSiteMetadata } from "@/metadata/commonSiteMetadata";

const tiroBangla = Tiro_Bangla({
  variable: "--font-tiro-bangla",
  subsets: ["bengali"],
  weight: ["400"],
});
const fontRobot = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700", "800"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Basic Meta Tags */}
        <meta name="description" content={commonSiteMetadata.description} />
        <meta name="author" content={commonSiteMetadata.author} />
        <meta name="keywords" content={commonSiteMetadata.keywords} />
        <meta name="robots" content={commonSiteMetadata.robots} />
        <meta
          name="robots-noindex"
          content={commonSiteMetadata.robotsNoindex}
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={commonSiteMetadata.openGraph.type} />
        <meta
          property="og:title"
          content={commonSiteMetadata.openGraph.title}
        />
        <meta
          property="og:description"
          content={commonSiteMetadata.openGraph.description}
        />
        <meta
          property="og:image"
          content={commonSiteMetadata.openGraph.images[0].url}
        />
        <meta property="og:url" content={commonSiteMetadata.openGraph.url} />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={commonSiteMetadata.twitter.card} />
        <meta name="twitter:site" content={commonSiteMetadata.twitter.site} />
        <meta
          name="twitter:creator"
          content={commonSiteMetadata.twitter.creator}
        />
        <meta name="twitter:title" content={commonSiteMetadata.twitter.title} />
        <meta
          name="twitter:description"
          content={commonSiteMetadata.twitter.description}
        />
        <meta name="twitter:image" content={commonSiteMetadata.twitter.image} />
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(commonSiteMetadata.schemaOrg)}
        </script>
        {/* Favicon and Theme Color */}
        <link rel="icon" href={commonSiteMetadata.favicon} />
        <meta name="theme-color" content={commonSiteMetadata.themeColor} />
        {/* Language and Locale */}
        <meta
          httpEquiv="Content-Language"
          content={commonSiteMetadata.language}
        />
        <title>{commonSiteMetadata.title}</title>
      </head>
      <body className={`${tiroBangla.variable} ${fontRobot.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
