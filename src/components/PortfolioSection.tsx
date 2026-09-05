import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { PortfolioItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, FolderKanban, Star } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { themeConfig } = useStudio();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Client Success Stories' },
    { id: 'growth-website', label: 'Websites & Ordering' },
    { id: 'customer-portal', label: 'Customer Portals & Booking' },
    { id: 'workflow-automation', label: 'Workflow Automation' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative bg-black/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <FolderKanban className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Proven Client Results
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Real businesses.{' '}
            <span style={{ color: themeConfig.primaryColor }}>Measurable outcomes.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See how we help contractors, bakeries, medical practices, and delivery fleets replace manual bottlenecks with reliable, custom software that pays for itself.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-white/15 text-white border-white/30 shadow-md scale-102'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
                }`}
                style={{
                  borderColor: isSelected ? themeConfig.primaryColor : undefined,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid: Split Visual Showcase */}
        <div className="space-y-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 shadow-2xl hover:shadow-blue-500/10 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Stat Callout & Prominent Quote */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Category & Client Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider text-slate-200 border border-white/15 bg-white/5"
                    >
                      {item.categoryLabel}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.clientType}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Oversized Metric Callout */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                    <div>
                      <div
                        className="text-3xl sm:text-5xl font-black font-mono tracking-tight bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(135deg, #ffffff 40%, ${themeConfig.primaryColor} 100%)`,
                        }}
                      >
                        {item.heroStat?.value || item.metrics[0].value}
                      </div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                        {item.heroStat?.label || item.metrics[0].label}
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <div className="text-xs font-mono text-emerald-400 font-bold">
                        {item.metrics[1]?.label}: {item.metrics[1]?.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        Verified Client Telemetry
                      </div>
                    </div>
                  </div>

                  {/* Prominent Client Quote */}
                  {item.clientQuote && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-blue-950/25 border border-blue-500/20 space-y-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                        "{item.clientQuote.quote}"
                      </p>
                      <div className="flex items-center gap-2.5 pt-1 border-t border-white/10">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow"
                          style={{ backgroundColor: themeConfig.primaryColor }}
                        >
                          {item.clientQuote.author[0]}
                        </div>
                        <div className="text-xs">
                          <span className="font-bold text-white block">{item.clientQuote.author}</span>
                          <span className="text-[11px] text-slate-400">{item.clientQuote.role}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Before vs After & Interactive Mini Viewport */}
                <div className="lg:col-span-6 space-y-4">
                  {/* Before vs After Micro-Comparison */}
                  <div className="space-y-2.5">
                    {/* Before Tag */}
                    <div className="p-3 rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-200">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30 shrink-0">
                        ❌ BEFORE
                      </span>
                      <span className="leading-snug pt-0.5 font-medium">
                        {item.beforeSummary || item.businessChallenge}
                      </span>
                    </div>

                    {/* After Tag */}
                    <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-200">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                        ✓ AFTER
                      </span>
                      <span className="leading-snug pt-0.5 font-bold">
                        {item.afterSummary || item.businessImpact}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Mini UI Viewport Preview */}
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="rounded-2xl border border-white/15 bg-black/60 overflow-hidden shadow-xl hover:border-white/30 transition-all cursor-pointer group/viewport"
                  >
                    {/* Viewport Chrome Bar */}
                    <div className="px-3.5 py-2.5 border-b border-white/10 bg-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                          {item.deliverablePreview?.domain || `${item.id}.app`}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {item.deliverablePreview?.badge || 'Live Deliverable'}
                      </span>
                    </div>

                    {/* Mini Viewport Body */}
                    <div className="relative aspect-[16/8] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/viewport:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Floating Deliverable Feature Pills */}
                      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {(item.deliverablePreview?.items || item.tags.slice(0, 2)).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/70 border border-white/20 text-slate-200 backdrop-blur-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-300 group-hover/viewport:translate-x-0.5 transition-transform">
                          <span>Inspect Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {activeModalItem && (
        <ProjectDetailModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
      )}
    </section>
  );
};
