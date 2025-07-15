import { useState } from 'react'
import Section from '../ui/Section'
import { minecraftContent } from '../../data/minecraftContent'
import qqQrcode from '../../assets/Minecraft_QQ.png'
import Modal from '../ui/Modal'

const Minecraft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copyButtonText, setCopyButtonText] = useState('复制群号')
  const qqGroupNumber = '784890332'

  const handleCopy = () => {
    navigator.clipboard.writeText(qqGroupNumber).then(
      () => {
        setCopyButtonText('已复制！')
        setTimeout(() => {
          setCopyButtonText('复制群号')
        }, 2000)
      },
      (err) => {
        console.error('Could not copy text: ', err)
        setCopyButtonText('复制失败')
        setTimeout(() => {
          setCopyButtonText('复制群号')
        }, 2000)
      }
    )
  }

  const initialContent = (
    <>
      <div className='text-center mb-16 mt-8'>
        <button
          onClick={() => setIsModalOpen(true)}
          className='bg-white hover:bg-stone-200 text-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-white font-bold py-6 px-12 rounded-lg text-3xl transition-colors shadow-lg'
        >
          加入我们
        </button>
      </div>
      <h2 className='text-4xl font-bold'>{minecraftContent.initial.title}</h2>
      <p className='text-lg text-stone-500 mt-4'>
        {minecraftContent.initial.subtitle}
      </p>
    </>
  )

  return (
    <>
      <Section initialContent={initialContent}>
      <div className='h-[4000px]'>
        <h3 className='text-4xl font-bold tracking-tight mb-8'>
          {minecraftContent.extended.title}
        </h3>
        {minecraftContent.extended.paragraphs.map((p, i) => (
          <p key={i} className='text-lg text-stone-500 max-w-2xl mx-auto mb-4'>
            {p}
          </p>
        ))}

      </div>
    </Section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ariaLabelledBy='qq-modal-title'
      >
        <div className='text-center w-full'>
            <h3 id='qq-modal-title' className='text-2xl font-bold mb-4'>加入QQ群</h3>
            <img
              src={qqQrcode}
              alt='QQ Group QR Code'
              className='w-full max-w-xs mx-auto rounded-md'
            />
            <p className='text-lg text-stone-600 dark:text-stone-300 mt-4'>
              群号: {qqGroupNumber}
            </p>
            <button
              onClick={handleCopy}
              className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 transition-colors w-full'
            >
              {copyButtonText}
            </button>
        </div>
      </Modal>
    </>
  )
}

export default Minecraft
