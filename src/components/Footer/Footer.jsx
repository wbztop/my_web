import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-stone-100 dark:bg-stone-800 text-center p-6 mt-auto'>
      <div className='text-stone-600 dark:text-stone-400'>
        <p>&copy; {currentYear} 王博智. All Rights Reserved.</p>

      </div>
    </footer>
  )
}

export default Footer
