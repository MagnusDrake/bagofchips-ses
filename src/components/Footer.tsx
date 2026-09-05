import React from 'react';
import { useStudio } from '../context/StudioContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { themeConfig } = useStudio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-12 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Studio Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg overflow-hidden border border-white/10 bg-slate-900 shrink-0">
                <img
                  src="/bagofchips-icon.png"
                  alt="bagOfchips SES"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight text-white">
                bagOfchips <span className="font-mono text-xs font-semibold" style={{ color: themeConfig.primaryColor }}>SES</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
              Software engineering studio for business growth websites, custom customer portals, and workflow automations. Built with quiet craft and full intellectual property transfer.
            </p>

            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Remote-First · Everywhere Worldwide</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                Index
              </span>
              <ul className="space-y-2 text-slate-400 font-light">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Work</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Disciplines</a></li>
                <li><a href="#tech-stack" className="hover:text-white transition-colors">Philosophy</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Engagement Model</a></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                Inquire
              </span>
              <ul className="space-y-2 text-slate-400 font-light">
                <li><a href="#configurator" className="hover:text-white transition-colors">Scope Estimator</a></li>
                <li><a href="#client-hub" className="hover:text-white transition-colors">Client Sanctuary</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Start a Conversation</a></li>
              </ul>
            </div>
          </div>

          {/* GitHub & Source */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
              Repository
            </span>
            <a
              href="https://github.com/MagnusDrake/bagofchips-ses"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs text-slate-300 transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub / bagofchips-ses</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <div>
            © {new Date().getFullYear()} bagOfchips SES. 100% Client Sovereignty & Code Ownership.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
