import React, { useEffect } from 'react';
import { webNovelPageContent } from '../../data/webNovelPageContent';
import SubPageLayout from '../ui/SubPageLayout';

const webNovelNavItems = [
  { to: '/web-novel/section1', label: '模块一' },
  { to: '/web-novel/section2', label: '模块二' },
  { to: '/web-novel/section3', label: '模块三' },
];

const WebNovelPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubPageLayout navItems={webNovelNavItems}>
      <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-8'>{webNovelPageContent.title}</h2>
          <p className='text-lg text-stone-600'>{webNovelPageContent.paragraphs[0]}</p>
        </div>
      </div>
      <div className='max-w-5xl mx-auto text-center pb-16'>
        <div className='text-lg text-stone-600 space-y-6'>
          {webNovelPageContent.paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
};

export default WebNovelPage;