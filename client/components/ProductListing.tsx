import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./skeletons/ProductCardSkeleton";

export default function ProductListing({ productsData, isLoading }: any) {
  if (isLoading) {
    return (
      <div className="text-center min-w-[90%] max-w-xl sm:w-full min-h-fit gap-4 m-1 px-4 rounded-md grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mb-10">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-center min-w-[90%] max-w-xl sm:w-full min-h-fit gap-4 m-1 px-4 rounded-md grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mb-10">
        {productsData?.data?.map((product: any) => {
          return <ProductCard key={product?._id} product={product} />;
        })}
      </div>
    );
  }
}