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
    title: 'PulseSync Sensor Stream & Offline CRDT Engine',
    category: 'mobile-app',
    status: 'qa_testing',
    priority: 'high',
    clientName: 'Engineering Lead (Sports Science Lab)',
    clientEmail: 'lead@healthsync.io',
    company: 'HealthSync Technologies',
    description: 'Continuous biometric sensor sync pipeline across Apple HealthKit & BLE with offline SQLite CRDT local store.',
    selectedModules: ['auth-rbac', 'offline-crdt', 'push-engine', 'app-store-deploy'],
    estimatedCost: 6950,
    estimatedWeeks: 4,
    submittedAt: '2026-08-15',
    progressPercent: 85,
    milestones: [
      { id: 'm1', title: 'Architecture RFC & Data Model Schema', status: 'completed', date: 'Aug 18', deliverables: ['Architecture RFC v1.2', 'Prisma & SQLite Schemas'] },
      { id: 'm2', title: 'BLE Sensor Ingestion & HealthKit Bridge', status: 'completed', date: 'Aug 24', deliverables: ['Hardware Bridge Module', 'Binary Parser'] },
      { id: 'm3', title: 'Offline-First CRDT Sync & Edge Functions', status: 'completed', date: 'Aug 28', deliverables: ['CRDT Vector Clocks', 'Supabase Edge Handler'] },
      { id: 'm4', title: 'Performance Profiling & TestFlight Staging', status: 'in_progress', date: 'Sep 03', deliverables: ['TestFlight v0.9.4 Build', 'Vitest 94% Coverage'] },
      { id: 'm5', title: 'Production App Store Handover', status: 'upcoming', date: 'Sep 10', deliverables: ['Store Production Assets', '100% IP Code Handover'] }
    ]
  },
  {
    id: 'demo-2',
    ticketCode: 'BOC-8210',
    title: 'OrbitOps Telemetry Gateway & Real-Time Dispatch Engine',
    category: 'internal-tooling',
    status: 'in_sprint',
    priority: 'urgent',
    clientName: 'VP of Engineering (Logistics Fleet)',
    clientEmail: 'vpe@orbitlogistics.net',
    company: 'Orbit Logistics Global',
    description: 'High-throughput Go microservices with Redis Pub/Sub, TimescaleDB time-series ingestion, and WebSocket broadcast.',
    selectedModules: ['async-workers', 'relational-db', 'realtime-websockets', 'ci-cd-cloud'],
    estimatedCost: 8150,
    estimatedWeeks: 4,
    submittedAt: '2026-08-22',
    progressPercent: 55,
    milestones: [
      { id: 'm1', title: 'Go Ingestion Protocol & Redis Pub/Sub', status: 'completed', date: 'Aug 25', deliverables: ['Go Gateway Binary', 'Redis Queue Broker'] },
      { id: 'm2', title: 'TimescaleDB Hyper-Tables & Compression', status: 'in_progress', date: 'Sep 02', deliverables: ['TimescaleDB Migration', 'Aggregates API'] },
      { id: 'm3', title: 'Real-Time WebSocket Dispatch Console', status: 'upcoming', date: 'Sep 09', deliverables: ['React Command Console', 'Sub-50ms Telemetry'] },
      { id: 'm4', title: 'AWS ECS Multi-Region Staging & Handover', status: 'upcoming', date: 'Sep 16', deliverables: ['Terraform IaC', 'Full IP Transfer'] }
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
        { id: 'm1', title: 'Technical Discovery & Architectural RFC', status: 'in_progress', date: 'Sprint Kickoff (Day 1-2)', deliverables: ['Architecture RFC Spec', 'Data Model & API Contracts'] },
        { id: 'm2', title: 'Sprint 1: Core Infrastructure & Scaffold', status: 'upcoming', date: 'Week 1', deliverables: ['Containerized Staging', 'DB Migrations & Auth RBAC'] },
        { id: 'm3', title: 'Sprint 2: Core Domain Logic & Integrations', status: 'upcoming', date: 'Week 2', deliverables: ['Feature Complete Build', 'Automated Test Suite'] },
        { id: 'm4', title: 'Security Hardening, Optimization & Staging QA', status: 'upcoming', date: 'Week 3', deliverables: ['Penetration Audit', 'Performance Benchmark Report'] },
        { id: 'm5', title: 'Production Deployment & 100% IP Transfer', status: 'upcoming', date: 'Week 4', deliverables: ['Complete Source Code IP', 'Infrastructure as Code & SLA'] }
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
