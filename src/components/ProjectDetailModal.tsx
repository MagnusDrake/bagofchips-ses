import React, { useEffect } from 'react';
import type { PortfolioItem } from '../types';
import { useStudio } from '../context/StudioContext';
import { X, ArrowRight, Quote } from 'lucide-react';

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
        className="relative w-full max-w-4xl rounded-3xl border bg-[#0b1120] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
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
            <span className="text-xs font-semibold text-slate-300">
              {item.clientType}
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
        <div className="p-6 sm:p-8 space-y-7 overflow-y-auto">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
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
                  style={{ color: idx === 0 ? themeConfig.accentColor : '#ffffff' }}
                >
                  {metric.value}
                </div>
                <div className="text-xs text-slate-300 mt-1 font-semibold">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Client Testimonial Quote */}
          {item.clientQuote && (
            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/25 relative flex items-start gap-3">
              <Quote className="w-6 h-6 text-blue-400 shrink-0 mt-0.5 opacity-80" />
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{item.clientQuote.quote}"
                </p>
                <div className="text-xs font-semibold text-white">
                  {item.clientQuote.author} <span className="text-slate-400 font-normal">• {item.clientQuote.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* Three Project Pillars: Challenge, Solution, Impact */}
          <div className="grid grid-cols-1 gap-4">
            {/* Business Challenge */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                <span>01. The Problem & Business Bottleneck</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {item.businessChallenge}
              </p>
            </div>

            {/* Solution Delivered */}
            <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <span>02. The Solution & Custom Features Built</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {item.solutionDelivered}
              </p>
            </div>

            {/* Business Impact */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <span>03. Measurable Revenue & Time-Saved Results</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {item.businessImpact}
              </p>
            </div>
          </div>

          {/* Verified Tech List */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Integrations & Tools Deployed:
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
          <div className="text-xs text-slate-300 font-medium">
            Ready to get similar results for your business?
          </div>
          <button
            onClick={() => {
              onClose();
              openConfiguratorWithCategory(item.category);
            }}
            className="w-full sm:w-auto py-2.5 px-5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
            style={{ backgroundColor: themeConfig.primaryColor }}
          >
            <span>Estimate a Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
