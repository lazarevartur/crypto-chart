import { FC } from "react";
import { ICoinDetailInfo } from "@api/models/ICoinDetailInfo";

interface CoinDetailProps {
  coinInfo?: ICoinDetailInfo;
}

export const CoinDetail: FC<CoinDetailProps> = ({ coinInfo }) => {
  return (
    <div className="my-6">
      <div className="flex gap2 items-center">
        <img src={coinInfo?.image.small} alt={coinInfo?.name} />
        <h1 className="text-2xl mb-2 capitalize font-bold">{coinInfo?.name}</h1>
      </div>
      <p
        className="mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: coinInfo?.description.en ?? "" }}
      />
    </div>
  );
};
