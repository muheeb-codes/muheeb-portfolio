export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  type: string;
  role: string;
  tech: string[];
  description: string;
  overview: string;
  architecture: string;
  implementation: string;
  stats: ProjectStat[];
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'cashflow-tracker',
    title: 'CashFlow Tracker',
    type: 'Full Stack Finance App',
    role: 'Developer',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    description:
      'A full-stack expense tracker for managing daily spending, setting budgets and tracking savings.',
    overview:
      'A comprehensive expense tracking application built for personal finance management. Track daily expenses and income, view spending by category, set budget goals, monitor progress and export reports.',
    architecture:
      'Built with React and TypeScript on the frontend, styled with Tailwind CSS, and connected to a Node.js and Express backend with MongoDB for persistence.',
    implementation:
      'The dashboard summarizes total spending, monthly salary, remaining budget, the highest expense and the most recent entry. Expenses can be searched and filtered, edited inline, and exported as a PDF report, with a category chart breaking spending down visually.',
    stats: [],
    myRole: [
      'Built the React and TypeScript dashboard for tracking expenses, income and budgets.',
      'Implemented the searchable and filterable expense table with inline editing and PDF export.',
      'Connected the frontend to a Node.js and Express backend with MongoDB storage.',
      'Added category-based expense analysis with a visual spending breakdown.',
    ],
    images: ['/Projects/cashflow/1.png'],
    hoverImage: '/Projects/cashflow/1.png',
    github: 'https://github.com/muheeb-codes/cashflow-tracker',
    liveUrl: 'https://cash-ft.netlify.app/',
  },
  {
    id: 2,
    slug: 'weather-app',
    title: 'Weather App',
    type: 'Frontend Weather Dashboard',
    role: 'Developer',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Open-Meteo API', 'date-fns', 'Lucide Icons'],
    description:
      'A weather app with real-time forecasts and location-based data for any city.',
    overview:
      'Search for any city or use your current location to see current conditions, wind, humidity, precipitation and a seven-day forecast.',
    architecture:
      'Built with React and TypeScript and styled with Tailwind CSS. Weather data comes from the Open-Meteo API, dates are formatted with date-fns and the interface icons use Lucide.',
    implementation:
      'The app supports city search and geolocation, shows current temperature with sunrise and sunset times, and renders a seven-day forecast with daily highs and lows. The layout is responsive across screen sizes.',
    stats: [],
    myRole: [
      'Built the weather dashboard with React and TypeScript, including city search and geolocation.',
      'Integrated the Open-Meteo API for current conditions and a seven-day forecast.',
      'Implemented date formatting with date-fns and Lucide icons across the interface.',
      'Designed a responsive gradient layout with Tailwind CSS.',
    ],
    images: ['/Projects/weather/1.png'],
    hoverImage: '/Projects/weather/1.png',
    github: 'https://github.com/muheeb-codes/Weather-app',
    liveUrl: 'https://herecast.netlify.app/',
  },
  {
    id: 3,
    slug: 'picnic-organizer',
    title: 'Picnic Organizer',
    type: 'Frontend Event Planner',
    role: 'Developer',
    tech: ['React', 'JavaScript', 'CSS3', 'Local Storage', 'Responsive Design'],
    description:
      'An event planning app for outdoor activities and gatherings.',
    overview:
      'A picnic planner that collects when and where the outing happens, group details, transport and occasion, then builds a personalized plan for the day.',
    architecture:
      'Built with React and JavaScript and styled with CSS3. Plans persist in the browser through Local Storage, so visitors can plan without creating an account.',
    implementation:
      'The form captures the date, start time, picnic location, duration and transport, along with adults, kids, pets and the occasion. The interface is responsive from small phones to desktop screens.',
    stats: [],
    myRole: [
      'Built the picnic planning flow with React and JavaScript.',
      'Implemented inputs for date, location, group size, transport and occasion.',
      'Persisted plans in Local Storage so no account is required.',
      'Styled a responsive interface with CSS3.',
    ],
    images: ['/Projects/picnic/1.png'],
    hoverImage: '/Projects/picnic/1.png',
    github: 'https://github.com/muheeb-codes/picnic-organizer',
    liveUrl: 'https://picnic-organizer.netlify.app/',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: projects[(idx - 1 + projects.length) % projects.length],
    next: projects[(idx + 1) % projects.length],
  };
}
