import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="text-blue-400" size={24} />
            <span className="text-2xl font-bold">Muheeb Ahmed</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Passionate web developer creating digital experiences that make a difference.
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500 fill-current" size={16} />
            </motion.div>
            <span>by Muheeb Ahmed</span>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/muheeb-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Muheeb's GitHub"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muheeb-ahmed-4a7b83367/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Muheeb's LinkedIn"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/MuheebAhme2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Muheeb's X"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>

              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Muheeb Ahmed. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;