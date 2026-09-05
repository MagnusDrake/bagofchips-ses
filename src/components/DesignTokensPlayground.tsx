import React from 'react';
import { useStudio } from '../context/StudioContext';
import { THEMES } from '../data/themesData';
import type { ThemeId } from '../types';
import { Sliders, Check, Sparkles } from 'lucide-react';

export const DesignTokensPlayground: React.FC = () => {
  const { theme, themeConfig, setTheme } = useStudio();

  return (
    <section id="design-tokens" className="py-20 relative bg-black/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
              <Sliders className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                Design System Adaptability
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight theme-font-title">
              One codebase.{' '}
              <span style={{ color: themeConfig.primaryColor }}>Any brand identity.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Experience how our bespoke design systems allow your web application or portal to seamlessly morph color palettes, typography scales, and surface styling with zero page reloads.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Active Aesthetic: </span>
            <span className="text-white font-bold px-2 py-0.5 rounded bg-white/10">{themeConfig.name}</span>
          </div>
        </div>

        {/* Theme Picker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(THEMES).map((t) => {
            const isSelected = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as ThemeId)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                  isSelected
                    ? 'bg-white/10 border-white/40 shadow-xl scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                style={{
                  borderColor: isSelected ? t.primaryColor : undefined,
                }}
              >
                {/* Thumbnail Preview */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-white/10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full shadow" style={{ backgroundColor: t.primaryColor }} />
                    <span className="w-2.5 h-2.5 rounded-full shadow" style={{ backgroundColor: t.accentColor }} />
                  </div>
                  {isSelected && (
                    <div
                      className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-black shadow-md"
                      style={{ backgroundColor: t.primaryColor }}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <span className="text-[9px] font-mono text-slate-400 uppercase">{t.id}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">{t.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
