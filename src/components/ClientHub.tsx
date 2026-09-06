import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { Check, ExternalLink, ShieldCheck, MessageSquare, Terminal } from 'lucide-react';
import { audioHaptics } from '../utils/audioHaptics';

interface ClientPreviewCase {
  id: string;
  client: string;
  project: string;
  domain: string;
  progress: number;
  currentMilestone: string;
  recentUpdate: string;
  engineerNote: string;
}

const CLIENT_CASES: ClientPreviewCase[] = [
  {
    id: 'apex',
    client: 'Apex HVAC & Air Specialists',
    project: 'Dispatch & Mobile Settlement Engine',
    domain: 'staging.apexhvac.net',
    progress: 85,
    currentMilestone: 'Production Hardening & Field Testing',
    recentUpdate: 'Stripe Terminal POS webhook integration validated.',
    engineerNote: 'Dispatched test work orders across 4 simulated technician devices. Fast response times verified under low connectivity.',
  },
  {
    id: 'oakridge',
    client: 'Oakridge Dental Group',
    project: 'HIPAA Patient Intake & SMS Reminders',
    domain: 'portal.oakridgedental.org',
    progress: 92,
    currentMilestone: 'Staff Walkthrough & Production Migration',
    recentUpdate: 'Automated 24h & 2h appointment SMS dispatch verified.',
    engineerNote: 'Intake flow complete. Staff training video uploaded to your private dashboard. Ready for DNS switch.',
  },
  {
    id: 'cascade',
    client: 'Cascade Regional Logistics',
    project: 'Driver Dispatch & Route Optimizer',
    domain: 'staging.cascadelogistics.io',
    progress: 70,
    currentMilestone: 'Map Routing Engine & GPS Sync',
    recentUpdate: 'Multi-stop delivery algorithm latency reduced to 180ms.',
    engineerNote: 'Live route optimization integrated with Google Distance Matrix API. Testing driver push alert sequences today.',
  },
];

export const ClientHub: React.FC = () => {
  const { themeConfig } = useStudio();
  const [activeCaseId, setActiveCaseId] = useState<string>('apex');

  const activeCase = CLIENT_CASES.find((c) => c.id === activeCaseId) || CLIENT_CASES[0];

  return (
    <section id="client-hub" className="py-28 sm:py-36 relative border-t border-white/[0.04]">
      {/* Soft Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: themeConfig.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
              Client Sanctuary
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white theme-font-title">
              Complete transparency.{' '}
              <span className="font-semibold" style={{ color: themeConfig.primaryColor }}>
                Zero anxiety.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Every client has real-time visibility into active sprints. Watch your application develop week by week with private staging links and direct access to your engineer.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-white/[0.06] scrollbar-none">
          {CLIENT_CASES.map((c) => {
            const isActive = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                onClick={() => {
                  audioHaptics.playClick();
                  setActiveCaseId(c.id);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-white/[0.12] text-white border border-white/20'
                    : 'bg-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: isActive ? themeConfig.primaryColor : '#64748b',
                  }}
                />
                <span>{c.client}</span>
              </button>
            );
          })}
        </div>

        {/* Tranquil Dashboard Preview Canvas */}
        <div className="rounded-3xl border border-white/[0.08] bg-slate-950/70 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Top Browser / Staging Header */}
          <div className="px-6 py-4 border-b border-white/[0.06] bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                https://{activeCase.domain}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span>Sprint Health: <strong className="text-emerald-400 font-medium">On Schedule</strong></span>
              <span className="text-slate-600">•</span>
              <a
                href="#configurator"
                onClick={() => audioHaptics.playSwitch()}
                className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Live Sandbox</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Staging Body */}
          <div className="p-8 sm:p-10 space-y-10">
            {/* Top Row: Case Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-white/[0.06]">
              <div className="lg:col-span-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  {activeCase.client}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  {activeCase.project}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                  {activeCase.recentUpdate}
                </p>
              </div>

              <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Progress</span>
                  <span className="font-mono text-white font-medium">{activeCase.progress}% Complete</span>
                </div>
                <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${activeCase.progress}%`,
                      backgroundColor: themeConfig.primaryColor,
                    }}
                  />
                </div>
                <div className="text-[11px] text-slate-400 font-mono pt-1">
                  Target: {activeCase.currentMilestone}
                </div>
              </div>
            </div>

            {/* Engineer Direct Dispatch Feed */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Terminal className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                <span>Direct Engineer Dispatch & Verification</span>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.06] bg-black/40 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                      ES
                    </div>
                    <span className="font-medium text-white">Lead Engineer</span>
                    <span className="text-slate-500">· Staging Commit #8f20b</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Verified Today</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed pl-8">
                  "{activeCase.engineerNote}"
                </p>

                <div className="pl-8 pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" /> Staging Deployed
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" /> Database Seeded
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" /> SSL Active
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Reassurances */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/[0.06]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-white">Direct Engineer Access</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    Direct communication with the engineer writing your code. Zero account managers or delayed handoffs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-white">Weekly Staging Previews</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    Test features on your own smartphone as they are created. You are never left wondering what was done.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-white">Full IP Transfer</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    Your code, database credentials, and production domains are delivered directly into your own accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
