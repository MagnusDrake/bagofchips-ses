import React from 'react';
import { useStudio } from '../../context/StudioContext';
import { audioHaptics } from '../../utils/audioHaptics';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import type { ProjectCategory } from '../../types';

interface MockupBuiltByBannerProps {
  projectCategory?: ProjectCategory;
  clientName: string;
}

export const MockupBuiltByBanner: React.FC<MockupBuiltByBannerProps> = ({
  projectCategory,
  clientName
}) => {
  const { themeConfig, closeMockup, openConfiguratorWithCategory } = useStudio();

  const handleInquire = () => {
    audioHaptics.playSwitch();
    closeMockup();
    if (projectCategory) {
      openConfiguratorWithCategory(projectCategory);
    } else {
      const element = document.getElementById('configurator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/95 backdrop-blur-xl px-4 sm:px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Built By Us Signature */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-xl overflow-hidden border border-white/15 bg-slate-900 shrink-0 shadow-sm flex items-center justify-center">
            <img
              src="/bagofchips-icon.png"
              alt="bagOfchips SES"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5">
              <span>Bespoke system for {clientName}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">
                Built by bag<span style={{ color: themeConfig.primaryColor }}>Of</span>chips{' '}
                <span
                  className="font-mono text-[10px] font-semibold px-1 py-0.2 rounded border border-white/10 bg-white/5"
                  style={{ color: themeConfig.primaryColor }}
                >
                  SES
                </span>
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-light flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>100% Client Code & IP Sovereignty · Zero Recurring Agency Lock-in</span>
            </div>
          </div>
        </div>

        {/* Right: Call to Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleInquire}
            className="px-4 py-2 rounded-full text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-white/10 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Scope a System Like This</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
