import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';

import Footer from './components/Footer/Footer';
import pigIcon from './assets/pig.png';

import './App.css'



const navItems = [
  { to: '/', label: '主页' },
  { to: '/minecraft', label: 'Minecraft' },
  { to: '/novels', label: '小说' },
  { to: '/fries', label: '薯条' },
];

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 text-stone-800 font-sans flex flex-col'>
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

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
