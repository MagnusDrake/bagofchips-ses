import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Websites & High-Perf Web Apps',
    category: 'web',
    tagline: 'Lightning fast, modern SaaS platforms and bespoke interactive websites.',
    shortDesc: 'From high-converting brand experiences to complex SaaS web applications with real-time sync, auth, and billing.',
    fullDesc: 'We engineer responsive web solutions engineered with modern React, Next.js, Node.js, and cloud backends. Every page is tuned for sub-second load times, SEO perfection, accessibility, and high conversion.',
    iconName: 'Globe',
    features: [
      'Full-Stack SaaS & Cloud Web Applications',
      'High-Conversion Marketing & Studio Portals',
      'Real-Time Collaborative Dashboards',
      'Stripe & Subscription Monetization Integrations',
      'Database Architecture (PostgreSQL, Supabase, Firebase)',
      'Sub-second Performance & Core Web Vitals Optimization'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase'],
    startingPrice: '$2,490',
    typicalTimeline: '2-4 Weeks',
    flavorQuote: 'Crisp code, zero bloat, instant delight.'
  },
  {
    id: 'mobile-development',
    title: 'iOS & Android Mobile Applications',
    category: 'mobile',
    tagline: 'Fluid cross-platform mobile apps with native 120fps feel.',
    shortDesc: 'Native and hybrid apps for iPhone, iPad, and Android designed for smooth touch interactions and offline capability.',
    fullDesc: 'We construct mobile applications that users love having on their home screen. Using React Native and Flutter, we deliver single-codebase velocity with true 120fps native performance, push notifications, offline syncing, and App Store submission support.',
    iconName: 'Smartphone',
    features: [
      'iOS & Android Cross-Platform Development',
      'Offline-First Data Sync & Device Caching',
      'Push Notifications & User Re-engagement',
      'In-App Purchases, Apple Pay & Google Pay',
      'Biometric Auth (FaceID / Fingerprint)',
      'Full App Store & Google Play Launch Management'
    ],
    techStack: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    startingPrice: '$3,890',
    typicalTimeline: '3-6 Weeks',
    flavorQuote: 'Smooth like melted cheese, built for mobile crunch.'
  },
  {
    id: 'game-development',
    title: 'Interactive Games & 3D Experiences',
    category: 'game',
    tagline: '2D, 3D, WebGL games and gamified brand experiences.',
    shortDesc: 'Addictive gameplay, rich physics, immersive WebGL graphics, and multiplayer mechanics across web and desktop.',
    fullDesc: 'Games solve the hardest problem in tech: true user engagement. We engineer custom 2D/3D games for web (Three.js/Phaser) and standalone engines (Unity/Godot). Perfect for educational tools, interactive marketing campaigns, indie titles, or gamified training simulators.',
    iconName: 'Gamepad2',
    features: [
      'Interactive WebGL & 3D Browser Experiences',
      'Indie 2D/3D Game Prototyping & Production',
      'Gamified Marketing & Viral Engagement Tools',
      'Real-time Multiplayer & WebSocket Leaderboards',
      'Physics Engines & Particle Systems',
      'Spatial Sound & Dynamic Animation Pipelines'
    ],
    techStack: ['Three.js', 'Phaser', 'Unity', 'Godot', 'WebGL', 'WebSockets', 'GLSL Shaders'],
    startingPrice: '$4,200',
    typicalTimeline: '4-8 Weeks',
    flavorQuote: 'Pure adrenaline in every line of gameplay logic.'
  },
  {
    id: 'custom-software',
    title: 'Bespoke Software & Cloud Automations',
    category: 'custom',
    tagline: 'Tailor-made software engines eliminating bottlenecks in your business.',
    shortDesc: 'Automated workflows, custom internal CRM/ERP tools, ETL pipelines, and API integrations that save hundreds of hours.',
    fullDesc: 'When off-the-shelf software falls short, we engineer custom systems tailored to your exact business logic. From automated data ingestion pipelines to internal command centers, we streamline complex workflows and eliminate repetitive manual labor.',
    iconName: 'Cpu',
    features: [
      'Internal Portals & Custom Admin Command Centers',
      'API Development, Webhooks & 3rd-Party Integrations',
      'Automated Document Processing & Ingestion Pipelines',
      'Cloud Architecture (AWS, GCP, Vercel, Docker)',
      'Legacy Codebase Modernization & Refactoring',
      'Performance Tuning & Database Scaling'
    ],
    techStack: ['Python', 'Node.js', 'Go', 'Docker', 'AWS', 'GCP', 'Redis', 'PostgreSQL'],
    startingPrice: '$3,150',
    typicalTimeline: '2-5 Weeks',
    flavorQuote: 'Engineered like an ironclad circuit board.'
  },
  {
    id: 'ai-smart-systems',
    title: 'AI Workflows & Intelligent Agents',
    category: 'ai',
    tagline: 'Harness LLMs, computer vision, and autonomous agents for real problems.',
    shortDesc: 'Practical AI integrations: customer intelligence, smart doc search, generative workflows, and autonomous bots.',
    fullDesc: 'We bridge the gap between bleeding-edge AI models and practical product utility. We build Retrieval-Augmented Generation (RAG) knowledge engines, custom conversational agents, automated visual inspectors, and fine-tuned predictive pipelines that deliver measurable ROI.',
    iconName: 'Sparkles',
    features: [
      'Custom LLM Integration & RAG Knowledge Bases',
      'Automated Autonomous Agents & Task Executors',
      'Smart Semantic Search & Document Analysis',
      'Voice & Multimodal Interactive Assistants',
      'Data Extraction & Classification Models',
      'Cost-Optimized Model Routing (Gemini, Claude, GPT, Open Source)'
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'Vector DBs', 'Gemini API', 'OpenAI', 'Ollama'],
    startingPrice: '$3,400',
    typicalTimeline: '2-4 Weeks',
    flavorQuote: 'Smart chips delivering superhuman efficiency.'
  }
];
