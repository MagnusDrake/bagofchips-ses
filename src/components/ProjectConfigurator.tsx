import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { CATEGORY_PRESETS, ARCHITECTURAL_MODULES, VELOCITY_TIERS } from '../data/configuratorData';
import type { ProjectCategory } from '../types';
import confetti from 'canvas-confetti';
import {
  Calculator,
  Lock,
  Database,
  CreditCard,
  Workflow,
  BrainCircuit,
  Cloud,
  Globe,
  Smartphone,
  Gamepad2,
  Cpu,
  Clock,
  DollarSign,
  SendHorizontal,
  Check,
  Sparkles,
  ShieldCheck,
  Shield,
  Zap,
  Network,
  FileText,
  Radio,
  HardDrive,
  Bell,
  Rocket,
  Activity,
  Eye,
  Layers
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Lock,
  Database,
  CreditCard,
  Workflow,
  BrainCircuit,
  Cloud,
  Globe,
  Smartphone,
  Gamepad2,
  Cpu,
  Shield,
  Zap,
  Network,
  FileText,
  Radio,
  HardDrive,
  Bell,
  Rocket,
  Activity,
  Eye,
  Sparkles,
};

export const ProjectConfigurator: React.FC = () => {
  const { themeConfig, addTicket, activeCategoryFilter } = useStudio();

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(() => {
    return activeCategoryFilter !== 'all' ? activeCategoryFilter : 'fullstack-web';
  });

  const currentPreset = CATEGORY_PRESETS.find((c) => c.id === selectedCategory) || CATEGORY_PRESETS[0];

  const [selectedModules, setSelectedModules] = useState<string[]>(currentPreset.suggestedModules);
  const [selectedVelocity, setSelectedVelocity] = useState<'standard' | 'accelerated' | 'turbo'>('standard');

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
  const totalRawDays = Math.max(10, Math.round((baseDays + modulesDays * 0.4) * currentVelocity.timeMultiplier));
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
      setFormError('Please enter your name and work email so we can send you the architecture blueprint.');
      return;
    }
    setFormError(null);

    const title = projectTitle.trim() || `${currentPreset.name}`;
    const desc = projectDescription.trim() || `Technical scope request for ${currentPreset.name} with ${selectedModules.length} architectural modules.`;

    const newTicket = addTicket({
      title,
      category: selectedCategory,
      priority: selectedVelocity === 'turbo' ? 'urgent' : selectedVelocity === 'accelerated' ? 'high' : 'standard',
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
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              Interactive Scope & Architecture Estimator
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Scope your build. <span style={{ color: themeConfig.primaryColor }}>Instant architectural quote.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Select your core platform tier and architectural modules. Standard production deliverables (responsive UI, automated CI/CD, DNS/SSL routing, tests, and 100% IP ownership) are included in every package.
          </p>
        </div>

        {/* Standard Deliverables Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-white">
              Included in All Packages by Default:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">✓ Responsive UI</span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">✓ Automated CI/CD</span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">✓ Production DNS/SSL</span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">✓ Type Safety & Tests</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">✓ 100% Full IP Handover</span>
          </div>
        </div>

        {/* Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope Configurator */}
          <div className="lg:col-span-8 space-y-8">
            {/* STEP 1: Select Platform Package */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-extrabold text-black"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    1
                  </span>
                  <h3 className="text-lg font-bold text-white">Select Core Solution Package</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Step 1 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {CATEGORY_PRESETS.map((preset) => {
                  const isSelected = selectedCategory === preset.id;
                  const Icon = ICON_MAP[preset.iconName] || Globe;

                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleCategorySelect(preset.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 relative group flex flex-col justify-between cursor-pointer ${
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
                            className="w-9 h-9 rounded-xl flex items-center justify-center border"
                            style={{
                              backgroundColor: isSelected ? `${themeConfig.primaryColor}22` : 'rgba(255,255,255,0.05)',
                              borderColor: isSelected ? themeConfig.primaryColor : 'rgba(255,255,255,0.1)',
                            }}
                          >
                            <Icon
                              className="w-4 h-4"
                              style={{ color: isSelected ? themeConfig.primaryColor : '#cbd5e1' }}
                            />
                          </div>
                          {isSelected ? (
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center text-black"
                              style={{ backgroundColor: themeConfig.primaryColor }}
                            >
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                              {preset.badge}
                            </span>
                          )}
                        </div>

                        <h4 className="text-sm font-bold text-white mb-1">{preset.name}</h4>
                        <p className="text-xs text-slate-400 leading-snug line-clamp-2">{preset.tagline}</p>
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">Baseline:</span>
                        <span className="font-bold text-white">${preset.baseCost.toLocaleString()}+</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Architectural Modules */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-extrabold text-black"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Select Architectural Modules</h3>
                    <p className="text-xs text-slate-400">Enterprise capabilities to integrate into your system</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {selectedModules.length} Modules Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                {ARCHITECTURAL_MODULES.map((mod) => {
                  const isSelected = selectedModules.includes(mod.id);
                  const Icon = ICON_MAP[mod.iconName] || Layers;

                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 relative cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 border-white/30 shadow-md'
                          : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/15'
                      }`}
                      style={{
                        borderColor: isSelected ? themeConfig.primaryColor : undefined,
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          backgroundColor: isSelected ? `${themeConfig.primaryColor}25` : 'rgba(255,255,255,0.05)',
                        }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: isSelected ? themeConfig.primaryColor : '#94a3b8' }}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <h4 className="text-xs font-bold text-white truncate">{mod.name}</h4>
                          <span className="text-[11px] font-mono font-bold text-slate-300 shrink-0">
                            +${mod.baseCost}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">{mod.description}</p>
                        <div className="mt-1.5 text-[10px] font-mono text-slate-500 truncate">
                          {mod.technicalSpecs}
                        </div>
                      </div>

                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-1 transition-all ${
                          isSelected ? 'bg-amber-500 border-amber-500 text-black' : 'border-white/20'
                        }`}
                        style={{
                          backgroundColor: isSelected ? themeConfig.primaryColor : undefined,
                          borderColor: isSelected ? themeConfig.primaryColor : undefined,
                        }}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Velocity & Sprint Cadence */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-extrabold text-black"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    3
                  </span>
                  <h3 className="text-lg font-bold text-white">Choose Sprint Velocity Tier</h3>
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

          {/* Right Column: Live Estimate & Specification Request */}
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
                    Preliminary Architecture Scope
                  </span>
                  <h3 className="text-base font-bold text-white">{currentPreset.name}</h3>
                </div>
                <div
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-bold text-black"
                  style={{ backgroundColor: themeConfig.primaryColor }}
                >
                  {currentVelocity.badge}
                </div>
              </div>

              {/* Estimate Numbers */}
              <div className="grid grid-cols-2 gap-4 py-5 border-b border-white/10">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                    <span>Estimated Baseline</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono tracking-tight">
                    ${totalRawCost.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400">Fixed sprint pricing</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5" style={{ color: themeConfig.accentColor }} />
                    <span>Estimated Cadence</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono tracking-tight">
                    ~{totalWeeks} Weeks
                  </div>
                  <span className="text-[10px] text-slate-400">Bi-weekly releases</span>
                </div>
              </div>

              {/* Active Modules Summary */}
              <div className="py-4 border-b border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium">Active Modules:</span>
                  <span className="font-mono text-emerald-400">{selectedModules.length} Configured</span>
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
                        <Check className="w-2.5 h-2.5" style={{ color: themeConfig.primaryColor }} />
                        {mod.name.split(' ')[0]}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Intake Submission Form */}
              <form onSubmit={handleSubmit} className="pt-4 space-y-3">
                <p className="text-xs font-semibold text-slate-300">
                  Request Technical Discovery & Architecture RFC:
                </p>

                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address *"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Company / Organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Project Name / Working Title"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <textarea
                    rows={2}
                    placeholder="Key architectural requirements or performance targets..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-slate-950 flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                  style={{
                    backgroundColor: themeConfig.primaryColor,
                    boxShadow: `0 0 20px ${themeConfig.primaryColor}40`,
                  }}
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>Generate Architecture RFC & Simulate Sprint</span>
                </button>

                {formError && (
                  <div className="bg-rose-950/60 border border-rose-500/40 rounded-xl p-2.5 text-center text-xs text-rose-300">
                    ⚠️ {formError}
                  </div>
                )}

                {submittedTicketCode && (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-2.5 text-center text-xs text-emerald-300 mt-2">
                    ✓ Architecture ticket <span className="font-mono font-bold">{submittedTicketCode}</span> generated! Routing to Sprint Simulator...
                  </div>
                )}

                <div className="pt-2 text-[10px] text-slate-400 text-center font-mono flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Confidential NDA protected • Senior engineer review</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
