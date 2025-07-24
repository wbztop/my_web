import React, { useEffect } from 'react';
import { minecraftServerPageContent } from '../../data/minecraftServerPageContent';
import SubPageLayout from '../ui/SubPageLayout';

const minecraftServerNavItems = [
  { to: '/minecraft-server/section1', label: '模块一' },
  { to: '/minecraft-server/section2', label: '模块二' },
  { to: '/minecraft-server/section3', label: '模块三' },
];

const MinecraftServerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubPageLayout navItems={minecraftServerNavItems}>
      <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-8'>{minecraftServerPageContent.title}</h2>
          <p className='text-lg text-stone-600'>{minecraftServerPageContent.paragraphs[0]}</p>
        </div>
      </div>
      <div className='max-w-5xl mx-auto text-center pb-16'>
        <div className='text-lg text-stone-600 space-y-6'>
          {minecraftServerPageContent.paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
};

export default MinecraftServerPage;