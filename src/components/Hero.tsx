import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { SiliconCanvas } from './SiliconCanvas';
import { LiveDeliverableConsole } from './LiveDeliverableConsole';
import { audioHaptics } from '../utils/audioHaptics';
import { ArrowRight, ArrowDown, Play, Image as ImageIcon, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { themeConfig } = useStudio();
  const [consoleMode, setConsoleMode] = useState<'interactive' | 'visual'>('interactive');

  const handleModeSwitch = (mode: 'interactive' | 'visual') => {
    audioHaptics.playClick(1500);
    setConsoleMode(mode);
  };

  return (
    <section className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
      {/* Interactive 60fps Silicon Wafer Canvas */}
      <SiliconCanvas />

      {/* Gentle celestial ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[1000px] h-[400px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${themeConfig.primaryColor}18, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Whisper-quiet status badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-slate-950/60 backdrop-blur-xl mb-8 shadow-lg">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeConfig.primaryColor }} />
          <span className="text-xs tracking-wider uppercase font-mono text-slate-300 flex items-center gap-1.5">
            <span>Software Engineering & Digital Studio</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-semibold">Worldwide Dispatch</span>
          </span>
        </div>

        {/* Poetic Confident Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-6">
          Software crafted with{' '}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
            quiet precision.
          </span>
        </h1>

        {/* Calm Subheadline */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          We engineer custom web applications, client booking portals, and mobile systems for businesses that value exceptional quality and effortless clarity.
        </p>

        {/* Tranquil Actions with Tactile Haptics */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#portfolio"
            onClick={() => audioHaptics.playClick(1300)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-102 active:scale-98 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
            style={{
              backgroundColor: '#f8fafc',
            }}
          >
            <span>View Selected Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#configurator"
            onClick={() => audioHaptics.playClick(1600)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/25 bg-slate-950/60 hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span>Interactive Scope Estimator</span>
          </a>
        </div>

        {/* Deliverable Switcher Selector (Interactive vs Visual) */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center p-1 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md shadow-lg text-xs font-mono">
            <button
              onClick={() => handleModeSwitch('interactive')}
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
                consoleMode === 'interactive'
                  ? 'bg-white text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Live Deliverable Sandbox</span>
            </button>

            <button
              onClick={() => handleModeSwitch('visual')}
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
                consoleMode === 'visual'
                  ? 'bg-white text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Production Render</span>
            </button>
          </div>
        </div>

        {/* Cinematic Visual Showcase Centerpiece */}
        <div className="relative max-w-5xl mx-auto transition-all duration-700 group">
          {/* Ambient Rim Light */}
          <div
            className="absolute -inset-1 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `linear-gradient(180deg, ${themeConfig.primaryColor}, transparent)`,
            }}
          />

          {consoleMode === 'interactive' ? (
            <LiveDeliverableConsole />
          ) : (
            /* Floating Pristine Viewport Frame */
            <div className="relative rounded-[28px] border border-white/10 bg-slate-950/80 backdrop-blur-3xl shadow-2xl shadow-black/90 overflow-hidden">
              {/* Minimalist Top Chrome */}
              <div className="px-5 py-3.5 border-b border-white/8 bg-white/2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 tracking-wider">
                  bagofchips.studio
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">Active Production Staging</span>
                </div>
              </div>

              {/* High-Resolution Showcase Visual */}
              <div className="relative aspect-[16/9] sm:aspect-[21/10] overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85"
                  alt="Production Web Application Preview"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Floating Information */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                      Featured Architecture
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                      MetroFleet Operations & Dispatch Platform
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-light">
                    Direct senior engineering · Hand-crafted architecture
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quiet scroll invitation */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce opacity-60" />
        </div>
      </div>
    </section>
  );
};
