import Section from '../ui/Section'
import { novelsContent } from '../../data/novelsContent'
import qrcode from '../../assets/qrcode.png'
import pigIcon from '../../assets/pig.png'

const Novels = () => {
  const initialContent = (
    <>
      <h2 className='text-4xl font-bold'>{novelsContent.initial.title}</h2>
      <p className='text-lg text-stone-500 mt-4'>
        {novelsContent.initial.subtitle}
      </p>
    </>
  )

  return (
    <Section initialContent={initialContent}>
      <div className='h-[4000px]'>
        <h3 className='text-4xl font-bold tracking-tight mb-8'>
          {novelsContent.extended.title}
        </h3>
        {novelsContent.extended.paragraphs.map((p, i) => (
          <p key={i} className='text-lg text-stone-500 max-w-2xl mx-auto mb-4'>
            {p}
          </p>
        ))}
        <div className='flex flex-col items-center justify-center bg-stone-50 py-12'>
          <div className='max-w-sm w-full text-center'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <img src={pigIcon} alt='logo' className='h-10 w-10 rounded-full' />
              <span className='font-semibold text-lg'>王博智.</span>
            </div>
            <img src={qrcode} alt='qrcode' className='w-full max-w-xs mx-auto' />
          </div>
          <p className='text-lg text-stone-600 mt-8'>
            扫描二维码，关注我的小说公众号
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Novels
