import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Platforms & Scalable MVPs',
    category: 'fullstack-web',
    tagline: 'Production-ready web applications architected for scale, performance, and maintainability.',
    shortDesc: 'End-to-end web platforms engineered with Next.js, TypeScript, PostgreSQL, and containerized cloud deployments.',
    fullDesc: 'We architect and build full-stack web platforms and investor-ready MVPs built to scale from day one. Our systems leverage modern server-side rendering, strict end-to-end TypeScript validation, relational data modeling with automated migrations, and enterprise-grade role-based access control (RBAC). Every build includes fully automated CI/CD pipelines, staging environments, and zero technical debt.',
    iconName: 'Globe',
    architecturalHighlights: [
      'Next.js (App Router) with React Server Components & Streaming SSR',
      'Relational PostgreSQL architecture with Prisma/Drizzle ORM & connection pooling',
      'Enterprise Authentication: OAuth 2.0, Magic Links, MFA & session revocation',
      'Stripe integration with idempotent webhook processing & billing ledgers',
      'Containerized Docker deployment with automated GitHub Actions CI/CD',
      'Strict TypeScript type boundaries from database schema to client components'
    ],
    deliverablesIncluded: [
      '100% Source Code & Intellectual Property Handover',
      'Production AWS/GCP Infrastructure as Code (Terraform / Docker)',
      'Automated Test Suite (Vitest unit tests & Playwright E2E)',
      'Comprehensive Architecture & API Documentation',
      '30-Day Post-Launch Engineering SLA & Hypercare'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'AWS'],
    startingPrice: '$3,500',
    typicalTimeline: '2–3 Weeks',
    idealFor: 'Funded founders, SaaS startups, and scaling platforms needing a robust core product.',
    slaNotes: 'Sub-100ms p95 API response times, 99.9% uptime architecture baseline.'
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile Applications',
    category: 'mobile-app',
    tagline: 'Native-feel iOS and Android applications engineered for speed, offline resilience, and hardware integration.',
    shortDesc: 'High-performance mobile apps built with React Native and Flutter, featuring offline sync, background tasks, and native device APIs.',
    fullDesc: 'We engineer cross-platform mobile applications that deliver native 120fps fluidity, biometric security, and flawless offline capabilities. Using a unified modern codebase (React Native or Flutter), we interface with native device hardware (cameras, Bluetooth LE sensors, Apple HealthKit, biometric keychains) and implement conflict-free offline synchronization so your app works seamlessly in low-connectivity environments.',
    iconName: 'Smartphone',
    architecturalHighlights: [
      'Unified React Native / Flutter codebase targeting iOS & Android simultaneously',
      'Offline-First architecture with local SQLite/WatermelonDB & optimistic sync',
      'Hardware integration: Biometrics, BLE sensors, HealthKit, Push Notifications',
      'Secure token storage using iOS Keychain and Android Keystore',
      'Over-the-air (OTA) updates and automated staging release channels',
      'Sub-60ms cold start optimization and memory leak profiling'
    ],
    deliverablesIncluded: [
      'Native iOS & Android Production Application Bundles',
      'Complete App Store Connect & Google Play Console Submission Handling',
      'Backend Edge API Sync Layer & Push Notification Microservice',
      'Design System Components & Mobile UX Specification',
      'Full Source Code & Build Configuration Pipelines'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Flutter', 'SQLite', 'Supabase', 'Apple HealthKit', 'Firebase FCM'],
    startingPrice: '$4,800',
    typicalTimeline: '3–5 Weeks',
    idealFor: 'Digital health, consumer fintech, logistics, and on-demand field services.',
    slaNotes: 'App Store review guarantee, 60fps+ render cadence across iOS & Android test matrices.'
  },
  {
    id: 'internal-tooling',
    title: 'Internal Tooling, ETL Pipelines & Workflow Automation',
    category: 'internal-tooling',
    tagline: 'Bespoke operational software and automated pipelines that eliminate operational bottlenecks.',
    shortDesc: 'Custom operational dashboards, asynchronous background workers, and multi-service data orchestration.',
    fullDesc: 'Eliminate brittle spreadsheets, manual data entry, and fragmented operations. We build tailored internal command centers, automated ETL pipelines, and resilient webhook orchestrators that connect your legacy systems, ERPs, CRM databases, and financial providers. Built with background worker queues and idempotent transaction handling, our automation engines run reliably 24/7 without human intervention.',
    iconName: 'Cpu',
    architecturalHighlights: [
      'Distributed background task processing via BullMQ / Celery & Redis brokers',
      'Idempotent webhook ingestion with automatic retry backoff and dead-letter queues',
      'High-throughput ETL pipelines converting unstructured feeds into relational data',
      'Executive operational dashboards with fine-grained audit logs & RBAC',
      'Two-way synchronization with Salesforce, QuickBooks, Stripe, and custom APIs',
      'Automated PDF invoice generation, data validation, and real-time alerts'
    ],
    deliverablesIncluded: [
      'Dedicated Internal Web Command Center',
      'Automated Worker Service Infrastructure (Dockerized microservices)',
      'Data Integrity & Reconciliation Verification Engine',
      'Telemetry Monitoring with Sentry & OpenTelemetry alerts',
      'Admin Training & API Integration Guides'
    ],
    techStack: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker', 'AWS ECS', 'Tailwind CSS'],
    startingPrice: '$3,200',
    typicalTimeline: '2–3 Weeks',
    idealFor: 'Operations-heavy businesses, logistics fleets, e-commerce scale-ups, and agencies.',
    slaNotes: 'Zero data duplication, transactional consistency, automated error alerting.'
  },
  {
    id: 'ai-systems',
    title: 'Custom AI & Production RAG Knowledge Systems',
    category: 'ai-systems',
    tagline: 'Private, grounded enterprise intelligence engines with vector search, semantic chunking, and verifiable citations.',
    shortDesc: 'Production-grade Retrieval-Augmented Generation (RAG) and intelligent autonomous workflows with strict zero-hallucination boundaries.',
    fullDesc: 'We move beyond superficial chatbot wrappers to architect real enterprise intelligence engines. We build proprietary RAG systems that ingest thousands of internal technical manuals, contracts, medical records, or codebase repositories, index them using state-of-the-art vector embeddings (pgvector/Pinecone), and execute hybrid dense-sparse retrieval with reranking. Our architectures enforce strict context boundaries, token-budget optimization, and citation provenance.',
    iconName: 'Sparkles',
    architecturalHighlights: [
      'Semantic document parsing & recursive chunking for PDFs, docs, and codebases',
      'Hybrid Retrieval: Dense vector embeddings combined with BM25 keyword search',
      'Cross-encoder reranking (Cohere / BGE) to ensure top-1 precision',
      'Hallucination prevention with strict contextual grounding and citation anchors',
      'Private cloud deployment: Zero customer data training or external leakage',
      'Low-latency streaming response protocol with time-to-first-token under 600ms'
    ],
    deliverablesIncluded: [
      'Complete Retrieval & Ingestion Pipeline with Document Watchers',
      'Vector Database Cluster Configuration (pgvector / Pinecone / Qdrant)',
      'Embeddable Studio UI & Developer REST/WebSocket APIs',
      'Evaluation Benchmark Suite measuring precision and hallucination rates',
      'Full Infrastructure Deployment with Latency & Cost Monitoring'
    ],
    techStack: ['Python', 'FastAPI', 'pgvector', 'PostgreSQL', 'LangChain', 'LlamaIndex', 'Pinecone', 'Docker', 'Claude / Gemini API'],
    startingPrice: '$4,500',
    typicalTimeline: '2–4 Weeks',
    idealFor: 'Legal tech, medical devices, enterprise customer intelligence, and complex B2B knowledge bases.',
    slaNotes: '98%+ retrieval precision benchmarks, private tenant data isolation guaranteed.'
  },
  {
    id: 'interactive-engine',
    title: 'High-Performance Interactive 3D & Simulation Engines',
    category: 'interactive-engine',
    tagline: 'Sub-millisecond interactive web simulations, 3D product visualizers, and WebGL experiences.',
    shortDesc: 'Shader-driven 3D web engines and immersive graphics running smoothly at 60fps in any browser without plugins.',
    fullDesc: 'We engineer rich, real-time 3D web applications and technical simulations that run at a locked 60fps across mobile and desktop browsers. Leveraging Three.js, WebGL2, and custom GLSL vertex/fragment shaders, we build interactive product configurators, engineering telemetry simulations, and engaging gamified experiences with zero installation overhead.',
    iconName: 'Gamepad2',
    architecturalHighlights: [
      'Optimized Three.js / WebGL2 rendering pipeline with GPU instancing',
      'Custom GLSL vertex & fragment shaders for dynamic lighting, physics, and particles',
      'Real-time bi-directional telemetry visualization via binary WebSockets',
      'Web Worker offloading for complex physics calculations to prevent main-thread jank',
      'Asset compression via Draco and KTX2 texture optimization',
      'Responsive touch, trackpad, and gyroscope navigation integration'
    ],
    deliverablesIncluded: [
      'Production WebGL Interactive Application Engine',
      'Optimized 3D Asset Pipeline & Shader Libraries',
      'Real-Time Telemetry / Input Control Layer',
      'Cross-Browser & Low-Power Mobile Device Compatibility Guarantee',
      'Full Source Code & Build Configuration'
    ],
    techStack: ['Three.js', 'WebGL2', 'GLSL', 'TypeScript', 'Vite', 'WebSockets', 'Web Workers', 'Web Audio API'],
    startingPrice: '$5,500',
    typicalTimeline: '4–6 Weeks',
    idealFor: 'Hardware manufacturers, automotive & aerospace visualization, viral marketing, and technical training.',
    slaNotes: 'Consistent 60fps render loop target, memory leak profiling for sustained browser sessions.'
  }
];
