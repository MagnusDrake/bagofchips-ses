import React, { useState } from 'react';
import { audioHaptics } from '../../utils/audioHaptics';
import { MockupBuiltByBanner } from './MockupBuiltByBanner';
import {
  Truck,
  CheckCircle2,
  Battery,
  MapPin,
  Sparkles,
  Camera,
  RefreshCw,
  Zap
} from 'lucide-react';

interface StopItem {
  id: string;
  orderCode: string;
  recipient: string;
  address: string;
  window: string;
  status: 'delivered' | 'in_transit' | 'pending';
  packages: number;
}

export const MetroFleetLogisticsMockup: React.FC = () => {
  const [activeVan, setActiveVan] = useState<'van-1' | 'van-2' | 'van-3'>('van-1');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [routeOptimized, setRouteOptimized] = useState(false);
  const [proofPhotoCaptured, setProofPhotoCaptured] = useState(false);

  const [stops, setStops] = useState<StopItem[]>([
    {
      id: 's1',
      orderCode: 'MF-8812',
      recipient: 'Austin BioHealth Sciences',
      address: '2400 Medical Pkwy #100',
      window: '09:00 AM – 10:30 AM',
      status: 'delivered',
      packages: 3
    },
    {
      id: 's2',
      orderCode: 'MF-8815',
      recipient: 'Silicon Semiconductor Labs',
      address: '10800 Tech Ridge Blvd',
      window: '11:00 AM – 12:30 PM',
      status: 'in_transit',
      packages: 1
    },
    {
      id: 's3',
      orderCode: 'MF-8819',
      recipient: 'Pinnacle Legal Associates',
      address: '600 Congress Ave #1800',
      window: '01:00 PM – 02:30 PM',
      status: 'pending',
      packages: 2
    },
    {
      id: 's4',
      orderCode: 'MF-8824',
      recipient: 'Heritage Coffee Importers',
      address: '1401 E 6th St',
      window: '03:00 PM – 04:30 PM',
      status: 'pending',
      packages: 4
    }
  ]);

  const handleOptimizeRoute = () => {
    audioHaptics.playClick(1700);
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setRouteOptimized(true);
      audioHaptics.playChime();
    }, 900);
  };

  const handleSimulateDropoff = () => {
    audioHaptics.playClick(1900);
    setProofPhotoCaptured(true);
    setStops(prev =>
      prev.map(s => (s.id === 's2' ? { ...s, status: 'delivered' } : s))
    );
    audioHaptics.playChime();
  };

  return (
    <div className="flex flex-col min-h-full bg-[#080d1a] text-slate-100 font-sans antialiased select-none">
      {/* Fleet Header */}
      <header className="bg-[#0e162b] border-b border-slate-800 px-4 sm:px-8 py-3.5 sticky top-0 z-30 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base text-white tracking-tight block">
                MetroFleet Regional Logistics
              </span>
              <span className="text-[10px] text-cyan-400 font-mono block -mt-0.5">
                Central Corridor Automated Dispatch Board · SLA 99.4%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              3 Active Fleet Vans · 28 Deliveries Today
            </span>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 flex-grow w-full space-y-8">
        {/* Active Vans Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'van-1', label: 'Van #01 · North District', driver: 'Leo Santos', battery: '86%', stopsLeft: 3, zone: 'Tech Ridge / Domain' },
            { id: 'van-2', label: 'Van #02 · Airport Corridor', driver: 'Maya Lin', battery: '64%', stopsLeft: 5, zone: 'Bastrop / Del Valle' },
            { id: 'van-3', label: 'Van #03 · Downtown Express', driver: 'Carlos Ruiz', battery: '92%', stopsLeft: 8, zone: 'Central CBD' }
          ].map((van) => {
            const isSelected = activeVan === van.id;
            return (
              <div
                key={van.id}
                onClick={() => {
                  audioHaptics.playClick(1400);
                  setActiveVan(van.id as any);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? 'bg-[#121d38] border-cyan-500 shadow-md shadow-cyan-950/30'
                    : 'bg-[#0d1427] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white font-mono">{van.label}</span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <Battery className="w-3 h-3" /> {van.battery}
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-medium">{van.driver}</div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-light pt-1 border-t border-slate-800/80">
                  <span>Zone: {van.zone}</span>
                  <span className="font-mono text-cyan-400">{van.stopsLeft} Stops Left</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Route Optimization Telemetry Bar */}
        <div className="rounded-2xl border border-slate-800 bg-[#0d1427] p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-cyan-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Route Distance & Clustering Engine</span>
            </div>
            <p className="text-xs text-slate-300 font-light">
              {routeOptimized
                ? 'Route clustered via Google Distance Matrix API: 31.4 miles total (Saved 11.4 miles & 26% fuel costs).'
                : 'Current unoptimized route: 42.8 miles across 4 separate municipal corridors.'}
            </p>
          </div>

          <button
            onClick={handleOptimizeRoute}
            disabled={isOptimizing || routeOptimized}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold font-mono flex items-center gap-2 cursor-pointer transition-all ${
              routeOptimized
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md active:scale-95'
            }`}
          >
            {isOptimizing ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Calculating Distance Matrix...</span>
              </>
            ) : routeOptimized ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Optimized (-26% Fuel Saved)</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Run Territory Route Optimizer</span>
              </>
            )}
          </button>
        </div>

        {/* Stops Manifest Table */}
        <div className="rounded-2xl border border-slate-800 bg-[#0e162b] p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Live Stop Manifest · Active Route Dispatch
            </h3>
            <span className="text-[11px] text-slate-400">Simulate driver drop-offs in real time</span>
          </div>

          <div className="space-y-3">
            {stops.map((stop, index) => (
              <div
                key={stop.id}
                className="p-4 rounded-xl border border-slate-800/80 bg-[#121c35] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    0{index + 1}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white">{stop.recipient}</span>
                      <span className="text-[10px] font-mono text-slate-400">{stop.orderCode}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{stop.address}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <div className="text-left sm:text-right text-[11px] font-mono text-slate-400">
                    <div>{stop.window}</div>
                    <div className="text-[10px] text-slate-500">{stop.packages} packages</div>
                  </div>

                  <div>
                    {stop.status === 'delivered' ? (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Delivered
                      </span>
                    ) : stop.status === 'in_transit' ? (
                      <button
                        onClick={handleSimulateDropoff}
                        className="px-3 py-1.5 rounded-xl text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Camera className="w-3 h-3" />
                        <span>Snap Photo Drop-off</span>
                      </button>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700">
                        Queued
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proof of Delivery Card simulation */}
          {proofPhotoCaptured && (
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-2 mt-4">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Proof of Delivery Photo Uploaded: MF-8815</span>
                </span>
                <span className="font-mono text-[10px]">Delivered Just Now</span>
              </div>
              <p className="text-[11px] text-slate-300 font-mono">
                SMS auto-dispatched to recipient: "MetroFleet: Your package has been securely placed at Reception Desk B. View photo confirmation: mf.io/p/8815"
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Built by US Footer Signature */}
      <MockupBuiltByBanner projectCategory="workflow-automation" clientName="MetroFleet Regional Logistics" />
    </div>
  );
};
