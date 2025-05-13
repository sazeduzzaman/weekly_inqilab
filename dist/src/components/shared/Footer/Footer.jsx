"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SocialLinks_1 = __importDefault(require("@/components/SocialLinks/SocialLinks"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const Footer = () => {
    return (<div className="bg-black text-white">
      <div className="container mx-auto">
        {/* Top Footer */}
        <footer className="eng-font footer text-base-content footer-menus p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <nav className="flex flex-col justify-center items-center sm:items-start">
            <h6 className="footer-title">Category</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col justify-center items-center sm:items-start">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col justify-center items-center sm:items-start">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="flex flex-col justify-center items-center sm:items-start">
            <h6 className="footer-title">Social</h6>
            <div className="flex justify-center sm:justify-start">
              <SocialLinks_1.default />
            </div>
            <div className="pt-4">
              <label className="input flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 64 64" xmlSpace="preserve">
                  <g>
                    <path d="M44.937 21.683a1.232 1.232 0 0 1-2.351.736c-.979-3.124-3.298-5.643-6.366-6.913a1.231 1.231 0 0 1 .943-2.274c3.743 1.549 6.574 4.63 7.774 8.451zm11.54 31.33a2.574 2.574 0 0 1-2.57 2.569H41.563C40.954 60.322 36.902 64 32 64c-3.3 0-6.34-1.66-8.12-4.44a1.23 1.23 0 1 1 2.07-1.33A7.164 7.164 0 0 0 32 61.54c3.54 0 6.482-2.576 7.067-5.958H10.092a2.573 2.573 0 0 1-2.57-2.57c0-1.947.801-3.846 2.195-5.206a11.048 11.048 0 0 0 3.32-7.87V26.293c0-9.111 6.183-16.853 14.443-18.96V4.52C27.48 2.03 29.51 0 32 0s4.52 2.03 4.52 4.52v2.788c3.28.8 6.298 2.453 8.77 4.883 3.659 3.594 5.673 8.394 5.673 13.516v14.229c0 2.947 1.21 5.814 3.317 7.87a7.316 7.316 0 0 1 2.197 5.206zM29.94 6.873a18.18 18.18 0 0 1 1.71-.12c.814-.015 1.615.038 2.41.122V4.52c0-1.14-.93-2.06-2.06-2.06s-2.06.92-2.06 2.06zm24.076 46.138a4.831 4.831 0 0 0-1.452-3.442 13.531 13.531 0 0 1-4.063-9.634V25.707c0-4.456-1.752-8.633-4.935-11.76a16.396 16.396 0 0 0-11.571-4.733c-.1 0-.2 0-.3.002-8.931.158-16.196 7.817-16.196 17.077v13.643c0 3.605-1.481 7.117-4.063 9.634a4.831 4.831 0 0 0-1.452 3.442l43.924.108z" fill="#fff"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Subscribe"/>
              </label>
            </div>
          </nav>
        </footer>

        {/* Bottom Footer */}
        <footer className="flex justify-between items-center footer text-base-content border-base-300 border-t px-10 py-4 flex-col sm:flex-row">
          <aside className="flex items-center justify-center sm:justify-start">
            <p className="text-sm text-center sm:text-left">
              এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার
              বেআইনী।
              <br />
              কপিরাইট © ২০২৫ সাপ্তাহিক ইনকিলাব কর্তৃক সর্বসত্ব ® সংরক্ষিত
            </p>
          </aside>
          <aside className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
            <div className="text-white">
              <link_1.default href={"https://flixzaglobal.com/"} target="_blank">
                <p className="text-end flex items-center">
                  <small>Developed With Love By</small>
                  <image_1.default className="w-[80px] ps-3" src="https://control.ajkal.us/flixzaglobal.webp" alt="Next.js logo" width={180} height={38} priority/>
                </p>
              </link_1.default>
            </div>
          </aside>
        </footer>
      </div>
    </div>);
};
exports.default = Footer;
