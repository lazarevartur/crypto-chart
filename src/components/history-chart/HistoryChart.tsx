import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FC } from "react";
import { IChartData } from "../../types";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface IHistoryChartProps {
  chartData: IChartData[];
  tokenName?: string;
}

export const HistoryChart: FC<IHistoryChartProps> = ({
  chartData,
  tokenName = "...",
}) => {
  const options = {
    responsive: true,
  };

  const data = {
    labels: chartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: tokenName,
        data: chartData.map((value) => value.y),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};
