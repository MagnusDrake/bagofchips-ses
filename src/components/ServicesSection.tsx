import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { SERVICES_DATA } from '../data/servicesData';
import type { ServiceItem, ProjectCategory } from '../types';
import {
  Globe,
  Smartphone,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Layers,
  Lock,
  Wifi,
  Battery
} from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Cpu,
  Sparkles,
};

export const ServicesSection: React.FC = () => {
  const { themeConfig, openConfiguratorWithCategory } = useStudio();
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  const isMobileApp = selectedService.category === 'mobile-app';

  return (
    <section id="services" className="py-20 sm:py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Transparent Solution Packages
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Everything your business needs.{' '}
            <span style={{ color: themeConfig.primaryColor }}>Zero hidden fees.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We don't sell bloated agency retainers. Choose a scoped package engineered for measurable business outcomes, rapid delivery, and direct senior engineer support.
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 pb-2 border-b border-white/10">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedService.id === service.id;
            const Icon = SERVICE_ICONS[service.iconName] || Globe;

            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-white/15 text-white border-white/30 shadow-lg scale-102'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-slate-200 hover:bg-white/10'
                }`}
                style={{
                  borderColor: isSelected ? themeConfig.primaryColor : undefined,
                }}
              >
                <Icon
                  className="w-4 h-4"
                  style={{ color: isSelected ? themeConfig.primaryColor : undefined }}
                />
                <span>{service.title}</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/10 text-slate-300 border border-white/10">
                  {service.priceRange}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scan-First Package Card */}
        <div
          className="rounded-3xl border p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 shadow-2xl relative overflow-hidden glass-panel"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Scan-First Value Overview */}
            <div className="lg:col-span-6 space-y-6">
              {/* Top Price Range & Timeline Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                  {selectedService.priceRange}
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedService.typicalTimeline}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase bg-white/10 text-slate-300 border border-white/10">
                    Fixed-Scope
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  {selectedService.tagline}
                </p>
                <div className="text-xs text-slate-400 pt-1">
                  <span className="font-semibold text-slate-200">Ideal For: </span>
                  {selectedService.idealFor}
                </div>
              </div>

              {/* 3 Bulleted Business Outcomes with Checkmarks */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Measurable Business Outcomes:
                </h4>
                <div className="space-y-2">
                  {selectedService.keyOutcomes.slice(0, 3).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard Inclusions Summary ($0 Extra) */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-semibold uppercase text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Standard Inclusions ($0 Extra)
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">Included</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                  {selectedService.deliverablesIncluded.slice(0, 4).map((deliverable, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold text-xs">✓</span>
                      <span className="truncate">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & SLA */}
              <div className="space-y-2.5 pt-1">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => openConfiguratorWithCategory(selectedService.category as ProjectCategory)}
                    className="py-3 px-6 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                    style={{
                      backgroundColor: themeConfig.primaryColor,
                      boxShadow: `0 0 20px ${themeConfig.primaryColor}40`,
                    }}
                  >
                    <span>Configure {selectedService.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {selectedService.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400">
                  ⚡ {selectedService.slaNotes}
                </div>
              </div>
            </div>

            {/* Right Column: Floating Device Frame */}
            <div className="lg:col-span-6 flex items-center justify-center">
              {isMobileApp ? (
                /* Mobile Phone Frame */
                <div className="w-full max-w-[300px] group transition-transform duration-500 hover:-translate-y-2">
                  <div className="rounded-[40px] border-[5px] border-slate-700/80 bg-slate-950 p-2.5 shadow-2xl shadow-black/80 relative">
                    {/* Top Island / Speaker Notch */}
                    <div className="flex items-center justify-between px-4 pt-1 pb-2">
                      <span className="text-[10px] font-mono text-slate-400 font-bold">9:41</span>
                      <div className="w-16 h-3.5 bg-black rounded-full border border-white/10" />
                      <div className="flex items-center gap-1 text-slate-400">
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Phone Screen Mockup */}
                    <div className="rounded-[30px] overflow-hidden relative aspect-[9/16] bg-slate-900 border border-white/10 group">
                      <img
                        src={selectedService.previewImage}
                        alt={`${selectedService.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

                      {/* Screen Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                          ● Active Build
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-white/20 backdrop-blur-md text-white">
                          iOS / Android
                        </span>
                      </div>

                      {/* Bottom In-App Card */}
                      <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">Direct Client App</span>
                          <span className="text-[10px] font-mono text-emerald-400">v1.0 Ready</span>
                        </div>
                        <p className="text-[11px] text-slate-300 line-clamp-2">
                          Push notifications, biometric login, and 1-tap bookings right on your customer's home screen.
                        </p>
                      </div>
                    </div>

                    {/* Home Indicator Bar */}
                    <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              ) : (
                /* Desktop Browser Frame */
                <div className="w-full group transition-transform duration-500 hover:-translate-y-2">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/90 shadow-2xl shadow-black/80 overflow-hidden">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between gap-3">
                      {/* Window Controls */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>

                      {/* Address Bar */}
                      <div className="flex-1 max-w-sm mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-slate-300 text-xs font-mono">
                        <Lock className="w-3 h-3 text-emerald-400" />
                        <span className="truncate">https://{selectedService.previewUrl}</span>
                      </div>

                      {/* Live Status Pill */}
                      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Interactive Deliverable</span>
                      </div>
                    </div>

                    {/* Viewport Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={selectedService.previewImage}
                        alt={`${selectedService.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      {/* Preview Overlay Info */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-xl text-xs font-medium text-white bg-black/70 backdrop-blur-md border border-white/15">
                          {selectedService.previewBadge}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-emerald-400 bg-black/70 backdrop-blur-md border border-emerald-500/30">
                          {selectedService.typicalTimeline} Delivery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

