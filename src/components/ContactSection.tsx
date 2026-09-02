import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { HelpCircle, Send, ShieldCheck, ChevronDown, CheckCircle2, Clock, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { themeConfig } = useStudio();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('starter-web');
  const [budget, setBudget] = useState('490-1200');
  const [message, setMessage] = useState('');

  const faqs = [
    {
      q: 'Do I really own 100% of my website or software?',
      a: 'Yes, 100%. Once your project is completed, all code, designs, and domain assets belong entirely to you. We never charge recurring proprietary license fees or hold your website hostage.'
    },
    {
      q: 'How much does a simple business website cost and how fast is it?',
      a: 'Our simple business websites start at just $490 and are typically completed and launched in 3 to 5 business days. This includes mobile responsiveness, Google Maps location setup, WhatsApp/email contact buttons, and custom domain connection.'
    },
    {
      q: 'What if I am not technical? Will I be able to manage things?',
      a: 'Don’t worry at all! We set everything up so you don’t need to touch a line of code. We can provide an easy admin panel or handle all future updates for you with our friendly support.'
    },
    {
      q: 'How do payments and milestones work?',
      a: 'We work on transparent, fixed-price milestones (usually a 50% deposit to begin and 50% upon your final review and launch). You always know the exact price upfront with zero hidden surprises.'
    },
    {
      q: 'Can you fix, improve, or take over an existing website or app?',
      a: 'Yes! If you have an existing website or messy codebase that needs bug fixes, speed optimization, redesign, or new features, we can audit it and get it running smoothly.'
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
    <section id="contact" className="py-24 relative overflow-hidden bg-circuit-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Consultation Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
                <Mail className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                  Friendly Consultation
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight theme-font-title">
                Let’s talk about your <span style={{ color: themeConfig.primaryColor }}>next project.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Have a question or want to discuss what you need built? Send us a quick note and our lead engineer will reply in under 4 hours.
              </p>
            </div>

            {/* Consultation Card */}
            <div
              className="p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all duration-500 shadow-2xl relative"
              style={{
                backgroundColor: `${themeConfig.bgHex}F2`,
                borderColor: themeConfig.primaryColor,
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
                  <h3 className="text-xl font-bold text-white">Message Received!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thanks for reaching out! We’re reviewing your project and will email you back within 4 hours with recommendations.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono font-bold text-amber-300 underline pt-2 cursor-pointer"
                  >
                    Send another inquiry
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
                        placeholder="e.g. John Doe"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">What are you looking for?</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="starter-web">Simple Business Website ($490+)</option>
                        <option value="web">Web App / Client Portal ($1,890+)</option>
                        <option value="mobile">iPhone & Android Mobile App ($2,990+)</option>
                        <option value="custom">Business Automation & Tools ($1,450+)</option>
                        <option value="ai">Smart AI Chatbot ($1,650+)</option>
                        <option value="game">Playable Web Game ($3,200+)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Target Budget</label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="490-1200">$490 – $1,200 (Simple Starter Site)</option>
                        <option value="1200-3000">$1,200 – $3,000 (Growth Site / Automation)</option>
                        <option value="3000-6000">$3,000 – $6,000 (Custom Web/Mobile App)</option>
                        <option value="6000+">$6,000+ (Full Platform / Game)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Tell us what you want to achieve *</label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us a little about your business or the problem you're trying to solve..."
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl text-xs font-extrabold text-slate-950 flex items-center justify-center gap-2 shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer"
                    style={{
                      backgroundColor: themeConfig.primaryColor,
                      boxShadow: `0 0 25px ${themeConfig.primaryColor}55`,
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Get Blueprint</span>
                  </button>
                </form>
              )}

              {/* Guarantees */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Confidential & No Spam</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Reply in under 4 hours</span>
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
                  Frequently Asked Questions
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight theme-font-title">
                Straight answers, <span style={{ color: themeConfig.primaryColor }}>zero fluff.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Everything you need to know about working with bagOfchips Software Engineering Studio.
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
