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
    ticketCode: 'BOC-9481',
    title: 'PulseSync Mobile Health Companion',
    category: 'mobile',
    status: 'qa_testing',
    priority: 'high',
    clientName: 'Sarah Lin',
    clientEmail: 'sarah@healthsync.io',
    company: 'HealthSync Labs',
    description: '120fps React Native health companion with Apple HealthKit & on-device AI readiness score.',
    selectedFeatures: ['auth', 'offline-sync', 'push-notifications', 'app-store-launch'],
    estimatedCost: 5200,
    estimatedWeeks: 4,
    submittedAt: '2026-08-15',
    progressPercent: 85,
    milestones: [
      { id: 'm1', title: 'Architecture & UX Wireframes', status: 'completed', date: 'Aug 18', deliverables: ['Figma Prototype', 'Data Model'] },
      { id: 'm2', title: 'HealthKit & BLE Sensor Sync', status: 'completed', date: 'Aug 24', deliverables: ['Sync Engine', 'SQLite DB'] },
      { id: 'm3', title: 'On-Device AI Recommendation Engine', status: 'completed', date: 'Aug 28', deliverables: ['Readiness Model'] },
      { id: 'm4', title: 'QA Stress Testing & TestFlight Build', status: 'in_progress', date: 'Sep 03', deliverables: ['TestFlight v0.9.4', 'Bug Triage'] },
      { id: 'm5', title: 'App Store & Google Play Launch', status: 'upcoming', date: 'Sep 08', deliverables: ['Store Assets', 'Prod Deployment'] }
    ]
  },
  {
    id: 'demo-2',
    ticketCode: 'BOC-7320',
    title: 'HyperSpeed 3D WebGL Brand Arcade',
    category: 'game',
    status: 'in_sprint',
    priority: 'urgent',
    clientName: 'Marcus Vance',
    clientEmail: 'marcus@nexushardware.com',
    company: 'Nexus Silicon',
    description: 'Browser 3D racing game showcasing next-gen semiconductor speed with global multiplayer leaderboards.',
    selectedFeatures: ['physics-engine', 'leaderboard', 'spatial-audio', '3d-shaders'],
    estimatedCost: 6300,
    estimatedWeeks: 5,
    submittedAt: '2026-08-22',
    progressPercent: 50,
    milestones: [
      { id: 'm1', title: 'Core Three.js Physics Prototype', status: 'completed', date: 'Aug 25', deliverables: ['60FPS Track Demo'] },
      { id: 'm2', title: 'Procedural Circuit Shader FX', status: 'in_progress', date: 'Sep 02', deliverables: ['GLSL Shaders', 'Audio FX'] },
      { id: 'm3', title: 'WebSockets Multiplayer & Leaderboard', status: 'upcoming', date: 'Sep 09', deliverables: ['Redis Ranking Engine'] },
      { id: 'm4', title: 'Live Embed & Campaign Launch', status: 'upcoming', date: 'Sep 16', deliverables: ['Viral Landing Page'] }
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
      progressPercent: 15,
      milestones: [
        { id: 'm1', title: 'Requirements & Scope Finalization', status: 'in_progress', date: 'Within 24 Hours', deliverables: ['Detailed Architecture Spec', 'Sprint Plan'] },
        { id: 'm2', title: 'Sprint 1: Core Foundation & UI Prototype', status: 'upcoming', date: 'Week 1', deliverables: ['Interactive Prototype', 'API Scaffolding'] },
        { id: 'm3', title: 'Sprint 2: Logic & Integration', status: 'upcoming', date: 'Week 2', deliverables: ['Feature Complete Build'] },
        { id: 'm4', title: 'QA Testing, Security & Optimization', status: 'upcoming', date: 'Week 3', deliverables: ['Audit Report', 'Staging Deploy'] },
        { id: 'm5', title: 'Production Launch & Handover', status: 'upcoming', date: 'Week 4', deliverables: ['Full Source IP', 'Docs & Monitoring'] }
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
