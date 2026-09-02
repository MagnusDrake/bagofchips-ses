import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { CATEGORY_PRESETS, FEATURE_OPTIONS, TIMELINE_URGENCIES } from '../data/configuratorData';
import type { ProjectCategory } from '../types';
import confetti from 'canvas-confetti';
import {
  Calculator,
  Layers,
  Lock,
  Database,
  CreditCard,
  LayoutDashboard,
  Palette,
  Bell,
  WifiOff,
  Rocket,
  Zap,
  Trophy,
  Volume2,
  Eye,
  BrainCircuit,
  Bot,
  Search,
  Workflow,
  Cloud,
  Globe,
  Smartphone,
  Gamepad2,
  Cpu,
  Clock,
  DollarSign,
  SendHorizontal,
  Check,
  Layout,
  MapPin,
  Calendar,
  Star,
  Image,
  Share2,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  MapPin,
  Calendar,
  Star,
  Image,
  Share2,
  MessageSquare,
  Lock,
  Database,
  CreditCard,
  LayoutDashboard,
  Palette,
  Bell,
  WifiOff,
  Rocket,
  Zap,
  Trophy,
  Volume2,
  Eye,
  BrainCircuit,
  Bot,
  Search,
  Workflow,
  Cloud,
  Globe,
  Smartphone,
  Gamepad2,
  Cpu,
  Sparkles,
};

export const ProjectConfigurator: React.FC = () => {
  const { themeConfig, addTicket, activeCategoryFilter } = useStudio();

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(() => {
    return activeCategoryFilter !== 'all' ? activeCategoryFilter : 'starter-web';
  });

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'contact-whatsapp',
    'google-maps-seo',
    'domain-email'
  ]);
  const [selectedUrgency, setSelectedUrgency] = useState<'chill' | 'standard' | 'turbo'>('chill');

  // Contact / Project details form
  const [projectTitle, setProjectTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [submittedTicketCode, setSubmittedTicketCode] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const currentPreset = CATEGORY_PRESETS.find((c) => c.id === selectedCategory) || CATEGORY_PRESETS[0];
  const currentUrgency = TIMELINE_URGENCIES.find((u) => u.id === selectedUrgency) || TIMELINE_URGENCIES[0];

  // Calculate dynamic pricing and days
  const baseCost = currentPreset.baseCost;
  const baseDays = currentPreset.baseDays;

  const featuresCost = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURE_OPTIONS.find((f) => f.id === featId);
    return acc + (feat ? feat.baseCost : 0);
  }, 0);

  const featuresDays = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURE_OPTIONS.find((f) => f.id === featId);
    return acc + (feat ? feat.timeDays : 0);
  }, 0);

  const totalRawCost = Math.round((baseCost + featuresCost) * currentUrgency.multiplier);
  const totalRawDays = Math.max(3, Math.round((baseDays + featuresDays * 0.5) * currentUrgency.timeMultiplier));
  const totalWeeks = Math.max(1, Math.round(totalRawDays / 7));

  const handleCategorySelect = (cat: ProjectCategory) => {
    setSelectedCategory(cat);
    const preset = CATEGORY_PRESETS.find((c) => c.id === cat);
    if (preset) {
      setSelectedFeatures(preset.suggestedFeatures);
    }
  };

  const toggleFeature = (featId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featId) ? prev.filter((id) => id !== featId) : [...prev, featId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      setFormError('Please enter your name and email so we can send you the quote.');
      return;
    }
    setFormError(null);

    const title = projectTitle.trim() || `${currentPreset.name}`;
    const desc = projectDescription.trim() || `Project request for ${currentPreset.name} with ${selectedFeatures.length} selected features.`;

    const newTicket = addTicket({
      title,
      category: selectedCategory,
      priority: selectedUrgency === 'turbo' ? 'urgent' : selectedUrgency === 'standard' ? 'high' : 'standard',
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      description: desc,
      selectedFeatures,
      estimatedCost: totalRawCost,
      estimatedWeeks: totalWeeks,
    });

    // Fire celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [themeConfig.primaryColor, themeConfig.accentColor, '#ffffff'],
    });

    setSubmittedTicketCode(newTicket.ticketCode);

    // Scroll to client hub to show tracking
    setTimeout(() => {
      const hub = document.getElementById('client-hub');
      if (hub) hub.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  return (
    <section id="configurator" className="py-24 relative bg-black/40 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              Interactive Price & Scope Calculator
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Build your project & get an <span style={{ color: themeConfig.primaryColor }}>instant price.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Choose what you need below, see the exact estimate update in real-time, and get started with zero guesswork.
          </p>
        </div>

        {/* Configurator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Area (Steps 1 & 2 & 3) */}
          <div className="lg:col-span-8 space-y-10">
            {/* STEP 1: Choose Solution Type */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-black"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    1
                  </span>
                  <h3 className="text-lg font-bold text-white">Choose What You Want Built</h3>
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
                          ? 'bg-white/10 border-white/40 shadow-xl scale-[1.02]'
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
                        <p className="text-xs text-slate-300 leading-snug line-clamp-2">{preset.tagline}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">Starts At:</span>
                        <span className="font-bold text-white">${preset.baseCost.toLocaleString()}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Pick Features (Chips) */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-black"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Pick Your Features & Add-ons</h3>
                    <p className="text-xs text-slate-300">Click to add or remove any features you need</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {selectedFeatures.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                {FEATURE_OPTIONS.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  const Icon = ICON_MAP[feat.iconName] || Layers;

                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
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
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <h4 className="text-xs font-bold text-white truncate">{feat.name}</h4>
                          <span className="text-[11px] font-mono font-bold text-slate-300 shrink-0">
                            +${feat.baseCost}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">{feat.description}</p>
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

            {/* STEP 3: Urgency / Pace */}
            <div className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-black"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    3
                  </span>
                  <h3 className="text-lg font-bold text-white">Choose Your Timeline & Delivery Pace</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Step 3 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINE_URGENCIES.map((urg) => {
                  const isSelected = selectedUrgency === urg.id;
                  return (
                    <button
                      key={urg.id}
                      type="button"
                      onClick={() => setSelectedUrgency(urg.id as any)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white/15 border-white/40 shadow-lg scale-102'
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
                          {urg.badge}
                        </span>
                        {isSelected && <Check className="w-4 h-4" style={{ color: themeConfig.primaryColor }} />}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{urg.name}</h4>
                      <p className="text-xs text-slate-400 leading-snug">{urg.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate & Instant Quote Generator */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div
              className="rounded-3xl p-6 border backdrop-blur-2xl shadow-2xl relative overflow-hidden"
              style={{
                backgroundColor: `${themeConfig.bgHex}F0`,
                borderColor: themeConfig.primaryColor,
                boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 30px ${themeConfig.primaryColor}25`,
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Your Estimate
                  </span>
                  <h3 className="text-lg font-bold text-white">{currentPreset.name}</h3>
                </div>
                <div
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-bold text-black"
                  style={{ backgroundColor: themeConfig.primaryColor }}
                >
                  {currentUrgency.badge}
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
                  <span className="text-[10px] text-slate-400">Clear fixed price</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5" style={{ color: themeConfig.accentColor }} />
                    <span>Estimated Time</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono tracking-tight">
                    {totalRawDays <= 7 ? `${totalRawDays} Days` : `~${totalWeeks} Weeks`}
                  </div>
                  <span className="text-[10px] text-slate-400">Fast delivery</span>
                </div>
              </div>

              {/* Selected Modules Summary */}
              <div className="py-4 border-b border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium">Selected Features:</span>
                  <span className="font-mono">{selectedFeatures.length} chosen</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {selectedFeatures.map((id) => {
                    const feat = FEATURE_OPTIONS.find((f) => f.id === id);
                    if (!feat) return null;
                    return (
                      <span
                        key={id}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/10 text-slate-200 border border-white/10 flex items-center gap-1"
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: themeConfig.primaryColor }} />
                        {feat.name.split(' ')[0]}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Intake Submission Form */}
              <form onSubmit={handleSubmit} className="pt-4 space-y-3">
                <p className="text-xs font-semibold text-slate-300">
                  Ready to get this built? Send your request:
                </p>

                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address *"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Business / Project Name (Optional)"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <textarea
                    rows={2}
                    placeholder="Tell us a little about your business or what you want (Optional)..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-extrabold text-slate-950 flex items-center justify-center gap-2 shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer"
                  style={{
                    backgroundColor: themeConfig.primaryColor,
                    boxShadow: `0 0 25px ${themeConfig.primaryColor}55`,
                  }}
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>Send Request & Lock In Your Price</span>
                </button>

                {formError && (
                  <div className="bg-rose-950/60 border border-rose-500/40 rounded-xl p-2.5 text-center text-xs text-rose-300">
                    ⚠️ {formError}
                  </div>
                )}

                {submittedTicketCode && (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-2.5 text-center text-xs text-emerald-300 mt-2">
                    ✓ Request <span className="font-mono font-bold">{submittedTicketCode}</span> received! Taking you to the live tracker...
                  </div>
                )}

                <p className="text-[10px] text-slate-400 text-center font-mono">
                  ⚡ We’ll reply in under 4 hours with your blueprint.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
