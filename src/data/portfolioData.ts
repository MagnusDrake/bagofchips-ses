import type { PortfolioItem } from '../types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'orbit-ops',
    title: 'OrbitOps — Autonomous Telemetry & Route Optimization Engine',
    category: 'internal-tooling',
    categoryLabel: 'Internal Tooling & Automation',
    tagline: 'High-throughput Go microservices & real-time WebSocket telemetry for 1,200+ fleet vehicles.',
    clientType: 'Logistics & Supply Chain Co.',
    tags: ['Go', 'WebSockets', 'TimescaleDB', 'Redis', 'Docker', 'AWS ECS'],
    metrics: [
      { label: 'Dispatch Latency', value: '-68% (p95: 45ms)' },
      { label: 'Annual Operational Savings', value: '$240,000/yr' },
      { label: 'System Uptime SLA', value: '99.98%' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    technicalChallenge: 'The client operated 1,200+ delivery vehicles generating over 45,000 telemetry events per minute. Their legacy REST-polling architecture suffered from severe database lock contention, 800ms+ API latency spikes, and stale dispatch routes that caused driver delays during morning peak surges.',
    architectureAndStack: 'Engineered a distributed event-driven telemetry engine using Go microservices connected to a Redis Pub/Sub message broker. Time-series data streams into PostgreSQL configured with TimescaleDB hyper-tables for sub-millisecond aggregations. Bi-directional binary WebSockets broadcast vehicle state to an executive React dispatch console containerized on AWS ECS.',
    engineeringImpact: 'Reduced dispatch p95 latency by 68% (from 840ms to 45ms), eliminated all database lock contention, and automated driver routing—saving over $240,000 annually in fuel and overtime across 14 consecutive months with 99.98% uptime.',
    techList: ['Go (Golang)', 'Redis Pub/Sub', 'PostgreSQL / TimescaleDB', 'WebSockets', 'Docker', 'AWS ECS', 'TypeScript', 'React'],
    architectureDiagram: ['GPS Telemetry Event', 'Go WebSocket Ingestion Gateway', 'Redis Pub/Sub Broker', 'TimescaleDB Hyper-Tables', 'Dispatch Command Console']
  },
  {
    id: 'pulse-sync',
    title: 'PulseSync — High-Frequency Biometric Streaming Platform',
    category: 'mobile-app',
    categoryLabel: 'Cross-Platform Mobile Application',
    tagline: '120fps React Native health engine with offline CRDT sync and on-device machine learning.',
    clientType: 'Digital Health & Sports Science Startup',
    tags: ['React Native', 'Apple HealthKit', 'SQLite CRDT', 'Supabase', 'TypeScript'],
    metrics: [
      { label: 'Daily Active Athletes', value: '45,000+' },
      { label: 'Offline Data Loss', value: '0.00%' },
      { label: 'UI Frame Cadence', value: 'Locked 120fps' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    technicalChallenge: 'Ingesting continuous biometric streams (heart rate variability, VO2 max, sleep telemetry) across Apple HealthKit and Android BLE sensors without draining mobile battery life. The app had to guarantee zero data loss during high-intensity workouts in remote mountain trails with intermittent cellular connectivity.',
    architectureAndStack: 'Architected a cross-platform mobile application in React Native and TypeScript utilizing an offline-first architecture powered by local SQLite with CRDT (Conflict-free Replicated Data Types). When network connection restores, differential synchronization batches upload to Supabase Edge Functions. On-device CoreML executes athlete readiness inference locally with zero cloud round-trip delay.',
    engineeringImpact: 'Scaled seamlessly to 45,000+ daily active athletes with zero recorded offline data loss incidents. Reduced cold start time to under 60ms, maintained a locked 120fps fluid UI render cycle, and achieved a 4.9★ rating on the Apple App Store.',
    techList: ['React Native', 'TypeScript', 'Apple HealthKit API', 'BLE Peripheral Stack', 'SQLite / WatermelonDB', 'Supabase Edge Functions', 'CoreML'],
    architectureDiagram: ['BLE Sensor Feed', 'On-Device CoreML Filter', 'Local SQLite CRDT Store', 'Background Sync Worker', 'Supabase Edge Replicator']
  },
  {
    id: 'docusense-ai',
    title: 'DocuSense AI — Production Enterprise RAG Knowledge System',
    category: 'ai-systems',
    categoryLabel: 'Custom AI & Knowledge System',
    tagline: 'Grounded intelligence engine indexing 50k+ technical specs with hybrid vector search & zero hallucinations.',
    clientType: 'Enterprise B2B Compliance & Legal Tech',
    tags: ['Python', 'FastAPI', 'pgvector', 'Hybrid Search', 'Cohere Rerank', 'Docker'],
    metrics: [
      { label: 'Retrieval Precision', value: '98.4% Top-1' },
      { label: 'Time to First Token', value: '520ms (p90)' },
      { label: 'Weekly Hours Saved', value: '40+ hrs/team' }
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    technicalChallenge: 'Legal compliance analysts spent hours cross-referencing conflicting clauses across 50,000+ technical PDF specifications, ISO standards, and contractual addenda. Off-the-shelf LLMs suffered from hallucinations, missed tabular data, and breached confidentiality compliance rules.',
    architectureAndStack: 'Engineered a private enterprise RAG pipeline using Python and FastAPI. Implemented layout-aware PDF parsing and semantic chunking with metadata lineage anchors. Documents are indexed in PostgreSQL using pgvector (HNSW index) combining dense semantic embeddings with sparse BM25 keyword matching (Reciprocal Rank Fusion). Cohere cross-encoders rerank candidate chunks before passing context to an inference model with strict citation anchors.',
    engineeringImpact: 'Achieved 98.4% retrieval precision on automated test benchmarks with zero hallucinated clause citations. Reduced analyst discovery time by 85% (saving 40+ engineering and legal hours weekly), and lowered p90 streaming latency to 520ms.',
    techList: ['Python', 'FastAPI', 'PostgreSQL / pgvector', 'HNSW Indexing', 'BM25 Keyword Search', 'Cohere Rerank', 'Docker', 'GCP Cloud Run'],
    architectureDiagram: ['PDF Ingestion & OCR', 'Semantic Chunking Engine', 'pgvector Dense + BM25 Sparse Index', 'Cross-Encoder Reranker', 'Streaming Citation UI']
  },
  {
    id: 'finflow-ledger',
    title: 'FinFlow — Multi-Tenant Billing Engine & Financial Ledger',
    category: 'fullstack-web',
    categoryLabel: 'Full-Stack Web Platform',
    tagline: 'High-throughput subscription platform with double-entry ledger and automated webhook reconciliation.',
    clientType: 'B2B SaaS FinTech Scale-Up',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL RLS', 'Prisma', 'Stripe Engine', 'BullMQ'],
    metrics: [
      { label: 'Monthly Processed GMV', value: '$1.8M/mo' },
      { label: 'Reconciliation Discrepancies', value: '0.00%' },
      { label: 'Daily Webhooks Handled', value: '15,000+ events' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    technicalChallenge: 'Processing complex tiered subscriptions, metered usage billing, and international tax calculations across 14 currencies. Race conditions during network drops caused dropped webhook events, delayed customer provisioning, and manual ledger reconciliation headaches.',
    architectureAndStack: 'Architected an immutable double-entry ledger and billing system with Next.js (App Router), TypeScript, and PostgreSQL. Strict Row-Level Security (RLS) guarantees multi-tenant data boundaries. Stripe webhooks are processed asynchronously via BullMQ on Redis with guaranteed idempotency keys, atomic transaction rollbacks, and dead-letter queue alerts.',
    engineeringImpact: 'Automated $1.8M in monthly transaction volume with zero ledger discrepancies or double-billing incidents. Reduced accounting audit time by 82% and processed over 15,000 daily webhook events with sub-10ms acknowledgement times.',
    techList: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL with RLS', 'Prisma ORM', 'Stripe API', 'Redis', 'BullMQ', 'AWS'],
    architectureDiagram: ['Stripe Webhook Event', 'Idempotent Verification Gate', 'BullMQ Worker Queue', 'Atomic DB Transaction', 'Tenant Dashboard Real-Time Push']
  },
  {
    id: 'hyperspeed-3d',
    title: 'HyperSpeed 3D — Shader-Driven WebGL Interactive Simulation',
    category: 'interactive-engine',
    categoryLabel: 'Interactive 3D / Simulation Engine',
    tagline: 'Browser-native 60fps 3D graphics engine with custom GLSL shaders and GPU instancing.',
    clientType: 'High-Performance Semiconductor Brand',
    tags: ['Three.js', 'WebGL2', 'GLSL Shaders', 'Vite', 'TypeScript', 'Web Workers'],
    metrics: [
      { label: 'Mobile 60fps Target', value: '96% of Devices' },
      { label: 'Interactive Sessions', value: '140,000+' },
      { label: 'Conversion Lift', value: '+340%' }
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    technicalChallenge: 'Delivering an uncompromised 60fps interactive 3D physics and shader simulation directly inside the browser for a global hardware product launch. The experience had to run smoothly across low-power mobile phones and high-refresh desktop monitors without requiring any native software installation or plugins.',
    architectureAndStack: 'Engineered a WebGL2 rendering pipeline using Three.js and custom GLSL vertex and fragment shaders. Optimized rendering using GPU instanced meshes, procedural circuit textures, and Draco geometry compression that reduced 3D asset payload sizes by 74%. Offloaded rigid-body physics calculations to background Web Workers to maintain zero main-thread UI jank.',
    engineeringImpact: 'Achieved 140,000+ unique interactive browser sessions with an average dwell time of 8.4 minutes. Maintained a locked 60fps frame rate across 96% of tested mobile devices, resulting in a 340% increase in product launch pre-order conversions.',
    techList: ['Three.js', 'WebGL2', 'GLSL Shaders', 'TypeScript', 'Vite', 'Web Workers', 'Web Audio API', 'Draco Mesh Compression'],
    architectureDiagram: ['Draco 3D Asset Streamer', 'Web Worker Physics Thread', 'Custom GLSL Shader Pipeline', 'GPU Instanced Mesh Render', 'Interactive Camera Rig']
  }
];
