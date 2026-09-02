import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'starter-website',
    title: 'Simple Business Websites & Landing Pages',
    category: 'starter-web',
    tagline: 'Clean, fast, professional websites that look great on phones and get you customers.',
    shortDesc: 'Perfect for local shops, service businesses, contractors, restaurants, freelancers, and anyone who needs a solid online presence without paying thousands.',
    fullDesc: 'You don’t need an overcomplicated enterprise site just to get your business online. We build fast, beautiful, mobile-friendly websites that showcase your services, display your location on Google Maps, let customers call or message you in one click, and rank well on search engines.',
    iconName: 'Layout',
    features: [
      'Mobile-Friendly & Looks Great on Every Phone',
      'One-Click Call & WhatsApp / Email Contact Forms',
      'Google Maps & Local Search Setup (Get Found Online)',
      'Photo Gallery / Service Menu / Price Lists',
      'Super Fast Load Speeds (Zero Annoying Lag)',
      'Custom Domain (.com) & Business Email Connection'
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Google Maps API', 'Formspree', 'Vercel / Netlify'],
    startingPrice: '$490',
    typicalTimeline: '3–5 Days',
    flavorQuote: 'Affordable, straightforward, and ready to get you more business.',
    bestFor: 'Local businesses, plumbers, restaurants, dentists, personal brands & startups on a budget'
  },
  {
    id: 'web-development',
    title: 'Custom Web Apps & Client Portals',
    category: 'web',
    tagline: 'Interactive websites with user logins, online payments, and customer accounts.',
    shortDesc: 'From client booking platforms and subscription websites to full software products with custom dashboards.',
    fullDesc: 'When a basic website isn’t enough, we build custom interactive web platforms. Whether you need an online booking system, a private client portal where customers can view their files, or a full subscription platform with credit card payments, we engineer it to work seamlessly.',
    iconName: 'Globe',
    features: [
      'Customer Logins & Secure User Accounts',
      'Credit Card Checkout & Stripe Subscription Billing',
      'Private Client Portals & File Sharing',
      'Automated Appointment Booking Calendars',
      'Admin Dashboard to Manage Your Clients & Orders',
      'Database Storage with Real-Time Updates'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase'],
    startingPrice: '$1,890',
    typicalTimeline: '2–4 Weeks',
    flavorQuote: 'Everything your customers need to do business with you online.',
    bestFor: 'Growing companies, consultants, gyms, schools, and SaaS entrepreneurs'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Apps (iPhone & Android)',
    category: 'mobile',
    tagline: 'Smooth, easy-to-use apps that live right on your customers’ home screens.',
    shortDesc: 'Custom apps for iOS and Android with push notifications, offline use, and smooth touch controls.',
    fullDesc: 'We build mobile apps that feel fast, intuitive, and natural to use. We handle everything from the initial screens and features to publishing your app directly on the Apple App Store and Google Play Store.',
    iconName: 'Smartphone',
    features: [
      'Single App that Works on Both iPhone & Android',
      'Push Notifications to Send Updates & Deals',
      'Works Offline Even When Internet is Spotty',
      'In-App Payments, Apple Pay & Google Pay',
      'Fingerprint & FaceID Login Support',
      'Complete App Store & Google Play Store Publishing'
    ],
    techStack: ['React Native', 'Flutter', 'Expo', 'Firebase', 'Apple HealthKit / Google Fit'],
    startingPrice: '$2,990',
    typicalTimeline: '3–5 Weeks',
    flavorQuote: 'Your business right in your customers’ pockets.',
    bestFor: 'Health & fitness coaches, delivery services, communities, and mobile tools'
  },
  {
    id: 'custom-software',
    title: 'Business Automation & Custom Tools',
    category: 'custom',
    tagline: 'Stop doing repetitive manual tasks. We automate your everyday busywork.',
    shortDesc: 'Automated workflows, custom internal spreadsheets replacement, invoice sync, and tools that save you hours.',
    fullDesc: 'Tired of copying data between five different spreadsheets or manually sending the same emails all day? We create custom tools and automated connectors that sync your data, generate PDF invoices, notify your team, and eliminate repetitive computer chores.',
    iconName: 'Cpu',
    features: [
      'Connect Your Existing Tools (Slack, Gmail, QuickBooks, Shopify)',
      'Automated PDF Invoice & Report Generation',
      'Custom Internal Dashboards Replacing Messy Spreadsheets',
      'Automatic Email & SMS Client Notifications',
      'Secure Cloud Data Backup & Organization',
      'Easy-to-Use Buttons for Your Whole Team'
    ],
    techStack: ['Python', 'Node.js', 'PostgreSQL', 'Webhooks', 'Docker', 'AWS / Google Cloud'],
    startingPrice: '$1,450',
    typicalTimeline: '1–3 Weeks',
    flavorQuote: 'Cut the busywork and get hours of your week back.',
    bestFor: 'Agencies, contractors, logistics, e-commerce stores, and office managers'
  },
  {
    id: 'ai-smart-systems',
    title: 'Smart AI Helpers & Custom Chatbots',
    category: 'ai',
    tagline: 'AI assistants that know your business and answer customer questions 24/7.',
    shortDesc: 'Custom chatbots trained on your documents, smart search, and automated assistants.',
    fullDesc: 'Put AI to work for your business in practical, real-world ways. We build website chatbots that know all your pricing, services, and FAQ answers, plus smart search tools that help your team find answers in lengthy company PDFs instantly.',
    iconName: 'Sparkles',
    features: [
      '24/7 Website Chatbot Trained on Your Business Info',
      'Smart Search for Company Documents, Manuals & PDFs',
      'Automated Customer Inquiries & Lead Qualification',
      'Drafting Emails, Reports, and Summaries Automatically',
      'Voice Assistant & Multimodal Capabilities',
      'Private & Secure (Your Data is Never Leaked)'
    ],
    techStack: ['Python', 'FastAPI', 'Gemini AI API', 'LangChain', 'Vector Search', 'React'],
    startingPrice: '$1,650',
    typicalTimeline: '1–3 Weeks',
    flavorQuote: 'A 24/7 helper that never sleeps or misses a lead.',
    bestFor: 'Customer support teams, law firms, real estate agents, and busy founders'
  },
  {
    id: 'game-development',
    title: 'Interactive 2D/3D Games & Web Fun',
    category: 'game',
    tagline: 'Playable browser games and engaging 3D interactive experiences.',
    shortDesc: 'Fun web games, promotional mini-games for brand marketing, or indie game prototypes.',
    fullDesc: 'Looking to engage your audience with something unforgettable? We develop interactive 2D and 3D web games that run instantly in any web browser with no download needed, complete with leaderboards and sound effects.',
    iconName: 'Gamepad2',
    features: [
      'Instant Web Games (No App Download Required)',
      'Interactive 3D Graphics & Physics Fun',
      'Viral Brand Campaigns & Promotional Mini-Games',
      'High Score Leaderboards & Social Sharing',
      'Sound Effects & Catchy Arcade Audio',
      'Works Smoothly on Both Mobile Phones and Laptops'
    ],
    techStack: ['Three.js', 'Phaser', 'WebGL', 'WebSockets', 'HTML5 Canvas'],
    startingPrice: '$3,200',
    typicalTimeline: '3–6 Weeks',
    flavorQuote: 'Pure entertainment built right into the web browser.',
    bestFor: 'Brand marketing campaigns, creators, educational tools, and indie game creators'
  }
];
