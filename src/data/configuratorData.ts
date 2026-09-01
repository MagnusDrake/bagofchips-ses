import type { FeatureOption, ProjectCategory } from '../types';

export interface CategoryPreset {
  id: ProjectCategory;
  name: string;
  badge: string;
  tagline: string;
  baseCost: number;
  baseDays: number;
  iconName: string;
  suggestedFeatures: string[];
}

export const CATEGORY_PRESETS: CategoryPreset[] = [
  {
    id: 'web',
    name: 'Web Application / SaaS',
    badge: 'HIGH DEMAND',
    tagline: 'Modern, fast, responsive web platform or client-facing SaaS',
    baseCost: 2490,
    baseDays: 14,
    iconName: 'Globe',
    suggestedFeatures: ['auth', 'database', 'payments', 'responsive-ui']
  },
  {
    id: 'mobile',
    name: 'Mobile App (iOS & Android)',
    badge: 'CROSS-PLATFORM',
    tagline: 'Smooth native-feel mobile app on App Store & Google Play',
    baseCost: 3890,
    baseDays: 21,
    iconName: 'Smartphone',
    suggestedFeatures: ['auth', 'push-notifications', 'offline-sync', 'app-store-launch']
  },
  {
    id: 'game',
    name: 'Game / 3D Web Experience',
    badge: 'INTERACTIVE',
    tagline: '2D/3D WebGL game, gamified tool, or physics-driven showcase',
    baseCost: 4200,
    baseDays: 28,
    iconName: 'Gamepad2',
    suggestedFeatures: ['physics-engine', 'leaderboard', 'spatial-audio', '3d-shaders']
  },
  {
    id: 'custom',
    name: 'Custom Software & Automation',
    badge: 'EFFICIENCY BOOST',
    tagline: 'Internal tools, API microservices, and automated data pipelines',
    baseCost: 3150,
    baseDays: 18,
    iconName: 'Cpu',
    suggestedFeatures: ['api-integrations', 'database', 'admin-portal', 'cloud-devops']
  },
  {
    id: 'ai',
    name: 'AI System / Smart Agents',
    badge: 'AI-POWERED',
    tagline: 'RAG knowledge engine, custom autonomous bots, or smart automation',
    baseCost: 3400,
    baseDays: 16,
    iconName: 'Sparkles',
    suggestedFeatures: ['llm-rag', 'semantic-search', 'agent-workflows', 'api-integrations']
  }
];

export const FEATURE_OPTIONS: FeatureOption[] = [
  {
    id: 'auth',
    name: 'User Auth & Role Permissions',
    description: 'Email/password, Google/OAuth, JWT session management, and RBAC admin roles.',
    category: 'all',
    baseCost: 450,
    timeDays: 3,
    popular: true,
    iconName: 'Lock'
  },
  {
    id: 'database',
    name: 'Database Architecture & API',
    description: 'PostgreSQL/Supabase schema design, automated migrations, and optimized queries.',
    category: 'all',
    baseCost: 550,
    timeDays: 4,
    popular: true,
    iconName: 'Database'
  },
  {
    id: 'payments',
    name: 'Stripe & Subscription Payments',
    description: 'Credit card checkout, recurring tier billing, customer portal, and invoice receipts.',
    category: 'web',
    baseCost: 650,
    timeDays: 4,
    popular: true,
    iconName: 'CreditCard'
  },
  {
    id: 'admin-portal',
    name: 'Admin Command Center',
    description: 'Internal dashboard to manage users, inspect system analytics, and edit content.',
    category: 'all',
    baseCost: 750,
    timeDays: 5,
    popular: true,
    iconName: 'LayoutDashboard'
  },
  {
    id: 'responsive-ui',
    name: 'Custom UI/UX & Micro-Animations',
    description: 'Pixel-perfect responsive design with dark mode, fluid gestures, and brand identity.',
    category: 'web',
    baseCost: 600,
    timeDays: 4,
    popular: true,
    iconName: 'Palette'
  },
  {
    id: 'push-notifications',
    name: 'Push Notifications & Alerts',
    description: 'Automated engagement push alerts, segmented messaging, and badge counts.',
    category: 'mobile',
    baseCost: 450,
    timeDays: 3,
    popular: true,
    iconName: 'Bell'
  },
  {
    id: 'offline-sync',
    name: 'Offline-First Local Storage',
    description: 'Full functionality without internet, automatic conflict resolution on reconnect.',
    category: 'mobile',
    baseCost: 700,
    timeDays: 5,
    iconName: 'WifiOff'
  },
  {
    id: 'app-store-launch',
    name: 'App Store & Play Store Publishing',
    description: 'Screenshots, metadata, privacy compliance, and end-to-end store review approval.',
    category: 'mobile',
    baseCost: 500,
    timeDays: 3,
    iconName: 'Rocket'
  },
  {
    id: 'physics-engine',
    name: 'Physics & Collision Mechanics',
    description: 'Realistic gravity, rigid body physics, collision responses, and particle sparks.',
    category: 'game',
    baseCost: 800,
    timeDays: 6,
    popular: true,
    iconName: 'Zap'
  },
  {
    id: 'leaderboard',
    name: 'Global Real-time Leaderboards',
    description: 'Live high score tracking, anti-cheat validation, and friend rankings.',
    category: 'game',
    baseCost: 450,
    timeDays: 3,
    iconName: 'Trophy'
  },
  {
    id: 'spatial-audio',
    name: 'Dynamic WebAudio & SFX',
    description: 'Adaptive soundtrack, spatial 3D audio, and punchy interactive sound effects.',
    category: 'game',
    baseCost: 400,
    timeDays: 2,
    iconName: 'Volume2'
  },
  {
    id: '3d-shaders',
    name: 'Custom 3D Shaders & Lighting',
    description: 'GLSL custom post-processing, bloom, reflections, and hologram effects.',
    category: 'game',
    baseCost: 850,
    timeDays: 6,
    iconName: 'Eye'
  },
  {
    id: 'llm-rag',
    name: 'Custom RAG / Vector Knowledge Base',
    description: 'Ingest company PDFs, docs, and URLs for hallucination-free AI answers.',
    category: 'ai',
    baseCost: 950,
    timeDays: 6,
    popular: true,
    iconName: 'BrainCircuit'
  },
  {
    id: 'agent-workflows',
    name: 'Autonomous Agent Workflows',
    description: 'Multi-step AI actions (fetching data, generating reports, emailing results).',
    category: 'ai',
    baseCost: 900,
    timeDays: 5,
    popular: true,
    iconName: 'Bot'
  },
  {
    id: 'semantic-search',
    name: 'Semantic & Vector Search Engine',
    description: 'Find records by intent and concept rather than exact keyword matches.',
    category: 'ai',
    baseCost: 650,
    timeDays: 4,
    iconName: 'Search'
  },
  {
    id: 'api-integrations',
    name: '3rd-Party API & Webhook Integrations',
    description: 'Connect to Salesforce, Slack, HubSpot, QuickBooks, Shopify, or custom APIs.',
    category: 'custom',
    baseCost: 550,
    timeDays: 3,
    popular: true,
    iconName: 'Workflow'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & CI/CD Pipeline',
    description: 'Docker containerization, AWS/GCP automated deployments, and SSL certs.',
    category: 'all',
    baseCost: 500,
    timeDays: 3,
    iconName: 'Cloud'
  }
];

export const TIMELINE_URGENCIES = [
  {
    id: 'chill',
    name: 'Standard Sprint',
    description: 'Steady, budget-optimized agile progression.',
    multiplier: 1.0,
    timeMultiplier: 1.0,
    badge: 'BALANCED'
  },
  {
    id: 'standard',
    name: 'Priority Sprint',
    description: 'Dedicated focus with weekly milestone demos.',
    multiplier: 1.15,
    timeMultiplier: 0.8,
    badge: 'RECOMMENDED'
  },
  {
    id: 'turbo',
    name: 'Crunch Mode (Turbo)',
    description: 'Max engineering velocity for tight launch deadlines.',
    multiplier: 1.35,
    timeMultiplier: 0.55,
    badge: 'SPEEDRUN'
  }
];
