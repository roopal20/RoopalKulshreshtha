/**
 * Edit this file to change all portfolio copy, links, and sections.
 * After editing, commit and push — GitHub Pages will rebuild automatically.
 */
export const site = {
  githubUsername: "roopal20",

  name: "Roopal Kulshreshtha",
  role: "Data Engineer",
  tagline:
    "I design reliable data pipelines and turn messy sources into trusted insights for product and analytics teams.",
  location: "India",
  availability: "Open to full-time roles",

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

  hero: {
    eyebrow: "Portfolio · Job search 2026",
    ctaPrimary: "View work",
    ctaPrimaryHref: "#projects",
    ctaSecondary: "Download résumé",
    ctaSecondaryHref: "/resume.pdf",
  },

  about: {
    title: "About",
    body: [
      "I build data systems that teams can trust — from ingestion and modeling to dashboards and operational alerts.",
      "My focus is pragmatic engineering: clear contracts, observable pipelines, and documentation that helps the next person move faster.",
    ],
  },

  experience: {
    title: "Experience",
    intro: "Selected roles and impact. Update these bullets to match your résumé.",
    items: [
      {
        company: "Company Name",
        role: "Data Engineer",
        period: "2023 — Present",
        summary:
          "Owned batch and near-real-time pipelines powering analytics and product metrics.",
        highlights: [
          "Reduced pipeline failure rate with retries, idempotent writes, and clearer SLAs.",
          "Modeled core domain tables that became the source of truth for reporting.",
          "Partnered with analysts to cut dashboard refresh time and improve data freshness.",
        ],
      },
      {
        company: "Previous Company",
        role: "Analytics / Data Associate",
        period: "2021 — 2023",
        summary:
          "Supported reporting and built foundational ETL for growing data needs.",
        highlights: [
          "Automated recurring reports previously maintained in spreadsheets.",
          "Documented data definitions so stakeholders shared a common vocabulary.",
        ],
      },
    ],
  },

  projects: {
    title: "Projects",
    intro: "A few pieces of work you can discuss in interviews.",
    items: [
      {
        title: "End-to-end analytics warehouse",
        description:
          "Designed a layered warehouse (raw → curated → marts) with scheduled transforms and quality checks.",
        tags: ["SQL", "dbt", "Airflow", "Warehousing"],
        link: "",
      },
      {
        title: "Streaming ingestion prototype",
        description:
          "Prototype for event ingestion with schema validation and late-arriving data handling.",
        tags: ["Kafka", "Python", "Spark"],
        link: "",
      },
      {
        title: "Data quality dashboard",
        description:
          "Lightweight monitoring for freshness, volume anomalies, and null-rate thresholds.",
        tags: ["Python", "SQL", "Observability"],
        link: "",
      },
    ],
  },

  skills: {
    title: "Skills",
    intro: "Tools I use day to day — edit freely.",
    groups: [
      {
        label: "Languages",
        items: ["SQL", "Python", "Spark SQL"],
      },
      {
        label: "Platforms & orchestration",
        items: ["Airflow", "dbt", "AWS / GCP", "Docker"],
      },
      {
        label: "Storage & processing",
        items: ["PostgreSQL", "BigQuery / Snowflake", "Spark", "Kafka"],
      },
      {
        label: "Practices",
        items: ["Data modeling", "Testing", "CI/CD", "Documentation"],
      },
    ],
  },

  blog: {
    title: "Blog",
    intro: "Notes on data engineering, career, and what I’m learning.",
    emptyMessage: "No posts yet — check back soon.",
  },

  contact: {
    title: "Let’s talk",
    body: "Open to data engineering roles. Happy to share more detail on recent projects or walk through a case study.",
    cta: "Email me",
  },

  footer: {
    note: "Built for my job search · Easy to update, hosted on GitHub Pages",
  },
} as const;

export type SiteContent = typeof site;
