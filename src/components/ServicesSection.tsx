import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { SERVICES_DATA } from '../data/servicesData';
import type { ServiceItem, ProjectCategory } from '../types';
import {
  ArrowRight,
  Wifi,
  Battery,
  Play
} from 'lucide-react';
import { CardSpotlight } from './CardSpotlight';
import { audioHaptics } from '../utils/audioHaptics';

export const ServicesSection: React.FC = () => {
  const { openConfiguratorWithCategory, openMockup } = useStudio();
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  const isMobileApp = selectedService.category === 'mobile-app';

  return (
    <section id="services" className="py-24 sm:py-36 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Serene Section Header */}
        <div className="max-w-xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Disciplines
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Core studio <span className="font-semibold text-white">capabilities.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            We focus exclusively on digital products built with modern cloud foundations, bespoke aesthetics, and zero technical debt.
          </p>
        </div>

        {/* Minimalist Discipline Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/8 pb-3">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => {
                  audioHaptics.playClick();
                  setSelectedService(service);
                }}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-950 font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white bg-white/3 hover:bg-white/6 border border-white/5'
                }`}
              >
                {service.title}
              </button>
            );
          })}
        </div>

        {/* Spacious Showcase Card */}
        <CardSpotlight className="p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Quiet Essence & Inquiry */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                  {selectedService.category} · {selectedService.typicalTimeline}
                </span>
                <h3 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {selectedService.tagline}
              </p>

              <div className="pt-2">
                <div className="text-2xl font-light font-mono text-white tracking-tight">
                  {selectedService.priceRange}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-light">
                  Fixed transparent milestone investment · 100% IP ownership
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    audioHaptics.playSwitch();
                    openConfiguratorWithCategory(selectedService.category as ProjectCategory);
                  }}
                  className="px-6 py-3 rounded-full text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <span>Scope This Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    audioHaptics.playSwitch();
                    const mockupMap: Record<string, string> = {
                      'growth-website': 'sweetrise-bakery',
                      'customer-portal': 'apex-heating-air',
                      'workflow-automation': 'metrofleet-logistics',
                      'mobile-app': 'clearview-dental'
                    };
                    openMockup(mockupMap[selectedService.category] || 'sweetrise-bakery');
                  }}
                  className="px-5 py-3 rounded-full text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Play className="w-3 h-3 fill-white text-white" />
                  <span>Test Live Prototype</span>
                </button>
              </div>
            </div>

            {/* Right: Floating Visual Viewport Frame */}
            <div className="lg:col-span-7 flex items-center justify-center">
              {isMobileApp ? (
                /* Mobile Phone Viewport */
                <div className="w-full max-w-[280px] sm:max-w-[300px] transition-transform duration-700 hover:-translate-y-2">
                  <div className="rounded-[40px] border-[5px] border-slate-700/60 bg-slate-950 p-2.5 shadow-2xl shadow-black/90">
                    <div className="flex items-center justify-between px-4 pt-1 pb-2">
                      <span className="text-[10px] font-mono text-slate-400 font-bold">9:41</span>
                      <div className="w-16 h-3.5 bg-black rounded-full border border-white/10" />
                      <div className="flex items-center gap-1 text-slate-400">
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="rounded-[30px] overflow-hidden relative aspect-[9/16] bg-slate-900 border border-white/10">
                      <img
                        src={selectedService.previewImage}
                        alt={selectedService.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                      <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 text-xs text-white">
                        <div className="font-medium">Direct Mobile Experience</div>
                        <div className="text-[11px] text-slate-400 font-light mt-0.5">iOS & Android App Store ready</div>
                      </div>
                    </div>
                    <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              ) : (
                /* Desktop Browser Viewport */
                <div className="w-full transition-transform duration-700 hover:-translate-y-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/90 overflow-hidden">
                    <div className="px-4 py-2.5 bg-white/3 border-b border-white/6 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        https://{selectedService.previewUrl}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">Production</span>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={selectedService.previewImage}
                        alt={selectedService.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                          {selectedService.previewBadge}
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">
                          {selectedService.typicalTimeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};

