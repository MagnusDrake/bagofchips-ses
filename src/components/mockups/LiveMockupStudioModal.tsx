import React, { useState, useEffect } from 'react';
import { useStudio } from '../../context/StudioContext';
import { audioHaptics } from '../../utils/audioHaptics';
import { SweetRiseBakeryMockup } from './SweetRiseBakeryMockup';
import { ApexHeatingAirMockup } from './ApexHeatingAirMockup';
import { MetroFleetLogisticsMockup } from './MetroFleetLogisticsMockup';
import { ClearViewDentalMockup } from './ClearViewDentalMockup';
import {
  X,
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  Lock,
  Volume2,
  VolumeX
} from 'lucide-react';

interface MockupMeta {
  id: string;
  name: string;
  domain: string;
  icon: string;
  category: string;
}

const MOCKUPS_META: MockupMeta[] = [
  {
    id: 'sweetrise-bakery',
    name: 'SweetRise Bakery & Café',
    domain: 'sweetrisebakery.com/catering',
    icon: '🍞',
    category: 'growth-website'
  },
  {
    id: 'apex-heating-air',
    name: 'Apex Heating & Air',
    domain: 'apex-heating-air.com/portal',
    icon: '❄️',
    category: 'customer-portal'
  },
  {
    id: 'metrofleet-logistics',
    name: 'MetroFleet Logistics',
    domain: 'metrofleet.app/dispatch',
    icon: '🚚',
    category: 'workflow-automation'
  },
  {
    id: 'clearview-dental',
    name: 'ClearView Dental',
    domain: 'clearviewdental.com/book',
    icon: '🦷',
    category: 'customer-portal'
  }
];

export const LiveMockupStudioModal: React.FC = () => {
  const { activeMockupId, openMockup, closeMockup } = useStudio();
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [refreshKey, setRefreshKey] = useState(0);
  const [soundActive, setSoundActive] = useState(() => audioHaptics.isEnabled());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMockup();
      }
    };
    if (activeMockupId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeMockupId, closeMockup]);

  if (!activeMockupId) return null;

  // Resolve active mockup or fallback to sweetrise-bakery
  const currentMeta =
    MOCKUPS_META.find((m) => m.id === activeMockupId) ||
    MOCKUPS_META.find((m) => m.category === activeMockupId) ||
    MOCKUPS_META[0];

  const handleSwitchMockup = (id: string) => {
    audioHaptics.playClick(1400);
    openMockup(id);
    setRefreshKey((k) => k + 1);
  };

  const handleReload = () => {
    audioHaptics.playSwitch();
    setRefreshKey((k) => k + 1);
  };

  const handleToggleAudio = () => {
    const next = audioHaptics.toggleSound();
    setSoundActive(next);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Live Prototype Capabilities Studio"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div className="relative w-full h-full max-w-7xl max-h-[96vh] rounded-[28px] border border-white/15 bg-slate-950 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Browser & Studio Bar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 shrink-0">
          {/* Left: Window Controls & Simulated HTTPS URL */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-1.5">
              <span
                onClick={closeMockup}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer block"
                title="Close"
              />
              <span
                onClick={handleReload}
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer block"
                title="Reset Prototype State"
              />
              <span
                onClick={() => setViewportMode('desktop')}
                className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-pointer block"
                title="Maximize Viewport"
              />
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-300 shadow-inner">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span className="text-slate-400">https://</span>
              <span className="text-white font-medium">{currentMeta.domain}</span>
            </div>

            <button
              onClick={handleReload}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              title="Reset Live Mockup State"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center: App Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-xl border border-white/10 overflow-x-auto max-w-full">
            {MOCKUPS_META.map((m) => {
              const isCurrent = m.id === currentMeta.id;
              return (
                <button
                  key={m.id}
                  onClick={() => handleSwitchMockup(m.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-white text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{m.icon}</span>
                  <span className="hidden sm:inline">{m.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Viewport Toggles & Close */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleAudio}
              className={`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer flex items-center gap-1 ${
                soundActive
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
              title={soundActive ? 'Sound Feedback: ON' : 'Sound Feedback: OFF (Click to Enable)'}
            >
              {soundActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Viewport Sizing */}
            <div className="hidden lg:flex items-center bg-slate-950/60 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => {
                  audioHaptics.playClick(1400);
                  setViewportMode('desktop');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                  viewportMode === 'desktop' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View (Full Width)"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  audioHaptics.playClick(1500);
                  setViewportMode('tablet');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                  viewportMode === 'tablet' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  audioHaptics.playClick(1600);
                  setViewportMode('mobile');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                  viewportMode === 'mobile' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile View (420px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={closeMockup}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Close Mockup Viewer (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Container Body */}
        <div className="flex-grow overflow-y-auto bg-slate-950/50 flex justify-center items-stretch p-0 sm:p-4">
          <div
            key={`${currentMeta.id}-${refreshKey}`}
            className={`w-full transition-all duration-300 flex flex-col bg-slate-950 overflow-y-auto h-full shadow-2xl ${
              viewportMode === 'desktop'
                ? 'max-w-full rounded-none sm:rounded-2xl'
                : viewportMode === 'tablet'
                ? 'max-w-3xl rounded-2xl my-2 border border-slate-700'
                : 'max-w-md rounded-3xl my-2 border-4 border-slate-800'
            }`}
          >
            {currentMeta.id === 'sweetrise-bakery' && <SweetRiseBakeryMockup />}
            {currentMeta.id === 'apex-heating-air' && <ApexHeatingAirMockup />}
            {currentMeta.id === 'metrofleet-logistics' && <MetroFleetLogisticsMockup />}
            {currentMeta.id === 'clearview-dental' && <ClearViewDentalMockup />}
          </div>
        </div>
      </div>
    </div>
  );
};
