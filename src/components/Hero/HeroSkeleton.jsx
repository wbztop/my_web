import React from 'react'
import Skeleton from '../ui/Skeleton'

const HeroSkeleton = () => {
  return (
    <div className='text-center'>
      <Skeleton className='w-32 h-32 mx-auto rounded-full' />
      <Skeleton className='h-8 w-48 mx-auto mt-4' />
      <Skeleton className='h-6 w-64 mx-auto mt-2' />
      <div className='flex justify-center space-x-4 mt-6'>
        <Skeleton className='w-8 h-8 rounded-full' />
        <Skeleton className='w-8 h-8 rounded-full' />
        <Skeleton className='w-8 h-8 rounded-full' />
      </div>
    </div>
  )
}

export default HeroSkeleton
