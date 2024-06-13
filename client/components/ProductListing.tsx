import ItemCard from "@/components/ItemCard";

export default function ProductListing({ productsData }: any) {
  return (
    <div className="text-center w-full min-h-fit flex gap-2 m-1 rounded-md flex-wrap items-center justify-center mb-10">
      {productsData?.data?.map((product: any) => {
        return <ItemCard key={product.id} product={product} />;
      })}
    </div>
  );
}