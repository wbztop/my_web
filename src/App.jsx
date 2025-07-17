import React, { useState, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

import Footer from './components/Footer/Footer'
import HeroSkeleton from './components/Hero/HeroSkeleton'
const Hero = lazy(() => import('./components/Hero/Hero'))
import NovelsSkeleton from './components/Novels/NovelsSkeleton'
const Novels = lazy(() => import('./components/Novels/Novels'))
import MinecraftSkeleton from './components/Minecraft/MinecraftSkeleton'
const Minecraft = lazy(() => import('./components/Minecraft/Minecraft'))
import pigIcon from './assets/pig.png'

import './App.css'

const skeletonComponents = {
  hero: <HeroSkeleton />,
  novels: <NovelsSkeleton />,
  minecraft: <MinecraftSkeleton />,
}

const components = {
  hero: <Hero />,
  novels: <Novels />,
  minecraft: <Minecraft />,
}

const navItems = [
  { id: 'hero', label: '主页' },
  { id: 'minecraft', label: 'Minecraft' },
  { id: 'novels', label: '小说' },
]

function App() {
  const [activeView, setActiveView] = useState('hero')

  const renderContent = () => {
    return components[activeView] || <Hero />
  }

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
              <Button
                key={item.id}
                variant={activeView === item.id ? 'secondary' : 'ghost'}
                onClick={() => setActiveView(item.id)}
                className='font-medium text-stone-600 hover:text-stone-900'
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className='flex-1 container mx-auto max-w-screen-2xl px-4 py-8 flex flex-col justify-center'>
        <Suspense fallback={skeletonComponents[activeView]}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App
