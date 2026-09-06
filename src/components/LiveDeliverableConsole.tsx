import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { audioHaptics } from '../utils/audioHaptics';
import {
  Smartphone,
  Cpu,
  Activity,
  CheckCircle2,
  Send,
  Zap,
  ShieldCheck,
  Server,
  Terminal,
  Database
} from 'lucide-react';

export const LiveDeliverableConsole: React.FC = () => {
  const { themeConfig } = useStudio();
  const [activeTab, setActiveTab] = useState<'dispatch' | 'telemetry' | 'pipeline'>('dispatch');

  // Interactive Work Order State (Tab 1)
  const [techDispatched, setTechDispatched] = useState(false);
  const [selectedServiceTier, setSelectedServiceTier] = useState<'standard' | 'priority' | 'emergency'>('priority');
  const [liveQuote, setLiveQuote] = useState(285);
  const [paymentSettled, setPaymentSettled] = useState(false);

  // Interactive Node State (Tab 3)
  const [selectedNode, setSelectedNode] = useState<string>('api');

  const handleTabChange = (tab: 'dispatch' | 'telemetry' | 'pipeline') => {
    audioHaptics.playClick(1600);
    setActiveTab(tab);
  };

  const handleDispatchToggle = () => {
    audioHaptics.playClick(2000);
    setTechDispatched(!techDispatched);
    if (!techDispatched) {
      audioHaptics.playChime();
    }
  };

  const handleTierChange = (tier: 'standard' | 'priority' | 'emergency') => {
    audioHaptics.playClick(1400);
    setSelectedServiceTier(tier);
    setLiveQuote(tier === 'standard' ? 180 : tier === 'priority' ? 285 : 450);
  };

  const handleSimulatePayment = () => {
    audioHaptics.playClick(1800);
    setPaymentSettled(true);
    audioHaptics.playChime();
    setTimeout(() => setPaymentSettled(false), 3500);
  };

  return (
    <div className="relative rounded-3xl border border-white/[0.1] bg-slate-950/80 backdrop-blur-2xl shadow-2xl overflow-hidden text-left">
      {/* Top Browser / Console Bar */}
      <div className="px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left: Window Controls & Live URL */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>sandbox.bagofchips.dev</span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
              Interactive
            </span>
          </div>
        </div>

        {/* Right: Interactive Console View Tabs */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/[0.06]">
          <button
            onClick={() => handleTabChange('dispatch')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'dispatch'
                ? 'bg-white text-slate-950 font-semibold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Dispatch</span>
          </button>

          <button
            onClick={() => handleTabChange('telemetry')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'telemetry'
                ? 'bg-white text-slate-950 font-semibold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Edge Telemetry</span>
          </button>

          <button
            onClick={() => handleTabChange('pipeline')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pipeline'
                ? 'bg-white text-slate-950 font-semibold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Viewport */}
      <div className="p-6 sm:p-8 min-h-[380px]">
        {/* VIEW 1: Mobile Dispatch & Settlement Engine */}
        {activeTab === 'dispatch' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Mobile Phone Simulation */}
            <div className="md:col-span-6 max-w-sm mx-auto w-full bg-slate-900/90 border border-white/[0.12] rounded-2xl p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-slate-200 font-medium">Work Order #8104</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Austin, TX Field Tech</span>
              </div>

              {/* Customer & Location */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-white">Apex Commercial HVAC Unit 3B</div>
                <div className="text-[11px] text-slate-400">7401 Metro Blvd · Inverter Calibration</div>
              </div>

              {/* Interactive Tier Selection */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Select Dispatch Velocity
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['standard', 'priority', 'emergency'] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => handleTierChange(tier)}
                      className={`p-2 rounded-xl text-center text-xs font-mono transition-all cursor-pointer border ${
                        selectedServiceTier === tier
                          ? 'border-white/40 bg-white/15 text-white font-bold'
                          : 'border-white/5 bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <div className="capitalize text-[11px]">{tier}</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">
                        ${tier === 'standard' ? 180 : tier === 'priority' ? 285 : 450}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Status & Action */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Instant Estimate:</span>
                  <span className="text-lg font-bold text-white font-mono">${liveQuote}.00</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleDispatchToggle}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      techDispatched
                        ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/20 shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {techDispatched ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>En Route</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Tech</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleSimulatePayment}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-white transition-all cursor-pointer hover:brightness-110 shadow-lg"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    {paymentSettled ? '✓ Settled!' : '1-Click Pay'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Live Cloud Architecture Signals */}
            <div className="md:col-span-6 space-y-4 text-xs font-mono">
              <div className="text-[11px] uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Live Event Stream (Reactive State)</span>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] space-y-2.5">
                <div className="flex items-center justify-between text-slate-400">
                  <span>[0.00ms] WebSocket Connected</span>
                  <span className="text-emerald-400">STABLE</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>[0.14ms] Service Tier:</span>
                  <span className="text-white uppercase font-bold">{selectedServiceTier}</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>[0.28ms] Technician Status:</span>
                  <span className={techDispatched ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                    {techDispatched ? 'DISPATCHED (ETA: 18m)' : 'PENDING DISPATCH'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>[0.42ms] Stripe Terminal Auth:</span>
                  <span className={paymentSettled ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                    {paymentSettled ? 'SETTLED · $285.00' : 'READY FOR TAP'}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] leading-relaxed">
                  Every button you click runs real React 19 state machines with zero server lag.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: Global Edge Telemetry */}
        {activeTab === 'telemetry' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-semibold text-white">Global Edge Node Latency</h4>
                <p className="text-xs text-slate-400 mt-0.5">Continuous sub-second response times worldwide</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>99.998% Uptime</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { city: 'Tokyo', region: 'ap-northeast-1', ping: '18ms', status: 'Optimal' },
                { city: 'Frankfurt', region: 'eu-central-1', ping: '12ms', status: 'Optimal' },
                { city: 'London', region: 'eu-west-2', ping: '14ms', status: 'Optimal' },
                { city: 'New York', region: 'us-east-1', ping: '8ms', status: 'Optimal' },
                { city: 'Sydney', region: 'ap-southeast-2', ping: '24ms', status: 'Optimal' },
              ].map((node, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">{node.city}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-2xl font-light font-mono text-white">{node.ping}</div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">{node.region}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">CDN Cache Hit Ratio: <strong className="text-white">99.4%</strong></span>
              <span className="text-slate-400">Cold Start Overhead: <strong className="text-emerald-400">&lt; 1ms</strong></span>
              <span className="text-slate-400">SSL Handshake: <strong className="text-white">TLS 1.3 Strict</strong></span>
            </div>
          </div>
        )}

        {/* VIEW 3: Architecture & Data Pipeline */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-semibold text-white">Full-Stack Production Blueprint</h4>
                <p className="text-xs text-slate-400 mt-0.5">Click any node to inspect data contracts and guarantees</p>
              </div>
              <span className="text-xs font-mono text-slate-400">100% Client Sovereignty</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { id: 'client', icon: Smartphone, name: 'Client PWA / Web', desc: 'React 19 + Tailwind v4 with zero bloat', spec: 'Next-Gen Hydration' },
                { id: 'api', icon: Server, name: 'Vercel Edge Functions', desc: 'Sub-millisecond routing and auth verification', spec: 'Multi-Region Serverless' },
                { id: 'db', icon: Database, name: 'Supabase Postgres', desc: 'Full ACID compliance with row-level security', spec: 'Automated Daily Backups' },
                { id: 'webhooks', icon: Terminal, name: 'Webhook Pipelines', desc: 'QuickBooks, Twilio SMS & Stripe settlement', spec: 'Idempotent Queues' },
              ].map((node) => {
                const isSelected = selectedNode === node.id;
                const Icon = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      audioHaptics.playClick(1500);
                      setSelectedNode(node.id);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-white/30 bg-white/10 shadow-lg'
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-3" style={{ color: themeConfig.primaryColor }} />
                    <div className="text-xs font-bold text-white mb-1">{node.name}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{node.desc}</p>
                    <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-400">
                      {node.spec}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
