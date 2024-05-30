import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"


const SkeletonCard = () => {
  return (
    <div className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl p-5">
      <Skeleton variant="rectangular" className="h-[139px] w-full rounded-t-lg" />
      <div className="space-y-2 mt-5">
        <Skeleton variant="text" className="h-6 w-[80%]" />
        <Skeleton variant="text" className="h-4 w-[90%]" />
        <Skeleton variant="text" className="h-4 w-[60%]" />
        <Skeleton variant="rectangular" className="h-10 w-[30%]" />
      </div>
    </div>
  );
};

export default SkeletonCard;
