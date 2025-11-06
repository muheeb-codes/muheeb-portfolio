import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Throttle function to limit update frequency
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  const updateMousePosition = useCallback(throttle((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, 16), []); // 60fps = ~16ms

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    // Add event listeners for hoverable elements
    const hoverableElements = document.querySelectorAll('a, button, [role="button"]');
    hoverableElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      hoverableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [updateMousePosition]);

  // Render cursor into a portal attached to document.body so it sits above other stacking contexts
  const cursor = (
    <div
      style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 999999 }}
      aria-hidden="true"
    >
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none mix-blend-difference"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(cursor, document.body);
  }

  return null;
};

export default CustomCursor;