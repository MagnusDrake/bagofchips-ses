import React, { useEffect } from 'react';
import type { PortfolioItem } from '../types';
import { useStudio } from '../context/StudioContext';
import { X, ArrowRight, GitBranch } from 'lucide-react';

interface ProjectDetailModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ item, onClose }) => {
  const { themeConfig, openConfiguratorWithCategory } = useStudio();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/80 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-3xl border bg-[#0b0f19] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              style={{
                backgroundColor: `${themeConfig.primaryColor}22`,
                color: themeConfig.primaryColor,
              }}
            >
              {item.categoryLabel}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-400">
              Client: {item.clientType}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {item.tagline}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {item.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <div
                  className="text-2xl font-black font-mono"
                  style={{ color: idx === 0 ? themeConfig.primaryColor : '#ffffff' }}
                >
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Architecture Pipeline Flow (if provided) */}
          {item.architectureDiagram && (
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-amber-400" />
                <span>Architectural Event Flow Pipeline</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {item.architectureDiagram.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                      {node}
                    </span>
                    {nIdx < item.architectureDiagram!.length - 1 && (
                      <span className="text-slate-600 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Three Technical Pillars: Challenge, Architecture, Impact */}
          <div className="grid grid-cols-1 gap-4">
            {/* Technical Challenge */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                <span>01. The Technical Challenge & System Bottlenecks</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {item.technicalChallenge}
              </p>
            </div>

            {/* Architecture & Stack */}
            <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <span>02. Architecture, Infrastructure & Technology Stack</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {item.architectureAndStack}
              </p>
            </div>

            {/* Engineering Impact */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <span>03. Verifiable Engineering & Business Impact</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {item.engineeringImpact}
              </p>
            </div>
          </div>

          {/* Verified Tech List */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Deployed Technologies & Cloud Services:
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.techList.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Need similar architecture engineered for your company?
          </div>
          <button
            onClick={() => {
              onClose();
              openConfiguratorWithCategory(item.category);
            }}
            className="w-full sm:w-auto py-2.5 px-5 rounded-xl text-xs font-bold text-slate-950 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
            style={{ backgroundColor: themeConfig.primaryColor }}
          >
            <span>Scope a Similar Solution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
