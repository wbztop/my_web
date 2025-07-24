import React, { useEffect } from 'react';
import { gamePageContent } from '../../data/gamePageContent';
import SubPageLayout from '../ui/SubPageLayout';

const gameNavItems = [
  { to: '/game/section1', label: '模块一' },
  { to: '/game/section2', label: '模块二' },
  { to: '/game/section3', label: '模块三' },
];

const GamePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubPageLayout navItems={gameNavItems}>
      <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-8'>{gamePageContent.title}</h2>
          <p className='text-lg text-stone-600'>{gamePageContent.paragraphs[0]}</p>
        </div>
      </div>
      <div className='max-w-5xl mx-auto text-center pb-16'>
        <div className='text-lg text-stone-600 space-y-6'>
          {gamePageContent.paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
};

export default GamePage;