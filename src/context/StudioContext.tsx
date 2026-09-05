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
}

const INITIAL_DEMO_TICKETS: ClientTicket[] = [
  {
    id: 'demo-1',
    ticketCode: 'BOC-4921',
    title: 'Apex Heating & Air — Client Invoicing & Payment Portal',
    category: 'customer-portal',
    status: 'in_sprint',
    priority: 'high',
    clientName: 'Mark Henderson',
    clientEmail: 'mark@apexheatingair.com',
    company: 'Apex Heating & Air Specialists',
    description: 'Field technician mobile work order app and customer self-service billing portal with instant Apple Pay and QuickBooks sync.',
    selectedModules: ['accounting-sync', 'sms-reminders', 'client-vault'],
    estimatedCost: 3800,
    estimatedWeeks: 3,
    submittedAt: '2026-08-20',
    progressPercent: 75,
    milestones: [
      { id: 'm1', title: 'Scope Discovery & Interactive Prototype', status: 'completed', date: 'Aug 22', deliverables: ['Clickable Prototype', 'Invoice Data Flow'] },
      { id: 'm2', title: 'Field Tech Mobile Entry Form', status: 'completed', date: 'Aug 29', deliverables: ['Technician Web App', 'Photo Attachment Support'] },
      { id: 'm3', title: 'Stripe & QuickBooks Accounting Integration', status: 'in_progress', date: 'Sep 04', deliverables: ['Stripe Invoicing Pipeline', 'QuickBooks 2-Way Sync'] },
      { id: 'm4', title: 'Testing & Launch with 30 Days Free Support', status: 'upcoming', date: 'Sep 11', deliverables: ['Domain Cutover', 'Staff Training Video', '100% IP Code Handover'] }
    ]
  },
  {
    id: 'demo-2',
    ticketCode: 'BOC-3108',
    title: 'SweetRise Bakery — Online Catering Configurator & Local SEO',
    category: 'growth-website',
    status: 'qa_testing',
    priority: 'standard',
    clientName: 'Elena Rostova',
    clientEmail: 'elena@sweetrisebakery.com',
    company: 'SweetRise Artisan Bakery',
    description: 'High-converting bakery website with interactive catering platter builder, deposit checkout, and automated Google review requests.',
    selectedModules: ['review-collector', 'sms-reminders'],
    estimatedCost: 1550,
    estimatedWeeks: 2,
    submittedAt: '2026-08-25',
    progressPercent: 90,
    milestones: [
      { id: 'm1', title: 'Menu Discovery & Mobile Design Approval', status: 'completed', date: 'Aug 27', deliverables: ['Brand Color Palette', 'Platter Customizer Prototype'] },
      { id: 'm2', title: 'Catering Engine & Deposit Checkout', status: 'completed', date: 'Sep 01', deliverables: ['Online Ordering Portal', 'Stripe Deposit Gateway'] },
      { id: 'm3', title: 'Google Maps SEO & SMS Notifications', status: 'completed', date: 'Sep 04', deliverables: ['Google Schema Setup', 'Twilio Kitchen Alerts'] },
      { id: 'm4', title: 'Staff Training & Live Launch', status: 'in_progress', date: 'Sep 08', deliverables: ['Staff CMS Walkthrough', '30-Day Support Warranty'] }
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

  const [tickets, setTickets] = useState<ClientTicket[]>(() => {
    try {
      const saved = localStorage.getItem('bagofchips_tickets');
      return saved ? JSON.parse(saved) : INITIAL_DEMO_TICKETS;
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
    localStorage.setItem('bagofchips_tickets', JSON.stringify(tickets));
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
