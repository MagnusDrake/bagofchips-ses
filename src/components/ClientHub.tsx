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
  Terminal
} from 'lucide-react';

export const ClientHub: React.FC = () => {
  const { themeConfig, tickets, addTicket } = useStudio();
  const [selectedTicketId, setSelectedTicketId] = useState<string>(tickets[0]?.id || 'demo-1');
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);

  // New ticket quick form
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ProjectCategory>('fullstack-web');
  const [newPriority, setNewPriority] = useState<'standard' | 'high' | 'urgent'>('high');
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [quickFormError, setQuickFormError] = useState<string | null>(null);

  const activeTicket = tickets.find((t) => t.id === selectedTicketId) || tickets[0];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newClientName.trim() || !newClientEmail.trim()) {
      setQuickFormError('Please enter project title, client name, and work email.');
      return;
    }
    setQuickFormError(null);

    const created = addTicket({
      title: newTitle.trim(),
      category: newCategory,
      priority: newPriority,
      clientName: newClientName.trim(),
      clientEmail: newClientEmail.trim(),
      description: newDescription.trim() || 'Simulated engineering sprint ticket created via client portal demo.',
      selectedModules: ['auth-rbac', 'relational-db', 'ci-cd-cloud'],
      estimatedCost: 4500,
      estimatedWeeks: 3,
    });

    setSelectedTicketId(created.id);
    setShowNewTicketForm(false);
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <section id="client-hub" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Activity className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              Interactive Sprint Simulator
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Transparent sprints. <span style={{ color: themeConfig.primaryColor }}>Live telemetry.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every client gets a dedicated engineering dashboard showing real-time sprint velocity, verifiable test builds, code staging links, and automated CI/CD milestone roadmaps.
          </p>
        </div>

        {/* PROMINENT SIMULATION NOTICE */}
        <div className="mb-10 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3.5 text-xs text-amber-200">
          <Info className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-300 block">
              Interactive Client Portal Simulation (Demo Environment)
            </span>
            <span className="text-amber-200/90 leading-relaxed block">
              This interactive simulator illustrates how active clients monitor our engineering sprints. Real client repositories, production credentials, and proprietary codebases are strictly confidential and protected behind private SSO barriers.
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
              <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                Active Client Portal ({tickets.length} Simulated Sprints)
              </span>
            </div>

            <button
              onClick={() => setShowNewTicketForm(!showNewTicketForm)}
              className="py-2 px-4 rounded-xl text-xs font-bold text-slate-950 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer shrink-0"
              style={{ backgroundColor: themeConfig.primaryColor }}
            >
              <Plus className="w-4 h-4" />
              <span>Simulate Dispatching a Ticket</span>
            </button>
          </div>

          {/* Quick Ticket Submission Panel */}
          {showNewTicketForm && (
            <div className="p-6 border-b border-white/10 bg-black/80 animate-in slide-in-from-top">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                Dispatch Simulated Engineering Sprint Ticket
              </h3>
              <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Ticket Title (e.g. Stripe Webhook Reconciliation)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 sm:col-span-2"
                />
                <input
                  type="text"
                  required
                  placeholder="Client Name / Lead"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  className="bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email"
                  value={newClientEmail}
                  onChange={(e) => setNewClientEmail(e.target.value)}
                  className="bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as ProjectCategory)}
                  className="bg-black/90 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="fullstack-web">Full-Stack Web</option>
                  <option value="mobile-app">Mobile Systems</option>
                  <option value="internal-tooling">Internal Tooling</option>
                  <option value="ai-systems">AI & RAG</option>
                  <option value="interactive-engine">3D Graphics</option>
                </select>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as any)}
                  className="bg-black/90 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="standard">Standard Priority</option>
                  <option value="high">High Priority</option>
                  <option value="urgent">Urgent Crunch</option>
                </select>
                <button
                  type="submit"
                  className="py-2 px-4 rounded-xl text-xs font-bold text-slate-950 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer sm:col-span-2"
                  style={{ backgroundColor: themeConfig.primaryColor }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Submit to Simulator Board</span>
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
                Simulated Sprint Backlog & Status:
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
                            ? 'bg-purple-500/20 text-purple-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}
                      >
                        {ticket.status.replace('_', ' ')}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white line-clamp-1 mb-1">
                      {ticket.title}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>{ticket.company || ticket.clientName}</span>
                      <span className="text-white font-bold">{ticket.progressPercent}% Velocity</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-white/10 h-1 rounded-full mt-2.5 overflow-hidden">
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

            {/* Right Panel: Active Ticket Milestone & Telemetry Detail */}
            {activeTicket && (
              <div className="lg:col-span-8 p-6 sm:p-8 space-y-8">
                {/* Ticket Top Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">{activeTicket.ticketCode}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                        {activeTicket.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {activeTicket.title}
                    </h3>
                    <p className="text-xs text-slate-300 max-w-xl">
                      {activeTicket.description}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 sm:text-right shrink-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Sprint Budget
                    </div>
                    <div className="text-xl font-bold font-mono text-white">
                      ${activeTicket.estimatedCost.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      ~{activeTicket.estimatedWeeks} Weeks Cadence
                    </div>
                  </div>
                </div>

                {/* Milestone Deliverables Checklist */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      Milestone Roadmap & Verifiable Artifacts
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
                            ? 'bg-amber-950/20 border-amber-500/30'
                            : 'bg-white/5 border-white/5 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2.5">
                            {milestone.status === 'completed' ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : milestone.status === 'in_progress' ? (
                              <Clock className="w-4 h-4 text-amber-400 shrink-0 animate-spin" />
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
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/40 border border-white/10 text-slate-300 flex items-center gap-1"
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
