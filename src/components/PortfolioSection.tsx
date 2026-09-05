import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { PortfolioItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'growth-website', label: 'Websites' },
    { id: 'customer-portal', label: 'Portals & Booking' },
    { id: 'workflow-automation', label: 'Automations' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-36 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Serene Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Craft in <span className="font-semibold text-white">production.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Bespoke digital flagships, custom customer portals, and automated systems engineered for enduring value.
            </p>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-950 font-semibold shadow-md'
                      : 'text-slate-400 hover:text-white bg-white/3 hover:bg-white/6 border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project Showcase Grid */}
        <div className="space-y-20">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setActiveModalItem(item)}
            >
              {/* Large Cinematic Deliverable Canvas */}
              <div className="relative rounded-[28px] border border-white/8 bg-slate-950/70 overflow-hidden shadow-2xl transition-all duration-700 group-hover:border-white/20 group-hover:shadow-3xl">
                {/* Minimal Window Header */}
                <div className="px-5 py-3 border-b border-white/6 bg-white/2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400">
                      {item.deliverablePreview?.domain || `${item.id}.com`}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.clientType}
                  </span>
                </div>

                {/* Viewport Image */}
                <div className="relative aspect-[16/9] sm:aspect-[21/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Serene Editorial Info Under Image */}
              <div className="mt-6 flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight group-hover:text-slate-200 transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    {item.categoryLabel} · {item.deliverablePreview?.badge || 'Custom Production System'}
                  </p>
                </div>

                {item.clientQuote && (
                  <div className="max-w-md text-left md:text-right">
                    <p className="text-xs sm:text-sm text-slate-300 italic font-light">
                      "{item.clientQuote.quote}"
                    </p>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">
                      — {item.clientQuote.author}, {item.clientQuote.role}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalItem && (
        <ProjectDetailModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
      )}
    </section>
  );
};
