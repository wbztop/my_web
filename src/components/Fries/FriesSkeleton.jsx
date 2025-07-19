import React from 'react';
import Skeleton from '../ui/Skeleton';

const FriesSkeleton = () => {
  return (
    <div>
      <Skeleton className='h-8 w-1/2 mb-4' />
      <Skeleton className='h-4 w-full mb-2' />
      <Skeleton className='h-4 w-full mb-6' />
    </div>
  );
};

export default FriesSkeleton;