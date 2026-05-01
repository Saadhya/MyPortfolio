export const profile = {
  name: 'Saadhya',
  title: 'Senior Frontend Engineer',
  tagline: 'Building high-performance web products for global scale',
  email: 'saadhya98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saadhya98/',
  phone: '+91 9599619705',
  location: 'Delhi, India',
  openTo: ['Germany', 'Finland', 'Sweden', 'Netherlands'],
  summary:
    'Senior Frontend Engineer with 6+ years of experience leading high-performance web and eCommerce platforms. Expert in React, TypeScript, Redux, and modern JavaScript. Proven record improving page performance (up to 40%), increasing conversions, and delivering secure, scalable releases. Strong people leadership — mentored a team of 4, drove code quality, and optimised CI/CD.',
  stats: [
    { label: 'Years Experience', value: '6+' },
    { label: 'Engineers Mentored', value: '4' },
    { label: 'Performance Gain', value: '40%' },
    { label: 'Projects Shipped', value: '10+' },
  ],
};

export const skills = {
  'Frontend Core': ['React', 'TypeScript', 'Redux Toolkit', 'JavaScript ES2023', 'HTML5', 'CSS3'],
  'UI & Styling': ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Responsive Design', 'Core Web Vitals'],
  'Architecture': ['RESTful APIs', 'OAuth 2.0', 'MVC', 'Swagger', 'Component Libraries', 'Design Systems'],
  'Cloud & DevOps': ['AWS CodePipeline', 'IBM Cloud', 'CI/CD', 'Git/GitHub/GitLab'],
  'Databases': ['MongoDB', 'SQL Server', 'AWS DynamoDB'],
  'AI & Tools': ['Gen AI', 'Windsurf', 'MS Copilot', 'JIRA', 'Postman', 'VS Code'],
  'Mobile & More': ['React Native', 'jQuery', 'Python (basic)', 'Agile/Scrum'],
};

export const experiences = [
  {
    role: 'Frontend Lead',
    company: 'Capgemini',
    client: 'Honeywell Project',
    period: 'Apr 2024 – Present',
    duration: '1 yr+',
    type: 'current',
    highlights: [
      'Led development of responsive, high-performance eCommerce web apps using React, TypeScript, Redux',
      'Architected modular component libraries; enforced coding standards, accessibility, and performance budgets',
      'Mentored and managed a team of 4 engineers; owned sprint planning, code reviews',
      'Partnered with Product/UX/Backend to ship omnichannel experiences',
      'Streamlined CI/CD with DevOps teams to improve deployment reliability and lead time',
      'Implemented UI performance profiling to proactively resolve bottlenecks on high-traffic pages',
      'Built Honeywell HCM career site using Oracle HCM + custom React/TypeScript components',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'AWS CodePipeline', 'Oracle HCM', 'Core Web Vitals'],
  },
  {
    role: 'React Developer & Lead',
    company: 'AVPS Technologies',
    client: '',
    period: 'Aug 2019 – Apr 2024',
    duration: '4 yrs 8 mos',
    type: 'past',
    highlights: [
      'Delivered enterprise dashboards and platforms with React + Redux; integrated REST APIs and Swagger',
      'Built a multi-location warehouse management system; improved inventory tracking accuracy by ~40%',
      'Launched education and hiring platforms with real-time reporting and charting',
      'Deployed apps on IBM Cloud with sandbox testing; set up environment config and CI/CD',
      'Collaborated with UI/UX to create reusable, responsive components and design systems',
    ],
    stack: ['React', 'Redux', 'REST APIs', 'IBM Cloud', 'Material UI', 'MongoDB'],
  },
];

export const projects = [
  {
    id: 'honeywell-ecommerce',
    title: 'Honeywell eCommerce Platform',
    company: 'Capgemini',
    year: '2024',
    category: 'eCommerce',
    impact: 'Led team of 4 engineers, delivered scalable omnichannel experience',
    role: 'Frontend Lead',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'AWS', 'Core Web Vitals'],
    stages: [
      { phase: 'Discovery & Architecture', icon: 'layout', desc: 'Designed component library architecture, established coding standards and Core Web Vitals budgets across the team.' },
      { phase: 'Component Development', icon: 'code', desc: 'Built modular, reusable React components with full TypeScript typing and accessibility compliance.' },
      { phase: 'API Integration', icon: 'link', desc: 'Coordinated with backend for REST API contracts, integrated product catalog, cart, and checkout flows.' },
      { phase: 'Performance & QA', icon: 'zap', desc: 'Profiled and optimised page load times, coordinated with QA and security for compliant production releases.' },
      { phase: 'CI/CD & Delivery', icon: 'rocket', desc: 'Streamlined AWS CodePipeline configurations; reduced deployment lead time and improved release reliability.' },
    ],
    metrics: ['Team of 4 led', 'Omnichannel delivery', 'AWS production', 'Performance budgets met'],
  },
  {
    id: 'honeywell-hcm',
    title: 'Honeywell HCM Career Site',
    company: 'Capgemini',
    year: '2024',
    category: 'HR Platform',
    impact: 'GEM Award winner — delivered with exceptional quality and leadership',
    role: 'Frontend Lead',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stack: ['React', 'TypeScript', 'Oracle HCM Cloud', 'Custom Components'],
    stages: [
      { phase: 'Oracle HCM Integration', icon: 'database', desc: 'Analysed Oracle HCM Cloud APIs and designed a custom React/TypeScript integration layer.' },
      { phase: 'UI Component Build', icon: 'layers', desc: 'Built custom React components tailored to Honeywell brand, ensuring pixel-perfect fidelity.' },
      { phase: 'Candidate Experience', icon: 'users', desc: 'Designed intuitive job search, application flow, and profile management features.' },
      { phase: 'Testing & Launch', icon: 'check-circle', desc: 'Led cross-team UAT and production rollout; received GEM award for delivery excellence.' },
    ],
    metrics: ['GEM Award', 'Oracle HCM integrated', 'Zero critical bugs at launch', 'Brand compliant UI'],
  },
  {
    id: 'ev-dashboard',
    title: 'EV Charging Management Dashboard',
    company: 'AVPS Technologies',
    year: '2023',
    category: 'IoT Dashboard',
    impact: 'Real-time EV station monitoring with integrated payment wallet',
    role: 'React Developer & Lead',
    image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stack: ['React', 'Redux', 'REST APIs', 'IBM Cloud', 'Chart.js', 'Maps API'],
    stages: [
      { phase: 'Requirements & Design', icon: 'map', desc: 'Mapped out station tracking, billing, and energy analytics requirements with stakeholders.' },
      { phase: 'Dashboard Architecture', icon: 'layout', desc: 'Designed modular dashboard with real-time charts, interactive maps, and session status panels.' },
      { phase: 'Payment Integration', icon: 'credit-card', desc: 'Built on-spot payment wallet for secure instant EV charging payments.' },
      { phase: 'Cloud Deployment', icon: 'cloud', desc: 'Deployed on IBM Cloud with CI/CD, environment configs, and cloud-based testing.' },
    ],
    metrics: ['Real-time monitoring', 'Integrated payments', 'IBM Cloud deployed', 'Optimised API caching'],
  },
  {
    id: 'interview-app',
    title: 'Interview & Assessment Platform',
    company: 'AVPS Technologies',
    year: '2022',
    category: 'HR Tech',
    impact: 'Scaled hiring workflows for high-volume candidate assessment',
    role: 'React Developer',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stack: ['React', 'Redux', 'REST APIs', 'Role-based Auth', 'Analytics'],
    stages: [
      { phase: 'Platform Design', icon: 'layout', desc: 'Designed quiz engine architecture supporting dynamic question sets and real-time scoring.' },
      { phase: 'Role-based Access', icon: 'shield', desc: 'Implemented Recruiter/Admin/Candidate RBAC with secure authentication flows.' },
      { phase: 'API & State', icon: 'database', desc: 'Integrated REST APIs for question loading, scoring logic, and result storage; memoized state for performance.' },
      { phase: 'Analytics Dashboard', icon: 'bar-chart', desc: 'Built recruiter analytics dashboards improving hiring decision speed and accuracy.' },
    ],
    metrics: ['RBAC implemented', 'High candidate volume', 'Faster hiring decisions', 'Improved load time'],
  },
  {
    id: 'avps-academy',
    title: 'AVPS Academy LMS',
    company: 'AVPS Technologies',
    year: '2021',
    category: 'EdTech',
    impact: 'Full LMS with course management, tracking, and multi-role access',
    role: 'React Developer',
    image: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stack: ['React', 'Material UI', 'REST APIs', 'MongoDB', 'Role-based Auth'],
    stages: [
      { phase: 'LMS Architecture', icon: 'book', desc: 'Designed full LMS structure supporting courses, modules, assessments, and user roles.' },
      { phase: 'Dashboard Modules', icon: 'pie-chart', desc: 'Built live course progress, attendance monitoring, and performance analytics modules.' },
      { phase: 'Content Delivery', icon: 'play', desc: 'Integrated REST APIs for batch management, real-time class updates, and content delivery.' },
      { phase: 'Multi-role System', icon: 'users', desc: 'Enabled Admin/Instructor/Student workflows with secure login and role-separated views.' },
    ],
    metrics: ['3 user roles', 'Real-time updates', 'Full course lifecycle', 'Material UI design system'],
  },
  {
    id: 'warehouse-mgmt',
    title: 'Warehouse Management System',
    company: 'AVPS Technologies',
    year: '2020',
    category: 'Enterprise',
    impact: 'Improved inventory tracking accuracy by ~40% across multiple locations',
    role: 'React Developer',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stack: ['React', 'Redux', 'REST APIs', 'SQL Server', 'Charts'],
    stages: [
      { phase: 'System Analysis', icon: 'search', desc: 'Analysed multi-location inventory flows and identified bottlenecks in tracking accuracy.' },
      { phase: 'Data Flow Optimisation', icon: 'zap', desc: 'Redesigned state management and API data flows to cut sync errors and improve accuracy by 40%.' },
      { phase: 'Dashboard Build', icon: 'bar-chart', desc: 'Built real-time inventory dashboards with filtering, search, and location-specific views.' },
      { phase: 'Integration & Testing', icon: 'check-circle', desc: 'Integrated SQL Server backend, performed end-to-end testing across warehouse locations.' },
    ],
    metrics: ['40% accuracy gain', 'Multi-location', 'Real-time sync', 'Enterprise scale'],
  },
];

export const certifications = [
  { title: 'GEN AI for Business Analyst & Prompt Engineering', issuer: 'Certified' },
  { title: 'Advanced React and Redux for Senior Engineers', issuer: 'Certified' },
  { title: 'React Testing with Jest & Vitest', issuer: 'Certified' },
];

export const achievements = [
  {
    title: 'GEM Award',
    detail: 'Capgemini GEM award for outstanding delivery and leadership on Honeywell Career Site',
    year: '2024',
  },
];

export const education = [
  { degree: 'MCA – Master of Computer Applications', institution: 'IGNOU', year: '2022 – 2024' },
  { degree: 'Bachelor of Vocation in Software Development', institution: 'GGSIPU', year: '2016 – 2019' },
];
