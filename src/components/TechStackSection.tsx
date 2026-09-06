import React from 'react';
import { CardSpotlight } from './CardSpotlight';
import { ShieldCheck, Zap, HeartHandshake, ArrowUpRight } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      icon: ShieldCheck,
      title: 'Full Sovereignty',
      summary: '100% code, asset, and domain ownership from day one. You are never trapped in proprietary website builders or recurring platform subscriptions.',
      detail: 'Zero platform lock-in · Direct cloud accounts at true cost',
      tag: 'IP Transfer',
    },
    {
      number: '02',
      icon: Zap,
      title: 'Quiet Speed & Craft',
      summary: 'Hand-crafted architectures that load in milliseconds and never break. Built on modern TypeScript, React, and lightweight relational databases.',
      detail: 'Sub-second performance · Bulletproof reliability',
      tag: '60 FPS UI',
    },
    {
      number: '03',
      icon: HeartHandshake,
      title: 'Direct Partnership',
      summary: 'Direct communication with your lead senior engineer. No agency account managers, no junior handoffs, and no disappearing freelancers.',
      detail: 'Clear weekly demos · 30 days post-launch warranty',
      tag: 'Direct Access',
    },
  ];

  return (
    <section id="tech-stack" className="py-24 sm:py-36 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Serene Section Header */}
        <div className="max-w-xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            The principles of our <span className="font-semibold text-white">craft.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Software shouldn't be a recurring headache or a monthly platform trap. We engineer with clarity, sovereignty, and uncompromising reliability.
          </p>
        </div>

        {/* 3 Spacious Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <CardSpotlight
                key={idx}
                className="p-8 sm:p-10 flex flex-col justify-between group shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">
                      [{pillar.number}]
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                        {pillar.tag}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight group-hover:text-slate-100 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-white/6 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{pillar.detail}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
};
