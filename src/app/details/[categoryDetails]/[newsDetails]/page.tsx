export default async function ProductDetails({
  params,
}: {
  params: { categoryDetails: string; newsDetails: string };
}) {
  const { categoryDetails, newsDetails } = await params;

  return (
    <h1>
      Details for category: {categoryDetails}, News: {newsDetails}
    </h1>
  );
}
