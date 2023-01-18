import useSWR from "swr";
import { useCallback } from "react";

import { coinGeckoFetcher } from "../client";
import { IMarketChart } from "@api/models/IMarketChart";

import type { IChartData } from "../../../types";

export const useMarketChart = (id?: string) => {
  const marketChart = useSWR<IMarketChart>(
    id ? `coins/${id}/market_chart?vs_currency=usd&days=7` : null,
    coinGeckoFetcher
  );

  const getMarketChartData = useCallback(
    (): IChartData[] =>
      marketChart.data?.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      })) ?? [],
    [marketChart.data]
  );

  return { getMarketChartData, ...marketChart };
};
