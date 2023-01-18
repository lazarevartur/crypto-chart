import { CoinDetail, HistoryChart } from "@components";
import { useParams } from "react-router-dom";

import { useCoinInfo } from "@api/http/hooks/useCoinInfo";
import { useMarketChart } from "@api/http/hooks/useMarketChart";

function DetailPage() {
  const { id } = useParams();
  const { data: coinInfo, isLoading } = useCoinInfo(id);
  const { getMarketChartData, isLoading: isLoadingChart } = useMarketChart(id);
  console.log(getMarketChartData());
  return (
    <div className="wrapper-container mt-10">
      {isLoadingChart ? (
        <div>Loading...</div>
      ) : (
        <HistoryChart chartData={getMarketChartData()} tokenName={id} />
      )}

      {isLoading ? <div>Loading...</div> : <CoinDetail coinInfo={coinInfo} />}
    </div>
  );
}

export default DetailPage;
