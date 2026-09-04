/**
 * Edit this file to change all portfolio copy, links, and sections.
 * After editing, commit and push — GitHub Pages will rebuild automatically.
 */
export const site = {
  githubUsername: "roopal20",

  name: "Roopal Kulshreshtha",
  role: "Lead AI Engineer · Agentic AI · Data Engineering",
  tagline:
    "I build intelligent AI systems, agent workflows, conversational applications, and reliable data platforms that turn complex business problems into practical automation.",
  location: "India",
  availability:
    "Open to Lead AI Engineering, Agentic AI & Data Engineering opportunities",

  seo: {
    title: "Roopal Kulshreshtha | Lead AI Engineer | Agentic AI | Data Engineering",
    description:
      "Lead AI Engineer specializing in Agentic AI, Generative AI, LLMs, AI chatbots, automation and Data Engineering. Building practical AI systems and intelligent workflows.",
  },

  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/roopal20",
    twitter: "",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ],

  navCta: {
    label: "Let's Build",
    href: "#contact",
  },

  hero: {
    eyebrow: "PORTFOLIO • AI ENGINEERING • 2026",
    ctaPrimary: "Explore AI Work",
    ctaPrimaryHref: "#projects",
    ctaSecondary: "View Résumé",
    ctaSecondaryHref: "/resume.pdf",
  },

  credibility: [
    "12+ Years Engineering",
    "AI / Agentic AI",
    "Data Engineering",
    "Production Systems",
    "AI Chatbots",
    "Automation",
  ],

  capabilities: {
    title: "Where I create leverage",
    intro: "Practical AI systems grounded in engineering discipline.",
    items: [
      {
        label: "AI Agents",
        body: "Designing intelligent workflows that reason, use tools, execute multi-step tasks, and involve humans when needed.",
      },
      {
        label: "Generative AI",
        body: "LLMs, RAG, prompt engineering, structured generation, conversational AI, and AI-powered applications.",
      },
      {
        label: "AI Automation",
        body: "n8n, APIs, workflow orchestration, business automation, and agent-driven execution.",
      },
      {
        label: "Data Engineering",
        body: "Reliable pipelines, data processing, validation, analytics, and infrastructure supporting AI systems.",
      },
    ],
  },

  about: {
    title: "About",
    body: [
      "With 12+ years of software engineering experience, I bring a strong foundation in data systems into AI engineering — designing agents, conversational applications, and automation that hold up in production.",
      "I focus on understanding the business problem first, then architecture, integration, and reliable delivery — from prototype to production.",
    ],
    progression: [
      "12+ Years Software Engineering",
      "Data Engineering",
      "AI / ML",
      "Generative AI",
      "Agentic AI",
    ],
  },

  experience: {
    title: "Experience",
    intro:
      "A progression from deep engineering and data foundations into Lead AI Engineering — building systems that reason, act, and scale.",
    items: [
      {
        company: "Independent / Consulting",
        role: "Lead AI Engineer",
        period: "2024 — Present",
        summary:
          "Designing and shipping agentic AI systems, conversational assistants, and automation workflows for business outcomes.",
        highlights: [
          "Built AI chatbots and lead-qualification flows that connect product knowledge to measurable sales actions.",
          "Designed multi-agent workflows for evaluation, scoring, and structured reasoning with human-in-the-loop controls.",
          "Integrated LLMs with APIs, data stores, and orchestration tools for end-to-end business automation.",
        ],
      },
      {
        company: "Enterprise Engineering",
        role: "Data / Platform Engineer",
        period: "Earlier career",
        summary:
          "Owned reliable data pipelines, validation, and production systems that now underpin AI workloads.",
        highlights: [
          "Built ingestion, transformation, and quality layers teams could trust for analytics and product decisions.",
          "Partnered across engineering and stakeholders to turn ambiguous requirements into durable systems.",
        ],
      },
    ],
  },

  projects: {
    title: "Selected AI work",
    intro:
      "Business problems first — then architecture, agents, data, and delivery.",
    items: [
      {
        number: "01",
        featured: true,
        title: "AI Sales Chatbot & Lead Qualification",
        category: "Conversational AI · Product Intelligence · Lead Qualification",
        description:
          "A web sales assistant that answers product and pricing questions from a local catalog and qualifies interested visitors by capturing contact details.",
        value: [
          "Product discovery",
          "Customer engagement",
          "Lead qualification",
          "Sales enablement",
        ],
        capabilities: [
          "Product and pricing guidance grounded in catalog data",
          "Conversational lead qualification",
          "Captures name, email, company, need, and timeline",
          "Browser-based chat with local lead storage",
        ],
        tags: ["Conversational AI", "LLMs", "RAG", "Python"],
        link: "",
      },
      {
        number: "02",
        featured: false,
        title: "Multi-Agent Resume Analyzer with ATS Scoring",
        category: "Multi-Agent AI Workflow · Evaluation · Structured Reasoning",
        description:
          "Specialized agents extract, match, score, and evaluate resumes against role requirements — producing structured, explainable assessments.",
        value: [],
        capabilities: [
          "Extraction, matching, and scoring as discrete agent roles",
          "Structured evaluation output for hiring workflows",
          "ATS-oriented scoring with clear criteria",
          "Human-readable reasoning trails",
        ],
        tags: ["Multi-Agent", "LangChain", "CrewAI", "LLMs"],
        link: "",
      },
      {
        number: "03",
        featured: false,
        title: "AI-Powered Sales Analytics",
        category: "Business AI · Analytics · Automated Insights",
        description:
          "Turns sales and pipeline data into actionable insights — surfacing patterns, risks, and next-best actions for commercial teams.",
        value: [],
        capabilities: [
          "Automated insight generation from business data",
          "Narrative summaries for decision-makers",
          "Metrics grounded in trusted data sources",
        ],
        tags: ["Analytics", "LLMs", "SQL", "Python"],
        link: "",
      },
      {
        number: "04",
        featured: false,
        title: "AI Agent for Intelligent Data Ingestion",
        category: "AI + Data Engineering · Intelligent Processing",
        description:
          "An agent-assisted ingestion layer that transforms, validates, and routes data with automation and reliability built in.",
        value: [],
        capabilities: [
          "Intelligent parsing and transformation",
          "Validation and exception handling",
          "Reliable processing for downstream AI and analytics",
        ],
        tags: ["AI Agents", "ETL", "Validation", "Python"],
        link: "",
      },
      {
        number: "05",
        featured: false,
        title: "AI Agent for Automated Test Case Generation",
        category: "AI Agent · Test Generation · Validation",
        description:
          "An agent that reasons about requirements and edge cases to generate meaningful test coverage with validation in the loop.",
        value: [],
        capabilities: [
          "Requirement-driven test generation",
          "Edge-case and coverage reasoning",
          "Validation before handoff to engineering",
        ],
        tags: ["AI Agents", "Testing", "Validation", "LLMs"],
        link: "",
      },
    ],
  },

  agentic: {
    title: "Building AI That Can Act",
    body: "I work beyond simple prompt-response applications, designing agentic workflows that can reason through tasks, use tools, interact with data, execute actions, and involve humans when judgment is required.",
    steps: ["Reason", "Retrieve", "Decide", "Act", "Verify"],
    technologies: [
      "LangChain",
      "CrewAI",
      "AutoGen",
      "OpenAI",
      "Claude",
      "RAG",
      "n8n",
      "Python",
      "FastAPI",
      "APIs",
    ],
  },

  conversational: {
    title: "Conversational AI",
    body: "Experience building AI chatbot systems that understand user intent, maintain context, retrieve relevant information, and trigger business actions through APIs and automated workflows.",
    examples: [
      "Product recommendations",
      "Lead qualification",
      "Customer support",
      "Appointment booking",
      "Business FAQs",
    ],
  },

  automation: {
    title: "From AI Workflow to Business Action",
    body: "I build multi-step automation workflows where AI can research, reason, generate, validate, execute, and analyze rather than simply return a text response.",
    highlights: [
      "Agentic social media content generation",
      "AI-driven business workflows",
      "Multi-agent orchestration",
      "API integrations",
      "Automated content generation",
      "Human-in-the-loop controls",
    ],
    sequence: ["Input", "AI Reasoning", "Tools", "Action", "Validation", "Output"],
  },

  skills: {
    title: "Skills",
    intro: "Organized by capability — how work gets done, not a keyword wall.",
    groups: [
      {
        label: "AI & Agentic Systems",
        items: [
          "Generative AI",
          "LLMs",
          "AI Agents",
          "Multi-Agent Systems",
          "RAG",
          "Prompt Engineering",
          "LangChain",
          "CrewAI",
          "AutoGen",
        ],
      },
      {
        label: "Conversational AI",
        items: [
          "AI Chatbots",
          "Conversational AI",
          "Context & Memory",
          "Lead Qualification",
          "Recommendation Workflows",
          "Tool Calling",
        ],
      },
      {
        label: "Automation & Backend",
        items: ["n8n", "APIs", "Python", "FastAPI", "Docker"],
      },
      {
        label: "Data Engineering",
        items: ["SQL", "PostgreSQL", "PySpark", "Kafka", "ETL/ELT", "Data Validation"],
      },
      {
        label: "Cloud & Engineering",
        items: ["AWS", "CI/CD", "Testing", "Production Engineering"],
      },
    ],
  },

  blog: {
    title: "Blog",
    intro: "Notes on AI engineering, agentic systems, and production delivery.",
    emptyMessage: "No posts yet — check back soon.",
  },

  contact: {
    title: "Have an AI problem worth solving?",
    body: "AI agent, chatbot, automation, data or LLM project? Let's discuss the problem and find a practical way to build it.",
    note: "Available for Lead AI Engineering, Agentic AI and AI Automation opportunities.",
    cta: "Start a Conversation",
  },

  footer: {
    note: "Lead AI Engineer · Agentic AI · Data Engineering",
  },
};

export type SiteContent = typeof site;
