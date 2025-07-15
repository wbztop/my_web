import React from 'react'

const ScrollBar = ({ scrollProgress }) => {
  return (
    <div className='absolute top-0 right-0 h-full w-2 bg-stone-200/50'>
      <div
        className='w-full bg-stone-500/80 rounded-full'
        style={{ height: `${scrollProgress}%` }}
      ></div>
    </div>
  )
}

export default ScrollBar
