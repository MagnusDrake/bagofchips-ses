import React from 'react';
import { useStudio } from '../context/StudioContext';
import { THEMES } from '../data/themesData';
import type { ThemeId } from '../types';
import { Check } from 'lucide-react';

export const DesignTokensPlayground: React.FC = () => {
  const { theme, themeConfig, setTheme } = useStudio();

  return (
    <section id="design-tokens" className="py-28 sm:py-36 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
              Aesthetic Adaptability
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white theme-font-title">
              One architecture.{' '}
              <span className="font-semibold" style={{ color: themeConfig.primaryColor }}>
                Distinct identities.
              </span>
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Active: <span className="text-white font-medium">{themeConfig.name}</span>
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
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer group ${
                  isSelected
                    ? 'bg-white/[0.08] border-white/30 shadow-xl'
                    : 'bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]'
                }`}
                style={{
                  borderColor: isSelected ? t.primaryColor : undefined,
                }}
              >
                {/* Thumbnail Preview */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-white/[0.08]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.primaryColor }} />
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.accentColor }} />
                  </div>
                  {isSelected && (
                    <div
                      className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: t.primaryColor }}
                    >
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">{t.name}</h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">{t.id}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light line-clamp-1">{t.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
