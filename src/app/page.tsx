import CategoryWithSidebar from "@/components/CategoryWithSidebar/CategoryWithSidebar";
import Features from "@/components/HomePage/Features/Features";
import HeroSection from "@/components/HomePage/HeroSectionItems/HeroSection";

export default function Home() {
  return (
    <div className="">
      {/* <Image
        className=""
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      /> */}
      <HeroSection />
      <Features/>
      <CategoryWithSidebar/>
    </div>
  );
}
