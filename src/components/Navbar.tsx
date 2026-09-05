import React, { useState, useEffect } from 'react';
import { useStudio } from '../context/StudioContext';
import { THEMES } from '../data/themesData';
import type { ThemeId } from '../types';
import {
  Layers,
  Sparkles,
  FolderKanban,
  Activity,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Palette,
  Check,
  Zap
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, setTheme, themeConfig, tickets } = useStudio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services', icon: Layers },
    { name: 'Why Us', href: '#tech-stack', icon: Zap },
    { name: 'How It Works', href: '#process', icon: ShieldCheck },
    { name: 'Case Studies', href: '#portfolio', icon: FolderKanban },
    { name: 'Pricing Estimator', href: '#configurator', icon: Sparkles, highlight: true },
    { name: 'Client Hub', href: '#client-hub', icon: Activity, badge: tickets.length.toString() },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1120]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Studio Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 border border-white/20"
            style={{
              background: `linear-gradient(135deg, ${themeConfig.primaryColor}25, ${themeConfig.accentColor}30)`,
              borderColor: `${themeConfig.primaryColor}60`,
            }}
          >
            <ShieldCheck className="w-5 h-5 transition-transform group-hover:rotate-6 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center">
                bag<span style={{ color: themeConfig.primaryColor }}>Of</span>chips
              </span>
              <span
                className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded tracking-wider border"
                style={{
                  color: themeConfig.primaryColor,
                  borderColor: `${themeConfig.primaryColor}40`,
                  backgroundColor: `${themeConfig.primaryColor}15`,
                }}
              >
                STUDIO
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide -mt-0.5 hidden sm:block">
              Web & App Studio for Growing Businesses
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
                    ? 'text-white bg-blue-600/30 hover:bg-blue-600/40 shadow-sm border border-blue-400/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5 opacity-80" />
                <span>{link.name}</span>
                {link.badge && (
                  <span
                    className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold text-white bg-emerald-500"
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions & Discreet Theme Selector */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Subtle Theme Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Change Studio Style"
            >
              <Palette className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden xl:inline text-[11px]">Theme</span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-white/15 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-mono text-slate-400 px-2 py-1 uppercase tracking-wider border-b border-white/10 mb-1">
                  Studio Theme
                </div>
                {Object.values(THEMES).map((th) => (
                  <button
                    key={th.id}
                    onClick={() => {
                      setTheme(th.id as ThemeId);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full px-2.5 py-1.5 rounded-lg text-left text-xs flex items-center justify-between cursor-pointer transition-colors ${
                      theme === th.id
                        ? 'bg-white/15 text-white font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: th.primaryColor }}
                      />
                      <span>{th.name}</span>
                    </div>
                    {theme === th.id && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:shadow-lg hover:scale-102 active:scale-98 cursor-pointer"
            style={{
              backgroundColor: themeConfig.primaryColor,
              boxShadow: `0 0 20px ${themeConfig.primaryColor}40`,
            }}
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 border border-white/10 text-slate-200 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0b1120]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top">
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
                      className="px-2 py-0.5 rounded-full text-xs font-mono font-bold text-white bg-emerald-500"
                    >
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between px-2 text-xs text-slate-400">
              <span>Theme:</span>
              <div className="flex gap-2">
                {Object.values(THEMES).map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id as ThemeId)}
                    className={`w-5 h-5 rounded-full border ${theme === th.id ? 'ring-2 ring-white' : ''}`}
                    style={{ backgroundColor: th.primaryColor }}
                    title={th.name}
                  />
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white shadow-lg text-center"
              style={{ backgroundColor: themeConfig.primaryColor }}
            >
              <span>Schedule Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
