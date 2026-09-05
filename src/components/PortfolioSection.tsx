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

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer rounded-3xl border bg-white/5 hover:bg-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between border-glow-hover"
              style={{
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-200">
                    {item.categoryLabel}
                  </div>

                  {/* Expand icon */}
                  <div
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Top Metric Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-semibold">{item.clientType}</span>
                    <span
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold text-white shadow-md"
                      style={{ backgroundColor: themeConfig.accentColor }}
                    >
                      {item.metrics[0].label}: {item.metrics[0].value}
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                      "{item.tagline}"
                    </p>
                  </div>

                  {/* Business Challenge Snippet */}
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      Business Challenge:
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {item.businessChallenge}
                    </p>
                  </div>

                  {/* Client Quote Preview */}
                  {item.clientQuote && (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2 text-xs text-slate-300 italic">
                      <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5 fill-current" />
                      <p className="line-clamp-2">
                        "{item.clientQuote.quote}" — <span className="text-white not-italic font-semibold">{item.clientQuote.author}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Stack Chips & Action Link */}
              <div className="px-6 pb-6 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
                  {item.techList.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 truncate"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span
                  className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0"
                  style={{ color: themeConfig.primaryColor }}
                >
                  Read Full Case Study →
                </span>
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
