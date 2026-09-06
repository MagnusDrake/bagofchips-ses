import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ThemeId, ThemeConfig, ClientTicket, PortfolioItem, ProjectCategory } from '../types';
import { THEMES } from '../data/themesData';

export type TicketInput = Omit<ClientTicket, 'id' | 'ticketCode' | 'submittedAt' | 'progressPercent' | 'milestones' | 'status'> & {
  status?: ClientTicket['status'];
};

interface StudioContextType {
  theme: ThemeId;
  themeConfig: ThemeConfig;
  setTheme: (theme: ThemeId) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  tickets: ClientTicket[];
  addTicket: (ticket: TicketInput) => ClientTicket;
  selectedPortfolio: PortfolioItem | null;
  setSelectedPortfolio: (item: PortfolioItem | null) => void;
  activeCategoryFilter: ProjectCategory | 'all';
  setActiveCategoryFilter: (category: ProjectCategory | 'all') => void;
  openConfiguratorWithCategory: (category: ProjectCategory) => void;
  isQuickEstimatorOpen: boolean;
  setIsQuickEstimatorOpen: (open: boolean) => void;
  activeMockupId: string | null;
  openMockup: (id: string) => void;
  closeMockup: () => void;
}

const INITIAL_DEMO_TICKETS: ClientTicket[] = [
  {
    id: 'boc-8104',
    ticketCode: 'BOC-8104',
    title: 'BOC-8104 • Apex HVAC Dispatch & Customer Invoicing Portal',
    category: 'customer-portal',
    status: 'in_sprint',
    priority: 'high',
    clientName: 'Mark Henderson',
    clientEmail: 'mark@apexheatingair.com',
    company: 'Apex Heating & Air Specialists',
    description: 'Customer portal with online service dispatch, QuickBooks sync, and 1-click mobile invoice settlement.',
    selectedModules: ['accounting-sync', 'sms-reminders', 'client-vault'],
    estimatedCost: 3400,
    estimatedWeeks: 3,
    submittedAt: '2026-08-18',
    progressPercent: 85,
    milestones: [
      { id: 'm1', title: 'Schema & Work Order Data Model', status: 'completed', date: 'Aug 18', deliverables: ['Work Order Data Model', 'Clickable Prototype'] },
      { id: 'm2', title: 'QuickBooks & Stripe Payment Sync', status: 'completed', date: 'Aug 24', deliverables: ['Stripe Invoicing Pipeline', 'QuickBooks 2-Way Sync'] },
      { id: 'm3', title: 'Field Tech Mobile Console & Dispatch Routing', status: 'completed', date: 'Aug 28', deliverables: ['Technician Mobile Console', 'Route Dispatch Mapping'] },
      { id: 'm4', title: 'Automated 2-Way SMS Reminders & QA', status: 'in_progress', date: 'Sep 03', deliverables: ['Twilio 2-Way SMS Gateway', 'End-to-End Test Suite'] },
      { id: 'm5', title: 'Staff Training & Production Launch', status: 'upcoming', date: 'Sep 08', deliverables: ['Staff Training Video', 'Domain SSL Cutover', '30 Days Free Support'] }
    ]
  },
  {
    id: 'boc-5290',
    ticketCode: 'BOC-5290',
    title: 'BOC-5290 • SweetRise Bakery Catering & Ordering Engine',
    category: 'growth-website',
    status: 'in_sprint',
    priority: 'standard',
    clientName: 'Elena Rostova',
    clientEmail: 'elena@sweetrisebakery.com',
    company: 'SweetRise Artisan Bakery',
    description: 'Custom cake quote builder, deposit engine, and kitchen calendar sync.',
    selectedModules: ['review-collector', 'sms-reminders', 'calendar-sync'],
    estimatedCost: 1800,
    estimatedWeeks: 2,
    submittedAt: '2026-08-25',
    progressPercent: 45,
    milestones: [
      { id: 'm1', title: 'Menu Discovery & Mobile Design Approval', status: 'completed', date: 'Aug 26', deliverables: ['Brand Color Palette', 'Platter Customizer Prototype'] },
      { id: 'm2', title: 'Custom Cake Quote Builder & Calendar Sync', status: 'completed', date: 'Sep 01', deliverables: ['Interactive Quote Calculator', 'Google Kitchen Calendar Sync'] },
      { id: 'm3', title: 'Stripe Deposit Processing & Email Alerts', status: 'in_progress', date: 'Sep 05', deliverables: ['50% Deposit Gateway', 'Automated SMS Alerts'] },
      { id: 'm4', title: 'Final Testing & Staff Training', status: 'upcoming', date: 'Sep 10', deliverables: ['Local SEO Setup', 'Staff Handover Walkthrough', '30 Days Free Support'] }
    ]
  }
];

const StudioContext = createContext<StudioContextType | undefined>(undefined);

export const StudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    const saved = localStorage.getItem('bagofchips_theme') as ThemeId;
    return saved && THEMES[saved] ? saved : 'midnight';
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<ProjectCategory | 'all'>('all');
  const [isQuickEstimatorOpen, setIsQuickEstimatorOpen] = useState<boolean>(false);
  const [activeMockupId, setActiveMockupId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#demo=')) {
        return hash.replace('#demo=', '');
      }
    }
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#demo=')) {
        setActiveMockupId(hash.replace('#demo=', ''));
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openMockup = (id: string) => {
    setActiveMockupId(id);
    if (typeof window !== 'undefined') {
      window.location.hash = `demo=${id}`;
    }
  };

  const closeMockup = () => {
    setActiveMockupId(null);
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#demo=')) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const [tickets, setTickets] = useState<ClientTicket[]>(() => {
    try {
      const saved = localStorage.getItem('bagofchips_tickets_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Clear any old tickets or legacy titles if found
        const hasLegacy = parsed.some((t: any) =>
          t.title?.includes('PulseSync') ||
          t.title?.includes('HyperSpeed') ||
          t.title?.includes('ChipCrush') ||
          t.id === 'demo-1' ||
          t.id === 'demo-2'
        );
        if (!hasLegacy && Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return INITIAL_DEMO_TICKETS;
    } catch {
      return INITIAL_DEMO_TICKETS;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-neon', 'theme-graffiti', 'theme-matte', 'theme-midnight');
    root.classList.add(`theme-${theme}`);
    localStorage.setItem('bagofchips_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('bagofchips_tickets_v3', JSON.stringify(tickets));
    // Clean up outdated legacy keys
    try {
      localStorage.removeItem('bagofchips_tickets');
      localStorage.removeItem('bagofchips_tickets_v2');
    } catch {
      // Ignore
    }
  }, [tickets]);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
  };

  const addTicket = (ticketData: TicketInput): ClientTicket => {
    const randomCode = `BOC-${Math.floor(1000 + Math.random() * 9000)}`;
    const newTicket: ClientTicket = {
      ...ticketData,
      id: `ticket-${Date.now()}`,
      ticketCode: randomCode,
      submittedAt: new Date().toISOString().split('T')[0],
      status: ticketData.status || 'scoping',
      progressPercent: 20,
      milestones: [
        { id: 'm1', title: 'Discovery Call & Scope Blueprint', status: 'in_progress', date: 'Week 1', deliverables: ['Clear Fixed-Price Scope', 'Site Architecture Plan'] },
        { id: 'm2', title: 'Interactive Clickable Prototype', status: 'upcoming', date: 'Week 1-2', deliverables: ['Clickable Design Mockup', 'Client Flow Approval'] },
        { id: 'm3', title: 'Core Build & Milestone Demos', status: 'upcoming', date: 'Week 2-3', deliverables: ['Staging Access', 'Weekly Demo Video'] },
        { id: 'm4', title: 'Launch & 30 Days Free Support', status: 'upcoming', date: 'Week 3-4', deliverables: ['100% Code & Domain Handover', 'Staff Training & Warranty'] }
      ]
    };

    setTickets(prev => [newTicket, ...prev]);
    return newTicket;
  };

  const openConfiguratorWithCategory = (category: ProjectCategory) => {
    setActiveCategoryFilter(category);
    const element = document.getElementById('configurator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StudioContext.Provider
      value={{
        theme,
        themeConfig: THEMES[theme],
        setTheme,
        activeSection,
        setActiveSection,
        tickets,
        addTicket,
        selectedPortfolio,
        setSelectedPortfolio,
        activeCategoryFilter,
        setActiveCategoryFilter,
        openConfiguratorWithCategory,
        isQuickEstimatorOpen,
        setIsQuickEstimatorOpen,
        activeMockupId,
        openMockup,
        closeMockup,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = () => {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return context;
};
