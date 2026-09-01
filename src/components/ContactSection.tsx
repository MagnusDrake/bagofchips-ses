import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import {
  MessageSquare,
  Send,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { themeConfig } = useStudio();

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceNeed, setServiceNeed] = useState('Full Web Application');
  const [budget, setBudget] = useState('$3k - $7k');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does bagOfchips handle intellectual property (IP)?',
      a: 'You own 100% of the intellectual property, code, designs, and architecture upon milestone completion. We do not lock you in with proprietary license fees.'
    },
    {
      q: 'How fast can we start and launch an MVP?',
      a: 'We kick off projects within 48 hours of scope approval. Most MVPs (Web, Mobile, Game, or Custom AI automation) are fully tested and deployed in 2 to 4 weeks.'
    },
    {
      q: 'How do you structure payments and milestones?',
      a: 'We work on transparent fixed-price milestones (typically 30% upfront kickoff, 40% functional beta milestone, 30% final deployment & handover). No surprise hourly billings.'
    },
    {
      q: 'Can bagOfchips take over an existing legacy codebase?',
      a: 'Yes! We frequently refactor, optimize, and scale existing codebases (React, Next.js, React Native, Python, Go, Node.js) eliminating bugs and bottlenecks.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Consultation Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
                <MessageSquare className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                  Direct Studio Access
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
                Let's crunch your <span style={{ color: themeConfig.primaryColor }}>next software build.</span>
              </h2>
              <p className="text-slate-300 text-base">
                Have a project in mind or an unsolved technical challenge? Send us a quick note and our lead engineers will respond within 4 hours.
              </p>
            </div>

            {/* Form Box */}
            <div
              className="rounded-3xl border p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative"
              style={{
                backgroundColor: `${themeConfig.bgHex}F0`,
                borderColor: themeConfig.primaryColor,
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Solution Category</label>
                    <select
                      value={serviceNeed}
                      onChange={(e) => setServiceNeed(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Full Web Application">Web Application / SaaS</option>
                      <option value="Mobile App (iOS/Android)">Mobile App (iOS & Android)</option>
                      <option value="Game or 3D Experience">Game / 3D Experience</option>
                      <option value="Custom Internal Automation">Bespoke Software / Automation</option>
                      <option value="AI Agent / RAG Engine">AI System / LLM Integration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Target Budget Range</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="$2.5k - $5k">$2,500 – $5,000 (Sprint MVP)</option>
                      <option value="$5k - $10k">$5,000 – $10,000 (Full Production)</option>
                      <option value="$10k - $25k+">$10,000 – $25,000+ (Enterprise System)</option>
                      <option value="Flexible">Flexible / Needs Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Project Details & Objectives *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you're building or the real-life problem you're trying to solve..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl text-sm font-extrabold text-slate-950 flex items-center justify-center gap-2 shadow-2xl hover:scale-102 active:scale-98 transition-all"
                  style={{
                    backgroundColor: themeConfig.primaryColor,
                    boxShadow: `0 0 25px ${themeConfig.primaryColor}55`,
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Studio Inquiry</span>
                </button>

                {sentSuccess && (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-3 text-center text-xs sm:text-sm text-emerald-300">
                    ✓ Message received! We'll review your specs and contact you within 4 hours.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Studio FAQ & Trust Points */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
                <HelpCircle className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                  Frequently Asked Questions
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Straight answers, zero fluff.
              </h3>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border bg-white/5 backdrop-blur-md overflow-hidden transition-all"
                    style={{
                      borderColor: isOpen ? themeConfig.primaryColor : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-sm font-bold text-white hover:text-amber-300 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 shrink-0 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Guarantees Box */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                The bagOfchips Guarantee:
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4" style={{ color: themeConfig.primaryColor }} />
                  <span>Confidential NDA protection on all initial inquiries</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Zap className="w-4 h-4" style={{ color: themeConfig.accentColor }} />
                  <span>Guaranteed fixed sprint timelines with weekly live demos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
