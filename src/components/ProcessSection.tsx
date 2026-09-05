import React from 'react';
import { useStudio } from '../context/StudioContext';
import { ArrowUpRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { themeConfig } = useStudio();

  const steps = [
    {
      num: '01',
      title: 'Discovery & Clarity',
      summary: 'We unpack your workflow, eliminate superfluous bloat, and establish an exact milestone scope with fixed pricing.',
      timeframe: 'Day 1–2',
    },
    {
      num: '02',
      title: 'Living Prototype',
      summary: 'You test-drive an interactive, clickable preview of the entire flow before a single line of backend code is assembled.',
      timeframe: 'Week 1',
    },
    {
      num: '03',
      title: 'Precision Build',
      summary: 'Clean, modern architecture built in focused sprints. Weekly staging links let you test real progress on your phone.',
      timeframe: 'Weeks 2–3',
    },
    {
      num: '04',
      title: 'Launch & Continuity',
      summary: 'Seamless live cutover, complete IP and repository handover, and 30 days of included warranty and guidance.',
      timeframe: 'Production',
    },
  ];

  return (
    <section id="process" className="py-28 sm:py-36 relative border-t border-white/[0.04]">
      {/* Subtle ambient light */}
      <div
        className="absolute top-1/3 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: themeConfig.primaryColor }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
              Engagement Model
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white theme-font-title">
              Four deliberate <span className="font-semibold" style={{ color: themeConfig.primaryColor }}>steps.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            No bureaucratic committees or disappearing contractors. Just focused momentum, clear visibility, and deep respect for your time.
          </p>
        </div>

        {/* 4 Serene Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-7 rounded-3xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.035] transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-2xl font-light font-mono"
                    style={{ color: themeConfig.primaryColor }}
                  >
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-white/[0.08] text-slate-400">
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-slate-100 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {step.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Phase {step.num}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
