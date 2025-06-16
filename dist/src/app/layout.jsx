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
const react_hot_toast_1 = require("react-hot-toast");
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
      <body className={`${fontRobot.variable} ${fontNotoBD.variable} antialiased overflow-x-hidden`}>
        <react_hot_toast_1.Toaster position="top-center" reverseOrder={false}/>
        <Header_1.default />
        {children}
        <Footer_1.default />
      </body>
    </html>);
}
