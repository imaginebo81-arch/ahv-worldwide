import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Export from './pages/Export';
import Import from './pages/Import';
import Consultancy from './pages/Consultancy';
import Education from './pages/Education';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="export" element={<Export />} />
          <Route path="import" element={<Import />} />
          <Route path="consultancy" element={<Consultancy />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}
