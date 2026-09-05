import type { PortfolioItem } from '../types';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'sweetrise-bakery',
    title: 'SweetRise Artisan Bakery & Café',
    category: 'growth-website',
    categoryLabel: 'Business Growth Website & Ordering',
    tagline: 'Tripled online catering inquiries & automated weekend order scheduling.',
    clientType: 'Retail Bakery & Regional Catering',
    tags: ['Next.js', 'Online Catering', 'Stripe Deposits', 'SMS Notifications', 'Local SEO'],
    heroStat: {
      value: '+310%',
      label: 'Catering Inquiries'
    },
    beforeSummary: 'Manual paper order slips & 12 hrs/wk lost in phone tag',
    afterSummary: 'Interactive custom quote builder & upfront Stripe deposits',
    deliverablePreview: {
      domain: 'sweetrisebakery.com/catering',
      title: 'Interactive Platter & Cake Customizer',
      badge: 'Active Catering Engine',
      items: ['Custom Platter Configurator', 'Instant Stripe Deposit', 'Google Kitchen Calendar Sync']
    },
    metrics: [
      { label: 'Catering Inquiries', value: '+310% (3x Lift)' },
      { label: 'Weekly Phone Time', value: '-12 Hours Saved' },
      { label: 'Google 5-Star Reviews', value: '180+ Added' }
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    businessChallenge: 'SweetRise relied on handwritten slips and phone voicemails to manage large weekend corporate catering orders. Staff regularly misfiled custom cake orders, double-booked kitchen baking capacity, and lost lucrative orders because prospective clients couldn’t see prices or request a quote outside business hours.',
    solutionDelivered: 'Designed and launched a modern, mobile-friendly growth website with an interactive catering configurator. Clients select platter sizes, specify dietary preferences, pick delivery time slots, and pay deposits online via Stripe. Automated SMS alerts notify the head baker the moment an order is confirmed, while automated follow-up texts request 5-star Google reviews.',
    businessImpact: 'Online catering inquiries tripled within the first 60 days. The automated calendar eliminated 12 hours of weekly phone tag, and the post-service review automation generated over 180 verified 5-star Google reviews, pushing SweetRise to the #1 spot in local map searches.',
    techList: ['Next.js 14', 'Tailwind CSS', 'Stripe Checkout', 'Twilio SMS', 'Google Maps API'],
    clientQuote: {
      quote: 'We used to dread the weekend catering rush. Now orders flow straight into our kitchen schedule with deposits paid upfront. The website paid for itself in our first month.',
      author: 'Elena Rostova',
      role: 'Owner & Head Baker'
    }
  },
  {
    id: 'apex-heating-air',
    title: 'Apex Heating & Air Specialists',
    category: 'customer-portal',
    categoryLabel: 'Customer Portal & Invoicing',
    tagline: 'Cut invoice turnaround from 2 weeks to 24 hours with a custom client payment portal.',
    clientType: 'HVAC & Mechanical Contractor',
    tags: ['Customer Portal', 'Field Tech App', 'Online Invoicing', 'QuickBooks Sync', 'Apple Pay'],
    heroStat: {
      value: '14 Days → 24 Hours',
      label: 'Invoice Collection'
    },
    beforeSummary: 'Manual paper work orders & 2-week billing delay',
    afterSummary: 'Instant mobile payment & automated QuickBooks sync',
    deliverablePreview: {
      domain: 'apex-heating-air.com/portal',
      title: 'Field Tech Mobile App & 1-Click Client Settlement',
      badge: 'Production Portal',
      items: ['Mobile Work Order Capture', 'QuickBooks 2-Way Ledger Sync', 'Apple Pay 1-Click Checkout']
    },
    metrics: [
      { label: 'Invoice Collection', value: '14 Days → 24 Hours' },
      { label: 'Overdue Receivables', value: '-84% Reduction' },
      { label: 'Seasonal Rebookings', value: '+65% Growth' }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    businessChallenge: 'Apex field technicians completed service calls, but carbon-copy paper work orders took up to two weeks to be typed into office accounting software and mailed out. Delayed billing led to cash flow crunches, unpaid accounts, and customer confusion over past service warranties.',
    solutionDelivered: 'Engineered a secure, user-friendly customer portal and mobile field app. Technicians log parts, inspection notes, and photos from their phones, generating an instant digital estimate. Homeowners receive an automated SMS with a direct link to view their inspection report and pay via Apple Pay or credit card on the spot.',
    businessImpact: 'Average invoice collection plummeted from 14 days to under 24 hours, slashing overdue receivables by 84%. In addition, customers can re-book annual furnace and AC tune-ups with a single click, increasing seasonal maintenance contracts by 65%.',
    techList: ['React 19', 'PostgreSQL', 'QuickBooks API', 'Stripe Payments', 'Twilio SMS'],
    clientQuote: {
      quote: 'Cash flow used to keep me up at night waiting on paper checks. Now 80% of our jobs are paid before our technician even backs out of the driveway.',
      author: 'Mark Henderson',
      role: 'Managing Partner'
    }
  },
  {
    id: 'metrofleet-logistics',
    title: 'MetroFleet Regional Logistics',
    category: 'workflow-automation',
    categoryLabel: 'Workflow Automation & Custom Tools',
    tagline: 'Eliminated 15 hours/week of manual spreadsheet dispatching.',
    clientType: 'Same-Day Courier & Delivery Fleet',
    tags: ['Custom Admin Tool', 'Google Sheets Sync', 'Driver SMS Alerts', 'Proof of Delivery'],
    heroStat: {
      value: '-15 Hours / Wk',
      label: 'Manual Admin Time'
    },
    beforeSummary: '3 messy spreadsheets, lost paper manifests & phone chaos',
    afterSummary: 'Optimized driver route clustering & auto proof-of-delivery',
    deliverablePreview: {
      domain: 'metrofleet.app/dispatch',
      title: 'Lightweight Fleet Dispatch & Route Board',
      badge: 'Live Dispatch Tool',
      items: ['Automated Territory Clustering', 'Driver Phone Run Sheets', 'Instant Customer Photo Proof']
    },
    metrics: [
      { label: 'Manual Admin Time', value: '-15 Hours / Week' },
      { label: 'Lost Manifests', value: '0.0% Error Rate' },
      { label: 'Fleet On-Time Rate', value: '99.4% SLA' }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    businessChallenge: 'Dispatchers juggled 3 separate spreadsheets, WhatsApp chat threads, and emails to coordinate 200+ daily deliveries. Manifests were frequently lost, routes crossed paths inefficiently, and office staff spent over 3 hours every morning manually formatting driver run sheets.',
    solutionDelivered: 'Built a lightweight internal dispatch web application that automatically ingests customer booking forms, groups stops by geographic territory, and sends optimized delivery lists directly to drivers’ phones. When drivers snap a photo at drop-off, proof-of-delivery is sent to the customer automatically.',
    businessImpact: 'Saved 15 hours per week of manual data entry, eliminated lost manifests, decreased fuel costs through cleaner route clustering, and enabled MetroFleet to double daily delivery volume without hiring additional office staff.',
    techList: ['Node.js', 'PostgreSQL', 'Google Maps Distance API', 'Twilio Messaging', 'Tailwind CSS'],
    clientQuote: {
      quote: 'This custom tool did the work of two full-time dispatch coordinators. Our team goes home on time every day and our clients receive instant photo delivery confirmations.',
      author: 'David Morales',
      role: 'Director of Operations'
    }
  },
  {
    id: 'clearview-dental',
    title: 'ClearView Specialty Dental & Orthodontics',
    category: 'customer-portal',
    categoryLabel: 'Patient Booking & Portal',
    tagline: 'Reduced missed appointments by 42% via automated 2-way SMS reminders.',
    clientType: 'Multi-Provider Healthcare Clinic',
    tags: ['Patient Portal', 'Online Scheduling', '2-Way SMS', 'Intake Forms', 'HIPAA Secure'],
    heroStat: {
      value: '-42% Drop',
      label: 'Missed Appointments'
    },
    beforeSummary: 'Front desk voicemails & unpaid late-cancellation gaps',
    afterSummary: 'Automated 2-way SMS reminders & digital standby fill',
    deliverablePreview: {
      domain: 'clearviewdental.com/book',
      title: 'Chair Scheduling & 2-Way SMS Pipeline',
      badge: 'HIPAA Patient Flow',
      items: ['Online Chair Booking', 'Twilio 2-Way SMS Confirmations', 'Automated Standby Refill']
    },
    metrics: [
      { label: 'No-Show Rate', value: '-42% Drop' },
      { label: 'Cancelled Slots Re-filled', value: '92% Filled' },
      { label: 'Patient Rating', value: '4.9★ (450+ Reviews)' }
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    businessChallenge: 'Last-minute cancellations and no-shows cost the clinic thousands in lost chair time every week. Front-desk staff spent 4 hours every afternoon making outbound confirmation phone calls that mostly went unanswered.',
    solutionDelivered: 'Integrated a HIPAA-compliant online appointment scheduler and automated 2-way SMS reminder pipeline. Patients confirm or reschedule appointments directly from their phone with a single text reply. When a slot is cancelled, the system automatically messages clients on a digital standby list.',
    businessImpact: 'Cut patient no-shows by 42% in the first quarter and reclaimed over 20 staff hours per week previously wasted on phone outreach. The automated standby list filled 92% of last-minute cancellations within 30 minutes.',
    techList: ['Next.js', 'Supabase', 'Twilio Healthcare SMS', 'Stripe Co-Pay', 'HIPAA Cloud'],
    clientQuote: {
      quote: 'Our chairs stay full and our front-desk team can finally focus on patient care instead of spending all afternoon leaving voicemails that no one answers.',
      author: 'Dr. Sarah Chen, DDS',
      role: 'Clinic Director'
    }
  }
];
