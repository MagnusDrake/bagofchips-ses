import type { ArchitecturalModule, ProjectCategory } from '../types';

export interface CategoryPreset {
  id: ProjectCategory;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  baseCost: number;
  baseDays: number;
  iconName: string;
  suggestedModules: string[];
}

export const CATEGORY_PRESETS: CategoryPreset[] = [
  {
    id: 'fullstack-web',
    name: 'Full-Stack Web Platform / MVP',
    badge: 'CORE PLATFORM',
    tagline: 'Production-ready web application with Next.js, PostgreSQL, Auth & Cloud Deploy',
    description: 'Investor-ready SaaS or digital product built with clean architecture, strict TypeScript validation, and scalable cloud infrastructure.',
    baseCost: 3500,
    baseDays: 14,
    iconName: 'Globe',
    suggestedModules: ['auth-rbac', 'relational-db', 'stripe-billing', 'ci-cd-cloud']
  },
  {
    id: 'mobile-app',
    name: 'Cross-Platform Mobile App',
    badge: 'MOBILE SYSTEMS',
    tagline: 'Native-feel iOS & Android application built with React Native or Flutter',
    description: 'Unified cross-platform codebase featuring offline-first data sync, hardware sensor access, biometric security, and push notifications.',
    baseCost: 4800,
    baseDays: 21,
    iconName: 'Smartphone',
    suggestedModules: ['auth-rbac', 'offline-crdt', 'push-engine', 'app-store-deploy']
  },
  {
    id: 'internal-tooling',
    name: 'Internal Tooling & Automation Engine',
    badge: 'WORKFLOW AUTOMATION',
    tagline: 'Custom operational command center, automated ETL pipelines & API connectors',
    description: 'High-reliability workflow software that replaces fragile spreadsheets and manual labor with automated queues and custom dashboards.',
    baseCost: 3200,
    baseDays: 12,
    iconName: 'Cpu',
    suggestedModules: ['async-workers', 'relational-db', 'third-party-apis', 'audit-logging']
  },
  {
    id: 'ai-systems',
    name: 'Custom AI & Production RAG System',
    badge: 'ENTERPRISE INTELLIGENCE',
    tagline: 'Grounded intelligence engine with vector database, hybrid search & private embeddings',
    description: 'Architected enterprise knowledge retrieval with semantic document chunking, strict hallucination guardrails, and sub-second streaming answers.',
    baseCost: 4500,
    baseDays: 16,
    iconName: 'Sparkles',
    suggestedModules: ['rag-vector-search', 'semantic-chunking', 'auth-rbac', 'observability-suite']
  },
  {
    id: 'interactive-engine',
    name: 'High-Performance 3D / Simulation Engine',
    badge: 'GRAPHICS & COMPUTE',
    tagline: 'Interactive 60fps WebGL/Three.js simulation with custom GLSL shaders and real-time telemetry',
    description: 'Sub-millisecond interactive web graphics, 3D product visualizers, and physics simulations that run in any modern web browser.',
    baseCost: 5500,
    baseDays: 24,
    iconName: 'Gamepad2',
    suggestedModules: ['glsl-shaders', 'realtime-websockets', 'ci-cd-cloud', 'observability-suite']
  }
];

export const ARCHITECTURAL_MODULES: ArchitecturalModule[] = [
  // Authentication & Security Tier
  {
    id: 'auth-rbac',
    name: 'Enterprise Auth & Role-Based Access Control',
    category: 'all',
    description: 'Multi-tenant authentication with OAuth 2.0 (Google/GitHub/SAML), magic links, JWT session rotation, and granular RBAC permissions.',
    technicalSpecs: 'OAuth 2.0 / OpenID Connect, Argon2 hashing, stateless JWT session rotation, role & permission guards.',
    baseCost: 650,
    timeDays: 3,
    popular: true,
    iconName: 'Lock'
  },
  {
    id: 'audit-logging',
    name: 'Multi-Tenant Isolation & Audit Trails',
    category: 'all',
    description: 'PostgreSQL Row-Level Security (RLS) ensuring strict tenant data boundaries, accompanied by immutable audit log streams.',
    technicalSpecs: 'PostgreSQL RLS policies, tenant UUID indexing, tamper-evident audit ledger with actor and timestamp telemetry.',
    baseCost: 900,
    timeDays: 4,
    iconName: 'Shield'
  },

  // Data & Cache Architecture
  {
    id: 'relational-db',
    name: 'Production Relational Data Layer',
    category: 'all',
    description: 'Optimized PostgreSQL architecture with Prisma or Drizzle ORM, connection pooling, automated migration runners, and indexing.',
    technicalSpecs: 'PostgreSQL 16, pgBouncer connection pooling, foreign-key constraints, automated rollback-safe migration scripts.',
    baseCost: 750,
    timeDays: 4,
    popular: true,
    iconName: 'Database'
  },
  {
    id: 'redis-cache',
    name: 'Redis Distributed Cache & Rate Limiter',
    category: 'all',
    description: 'Sub-millisecond latency cache layer, distributed session storage, and sliding-window rate limiting to protect upstream services.',
    technicalSpecs: 'Redis Cluster / Upstash, LRU eviction policies, token bucket rate limiter, Pub/Sub channel capability.',
    baseCost: 550,
    timeDays: 3,
    iconName: 'Zap'
  },

  // Payments & Commerce Architecture
  {
    id: 'stripe-billing',
    name: 'Stripe Subscription & Billing Engine',
    category: 'fullstack-web',
    description: 'Tiered recurring subscriptions, usage-based metered billing, automated invoice generation, and idempotent webhook processors.',
    technicalSpecs: 'Stripe API v2024, webhook signature verification with idempotency keys, customer portal integration, tax calculation.',
    baseCost: 850,
    timeDays: 4,
    popular: true,
    iconName: 'CreditCard'
  },

  // Distributed Workers & Async Pipelines
  {
    id: 'async-workers',
    name: 'Asynchronous Job Queue & Worker Pipeline',
    category: 'all',
    description: 'Background worker infrastructure for non-blocking task processing, long-running batch jobs, and automated exponential backoff retries.',
    technicalSpecs: 'BullMQ / Celery with Redis broker, dead-letter queue (DLQ), concurrency throttling, real-time worker metrics.',
    baseCost: 700,
    timeDays: 4,
    popular: true,
    iconName: 'Workflow'
  },
  {
    id: 'third-party-apis',
    name: 'Multi-Provider API Orchestration Layer',
    category: 'all',
    description: 'Resilient bi-directional synchronization connecting CRM (Salesforce/HubSpot), ERP, QuickBooks, or custom external endpoints.',
    technicalSpecs: 'Type-safe SDK clients, rate-limit queueing, retry with jitter, circuit breaker pattern, reconciliation logging.',
    baseCost: 800,
    timeDays: 4,
    iconName: 'Network'
  },

  // Production AI & Retrieval Architecture
  {
    id: 'rag-vector-search',
    name: 'Production RAG & Hybrid Vector Search',
    category: 'ai-systems',
    description: 'Enterprise Retrieval-Augmented Generation using pgvector or Pinecone, combining dense semantic search with sparse BM25 keyword matching.',
    technicalSpecs: 'HNSW index, 1536/3072-dim embeddings, reciprocal rank fusion (RRF), cross-encoder reranking, context boundary enforcement.',
    baseCost: 1400,
    timeDays: 6,
    popular: true,
    iconName: 'BrainCircuit'
  },
  {
    id: 'semantic-chunking',
    name: 'Document Ingestion & Semantic Chunking',
    category: 'ai-systems',
    description: 'Automated ingestion pipeline parsing complex PDFs, markdown, and source code into contextual chunks with metadata provenance.',
    technicalSpecs: 'Recursive character & AST-based chunking, layout-aware PDF extraction, document change detection watchers.',
    baseCost: 950,
    timeDays: 4,
    iconName: 'FileText'
  },

  // Real-Time & Mobile Systems
  {
    id: 'realtime-websockets',
    name: 'Low-Latency WebSockets & Telemetry Sync',
    category: 'all',
    description: 'Bi-directional real-time communication channel for live collaborative dashboards, gaming telemetry, or multi-user state sync.',
    technicalSpecs: 'Binary WebSocket frames, heartbeat ping/pong, presence channels, fallback to SSE (Server-Sent Events).',
    baseCost: 850,
    timeDays: 4,
    iconName: 'Radio'
  },
  {
    id: 'offline-crdt',
    name: 'Offline-First Storage & Conflict-Free Sync',
    category: 'mobile-app',
    description: 'Local on-device SQLite database with optimistic UI updates and CRDT-inspired conflict-free cloud reconciliation when network restores.',
    technicalSpecs: 'WatermelonDB / SQLite local store, vector clocks for conflict resolution, background sync worker.',
    baseCost: 1100,
    timeDays: 5,
    iconName: 'HardDrive'
  },
  {
    id: 'push-engine',
    name: 'Multi-Platform Push Notification Microservice',
    category: 'mobile-app',
    description: 'High-throughput transactional push notifications for iOS and Android with segmented targeting, deep linking, and analytics.',
    technicalSpecs: 'Apple Push Notification Service (APNs) HTTP/2 provider API, Firebase Cloud Messaging (FCM), token lifecycle manager.',
    baseCost: 600,
    timeDays: 3,
    iconName: 'Bell'
  },
  {
    id: 'app-store-deploy',
    name: 'Automated App Store Release Pipeline',
    category: 'mobile-app',
    description: 'Continuous delivery setup using Fastlane to automate iOS TestFlight distribution, Google Play Internal Track builds, and signing credentials.',
    technicalSpecs: 'Fastlane match certificates, automated version incrementation, screenshot generation, store metadata deployment.',
    baseCost: 650,
    timeDays: 3,
    iconName: 'Rocket'
  },

  // Infrastructure & Observability
  {
    id: 'ci-cd-cloud',
    name: 'Containerized Cloud CI/CD & IaC',
    category: 'all',
    description: 'Docker multi-stage builds, automated GitHub Actions testing and deployment pipelines, and reproducible cloud infrastructure on AWS/GCP.',
    technicalSpecs: 'Multi-stage Dockerfile, GitHub Actions workflow with preview environments, AWS ECS / Cloud Run deployment scripts.',
    baseCost: 750,
    timeDays: 3,
    popular: true,
    iconName: 'Cloud'
  },
  {
    id: 'observability-suite',
    name: 'End-to-End Testing & Observability Suite',
    category: 'all',
    description: 'Automated Vitest/Jest unit tests, Playwright end-to-end user flow tests, Sentry exception tracking, and OpenTelemetry performance tracing.',
    technicalSpecs: 'Playwright headless browser suite, Vitest coverage reporting, Sentry distributed tracing, health check probes.',
    baseCost: 650,
    timeDays: 3,
    iconName: 'Activity'
  },
  {
    id: 'glsl-shaders',
    name: 'Custom GLSL Shaders & GPU Optimizations',
    category: 'interactive-engine',
    description: 'Hardware-accelerated vertex and fragment shaders, GPU instanced meshes, and Draco asset compression for uncompromised 60fps.',
    technicalSpecs: 'GLSL ES 3.0 shaders, post-processing pass, Draco geometry decoding, frustum culling, memory leak audits.',
    baseCost: 1200,
    timeDays: 6,
    iconName: 'Eye'
  }
];

export const VELOCITY_TIERS = [
  {
    id: 'standard',
    name: 'Standard Engineering Sprint',
    description: 'Balanced 2-week sprint cycle with bi-weekly deployable milestones and async standups.',
    multiplier: 1.0,
    timeMultiplier: 1.0,
    badge: 'BALANCED CADENCE'
  },
  {
    id: 'accelerated',
    name: 'Accelerated Dedicated Sprint',
    description: 'Dedicated senior engineering pairing, priority PR reviews, and bi-weekly release candidates.',
    multiplier: 1.15,
    timeMultiplier: 0.75,
    badge: 'RECOMMENDED'
  },
  {
    id: 'turbo',
    name: 'High-Throughput Crunch Sprint',
    description: 'Fast-tracked delivery for hard launch deadlines with daily staging drops and dedicated sprint engineer.',
    multiplier: 1.30,
    timeMultiplier: 0.55,
    badge: 'FAST TRACK'
  }
];
