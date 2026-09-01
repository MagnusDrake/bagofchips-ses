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
  Layers,
  Code
} from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Gamepad2,
  Cpu,
  Sparkles,
};

export const ServicesSection: React.FC = () => {
  const { themeConfig, openConfiguratorWithCategory } = useStudio();
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              Studio Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Engineering solutions for <span style={{ color: themeConfig.primaryColor }}>every platform.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you need a web app, a mobile companion, a 3D game, or an AI workflow — we bag complexity and ship rock-solid software.
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedService.id === service.id;
            const Icon = SERVICE_ICONS[service.iconName] || Globe;

            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white/15 text-white border-white/30 shadow-lg scale-102'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-slate-200 hover:bg-white/10'
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
              </button>
            );
          })}
        </div>

        {/* Highlighted Service Card */}
        <div
          className="rounded-3xl border p-6 sm:p-10 backdrop-blur-2xl transition-all duration-500 shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: `${themeConfig.bgHex}E6`,
            borderColor: themeConfig.primaryColor,
            boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 35px ${themeConfig.primaryColor}20`,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Area */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md"
                    style={{
                      backgroundColor: `${themeConfig.primaryColor}22`,
                      color: themeConfig.primaryColor,
                    }}
                  >
                    {selectedService.category.toUpperCase()} SOLUTIONS
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {selectedService.typicalTimeline} typical
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Feature Highlights Grid */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Included Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: themeConfig.primaryColor }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" /> Battle-Tested Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
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
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 text-center lg:text-left">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Starting Investment
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                    {selectedService.startingPrice}
                  </div>
                  <p className="text-xs text-slate-400">
                    Transparent milestone-based delivery with zero hidden retainers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs italic text-slate-300">
                  "{selectedService.flavorQuote}"
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => openConfiguratorWithCategory(selectedService.category as ProjectCategory)}
                    className="w-full py-3.5 px-6 rounded-2xl text-sm font-extrabold text-slate-950 flex items-center justify-center gap-2 shadow-xl hover:scale-102 active:scale-98 transition-all"
                    style={{
                      backgroundColor: themeConfig.primaryColor,
                      boxShadow: `0 0 25px ${themeConfig.primaryColor}44`,
                    }}
                  >
                    <span>Configure {selectedService.category.toUpperCase()} Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#portfolio"
                    className="block text-center text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    View sample case studies for this category →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
