import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import {
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  Zap,
  CheckCircle2,
  XCircle,
  FileCheck,
  Layers,
  HeartHandshake
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const { themeConfig } = useStudio();
  const [activeTab, setActiveTab] = useState<'why-us' | 'stack' | 'guarantees'>('why-us');

  const comparisonPoints = [
    {
      feature: 'Code & Website Ownership',
      bagOfchips: '100% full ownership of source code, design assets, and domain. You can move anytime.',
      builders: 'Locked into proprietary platforms (Wix, Squarespace, Shopify). You never own the underlying code.',
    },
    {
      feature: 'Speed & Google PageSpeed',
      bagOfchips: 'Hand-crafted clean code scoring 95+ on Google Lighthouse for maximum local search ranking.',
      builders: 'Bloated third-party plugin scripts that cause slow mobile loading and hurt Google rankings.',
    },
    {
      feature: 'Ongoing Monthly Costs',
      bagOfchips: 'Zero mandatory platform fees. Modern cloud hosting costs $0 to $20/month at direct cost.',
      builders: 'Expensive monthly subscriptions ($40–$250/mo) plus recurring charges for each essential plugin.',
    },
    {
      feature: 'Developer Access & Support',
      bagOfchips: 'Direct access to your dedicated senior engineer with fast turnaround on inquiries.',
      builders: 'Impersonal support ticketing, outsourced call centers, or slow offshore agency freelancers.',
    },
    {
      feature: 'Custom Functionality & Integrations',
      bagOfchips: 'Custom portals, QuickBooks sync, and automated SMS built exactly around your business workflow.',
      builders: 'Restricted to generic off-the-shelf widgets that rarely match how your business actually operates.',
    },
  ];

  const stackCategories = [
    {
      title: 'Fast, Mobile-First Frontends',
      icon: Code2,
      subtitle: 'Modern interfaces built for mobile conversion',
      items: [
        { name: 'React 19 & Next.js', role: 'Blazing fast page loads & instant navigation', badge: 'Fast' },
        { name: 'Tailwind CSS', role: 'Custom responsive design without generic template bloat', badge: 'Clean' },
        { name: 'React Native & Expo', role: 'Native iOS & Android mobile applications', badge: 'Mobile' },
        { name: 'TypeScript', role: 'Bulletproof type-checking to prevent browser runtime bugs', badge: 'Reliable' },
      ]
    },
    {
      title: 'Secure Data & Business Systems',
      icon: Database,
      subtitle: 'Rock-solid storage and reliable workflows',
      items: [
        { name: 'PostgreSQL & Supabase', role: 'Secure relational database for customer records & bookings', badge: 'Secure' },
        { name: 'Node.js & Python', role: 'Lightweight, fast backend APIs and automation scripts', badge: 'Scalable' },
        { name: 'Stripe Payment Gateway', role: 'Bank-grade credit card, Apple Pay & deposit checkout', badge: 'PCI-DSS' },
        { name: 'Twilio SMS & SendGrid', role: 'Automated 2-way appointment reminders and notifications', badge: 'Instant' },
      ]
    },
    {
      title: 'Cloud Hosting & Continuous Reliability',
      icon: Cloud,
      subtitle: '99.9% uptime infrastructure with zero server maintenance',
      items: [
        { name: 'Vercel & Cloudflare Edge', role: 'Global content delivery with lightning-fast CDN caching', badge: 'Edge' },
        { name: 'AWS & Google Cloud', role: 'Enterprise cloud hosting for databases and custom services', badge: '99.9%' },
        { name: 'Automated Health Monitoring', role: '24/7 error detection and instant uptime alerts', badge: 'Monitored' },
        { name: 'Automated Daily Backups', role: 'Point-in-time database backups protecting your customer data', badge: 'Protected' },
      ]
    },
    {
      title: 'Business App Integrations',
      icon: ShieldCheck,
      subtitle: 'Connecting your existing tools together',
      items: [
        { name: 'QuickBooks & Xero', role: 'Two-way invoice and payment synchronization', badge: 'Accounting' },
        { name: 'Google Workspace & Outlook', role: 'Two-way staff calendar booking synchronization', badge: 'Calendars' },
        { name: 'Google Business & Maps', role: 'Local SEO schema, map pack indexing, and review links', badge: 'Local SEO' },
        { name: 'Square, Toast & Clover', role: 'POS & inventory updates synced with online orders', badge: 'POS Sync' },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 relative bg-black/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Why Growing Businesses Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Built for reliability.{' '}
            <span style={{ color: themeConfig.primaryColor }}>Engineered to last.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We don't rent you cookie-cutter templates or leave you trapped in proprietary page builders. We engineer custom, high-speed digital assets that you own forever.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 mb-10 border-b border-white/10 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('why-us')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'why-us'
                ? 'bg-white/15 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            style={{ borderColor: activeTab === 'why-us' ? themeConfig.primaryColor : undefined }}
          >
            <Zap className="w-4 h-4" style={{ color: activeTab === 'why-us' ? themeConfig.primaryColor : undefined }} />
            <span>Custom Code vs. Template Builders</span>
          </button>

          <button
            onClick={() => setActiveTab('stack')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'stack'
                ? 'bg-white/15 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            style={{ borderColor: activeTab === 'stack' ? themeConfig.primaryColor : undefined }}
          >
            <Layers className="w-4 h-4" style={{ color: activeTab === 'stack' ? themeConfig.primaryColor : undefined }} />
            <span>Modern Reliable Tech Foundations</span>
          </button>

          <button
            onClick={() => setActiveTab('guarantees')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'guarantees'
                ? 'bg-white/15 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            style={{ borderColor: activeTab === 'guarantees' ? themeConfig.primaryColor : undefined }}
          >
            <HeartHandshake className="w-4 h-4" style={{ color: activeTab === 'guarantees' ? themeConfig.primaryColor : undefined }} />
            <span>Our 3 Client Guarantees</span>
          </button>
        </div>

        {/* TAB 1: COMPARISON TABLE */}
        {activeTab === 'why-us' && (
          <div className="rounded-3xl border bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-x-auto" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <th className="pb-4 w-1/4">Key Factor</th>
                  <th className="pb-4 w-5/12 text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    bagOfchips SES Studio
                  </th>
                  <th className="pb-4 w-5/12 text-slate-400">
                    Wix, Squarespace & Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-4 font-bold text-white align-top">
                      {row.feature}
                    </td>
                    <td className="py-4 pr-4 text-slate-200 align-top">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.bagOfchips}</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-400 align-top">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400/70 shrink-0 mt-0.5" />
                        <span>{row.builders}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: MODERN TECH STACK */}
        {activeTab === 'stack' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stackCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all border-glow-hover"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${themeConfig.primaryColor}15`,
                        borderColor: `${themeConfig.primaryColor}40`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: themeConfig.primaryColor }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{category.title}</h3>
                      <p className="text-xs text-slate-400">{category.subtitle}</p>
                    </div>
                  </div>

                  <div className="divide-y divide-white/5">
                    {category.items.map((tech, tIdx) => (
                      <div key={tIdx} className="py-2.5 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-white">{tech.name}</span>
                          <span className="text-slate-400 ml-2 hidden sm:inline">• {tech.role}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300 shrink-0">
                          {tech.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: CLIENT GUARANTEES */}
        {activeTab === 'guarantees' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur-xl space-y-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <FileCheck className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">100% Code & Domain Ownership</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                You own all intellectual property from Day 1. Source code, graphics, accounts, and domain names belong completely to your business. If you ever want to move or change providers, you can take everything with you.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">✓ Zero proprietary lock-in</li>
                <li className="flex items-center gap-2">✓ Direct ownership of your hosting accounts</li>
                <li className="flex items-center gap-2">✓ Clean, documented codebase</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur-xl space-y-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <Zap className="w-8 h-8" style={{ color: themeConfig.primaryColor }} />
              <h3 className="text-lg font-bold text-white">Speed & Performance Guarantee</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Slow websites cost you customers. We guarantee your website will score 90+ on Google Mobile PageSpeed, load under 1.5 seconds, and provide an effortless mobile booking experience.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">✓ Green scores on Google Core Web Vitals</li>
                <li className="flex items-center gap-2">✓ Mobile-optimized image compression</li>
                <li className="flex items-center gap-2">✓ Instant click-to-call response</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur-xl space-y-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <HeartHandshake className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">30 Days Free Support & Training</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We never leave you hanging after launch. Every project includes 30 days of comprehensive support, staff walkthrough videos, and free adjustments so your team feels totally confident.
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">✓ Recorded video tutorials for your staff</li>
                <li className="flex items-center gap-2">✓ Direct phone & messaging support</li>
                <li className="flex items-center gap-2">✓ Free bug fixes and adjustments</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
