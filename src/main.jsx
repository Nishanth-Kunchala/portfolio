// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 💡 NEW: Import BrowserRouter
import { BrowserRouter } from 'react-router-dom'; 

import './App.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 🔑 FIX: Wrap App with BrowserRouter and set basename */}
    <BrowserRouter basename="/portfolio"> 
      <App />
    </BrowserRouter>
  </StrictMode>,
);