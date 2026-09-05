import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import {
  HelpCircle,
  Send,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Clock,
  Mail
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { themeConfig } = useStudio();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('fullstack-web');
  const [budget, setBudget] = useState('3500-7500');
  const [message, setMessage] = useState('');

  const faqs = [
    {
      q: 'How is intellectual property (IP) and source code handled?',
      a: 'You own 100% of all intellectual property, source code, Git commit history, Dockerfiles, Terraform infrastructure configurations, and database schemas from day one. Upon milestone completion, full repository ownership is transferred directly to your organization. We never charge recurring proprietary licensing fees or hold code hostage.'
    },
    {
      q: 'What is your typical sprint velocity and delivery cadence?',
      a: 'Core platforms, MVPs, and internal automation tools typically deploy to production within 2 to 4 weeks. We work in disciplined two-week sprint cycles with private staging builds, weekly async or video check-ins, and continuous deployment so you always see working software.'
    },
    {
      q: 'How do you guarantee code quality and system performance?',
      a: 'Every build enforces strict TypeScript boundaries from database schema to UI components, automated Vitest unit tests, Playwright end-to-end user regression tests, and sub-100ms API response targets. We optimize database indexing and connection pooling to ensure your system can scale 10x without architectural rewrites.'
    },
    {
      q: 'Can bagOfchips SES audit, modernize, or refactor an existing codebase?',
      a: 'Yes. We regularly conduct deep architectural and security audits on existing applications, identify database and query bottlenecks, resolve critical technical debt, and migrate legacy monoliths to modern Next.js/TypeScript/PostgreSQL microservices.'
    },
    {
      q: 'What post-launch engineering support and SLAs do you provide?',
      a: 'Every production deployment includes 30 days of complimentary engineering hypercare, automated Sentry exception monitoring, and bug triage. After launch, we offer dedicated monthly engineering retainers and SLA-backed maintenance contracts for continuous feature scaling.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Consultation Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
                <Mail className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                  Technical Discovery Consultation
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight theme-font-title">
                Schedule an <span style={{ color: themeConfig.primaryColor }}>architectural review.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Have a platform to build, an MVP to launch, or an architecture challenge to resolve? Send our engineering leads your specifications. We respond with a preliminary technical assessment within 4 hours.
              </p>
            </div>

            {/* Consultation Card */}
            <div
              className="p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all duration-500 shadow-2xl relative glass-panel"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              {formSubmitted ? (
                <div className="text-center py-10 space-y-3">
                  <div
                    className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-black shadow-lg"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Technical Inquiry Received</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Our lead software architect is reviewing your specifications and will respond within 4 hours with an initial technical assessment and sprint availability.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono font-bold text-amber-300 underline pt-2 cursor-pointer"
                  >
                    Send additional project details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Vance"
                        className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Company / Organization</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Vance Technologies Inc."
                        className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Primary Domain / Service</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="fullstack-web">Full-Stack Web Platform / MVP</option>
                        <option value="mobile-app">Cross-Platform Mobile Application</option>
                        <option value="internal-tooling">Internal Tooling & Workflow Automation</option>
                        <option value="ai-systems">Custom AI & Production RAG System</option>
                        <option value="interactive-engine">High-Performance 3D Simulation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Target Sprint Investment Range</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="3500-7500">$3,500 – $7,500 (Core MVP Sprint / Feature Build)</option>
                      <option value="7500-15000">$7,500 – $15,000 (Full-Stack Platform / Mobile App)</option>
                      <option value="15000-30000">$15,000 – $30,000+ (Enterprise Architecture / Custom AI)</option>
                      <option value="custom">Technical Discovery & Scoping Retainer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Technical Scope & Requirements *</label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your application goals, target tech stack, timeline urgency, or architectural challenges..."
                      className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl text-xs font-bold text-slate-950 flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                    style={{
                      backgroundColor: themeConfig.primaryColor,
                      boxShadow: `0 0 20px ${themeConfig.primaryColor}40`,
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Specifications for Architectural Review</span>
                  </button>
                </form>
              )}

              {/* Guarantees */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict NDA Protection & Confidentiality</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Senior engineer review within 4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
                <HelpCircle className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                  Engineering FAQ & SLAs
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight theme-font-title">
                Architectural answers, <span style={{ color: themeConfig.primaryColor }}>zero ambiguity.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Everything you need to know about our engineering standards, IP ownership, sprint velocity, and technical handover.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-white/10 border-white/30 shadow-lg'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                    style={{
                      borderColor: isOpen ? themeConfig.primaryColor : undefined,
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm font-bold text-white">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`}
                        style={{ color: isOpen ? themeConfig.primaryColor : undefined }}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
