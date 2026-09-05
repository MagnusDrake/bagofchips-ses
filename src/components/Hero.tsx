import React from 'react';
import { useStudio } from '../context/StudioContext';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  CreditCard,
  Star,
  Smartphone,
  PhoneCall
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { themeConfig } = useStudio();

  return (
    <section className="relative pt-32 pb-20 md:pt-38 md:pb-28 overflow-hidden bg-circuit-pattern">
      {/* Subtle controlled radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] rounded-full blur-[130px] opacity-15 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${themeConfig.primaryColor}, ${themeConfig.accentColor})`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Outcome Positioning */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* High-Trust Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeConfig.accentColor }} />
              <span className="text-xs font-semibold tracking-wide text-slate-300">
                Accepting New Client Projects
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Code & Domain Ownership
              </span>
            </div>

            {/* Main Outcome Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] theme-font-title">
                Custom Websites & Apps Built to{' '}
                <span
                  className="bg-clip-text text-transparent transition-all duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${themeConfig.primaryColor}, #38bdf8, ${themeConfig.accentColor})`,
                  }}
                >
                  Grow Your Business.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Custom websites, client booking portals, and smart workflow automations engineered to drive revenue and eliminate manual busywork.
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#configurator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-white shadow-xl transition-all duration-200 hover:scale-102 active:scale-98 group cursor-pointer"
                style={{
                  backgroundColor: themeConfig.primaryColor,
                  boxShadow: `0 0 25px ${themeConfig.primaryColor}40`,
                }}
              >
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-45" />
                <span>Calculate Your Project Price</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs sm:text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-md cursor-pointer"
              >
                <span>See Real Client Results</span>
              </a>
            </div>

            {/* Minimalist Glassmorphic Guarantee Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-slate-200 transition-colors shadow-sm">
                <span className="text-emerald-400 font-bold leading-none">✓</span>
                <span>100% Code Ownership</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-slate-200 transition-colors shadow-sm">
                <span className="text-blue-400 font-bold leading-none">✓</span>
                <span>Direct Senior Engineer</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-slate-200 transition-colors shadow-sm">
                <span className="text-emerald-400 font-bold leading-none">✓</span>
                <span>30-Day Warranty</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-slate-200 transition-colors shadow-sm">
                <span className="text-blue-400 font-bold leading-none">✓</span>
                <span>2–4 Wk Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Trust Product & Dashboard UI Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              {/* Main Desktop Dashboard Mockup */}
              <div
                className="relative rounded-3xl p-5 border bg-slate-900/90 backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-hidden border-glow-hover"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400">
                      apex-heating-air.com/portal
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    LIVE SYSTEM
                  </span>
                </div>

                {/* Dashboard Header Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">Client Portal & Dispatch Console</h3>
                      <p className="text-[11px] text-slate-400">Apex Heating & Air Specialists</p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold font-mono text-white">4.9</span>
                      <span className="text-[10px] text-slate-400">(180+ Reviews)</span>
                    </div>
                  </div>

                  {/* 3 Metric Badges */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">+310%</div>
                      <div className="text-[10px] text-slate-400">Online Quotes</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xs sm:text-sm font-bold text-blue-400 font-mono">24 Hours</div>
                      <div className="text-[10px] text-slate-400">Avg Invoice Paid</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xs sm:text-sm font-bold text-amber-300 font-mono">-15 Hrs</div>
                      <div className="text-[10px] text-slate-400">Admin Time / Wk</div>
                    </div>
                  </div>

                  {/* Scheduled Bookings Today Preview */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        Today's Dispatches & Payments
                      </span>
                      <span className="text-emerald-400 text-[10px]">3 Complete</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                          <div>
                            <span className="font-bold text-white block">Commercial Heat Pump Service</span>
                            <span className="text-[10px] text-slate-400">Invoice #1094 • Paid via Apple Pay</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400">$1,450.00</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                          <div>
                            <span className="font-bold text-white block">Furnace Diagnostic & Filter Sync</span>
                            <span className="text-[10px] text-slate-400">Confirmed via 2-Way SMS Reminder</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300">
                          Auto-Reminded
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Automated Sync Status */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      QuickBooks & Stripe Live Sync
                    </span>
                    <span className="font-mono text-slate-400">0 Errors</span>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Phone Preview Overlay */}
              <div
                className="hidden sm:block absolute -bottom-6 -right-6 w-48 rounded-2xl p-3 border bg-slate-950/95 shadow-2xl backdrop-blur-xl border-white/15"
                style={{
                  boxShadow: `0 20px 40px -10px rgba(0,0,0,0.8), 0 0 20px ${themeConfig.primaryColor}20`,
                }}
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                    <Smartphone className="w-3 h-3 text-emerald-400" />
                    <span>Mobile Portal</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-bold">Fast 4G</span>
                </div>
                <div className="space-y-1.5 text-left">
                  <div className="text-[11px] font-bold text-white leading-tight">
                    Instant Quote & Appointment
                  </div>
                  <p className="text-[9px] text-slate-400 leading-snug">
                    Pick your service and book in 45 seconds.
                  </p>
                  <div className="w-full py-1.5 px-2 rounded-lg bg-blue-600 text-white text-[10px] font-bold text-center">
                    Book Service Call →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
