"use strict";
// app/details/[categoryDetails]/[newsDetails]/page.tsx
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic = void 0;
exports.default = Page;
exports.dynamic = "force-dynamic";
async function Page({ params, searchParams }) {
    // Await the whole params and searchParams objects (since Next.js treats them as promises)
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const category = decodeURIComponent(resolvedParams.categoryDetails);
    const news = decodeURIComponent(resolvedParams.newsDetails);
    const newsId = resolvedSearchParams.id; // example query param
    return (<div className="p-4">
      <h1>Category: {category}</h1>
      <h2>News: {news}</h2>
      {newsId && <p>News ID (from query): {newsId}</p>}
    </div>);
}
