"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const SectionTitle_1 = __importDefault(
  require("@/components/SectionTitle/SectionTitle")
);
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const HeroSlider_1 = __importDefault(require("./HeroSlider"));
const HeroSectionItems = () => {
  return (
    <div className="container mx-auto mt-5 mb-6">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <SectionTitle_1.default title="জাতীয়" />
          <div className="">
            <link_1.default href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                <figure className="relative w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <image_1.default
                    className="object-cover"
                    src="/images/news-1.webp"
                    alt="Shoes"
                    layout="fill" // Fill the parent container
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title font-normal">
                    শনিবার শতভাগ কারখানায় বেতন-বোনাস পরিশোধ সম্পন্ন হবে:
                    বিজিএমইএ
                  </h2>
                </div>
              </div>
            </link_1.default>

            <link_1.default href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden">
                <figure className="relative w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <image_1.default
                    className="object-cover"
                    src="/images/news-2.webp"
                    alt="Shoes"
                    layout="fill" // Fill the parent container
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title font-normal">
                    জান, পৃথিবীর সমস্ত সুখ আল্লাহ তোমাকে দিক: মাহিয়া মাহি
                  </h2>
                </div>
              </div>
            </link_1.default>
          </div>
        </div>
        <div className="col-span-6">
          <SectionTitle_1.default title="সর্বশেষ" />
          <HeroSlider_1.default />
        </div>
        <div className="col-span-3">
          <SectionTitle_1.default title="সর্বাধিক" />
          <div className="">
            <link_1.default href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                <figure className="relative w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <image_1.default
                    className="object-cover"
                    src="/images/news-1.webp"
                    alt="Shoes"
                    layout="fill" // Fill the parent container
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title font-normal">
                    শনিবার শতভাগ কারখানায় বেতন-বোনাস পরিশোধ সম্পন্ন হবে:
                    বিজিএমইএ
                  </h2>
                </div>
              </div>
            </link_1.default>

            <link_1.default href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden">
                <figure className="relative w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <image_1.default
                    className="object-cover"
                    src="/images/news-2.webp"
                    alt="Shoes"
                    layout="fill" // Fill the parent container
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title font-normal">
                    জান, পৃথিবীর সমস্ত সুখ আল্লাহ তোমাকে দিক: মাহিয়া মাহি
                  </h2>
                </div>
              </div>
            </link_1.default>
          </div>
        </div>
      </div>
    </div>
  );
};
exports.default = HeroSectionItems;
