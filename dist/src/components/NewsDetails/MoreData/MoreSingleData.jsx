"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MoreSingleData;
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
// Fisher-Yates shuffle
function getRandomItems(array, count) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}
async function MoreSingleData({ categoryItems }) {
    const randomFive = getRandomItems(categoryItems, 5);
    return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {randomFive.map((item) => (<div key={item.id}>
          <link_1.default href={`/details/${item.category_name}/${item.id}`}>
            <div className="card rounded-none shadow-sm group">
              <figure className="relative h-[200px] overflow-hidden transition-transform duration-500 ease-in">
                <OptimizedNewsImage_1.default className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.thumbnail || "no img"} altText={item.name} heightClass="h-full" widthClass="w-full" priority/>
              </figure>
              <div className="card-body">
                <h2 className="card-title h-15">{item.news_title}</h2>
                <small className="text-site-secondary opacity-70 block mt-1">
                  <NewsTimeShower_1.default newsTime={item.news_time || new Date().toISOString()}/>
                </small>
              </div>
            </div>
          </link_1.default>
        </div>))}
    </div>);
}
