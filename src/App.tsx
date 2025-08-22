import React, { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import ThemeCustomizer from './components/ThemeCustomizer';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = React.useState(false);
  const [isThemeCustomizerOpen, setIsThemeCustomizerOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSmoothScroll = useCallback((e: Event) => {
    const target = e.target as HTMLAnchorElement;
    if (target.hash) {
      e.preventDefault();
      const element = document.querySelector(target.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsCommandPaletteOpen(true);
    }
  }, []);

  const openCommandPalette = useCallback(() => setIsCommandPaletteOpen(true), []);
  const closeCommandPalette = useCallback(() => setIsCommandPaletteOpen(false), []);
  const openThemeCustomizer = useCallback(() => setIsThemeCustomizerOpen(true), []);
  const closeThemeCustomizer = useCallback(() => setIsThemeCustomizerOpen(false), []);

  const handleSplashComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, [handleSmoothScroll]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (isLoading) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <CustomCursor />
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onOpenCommandPalette={openCommandPalette}
          onOpenThemeCustomizer={openThemeCustomizer}
        />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={closeCommandPalette}
      />

      <ThemeCustomizer
        isOpen={isThemeCustomizerOpen}
        onClose={closeThemeCustomizer}
      />
    </motion.div>
  );
}

export default App;