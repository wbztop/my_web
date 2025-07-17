import Section from '../ui/Section'
import React, { useState, useEffect } from 'react';
import qrcode from '../../assets/qrcode.png'
import sunIcon from '../../assets/sun.png'
import teaIcon from '../../assets/tea.png'

const Novels = () => {
  const [novelsContent, setNovelsContent] = useState(null);
    useEffect(() => {
    const fetchContent = async () => {
      const { novelsContent: content } = await import('../../data/novelsContent.js');
      setNovelsContent(content);
    };
    fetchContent();
  }, []);

  if (!novelsContent) {
    return <div>加载中...</div>;
  }

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

              <span className='font-semibold text-lg'>王博智.</span>
            </div>
            <img src={qrcode} alt='qrcode' className='w-full max-w-xs mx-auto' />
          </div>
          <p className='text-lg text-stone-600 mt-8'>
            扫描二维码，关注我的小说公众号
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://mp.weixin.qq.com/s/0lhUnnBjKcTZHGCqt_Mf9g" target="_blank" rel="noopener noreferrer" className="bg-stone-50 rounded-3xl p-6 flex items-center gap-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0">
              <img src={sunIcon} alt="太阳照常升起" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold">太阳照常升起</h3>
              <p className="text-stone-500 text-lg mt-1">点击阅读《太阳照常升起》</p>
            </div>
          </a>
          <a href="https://mp.weixin.qq.com/s/_Gb3s0G7n85fXLrt_pbtRg" target="_blank" rel="noopener noreferrer" className="bg-stone-50 rounded-3xl p-6 flex items-center gap-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0">
              <img src={teaIcon} alt="茶山" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold">茶山</h3>
              <p className="text-stone-500 text-lg mt-1">点击阅读《茶山》</p>
            </div>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Novels
