import React from 'react';
import { useStudio } from '../context/StudioContext';
import { Cpu, ArrowUp } from 'lucide-react';
import { THEMES } from '../data/themesData';
import type { ThemeId } from '../types';

export const Footer: React.FC = () => {
  const { themeConfig, setTheme } = useStudio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/90 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Studio Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${themeConfig.primaryColor}22`,
                  borderColor: themeConfig.primaryColor,
                }}
              >
                <Cpu className="w-5 h-5" style={{ color: themeConfig.primaryColor }} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                bag<span style={{ color: themeConfig.primaryColor }}>Of</span>chips{' '}
                <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded border border-white/20 ml-1">
                  SES
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Software Engineering Studio. We turn complex business ideas, interactive games, mobile apps, and automation workflows into crisp, high-performing reality.
            </p>

            <div className="text-xs font-mono text-slate-500">
              ⚡ Zero bureaucracy • 100% Code IP Ownership
            </div>
          </div>

          {/* Quick Links: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Web Apps & SaaS</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">iOS & Android Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3D Games & WebGL</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI & RAG Systems</a></li>
            </ul>
          </div>

          {/* Quick Links: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Studio Portal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#configurator" className="hover:text-white transition-colors">Chip Solution Builder</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio & Case Studies</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">The Crunch Cycle</a></li>
              <li><a href="#client-hub" className="hover:text-white transition-colors">Live Client Tracker</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Direct Consultation</a></li>
            </ul>
          </div>

          {/* Switch Flavor */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Studio Flavors
            </h4>
            <div className="flex flex-col gap-1.5">
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id as ThemeId)}
                  className="text-left text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.primaryColor }} />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} bagOfchips Software Engineering Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
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
