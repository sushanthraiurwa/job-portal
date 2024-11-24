import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import React from 'react';

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>  {/* Wrap your app with React.StrictMode */}
    <RouterProvider router={router} />
  // </React.StrictMode>  {/* This disables StrictMode */}
);
