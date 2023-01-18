import { useTrending } from "@api/http/hooks/useTrending";
import { CoinTrending, Skeleton } from "@components";

export const Trending = () => {
  const { data: coinsData, isLoading } = useTrending();

  if (isLoading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-2">
        {coinsData?.coins.map(({ item }) => (
          <CoinTrending key={item.coin_id} coin={item} />
        ))}
      </h1>
    </div>
  );
};
