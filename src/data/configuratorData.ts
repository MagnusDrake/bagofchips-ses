import type { ArchitecturalModule, ProjectCategory } from '../types';

export interface CategoryPreset {
  id: ProjectCategory;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  baseCost: number;
  priceRange: string;
  baseDays: number;
  iconName: string;
  suggestedModules: string[];
}

export const STANDARD_INCLUSIONS = [
  { name: 'Mobile-First Responsive Design', desc: 'Flawless presentation across phones, tablets, and desktops.' },
  { name: 'Google Maps & Local SEO Setup', desc: 'Optimized metadata and schema for local Google search results.' },
  { name: 'Quote & Lead Capture Forms', desc: 'Instant email/SMS lead alerts with smart spam filtering.' },
  { name: 'Custom Domain & SSL Routing', desc: 'Bank-grade HTTPS security and custom domain configuration.' },
  { name: '100% Code & Domain Ownership', desc: 'You own everything outright with zero recurring platform lock-in fees.' },
  { name: '30 Days Free Support & Warranty', desc: 'Full training, video walkthroughs, and guaranteed bug resolution.' },
];

export const CATEGORY_PRESETS: CategoryPreset[] = [
  {
    id: 'growth-website',
    name: 'Business Growth Website',
    badge: 'MOST POPULAR FOR SMBS',
    tagline: 'High-converting custom website built to turn local visitors into phone calls and quote requests',
    description: 'Complete custom website with local SEO, fast mobile loading, high-converting call-to-action sections, and an easy visual content editor for your team.',
    baseCost: 1200,
    priceRange: '$1,200 – $1,800',
    baseDays: 12,
    iconName: 'Globe',
    suggestedModules: ['review-collector', 'sms-reminders']
  },
  {
    id: 'customer-portal',
    name: 'Customer Portal & Online Booking',
    badge: 'APPOINTMENTS & ACCOUNTS',
    tagline: 'Self-service client accounts, interactive calendar booking, service history, and online payments',
    description: 'Streamline your booking flow. Clients book appointments in real time, view invoices and estimates, and pay securely with credit card or Apple Pay.',
    baseCost: 2800,
    priceRange: '$2,800 – $4,500',
    baseDays: 20,
    iconName: 'Smartphone',
    suggestedModules: ['sms-reminders', 'calendar-sync', 'client-vault', 'accounting-sync']
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation & Custom Tools',
    badge: 'SAVE 15+ HOURS/WEEK',
    tagline: 'Automate repetitive tasks, sync QuickBooks/Google Sheets, and dispatch leads instantly',
    description: 'Eliminate duplicate spreadsheets and manual data entry. We connect your inquiries, accounting, calendar, and staff dispatch into one automated pipeline.',
    baseCost: 1800,
    priceRange: '$1,800 – $3,200',
    baseDays: 14,
    iconName: 'Cpu',
    suggestedModules: ['accounting-sync', 'review-collector', 'crm-nurture']
  },
  {
    id: 'mobile-app',
    name: 'Custom Mobile App (iOS & Android)',
    badge: 'DEDICATED APP STORES',
    tagline: 'Native iOS & Android app for repeat customer engagement, scheduling, and push notifications',
    description: 'Dedicated mobile presence published to the Apple App Store and Google Play Store. Features instant lockscreen push notifications and offline access.',
    baseCost: 4500,
    priceRange: '$4,500 – $8,000+',
    baseDays: 28,
    iconName: 'Smartphone',
    suggestedModules: ['push-notifications', 'client-vault', 'sms-reminders', 'pos-inventory']
  }
];

export const ARCHITECTURAL_MODULES: ArchitecturalModule[] = [
  {
    id: 'sms-reminders',
    name: 'Automated 2-Way SMS & Reminders',
    category: 'all',
    description: 'Send automated appointment confirmations, 24-hr reminders, and dispatch notices via Twilio SMS to reduce no-shows.',
    businessImpact: 'Cuts customer no-shows by up to 42% and saves front-desk phone time.',
    baseCost: 350,
    timeDays: 2,
    popular: true,
    iconName: 'Bell'
  },
  {
    id: 'accounting-sync',
    name: 'QuickBooks & Xero Accounting Sync',
    category: 'all',
    description: 'Automatically push online orders, customer payments, and client records directly into your accounting software.',
    businessImpact: 'Saves 5+ hours weekly on manual bookkeeping reconciliation and prevents errors.',
    baseCost: 650,
    timeDays: 3,
    popular: true,
    iconName: 'CreditCard'
  },
  {
    id: 'review-collector',
    name: 'Automated 5-Star Review Collector',
    category: 'growth-website',
    description: 'Trigger automated post-job review requests to satisfied clients to steadily build your Google Business 5-star reputation.',
    businessImpact: 'Builds social proof automatically and improves local map pack ranking.',
    baseCost: 300,
    timeDays: 1,
    popular: true,
    iconName: 'Sparkles'
  },
  {
    id: 'calendar-sync',
    name: 'Google & Outlook 2-Way Calendar Sync',
    category: 'customer-portal',
    description: 'Sync booking availability live with your team’s Google Calendar or Outlook to prevent double bookings.',
    businessImpact: 'Real-time schedule synchronization across multiple staff calendars.',
    baseCost: 400,
    timeDays: 2,
    popular: true,
    iconName: 'Workflow'
  },
  {
    id: 'client-vault',
    name: 'Customer Account & Document Vault',
    category: 'customer-portal',
    description: 'Passwordless client login portal to view past work orders, signed PDF estimates, warranties, and invoices.',
    businessImpact: 'Empowers clients with self-service access and reduces repetitive support inquiries.',
    baseCost: 700,
    timeDays: 4,
    popular: true,
    iconName: 'Lock'
  },
  {
    id: 'multi-location',
    name: 'Multi-Location Directory & Territory Filter',
    category: 'growth-website',
    description: 'Interactive map and zip code radius checker routing inquiries directly to the correct branch or field technician.',
    businessImpact: 'Essential for multi-truck operations or businesses serving multiple counties.',
    baseCost: 450,
    timeDays: 2,
    iconName: 'Globe'
  },
  {
    id: 'recurring-billing',
    name: 'Recurring Memberships & Subscriptions',
    category: 'customer-portal',
    description: 'Stripe automated recurring billing for monthly service maintenance plans, gym memberships, or VIP clubs.',
    businessImpact: 'Generates predictable monthly recurring revenue with automated card retry.',
    baseCost: 550,
    timeDays: 3,
    iconName: 'CreditCard'
  },
  {
    id: 'crm-nurture',
    name: 'CRM & Automated Email Nurture',
    category: 'workflow-automation',
    description: 'Connect incoming website leads to HubSpot, Mailchimp, or ActiveCampaign with automated email follow-up sequences.',
    businessImpact: 'Engages prospective clients within 60 seconds of form submission.',
    baseCost: 450,
    timeDays: 2,
    iconName: 'Zap'
  },
  {
    id: 'push-notifications',
    name: 'Lockscreen Push Notification Engine',
    category: 'mobile-app',
    description: 'Send high-priority announcements, flash discounts, or service reminders directly to customers’ mobile lockscreens.',
    businessImpact: 'Delivers 90%+ open rates compared to traditional email marketing.',
    baseCost: 550,
    timeDays: 3,
    popular: true,
    iconName: 'Radio'
  },
  {
    id: 'pos-inventory',
    name: 'Live POS & Inventory Sync',
    category: 'all',
    description: 'Sync menu items, retail inventory, and order tickets with Square, Toast, or Clover POS systems in real time.',
    businessImpact: 'Ensures menu and catalog accuracy with zero double-entry.',
    baseCost: 850,
    timeDays: 4,
    iconName: 'HardDrive'
  }
];

export const VELOCITY_TIERS = [
  {
    id: 'standard',
    name: 'Standard Studio Pace',
    description: 'Carefully paced build with weekly milestone reviews and interactive staging demos.',
    multiplier: 1.0,
    timeMultiplier: 1.0,
    badge: 'BEST VALUE (3–4 WEEKS)'
  },
  {
    id: 'priority',
    name: 'Priority Fast-Track',
    description: 'Dedicated priority queue with expedited design reviews and bi-weekly milestone delivery.',
    multiplier: 1.15,
    timeMultiplier: 0.75,
    badge: 'RECOMMENDED (~2 WEEKS)'
  },
  {
    id: 'rush',
    name: 'Express Sprint',
    description: 'Dedicated developer sprint focused exclusively on your launch to meet strict deadlines.',
    multiplier: 1.30,
    timeMultiplier: 0.55,
    badge: 'EXPRESS (7–10 DAYS)'
  }
];
