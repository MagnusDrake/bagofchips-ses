import React from 'react';
import { useStudio } from '../context/StudioContext';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  GitBranch,
  Terminal,
  Server,
  Database,
  BrainCircuit
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { themeConfig } = useStudio();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-circuit-pattern">
      {/* Refined Ambient Glows - Subtle and controlled, not blinding */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] rounded-full blur-[120px] opacity-15 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${themeConfig.primaryColor}, ${themeConfig.accentColor})`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Studio Positioning */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeConfig.accentColor }} />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                Accepting Q3 / Q4 Engineering Sprints
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% IP Handover
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] theme-font-title">
                Production-grade{' '}
                <span
                  className="bg-clip-text text-transparent transition-all duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${themeConfig.primaryColor}, ${themeConfig.accentColor}, #ffffff)`,
                  }}
                >
                  software systems.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                <span className="text-white font-semibold">bagOfchips SES</span> designs, architectures, and builds scalable web platforms, cross-platform mobile apps, internal automations, and custom AI systems. We operate as your dedicated engineering partner with zero legacy bloat and complete IP ownership.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 pt-1 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: themeConfig.primaryColor }} />
                <div>
                  <span className="font-bold text-white block">Full IP & Source Code Transfer</span>
                  <span className="text-slate-400 text-xs">Complete repository, IaC, and docs delivered day one.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: themeConfig.primaryColor }} />
                <div>
                  <span className="font-bold text-white block">Production Cloud Architecture</span>
                  <span className="text-slate-400 text-xs">Dockerized services, automated CI/CD, and strict type safety.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: themeConfig.primaryColor }} />
                <div>
                  <span className="font-bold text-white block">Rapid Sprint Velocity</span>
                  <span className="text-slate-400 text-xs">Bi-weekly deployable milestones and continuous staging access.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: themeConfig.primaryColor }} />
                <div>
                  <span className="font-bold text-white block">Sub-100ms Performance Budgets</span>
                  <span className="text-slate-400 text-xs">Automated Vitest/Playwright tests & low-latency query plans.</span>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#configurator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-slate-950 shadow-xl transition-all duration-200 hover:scale-102 active:scale-98 group cursor-pointer"
                style={{
                  backgroundColor: themeConfig.primaryColor,
                  boxShadow: `0 0 25px ${themeConfig.primaryColor}40`,
                }}
              >
                <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-45" />
                <span>Scope Your Engineering Sprint</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#tech-stack"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-md cursor-pointer"
              >
                <Terminal className="w-4 h-4 opacity-70" />
                <span>Explore Architecture & Stack</span>
              </a>
            </div>

            {/* Silicon Compute Philosophy Note */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3 justify-center lg:justify-start text-xs font-mono text-slate-400">
              <Cpu className="w-4 h-4 text-slate-500 shrink-0" />
              <span>
                <span className="text-slate-300 font-bold">The Philosophy: </span>
                Modular silicon compute—decoupled microservices, strict contracts & zero debt.
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Command Center Graphic */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Card Container */}
              <div
                className="relative rounded-3xl p-5 border bg-black/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-hidden border-glow-hover"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Silicon Art Header */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 mb-5">
                  <img
                    src={themeConfig.image}
                    alt="bagOfchips SES Silicon Architecture"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Top Status Bar */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeConfig.accentColor }} />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                        Production Node: v2.4.0
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-slate-400 bg-black/80 px-2 py-1 rounded-md border border-white/10">
                      0 Errors
                    </span>
                  </div>

                  {/* Architecture Metrics Overlay */}
                  <div className="absolute bottom-3 inset-x-3 grid grid-cols-3 gap-2">
                    <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10 text-center">
                      <div className="text-xs font-mono font-bold text-emerald-400">99.98%</div>
                      <div className="text-[9px] text-slate-400">Uptime Target</div>
                    </div>

                    <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10 text-center">
                      <div className="text-xs font-mono font-bold text-amber-300">&lt;65ms</div>
                      <div className="text-[9px] text-slate-400">p95 Latency</div>
                    </div>

                    <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10 text-center">
                      <div className="text-xs font-mono font-bold text-cyan-400">100%</div>
                      <div className="text-[9px] text-slate-400">IP Handover</div>
                    </div>
                  </div>
                </div>

                {/* Technical Capability Badges */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Engineering Core</span>
                    <span className="text-emerald-400">Active Pipeline</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                      <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-200">Next.js + TypeScript</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-200">PostgreSQL + Prisma</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-200">Docker + AWS Deploy</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                      <BrainCircuit className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-200">pgvector + Hybrid RAG</span>
                    </div>
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
