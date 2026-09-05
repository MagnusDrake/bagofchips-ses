import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { CATEGORY_PRESETS, ARCHITECTURAL_MODULES, VELOCITY_TIERS } from '../data/configuratorData';
import type { ProjectCategory } from '../types';
import confetti from 'canvas-confetti';
import {
  Globe,
  Smartphone,
  Cpu,
  Clock,
  SendHorizontal,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Cpu,
  Sparkles,
};

export const ProjectConfigurator: React.FC = () => {
  const { themeConfig, addTicket, activeCategoryFilter } = useStudio();

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(() => {
    return (activeCategoryFilter !== 'all' && CATEGORY_PRESETS.some(c => c.id === activeCategoryFilter))
      ? activeCategoryFilter
      : 'growth-website';
  });

  const currentPreset = CATEGORY_PRESETS.find((c) => c.id === selectedCategory) || CATEGORY_PRESETS[0];

  const [selectedModules, setSelectedModules] = useState<string[]>(currentPreset.suggestedModules);
  const [selectedVelocity, setSelectedVelocity] = useState<'standard' | 'priority' | 'rush'>('standard');

  // Contact / Project details form
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [submittedTicketCode, setSubmittedTicketCode] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const currentVelocity = VELOCITY_TIERS.find((v) => v.id === selectedVelocity) || VELOCITY_TIERS[0];

  // Calculate pricing
  const baseCost = currentPreset.baseCost;
  const baseDays = currentPreset.baseDays;

  const modulesCost = selectedModules.reduce((acc, modId) => {
    const mod = ARCHITECTURAL_MODULES.find((m) => m.id === modId);
    return acc + (mod ? mod.baseCost : 0);
  }, 0);

  const modulesDays = selectedModules.reduce((acc, modId) => {
    const mod = ARCHITECTURAL_MODULES.find((m) => m.id === modId);
    return acc + (mod ? mod.timeDays : 0);
  }, 0);

  const totalRawCost = Math.round((baseCost + modulesCost) * currentVelocity.multiplier);
  const totalRawDays = Math.max(7, Math.round((baseDays + modulesDays * 0.4) * currentVelocity.timeMultiplier));
  const totalWeeks = Math.max(2, Math.round(totalRawDays / 7));

  const handleCategorySelect = (cat: ProjectCategory) => {
    setSelectedCategory(cat);
    const preset = CATEGORY_PRESETS.find((c) => c.id === cat);
    if (preset) {
      setSelectedModules(preset.suggestedModules);
    }
  };

  const toggleModule = (modId: string) => {
    setSelectedModules((prev) =>
      prev.includes(modId) ? prev.filter((id) => id !== modId) : [...prev, modId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      setFormError('Please provide your name and email to receive your custom scope.');
      return;
    }
    setFormError(null);

    const title = `${currentPreset.name}`;
    const desc = projectDescription.trim() || `Scope request for ${currentPreset.name} with ${selectedModules.length} selected capabilities.`;

    const newTicket = addTicket({
      title,
      category: selectedCategory,
      priority: selectedVelocity === 'rush' ? 'urgent' : selectedVelocity === 'priority' ? 'high' : 'standard',
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      description: desc,
      selectedModules,
      estimatedCost: totalRawCost,
      estimatedWeeks: totalWeeks,
    });

    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 },
      colors: [themeConfig.primaryColor, themeConfig.accentColor, '#ffffff'],
    });

    setSubmittedTicketCode(newTicket.ticketCode);
  };

  return (
    <section id="configurator" className="py-28 sm:py-36 relative border-t border-white/[0.04]">
      {/* Zen Ambient radial glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: themeConfig.primaryColor }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
            Scope & Estimator
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white theme-font-title">
            Tailored to your <span className="font-semibold" style={{ color: themeConfig.primaryColor }}>horizon.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparent milestones, guaranteed deliverables, and zero hidden platform retainers. Every build includes responsive craft, SEO indexing, and 30 days of post-launch care.
          </p>
        </div>

        {/* Minimalist 2-Column Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Architectural Selection */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Solution Cards */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                01 / Primary Solution
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CATEGORY_PRESETS.map((preset) => {
                  const isSelected = selectedCategory === preset.id;
                  const Icon = ICON_MAP[preset.iconName] || Globe;

                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleCategorySelect(preset.id)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer group flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white/[0.08] border-white/30 shadow-xl'
                          : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                      }`}
                      style={{
                        borderColor: isSelected ? themeConfig.primaryColor : undefined,
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all"
                            style={{
                              backgroundColor: isSelected ? `${themeConfig.primaryColor}25` : 'rgba(255,255,255,0.03)',
                              borderColor: isSelected ? `${themeConfig.primaryColor}50` : 'rgba(255,255,255,0.08)',
                            }}
                          >
                            <Icon
                              className="w-4 h-4"
                              style={{ color: isSelected ? themeConfig.primaryColor : '#94a3b8' }}
                            />
                          </div>
                          {isSelected && (
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center text-white"
                              style={{ backgroundColor: themeConfig.primaryColor }}
                            >
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </span>
                          )}
                        </div>

                        <h3 className="text-sm font-semibold text-white mb-1.5">{preset.name}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                          {preset.tagline}
                        </p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-mono text-[11px]">Milestone Scope</span>
                        <span className="font-mono font-medium text-white">
                          {preset.priceRange}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Integrated Capabilities */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  02 / Optional Capabilities
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedModules.length} Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ARCHITECTURAL_MODULES.slice(0, 8).map((mod) => {
                  const isSelected = selectedModules.includes(mod.id);

                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => toggleModule(mod.id)}
                      className={`px-3.5 py-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-white/[0.09] border-white/25 shadow-md'
                          : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1]'
                      }`}
                      style={{
                        borderColor: isSelected ? `${themeConfig.primaryColor}80` : undefined,
                      }}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-3.5 h-3.5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? 'text-white' : 'border-white/20'
                          }`}
                          style={{
                            backgroundColor: isSelected ? themeConfig.primaryColor : 'transparent',
                            borderColor: isSelected ? themeConfig.primaryColor : undefined,
                          }}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs text-slate-200 truncate font-medium">
                          {mod.name}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        +${mod.baseCost}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Cadence */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                03 / Delivery Cadence
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {VELOCITY_TIERS.map((tier) => {
                  const isSelected = selectedVelocity === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedVelocity(tier.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white/[0.08] border-white/30 shadow-md'
                          : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]'
                      }`}
                      style={{
                        borderColor: isSelected ? themeConfig.primaryColor : undefined,
                      }}
                    >
                      <div className="text-xs font-semibold text-white mb-0.5">{tier.name}</div>
                      <div className="text-[11px] text-slate-400">{tier.badge}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Serene Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl p-7 border border-white/[0.08] bg-slate-950/60 backdrop-blur-2xl shadow-2xl space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    Estimated Scope
                  </span>
                  <div className="text-base font-semibold text-white mt-0.5">{currentPreset.name}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    Cadence
                  </span>
                  <span className="text-xs font-mono text-slate-300 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    ~{totalWeeks} Weeks
                  </span>
                </div>
              </div>

              {/* Price Highlight */}
              <div className="py-2">
                <span className="text-xs text-slate-400 block font-light">Target Fixed Price</span>
                <div className="text-4xl font-light text-white font-mono tracking-tight mt-1 flex items-baseline gap-2">
                  <span>${totalRawCost.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 font-sans">one-time</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Includes full source code handover, zero proprietary licenses, and 30 days of warranty.
                </p>
              </div>

              {/* Direct Form */}
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <textarea
                    rows={2}
                    placeholder="Optional: Brief summary of your business needs..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:brightness-110 active:scale-98"
                  style={{
                    backgroundColor: themeConfig.primaryColor,
                  }}
                >
                  <span>Request Custom Proposal</span>
                  <SendHorizontal className="w-3.5 h-3.5" />
                </button>

                {formError && (
                  <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[11px] text-center">
                    {formError}
                  </div>
                )}

                {submittedTicketCode && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs text-center space-y-1">
                    <div className="font-semibold">Proposal Request Received</div>
                    <div className="text-[11px] text-slate-300">
                      We will review your scope and follow up within 4 hours. Reference: <span className="font-mono text-emerald-400">{submittedTicketCode}</span>
                    </div>
                  </div>
                )}
              </form>

              <div className="pt-2 border-t border-white/[0.06] text-center">
                <a
                  href="#contact"
                  className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Prefer a direct strategy conversation?</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
