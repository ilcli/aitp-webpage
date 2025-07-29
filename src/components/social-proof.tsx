"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

export function SocialProof() {
  const logos = [
    { name: "TechCorp", width: 120, alt: "TechCorp - Technology Solutions" },
    { name: "DataFlow", width: 100, alt: "DataFlow - Data Analytics Platform" },
    {
      name: "InnovateAI",
      width: 140,
      alt: "InnovateAI - AI Innovation Company",
    },
    {
      name: "SmartSys",
      width: 110,
      alt: "SmartSys - Smart Systems Integration",
    },
    { name: "AutoFlow", width: 130, alt: "AutoFlow - Workflow Automation" },
    { name: "ProcessPro", width: 115, alt: "ProcessPro - Process Management" },
    { name: "CloudTech", width: 125, alt: "CloudTech - Cloud Infrastructure" },
    {
      name: "MetricsCorp",
      width: 135,
      alt: "MetricsCorp - Business Analytics",
    },
    {
      name: "StreamlineAI",
      width: 145,
      alt: "StreamlineAI - AI-Powered Efficiency",
    },
    {
      name: "DataSync",
      width: 105,
      alt: "DataSync - Data Integration Platform",
    },
    {
      name: "WorkflowPro",
      width: 125,
      alt: "WorkflowPro - Professional Workflows",
    },
    {
      name: "InsightTech",
      width: 120,
      alt: "InsightTech - Business Intelligence",
    },
  ];

  // Calculate total width for seamless animation
  const totalWidth = logos.reduce((sum, logo) => sum + logo.width + 32, 0); // 32px for gap

  const controls = useAnimationControls();
  const currentPositionRef = useRef(0);
  const animationStartTimeRef = useRef(Date.now());

  const startAnimation = useCallback(
    (fromPosition = 0) => {
      const isMobile = window.innerWidth < 768;
      const duration = isMobile ? 20 : 25;

      // Calculate remaining distance and time
      const remainingDistance =
        totalWidth - Math.abs(fromPosition % totalWidth);
      const remainingDuration = (remainingDistance / totalWidth) * duration;

      animationStartTimeRef.current = Date.now();
      currentPositionRef.current = fromPosition;

      controls.start({
        x: fromPosition - totalWidth,
        transition: {
          duration: remainingDuration,
          ease: "linear",
          onComplete: () => {
            // Reset position and continue the loop
            currentPositionRef.current = 0;
            startAnimation(0);
          },
        },
      });
    },
    [controls, totalWidth]
  );

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Static display for users who prefer reduced motion
      controls.stop();
      return;
    }

    startAnimation(0);
  }, [controls, totalWidth, startAnimation]);

  const handleHoverStart = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReducedMotion) {
      // Calculate current position based on elapsed time
      const elapsedTime = Date.now() - animationStartTimeRef.current;
      const isMobile = window.innerWidth < 768;
      const duration = isMobile ? 20 : 25;
      const speed = totalWidth / (duration * 1000); // pixels per millisecond

      currentPositionRef.current =
        currentPositionRef.current - speed * elapsedTime;
      controls.stop();
    }
  };

  const handleHoverEnd = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Resume from current position
    startAnimation(currentPositionRef.current);
  };

  return (
    <section className="bg-accent-50/50 py-16 dark:bg-accent-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-2xl font-semibold text-accent-600 dark:text-accent-400">
            Trusted by teams working in...
          </h2>
        </div>

        {/* Logo Carousel */}
        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Client logos carousel"
        >
          <motion.div
            className="flex items-center space-x-6 sm:space-x-8"
            animate={controls}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            style={{
              width: totalWidth * 2,
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex h-10 flex-shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 sm:h-12"
                style={{ width: Math.max(logo.width * 0.8, 80) }} // Responsive width with minimum
              >
                <div className="flex h-6 w-full items-center justify-center rounded bg-gradient-to-r from-accent-300 to-accent-400 dark:from-accent-600 dark:to-accent-500 sm:h-8">
                  <span
                    className="text-xs font-semibold text-accent-700 dark:text-accent-200 sm:text-xs"
                    aria-label={logo.alt}
                    role="img"
                  >
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex h-10 flex-shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 sm:h-12"
                style={{ width: Math.max(logo.width * 0.8, 80) }} // Responsive width with minimum
              >
                <div className="flex h-6 w-full items-center justify-center rounded bg-gradient-to-r from-accent-300 to-accent-400 dark:from-accent-600 dark:to-accent-500 sm:h-8">
                  <span
                    className="text-xs font-semibold text-accent-700 dark:text-accent-200 sm:text-xs"
                    aria-label={logo.alt}
                    role="img"
                  >
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Industry indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-accent-500 dark:text-accent-400">
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Healthcare
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Finance
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            E-commerce
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Education
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Manufacturing
          </span>
          <span className="rounded-full bg-accent-100 px-3 py-1 dark:bg-accent-800">
            Professional Services
          </span>
        </div>
      </div>
    </section>
  );
}
