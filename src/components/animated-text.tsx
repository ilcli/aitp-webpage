"use client";

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  className?: string;
}

export function AnimatedText({ className = "" }: AnimatedTextProps) {
  const t = useTranslations('hero');
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get typewriter words from translations
  const typewriterWords = t.raw('typewriter.words') as string[];
  
  // Ensure component is mounted before animations
  useEffect(() => {
    setMounted(true);
  }, []);

  // Cycle through words
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % typewriterWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [mounted, typewriterWords.length]);

  // Fallback for SSR
  if (!mounted) {
    return (
      <h1 className={`mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl ${className}`}>
        <span className="text-balance">
          {t('headline')}{" "}
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            {typewriterWords[0]}
          </span>{" "}
          {t('subtitle')}
        </span>
      </h1>
    );
  }

  return (
    <h1 className={`mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl ${className}`}>
      <span className="text-balance">
        {t('headline')}{" "}
        <span className="inline-block relative h-[1.2em] min-w-[280px] sm:min-w-[350px] lg:min-w-[400px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {typewriterWords[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        {t('subtitle')}
      </span>
    </h1>
  );
}