import React from 'react';
import { useStudio } from '../context/StudioContext';
import { THEMES } from '../data/themesData';
import type { ThemeId } from '../types';
import { ArrowUp, ShieldCheck, HeartHandshake, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const { theme, setTheme, themeConfig } = useStudio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/95 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Studio Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${themeConfig.primaryColor}22`,
                  borderColor: `${themeConfig.primaryColor}40`,
                }}
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                bag<span style={{ color: themeConfig.primaryColor }}>Of</span>chips{' '}
                <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded border border-white/20 ml-1">
                  STUDIO
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Modern Web & App Studio for Growing Businesses. We build custom websites, client booking portals, and smart workflow automations with transparent fixed pricing and 100% client code ownership.
            </p>

            <div className="text-xs font-medium text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Code & Domain Ownership • Zero Platform Lock-in</span>
            </div>
          </div>

          {/* Solution Packages */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Solutions & Packages
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Business Growth Websites ($1,200+)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Customer Portals & Booking ($2,800+)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Workflow Automation ($1,800+)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Mobile Apps ($4,500+)</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">Interactive Price Estimator</a></li>
            </ul>
          </div>

          {/* Studio & Process */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              How We Work
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Why Businesses Choose Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">The 4-Step Client Journey</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Client Case Studies & ROI</a></li>
              <li><a href="#client-hub" className="hover:text-white transition-colors">Client Hub Simulator</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Free Strategy Consultation</a></li>
            </ul>
          </div>

          {/* Theme Palette & Code Quality */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Studio Visual Style
            </h4>
            <div className="space-y-2.5">
              <div className="flex flex-wrap gap-1.5">
                {Object.values(THEMES).map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id as ThemeId)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-medium border flex items-center gap-1.5 transition-all cursor-pointer ${
                      theme === th.id
                        ? 'bg-white/15 text-white border-white/40'
                        : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: th.primaryColor }} />
                    <span>{th.name}</span>
                    {theme === th.id && <Check className="w-2.5 h-2.5 text-emerald-400" />}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://github.com/MagnusDrake/bagofchips-ses"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>View Code on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              © {new Date().getFullYear()} bagOfchips Software Engineering Studio (bagOfchips SES). 100% Client Code & Domain Ownership.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
