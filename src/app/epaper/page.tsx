import EpaperItems from "@/components/EpaperItems/EpaperItems";
import EpaperAdSidebar from "@/components/Sidebar/EpaperAdSidebar/EpaperAdSidebar";

const Page = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-3">
        {/* Right Sidebar */}
        <EpaperItems />
        <div className="col-span-2">
          <div className="mt-5">
            <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
              বিজ্ঞাপন
            </div>
            <EpaperAdSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
