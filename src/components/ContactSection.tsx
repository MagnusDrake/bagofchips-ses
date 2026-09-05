import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import {
  HelpCircle,
  Send,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Clock,
  PhoneCall,
  HeartHandshake
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { themeConfig } = useStudio();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('growth-website');
  const [budget, setBudget] = useState('1200-2500');
  const [message, setMessage] = useState('');

  const faqs = [
    {
      q: 'Do I own my website, code, and domain name 100%?',
      a: 'Yes, 100%. You own all design files, source code, database accounts, and domain names outright. Unlike closed website builders (such as Wix or Squarespace), there are zero recurring platform lock-in fees. If you ever want to move or change providers, everything belongs completely to you.'
    },
    {
      q: 'Can our staff easily update text, photos, and services?',
      a: 'Absolutely. Every website and portal we deliver includes an easy-to-use, visual content manager. You and your team can update photos, menu items, prices, business hours, and announcements in minutes without writing any code.'
    },
    {
      q: 'How long does a typical project take from start to finish?',
      a: 'Most Business Growth Websites launch within 2 to 3 weeks. Customer Portals and Workflow Automations typically take 3 to 5 weeks. We provide clear weekly milestones and staging links so you always see working progress.'
    },
    {
      q: 'Are there any hidden monthly fees or required contracts?',
      a: 'No hidden fees or recurring agency retainers. We deploy on modern, high-speed cloud infrastructure (like Vercel and Supabase) where standard business hosting typically costs $0 to $20/month at direct cost. You pay directly with zero agency markup.'
    },
    {
      q: 'What happens after launch if we need help or changes?',
      a: 'Every project includes 30 days of complimentary post-launch support and recorded video training for your staff. If you need new features or adjustments later, we are always available on a simple, transparent hourly or milestone basis.'
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
                <PhoneCall className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                  Free Strategy Consultation
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight theme-font-title">
                Schedule a free <span style={{ color: themeConfig.primaryColor }}>discovery call.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Ready to launch a new website, build a client booking portal, or automate daily admin tasks? Send us a quick note. We respond within 4 hours with transparent ideas and availability.
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
                    className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white shadow-lg bg-emerald-500"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you! Our lead developer will review your request and reach out within 4 hours with a preliminary timeline and call schedule.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-blue-300 underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Jenkins"
                        className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@business.com"
                        className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Business / Company Name</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Jenkins Plumbing & Heating"
                        className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Solution Needed</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-400"
                      >
                        <option value="growth-website">Business Growth Website ($1,200 – $1,800)</option>
                        <option value="customer-portal">Customer Portal & Online Booking ($2,800 – $4,500)</option>
                        <option value="workflow-automation">Workflow Automation & Custom Tools ($1,800 – $3,200)</option>
                        <option value="mobile-app">Custom Mobile App ($4,500 – $8,000+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Target Investment Range</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-400"
                    >
                      <option value="1200-2500">$1,200 – $2,500 (Growth Website / Core Launch)</option>
                      <option value="2500-5000">$2,500 – $5,000 (Customer Portal / Online Booking)</option>
                      <option value="5000-10000">$5,000 – $10,000+ (Mobile App / Multi-Tool Automation)</option>
                      <option value="custom">I need guidance on the best approach</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">What would you like to achieve? *</label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your business, current website or tools, and what you would like to improve..."
                      className="w-full bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                    style={{
                      backgroundColor: themeConfig.primaryColor,
                      boxShadow: `0 0 20px ${themeConfig.primaryColor}40`,
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Request for Free Strategy Review</span>
                  </button>
                </form>
              )}

              {/* Guarantees */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Code & Domain Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Senior developer response within 4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
                <HelpCircle className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                  Frequently Asked Questions
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight theme-font-title">
                Honest answers, <span style={{ color: themeConfig.primaryColor }}>zero sales fluff.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Everything you need to know about how we work, code ownership, ongoing costs, and support.
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

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-slate-300">
              <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Have a specific question not listed here? Mention it in your message and our engineer will answer directly.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
