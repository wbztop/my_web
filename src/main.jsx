import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AllNovels from './components/AllNovels/AllNovels.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/novels',
    element: <AllNovels />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
