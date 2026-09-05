import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { ChevronDown, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { themeConfig } = useStudio();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('growth-website');
  const [message, setMessage] = useState('');

  const faqs = [
    {
      q: 'Do I own the source code and assets outright?',
      a: 'Yes, 100%. All repository code, design assets, database accounts, and domain names belong completely to you. Unlike closed platforms, there are zero recurring platform lock-in fees.'
    },
    {
      q: 'Can our staff make updates without coding?',
      a: 'Yes. Every project includes an intuitive visual management interface. Your team can update text, photos, service rates, and announcements in seconds.'
    },
    {
      q: 'Are there hidden monthly fees or required retainers?',
      a: 'Zero. We deploy on modern cloud infrastructure (such as Vercel and Supabase) where standard business hosting typically runs $0 to $20/month at direct cost, with no agency markup.'
    },
    {
      q: 'What warranty is included after we launch?',
      a: 'Every deployment includes 30 days of complimentary post-launch warranty, bug resolution, and personalized video walkthroughs for your team.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 relative border-t border-white/[0.04]">
      {/* Subtle Ambient Light */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: themeConfig.primaryColor }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Consultation Form */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                Initiate
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white theme-font-title">
                Start a <span className="font-semibold" style={{ color: themeConfig.primaryColor }}>conversation.</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Tell us about the software or website you want to build. We review every note personally and reply within 4 hours with clear recommendations.
              </p>
            </div>

            {/* Clean Form Card */}
            <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-slate-950/60 backdrop-blur-2xl shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div
                    className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-light text-white">Note Received</h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                    Thank you. A senior engineer will review your requirements and respond within 4 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline transition-colors cursor-pointer pt-2"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elena Vance"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@company.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Discipline of Interest
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-slate-900 border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <option value="growth-website">High-Performance Website</option>
                      <option value="customer-portal">Client Booking & Accounts Portal</option>
                      <option value="workflow-automation">Workflow & Dispatch Automation</option>
                      <option value="mobile-app">Bespoke Mobile Application</option>
                      <option value="other">General Software Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Project Vision
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your objectives, current bottleneck, or target launch date..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:brightness-110 active:scale-98"
                    style={{
                      backgroundColor: themeConfig.primaryColor,
                    }}
                  >
                    <span>Send Message</span>
                    <Send className="w-3 h-3" />
                  </button>

                  <div className="pt-2 text-center text-[11px] text-slate-400 font-light">
                    Direct reply from our technical director within 4 hours. No sales pitches.
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                Clarity
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white theme-font-title">
                Common <span className="font-semibold" style={{ color: themeConfig.primaryColor }}>questions.</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Everything you need to know about code sovereignty, delivery cadence, and post-launch maintenance.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-white/[0.04] border-white/20'
                        : 'bg-white/[0.015] border-white/[0.05] hover:border-white/[0.1]'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-white">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed font-light border-t border-white/[0.04]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] flex items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-light">
                Looking for a tailored architecture assessment?
              </div>
              <a
                href="#configurator"
                className="text-xs text-white font-medium hover:underline inline-flex items-center gap-1 shrink-0"
              >
                <span>Scope your build</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
