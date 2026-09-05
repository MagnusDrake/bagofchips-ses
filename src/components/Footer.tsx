import React from 'react';
import { useStudio } from '../context/StudioContext';
import { Cpu, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { themeConfig } = useStudio();

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
              Software Engineering Studio. We design, architecture, and ship production-grade full-stack web platforms, cross-platform mobile apps, internal automations, and grounded AI systems.
            </p>

            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full IP Handover • Zero Lock-in • Senior Engineering</span>
            </div>
          </div>

          {/* Solution Packages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Solution Packages
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Full-Stack Web Platforms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cross-Platform Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Internal Tooling & ETL</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom AI & Production RAG</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3D Simulation Engines</a></li>
            </ul>
          </div>

          {/* Architecture & Discovery */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Engineering & Stack
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Production Tech Stack</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Enterprise AI Architecture</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Technical Case Studies</a></li>
              <li><a href="#client-hub" className="hover:text-white transition-colors">Sprint Simulator Demo</a></li>
              <li><a href="#design-tokens" className="hover:text-white transition-colors">Design Token Engine</a></li>
            </ul>
          </div>

          {/* Open Source & Repository */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Open Repository
            </h4>
            <div className="space-y-3">
              <p className="text-xs text-slate-400 leading-relaxed">
                Inspect our code quality, design tokens, and modular architecture on GitHub.
              </p>
              <a
                href="https://github.com/MagnusDrake/bagofchips-ses"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>MagnusDrake / bagofchips-ses</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} bagOfchips Software Engineering Studio (bagOfchips SES). All rights reserved.
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
