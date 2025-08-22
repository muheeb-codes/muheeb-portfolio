import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

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
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Muheeb Ahmed. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;