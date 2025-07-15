import React from 'react'
import Skeleton from '../ui/Skeleton'

const NovelsSkeleton = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'
        >
          <Skeleton className='w-full h-48' />
          <div className='p-6'>
            <Skeleton className='h-6 w-3/4 mb-2' />
            <Skeleton className='h-4 w-full mb-4' />
            <Skeleton className='h-4 w-1/2' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default NovelsSkeleton
