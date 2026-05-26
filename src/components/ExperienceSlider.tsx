"use client";

import { useState, useEffect, useRef } from "react";

interface ExperienceStep {
  n: string;
  title: string;
  body: string;
}

export default function ExperienceSlider({ steps }: { steps: ExperienceStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [steps.length, isHovered]);

  return (
    <div 
      className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation / Progress */}
      <div className="flex flex-row md:flex-col w-full md:w-1/4 justify-between md:justify-start gap-0 md:gap-8 border-b md:border-b-0 md:border-l border-[rgba(196,199,199,0.35)] relative pb-4 md:pb-0">
        
        {/* Animated Active Line Indicator (Desktop) */}
        <div 
          className="hidden md:block absolute left-[-1px] w-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ 
            top: `${activeIndex * (100 / steps.length)}%`, 
            height: `${100 / steps.length}%`,
            backgroundColor: "var(--color-on-surface)"
          }}
        />

        {/* Animated Active Line Indicator (Mobile) */}
        <div 
          className="md:hidden absolute bottom-[-1px] h-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ 
            left: `${activeIndex * (100 / steps.length)}%`, 
            width: `${100 / steps.length}%`,
            backgroundColor: "var(--color-on-surface)"
          }}
        />

        {steps.map((step, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={step.n}
              onClick={() => setActiveIndex(idx)}
              className="group flex-1 md:flex-none flex flex-col items-center md:items-start text-left transition-all duration-500 px-2 md:px-8 py-2 md:py-4"
            >
              <div
                className="font-garamond transition-all duration-500"
                style={{
                  fontSize: isActive ? 42 : 28,
                  color: isActive ? "var(--color-on-surface)" : "var(--color-on-surface-variant)",
                  opacity: isActive ? 1 : 0.4,
                  lineHeight: 1,
                }}
              >
                {step.n}
              </div>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 relative min-h-[300px] w-full flex items-center overflow-hidden">
        {steps.map((step, idx) => {
          const isActive = idx === activeIndex;
          // Calculate if this step is before or after the active one for directional animation
          const isBefore = idx < activeIndex;
          
          return (
            <div
              key={step.n}
              className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center ${
                isActive 
                  ? "opacity-100 translate-y-0 pointer-events-auto z-10" 
                  : `opacity-0 pointer-events-none z-0 ${isBefore ? '-translate-y-8' : 'translate-y-8'}`
              }`}
            >
              <span 
                className="text-label-sm block mb-4 uppercase tracking-[0.2em]"
                style={{ color: "var(--color-secondary)", opacity: 0.8 }}
              >
                Phase {step.n}
              </span>
              <h3
                className="text-headline-lg mb-6 font-garamond"
                style={{ color: "var(--color-on-surface)", lineHeight: 1.1 }}
              >
                {step.title}
              </h3>
              <p
                className="text-body-lg"
                style={{ color: "var(--color-on-surface-variant)", maxWidth: "38rem", lineHeight: 1.7 }}
              >
                {step.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
