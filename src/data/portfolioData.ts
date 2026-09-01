import type { PortfolioItem } from '../types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'orbit-ops',
    title: 'OrbitOps — Real-time Fleet Logistics Engine',
    category: 'custom',
    categoryLabel: 'Enterprise Cloud System',
    tagline: 'Autonomous route optimization & live telemetry for 1,200+ delivery vehicles.',
    description: 'A ground-up custom software solution solving severe delivery latency and driver scheduling headaches for a nationwide logistics provider.',
    clientType: 'Logistics & Supply Chain Co.',
    tags: ['Real-time WebSockets', 'Route Optimization', 'Microservices', 'React + Go'],
    metrics: [
      { label: 'Dispatch Latency', value: '-68%' },
      { label: 'Fuel Cost Savings', value: '$240k/yr' },
      { label: 'Uptime Reliability', value: '99.98%' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Engineered sub-50ms live vehicle telemetry mapping with WebGL canvas',
      'Automated dispatch matching algorithm reducing empty truck miles by 31%',
      'Integrated SMS/WhatsApp dispatch triggers for drivers with zero app friction'
    ],
    problem: 'The client was losing hours daily manually assigning freight routes on outdated spreadsheets, resulting in frequent missed delivery windows.',
    solution: 'Engineered an automated real-time dispatch dashboard with algorithmic route pairing, live driver tracking, and instant automated customer notifications.',
    impact: 'Reduced dispatch labor by 75% and eliminated 92% of missed delivery disputes within the first 60 days.',
    techList: ['Go', 'React', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    demoType: 'case-study'
  },
  {
    id: 'pulse-health',
    title: 'PulseSync — AI Health & Biometric Companion',
    category: 'mobile',
    categoryLabel: 'Cross-Platform Mobile App',
    tagline: '120fps mobile companion tracking sleep, nutrition, and biomarker trends.',
    description: 'A frictionless iOS and Android mobile app designed to convert complex wearable sensor data into actionable daily recovery recommendations.',
    clientType: 'Digital Health Startup',
    tags: ['React Native', 'HealthKit / Google Fit', 'On-device ML', 'FastAPI'],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Active Retention', value: '74% D30' },
      { label: 'Sync Latency', value: '< 200ms' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Bi-directional sync with Apple Watch, Oura, and Garmin health APIs',
      'Offline-first SQLite architecture ensuring snappy instant feedback',
      'Smart micro-habits engine using lightweight on-device ML'
    ],
    problem: 'Users were overwhelmed by raw health metrics from multiple wearables without clear guidance on what to actually do next.',
    solution: 'Designed a calm, gamified mobile experience aggregating multi-device streams into a single "Daily Readiness Score" with 3 personalized micro-actions.',
    impact: 'Grew from 0 to 45,000 active monthly users in 4 months with over 500,000 completed health habits.',
    techList: ['React Native', 'TypeScript', 'Apple HealthKit', 'Google Fit', 'FastAPI', 'Supabase'],
    demoType: 'case-study'
  },
  {
    id: 'cyber-runner-3d',
    title: 'ChipCrush 3D — WebGL Interactive Arcade',
    category: 'game',
    categoryLabel: 'Interactive 3D Web Game',
    tagline: 'High-speed arcade WebGL game running at 60fps directly in the browser.',
    description: 'An interactive 3D web game engineered for a viral marketing campaign, turning semiconductor supply chain concepts into hyper-engaging gameplay.',
    clientType: 'Tech Brand Viral Campaign',
    tags: ['Three.js', 'WebGL', 'GLSL Shaders', 'WebAudio API', 'Leaderboards'],
    metrics: [
      { label: 'Avg Play Time', value: '8.4 mins' },
      { label: 'Viral Shares', value: '38,000+' },
      { label: 'Frame Rate', value: '60 FPS on Mobile' }
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Custom procedural racetrack generation with glowing neon PCB aesthetics',
      'Optimized 3D geometry and compressed textures loading under 2.5MB total',
      'Anti-cheat global multiplayer leaderboard with instant replay sharing'
    ],
    problem: 'The client needed an unconventional, show-stopping interactive campaign to engage developers and tech enthusiasts for their hardware launch.',
    solution: 'Built an instant-loading, addictive 3D arcade runner requiring no installation, complete with retro chip synth audio and global bragging rights.',
    impact: 'Generated 140,000 unique game sessions in the first 2 weeks, driving a 340% increase in product waitlist signups.',
    techList: ['Three.js', 'Vite', 'TypeScript', 'GLSL', 'Howler.js', 'Node.js'],
    demoType: 'interactive'
  },
  {
    id: 'vault-flow',
    title: 'VaultFlow — Next-Gen Treasury & Invoice SaaS',
    category: 'web',
    categoryLabel: 'Full-Stack Web SaaS',
    tagline: 'Modern B2B invoice financing & cash flow forecasting platform.',
    description: 'A lightning-fast financial workspace enabling SMBs to automate invoice chasing, connect bank accounts, and simulate runway scenarios.',
    clientType: 'FinTech Startup',
    tags: ['Next.js 14', 'Tailwind CSS', 'Stripe Billing', 'Plaid API', 'PostgreSQL'],
    metrics: [
      { label: 'Processed Volume', value: '$12M+' },
      { label: 'Time-to-Pay', value: '-14 Days' },
      { label: 'Client Net Promoter', value: '+78 NPS' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Integrated Plaid bank feeds and automated Stripe invoice reconciliation',
      'Interactive visual cash flow projection simulator with real-time recalculations',
      'Enterprise-grade RBAC security and automatic PDF invoice generation'
    ],
    problem: 'Small business owners were losing up to 20 hours a month chasing overdue client invoices and calculating tax reserves by hand.',
    solution: 'Constructed an automated finance hub with 1-click invoice links, smart automated reminder workflows, and live tax estimates.',
    impact: 'Clients reduced unpaid invoice collection delays by 42% on average and eliminated spreadsheet manual entry.',
    techList: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Plaid', 'Stripe', 'Prisma', 'PostgreSQL'],
    demoType: 'case-study'
  },
  {
    id: 'nexus-doc-ai',
    title: 'DocuMind — Enterprise RAG & Contract Intelligence',
    category: 'ai',
    categoryLabel: 'AI & Knowledge Engine',
    tagline: 'Automated legal & technical document analysis with cited source attribution.',
    description: 'Custom AI intelligence tool that digests 5,000+ page enterprise contract archives and answers natural language queries with verifiable line-item citations.',
    clientType: 'Legal & Procurement Firm',
    tags: ['LangChain', 'FastAPI', 'ChromaDB', 'Vector Search', 'React'],
    metrics: [
      { label: 'Review Speed', value: '12x Faster' },
      { label: 'Citation Accuracy', value: '99.2%' },
      { label: 'Doc Ingestion', value: '100 pgs/min' }
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Hybrid semantic vector search + keyword BM25 retrieval for zero hallucinations',
      'Side-by-side PDF previewer with highlighted text span verification',
      'Granular data privacy controls with on-premise LLM support'
    ],
    problem: 'Attorneys spent days manually cross-referencing multi-hundred-page compliance guidelines against vendor contracts.',
    solution: 'Built an enterprise document analyzer that extracts clauses, red-flags indemnification risks, and suggests standardized wording.',
    impact: 'Cut average contract vetting turnaround from 4 days to under 45 minutes.',
    techList: ['Python', 'FastAPI', 'LangChain', 'OpenAI/Gemini', 'ChromaDB', 'React', 'Tailwind'],
    demoType: 'live'
  }
];
