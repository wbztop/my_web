import React, { useEffect, useRef } from 'react'

const Modal = ({ isOpen, onClose, children, ariaLabelledBy }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      modalRef.current?.focus()
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      ref={modalRef}
      role='button'
      tabIndex={0}
      className='fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onKeyDown={(e) => e.key === 'Enter' && onClose()}
    >
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby={ariaLabelledBy}
        className='bg-white p-8 rounded-lg relative shadow-xl'
        
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-stone-500 hover:text-stone-800'
          aria-label='关闭模态框'
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
