import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import type { ProjectCategory } from '../types';
import {
  Activity,
  CheckCircle2,
  Clock,
  FileCode,
  Sparkles,
  Plus,
  Info,
  Calendar
} from 'lucide-react';

interface SmbPreset {
  title: string;
  clientName: string;
  clientEmail: string;
  company: string;
  category: ProjectCategory;
  description: string;
  estimatedCost: number;
  estimatedWeeks: number;
}

const SMB_SIMULATION_PRESETS: SmbPreset[] = [
  {
    title: 'BOC-7730 • Dental Patient Booking & Intake Flow',
    clientName: 'Dr. Aris Thorne',
    clientEmail: 'dr.thorne@oakridgedental.com',
    company: 'Oakridge Family Dental',
    category: 'customer-portal',
    description: 'HIPAA-conscious online patient registration, digital health intake forms, and automated 2-way SMS appointment confirmations.',
    estimatedCost: 2900,
    estimatedWeeks: 3,
  },
  {
    title: 'BOC-4412 • Commercial Roofing Quote Calculator',
    clientName: 'Jason Miller',
    clientEmail: 'jason@apexroofingexteriors.com',
    company: 'Apex Roofing & Exteriors',
    category: 'workflow-automation',
    description: 'Instant satellite square-footage estimator, material tier pricing calculator, and automated lead capture with calendar booking.',
    estimatedCost: 2200,
    estimatedWeeks: 2,
  },
  {
    title: 'BOC-9031 • Regional Freight Dispatch Board',
    clientName: 'Dave Vance',
    clientEmail: 'dave@cascadelogistics.com',
    company: 'Cascade Regional Logistics',
    category: 'workflow-automation',
    description: 'Real-time driver dispatch calendar, multi-stop route optimization, and live automated customer SMS shipment tracking.',
    estimatedCost: 3600,
    estimatedWeeks: 4,
  },
];

export const ClientHub: React.FC = () => {
  const { themeConfig, tickets, addTicket } = useStudio();
  const [selectedTicketId, setSelectedTicketId] = useState<string>(tickets[0]?.id || 'boc-8104');
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);

  // New ticket quick form
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ProjectCategory>('growth-website');
  const [newPriority, setNewPriority] = useState<'standard' | 'high' | 'urgent'>('standard');
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [quickFormError, setQuickFormError] = useState<string | null>(null);

  const activeTicket = tickets.find((t) => t.id === selectedTicketId) || tickets[0];

  const applyPreset = (preset: SmbPreset) => {
    setNewTitle(preset.title);
    setNewClientName(preset.clientName);
    setNewClientEmail(preset.clientEmail);
    setNewCompany(preset.company);
    setNewCategory(preset.category);
    setNewDescription(preset.description);
    setShowNewTicketForm(true);
  };

  const handle1ClickAddPreset = (preset: SmbPreset) => {
    const created = addTicket({
      title: preset.title,
      category: preset.category,
      priority: 'high',
      clientName: preset.clientName,
      clientEmail: preset.clientEmail,
      company: preset.company,
      description: preset.description,
      selectedModules: ['sms-reminders', 'accounting-sync'],
      estimatedCost: preset.estimatedCost,
      estimatedWeeks: preset.estimatedWeeks,
    });

    setSelectedTicketId(created.id);
    setShowNewTicketForm(false);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newClientName.trim() || !newClientEmail.trim()) {
      setQuickFormError('Please enter project title, your name, and email.');
      return;
    }
    setQuickFormError(null);

    const created = addTicket({
      title: newTitle.trim(),
      category: newCategory,
      priority: newPriority,
      clientName: newClientName.trim(),
      clientEmail: newClientEmail.trim(),
      company: newCompany.trim() || undefined,
      description: newDescription.trim() || 'Simulated project milestone tracker created via client portal demo.',
      selectedModules: ['sms-reminders', 'accounting-sync'],
      estimatedCost: newCategory === 'growth-website' ? 1600 : newCategory === 'customer-portal' ? 3400 : 2800,
      estimatedWeeks: newCategory === 'growth-website' ? 2 : 3,
    });

    setSelectedTicketId(created.id);
    setShowNewTicketForm(false);
    setNewTitle('');
    setNewClientName('');
    setNewClientEmail('');
    setNewCompany('');
    setNewDescription('');
  };

  return (
    <section id="client-hub" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Activity className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Interactive Client Portal Simulator
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Transparent milestones.{' '}
            <span style={{ color: themeConfig.primaryColor }}>Live project progress.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every client receives access to our private client hub to watch weekly milestone progress, test clickable prototypes, view deliverables, and communicate directly with their lead developer.
          </p>
        </div>

        {/* PROMINENT SIMULATION NOTICE */}
        <div className="mb-10 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-start gap-3.5 text-xs text-blue-200">
          <Info className="w-5 h-5 shrink-0 text-blue-400 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-blue-300 block">
              Interactive Client Portal Demonstration
            </span>
            <span className="text-blue-200/90 leading-relaxed block">
              This interactive dashboard demonstrates how active clients track their project build in real time. Real client domains, customer databases, and confidential business data are securely hosted in private client environments.
            </span>
          </div>
        </div>

        {/* Dashboard Frame */}
        <div
          className="rounded-3xl border bg-black/60 backdrop-blur-2xl shadow-2xl overflow-hidden glass-panel"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          {/* Top Command Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 bg-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wider">
                Active Client Portal ({tickets.length} Projects in Progress)
              </span>
            </div>

            <button
              onClick={() => setShowNewTicketForm(!showNewTicketForm)}
              className="py-2 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer shrink-0"
              style={{ backgroundColor: themeConfig.primaryColor }}
            >
              <Plus className="w-4 h-4" />
              <span>Simulate Adding a Project</span>
            </button>
          </div>

          {/* Quick Project Submission Panel */}
          {showNewTicketForm && (
            <div className="p-6 border-b border-white/10 bg-black/80 animate-in slide-in-from-top">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  Simulate Adding an SMB Project to Test the Dashboard
                </h3>
                <span className="text-[11px] text-slate-400">
                  Select a realistic business scenario or fill in custom details
                </span>
              </div>

              {/* 1-Click SMB Presets */}
              <div className="mb-5 p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-semibold text-slate-300">
                  Load Realistic Small Business Scenarios:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {SMB_SIMULATION_PRESETS.map((preset, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-white/10 bg-slate-900/80 hover:bg-slate-900 transition-all flex flex-col justify-between gap-2.5 text-left"
                    >
                      <div>
                        <div className="text-xs font-bold text-white line-clamp-1">
                          {preset.title.split('• ')[1] || preset.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {preset.company} · ${preset.estimatedCost.toLocaleString()}
                        </div>
                        <p className="text-[10px] text-slate-400 line-clamp-2 mt-1">
                          {preset.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                        <button
                          type="button"
                          onClick={() => applyPreset(preset)}
                          className="flex-1 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold bg-white/10 hover:bg-white/20 text-slate-200 transition-colors text-center cursor-pointer"
                        >
                          Autofill
                        </button>
                        <button
                          type="button"
                          onClick={() => handle1ClickAddPreset(preset)}
                          className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors text-center cursor-pointer"
                        >
                          + Instant Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Project Name (e.g. Oakridge Dental Booking System)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 sm:col-span-2"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Name (e.g. Dr. Aris Thorne)"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  className="bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address (e.g. aris@oakridgedental.com)"
                  value={newClientEmail}
                  onChange={(e) => setNewClientEmail(e.target.value)}
                  className="bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400"
                />
                <input
                  type="text"
                  placeholder="Company Name (e.g. Oakridge Family Dental)"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 sm:col-span-2"
                />
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as ProjectCategory)}
                  className="bg-black/90 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="growth-website">Business Growth Website</option>
                  <option value="customer-portal">Customer Portal & Booking</option>
                  <option value="workflow-automation">Workflow Automation</option>
                  <option value="mobile-app">Custom Mobile App</option>
                </select>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as any)}
                  className="bg-black/90 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="standard">Standard Pace (~3 Wks)</option>
                  <option value="high">Priority Queue (~2 Wks)</option>
                  <option value="urgent">Express Launch (~10 Days)</option>
                </select>
                <button
                  type="submit"
                  className="py-2.5 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer sm:col-span-4"
                  style={{ backgroundColor: themeConfig.primaryColor }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Add Custom Project to Simulator Board</span>
                </button>
              </form>
              {quickFormError && (
                <div className="mt-3 bg-rose-950/60 border border-rose-500/40 rounded-xl p-2 text-center text-xs text-rose-300">
                  ⚠️ {quickFormError}
                </div>
              )}
            </div>
          )}

          {/* Main Workspace Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left Sidebar: Tickets List */}
            <div className="lg:col-span-4 p-4 sm:p-6 space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                Active Project Backlog:
              </div>

              {tickets.map((ticket) => {
                const isSelected = activeTicket && activeTicket.id === ticket.id;
                return (
                  <button
                    key={ticket.id}
                    onClick={() => setSelectedTicketId(ticket.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/15 border-white/30 shadow-lg'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                    }`}
                    style={{
                      borderColor: isSelected ? themeConfig.primaryColor : undefined,
                    }}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-mono text-slate-400">
                        {ticket.ticketCode}
                      </span>
                      <span
                        className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                          ticket.status === 'deployed'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : ticket.status === 'qa_testing'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}
                      >
                        {ticket.status.replace('_', ' ')}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white line-clamp-1 mb-1">
                      {ticket.title}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{ticket.company || ticket.clientName}</span>
                      <span className="text-white font-bold font-mono">{ticket.progressPercent}% Complete</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${ticket.progressPercent}%`,
                          backgroundColor: themeConfig.primaryColor,
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Panel: Active Ticket Milestone Detail */}
            {activeTicket && (
              <div className="lg:col-span-8 p-6 sm:p-8 space-y-8">
                {/* Ticket Top Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">{activeTicket.ticketCode}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-semibold text-emerald-400 uppercase">
                        {activeTicket.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeTicket.title}
                    </h3>
                    <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                      {activeTicket.description}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 sm:text-right shrink-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Fixed Investment
                    </div>
                    <div className="text-xl font-bold font-mono text-white">
                      ${activeTicket.estimatedCost.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      ~{activeTicket.estimatedWeeks} Weeks Timeline
                    </div>
                  </div>
                </div>

                {/* Milestone Deliverables Checklist */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      Client Milestone Roadmap & Deliverables
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      Overall Progress: {activeTicket.progressPercent}%
                    </span>
                  </div>

                  <div className="space-y-3">
                    {activeTicket.milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className={`p-4 rounded-2xl border transition-all ${
                          milestone.status === 'completed'
                            ? 'bg-emerald-950/20 border-emerald-500/20'
                            : milestone.status === 'in_progress'
                            ? 'bg-blue-950/20 border-blue-500/30'
                            : 'bg-white/5 border-white/5 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2.5">
                            {milestone.status === 'completed' ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : milestone.status === 'in_progress' ? (
                              <Clock className="w-4 h-4 text-blue-400 shrink-0 animate-spin" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-white/20 shrink-0" />
                            )}
                            <h5 className="text-xs sm:text-sm font-bold text-white">
                              {milestone.title}
                            </h5>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">
                            {milestone.date}
                          </span>
                        </div>

                        {/* Deliverable Pills */}
                        <div className="flex flex-wrap gap-2 ml-6.5">
                          {milestone.deliverables.map((deliv, dIdx) => (
                            <span
                              key={dIdx}
                              className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-black/40 border border-white/10 text-slate-300 flex items-center gap-1"
                            >
                              <FileCode className="w-3 h-3 text-slate-400" />
                              <span>{deliv}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
