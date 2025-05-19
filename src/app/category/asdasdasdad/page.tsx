// import SingleCategoryNews from "@/components/SingleCategoryNews/SingleCategoryNews";
// import { notFound } from "next/navigation";
// import React from "react";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

//   if (!id) return notFound();

//   const response = await fetch(
//     `https://backoffice.ajkal.us/category-news/${id}`,
//     {
//       next: { revalidate: 60 },
//     }
//   );

//   if (!response.ok) {
//     return <div className="text-red-600">❌ Failed to load category data.</div>;
//   }

//   const categoryData = await response.json();
//   const singleCategoryData = categoryData?.data;

//   if (!singleCategoryData) return notFound();

//   return (
//     <div className="dark:bg-white bg-white">
//       <div className="container mx-auto sm:px-0">
//         <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12">
//           <div className="col-span-12 xl:col-span-9">
//             <SingleCategoryNews singleCategoryData={singleCategoryData} />
//           </div>
//           <div className="col-span-12 xl:col-span-3">
//             <p className="text-black">Sidebar</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } =await params;

  return <h1>Category Page for: {slug}</h1>;
}
