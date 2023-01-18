import useSWR from "swr";
import { coinGeckoFetcher } from "../client";
import { ICoinDetailInfo } from "@api/models/ICoinDetailInfo";

export const useCoinInfo = (id?: string) => {
  const coin = useSWR<ICoinDetailInfo>(
    id
      ? `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
      : null,
    coinGeckoFetcher
  );

  return coin;
};
