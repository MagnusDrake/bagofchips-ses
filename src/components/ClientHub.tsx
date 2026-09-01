import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import type { ClientTicket, ProjectCategory } from '../types';
import {
  Activity,
  Plus,
  Clock,
  FileCode,
  Sparkles
} from 'lucide-react';

export const ClientHub: React.FC = () => {
  const { themeConfig, tickets, addTicket } = useStudio();
  const [selectedTicketId, setSelectedTicketId] = useState<string>(tickets[0]?.id || '');
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);

  // Quick ticket creation form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ProjectCategory>('web');
  const [newPriority, setNewPriority] = useState<'standard' | 'high' | 'urgent'>('high');
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const activeTicket = tickets.find((t) => t.id === selectedTicketId) || tickets[0];

  const [quickFormError, setQuickFormError] = useState<string | null>(null);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newClientName.trim() || !newClientEmail.trim()) {
      setQuickFormError('Please fill in project title, your name, and email.');
      return;
    }
    setQuickFormError(null);

    const created = addTicket({
      title: newTitle.trim(),
      category: newCategory,
      priority: newPriority,
      clientName: newClientName.trim(),
      clientEmail: newClientEmail.trim(),
      description: newDescription.trim() || 'Direct software engineering request via Client Hub.',
      selectedFeatures: ['auth', 'database', 'responsive-ui'],
      estimatedCost: 3200,
      estimatedWeeks: 3,
    });

    setSelectedTicketId(created.id);
    setShowNewTicketForm(false);
    setNewTitle('');
    setNewDescription('');
  };

  const getStatusBadge = (status: ClientTicket['status']) => {
    switch (status) {
      case 'scoping':
        return { label: 'Scoping & Architecture', color: 'bg-sky-500/20 text-sky-400 border-sky-500/30' };
      case 'in_sprint':
        return { label: 'In Active Sprint', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' };
      case 'qa_testing':
        return { label: 'QA & Stress Testing', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' };
      case 'deployed':
        return { label: 'Deployed / Live', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' };
      default:
        return { label: 'Active', color: 'bg-white/10 text-white' };
    }
  };

  return (
    <section id="client-hub" className="py-24 relative bg-black/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Activity className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              Real-Time Client Hub
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Track your sprints <span style={{ color: themeConfig.primaryColor }}>live & transparently.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every customer gets a dedicated live tracker showing sprint velocity, deliverables, test builds, and milestone roadmaps.
          </p>
        </div>

        {/* Client Hub Main Container */}
        <div
          className="rounded-3xl border backdrop-blur-2xl shadow-2xl overflow-hidden"
          style={{
            backgroundColor: `${themeConfig.bgHex}EE`,
            borderColor: themeConfig.primaryColor,
          }}
        >
          {/* Top Hub Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-black/40">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full animate-ping"
                style={{ backgroundColor: themeConfig.primaryColor }}
              />
              <span className="text-sm font-bold text-white font-mono">
                Active Client Portal ({tickets.length} Projects)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowNewTicketForm(!showNewTicketForm)}
                className="px-4 py-2 rounded-xl text-xs font-extrabold text-slate-950 flex items-center gap-2 transition-all hover:scale-105"
                style={{ backgroundColor: themeConfig.primaryColor }}
              >
                <Plus className="w-4 h-4" />
                <span>Submit New Engineering Ticket</span>
              </button>
            </div>
          </div>

          {/* New Ticket Form (Collapsible) */}
          {showNewTicketForm && (
            <div className="p-6 border-b border-white/10 bg-white/5 animate-in slide-in-from-top duration-300">
              <h3 className="text-base font-bold text-white mb-3">Direct Software Request Intake</h3>
              <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Project or Feature Title *"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="bg-black/50 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  className="bg-black/50 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  value={newClientEmail}
                  onChange={(e) => setNewClientEmail(e.target.value)}
                  className="bg-black/50 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as ProjectCategory)}
                  className="bg-black/50 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="web">Web Application / SaaS</option>
                  <option value="mobile">Mobile App (iOS/Android)</option>
                  <option value="game">Interactive 3D Game</option>
                  <option value="custom">Custom Tool / Automation</option>
                  <option value="ai">AI System / Workflow</option>
                </select>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as any)}
                  className="bg-black/50 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="standard">Standard Priority</option>
                  <option value="high">High Priority</option>
                  <option value="urgent">Urgent Sprint (Turbo)</option>
                </select>
                <button
                  type="submit"
                  className="py-2 px-4 rounded-xl text-xs font-bold text-slate-950 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
                  style={{ backgroundColor: themeConfig.primaryColor }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dispatch Request</span>
                </button>
              </form>
              {quickFormError && (
                <div className="mt-3 bg-rose-950/60 border border-rose-500/40 rounded-xl p-2 text-center text-xs text-rose-300">
                  ⚠️ {quickFormError}
                </div>
              )}
            </div>
          )}

          {/* Hub Workspace Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Sidebar: Tickets List */}
            <div className="lg:col-span-4 border-r border-white/10 p-4 sm:p-6 space-y-3 bg-black/20">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Your Projects & Tickets:
              </span>

              <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                {tickets.map((t) => {
                  const isSelected = (activeTicket && activeTicket.id === t.id);
                  const statusInfo = getStatusBadge(t.status);

                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTicketId(t.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-white/15 border-white/40 shadow-lg'
                          : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/15'
                      }`}
                      style={{
                        borderColor: isSelected ? themeConfig.primaryColor : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {t.ticketCode}
                        </span>
                        <span
                          className={`text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border ${statusInfo.color}`}
                        >
                          {statusInfo.label}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">{t.title}</h4>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                        <span>Client: {t.clientName}</span>
                        <span className="font-mono font-bold text-white">{t.progressPercent}% Done</span>
                      </div>

                      {/* Progress mini bar */}
                      <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full transition-all duration-500 rounded-full"
                          style={{
                            width: `${t.progressPercent}%`,
                            backgroundColor: themeConfig.primaryColor,
                          }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Area: Selected Ticket Live Milestone Board */}
            {activeTicket && (
              <div className="lg:col-span-8 p-6 sm:p-8 space-y-8">
                {/* Active Ticket Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {activeTicket.ticketCode}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs font-mono uppercase text-amber-400">
                        {activeTicket.category.toUpperCase()} BUILD
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{activeTicket.title}</h3>
                    <p className="text-xs text-slate-300 max-w-2xl">{activeTicket.description}</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:text-right shrink-0">
                    <div className="text-xs text-slate-400 font-mono">Target Investment</div>
                    <div className="text-lg sm:text-xl font-bold text-white font-mono">
                      ${activeTicket.estimatedCost?.toLocaleString() || '3,500'}
                    </div>
                    <div className="text-[10px] text-slate-400">~{activeTicket.estimatedWeeks || 4} Weeks Sprint</div>
                  </div>
                </div>

                {/* Live Milestone Timeline */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Clock className="w-4 h-4" style={{ color: themeConfig.primaryColor }} />
                      Sprint Milestones & Deliverables Roadmap:
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      Overall Progress: {activeTicket.progressPercent}%
                    </span>
                  </div>

                  <div className="space-y-3">
                    {activeTicket.milestones.map((m, idx) => {
                      const isDone = m.status === 'completed';
                      const isInProgress = m.status === 'in_progress';

                      return (
                        <div
                          key={m.id}
                          className={`p-4 rounded-2xl border transition-all ${
                            isDone
                              ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200'
                              : isInProgress
                              ? 'bg-amber-950/20 border-amber-500/40 text-white shadow-md'
                              : 'bg-white/5 border-white/10 text-slate-400'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold ${
                                  isDone
                                    ? 'bg-emerald-500 text-black'
                                    : isInProgress
                                    ? 'bg-amber-500 text-black animate-pulse'
                                    : 'bg-white/10 text-slate-400'
                                }`}
                              >
                                {isDone ? '✓' : idx + 1}
                              </div>

                              <div>
                                <h5 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                  {m.title}
                                  {isInProgress && (
                                    <span className="px-2 py-0.2 rounded-full text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                      CURRENT FOCUS
                                    </span>
                                  )}
                                </h5>

                                {/* Deliverable Tags */}
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {m.deliverables.map((del, dIdx) => (
                                    <span
                                      key={dIdx}
                                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/40 border border-white/10 text-slate-300 flex items-center gap-1"
                                    >
                                      <FileCode className="w-2.5 h-2.5 opacity-70" />
                                      {del}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <span className="text-[11px] font-mono text-slate-400 shrink-0">
                              {m.date}
                            </span>
                          </div>
                        </div>
                      );
                    })}
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
