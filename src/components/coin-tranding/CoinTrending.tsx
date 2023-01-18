import { FC } from "react";
import { Item } from "@api/models/ITrending";
import { Link } from "react-router-dom";

interface ICoinTrendingProps {
  coin: Item;
}

export const CoinTrending: FC<ICoinTrendingProps> = ({ coin }) => {
  const { name, small, score, symbol, id } = coin;

  return (
    <Link to={`/coin/${id}`}>
      <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200">
        <div className="flex items-center gap-1">
          <span className="font-semibold">{score + 1}.</span>
          <img className="w-6" src={small} alt={name} />
          <p>{name}</p>
          <small className="text-xs">({symbol})</small>
        </div>
      </div>
    </Link>
  );
};
