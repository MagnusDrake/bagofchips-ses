import React from 'react';
import { useStudio } from '../context/StudioContext';
import { Workflow, CheckCircle2, Terminal, Code2, ShieldCheck, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { themeConfig } = useStudio();

  const steps = [
    {
      step: '01',
      title: 'Scoop the Scope',
      badge: '24-HOUR BLUEPRINT',
      icon: Terminal,
      desc: 'We unpack your vision, identify technical edge cases, and deliver a razor-sharp specification doc with guaranteed milestones.',
      points: [
        'Zero ambiguous tech jargon',
        'Transparent fixed pricing',
        'Clear architectural roadmap'
      ]
    },
    {
      step: '02',
      title: 'The Crunch Cycle',
      badge: 'RAPID AGILE SPRINTS',
      icon: Code2,
      desc: 'Focused engineering execution. You receive private staging access and live interactive video demos every single week.',
      points: [
        'Weekly playable/testable builds',
        'Direct Slack/Discord channel access',
        'Real-time milestone progress board'
      ]
    },
    {
      step: '03',
      title: 'The Taste Test',
      badge: 'BATTLE-HARDENED QA',
      icon: ShieldCheck,
      desc: 'We stress-test performance, audit security vulnerabilities, and verify UX flow across every mobile device and browser.',
      points: [
        'Sub-second speed benchmarking',
        'Cross-browser & mobile device matrix',
        'Client revision & refinement rounds'
      ]
    },
    {
      step: '04',
      title: 'Hot Delivery & Handover',
      badge: 'PRODUCTION READY',
      icon: Rocket,
      desc: 'Smooth production launch. You receive 100% source code IP, automated CI/CD deployment pipelines, and documentation.',
      points: [
        '100% full intellectual property ownership',
        'One-click automated cloud deployments',
        '30-day post-launch warranty'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Workflow className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              The bagOfchips Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            From idea to deployed software in <span style={{ color: themeConfig.primaryColor }}>4 seamless steps.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We removed the bloated agency meetings and endless red tape. Just pure, focused software engineering velocity.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border bg-white/5 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
                style={{
                  borderColor: 'rgba(255,255,255,0.1)',
                }}
              >
                {/* Step Number Background Watermark */}
                <div className="absolute top-4 right-5 text-4xl font-mono font-black text-white/5 select-none group-hover:text-white/10 transition-colors">
                  {item.step}
                </div>

                <div className="space-y-4">
                  {/* Step Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${themeConfig.primaryColor}22`,
                      borderColor: themeConfig.primaryColor,
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
                    <h3 className="text-xl font-bold text-white mt-2 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Point Checkmarks */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  {item.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0"
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
