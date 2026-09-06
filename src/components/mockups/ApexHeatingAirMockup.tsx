import React, { useState } from 'react';
import { audioHaptics } from '../../utils/audioHaptics';
import { MockupBuiltByBanner } from './MockupBuiltByBanner';
import {
  Wrench,
  CheckCircle2,
  FileText,
  CreditCard,
  Apple,
  ShieldCheck,
  Building,
  User,
  Zap,
  Check
} from 'lucide-react';

interface DiagnosticItem {
  id: string;
  name: string;
  status: 'passed' | 'repaired' | 'warning';
  reading: string;
  notes: string;
}

export const ApexHeatingAirMockup: React.FC = () => {
  const [paymentSettled, setPaymentSettled] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'apple-pay' | 'card' | 'ach'>('apple-pay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [diagnostics, setDiagnostics] = useState<DiagnosticItem[]>([
    {
      id: 'refrigerant',
      name: 'R-410A Refrigerant Charge & Subcooling',
      status: 'passed',
      reading: '118 PSI / 12°F Subcool',
      notes: 'Operating strictly within factory manufacturer tolerances.'
    },
    {
      id: 'capacitor',
      name: 'Hermetic Dual Run Capacitor (45/5 µF)',
      status: 'repaired',
      reading: 'Measured 36.2 µF (Degraded)',
      notes: 'Capacitor failed tolerance test. Replaced with OEM TitanPro HD unit.'
    },
    {
      id: 'blower',
      name: 'Direct Drive Blower Motor Amp Draw',
      status: 'passed',
      reading: '2.8 Amps (Rated 3.1A)',
      notes: 'No abnormal vibration or thermal overheating detected.'
    },
    {
      id: 'filter',
      name: 'Return Air Intake & MERV 11 Filtration',
      status: 'repaired',
      reading: 'Static Pressure 0.65 in. w.g.',
      notes: 'Clogged filter causing restricted airflow. Replaced with 4-inch deep pleat.'
    }
  ]);

  const toggleDiagnosticStatus = (id: string) => {
    audioHaptics.playClick(1400);
    setDiagnostics(prev =>
      prev.map(d => {
        if (d.id === id) {
          const nextStatus = d.status === 'passed' ? 'repaired' : 'passed';
          return { ...d, status: nextStatus };
        }
        return d;
      })
    );
  };

  const handlePayInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    audioHaptics.playClick(1800);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSettled(true);
      audioHaptics.playChime();
    }, 1100);
  };

  return (
    <div className="flex flex-col min-h-full bg-[#0d1424] text-slate-100 font-sans antialiased select-none">
      {/* Contractor Header */}
      <header className="bg-[#111c33] border-b border-slate-800 px-4 sm:px-8 py-3.5 sticky top-0 z-30 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base text-white tracking-tight block">
                Apex Heating & Air Specialists
              </span>
              <span className="text-[10px] text-slate-400 font-mono block -mt-0.5">
                Client Portal · Work Order #WO-8104
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 ${
                paymentSettled
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${paymentSettled ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
              <span>{paymentSettled ? 'PAID & CLOSED' : 'PAYMENT DUE ($385.00)'}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 flex-grow w-full space-y-8">
        {/* Top Info Banner */}
        <div className="rounded-2xl border border-slate-800 bg-[#131f38] p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Service Address</span>
              <div className="font-medium text-white flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-400" />
                <span>7401 Metro Blvd, Suite 3B</span>
              </div>
              <div className="text-[11px] text-slate-400">Austin, TX 78744</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Lead Field Tech</span>
              <div className="font-medium text-white flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>Marcus Vance (Master Tech #14)</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-mono">On-Site Completed · 10:45 AM</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Equipment Serviced</span>
              <div className="font-medium text-white">Carrier 5-Ton Infinity Heat Pump</div>
              <div className="text-[11px] text-slate-400 font-mono">Serial: 2824C99182</div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-mono">QuickBooks Ledger</span>
              <div className="font-medium text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>2-Way Accounting Synced</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Invoice #INV-8104</div>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Left Diagnostics Checklist, Right Itemized Settlement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Field Inspection Log (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Field Diagnostics & Work Performed</span>
              </h2>
              <span className="text-[11px] text-slate-400">Click item to verify readings</span>
            </div>

            <div className="space-y-3">
              {diagnostics.map((diag) => (
                <div
                  key={diag.id}
                  onClick={() => toggleDiagnosticStatus(diag.id)}
                  className="p-4 rounded-xl border border-slate-800 bg-[#111c33] hover:border-slate-700 transition-all cursor-pointer space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">
                      {diag.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                        diag.status === 'passed'
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'bg-blue-500/15 text-blue-300'
                      }`}
                    >
                      {diag.status === 'passed' ? '✓ Passed Spec' : '⚡ Replaced & Tested'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                    {diag.notes}
                  </p>
                  <div className="text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>Live Sensor Reading: {diag.reading}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Itemized Statement & 1-Click Settlement (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111c33] rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                  Itemized Service Settlement
                </h3>
                <p className="text-[11px] text-slate-400 font-light">
                  Work verified under 30-day contractor guarantee.
                </p>
              </div>

              {/* Itemized Table */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Diagnostic Service Call & Labor</span>
                  <span className="font-mono text-white">$89.00</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>TitanPro HD 45/5 Dual Run Capacitor</span>
                  <span className="font-mono text-white">$125.00</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>4-Inch Pleated MERV 11 Air Filter</span>
                  <span className="font-mono text-white">$45.00</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>1.5 Hours Licensed Mechanical Labor</span>
                  <span className="font-mono text-white">$135.00</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Commercial Preventative Maintenance Credit</span>
                  <span className="font-mono">-$30.00</span>
                </div>
                <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                  <span>Sales Tax (Austin Metro 8.25%)</span>
                  <span className="font-mono">$21.00</span>
                </div>

                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-700">
                  <span>Total Amount Due</span>
                  <span className="font-mono text-blue-400">$385.00</span>
                </div>
              </div>

              {/* Payment Settlement Flow */}
              {paymentSettled ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-white">Invoice #WO-8104 Paid in Full</div>
                    <div className="text-[11px] text-slate-300">
                      Paid via {paymentMethod === 'apple-pay' ? 'Apple Pay' : 'Credit Card'} · Auth #TX-91024
                    </div>
                  </div>
                  <div className="pt-2 text-[10px] font-mono text-emerald-400">
                    ✓ QuickBooks Online Ledger Synced in Real Time
                  </div>
                  <button
                    onClick={() => {
                      audioHaptics.playClick();
                      setPaymentSettled(false);
                    }}
                    className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Reset Demo State
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Payment Method Selector */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'apple-pay', label: 'Apple Pay', icon: Apple },
                      { id: 'card', label: 'Card / Debit', icon: CreditCard },
                      { id: 'ach', label: 'ACH Transfer', icon: Building }
                    ].map((m) => {
                      const active = paymentMethod === m.id;
                      const Icon = m.icon;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => {
                            audioHaptics.playClick(1500);
                            setPaymentMethod(m.id as any);
                          }}
                          className={`p-2.5 rounded-xl border text-[11px] font-medium flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                            active
                              ? 'bg-blue-600/20 border-blue-500 text-white'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{m.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Settle Button */}
                  <button
                    onClick={handlePayInvoice}
                    disabled={isProcessing}
                    className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span>Settling via Stripe Terminal...</span>
                    ) : (
                      <>
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>1-Click Settle Invoice ($385.00)</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center font-light">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Instant PDF receipt & manufacturer warranty logged to client portal</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Built by US Footer Signature */}
      <MockupBuiltByBanner projectCategory="customer-portal" clientName="Apex Heating & Air Specialists" />
    </div>
  );
};
