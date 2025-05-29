"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootLayout;
const google_1 = require("next/font/google");
require("./globals.css");
const Header_1 = __importDefault(require("@/components/shared/Header/Header"));
const Footer_1 = __importDefault(require("@/components/shared/Footer/Footer"));
const commonSiteMetadata_1 = require("@/metadata/commonSiteMetadata");
// const tiroBangla = Tiro_Bangla({
//   variable: "--font-tiro-bangla",
//   subsets: ["bengali"],
//   weight: ["400"],
// });
const fontRobot = (0, google_1.Roboto)({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const fontNotoBD = (0, google_1.Noto_Sans_Bengali)({
    variable: "--font-notobd",
    subsets: ["bengali"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});
function RootLayout({ children, }) {
    return (<html lang="bn">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* Basic Meta Tags */}
        <meta name="description" content={commonSiteMetadata_1.commonSiteMetadata.description}/>
        <meta name="author" content={commonSiteMetadata_1.commonSiteMetadata.author}/>
        <meta name="keywords" content={commonSiteMetadata_1.commonSiteMetadata.keywords}/>
        <meta name="robots" content={commonSiteMetadata_1.commonSiteMetadata.robots}/>
        <meta name="robots-noindex" content={commonSiteMetadata_1.commonSiteMetadata.robotsNoindex}/>
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={commonSiteMetadata_1.commonSiteMetadata.openGraph.type}/>
        <meta property="og:title" content={commonSiteMetadata_1.commonSiteMetadata.openGraph.title}/>
        <meta property="og:description" content={commonSiteMetadata_1.commonSiteMetadata.openGraph.description}/>
        <meta property="og:image" content={commonSiteMetadata_1.commonSiteMetadata.openGraph.images[0].url}/>
        <meta property="og:url" content={commonSiteMetadata_1.commonSiteMetadata.openGraph.url}/>
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={commonSiteMetadata_1.commonSiteMetadata.twitter.card}/>
        <meta name="twitter:site" content={commonSiteMetadata_1.commonSiteMetadata.twitter.site}/>
        <meta name="twitter:creator" content={commonSiteMetadata_1.commonSiteMetadata.twitter.creator}/>
        <meta name="twitter:title" content={commonSiteMetadata_1.commonSiteMetadata.twitter.title}/>
        <meta name="twitter:description" content={commonSiteMetadata_1.commonSiteMetadata.twitter.description}/>
        <meta name="twitter:image" content={commonSiteMetadata_1.commonSiteMetadata.twitter.image}/>
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(commonSiteMetadata_1.commonSiteMetadata.schemaOrg)}
        </script>
        {/* Favicon and Theme Color */}
        <link rel="icon" href={commonSiteMetadata_1.commonSiteMetadata.favicon}/>
        <meta name="theme-color" content={commonSiteMetadata_1.commonSiteMetadata.themeColor}/>
        {/* Language and Locale */}
        <meta httpEquiv="Content-Language" content={commonSiteMetadata_1.commonSiteMetadata.language}/>
        <title>{commonSiteMetadata_1.commonSiteMetadata.title}</title>
      </head>
      {/* <body className={`${tiroBangla.variable} ${fontRobot.variable} ${fontNotoBD} antialiased`}> */}
      <body className={`${fontRobot.variable} ${fontNotoBD.variable} antialiased`}>
        <Header_1.default />
        {children}
        <Footer_1.default />
      </body>
    </html>);
}
