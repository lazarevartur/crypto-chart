import { CoinDetail, HistoryChart } from "@components";
import { useParams } from "react-router-dom";

import { useCoinInfo } from "@api/http/hooks/useCoinInfo";
import { useMarketChart } from "@api/http/hooks/useMarketChart";

import CustomChart from "@components/d3chart/CustomChart";
import {useEffect, useState} from "react";

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30]
]

let i = 0

function DetailPage() {
  const { id } = useParams();
  // const { data: coinInfo, isLoading } = useCoinInfo(id);
  // const { getMarketChartData, isLoading: isLoadingChart } = useMarketChart(id);

  return (
    <div className="wrapper-container mt-10">
      <CustomChart />
      {/*{isLoadingChart ? (*/}
      {/*  <div>Loading...</div>*/}
      {/*) : (*/}
      {/*  <HistoryChart chartData={getMarketChartData()} tokenName={id} />*/}
      {/*)}*/}

      {/*{isLoading ? <div>Loading...</div> : <CoinDetail coinInfo={coinInfo} />}*/}
    </div>
  );
}

export default DetailPage;
