import type { PortfolioItem } from '../types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'rustico-bakery',
    title: 'Rustico Bakery & Café — Modern Local Business Site',
    category: 'starter-web',
    categoryLabel: 'Simple Business Website',
    tagline: 'Fresh mobile-friendly website with digital menu, Google Maps & 1-click WhatsApp orders.',
    description: 'A clean, fast website for a family-owned bakery that needed to get found on Google, show daily fresh specials, and take catering inquiries easily.',
    clientType: 'Local Bakery & Café',
    tags: ['Mobile First', 'Google Maps SEO', 'WhatsApp Orders', 'Digital Menu'],
    metrics: [
      { label: 'Weekly Catering Inquiries', value: '+310%' },
      { label: 'Google Search Clicks', value: '4.8k/mo' },
      { label: 'Turnaround Time', value: '4 Days' }
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Built in 4 days for under $700 with zero headache for the owner',
      'One-tap WhatsApp button letting customers pre-order fresh bread and pastries',
      'Optimized Google Maps profile integration driving local neighbourhood foot traffic'
    ],
    problem: 'The bakery only had an old Facebook page that was hard to navigate, and they were losing catering orders to nearby chains.',
    solution: 'Engineered a modern, blazing-fast one-page website with their full menu, customer reviews, photo gallery, and instant WhatsApp chat ordering.',
    impact: 'Catering orders tripled in the first month and weekend foot traffic increased by 45%.',
    techList: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp Business API', 'Google Maps API'],
    demoType: 'case-study'
  },
  {
    id: 'vault-flow',
    title: 'VaultFlow — Smart Online Invoicing & Cashflow',
    category: 'web',
    categoryLabel: 'Web App & Portal',
    tagline: 'Simple invoice creation, credit card payments, and automatic customer reminders.',
    description: 'A straightforward web app enabling service businesses to create branded invoices in 30 seconds and get paid online instantly.',
    clientType: 'Service Business / Contractors',
    tags: ['Stripe Payments', 'Customer Portal', 'Automatic Reminders', 'Next.js'],
    metrics: [
      { label: 'Time-to-Get-Paid', value: '-14 Days' },
      { label: 'Saved Admin Time', value: '18 hrs/mo' },
      { label: 'Client Satisfaction', value: '99%' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Customers can pay invoices online via Credit Card or Apple Pay in 1 click',
      'Automated polite email reminders that eliminate awkward payment chasing',
      'Clean overview showing which invoices are paid and which are pending'
    ],
    problem: 'Small contractors were losing over 15 hours a month writing paper invoices and chasing late client checks.',
    solution: 'Built an easy online portal where contractors click one button to text/email an invoice and get paid directly to their bank.',
    impact: 'Cut average payment collection times in half and stopped unpaid invoices from slipping through the cracks.',
    techList: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe Payments', 'PostgreSQL'],
    demoType: 'case-study'
  },
  {
    id: 'pulse-health',
    title: 'PulseSync — Mobile Health & Habit Companion',
    category: 'mobile',
    categoryLabel: 'iPhone & Android Mobile App',
    tagline: 'Simple daily habit tracker with smartwatch syncing and gentle reminders.',
    description: 'A friendly mobile app that helps everyday people track water, sleep, and workouts with zero confusing charts.',
    clientType: 'Health & Fitness Startup',
    tags: ['iOS & Android', 'Apple Health', 'Offline Mode', 'Push Alerts'],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Daily Active Users', value: '45,000+' },
      { label: 'Sync Speed', value: 'Instant' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Simple, friendly design anyone can figure out in 10 seconds',
      'Works completely offline with automatic sync when connected',
      'Gentle motivational push notifications that encourage daily streaks'
    ],
    problem: 'Most health apps were too complicated with scientific graphs that discouraged regular everyday users.',
    solution: 'Created a calm, colorful mobile app focused on 3 simple daily wins with a one-tap check-in.',
    impact: 'Reached over 45,000 active users in 4 months with a 4.9-star average review rating.',
    techList: ['React Native', 'TypeScript', 'Apple HealthKit', 'Google Fit', 'Supabase'],
    demoType: 'case-study'
  },
  {
    id: 'orbit-ops',
    title: 'OrbitOps — Simple Route & Delivery Dispatcher',
    category: 'custom',
    categoryLabel: 'Business Tool & Automation',
    tagline: 'Automatic driver route planning and live text message delivery updates.',
    description: 'A custom tool replacing messy driver spreadsheets with an easy map showing delivery locations and auto-assigning drivers.',
    clientType: 'Delivery & Logistics Co.',
    tags: ['Automated Routing', 'SMS Alerts', 'Live Map', 'Spreadsheet Sync'],
    metrics: [
      { label: 'Fuel Cost Savings', value: '$240k/yr' },
      { label: 'Driver Delay Reduction', value: '-68%' },
      { label: 'Time to Plan Routes', value: '5 mins' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Turned 3 hours of daily manual spreadsheet scheduling into a 5-minute automated click',
      'Automatically sends SMS text alerts to customers when the driver is 10 minutes away',
      'Simple touch interface that drivers can easily read on their phone'
    ],
    problem: 'The business owner spent every morning stressing over paper maps and spreadsheets to assign 40+ deliveries by hand.',
    solution: 'Engineered an easy web dashboard where they upload addresses and click "Optimize Routes" to auto-dispatch drivers.',
    impact: 'Saved $20,000+ monthly in driver overtime and fuel while eliminating customer complaints.',
    techList: ['Go', 'React', 'Tailwind CSS', 'PostgreSQL', 'Twilio SMS API', 'Docker'],
    demoType: 'case-study'
  },
  {
    id: 'cyber-runner-3d',
    title: 'ChipCrush 3D — Playable Browser Arcade Game',
    category: 'game',
    categoryLabel: 'Interactive Web Game',
    tagline: 'High-speed 3D arcade game running instantly in the web browser.',
    description: 'An interactive mini-game engineered for an online product launch, generating massive viral engagement on social media.',
    clientType: 'Brand Marketing Campaign',
    tags: ['No Install Needed', 'Mobile & Desktop', 'Leaderboard', 'Fun Audio'],
    metrics: [
      { label: 'Avg Time Played', value: '8.4 mins' },
      { label: 'Viral Shares', value: '38,000+' },
      { label: 'Smooth FPS', value: '60 FPS' }
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Opens immediately in any browser with zero app installation or signup required',
      'Addictive arcade gameplay with catchy retro sound effects',
      'Global scoreboard that encouraged friendly competition and viral sharing'
    ],
    problem: 'The brand wanted an exciting, memorable way to get people talking about their new launch instead of standard boring ads.',
    solution: 'Engineered a retro 3D chip runner game where visitors dodge obstacles and share their high scores online.',
    impact: 'Generated 140,000+ game plays in the first 2 weeks, driving a 340% increase in product signups.',
    techList: ['Three.js', 'Vite', 'TypeScript', 'GLSL', 'Howler.js'],
    demoType: 'interactive'
  }
];
