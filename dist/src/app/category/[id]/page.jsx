"use strict";
// app/category/[id]/page.tsx
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic = void 0;
exports.default = Page;
exports.dynamic = "force-dynamic"; // 💡 Add this line
async function Page({ params, searchParams }) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const categoryName = decodeURIComponent(resolvedParams.id);
    const categoryId = resolvedSearchParams.id;
    return (<div>
      <h1>Category Name: {categoryName}</h1>
      <h2>Category ID: {categoryId}</h2>
    </div>);
}
