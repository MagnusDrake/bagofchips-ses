import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { SERVICES_DATA } from '../data/servicesData';
import type { ServiceItem, ProjectCategory } from '../types';
import {
  Globe,
  Smartphone,
  Gamepad2,
  Cpu,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Tag,
  Target,
  FileCode2,
  Boxes
} from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Cpu,
  Sparkles,
  Gamepad2,
};

export const ServicesSection: React.FC = () => {
  const { themeConfig, openConfiguratorWithCategory } = useStudio();
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Boxes className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              High-Level Solution Packages
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Architected for scale. <span style={{ color: themeConfig.primaryColor }}>Delivered with velocity.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We partner with early-stage founders and scaling enterprises to build robust core platforms, cross-platform mobile apps, internal automations, and grounded AI systems.
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
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
                <span>{service.title.split('&')[0]}</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/10 text-slate-300 border border-white/10">
                  {service.startingPrice}+
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Service Card */}
        <div
          className="rounded-3xl border p-6 sm:p-10 backdrop-blur-2xl transition-all duration-300 shadow-2xl relative overflow-hidden glass-panel"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Info Area */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: `${themeConfig.primaryColor}22`,
                      color: themeConfig.primaryColor,
                    }}
                  >
                    {selectedService.category.toUpperCase()}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-300 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} /> {selectedService.typicalTimeline} Sprint Cadence
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Ideal For Callout */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <Target className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                <div className="text-xs text-slate-200">
                  <span className="font-bold text-white">Target Audience & Fit: </span>
                  {selectedService.idealFor}
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5" />
                  Architectural Specifications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.architecturalHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: themeConfig.primaryColor }}
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Verified Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card Callout & Pricing Box */}
            <div className="lg:col-span-5">
              <div className="bg-black/50 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4" style={{ color: themeConfig.primaryColor }} />
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Baseline Investment
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                    Starts at {selectedService.startingPrice}
                  </div>
                  <p className="text-xs text-slate-400">
                    Scoped via formal architectural discovery. Zero hidden scope creep or retainer lock-in.
                  </p>
                </div>

                {/* Standard Included Deliverables Box */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <div className="text-xs font-mono font-bold uppercase text-slate-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Standard Deliverables Included:
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    {selectedService.deliverablesIncluded.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => openConfiguratorWithCategory(selectedService.category as ProjectCategory)}
                    className="w-full py-3.5 px-6 rounded-2xl text-sm font-bold text-slate-950 flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                    style={{
                      backgroundColor: themeConfig.primaryColor,
                      boxShadow: `0 0 20px ${themeConfig.primaryColor}40`,
                    }}
                  >
                    <span>Configure & Scope Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] font-mono text-slate-500">
                    SLA: {selectedService.slaNotes}
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
