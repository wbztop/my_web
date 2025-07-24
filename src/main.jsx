import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AllNovels from './components/AllNovels/AllNovels.jsx';
import AppPage from './components/AppPage/AppPage.jsx';
import WebNovelPage from './components/WebNovelPage/WebNovelPage.jsx';
import AnimePage from './components/AnimePage/AnimePage.jsx';
import GamePage from './components/GamePage/GamePage.jsx';
import MinecraftServerPage from './components/MinecraftServerPage/MinecraftServerPage.jsx';

import './index.css';

import Hero from './components/Hero/Hero.jsx';
import Novels from './components/Novels/Novels.jsx';
import Minecraft from './components/Minecraft/Minecraft.jsx';
import Fries from './components/Fries/Fries.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Hero /> },
      { path: 'minecraft', element: <Minecraft /> },
      { path: 'novels', element: <Novels /> },
      { path: 'fries', element: <Fries /> },
    ],
  },
  {
    path: '/all-novels',
    element: <AllNovels />,
  },
  {
    path: '/app',
    element: <AppPage />,
  },
  {
    path: '/web-novel',
    element: <WebNovelPage />,
  },
  {
    path: '/anime',
    element: <AnimePage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/minecraft-server',
    element: <MinecraftServerPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
