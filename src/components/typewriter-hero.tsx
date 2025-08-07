"use client";

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterHeroProps {
  className?: string;
}

export function TypewriterHero({ className = "" }: TypewriterHeroProps) {
  const t = useTranslations('hero');
  const typewriterWords = t.raw('typewriter.words') as string[];

  return (
    <h1 className={`mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl ${className}`}>
      <span className="text-balance">
        {t('headline')}{" "}
        <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: typewriterWords,
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>{" "}
        {t('subtitle')}
      </span>
    </h1>
  );
}