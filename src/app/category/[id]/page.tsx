// app/category/[id]/page.tsx

export const dynamic = "force-dynamic"; // 💡 Add this line

export default async function Page({ params, searchParams }: any) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const categoryName = decodeURIComponent(resolvedParams.id);
  const categoryId = resolvedSearchParams.id;

  return (
    <div>
      <h1>Category Name: {categoryName}</h1>
      <h2>Category ID: {categoryId}</h2>
    </div>
  );
}
