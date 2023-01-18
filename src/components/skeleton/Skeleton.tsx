import { FC } from "react";

interface ISkeletonProps {
  className?: string;
}

export const Skeleton: FC<ISkeletonProps> = ({ className }) => {
  return (
    <div className="animate-pulse">
      <div className={`bg-gray-300 rounded-md ${className}`}></div>
    </div>
  );
};
