import React from 'react'
import Skeleton from '../ui/Skeleton'

const MinecraftSkeleton = () => {
  return (
    <div>
      <Skeleton className='h-8 w-1/2 mb-4' />
      <Skeleton className='h-4 w-full mb-2' />
      <Skeleton className='h-4 w-full mb-6' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <Skeleton className='h-6 w-1/3 mb-4' />
          <Skeleton className='w-full h-64' />
        </div>
        <div>
          <Skeleton className='h-6 w-1/3 mb-4' />
          <Skeleton className='w-full h-64' />
        </div>
      </div>
    </div>
  )
}

export default MinecraftSkeleton
