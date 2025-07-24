import React, { useEffect } from 'react';
import { animePageContent } from '../../data/animePageContent';
import SubPageLayout from '../ui/SubPageLayout';

const animeNavItems = [
  { to: '/anime/section1', label: '模块一' },
  { to: '/anime/section2', label: '模块二' },
  { to: '/anime/section3', label: '模块三' },
];

const AnimePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubPageLayout navItems={animeNavItems}>
      <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-8'>{animePageContent.title}</h2>
          <p className='text-lg text-stone-600'>{animePageContent.paragraphs[0]}</p>
        </div>
      </div>
      <div className='max-w-5xl mx-auto text-center pb-16'>
        <div className='text-lg text-stone-600 space-y-6'>
          {animePageContent.paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
};

export default AnimePage;