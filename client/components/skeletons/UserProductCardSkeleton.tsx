export default function UserProductsSkeleton() {
  return (
    <div className="text-blue-950 w-full">
      <div className="flex flex-wrap items-center justify-center gap-[3px]">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div className="h-32 w-32 bg-zinc-200 animate-pulse rounded-md"></div>
        ))}
      </div>
    </div>
  );
}
