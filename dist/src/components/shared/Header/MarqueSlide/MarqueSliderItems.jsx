"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarqueSliderItems;
const embla_carousel_auto_scroll_1 = __importDefault(require("embla-carousel-auto-scroll"));
const embla_carousel_react_1 = __importDefault(require("embla-carousel-react"));
const link_1 = __importDefault(require("next/link"));
function MarqueSliderItems({ breakingItems, }) {
    const [emblaRef] = (0, embla_carousel_react_1.default)({ loop: true, containScroll: "keepSnaps" }, [
        (0, embla_carousel_auto_scroll_1.default)({
            stopOnMouseEnter: true,
            stopOnInteraction: false,
            speed: 0.85,
            startDelay: 50,
        }),
    ]);
    const extendedBreakingItems = [
        ...breakingItems,
        ...breakingItems,
        ...breakingItems,
    ];
    return (<div className="bg-site-secondary">
      <section className="mx-auto flex h-[45px] container items-center gap-x-2 py-2 text-white">
        <div className="flex items-center">
          <span className="blinking-dot"></span>
          <span className="pr-3 font-semibold">ব্রেকিং:</span>
        </div>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {extendedBreakingItems.map((item, index) => (<div className="embla__slide min-w-0 flex-[0_0_auto] border-r-2 border-white px-2 flex items-center gap-2" key={index}>
                {/* <OptimizedNewsImage
              className="w-6 h-6 rounded-lg object-cover"
              // src={item.thumbnail || "no img"}
              imageName={item.thumbnail || "no img"}
              altText={item.name}
              heightClass="h-6"
              widthClass="w-[30px]"
              priority
            /> */}
                <link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}>
                  {item.bangla_title}
                </link_1.default>
              </div>))}
          </div>
        </div>
      </section>
    </div>);
}
