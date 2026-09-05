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
  | 'fullstack-web'
  | 'mobile-app'
  | 'internal-tooling'
  | 'ai-systems'
  | 'interactive-engine';

export interface ArchitecturalModule {
  id: string;
  name: string;
  category: ProjectCategory | 'all';
  description: string;
  technicalSpecs: string;
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
  architecturalHighlights: string[];
  deliverablesIncluded: string[];
  techStack: string[];
  startingPrice: string;
  typicalTimeline: string;
  idealFor: string;
  slaNotes: string;
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
  technicalChallenge: string;
  architectureAndStack: string;
  engineeringImpact: string;
  techList: string[];
  architectureDiagram?: string[];
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
  velocityTier: 'standard' | 'accelerated' | 'turbo';
  title: string;
  description: string;
  clientName: string;
  clientEmail: string;
  company?: string;
}
