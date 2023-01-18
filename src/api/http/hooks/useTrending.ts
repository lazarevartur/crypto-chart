import useSWR from "swr";
import { coinGeckoFetcher } from "../client";
import { ITrending } from "@api/models/ITrending";
import { QueryKeys } from "@api/queryKeys";

export const useTrending = () => {
  const trending = useSWR<ITrending>(QueryKeys.trending, coinGeckoFetcher);

  return trending;
};
