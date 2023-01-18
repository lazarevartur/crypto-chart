import useSWR from "swr";
import { coinGeckoFetcher } from "../client";
import { QueryKeys } from "@api/queryKeys";
import { ICoin } from "@api/models/ICoin";

export const useMarkets = () => {
  const markets = useSWR<ICoin[]>(
    `${QueryKeys.markets}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    coinGeckoFetcher
  );

  return markets;
};
