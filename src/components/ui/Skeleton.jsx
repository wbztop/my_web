import React from 'react'

const Skeleton = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded-md dark:bg-gray-700 ${className}`}
    />
  )
}

export default Skeleton
