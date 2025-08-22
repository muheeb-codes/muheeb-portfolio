import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X } from 'lucide-react';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ isOpen, onClose }) => {
  const [selectedTheme, setSelectedTheme] = useState('blue');

  const themes = [
    { name: 'blue', label: 'Ocean Blue', primary: '#3B82F6', secondary: '#8B5CF6' },
    { name: 'emerald', label: 'Emerald Green', primary: '#10B981', secondary: '#059669' },
    { name: 'purple', label: 'Royal Purple', primary: '#8B5CF6', secondary: '#7C3AED' },
    { name: 'rose', label: 'Rose Pink', primary: '#F43F5E', secondary: '#E11D48' },
    { name: 'amber', label: 'Sunset Amber', primary: '#F59E0B', secondary: '#D97706' },
    { name: 'cyan', label: 'Cyber Cyan', primary: '#06B6D4', secondary: '#0891B2' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'blue';
    setSelectedTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      document.documentElement.style.setProperty('--color-primary', theme.primary);
      document.documentElement.style.setProperty('--color-secondary', theme.secondary);
      localStorage.setItem('selectedTheme', themeName);
    }
  };

  const handleThemeChange = (themeName: string) => {
    setSelectedTheme(themeName);
    applyTheme(themeName);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Palette className="text-gray-600 dark:text-gray-300" size={20} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Theme Customizer
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Choose your preferred color theme for the portfolio
            </p>

            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme) => (
                <motion.button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedTheme === theme.name
                      ? 'border-current shadow-lg'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                  style={{
                    background: selectedTheme === theme.name
                      ? `linear-gradient(135deg, ${theme.primary}20, ${theme.secondary}20)`
                      : undefined,
                    borderColor: selectedTheme === theme.name ? theme.primary : undefined,
                  }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.primary }}
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.secondary }}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white text-left">
                    {theme.label}
                  </p>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Your theme preference will be saved locally and applied across all visits.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeCustomizer;