import React from 'react';
import { useStudio } from '../context/StudioContext';
import { PhoneCall, Eye, Code2, Rocket, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { themeConfig } = useStudio();

  const steps = [
    {
      step: '01',
      title: 'Discovery Call',
      badge: '30-MIN STRATEGY',
      icon: PhoneCall,
      desc: 'We discuss your business goals, identify quick conversion wins, and give you an exact, transparent fixed-price quote in plain English—no technical jargon.',
      points: [
        'Clear, fixed-price project scope',
        'Zero pressure or sales gimmicks',
        'Transparent timeline & milestone roadmap'
      ]
    },
    {
      step: '02',
      title: 'Interactive Prototype',
      badge: 'CLICKABLE PREVIEW',
      icon: Eye,
      desc: 'Before writing a single line of code, we create a clickable prototype of your website or app so you can test-drive the look, feel, and customer journey.',
      points: [
        'See your brand come to life before coding',
        'Review mobile booking & quote flows',
        'Zero guesswork or unexpected surprises'
      ]
    },
    {
      step: '03',
      title: 'Build & Review',
      badge: 'WEEKLY DEMOS',
      icon: Code2,
      desc: 'Our senior developers build your solution with clean, high-speed code. You receive private staging links to test real progress each week with direct access to your builder.',
      points: [
        'Live test link to watch weekly progress',
        'Direct WhatsApp or Slack channel with your engineer',
        'Thorough cross-device mobile testing'
      ]
    },
    {
      step: '04',
      title: 'Launch & 30 Days Support',
      badge: '100% OWNERSHIP',
      icon: Rocket,
      desc: 'We handle domain routing and live launch without any downtime. You receive full code & domain ownership, staff walkthrough videos, and 30 days of free post-launch support.',
      points: [
        '100% code, design & domain ownership',
        'Personal staff training & video guides',
        '30 days of complimentary bug-free warranty'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <HeartHandshake className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              The 4-Step Client Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Simple, transparent, and <span style={{ color: themeConfig.primaryColor }}>stress-free.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We removed the headaches of traditional agency bureaucracy. No endless meetings, no surprise invoices, and no disappearing freelancers. Just focused momentum and clear milestones.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border bg-white/5 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 border-glow-hover"
                style={{
                  borderColor: 'rgba(255,255,255,0.08)',
                }}
              >
                {/* Step Number Watermark */}
                <div className="absolute top-4 right-5 text-4xl font-mono font-black text-white/5 select-none group-hover:text-white/10 transition-colors">
                  {item.step}
                </div>

                <div className="space-y-4">
                  {/* Step Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${themeConfig.primaryColor}15`,
                      borderColor: `${themeConfig.primaryColor}35`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: themeConfig.primaryColor }} />
                  </div>

                  <div>
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${themeConfig.primaryColor}15`,
                        color: themeConfig.primaryColor,
                      }}
                    >
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Point Checkmarks */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  {item.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400"
                      />
                      <span className="leading-tight">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ownership Callout Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                100% Code, Asset & Domain Ownership Guarantee
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Unlike closed website builders, you own 100% of your website code, database records, and custom domains with zero recurring platform lock-in fees.
              </p>
            </div>
          </div>

          <a
            href="#configurator"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md transition-all cursor-pointer"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};
