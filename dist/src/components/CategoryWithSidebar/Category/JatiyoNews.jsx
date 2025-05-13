"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const JatiyoNews = () => {
  return (
    <div>
      <div className="card rounded-none shadow-sm">
        <figure className="relative h-[390px] w-full">
          <image_1.default
            src="/images/news-1.webp"
            alt="News Thumbnail"
            fill
            className="object-cover"
            priority
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            এক দশক পর পরিবারের সদস্যদের সঙ্গে ঈদ করবেন খালেদা জিয়া
          </h2>
          <p>16 April 2025</p>
        </div>
      </div>
      {/* adasdasd */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="card rounded-none shadow-sm">
          <figure className="relative h-[235px] w-full">
            <image_1.default
              src="/images/news-2.webp"
              alt="News Thumbnail"
              fill
              className="object-cover"
              priority
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">নওগাঁয় ধান কাটার প্রস্তুতি চলছে</h2>
            <p>16 April 2025</p>
          </div>
        </div>
        <div className="card rounded-none shadow-sm">
          <figure className="relative h-[235px] w-full">
            <image_1.default
              src="/images/news-2.webp"
              alt="News Thumbnail"
              fill
              className="object-cover"
              priority
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">নওগাঁয় ধান কাটার প্রস্তুতি চলছে</h2>
            <p>16 April 2025</p>
          </div>
        </div>
        <div className="card rounded-none shadow-sm">
          <figure className="relative h-[235px] w-full">
            <image_1.default
              src="/images/news-2.webp"
              alt="News Thumbnail"
              fill
              className="object-cover"
              priority
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">নওগাঁয় ধান কাটার প্রস্তুতি</h2>
            <p>16 April 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};
exports.default = JatiyoNews;
