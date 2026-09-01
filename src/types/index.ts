export type ThemeId = 'neon' | 'graffiti' | 'matte' | 'midnight';

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

export type ProjectCategory = 'web' | 'mobile' | 'game' | 'custom' | 'ai';

export interface FeatureOption {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory | 'all';
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
  features: string[];
  techStack: string[];
  startingPrice: string;
  typicalTimeline: string;
  flavorQuote: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  clientType: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  themeScreenshot?: string;
  highlights: string[];
  problem: string;
  solution: string;
  impact: string;
  techList: string[];
  demoType: 'live' | 'interactive' | 'case-study';
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
  selectedFeatures: string[];
  estimatedCost: number;
  estimatedWeeks: number;
  submittedAt: string;
  progressPercent: number;
  milestones: Milestone[];
}

export interface ConfiguratorSelection {
  category: ProjectCategory;
  selectedFeatures: string[];
  urgency: 'chill' | 'standard' | 'turbo';
  title: string;
  description: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  budgetCap?: string;
}
