// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Tameem Khan',
  roles: ['Software Engineer', 'Backend Developer', 'AI/ML Enthusiast'],
  intro:
    'I build scalable backend systems and intelligent applications, combining software engineering with AI to solve real-world problems.',
  photo: '/images/tameem.webp',
  photoFallback: '/images/tameem.jpg',
  resume: '/Tameem_Khan_Resume.pdf',
  email: 'ktameem2004@gmail.com',
  phone: '+91 99166 60830',
  phoneHref: 'tel:+919916660830',
  location: 'Bengaluru, India',
  github: 'https://github.com/khantameem29',
  linkedin: 'https://www.linkedin.com/in/tameemkhan29',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering graduate specializing in Artificial Intelligence and Machine Learning, with a strong focus on backend engineering.",
    'Most of my hands-on work is in Go: designing microservices, building REST APIs, connecting services through event-driven messaging, and shipping them in Docker containers backed by PostgreSQL. I care about clean service boundaries, reliable APIs and systems that scale predictably.',
    'Alongside backend work, I build AI-powered applications with LangChain, LangGraph and retrieval-augmented generation, bringing intelligence into software that people actually use.',
  ],
  focus: [
    { title: 'Backend Engineering', text: 'Go microservices, REST APIs and event-driven services.' },
    { title: 'Scalable Systems', text: 'Containerized, observable services built to grow.' },
    { title: 'AI Applications', text: 'LLM workflows with LangChain, LangGraph and RAG.' },
  ],
}

export type SkillKey =
  | 'go' | 'python' | 'java' | 'javascript'
  | 'rest' | 'microservices' | 'node' | 'rabbitmq'
  | 'postgres' | 'mongodb' | 'redis'
  | 'docker' | 'compose' | 'git' | 'github' | 'prometheus'
  | 'langchain' | 'langgraph' | 'faiss' | 'huggingface' | 'rag'

export type SkillGroup = { title: string; blurb: string; items: { name: string; icon: SkillKey }[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    blurb: 'Languages I build with.',
    items: [
      { name: 'Go', icon: 'go' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
  },
  {
    title: 'Backend',
    blurb: 'Service design, APIs and inter-service communication.',
    items: [
      { name: 'REST APIs', icon: 'rest' },
      { name: 'Microservices', icon: 'microservices' },
      { name: 'Node.js', icon: 'node' },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
    ],
  },
  {
    title: 'Databases',
    blurb: 'Relational, document and in-memory stores.',
    items: [
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    title: 'DevOps & Tools',
    blurb: 'Containers, version control and observability.',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Docker Compose', icon: 'compose' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Prometheus', icon: 'prometheus' },
    ],
  },
  {
    title: 'AI / ML',
    blurb: 'LLM-powered and retrieval-based applications.',
    items: [
      { name: 'LangChain', icon: 'langchain' },
      { name: 'LangGraph', icon: 'langgraph' },
      { name: 'FAISS', icon: 'faiss' },
      { name: 'HuggingFace', icon: 'huggingface' },
      { name: 'RAG', icon: 'rag' },
    ],
  },
]

export type Project = {
  title: string
  tagline: string
  description: string
  highlights: string[]
  tech: string[]
  visual: 'kanban' | 'finance' | 'services' | 'ai'
  /** Optional screenshot in /public (e.g. '/images/projects/collabx.webp'). When set, it replaces the generated preview. */
  image?: string
  github?: string
  live?: string
  api?: string
  /** Shown in place of buttons when there are no public links. */
  note?: string
}

export const projects: Project[] = [
  {
    title: 'CollabX',
    tagline: 'Student project collaboration hub',
    description:
      'A full-stack collaboration platform that connects people and keeps team projects in one place: create projects, manage tasks and collaborate with teammates in real time.',
    highlights: ['Drag-and-drop Kanban with priorities, assignees and due dates', 'Real-time chat with typing indicators via Socket.io', 'JWT auth with owner/member roles and file sharing'],
    tech: ['React', 'Vite', 'Node.js', 'Socket.io', 'JWT', 'Vercel'],
    visual: 'kanban',
    image: '/images/projects/collabx.webp',
    github: 'https://github.com/khantameem29/Collabxx',
    live: 'https://frontend-iota-liart-82.vercel.app',
  },
  {
    title: 'Finora',
    tagline: 'AI-powered finance habit tracker',
    description:
      'A fintech application that helps users track spending, build saving discipline and predict savings, backed by its own REST API.',
    highlights: ['Financial health dashboard with cash-flow charts', 'AI spending insights, savings predictions and overspending alerts', 'Habit streaks, smart budgeting and goal tracking'],
    tech: ['REST API', 'Backend', 'Netlify'],
    visual: 'finance',
    image: '/images/projects/finora.webp',
    live: 'https://finora-app.netlify.app',
  },
  {
    title: 'PadosMe',
    tagline: 'Proximity-based outreach & marketing platform',
    description:
      'A proximity-based digital outreach, sales and marketing platform built as Go microservices. I worked on backend services including Catalogue, Rating and Analytics.',
    highlights: ['Catalogue, Rating & Analytics services', 'Event-driven messaging', 'Containerized deployments'],
    tech: ['Go', 'Microservices', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Prometheus'],
    visual: 'services',
    note: 'Built during my internship at Kaaslabs',
  },
  {
    title: 'AI Career Mentor',
    tagline: 'AI-powered career guidance',
    description:
      "An AI career guidance application that analyses a user's profile, identifies skill gaps and generates personalized learning recommendations.",
    highlights: ['Profile analysis', 'Skill-gap identification', 'Personalized learning paths'],
    tech: ['LangChain', 'LangGraph', 'FAISS', 'HuggingFace', 'Gemini', 'Python'],
    visual: 'ai',
  },
]

export const experience = [
  {
    role: 'Software Engineer Intern (Backend)',
    company: 'Kaaslabs Automation (OPC) Private Limited',
    period: 'Jan 2026 – May 2026',
    certificate: 'https://drive.google.com/file/d/1T9fti75tfClwOBGJ6Tzmzwg6Ll1gDsm0/view?usp=drivesdk',
    summary:
      'Worked on the backend of PadosMe, a Go-based microservices platform for proximity-based outreach, sales and marketing.',
    points: [
      'Designed and developed the Catalogue, Rating and Analytics microservices in Go.',
      'Built REST APIs for orders, payments, notifications and ledger services.',
      'Designed event-driven communication between services using RabbitMQ.',
      'Containerized microservices with Docker for consistent, scalable deployments.',
      'Integrated monitoring and observability with Prometheus.',
    ],
    tech: ['Go', 'REST APIs', 'Microservices', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Prometheus'],
  },
]

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  school: 'Presidency University, Bengaluru',
  period: '2022 – 2026',
}

export const certifications: { title: string; issuer: string; status?: string }[] = [
  { title: 'AI Engineer Course', issuer: 'TuteDude', status: 'In progress' },
  { title: 'DSA Skill Assessment', issuer: 'Scaler' },
]
