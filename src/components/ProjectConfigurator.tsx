import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { CATEGORY_PRESETS, ARCHITECTURAL_MODULES, VELOCITY_TIERS, STANDARD_INCLUSIONS } from '../data/configuratorData';
import type { ProjectCategory } from '../types';
import confetti from 'canvas-confetti';
import {
  Calculator,
  Lock,
  CreditCard,
  Workflow,
  Globe,
  Smartphone,
  Cpu,
  Clock,
  DollarSign,
  SendHorizontal,
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  Radio,
  HardDrive,
  Bell,
  HeartHandshake
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Lock,
  CreditCard,
  Workflow,
  Globe,
  Smartphone,
  Cpu,
  Zap,
  Radio,
  HardDrive,
  Bell,
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
  const [projectTitle, setProjectTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [company, setCompany] = useState('');
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
      setFormError('Please enter your name and email address so we can send your proposal.');
      return;
    }
    setFormError(null);

    const title = projectTitle.trim() || `${currentPreset.name}`;
    const desc = projectDescription.trim() || `Scope request for ${currentPreset.name} with ${selectedModules.length} business addons.`;

    const newTicket = addTicket({
      title,
      category: selectedCategory,
      priority: selectedVelocity === 'rush' ? 'urgent' : selectedVelocity === 'priority' ? 'high' : 'standard',
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      company: company.trim(),
      description: desc,
      selectedModules,
      estimatedCost: totalRawCost,
      estimatedWeeks: totalWeeks,
    });

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: [themeConfig.primaryColor, themeConfig.accentColor, '#ffffff'],
    });

    setSubmittedTicketCode(newTicket.ticketCode);

    setTimeout(() => {
      const hub = document.getElementById('client-hub');
      if (hub) hub.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  return (
    <section id="configurator" className="py-24 relative bg-black/70 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Interactive Project Price Estimator
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Transparent pricing.{' '}
            <span style={{ color: themeConfig.primaryColor }}>Instant project estimate.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Select your core business solution and any optional add-on workflows. Standard business essentials (mobile design, Google SEO, contact forms, and 30 days of support) are included by default at zero extra cost.
          </p>
        </div>

        {/* Standard Essentials Banner ($0 Extra) */}
        <div className="mb-10 p-5 rounded-3xl bg-slate-900/90 border border-white/10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-bold text-white">
                Included in Every Project by Default ($0 Extra Cost):
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              ✓ No Nickel-and-Dime Add-ons
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 text-xs">
            {STANDARD_INCLUSIONS.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-emerald-400 font-bold block mb-1">✓ Included</span>
                <span className="font-semibold text-white block leading-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope Configurator */}
          <div className="lg:col-span-8 space-y-8">
            {/* STEP 1: Select Solution Package */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-extrabold text-white"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    1
                  </span>
                  <h3 className="text-lg font-bold text-white">Select Your Business Solution</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Step 1 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {CATEGORY_PRESETS.map((preset) => {
                  const isSelected = selectedCategory === preset.id;
                  const Icon = ICON_MAP[preset.iconName] || Globe;

                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleCategorySelect(preset.id)}
                      className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 relative group flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 border-white/40 shadow-xl scale-[1.01]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                      style={{
                        borderColor: isSelected ? themeConfig.primaryColor : undefined,
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center border"
                            style={{
                              backgroundColor: isSelected ? `${themeConfig.primaryColor}22` : 'rgba(255,255,255,0.05)',
                              borderColor: isSelected ? themeConfig.primaryColor : 'rgba(255,255,255,0.1)',
                            }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: isSelected ? themeConfig.primaryColor : '#cbd5e1' }}
                            />
                          </div>
                          {isSelected ? (
                            <span
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                              style={{ backgroundColor: themeConfig.primaryColor }}
                            >
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                              {preset.badge}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-bold text-white mb-1">{preset.name}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed mb-3">{preset.description}</p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">Target Range:</span>
                        <span className="font-bold text-white text-sm" style={{ color: isSelected ? themeConfig.primaryColor : '#ffffff' }}>
                          {preset.priceRange}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Practical Business Addons: Compact Toggle Chips */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-extrabold text-white"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    2
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Select High-Value Business Add-ons</h3>
                    <p className="text-xs text-slate-400">Click to toggle optional automated workflows & integrations</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">
                    {selectedModules.length} Active
                  </span>
                </div>
              </div>

              {/* Compact Interactive Toggle Chips Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ARCHITECTURAL_MODULES.map((mod) => {
                  const isSelected = selectedModules.includes(mod.id);
                  const Icon = ICON_MAP[mod.iconName] || Sparkles;

                  return (
                    <div key={mod.id} className="relative group">
                      <button
                        type="button"
                        onClick={() => toggleModule(mod.id)}
                        className={`w-full p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-2.5 cursor-pointer relative ${
                          isSelected
                            ? 'bg-white/15 border-white/40 shadow-lg scale-[1.01]'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                        style={{
                          borderColor: isSelected ? themeConfig.primaryColor : undefined,
                          boxShadow: isSelected ? `0 0 15px ${themeConfig.primaryColor}30` : undefined,
                          backgroundColor: isSelected ? `${themeConfig.primaryColor}18` : undefined,
                        }}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                            style={{
                              backgroundColor: isSelected ? `${themeConfig.primaryColor}30` : 'rgba(255,255,255,0.05)',
                              borderColor: isSelected ? themeConfig.primaryColor : 'rgba(255,255,255,0.1)',
                            }}
                          >
                            <Icon
                              className="w-3.5 h-3.5"
                              style={{ color: isSelected ? themeConfig.primaryColor : '#cbd5e1' }}
                            />
                          </div>

                          <div className="truncate">
                            <span className="text-xs font-bold text-white block truncate">
                              {mod.name}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className="text-xs font-mono font-bold px-2 py-0.5 rounded-md border"
                            style={{
                              backgroundColor: isSelected ? `${themeConfig.primaryColor}25` : 'rgba(255,255,255,0.05)',
                              borderColor: isSelected ? `${themeConfig.primaryColor}50` : 'rgba(255,255,255,0.1)',
                              color: isSelected ? '#ffffff' : '#94a3b8',
                            }}
                          >
                            +${mod.baseCost}
                          </span>

                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                              isSelected ? 'text-white' : 'border-white/20 opacity-40'
                            }`}
                            style={{
                              backgroundColor: isSelected ? themeConfig.primaryColor : 'transparent',
                              borderColor: isSelected ? themeConfig.primaryColor : undefined,
                            }}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      </button>

                      {/* Unobtrusive Contextual Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-30 pointer-events-none w-max max-w-xs p-2 rounded-xl bg-slate-950/95 border border-white/20 shadow-2xl backdrop-blur-md text-[11px] text-slate-200 text-center animate-in fade-in zoom-in-95 duration-150">
                        <span className="text-emerald-400 font-bold block mb-0.5">★ {mod.businessImpact}</span>
                        <span className="text-slate-400 text-[10px] leading-tight block">{mod.description}</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-950/95" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Delivery Pace */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-extrabold text-white"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    3
                  </span>
                  <h3 className="text-lg font-bold text-white">Choose Your Delivery Timeline</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Step 3 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VELOCITY_TIERS.map((tier) => {
                  const isSelected = selectedVelocity === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedVelocity(tier.id as any)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white/15 border-white/40 shadow-lg scale-101'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                      style={{
                        borderColor: isSelected ? themeConfig.primaryColor : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: isSelected ? `${themeConfig.primaryColor}33` : 'rgba(255,255,255,0.05)',
                            color: isSelected ? themeConfig.primaryColor : '#cbd5e1',
                          }}
                        >
                          {tier.badge}
                        </span>
                        {isSelected && <Check className="w-4 h-4" style={{ color: themeConfig.primaryColor }} />}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{tier.name}</h4>
                      <p className="text-xs text-slate-400 leading-snug">{tier.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate & Proposal Request */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div
              className="rounded-3xl p-6 border backdrop-blur-2xl shadow-2xl relative overflow-hidden glass-panel"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Project Scope Summary
                  </span>
                  <h3 className="text-base font-bold text-white">{currentPreset.name}</h3>
                </div>
                <div
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-bold text-white"
                  style={{ backgroundColor: themeConfig.primaryColor }}
                >
                  {currentVelocity.badge.split(' ')[0]}
                </div>
              </div>

              {/* Estimate Numbers */}
              <div className="grid grid-cols-2 gap-4 py-5 border-b border-white/10">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                    <span>Estimated Total</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono tracking-tight">
                    ${totalRawCost.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400">Fixed milestone price</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Estimated Cadence</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono tracking-tight">
                    ~{totalWeeks} Weeks
                  </div>
                  <span className="text-[10px] text-slate-400">Target launch date</span>
                </div>
              </div>

              {/* Active Addons Summary */}
              <div className="py-4 border-b border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium">Selected Add-ons:</span>
                  <span className="font-mono text-emerald-400">{selectedModules.length} Active</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {selectedModules.map((id) => {
                    const mod = ARCHITECTURAL_MODULES.find((m) => m.id === id);
                    if (!mod) return null;
                    return (
                      <span
                        key={id}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/10 text-slate-200 border border-white/10 flex items-center gap-1"
                      >
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                        {mod.name.split(' ')[0]}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Intake Submission Form */}
              <form onSubmit={handleSubmit} className="pt-4 space-y-3">
                <p className="text-xs font-semibold text-slate-200">
                  Request Your Fixed-Price Proposal & Strategy Call:
                </p>

                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-400/60 focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-400/60 focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Business / Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-400/60 focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Project Name / Working Title"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-400/60 focus:outline-none focus:border-blue-400"
                  />
                  <textarea
                    rows={2}
                    placeholder="Tell us a little about your business goals or features you'd like..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-400/60 focus:outline-none focus:border-blue-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                  style={{
                    backgroundColor: themeConfig.primaryColor,
                    boxShadow: `0 0 20px ${themeConfig.primaryColor}40`,
                  }}
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>Request Fixed-Price Proposal</span>
                </button>

                {formError && (
                  <div className="bg-rose-950/60 border border-rose-500/40 rounded-xl p-2.5 text-center text-xs text-rose-300">
                    ⚠️ {formError}
                  </div>
                )}

                {submittedTicketCode && (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-2.5 text-center text-xs text-emerald-300 mt-2">
                    ✓ Proposal request <span className="font-mono font-bold">{submittedTicketCode}</span> received! Routing to Client Simulator...
                  </div>
                )}

                <div className="pt-2 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free 30-min strategy call • Zero obligation</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
