import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const steps = [
        { text: "Loading", duration: 800 },
        { text: "Initializing", duration: 600 },
        { text: "Preparing", duration: 700 },
        { text: "Ready", duration: 500 }
    ];

    const nextStep = useCallback(() => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(onComplete, 500);
            }, 800);
        }
    }, [currentStep, steps.length, onComplete]);

    useEffect(() => {
        const timer = setTimeout(nextStep, steps[currentStep].duration);
        return () => clearTimeout(timer);
    }, [currentStep, steps, nextStep]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center overflow-hidden"
                >
                    {/* Animated background elements - Optimized */}
                    <div className="absolute inset-0">
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/10 rounded-full"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                }}
                                animate={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                }}
                                transition={{
                                    duration: 4 + Math.random() * 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>

                    {/* Main content */}
                    <div className="relative z-10 text-center px-4">
                        {/* Logo/Name */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 1, type: "spring", stiffness: 200 }}
                            className="mb-8"
                        >
                            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-wider">
                                MA
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-0.5 bg-white/40 rounded-full mx-auto max-w-xs"
                            />
                        </motion.div>

                        {/* Loading text */}
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium mb-6"
                        >
                            {steps[currentStep].text}
                        </motion.div>

                        {/* Loading dots */}
                        <div className="flex justify-center space-x-1.5">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-white/60 rounded-full"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-0.5 bg-white/50 rounded-full mt-6 max-w-xs mx-auto"
                        />
                    </div>

                    {/* Corner decorations - Optimized */}
                    <div className="absolute top-6 left-6">
                        <motion.div
                            className="w-12 h-12 border border-white/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <div className="absolute bottom-6 right-6">
                        <motion.div
                            className="w-8 h-8 border border-white/20 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
