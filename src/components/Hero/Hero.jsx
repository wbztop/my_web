import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { AiFillWechat, AiFillQqCircle } from 'react-icons/ai'
import { SiBilibili } from 'react-icons/si'
import { Tooltip } from 'react-tooltip'
import Section from '../ui/Section'
import { heroContent } from '../../data/heroContent'
import { useState } from 'react'
import { Button } from '../ui/button'
import wechatQrcode from '../../assets/wechat_qrcode.png'
import qqQrcode from '../../assets/qq_qrcode.png'
import Modal from '../ui/Modal'
import pigIcon from '../../assets/pig.png'

const Hero = () => {
  const [isWechatModalOpen, setIsWechatModalOpen] = useState(false)
  const [isQqModalOpen, setIsQqModalOpen] = useState(false)
  const initialContent = (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className='max-w-3xl relative'
      >
        <div className='absolute -inset-x-40 -inset-y-32 bg-gradient-to-r from-stone-200/0 via-stone-200/5 to-stone-200/0 blur-3xl -z-10' />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 bg-gradient-to-r from-stone-700 via-stone-800 to-stone-700 text-transparent bg-clip-text'
        >
          {heroContent.initial.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-lg md:text-xl text-stone-500 max-w-xl mx-auto mb-6'
        >
          {heroContent.initial.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex justify-center space-x-6 mt-12'
        >
          {heroContent.initial.socials.map((social) => {
            if (social.icon === 'Wechat') {
              return (
                <button
                  key={social.name}
                  onClick={() => setIsWechatModalOpen(true)}
                  data-tooltip-id='hero-tooltip'
                  data-tooltip-content={social.name}
                  className='text-stone-500 hover:text-stone-800 transition-colors hover:scale-110 transform duration-200'
                >
                  <AiFillWechat size={28} />
                </button>
              )
            }
            if (social.icon === 'QQ') {
              return (
                <button
                  key={social.name}
                  onClick={() => setIsQqModalOpen(true)}
                  data-tooltip-id='hero-tooltip'
                  data-tooltip-content={social.name}
                  className='text-stone-500 hover:text-stone-800 transition-colors hover:scale-110 transform duration-200'
                >
                  <AiFillQqCircle size={28} />
                </button>
              )
            }
            return (
              <a
                key={social.name}
                data-tooltip-id='hero-tooltip'
                data-tooltip-content={social.name}
                href={social.url || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='text-stone-500 hover:text-stone-800 transition-colors hover:scale-110 transform duration-200'
              >
                {social.icon === 'Github' && <Github size={28} />}
                {social.icon === 'Bilibili' && <SiBilibili size={28} />}
              </a>
            )
          })}
        </motion.div>
      </motion.div>
      <Tooltip
        id='hero-tooltip'
        style={{
          backgroundColor: 'rgb(38 38 38)',
          color: '#fff',
          borderRadius: '6px',
        }}
      />
      <Modal
        isOpen={isWechatModalOpen}
        onClose={() => setIsWechatModalOpen(false)}
        ariaLabelledBy='wechat-modal-title'
      >
        <img
          src={wechatQrcode}
          alt='WeChat QR Code'
          className='w-full max-w-xs object-contain'
        />
        <p id='wechat-modal-title' className='text-center mt-4 text-stone-600'>
          扫码添加我的微信
        </p>
        <div className='mt-4 text-center'>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                heroContent.initial.socials.find((s) => s.icon === 'Wechat')
                  .wechatId
              )
              alert('微信号已复制到剪贴板')
            }}
          >
            复制微信号
          </Button>
        </div>
      </Modal>
      <Modal
        isOpen={isQqModalOpen}
        onClose={() => setIsQqModalOpen(false)}
        ariaLabelledBy='qq-modal-title'
      >
        <img
          src={qqQrcode}
          alt='QQ QR Code'
          className='w-full max-w-xs object-contain'
        />
        <p id='qq-modal-title' className='text-center mt-4 text-stone-600'>
          扫码添加我的QQ
        </p>
        <div className='mt-4 text-center'>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                heroContent.initial.socials.find((s) => s.icon === 'QQ').qqId
              )
              alert('QQ号已复制到剪贴板')
            }}
          >
            复制QQ号
          </Button>
        </div>
      </Modal>
    </>
  )

  return (
    <Section initialContent={initialContent}>
      <div className='max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-3 gap-12 items-center'>
          <div className='md:col-span-1'>
            <img
              src={pigIcon}
              alt='Profile'
              className='rounded-full mx-auto w-48 h-48 object-cover shadow-lg'
            />
          </div>
          <div className='md:col-span-2 text-lg text-stone-600 space-y-6 text-left'>
            <h3 className='text-4xl font-bold tracking-tight text-center mb-8'>
              {heroContent.extended.title}
            </h3>
            {heroContent.extended.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
