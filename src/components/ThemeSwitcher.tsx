import React from 'react';
import { useStudio } from '../context/StudioContext';
import { THEMES } from '../data/themesData';
import type { ThemeId } from '../types';
import { Sparkles, Palette, Zap, Cpu, Check } from 'lucide-react';

export const ThemeSwitcher: React.FC<{ variant?: 'floating' | 'navbar' | 'inline' }> = ({ variant = 'navbar' }) => {
  const { theme, setTheme } = useStudio();

  const themeIcons: Record<ThemeId, React.ReactNode> = {
    neon: <Sparkles className="w-4 h-4 text-cyan-400" />,
    graffiti: <Palette className="w-4 h-4 text-orange-500" />,
    matte: <Cpu className="w-4 h-4 text-sky-400" />,
    midnight: <Zap className="w-4 h-4 text-amber-400" />
  };

  const themeList = Object.values(THEMES);

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#111622]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex items-center gap-1.5 ring-1 ring-white/20">
          <span className="text-[11px] font-mono text-slate-400 px-2 uppercase tracking-wider font-semibold hidden md:inline">
            Flavor:
          </span>
          <div className="flex items-center gap-1">
            {themeList.map((item) => {
              const isSelected = theme === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setTheme(item.id)}
                  title={`${item.name} — ${item.flavor}`}
                  className={`relative group px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
                    isSelected
                      ? 'bg-white/15 text-white shadow-lg border border-white/25 scale-105'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.primaryColor }} />
                  <span className="hidden sm:inline">{item.name}</span>
                  {isSelected && <Check className="w-3 h-3 text-emerald-400 ml-0.5" />}

                  {/* Hover thumbnail preview */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block pointer-events-none z-50">
                    <div className="bg-slate-900 border border-white/20 p-2 rounded-xl shadow-2xl w-44 text-center">
                      <img src={item.image} alt={item.name} className="w-full h-28 object-cover rounded-lg mb-1.5 border border-white/10" />
                      <p className="text-[11px] font-bold text-white leading-tight">{item.name}</p>
                      <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{item.flavor}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Navbar variant
  return (
    <div className="flex items-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-inner">
      {themeList.map((item) => {
        const isSelected = theme === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setTheme(item.id)}
            className={`relative px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all duration-200 ${
              isSelected
                ? 'bg-white/15 text-white shadow-sm border border-white/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
            title={`Switch to ${item.name} style`}
          >
            {themeIcons[item.id]}
            <span className="hidden xl:inline text-[11px] font-semibold">{item.name.split(' ')[0]}</span>
          </button>
        );
      })}
    </div>
  );
};
