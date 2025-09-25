// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 💡 NEW: Import HashRouter
import { HashRouter } from 'react-router-dom'; 

import './App.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 🔑 FIX: Use HashRouter instead of BrowserRouter */}
    <HashRouter> 
      <App />
    </HashRouter>
  </StrictMode>,
);