import { FC } from "react";
import { Link } from "react-router-dom";

import type { ICoin } from "@api/models/ICoin";

import { numToUsd } from "@utils";

import { TrendingUpIcon } from "@components/icons/TrendingUpIcon";
import { TrendingDownIcon } from "@components/icons/TrendingDownIcon";

interface ICoinProps {
  coin: ICoin;
}

export const Coin: FC<ICoinProps> = ({ coin }) => {
  const {
    image,
    name,
    current_price,
    symbol,
    price_change_percentage_24h,
    market_cap,
    id,
  } = coin;

  const isDownUp = coin.price_change_percentage_24h < 0;
  return (
    <Link to={`/coin/${id}`}>
      <div
        className="grid grid-cols-3 sm:grid-cols-4 font-light
      p2 rounded border-gray-200 border-b hover:bg-gray-200"
      >
        <div className="flex items-center gap-1 w-full">
          <img className="w-6" src={image} alt={name} />
          <p>{name}</p>
          <span className="text-xs">({symbol})</span>
        </div>
        <span className="text-center w-full">{numToUsd(current_price)}</span>
        <span
          className={`flex gap-1 ${
            isDownUp ? "text-red-400" : "text-green-400"
          }`}
        >
          {isDownUp ? <TrendingDownIcon /> : <TrendingUpIcon />}{" "}
          {price_change_percentage_24h}
        </span>
        <div className="hidden sm:block">
          <p className="font-semibold">Market Cap</p>
          <span>{numToUsd(market_cap)}</span>
        </div>
      </div>
    </Link>
  );
};
