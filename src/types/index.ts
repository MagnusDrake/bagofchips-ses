export type ThemeId = 'midnight' | 'matte' | 'neon' | 'graffiti';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  flavor: string;
  tagline: string;
  image: string;
  primaryColor: string;
  accentColor: string;
  bgHex: string;
  badge: string;
  fontClass: string;
  description: string;
}

export type ProjectCategory = 
  | 'growth-website'
  | 'customer-portal'
  | 'workflow-automation'
  | 'mobile-app';

export interface ArchitecturalModule {
  id: string;
  name: string;
  category: ProjectCategory | 'all';
  description: string;
  businessImpact: string;
  baseCost: number;
  timeDays: number;
  popular?: boolean;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  priceRange: string;
  typicalTimeline: string;
  idealFor: string;
  keyOutcomes: string[];
  deliverablesIncluded: string[];
  techStack: string[];
  startingPrice: string;
  slaNotes?: string;
  previewImage?: string;
  previewUrl?: string;
  previewBadge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  clientType: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  businessChallenge: string;
  solutionDelivered: string;
  businessImpact: string;
  techList: string[];
  heroStat?: {
    value: string;
    label: string;
  };
  beforeSummary?: string;
  afterSummary?: string;
  deliverablePreview?: {
    domain: string;
    title: string;
    badge: string;
    items: string[];
  };
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Milestone {
  id: string;
  title: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  date: string;
  deliverables: string[];
}

export interface ClientTicket {
  id: string;
  ticketCode: string;
  title: string;
  category: ProjectCategory;
  status: 'scoping' | 'in_sprint' | 'qa_testing' | 'deployed';
  priority: 'standard' | 'high' | 'urgent';
  clientName: string;
  clientEmail: string;
  company?: string;
  description: string;
  selectedModules: string[];
  estimatedCost: number;
  estimatedWeeks: number;
  submittedAt: string;
  progressPercent: number;
  milestones: Milestone[];
}

export interface ConfiguratorSelection {
  category: ProjectCategory;
  selectedModules: string[];
  velocityTier: 'standard' | 'priority' | 'rush';
  title: string;
  description: string;
  clientName: string;
  clientEmail: string;
  company?: string;
}
