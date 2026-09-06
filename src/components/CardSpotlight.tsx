import React, { useRef, useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { audioHaptics } from '../utils/audioHaptics';

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableClickSound?: boolean;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className = '',
  glowColor,
  enableClickSound = true,
  onClick,
  ...props
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { themeConfig } = useStudio();
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -500, y: -500 });
  const [opacity, setOpacity] = useState<number>(0);

  const activeColor = glowColor || themeConfig.primaryColor || '#38bdf8';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (enableClickSound) {
      audioHaptics.playClick(1500);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/60 backdrop-blur-2xl transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${activeColor}18, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Delicate border light illumination */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          opacity: opacity * 0.75,
          border: `1px solid ${activeColor}55`,
          maskImage: `radial-gradient(180px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(180px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
