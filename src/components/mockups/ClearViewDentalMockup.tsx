import React, { useState } from 'react';
import { audioHaptics } from '../../utils/audioHaptics';
import { MockupBuiltByBanner } from './MockupBuiltByBanner';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';

interface Procedure {
  id: string;
  name: string;
  duration: string;
  desc: string;
  priceNote: string;
}

const PROCEDURES: Procedure[] = [
  {
    id: 'hygiene',
    name: 'Comprehensive Exam & 3D Imaging',
    duration: '60 Mins',
    desc: 'Full digital intraoral scan, periodontal assessment, and gentle ultrasonic cleaning.',
    priceNote: '100% Covered by Most Dental PPOs'
  },
  {
    id: 'invisalign',
    name: 'Clear Aligners Orthodontic Consult',
    duration: '45 Mins',
    desc: 'Simulated 3D smile outcome simulation and personalized orthodontic alignment plan.',
    priceNote: 'Complimentary Consultation'
  },
  {
    id: 'emergency',
    name: 'Emergency Tooth Pain / Urgent Care',
    duration: '45 Mins',
    desc: 'Same-day evaluation for acute toothaches, chipped enamel, or broken crowns.',
    priceNote: 'Priority Same-Day Triage'
  },
  {
    id: 'whitening',
    name: 'Opalescence In-Office Power Whitening',
    duration: '60 Mins',
    desc: 'Enamel-safe professional brightening treatment up to 8 shades whiter in one session.',
    priceNote: 'Special In-Office Rate'
  }
];

export const ClearViewDentalMockup: React.FC = () => {
  const [selectedProcedure, setSelectedProcedure] = useState<string>('hygiene');
  const [selectedDoctor, setSelectedDoctor] = useState<'chen' | 'vance'>('chen');
  const [selectedDate, setSelectedDate] = useState('2026-09-15');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [patientName, setPatientName] = useState('Alex Rivera');
  const [patientPhone, setPatientPhone] = useState('(512) 555-8392');
  const [insurance, setInsurance] = useState('Delta Dental Premier');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [smsReplyState, setSmsReplyState] = useState<'pending' | 'confirmed'>('pending');

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    audioHaptics.playClick(1800);
    setBookingConfirmed(true);
    audioHaptics.playChime();
  };

  const handleSmsReplyConfirm = () => {
    audioHaptics.playClick(1500);
    setSmsReplyState('confirmed');
    audioHaptics.playChime();
  };

  const resetBooking = () => {
    audioHaptics.playClick();
    setBookingConfirmed(false);
    setSmsReplyState('pending');
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] text-slate-900 font-sans antialiased select-none">
      {/* Clinic Header */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              <HeartPulse className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base text-slate-900 tracking-tight block">
                ClearView Specialty Dental & Orthodontics
              </span>
              <span className="text-[10px] text-slate-500 font-mono block -mt-0.5">
                HIPAA-Compliant Patient Scheduling Engine
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>HIPAA Encrypted SSL</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 flex-grow w-full space-y-8">
        {bookingConfirmed ? (
          /* Booking Confirmed + Interactive SMS Demonstration */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8 text-center">
            <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                Appointment #CVD-4912 Reserved
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Chair Reserved with {selectedDoctor === 'chen' ? 'Dr. Sarah Chen, DDS' : 'Dr. Marcus Vance, DMD'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Scheduled for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>. Real-time 2-way SMS pipeline triggered below:
              </p>
            </div>

            {/* Interactive Smartphone SMS Simulator */}
            <div className="max-w-sm mx-auto rounded-[32px] border-4 border-slate-800 bg-slate-950 p-3 shadow-2xl text-left">
              <div className="flex items-center justify-between px-3 py-1 text-[10px] font-mono text-slate-400">
                <span>9:41</span>
                <span className="text-teal-400">Twilio Healthcare Gateway</span>
              </div>

              <div className="bg-slate-900 rounded-[24px] p-4 space-y-3 min-h-[220px] text-xs">
                {/* Incoming SMS from Dental Office */}
                <div className="bg-slate-800 p-3 rounded-2xl text-slate-200 space-y-1 max-w-[85%] border border-slate-700">
                  <div className="text-[10px] text-teal-400 font-bold">ClearView Dental Automated SMS:</div>
                  <p className="text-[11px] leading-relaxed">
                    Hi {patientName}! Your chair appointment for {selectedDate} at {selectedTime} is confirmed.
                  </p>
                  <p className="text-[11px] text-slate-400 pt-1 font-mono">
                    Reply <strong>C</strong> to confirm or <strong>R</strong> to reschedule.
                  </p>
                </div>

                {/* Patient Reply */}
                {smsReplyState === 'confirmed' ? (
                  <>
                    <div className="bg-teal-600 text-white p-2.5 rounded-2xl text-[11px] max-w-[50%] ml-auto text-right">
                      C
                    </div>
                    <div className="bg-slate-800 p-2.5 rounded-2xl text-[11px] text-slate-200 max-w-[85%] border border-slate-700">
                      <span className="text-emerald-400 font-bold">✓ Confirmed!</span> We have locked your operatory room. See you soon!
                    </div>
                  </>
                ) : (
                  <div className="pt-4 text-center">
                    <button
                      onClick={handleSmsReplyConfirm}
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-teal-500 hover:bg-teal-400 text-slate-950 transition-all cursor-pointer shadow-md active:scale-95"
                    >
                      Tap to Simulate Replying "C"
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={resetBooking}
              className="px-6 py-2 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
            >
              Test Another Appointment Flow
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Procedures & Providers (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Select Procedure */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 font-mono">
                    1. Select Dental Care Procedure
                  </h2>
                  <span className="text-xs text-slate-500">Same-day slots available</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCEDURES.map((proc) => {
                    const isSelected = selectedProcedure === proc.id;
                    return (
                      <div
                        key={proc.id}
                        onClick={() => {
                          audioHaptics.playClick(1500);
                          setSelectedProcedure(proc.id);
                        }}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                          isSelected
                            ? 'bg-teal-50/60 border-teal-600 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">{proc.name}</span>
                          <span className="text-[10px] font-mono text-slate-500">{proc.duration}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 line-clamp-2">{proc.desc}</p>
                        <div className="text-[10px] font-semibold text-teal-700 pt-1">
                          {proc.priceNote}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Provider */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 font-mono">
                  2. Choose Attending Clinician
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'chen', name: 'Dr. Sarah Chen, DDS', role: 'Lead Cosmetic & Restorative Dentist', bio: 'Columbia Dental · 14 yrs experience' },
                    { id: 'vance', name: 'Dr. Marcus Vance, DMD', role: 'Orthodontic & Invisalign Specialist', bio: 'UCSF Orthodontics · Top 1% Provider' }
                  ].map((doc) => {
                    const isSelected = selectedDoctor === doc.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => {
                          audioHaptics.playClick(1600);
                          setSelectedDoctor(doc.id as any);
                        }}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                          isSelected
                            ? 'bg-teal-50/60 border-teal-600 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-teal-600/10 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">
                          {doc.name.split(' ')[1][0]}
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold text-slate-900">{doc.name}</div>
                          <div className="text-[11px] text-slate-600">{doc.role}</div>
                          <div className="text-[10px] text-teal-700 font-mono">{doc.bio}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Date, Time & Patient Confirmation (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 font-mono">
                    3. Select Date & Operatory Slot
                  </h3>
                  <p className="text-[11px] text-slate-500">Live chair availability updated every 60s.</p>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Date Input */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>Appointment Date</span>
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs font-medium"
                    />
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>Available Time Slot</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['09:00 AM', '10:30 AM', '01:15 PM', '02:45 PM', '04:00 PM', '05:15 PM'].map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => {
                              audioHaptics.playClick(1700);
                              setSelectedTime(slot);
                            }}
                            className={`py-2 rounded-xl text-center text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-teal-600 text-white font-bold shadow-xs'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Patient Info Fields */}
                  <div className="space-y-3 pt-3 border-t border-slate-200">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-700">Patient Full Name</label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900"
                        placeholder="Alex Rivera"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-700">Mobile Phone (for 2-Way SMS)</label>
                      <input
                        type="text"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900"
                        placeholder="(512) 555-8392"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-700">Dental Insurance Plan</label>
                      <select
                        value={insurance}
                        onChange={(e) => setInsurance(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900"
                      >
                        <option>Delta Dental Premier</option>
                        <option>Cigna Dental PPO</option>
                        <option>MetLife PDP Plus</option>
                        <option>Aetna Dental Direct</option>
                        <option>Direct Self-Pay / HSA</option>
                      </select>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={handleBook}
                    className="w-full py-3 px-4 rounded-2xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Confirm Chair Booking & Trigger SMS</span>
                  </button>

                  <div className="text-[10px] text-slate-400 text-center font-light">
                    Automated SMS reminders dispatched 24h & 2h before visit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Built by US Footer Signature */}
      <MockupBuiltByBanner projectCategory="customer-portal" clientName="ClearView Specialty Dental & Orthodontics" />
    </div>
  );
};
