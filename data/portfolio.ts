export type PortfolioRole = "All" | "DevOps" | "Business Analysis" | "QA";
export type SpecialtyRole = Exclude<PortfolioRole, "All">;

type PortfolioProject = {
  id: string;
  name: string;
  previewImage?: string;
  status?: string;
  description: string;
  contribution: string;
  tech: string[];
  roles: SpecialtyRole[];
  relevance: Partial<Record<SpecialtyRole, string>>;
  github: string;
  live: string;
};

const projects: PortfolioProject[] = [
  {
    id: "jay-fit-zone",
    name: "Jay Fit Zone",
    previewImage: "/projects/jay-fit-zone-preview.png",
    status: "In development",
    description:
      "A centralized gym management system for member and membership tracking, payment verification and admin reports, with AI fitness chat, personalized workout and diet plans, and QR exercise guides.",
    contribution:
      "I analyzed requirements, mapped business workflows, and wrote functional specifications and user stories with acceptance criteria.",
    tech: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "REST API",
      "Google Gemini API",
      "JWT Authentication",
      "Docker",
    ],
    roles: ["Business Analysis", "DevOps"],
    relevance: {
      "Business Analysis":
        "Exploring requirements, workflows and user stories for a gym management process.",
      DevOps:
        "Learning how Docker can support a consistent development and delivery workflow.",
    },
    github: "https://github.com/your-username/jay-fit-zone",
    live: "https://jay-fit-zone.vercel.app",
  },
  {
    id: "newpath",
    name: "NewPath – Recovery Support",
    previewImage: "/projects/newpath-preview.png",
    description:
      "A recovery support web app for people working to stop using drugs, combining an AI friend to talk to, daily progress tracking, a craving toolkit and quick access to real help.",
    contribution:
      "I’m considering how to design a supportive and safe experience for someone in a vulnerable moment, from adding safety checks to an AI chat to keeping personal progress private and the interface calm and easy to use.",
    tech: ["AI chat", "Progress tracking", "Privacy", "Safety-focused UX"],
    roles: ["Business Analysis", "QA"],
    relevance: {
      "Business Analysis":
        "Considering user needs, privacy expectations and safety requirements for a sensitive support experience.",
      QA: "Thinking through safety checks, privacy-sensitive behavior and clear access to real-world help.",
    },
    github: "https://github.com/your-username/newpath",
    live: "https://newpath.vercel.app",
  },
  {
    id: "farmtrust",
    name: "FarmTrust AI Pricing Website",
    previewImage: "/projects/farmtrust-preview.png",
    description:
      "An AI-assisted agricultural pricing platform with reputation features, secure transactions and real-time email updates.",
    contribution:
      "I’m exploring user needs and checking key platform flows, including pricing information and transaction updates.",
    tech: ["React", "Tailwind CSS", "Next.js", "MySQL", "REST API"],
    roles: ["Business Analysis", "QA"],
    relevance: {
      "Business Analysis":
        "Exploring platform needs and how pricing and reputation information should be presented.",
      QA: "Thinking through functional checks for pricing, transaction and email update flows.",
    },
    github: "https://github.com/your-username/farmtrust",
    live: "https://farmtrust.vercel.app",
  },
  {
    id: "helpdesk-tracker",
    name: "HelpDesk Tracker",
    previewImage: "/projects/helpdesk-tracker-preview.png",
    description:
      "A help-desk tracking solution for managing support requests and giving visibility into issue status and resolution workflows.",
    contribution:
      "I’m considering how support teams and requesters can follow an issue from submission through resolution.",
    tech: ["React", "Tailwind CSS", "Next.js", "MySQL"],
    roles: ["Business Analysis", "QA", "DevOps"],
    relevance: {
      "Business Analysis":
        "Exploring request handling, status visibility and resolution workflows.",
      QA: "Considering functional checks for request submission and status changes.",
      DevOps:
        "Learning about hosting and deployment by publishing the HelpDesk Tracker project online.",
    },
    github: "https://github.com/your-username/helpdesk-tracker",
    live: "https://helpdesk-tracker.vercel.app",
  },
  {
    id: "bloom-corner",
    name: "Bloom Corner",
    previewImage: "/projects/bloom-corner-preview.png",
    description:
      "An online flower boutique with a responsive interface and interactive features.",
    contribution:
      "I practiced checking interactive behavior and considering a consistent experience across screen sizes.",
    tech: ["HTML", "CSS", "JavaScript", "Next.js"],
    roles: ["QA"],
    relevance: {
      QA: "Practicing interaction and responsive behavior checks for an online shop.",
    },
    github: "https://github.com/your-username/bloom-corner",
    live: "https://bloom-corner.vercel.app",
  },
];

export const portfolio = {
  name: "Sithumini Ariyasena",
  title: "Aspiring DevOps / Business Analyst / QA Intern",
  subtitle:
    "Computing & Information Systems Undergraduate, Sabaragamuwa University of Sri Lanka",
  location: "Colombo, Sri Lanka",
  email: "sithuminiariyasena@gmail.com",
  phone: "+94705067302",
  tagline: "Curious about how software is planned, tested and delivered.",
  links: {
    linkedin: "https://www.linkedin.com/in/sithumini-ariyasena/",
    github: "https://github.com/SithuminiAriyasena",
  },
  cvs: [
    { role: "Business Analysis", href: "/cvs/business-analyst-cv.pdf" },
    { role: "DevOps", href: "/cvs/devops-cv.pdf" },
    { role: "QA", href: "/cvs/qa-cv.pdf" },
  ],
  summary:
    "I’m a BSc (Hons) Computing & Information Systems undergraduate (2024 to present, expected graduation 2028) with strong analytical, problem-solving and communication skills. I enjoy turning business needs into clear requirements and user stories, checking software quality through testing and bug reporting, and learning how DevOps, cloud and CI/CD help teams deliver reliably. I’m looking for an internship where I can learn from industry professionals and grow in one of these three areas.",
  roleSummaries: {
    All: "I’m exploring how clear requirements, thoughtful testing and reliable delivery come together to build useful software.",
    DevOps:
      "I’m learning how containers, cloud platforms and CI/CD practices help teams deliver software reliably.",
    "Business Analysis":
      "I enjoy understanding business needs and turning them into clear requirements, user stories and workflows.",
    QA: "I’m building my testing skills by checking expected behavior, documenting issues and thinking carefully about quality.",
  } satisfies Record<PortfolioRole, string>,
  quickFacts: [
    { label: "Degree", value: "BSc (Hons) Computing & Information Systems" },
    { label: "Location", value: "Colombo, Sri Lanka" },
    { label: "Graduation", value: "Expected 2028" },
    { label: "Internships", value: "DevOps · BA · QA" },
  ],
  skills: [
    {
      group: "Business Analysis & Agile",
      roles: ["Business Analysis"] as SpecialtyRole[],
      skills: [
        "Requirements Gathering",
        "User Story Writing",
        "Process Mapping",
        "Workflow Analysis",
        "Agile & Scrum",
        "BRD/SRS Documentation",
      ],
    },
    {
      group: "Software Testing & QA",
      roles: ["QA"] as SpecialtyRole[],
      skills: [
        "Manual Testing",
        "Functional Testing",
        "Bug Reporting",
        "Issue Tracking",
      ],
    },
    {
      group: "DevOps & Cloud",
      roles: ["DevOps"] as SpecialtyRole[],
      skills: [
        "Docker",
        "Kubernetes (learning)",
        "CI/CD fundamentals",
        "Linux (Ubuntu)",
        "Git",
        "GitHub",
        "Microsoft Azure (learning)",
      ],
    },
    {
      group: "Tools",
      roles: ["Business Analysis", "QA", "DevOps"] as SpecialtyRole[],
      skills: ["Jira", "Confluence", "Trello", "Figma", "Lucidchart", "Power BI"],
    },
    {
      group: "Programming & Data",
      roles: ["Business Analysis", "QA", "DevOps"] as SpecialtyRole[],
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "REST APIs",
        "Data Analysis",
      ],
    },
    {
      group: "AI & Automation",
      roles: ["DevOps", "Business Analysis"] as SpecialtyRole[],
      skills: ["Google Gemini", "n8n", "AI Agents", "Workflow Automation"],
    },
    {
      group: "Ways of working",
      roles: ["Business Analysis", "QA", "DevOps"] as SpecialtyRole[],
      skills: [
        "Teamwork",
        "Time Management",
        "Leadership",
        "Effective Communication",
        "Critical Thinking",
        "Attention to Detail",
      ],
    },
  ],
  projects,
  learning: [
    { name: "DevOps Foundations", provider: "LinkedIn Learning", status: "Completed" },
    {
      name: "Build AI Agents with n8n",
      provider: "LinkedIn Learning",
      status: "Completed",
    },
    {
      name: "Certified Kubernetes Administrator (CKA) Learning Path",
      provider: "LinkedIn Learning",
      status: "In progress",
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900) preparation",
      provider: "LinkedIn Learning",
      status: "In progress",
    },
    {
      name: "IEEE Young Protégé 2026 Mentoring Program",
      provider: "DevOps domain",
      status: "In progress",
    },
  ],
  experience: {
    role: "Administrative Assistant",
    organization: "Singer Sri Lanka PLC",
    dates: "Jan 2024 – Jun 2024",
    responsibilities: [
      "Managed inventory records, monitored stock levels and maintained accurate documentation.",
      "Supported data entry and worked with senior management, customers and regional branches.",
      "Helped streamline communication and resolve client inquiries.",
    ],
  },
  education: [
    {
      qualification: "BSc (Hons) Computing & Information Systems",
      institution: "Sabaragamuwa University of Sri Lanka",
      dates: "2024 – Present · Expected graduation 2028",
    },
    {
      qualification: "Physical Science stream",
      institution: "Mo/Mahanama Central College, Monaragala",
      dates: "",
    },
  ],
  community: [
    "Active Member & Volunteer of the Month (2025), IEEE Student Branch SUSL",
    "Organizing Committee Member & Host, IndustryX 2026 (IEEE SUSL)",
    "Host, Tech Talk V3.0 (Society of Computer Sciences SUSL)",
    "Active Member, Rotaract Club and Leo Club of SUSL",
    "Member of IEEE; Volunteer with Society of Computer Sciences SUSL, IEEE SB SUSL and IEEE WIE SUSL",
  ],
} as const;
