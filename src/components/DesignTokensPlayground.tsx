import React from 'react';
import { useStudio } from '../context/StudioContext';
import { THEMES } from '../data/themesData';
import type { ThemeId } from '../types';
import { Sliders, Code2, Check, Terminal } from 'lucide-react';

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
                Engineering Playground & Design Token Demo
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight theme-font-title">
              Dynamic design system <span style={{ color: themeConfig.primaryColor }}>architecture.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We engineer scalable component libraries and design token engines. This interactive demo demonstrates how our applications dynamically morph color tokens, typography scales, border radiuses, and surface alphas at runtime with zero page reloads.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Active Token Context: </span>
            <span className="text-white font-bold px-2 py-0.5 rounded bg-white/10">{themeConfig.name}</span>
          </div>
        </div>

        {/* Theme Picker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

        {/* Live CSS Token Inspector */}
        <div className="p-4 sm:p-6 rounded-2xl border bg-black/60 backdrop-blur-xl border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono font-bold text-slate-200">
                Runtime CSS Variables Inspection
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">
              Scoped to :root.theme-{theme}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-mono">
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-slate-500 mb-1">--theme-primary</div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: themeConfig.primaryColor }} />
                <span className="font-bold text-white">{themeConfig.primaryColor}</span>
              </div>
            </div>

            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-slate-500 mb-1">--theme-accent</div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: themeConfig.accentColor }} />
                <span className="font-bold text-white">{themeConfig.accentColor}</span>
              </div>
            </div>

            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-slate-500 mb-1">--theme-bg</div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: themeConfig.bgHex }} />
                <span className="font-bold text-white">{themeConfig.bgHex}</span>
              </div>
            </div>

            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-slate-500 mb-1">--theme-font</div>
              <div className="font-bold text-slate-200 truncate">
                {themeConfig.id === 'neon' ? 'Chakra Petch' : themeConfig.id === 'graffiti' ? 'Space Grotesk' : 'Inter'}
              </div>
            </div>

            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-slate-500 mb-1">--theme-mode</div>
              <div className="font-bold text-emerald-400">High-Contrast Dark</div>
            </div>

            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              <div className="text-[10px] text-slate-500 mb-1">--state-reactivity</div>
              <div className="font-bold text-amber-300">Synchronized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
