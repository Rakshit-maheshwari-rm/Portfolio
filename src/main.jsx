import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notfound from './pages/Notfound';
import Index from './pages/Index';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  </BrowserRouter>
)
