import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <PageFade>
              <Home />
            </PageFade>
          }
        />
        <Route
          path="/projects"
          element={
            <PageFade>
              <Projects />
            </PageFade>
          }
        />
        <Route
          path="/resume"
          element={
            <PageFade>
              <Resume />
            </PageFade>
          }
        />
        <Route
          path="/contact"
          element={
            <PageFade>
              <Contact />
            </PageFade>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageFade({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}