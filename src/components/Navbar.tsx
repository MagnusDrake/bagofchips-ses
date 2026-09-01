import React, { useState, useEffect } from 'react';
import { useStudio } from '../context/StudioContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Cpu, Layers, Sparkles, FolderKanban, Workflow, Activity, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { themeConfig, tickets } = useStudio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', icon: Layers },
    { name: 'Portfolio', href: '#portfolio', icon: FolderKanban },
    { name: 'Chip Builder', href: '#configurator', icon: Sparkles, highlight: true },
    { name: 'Process', href: '#process', icon: Workflow },
    { name: 'Client Hub', href: '#client-hub', icon: Activity, badge: tickets.length.toString() },
    { name: 'Contact', href: '#contact', icon: Cpu },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 border border-white/20"
            style={{
              background: `linear-gradient(135deg, ${themeConfig.primaryColor}33, ${themeConfig.accentColor}44)`,
              borderColor: themeConfig.primaryColor,
            }}
          >
            <Cpu className="w-5 h-5 transition-transform group-hover:rotate-12" style={{ color: themeConfig.primaryColor }} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center">
                bag<span style={{ color: themeConfig.primaryColor }}>Of</span>chips
              </span>
              <span
                className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded tracking-widest border"
                style={{
                  color: themeConfig.primaryColor,
                  borderColor: `${themeConfig.primaryColor}55`,
                  backgroundColor: `${themeConfig.primaryColor}15`,
                }}
              >
                SES
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider -mt-0.5 hidden sm:block">
              Software Engineering Studio
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 shadow-inner backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                  link.highlight
                    ? 'text-white bg-white/10 hover:bg-white/20 shadow-sm border border-white/15'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5 opacity-70" />
                <span>{link.name}</span>
                {link.badge && (
                  <span
                    className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold text-black"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Theme Switcher & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeSwitcher variant="navbar" />

          <a
            href="#configurator"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
            style={{
              backgroundColor: themeConfig.primaryColor,
              boxShadow: `0 0 20px ${themeConfig.primaryColor}55`,
            }}
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeSwitcher variant="navbar" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 border border-white/10 text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 opacity-80" style={{ color: themeConfig.primaryColor }} />
                    <span>{link.name}</span>
                  </div>
                  {link.badge && (
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-mono font-bold text-black"
                      style={{ backgroundColor: themeConfig.primaryColor }}
                    >
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href="#configurator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-900 shadow-lg text-center"
              style={{ backgroundColor: themeConfig.primaryColor }}
            >
              <span>Build Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
