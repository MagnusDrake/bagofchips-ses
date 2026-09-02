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
    id: 'starter-web',
    name: 'Simple Business Website',
    badge: 'STARTER • BEST VALUE',
    tagline: 'Clean, fast website that looks awesome on phones and gets you customers',
    baseCost: 490,
    baseDays: 4,
    iconName: 'Layout',
    suggestedFeatures: ['contact-whatsapp', 'google-maps-seo', 'domain-email']
  },
  {
    id: 'web',
    name: 'Web App & Customer Portal',
    badge: 'GROWTH',
    tagline: 'Interactive website with user logins, online bookings, or client dashboards',
    baseCost: 1890,
    baseDays: 14,
    iconName: 'Globe',
    suggestedFeatures: ['auth', 'database', 'payments', 'admin-portal']
  },
  {
    id: 'mobile',
    name: 'Mobile App (iPhone & Android)',
    badge: 'MOBILE',
    tagline: 'Custom app for your customers with notifications on the App Store & Google Play',
    baseCost: 2990,
    baseDays: 21,
    iconName: 'Smartphone',
    suggestedFeatures: ['auth', 'push-notifications', 'offline-sync', 'app-store-launch']
  },
  {
    id: 'custom',
    name: 'Business Automation & Custom Tool',
    badge: 'SAVE TIME',
    tagline: 'Automate repetitive spreadsheet tasks, sync invoices, and save weekly hours',
    baseCost: 1450,
    baseDays: 10,
    iconName: 'Cpu',
    suggestedFeatures: ['api-integrations', 'database', 'admin-portal']
  },
  {
    id: 'ai',
    name: 'Smart AI Helper & Chatbot',
    badge: 'AI ASSISTANT',
    tagline: '24/7 website chatbot that answers customer questions using your business info',
    baseCost: 1650,
    baseDays: 10,
    iconName: 'Sparkles',
    suggestedFeatures: ['llm-rag', 'contact-whatsapp', 'agent-workflows']
  },
  {
    id: 'game',
    name: 'Playable Web Game / 3D Fun',
    badge: 'INTERACTIVE',
    tagline: '2D/3D browser game or interactive visual experience for brand marketing',
    baseCost: 3200,
    baseDays: 24,
    iconName: 'Gamepad2',
    suggestedFeatures: ['physics-engine', 'leaderboard', 'spatial-audio']
  }
];

export const FEATURE_OPTIONS: FeatureOption[] = [
  // Affordable Small Business Essentials
  {
    id: 'contact-whatsapp',
    name: 'Contact Form & 1-Click WhatsApp Button',
    description: 'Let customers call, text on WhatsApp, or send inquiries straight to your inbox.',
    category: 'all',
    baseCost: 75,
    timeDays: 1,
    popular: true,
    iconName: 'MessageSquare'
  },
  {
    id: 'google-maps-seo',
    name: 'Google Maps Location & Local SEO',
    description: 'Interactive map and search setup so local customers can easily find you on Google.',
    category: 'all',
    baseCost: 95,
    timeDays: 1,
    popular: true,
    iconName: 'MapPin'
  },
  {
    id: 'booking-calendar',
    name: 'Appointment & Booking Calendar',
    description: 'Customers can pick a date and time for consultations, tables, or appointments.',
    category: 'all',
    baseCost: 180,
    timeDays: 2,
    popular: true,
    iconName: 'Calendar'
  },
  {
    id: 'reviews-testimonials',
    name: 'Customer Reviews & Star Ratings',
    description: 'Highlight real client testimonials, Google reviews, and build instant trust.',
    category: 'all',
    baseCost: 80,
    timeDays: 1,
    iconName: 'Star'
  },
  {
    id: 'photo-gallery-menu',
    name: 'Photo Gallery, Food Menu or Price List',
    description: 'Beautiful image showcase or easy-to-read list of your services and prices.',
    category: 'all',
    baseCost: 90,
    timeDays: 1,
    popular: true,
    iconName: 'Image'
  },
  {
    id: 'domain-email',
    name: 'Custom Domain (.com) & Email Connection',
    description: 'We connect your website to your custom web address and professional email.',
    category: 'all',
    baseCost: 85,
    timeDays: 1,
    popular: true,
    iconName: 'Globe'
  },
  {
    id: 'social-feed',
    name: 'Instagram / Social Media Feed',
    description: 'Show your latest Instagram posts or social updates directly on your website.',
    category: 'all',
    baseCost: 75,
    timeDays: 1,
    iconName: 'Share2'
  },

  // Advanced Web & App Features
  {
    id: 'auth',
    name: 'Member Accounts & Secure Login',
    description: 'Password login, Google Sign-In, and private account pages for your customers.',
    category: 'web',
    baseCost: 350,
    timeDays: 3,
    popular: true,
    iconName: 'Lock'
  },
  {
    id: 'payments',
    name: 'Credit Card & Online Payments (Stripe)',
    description: 'Accept card payments, setup recurring subscriptions, and email receipts.',
    category: 'web',
    baseCost: 450,
    timeDays: 3,
    popular: true,
    iconName: 'CreditCard'
  },
  {
    id: 'admin-portal',
    name: 'Simple Admin Dashboard',
    description: 'Easy control panel where you can view leads, update prices, or edit text.',
    category: 'all',
    baseCost: 490,
    timeDays: 4,
    popular: true,
    iconName: 'LayoutDashboard'
  },
  {
    id: 'database',
    name: 'Customer Database & Storage',
    description: 'Organized database to keep all your customer records, files, and orders safe.',
    category: 'all',
    baseCost: 380,
    timeDays: 3,
    iconName: 'Database'
  },

  // Mobile App Features
  {
    id: 'push-notifications',
    name: 'Push Notifications (Alert Customers)',
    description: 'Send alerts, discounts, and updates directly to your users’ phone lock screens.',
    category: 'mobile',
    baseCost: 320,
    timeDays: 2,
    popular: true,
    iconName: 'Bell'
  },
  {
    id: 'offline-sync',
    name: 'Offline Mode (Works without WiFi)',
    description: 'Your app stays fully functional even when internet connection drops.',
    category: 'mobile',
    baseCost: 450,
    timeDays: 3,
    iconName: 'WifiOff'
  },
  {
    id: 'app-store-launch',
    name: 'Apple App Store & Google Play Publishing',
    description: 'We handle all the store rules, screenshots, and launch approval for you.',
    category: 'mobile',
    baseCost: 350,
    timeDays: 2,
    popular: true,
    iconName: 'Rocket'
  },

  // AI & Automation Features
  {
    id: 'llm-rag',
    name: 'AI Chatbot Trained on Your Business',
    description: 'Answers customer questions 24/7 with 100% accurate info from your menu or docs.',
    category: 'ai',
    baseCost: 550,
    timeDays: 4,
    popular: true,
    iconName: 'Bot'
  },
  {
    id: 'agent-workflows',
    name: 'Automated Tasks (Auto-Reply & Reports)',
    description: 'Let software automatically draft emails, send quotes, or sync spreadsheets.',
    category: 'ai',
    baseCost: 490,
    timeDays: 3,
    iconName: 'Zap'
  },
  {
    id: 'api-integrations',
    name: 'Connect Existing Software Tools',
    description: 'Link your website to QuickBooks, Slack, Google Sheets, Mailchimp, or Shopify.',
    category: 'custom',
    baseCost: 380,
    timeDays: 3,
    popular: true,
    iconName: 'Workflow'
  },

  // Interactive & Game Features
  {
    id: 'physics-engine',
    name: 'Interactive Physics & Touch Controls',
    description: 'Smooth game mechanics, fun gravity, and responsive touch/mouse controls.',
    category: 'game',
    baseCost: 650,
    timeDays: 5,
    iconName: 'Gamepad2'
  },
  {
    id: 'leaderboard',
    name: 'Player High Scores & Leaderboard',
    description: 'Display top scores and let players compete with friends.',
    category: 'game',
    baseCost: 350,
    timeDays: 2,
    iconName: 'Trophy'
  },
  {
    id: 'spatial-audio',
    name: 'Fun Sound Effects & Music',
    description: 'Catchy audio, clicks, and background music that bring the experience to life.',
    category: 'game',
    baseCost: 280,
    timeDays: 2,
    iconName: 'Volume2'
  }
];

export const TIMELINE_URGENCIES = [
  {
    id: 'chill',
    name: 'Standard Pace',
    description: 'Steady, budget-friendly delivery.',
    multiplier: 1.0,
    timeMultiplier: 1.0,
    badge: 'BEST VALUE'
  },
  {
    id: 'standard',
    name: 'Priority Pace',
    description: 'Dedicated focus with frequent demo check-ins.',
    multiplier: 1.12,
    timeMultiplier: 0.8,
    badge: 'RECOMMENDED'
  },
  {
    id: 'turbo',
    name: 'Rush / Express Delivery',
    description: 'Fast-tracked engineering for tight deadlines.',
    multiplier: 1.25,
    timeMultiplier: 0.55,
    badge: 'FAST TRACK'
  }
];
