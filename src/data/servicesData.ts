import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'growth-website',
    title: 'Business Growth Website',
    category: 'growth-website',
    tagline: 'Complete custom website built to convert local visitors into phone calls and quote requests.',
    shortDesc: 'Modern, high-converting website engineered to turn traffic into paying clients with local SEO and instant lead capture.',
    fullDesc: 'We design and build custom, conversion-focused websites that position your business as the premier choice in your market. Built from the ground up for speed, Google search visibility, and mobile phones, your new site makes it effortless for potential customers to call, request a quote, or book your services. Includes an easy visual editor so your staff can update content anytime with zero coding knowledge.',
    iconName: 'Globe',
    priceRange: '$1,200 – $1,800',
    typicalTimeline: '2–3 Weeks',
    idealFor: 'Contractors, local service providers, medical clinics, boutique firms, and retail shops.',
    keyOutcomes: [
      'Top Google PageSpeed scores (95+) for maximum local search ranking',
      'Instant SMS/Email notifications sent directly to your phone when a quote is requested',
      'Visual content management system for painless text and photo updates',
      'Mobile-first layout optimized for click-to-call and map directions'
    ],
    deliverablesIncluded: [
      '100% Code & Domain Ownership (Zero platform lock-in fees)',
      'Google Maps, Google Business Profile & Local Schema SEO Setup',
      'High-Converting Quote & Contact Forms with spam protection',
      'Bank-Grade SSL Security & Custom Domain Routing',
      '30 Days of Complimentary Post-Launch Support & Staff Training'
    ],
    techStack: ['React 19', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel / Cloudflare Edge'],
    startingPrice: '$1,200',
    slaNotes: '95+ Google Lighthouse mobile performance guarantee, zero recurring agency licensing fees.'
  },
  {
    id: 'customer-portal',
    title: 'Customer Portal & Online Booking',
    category: 'customer-portal',
    tagline: 'Streamline appointments, client accounts, invoices, and online credit card payments.',
    shortDesc: 'Give your clients a seamless self-service portal to book appointments, review estimates, and pay invoices online.',
    fullDesc: 'Stop playing phone tag and chasing paper checks. We engineer intuitive customer portals that let your clients schedule appointments in real-time, view upcoming service visits, inspect past work reports, and securely pay via credit card or Apple Pay. Your back office gets a clean administrative dashboard that syncs schedules across your entire team.',
    iconName: 'Smartphone',
    priceRange: '$2,800 – $4,500',
    typicalTimeline: '3–5 Weeks',
    idealFor: 'Field service contractors, health & dental clinics, consulting practices, and commercial services.',
    keyOutcomes: [
      'Eliminate 10+ hours per week of manual phone scheduling and billing follow-up',
      'Cut invoice payment cycles from weeks to under 24 hours with online payments',
      'Automated 2-way SMS reminders that cut customer no-shows by up to 40%',
      'Centralized client dashboard for estimates, contracts, and service histories'
    ],
    deliverablesIncluded: [
      'Secure Client Portal with passwordless login or magic links',
      'Real-Time Interactive Booking Calendar with staff availability rules',
      'Stripe Integration for credit cards, deposits, and Apple/Google Pay',
      'Automated 2-Way SMS & Email Confirmation Sequences',
      'Full Database & Admin Management Console'
    ],
    techStack: ['Next.js', 'PostgreSQL / Supabase', 'Stripe API', 'Twilio SMS', 'Tailwind CSS'],
    startingPrice: '$2,800',
    slaNotes: 'PCI-compliant payment architecture, 99.9% booking system uptime guarantee.'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation & Custom Tools',
    category: 'workflow-automation',
    tagline: 'Automate daily repetitive operations, sync accounting systems, and eliminate spreadsheets.',
    shortDesc: 'Connect your favorite business tools to eliminate manual data entry, streamline dispatching, and automate reviews.',
    fullDesc: 'Replace messy spreadsheets and hours of manual copy-pasting with reliable custom software. We connect your website, customer inquiries, QuickBooks/Xero accounting software, Google Sheets, and CRM tools into one smooth, automated workflow. Invoices create themselves, dispatched team members receive instant job details on their phones, and 5-star Google review requests go out automatically after every completed job.',
    iconName: 'Cpu',
    priceRange: '$1,800 – $3,200',
    typicalTimeline: '2–3 Weeks',
    idealFor: 'Growing operations, delivery fleets, trade contractors, property managers, and busy offices.',
    keyOutcomes: [
      'Save 15+ hours every week by eliminating manual data entry between apps',
      'Automatically request 5-star Google reviews after service completion',
      'Sync customer orders and payments directly into QuickBooks or Xero without duplicates',
      'Instant job notifications dispatched to team members via SMS or Slack'
    ],
    deliverablesIncluded: [
      'Custom Operational Web Dashboard or Admin Tool',
      'QuickBooks / Xero Bi-Directional Accounting Sync',
      'Automated Google Review Collection Sequence',
      'Lead Routing & Instant SMS Dispatch Alerts',
      'Detailed Video Walkthrough & Staff Onboarding Guide'
    ],
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'QuickBooks API', 'Google APIs', 'Twilio'],
    startingPrice: '$1,800',
    slaNotes: 'Transactional data consistency, zero lost leads guarantee.'
  },
  {
    id: 'mobile-app',
    title: 'Custom Mobile App (iOS & Android)',
    category: 'mobile-app',
    tagline: 'Dedicated iOS & Android app for repeat customer engagement, scheduling, and push notifications.',
    shortDesc: 'A native mobile app published to the App Store and Google Play that keeps your business on your clients’ home screens.',
    fullDesc: 'Put your brand directly into your customers’ pockets. We build fast, beautiful cross-platform mobile apps for iOS and Android that drive repeat business, loyalty rewards, real-time job status tracking, and direct push notifications. Ideal for field service technicians, fitness & wellness clubs, repeat ordering, or multi-location businesses looking to build deep customer loyalty.',
    iconName: 'Smartphone',
    priceRange: '$4,500 – $8,000+',
    typicalTimeline: '4–6 Weeks',
    idealFor: 'Established service companies, specialty retail, wellness studios, and logistics teams.',
    keyOutcomes: [
      'Direct-to-lockscreen push notifications with 90%+ open rates for announcements & offers',
      'Seamless mobile booking, loyalty points, and one-tap re-ordering',
      'Offline-capable field access for technicians working in low-signal basements or remote sites',
      'Biometric Face ID / Touch ID login for instantaneous user access'
    ],
    deliverablesIncluded: [
      'Native iOS (Apple App Store) & Android (Google Play Store) Applications',
      'Complete App Store Submission, Certification & Review Handling',
      'Push Notification Management Dashboard',
      'Secure Customer Authentication with Biometric Support',
      '100% Codebase Ownership & App Store Account Setup'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Apple APNs', 'Firebase FCM'],
    startingPrice: '$4,500',
    slaNotes: 'Guaranteed App Store & Google Play approval, 30 days of post-launch submission support.'
  }
];
