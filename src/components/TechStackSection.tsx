import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import {
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  Layers,
  Terminal,
  Activity,
  FileCheck
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const { themeConfig } = useStudio();
  const [activeTab, setActiveTab] = useState<'stack' | 'ai-arch' | 'standards'>('stack');

  const stackCategories = [
    {
      title: 'Frontend & Mobile Engineering',
      icon: Code2,
      subtitle: 'Type-safe, component-driven client architecture',
      items: [
        { name: 'TypeScript', role: 'End-to-End Type Safety', badge: 'v5.4+' },
        { name: 'Next.js 14 / React 19', role: 'Server Components & Streaming SSR', badge: 'App Router' },
        { name: 'Tailwind CSS', role: 'Utility-first Design Systems', badge: 'v4.0' },
        { name: 'React Native & Flutter', role: 'Cross-Platform Mobile with Native Bridges', badge: '120fps' },
        { name: 'Three.js & WebGL2', role: 'GPU-Accelerated 3D & GLSL Shaders', badge: '60fps' },
      ]
    },
    {
      title: 'Backend & Data Architecture',
      icon: Database,
      subtitle: 'High-throughput relational & distributed persistence',
      items: [
        { name: 'Node.js & Python (FastAPI)', role: 'High-Concurrency Event Loops & Async I/O', badge: 'Async' },
        { name: 'PostgreSQL & pgvector', role: 'Relational Integrity & HNSW Vector Indexing', badge: 'ACID' },
        { name: 'Redis / Upstash', role: 'Distributed Cache, Session Store & Rate Limiting', badge: '<1ms' },
        { name: 'Prisma & Drizzle ORM', role: 'Type-Safe Queries & Migration Verification', badge: 'Schema' },
        { name: 'BullMQ & Celery', role: 'Distributed Asynchronous Task Processing', badge: 'DLQ' },
      ]
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      icon: Cloud,
      subtitle: 'Reproducible, containerized deployments with zero lock-in',
      items: [
        { name: 'Docker & Microservices', role: 'Multi-Stage Production Containerization', badge: 'OCI' },
        { name: 'AWS & Google Cloud', role: 'ECS, Fargate, Cloud Run & S3 Storage', badge: 'Cloud' },
        { name: 'GitHub Actions CI/CD', role: 'Automated Lint, Test, Security & Deploy', badge: 'Automated' },
        { name: 'Playwright & Vitest', role: 'Headless E2E Flow & Unit Regression Testing', badge: 'Coverage' },
        { name: 'Sentry & OpenTelemetry', role: 'Distributed Tracing & Real-Time Performance APM', badge: 'Logs' },
      ]
    },
    {
      title: 'Security, Auth & Compliance',
      icon: ShieldCheck,
      subtitle: 'Defense-in-depth architecture across all system boundaries',
      items: [
        { name: 'OAuth 2.0 & OpenID Connect', role: 'SSO, Magic Links & Multi-Factor Auth (MFA)', badge: 'Auth' },
        { name: 'Row-Level Security (RLS)', role: 'Multi-Tenant Data Isolation at Database Level', badge: 'Zero-Leak' },
        { name: 'Argon2 & JWT Rotation', role: 'Cryptographic Password Hashing & Token Revocation', badge: 'Crypto' },
        { name: 'Data Encryption', role: 'TLS 1.3 in Transit & AES-256 at Rest', badge: 'Encrypted' },
        { name: 'OWASP Hardening', role: 'CORS, CSRF, CSP & Automated Dependency Scans', badge: 'Secured' },
      ]
    }
  ];

  const aiArchitectureSteps = [
    {
      step: '01',
      title: 'Document Ingestion & Semantic Chunking',
      desc: 'Parses complex multi-page PDFs, technical specs, spreadsheets, and markdown into semantically coherent chunks with layout awareness, table preservation, and metadata provenance anchors.'
    },
    {
      step: '02',
      title: 'Dense & Sparse Hybrid Indexing',
      desc: 'Generates 1536/3072-dimensional vector embeddings stored in PostgreSQL via pgvector (HNSW indexing) combined with BM25 sparse keyword indices for exact code & acronym recall.'
    },
    {
      step: '03',
      title: 'Cross-Encoder Re-Ranking',
      desc: 'Candidate passages from both retrieval streams are fused using Reciprocal Rank Fusion (RRF) and scored via a cross-encoder model (Cohere/BGE) to eliminate irrelevant context noise.'
    },
    {
      step: '04',
      title: 'Grounded Generation with Strict Boundaries',
      desc: 'Constrained context injection with hard guardrails against hallucinations. Answers stream via SSE with verified line-item citation coordinates back to the source documents.'
    }
  ];

  return (
    <section id="tech-stack" className="py-24 relative bg-black/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
              Architectural Standards & Tech Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight theme-font-title">
            Engineered for scale. <span style={{ color: themeConfig.primaryColor }}>Zero technical debt.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We don't stitch together fragile no-code hacks or unmaintainable templates. Every line of code is structured with modular software design patterns, strict type safety, automated tests, and production cloud infrastructure.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 mb-10 border-b border-white/10 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'stack'
                ? 'bg-white/15 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            style={{ borderColor: activeTab === 'stack' ? themeConfig.primaryColor : undefined }}
          >
            <Layers className="w-4 h-4" style={{ color: activeTab === 'stack' ? themeConfig.primaryColor : undefined }} />
            <span>Production Tech Stack</span>
          </button>

          <button
            onClick={() => setActiveTab('ai-arch')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'ai-arch'
                ? 'bg-white/15 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            style={{ borderColor: activeTab === 'ai-arch' ? themeConfig.primaryColor : undefined }}
          >
            <BrainCircuit className="w-4 h-4" style={{ color: activeTab === 'ai-arch' ? themeConfig.primaryColor : undefined }} />
            <span>Enterprise AI & RAG Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('standards')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'standards'
                ? 'bg-white/15 text-white border border-white/20 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            style={{ borderColor: activeTab === 'standards' ? themeConfig.primaryColor : undefined }}
          >
            <ShieldCheck className="w-4 h-4" style={{ color: activeTab === 'standards' ? themeConfig.primaryColor : undefined }} />
            <span>Engineering Guarantees & SLAs</span>
          </button>
        </div>

        {/* TAB 1: PRODUCTION TECH STACK */}
        {activeTab === 'stack' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stackCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all border-glow-hover"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${themeConfig.primaryColor}15`,
                        borderColor: `${themeConfig.primaryColor}40`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: themeConfig.primaryColor }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{category.title}</h3>
                      <p className="text-xs text-slate-400">{category.subtitle}</p>
                    </div>
                  </div>

                  <div className="divide-y divide-white/5">
                    {category.items.map((tech, tIdx) => (
                      <div key={tIdx} className="py-2.5 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-white font-mono">{tech.name}</span>
                          <span className="text-slate-400 ml-2 hidden sm:inline">• {tech.role}</span>
                        </div>
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300 shrink-0"
                        >
                          {tech.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: ENTERPRISE AI & RAG ARCHITECTURE */}
        {activeTab === 'ai-arch' && (
          <div className="rounded-3xl border bg-white/5 backdrop-blur-2xl p-6 sm:p-10 space-y-8" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Beyond Basic Chatbot Wrappers
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                How We Architect Production RAG & Knowledge Systems
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Generic LLMs hallucinate and lack private business context. We build deterministic, citation-backed retrieval engines that query thousands of internal documents with sub-second latency and zero data leakage.
              </p>
            </div>

            {/* Step-by-step pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiArchitectureSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3 relative group hover:border-white/20 transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-extrabold text-black"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">98.4%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Top-1 Retrieval Accuracy</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">&lt;600ms</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Time to First Token (TTFT)</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">0% Data</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Used for Public Model Training</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">100%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Verifiable Citation Coordinates</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STANDARDS & SLAS */}
        {activeTab === 'standards' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur-xl space-y-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <FileCheck className="w-8 h-8" style={{ color: themeConfig.primaryColor }} />
              <h3 className="text-lg font-bold text-white">100% Complete IP Ownership</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                You own all intellectual property from Day 1. Source code repositories, cloud infrastructure scripts (Terraform/Docker), database schemas, and documentation are transferred in full. No licensing hostage fees.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">✓ Git commit history & full repo rights</li>
                <li className="flex items-center gap-2">✓ Zero proprietary framework lock-in</li>
                <li className="flex items-center gap-2">✓ Ready for technical investor due diligence</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur-xl space-y-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <Activity className="w-8 h-8" style={{ color: themeConfig.accentColor }} />
              <h3 className="text-lg font-bold text-white">Performance & Latency SLAs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every application we engineer is benchmarked against strict latency budgets. We optimize bundle size, query plans, database indices, and network payloads for blazing speed.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">✓ Sub-100ms p95 API response times</li>
                <li className="flex items-center gap-2">✓ 60fps+ fluid mobile & WebGL animation</li>
                <li className="flex items-center gap-2">✓ Core Web Vitals all green (95+ score)</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur-xl space-y-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <ShieldCheck className="w-8 h-8" style={{ color: themeConfig.primaryColor }} />
              <h3 className="text-lg font-bold text-white">30-Day Hypercare Guarantee</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our engagement doesn't end when the code is pushed. Every project includes 30 days of active post-launch hypercare, bug triage, and cloud monitoring to guarantee flawless operations.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">✓ Direct Slack/Discord channel with engineers</li>
                <li className="flex items-center gap-2">✓ Automated Sentry exception monitoring</li>
                <li className="flex items-center gap-2">✓ 4-hour SLA response for critical bugs</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
