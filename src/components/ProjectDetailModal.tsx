import React from 'react';
import { useStudio } from '../context/StudioContext';
import type { PortfolioItem } from '../types';
import { X, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const ProjectDetailModal: React.FC<{ item: PortfolioItem; onClose: () => void }> = ({ item, onClose }) => {
  const { themeConfig, openConfiguratorWithCategory } = useStudio();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: '#0f1422',
          borderColor: themeConfig.primaryColor,
        }}
      >
        {/* Modal Header Bar with Close Button */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md"
              style={{
                backgroundColor: `${themeConfig.primaryColor}22`,
                color: themeConfig.primaryColor,
              }}
            >
              {item.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Client: {item.clientType}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Title & Overview */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">{item.title}</h2>
            <p className="text-base text-slate-300">{item.tagline}</p>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            {item.metrics.map((m, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
                <div
                  className="text-xl sm:text-3xl font-black font-mono"
                  style={{ color: themeConfig.primaryColor }}
                >
                  {m.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Screenshot / Visual Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-video sm:aspect-[21/9]">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black/70 backdrop-blur-md border border-white/20 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Deep Dive: Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-5 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                The Real-Life Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.problem}</p>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-5 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                The bagOfchips Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.solution}</p>
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Technical Implementation Highlights
            </h4>
            <div className="space-y-2">
              {item.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: themeConfig.primaryColor }}
                  />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Technologies Utilized:
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.techList.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Want a similar software solution engineered for your company?
            </div>
            <button
              onClick={() => {
                onClose();
                openConfiguratorWithCategory(item.category);
              }}
              className="w-full sm:w-auto py-3 px-6 rounded-xl text-xs font-extrabold text-slate-950 flex items-center justify-center gap-2 shadow-xl hover:scale-102 transition-all"
              style={{ backgroundColor: themeConfig.primaryColor }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Configure a Solution Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
