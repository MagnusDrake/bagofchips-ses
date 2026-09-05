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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-xl bg-black/80 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-3xl border border-white/[0.08] bg-[#090d16] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-white/[0.06] flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-white/[0.08] text-slate-300"
            >
              {item.categoryLabel}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 font-light">
              {item.clientType}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-7 overflow-y-auto">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              {item.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              {item.tagline}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {item.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
              >
                <div
                  className="text-xl sm:text-2xl font-light font-mono"
                  style={{ color: idx === 0 ? themeConfig.primaryColor : '#ffffff' }}
                >
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-light">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Client Testimonial Quote */}
          {item.clientQuote && (
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] relative flex items-start gap-3">
              <Quote className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed font-light">
                  "{item.clientQuote.quote}"
                </p>
                <div className="text-xs font-medium text-white">
                  {item.clientQuote.author} <span className="text-slate-500 font-light">• {item.clientQuote.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* Three Project Pillars: Challenge, Solution, Impact */}
          <div className="space-y-3">
            {/* Business Challenge */}
            <div className="p-5 rounded-2xl bg-white/[0.015] border border-white/[0.05] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                01 / The Challenge
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {item.businessChallenge}
              </p>
            </div>

            {/* Solution Delivered */}
            <div className="p-5 rounded-2xl bg-white/[0.015] border border-white/[0.05] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                02 / Architecture & Implementation
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {item.solutionDelivered}
              </p>
            </div>

            {/* Business Impact */}
            <div className="p-5 rounded-2xl bg-white/[0.015] border border-white/[0.05] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                03 / Measurable Outcome
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {item.businessImpact}
              </p>
            </div>
          </div>

          {/* Verified Tech List */}
          <div className="space-y-2 pt-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
              Integrations Deployed
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.techList.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="px-6 py-4 border-t border-white/[0.06] bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-light">
            Need a similar system for your business?
          </div>
          <button
            onClick={() => {
              onClose();
              openConfiguratorWithCategory(item.category);
            }}
            className="w-full sm:w-auto py-2 px-4 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer hover:brightness-110"
            style={{ backgroundColor: themeConfig.primaryColor }}
          >
            <span>Configure Similar Scope</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
