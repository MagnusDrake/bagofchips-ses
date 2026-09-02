import React from 'react';
import { useStudio } from '../context/StudioContext';
import { Workflow, CheckCircle2, MessageSquare, Laptop, ThumbsUp, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { themeConfig } = useStudio();

  const steps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      badge: 'QUICK & SIMPLE',
      icon: MessageSquare,
      desc: 'Fill out our quick 2-minute builder or send us a message. We’ll give you a clear, fixed price quote within 24 hours with zero technical jargon.',
      points: [
        'Plain English, zero confusing tech talk',
        'Guaranteed fixed price (no hidden bills)',
        'Clear delivery date before we start'
      ]
    },
    {
      step: '02',
      title: 'We Build It & Check In',
      badge: 'WEEKLY DEMOS',
      icon: Laptop,
      desc: 'We start building immediately. You get private access and video check-ins every week so you always see exactly how your project is coming along.',
      points: [
        'Clickable preview links you can test on your phone',
        'Direct text / email / WhatsApp communication',
        'Live progress bar tracking every milestone'
      ]
    },
    {
      step: '03',
      title: 'You Test & We Polish',
      badge: 'MADE JUST FOR YOU',
      icon: ThumbsUp,
      desc: 'You test the website or app, tell us what you like, and we tweak colors, words, and features until you are 100% happy with how it looks and works.',
      points: [
        'Stress-tested on iPhones, Androids, and laptops',
        'Fast loading with zero annoying lag',
        'Included revision rounds to get it perfect'
      ]
    },
    {
      step: '04',
      title: 'We Launch It For You',
      badge: '100% YOURS',
      icon: Rocket,
      desc: 'We connect your custom domain (.com), launch your website or submit your app to the App Stores, hand you the full keys, and give you 30 days of support.',
      points: [
        'You own 100% of everything (no hostage fees)',
        'We connect your .com and professional email',
        '30-day post-launch warranty & free support'
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
              How It Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            From idea to launched in <span style={{ color: themeConfig.primaryColor }}>4 simple steps.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No endless boring meetings. No surprise invoices. Just straightforward, reliable software built right.
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
