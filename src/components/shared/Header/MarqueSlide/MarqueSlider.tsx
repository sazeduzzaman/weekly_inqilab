import MarqueSliderItems from "./MarqueSliderItems";

const mockBreakingItems = [
  {
    id: "1",
    name: "Politics",
    name_bangla: "রাজনীতি",
    category_id: "politics",
    news_title: " টিপু আলম মিলনের গল্পে ঈদের নাটক ‘লন্ডনী জামাই’",
    // image_url: "/images/logo.png"
    image_url: "/images/breaking-one.webp"
  },
  {
    id: "2",
    name: "Sports",
    name_bangla: "খেলা",
    category_id: "sports",
    news_title: " আর্থিক প্রতারণার অভিযোগ, আইনি জটিলতায় বলিউড অভিনেতা",
    // image_url: "/images/logo.png"
    image_url: "/images/breaking-two.webp"
  },
  {
    id: "3",
    name: "Tech",
    name_bangla: "প্রযুক্তি",
    category_id: "tech",
    news_title: " শুটিংয়ে গিয়ে নায়িকা দেখলেন তার পরিবর্তে অভিনয় করছে কুকুর!",
    // image_url: "/images/logo.png"
    image_url: "/images/breaking-three.webp"
  },
];

export default function MarqueSlider() {
  return (
    <div>
      <MarqueSliderItems breakingItems={mockBreakingItems} />
    </div>
  );
}
