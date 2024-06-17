import ProductCard from "./ProductCard";

export default function ProductListing({ productsData }: any) {
  return (
    <div className="text-center w-full min-h-fit flex gap-2 m-1 rounded-md flex-wrap items-center justify-center mb-10">
      {productsData?.data?.map((product: any) => {
        return <ProductCard key={product?._id} product={product} />;
      })}
    </div>
  );
}
