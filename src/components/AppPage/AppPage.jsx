import React, { useEffect } from 'react';
import { appPageContent } from '../../data/appPageContent';
import SubPageLayout from '../ui/SubPageLayout';

const appNavItems = [
  { to: '/app/section1', label: '模块一' },
  { to: '/app/section2', label: '模块二' },
  { to: '/app/section3', label: '模块三' },
];

const AppPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubPageLayout navItems={appNavItems}>
      <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-8'>{appPageContent.title}</h2>
          <p className='text-lg text-stone-600'>{appPageContent.paragraphs[0]}</p>
        </div>
      </div>
      <div className='max-w-5xl mx-auto text-center pb-16'>
        <div className='text-lg text-stone-600 space-y-6'>
          {appPageContent.paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
};

export default AppPage;