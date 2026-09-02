import React from 'react';
import { useStudio } from '../context/StudioContext';
import { Sparkles, ArrowRight, Rocket, Layers, CheckCircle2, Tag, HeartHandshake } from 'lucide-react';
import { THEMES } from '../data/themesData';

export const Hero: React.FC = () => {
  const { theme, themeConfig, setTheme } = useStudio();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-circuit-pattern">
      {/* Dynamic Ambient Background Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${themeConfig.primaryColor}, ${themeConfig.accentColor})`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Friendly Studio Pitch */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-white/5 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeConfig.primaryColor }} />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                {themeConfig.badge}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-medium text-amber-300 flex items-center gap-1">
                <Tag className="w-3 h-3" /> Starter Websites from $490
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] theme-font-title">
                Software solutions,{' '}
                <span
                  className="bg-clip-text text-transparent transition-all duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${themeConfig.primaryColor}, ${themeConfig.accentColor}, #ffffff)`,
                  }}
                >
                  bagged & delivered.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Need a <span className="text-white font-semibold">simple business website</span>, an{' '}
                <span className="text-white font-semibold">app for your customers</span>, a{' '}
                <span className="text-white font-semibold">playable web game</span>, or a{' '}
                <span className="text-white font-semibold">tool to automate everyday busywork</span>?
                We make getting software easy, painless, and affordable.
              </p>
            </div>

            {/* Value Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: themeConfig.primaryColor }} />
                <span>Starter Sites from $490</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: themeConfig.primaryColor }} />
                <span>Fast 3–5 Day Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: themeConfig.primaryColor }} />
                <span>100% You Own Everything</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: themeConfig.primaryColor }} />
                <span>Zero Confusing Jargon</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: themeConfig.primaryColor }} />
                <span>Mobile & Google Maps Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: themeConfig.primaryColor }} />
                <span>Friendly Human Support</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#configurator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-slate-950 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
                style={{
                  backgroundColor: themeConfig.primaryColor,
                  boxShadow: `0 0 30px ${themeConfig.primaryColor}55`,
                }}
              >
                <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-45" />
                <span>Build & Price Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200 backdrop-blur-md cursor-pointer"
              >
                <Layers className="w-4 h-4 opacity-70" />
                <span>See Real Examples</span>
              </a>
            </div>

            {/* Interactive Theme Flavor Switcher Pill */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                Choose Studio Flavor:
              </span>
              <div className="flex items-center gap-1.5 p-1 bg-black/50 border border-white/10 rounded-xl backdrop-blur-md">
                {Object.values(THEMES).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      theme === t.id
                        ? 'bg-white/20 text-white shadow-md border border-white/30 scale-105'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.primaryColor }} />
                    <span>{t.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-40 transition-all duration-700 animate-pulse-glow"
                style={{
                  background: `linear-gradient(135deg, ${themeConfig.primaryColor}, ${themeConfig.accentColor})`,
                }}
              />

              {/* Main Packaging Artwork Card */}
              <div
                className="relative rounded-3xl p-3 sm:p-4 border backdrop-blur-xl transition-all duration-500 shadow-2xl overflow-hidden group"
                style={{
                  backgroundColor: `${themeConfig.bgHex}EE`,
                  borderColor: themeConfig.primaryColor,
                  boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 30px ${themeConfig.primaryColor}33`,
                }}
              >
                {/* Visual Packaging Artwork */}
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10">
                  <img
                    src={themeConfig.image}
                    alt={`${themeConfig.name} - bagOfchips SES Packaging`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Flavor Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeConfig.primaryColor }} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                      {themeConfig.name}
                    </span>
                  </div>

                  {/* Tagline Footer Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-8">
                    <p className="text-xs font-mono text-slate-300">
                      {themeConfig.flavor}
                    </p>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {themeConfig.tagline}
                    </p>
                  </div>
                </div>

                {/* Friendly Benefits Under Graphic */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-1">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                    <Tag className="w-4 h-4 mx-auto mb-1 opacity-80" style={{ color: themeConfig.primaryColor }} />
                    <div className="text-xs font-extrabold text-white">Fair Pricing</div>
                    <div className="text-[9px] text-slate-400">Starts at $490</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                    <Rocket className="w-4 h-4 mx-auto mb-1 opacity-80" style={{ color: themeConfig.accentColor }} />
                    <div className="text-xs font-extrabold text-white">Fast Turnaround</div>
                    <div className="text-[9px] text-slate-400">Days, Not Months</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                    <HeartHandshake className="w-4 h-4 mx-auto mb-1 opacity-80" style={{ color: themeConfig.primaryColor }} />
                    <div className="text-xs font-extrabold text-white">100% Yours</div>
                    <div className="text-[9px] text-slate-400">Full Ownership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
