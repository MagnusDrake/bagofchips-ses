import React from 'react';
import { useStudio } from '../context/StudioContext';
import { Workflow, CheckCircle2, Terminal, Code2, Rocket, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { themeConfig } = useStudio();

  const steps = [
    {
      step: '01',
      title: 'Architectural RFC & Discovery',
      badge: 'SYSTEM DESIGN',
      icon: Terminal,
      desc: 'We define the technical blueprint before writing code: database entity models, API contract specifications, security threat modeling, and milestone timelines.',
      points: [
        'Detailed Architecture RFC & schema specs',
        'Transparent fixed sprint investment scope',
        'Zero vendor lock-in or proprietary dependencies'
      ]
    },
    {
      step: '02',
      title: 'High-Velocity Sprints',
      badge: 'RAPID CADENCE',
      icon: Code2,
      desc: 'Senior engineers build your system in bi-weekly sprint cycles. Continuous staging deploys on AWS/GCP and direct Slack/Discord channels ensure total visibility.',
      points: [
        'Interactive preview staging builds every week',
        'Direct asynchronous communication with senior engineers',
        'Continuous integration with automated test validation'
      ]
    },
    {
      step: '03',
      title: 'QA, Hardening & Benchmarking',
      badge: 'PERFORMANCE SLAs',
      icon: ShieldCheck,
      desc: 'We stress-test concurrency, audit database query plans, and run automated Playwright and Vitest regression suites against strict sub-100ms latency budgets.',
      points: [
        'Automated end-to-end regression testing suite',
        'OWASP security audit & penetration resistance',
        'Sub-100ms p95 latency verification'
      ]
    },
    {
      step: '04',
      title: 'Production Handover & Full IP',
      badge: '100% YOURS',
      icon: Rocket,
      desc: 'Smooth DNS cutover and zero-downtime production deployment. We transfer 100% intellectual property, full Git repository rights, and include 30 days of hypercare.',
      points: [
        'Complete source code & Git repo ownership transfer',
        'Terraform / Docker cloud infrastructure as code',
        '30-day post-launch engineering SLA & hypercare'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Workflow className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              The Engineering Cadence
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            From technical RFC to <span style={{ color: themeConfig.primaryColor }}>production scale.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We removed bureaucratic agency layers and endless meetings. Just focused engineering velocity, rigorous code quality, and transparent deliverables.
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
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: themeConfig.accentColor }}
                      />
                      <span className="leading-tight">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
