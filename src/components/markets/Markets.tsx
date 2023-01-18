import { useMarkets } from "@api/http/hooks/useMarkets";
import { Coin, Skeleton } from "@components";

export const Markets = () => {
  const { data, isLoading } = useMarkets();

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
    <section className="mt-8">
      <h1 className="text-2xl mb-2">Markets</h1>
      {data?.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </section>
  );
};
