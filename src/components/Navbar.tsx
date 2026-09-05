import React, { useState, useEffect } from 'react';
import { useStudio } from '../context/StudioContext';
import { THEMES } from '../data/themesData';
import type { ThemeId } from '../types';
import {
  Menu,
  X,
  ArrowRight,
  Palette,
  Check
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, setTheme, themeConfig } = useStudio();
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
    { name: 'Selected Work', href: '#portfolio' },
    { name: 'Disciplines', href: '#services' },
    { name: 'Philosophy', href: '#tech-stack' },
    { name: 'Estimator', href: '#configurator' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Capsule Bar */}
        <div
          className={`w-full flex items-center justify-between px-5 sm:px-6 py-3 rounded-full border transition-all duration-300 backdrop-blur-2xl shadow-xl ${
            scrolled
              ? 'bg-slate-950/85 border-white/12 shadow-black/50'
              : 'bg-slate-950/60 border-white/8 shadow-black/30'
          }`}
        >
          {/* Logo with bagOfchips SES Icon */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-white/15 bg-slate-900 shadow-md group-hover:scale-105 group-hover:border-white/30 transition-all duration-300 shrink-0">
              <img
                src="/bagofchips-icon.png"
                alt="bagOfchips SES"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none rounded-xl"
                style={{ backgroundColor: themeConfig.primaryColor }}
              />
            </div>
            <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              <span>bagOfchips</span>
              <span
                className="font-mono text-xs font-semibold px-1.5 py-0.5 rounded border border-white/10 bg-white/5"
                style={{ color: themeConfig.primaryColor }}
              >
                SES
              </span>
            </span>
          </a>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Discreet Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Aesthetic Style"
              >
                <Palette className="w-3.5 h-3.5" />
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-3 w-44 rounded-2xl bg-slate-900/95 border border-white/12 shadow-2xl p-2 z-50 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] font-mono text-slate-400 px-2 py-1 uppercase tracking-wider border-b border-white/10 mb-1">
                    Aesthetic
                  </div>
                  {Object.values(THEMES).map((th) => (
                    <button
                      key={th.id}
                      onClick={() => {
                        setTheme(th.id as ThemeId);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full px-2.5 py-1.5 rounded-xl text-left text-xs flex items-center justify-between cursor-pointer transition-colors ${
                        theme === th.id
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: th.primaryColor }}
                        />
                        <span>{th.name}</span>
                      </div>
                      {theme === th.id && <Check className="w-3 h-3 text-emerald-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Inquire Button */}
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer flex items-center gap-1.5"
              style={{
                backgroundColor: themeConfig.primaryColor,
              }}
            >
              <span>Inquire</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="max-w-5xl mx-auto mt-2 px-4 pointer-events-auto md:hidden">
          <div className="rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-2xl p-4 shadow-2xl space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between px-3">
              <span className="text-[11px] text-slate-400">Aesthetic:</span>
              <div className="flex gap-2">
                {Object.values(THEMES).map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id as ThemeId)}
                    className={`w-4 h-4 rounded-full border ${theme === th.id ? 'ring-2 ring-white' : ''}`}
                    style={{ backgroundColor: th.primaryColor }}
                    title={th.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
