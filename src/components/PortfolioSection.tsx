import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { PortfolioItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { FolderKanban, ArrowUpRight } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { themeConfig } = useStudio();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'starter-web', label: 'Simple Business Sites' },
    { id: 'web', label: 'Web Apps & Portals' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'custom', label: 'Business Automation' },
    { id: 'game', label: 'Playable Games' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative bg-black/50 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <FolderKanban className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              Real Work & Results
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Simple websites to custom apps — <span style={{ color: themeConfig.primaryColor }}>see our work.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how we help local business owners, startups, and creators get software that solves real problems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-white/20 text-white border-white/40 shadow-md scale-105'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10'
                }`}
                style={{
                  borderColor: isSelected ? themeConfig.primaryColor : undefined,
                  color: isSelected ? '#ffffff' : undefined,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer rounded-3xl border bg-white/5 hover:bg-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
              style={{
                borderColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

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

                  {/* Main Metric on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-mono">{item.clientType}</span>
                    <span
                      className="px-2 py-0.5 rounded-md text-xs font-mono font-bold text-black"
                      style={{ backgroundColor: themeConfig.primaryColor }}
                    >
                      {item.metrics[0].label}: {item.metrics[0].value}
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action Link */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span
                  className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  style={{ color: themeConfig.primaryColor }}
                >
                  See Story →
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
