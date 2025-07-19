import React from 'react';
import { NavLink } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';
import pigIcon from '../../assets/pig.png';

const SubPageLayout = ({ navItems, children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 text-stone-800 font-sans'>
      <header className='sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/80 backdrop-blur-sm'>
        <div className='container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4'>
          <div className='flex items-center gap-3'>
            <img src={pigIcon} alt='logo' className='h-8 w-8 rounded-full' />
            <span className='font-bold text-lg'>王博智</span>
          </div>
          <nav className='flex items-center gap-6 text-sm'>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    buttonVariants({ variant: isActive ? 'secondary' : 'ghost' }),
                    'font-medium text-stone-600 hover:text-stone-900'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className='flex-1 flex flex-col items-center p-8'>
        {children}
      </main>
    </div>
  );
};

export default SubPageLayout;