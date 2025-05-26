"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroCenterSlider;
const link_1 = __importDefault(require("next/link"));
const embla_carousel_react_1 = __importDefault(require("embla-carousel-react"));
const react_1 = require("react");
const fi_1 = require("react-icons/fi");
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
function HeroCenterSlider({ spotLightItems, }) {
    const [emblaRef, emblaApi] = (0, embla_carousel_react_1.default)({
        loop: true,
        align: "start",
    });
    (0, react_1.useEffect)(() => {
        if (!emblaApi)
            return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [emblaApi]);
    return (<div className="w-full">
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {spotLightItems.map((items) => (<div key={items.id} className="w-full flex-shrink-0">
                <link_1.default 
        // href="/"
        href={`/details/${items.slug}/${items.id}`}>
                  <div className="card rounded-none shadow-sm group bg-gradient-to-t from-black to-transparent overflow-hidden mb-3 w-full">
                    <figure className="relative h-full w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
                      {/* Black gradient overlay on top of the image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10 "/>
                      <OptimizedNewsImage_1.default imageName={items.thumbnail || "No image"} altText={`Thumbnail for ${items.thumbnail}`} heightClass="h-[507px]" widthClass="w-full" priority/>
                    </figure>

                    {/* Title section */}
                    <div className="card-body relative flex items-center justify-center bg-black">
                      <h1 className="card-title slider-title font-normal text-center text-white z-10">
                        {items.title}
                      </h1>
                    </div>
                  </div>
                </link_1.default>
              </div>))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
          <fi_1.FiChevronLeft size={24}/>
        </button>
        <button onClick={() => emblaApi?.scrollNext()} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white">
          <fi_1.FiChevronRight size={24}/>
        </button>
      </div>
    </div>);
}
