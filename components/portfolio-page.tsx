"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Circle,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  portfolio,
  type PortfolioRole,
  type SpecialtyRole,
} from "@/data/portfolio";

const roles: PortfolioRole[] = ["All", "DevOps", "Business Analysis", "QA"];
const navigation = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const roleShortName: Record<SpecialtyRole, string> = {
  DevOps: "DevOps",
  "Business Analysis": "BA",
  QA: "QA",
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-9 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeRole, setActiveRole] = useState<PortfolioRole>("All");
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (isDark: boolean) => {
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    };

    if (storedTheme === "light" || storedTheme === "dark") {
      updateTheme(storedTheme === "dark");
      return;
    }

    updateTheme(mediaQuery.matches);
    const handlePreferenceChange = (event: MediaQueryListEvent) =>
      updateTheme(event.matches);
    mediaQuery.addEventListener("change", handlePreferenceChange);
    return () => mediaQuery.removeEventListener("change", handlePreferenceChange);
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    window.localStorage.setItem("portfolio-theme", nextMode ? "dark" : "light");
  };

  const isRelevant = (supportedRoles: readonly SpecialtyRole[]) =>
    activeRole === "All" || supportedRoles.includes(activeRole);

  const orderedSkills = [...portfolio.skills].sort((a, b) => {
    if (activeRole === "All") return 0;
    return Number(b.roles.includes(activeRole)) - Number(a.roles.includes(activeRole));
  });

  const orderedProjects = [...portfolio.projects].sort((a, b) => {
    if (activeRole === "All") return 0;
    return Number(b.roles.includes(activeRole)) - Number(a.roles.includes(activeRole));
  });

  const toggleRole = (role: PortfolioRole) => {
    setActiveRole(role);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-surface px-4 py-2 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          <a href="#home" className="font-semibold tracking-tight">
            SA<span className="text-accent">.</span>
            <span className="sr-only"> {portfolio.name}</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition hover:bg-surface hover:text-foreground"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-3 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col">
              {navigation.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border py-3 text-sm text-muted last:border-0"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="main-content">
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:py-28"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-2 text-sm font-medium text-accent">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-30 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-current" />
              </span>
              Open to internships
            </div>
            <p className="mb-4 text-sm font-medium text-muted">
              {portfolio.subtitle}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.07] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {portfolio.name}
            </h1>
            <p className="mt-5 text-lg font-medium text-accent sm:text-xl">
              {portfolio.title}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              {portfolio.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={portfolio.links.cv}
                download
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 dark:text-slate-950"
              >
                Download CV <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-surface"
              >
                Contact Me <ArrowDownRight size={16} />
              </a>
              <a
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition hover:bg-surface"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition hover:bg-surface"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <div className="mt-9 flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} className="text-accent" />
              {portfolio.location}
              <span className="mx-1 text-border">/</span>
              <a
                href={`mailto:${portfolio.email}`}
                className="transition hover:text-accent"
              >
                {portfolio.email}
              </a>
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-accent">A little about me</p>
            <p className="mt-3 text-base leading-7">{portfolio.roleSummaries[activeRole]}</p>
            <div className="mt-7 border-t border-border pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                Explore my interests
              </p>
              <div
                className="mt-4 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter portfolio by role"
              >
                {roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    aria-pressed={activeRole === role}
                    onClick={() => toggleRole(role)}
                    className={`min-h-10 rounded-full border px-4 text-sm font-medium transition ${
                      activeRole === role
                        ? "border-accent bg-accent text-white dark:text-slate-950"
                        : "border-border text-muted hover:border-accent/50 hover:text-foreground"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="border-y border-border bg-surface/50">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:py-24">
            <FadeIn className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-full border border-border bg-surface shadow-xl">
                <Image
                  src="/sithumini-ariyasena.jpg"
                  alt="Portrait of Sithumini Ariyasena"
                  fill
                  sizes="(max-width: 1024px) 80vw, 360px"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <SectionHeading eyebrow="About" title="Learning with purpose." />
              <p className="max-w-2xl text-base leading-8 text-muted">
                {portfolio.summary}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {portfolio.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-border bg-surface p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6">{fact.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Skills"
              title="Things I’m learning and practicing."
              description="My skills are growing through coursework, project work and independent learning. Select a role above to bring the most relevant groups forward."
            />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orderedSkills.map((group, index) => {
              const relevant = isRelevant(group.roles);
              return (
                <FadeIn key={group.group} delay={index * 0.025}>
                  <article
                    className={`h-full rounded-xl border p-5 transition-colors ${
                      relevant
                        ? "border-accent/35 bg-surface"
                        : "border-border bg-surface/50 opacity-70"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold">{group.group}</h3>
                      <RoleTags roles={group.roles} activeRole={activeRole} />
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md bg-background px-2.5 py-1.5 text-xs text-muted"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section id="projects" className="border-y border-border bg-surface/50">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <FadeIn>
              <SectionHeading
                eyebrow="Projects"
                title="Learning by building."
                description="These projects help me practice analysis, testing, automation and delivery. The role filter highlights the projects most connected to each area."
              />
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {orderedProjects.map((project, index) => {
                const relevant = isRelevant(project.roles);
                const relevanceText =
                  activeRole !== "All" && project.relevance[activeRole]
                    ? project.relevance[activeRole]
                    : project.contribution;
                return (
                  <FadeIn key={project.id} delay={index * 0.035}>
                    <article
                      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-colors ${
                        relevant ? "border-accent/35" : "border-border opacity-75"
                      }`}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-slate-950">
                        {project.previewImage ? (
                          <Image
                            src={project.previewImage}
                            alt={`${project.name} website preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                          />
                        ) : (
                          <ProjectPreviewPlaceholder
                            projectName={project.name}
                            imagePath={`/public/projects/${project.id}-preview.png`}
                          />
                        )}
                        <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-slate-950/75 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                          Website preview
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <h3 className="text-xl font-semibold tracking-tight">
                            {project.name}
                          </h3>
                          {project.status && (
                            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                              {project.status}
                            </span>
                          )}
                        </div>
                        <p className="mt-3 leading-7 text-muted">{project.description}</p>
                        <div className="mt-4 rounded-lg bg-accent-soft/60 p-3.5">
                          <p className="text-xs font-bold uppercase tracking-wide text-accent">
                            {activeRole === "All"
                              ? "My learning focus"
                              : `${activeRole} relevance`}
                          </p>
                          <p className="mt-2 text-sm leading-6">{relevanceText}</p>
                        </div>
                        <div className="mt-4">
                          <RoleTags roles={project.roles} activeRole={activeRole} />
                        </div>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {project.tech.map((item) => (
                            <li
                              key={item}
                              className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto flex gap-5 pt-5">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                          >
                            <Github size={15} /> GitHub <ArrowUpRight size={13} />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                          >
                            Live <ArrowUpRight size={13} />
                          </a>
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section id="journey" className="border-y border-border bg-surface/50">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <FadeIn>
              <SectionHeading
                eyebrow="Learning journey"
                title="Always curious, always learning."
              />
            </FadeIn>
            <ol className="grid gap-4 md:grid-cols-2">
              {portfolio.learning.map((item, index) => (
                <FadeIn key={item.name} delay={index * 0.03}>
                  <li className="flex h-full gap-4 rounded-xl border border-border bg-surface p-5">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      {item.status === "Completed" ? (
                        <Check size={17} />
                      ) : (
                        <Circle size={14} />
                      )}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="font-semibold leading-6">{item.name}</h3>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            item.status === "Completed"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                              : "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted">{item.provider}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Experience & education"
              title="Experience that shapes how I work."
            />
          </FadeIn>
          <div className="grid gap-5 lg:grid-cols-2">
            <FadeIn>
              <article className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Code2 size={21} />
                  </span>
                  <div>
                    <p className="text-sm text-muted">{portfolio.experience.dates}</p>
                    <h3 className="mt-1 text-lg font-semibold">
                      {portfolio.experience.role}
                    </h3>
                    <p className="mt-1 text-sm text-accent">
                      {portfolio.experience.organization}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {portfolio.experience.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                      <Check size={15} className="mt-1 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="space-y-4">
                {portfolio.education.map((item) => (
                  <article
                    key={item.institution}
                    className="rounded-2xl border border-border bg-surface p-6"
                  >
                    <p className="text-sm text-muted">{item.dates || "Education"}</p>
                    <h3 className="mt-2 font-semibold">{item.qualification}</h3>
                    <p className="mt-1 text-sm text-accent">{item.institution}</p>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="border-y border-border bg-surface/50">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <FadeIn>
              <SectionHeading
                eyebrow="Leadership & community"
                title="Growing through community."
              />
            </FadeIn>
            <ul className="grid gap-3 sm:grid-cols-2">
              {portfolio.community.map((item, index) => (
                <FadeIn key={item} delay={index * 0.025}>
                  <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface p-5 text-sm leading-6">
                    <Check size={16} className="mt-1 shrink-0 text-accent" />
                    {item}
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <FadeIn>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s connect."
                description="I’m looking for an internship where I can learn from industry professionals and contribute with curiosity, care and a willingness to grow."
              />
              <div className="space-y-4">
                <a
                  href={`mailto:${portfolio.email}`}
                  className="flex items-center gap-3 text-sm font-medium transition hover:text-accent"
                >
                  <Mail size={18} className="text-accent" /> {portfolio.email}
                </a>
                <a
                  href={portfolio.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm font-medium transition hover:text-accent"
                >
                  <Linkedin size={18} className="text-accent" /> LinkedIn
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={portfolio.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm font-medium transition hover:text-accent"
                >
                  <Github size={18} className="text-accent" /> GitHub
                  <ArrowUpRight size={14} />
                </a>
                <p className="pt-2 text-sm text-muted">References available on request.</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {portfolio.name}. Built while learning.</p>
          <a href="#home" className="inline-flex items-center gap-1 hover:text-accent">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}

function ProjectPreviewPlaceholder({
  projectName,
  imagePath,
}: {
  projectName: string;
  imagePath: string;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,_rgba(20,184,166,0.25),_transparent_35%),linear-gradient(135deg,_#0f172a,_#1e293b)] p-5">
      <div className="w-full max-w-[85%] overflow-hidden rounded-lg border border-white/20 bg-slate-50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="flex h-5 items-center gap-1 border-b border-slate-200 bg-white px-2">
          <span className="size-1.5 rounded-full bg-rose-400" />
          <span className="size-1.5 rounded-full bg-amber-400" />
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <span className="ml-2 h-2 flex-1 rounded-full bg-slate-100" />
        </div>
        <div className="grid min-h-28 grid-cols-[0.32fr_1fr] sm:min-h-36">
          <div className="space-y-2 bg-teal-700 p-3">
            <div className="h-2 w-3/4 rounded bg-white/80" />
            <div className="mt-4 h-2 w-full rounded bg-white/30" />
            <div className="h-2 w-4/5 rounded bg-white/30" />
            <div className="h-2 w-5/6 rounded bg-white/30" />
          </div>
          <div className="bg-slate-50 p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="h-2.5 w-2/5 rounded bg-slate-700/80" />
              <span className="h-4 w-12 rounded bg-teal-600/80" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <span className="h-5 rounded bg-teal-100" />
              <span className="h-5 rounded bg-amber-100" />
              <span className="h-5 rounded bg-sky-100" />
            </div>
            <div className="mt-3 space-y-1.5">
              <span className="block h-2 rounded bg-slate-200" />
              <span className="block h-2 w-4/5 rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-slate-950/75 px-3 py-2 text-[10px] text-white backdrop-blur">
        <span className="font-medium">{projectName}</span>
        <span className="text-white/70">Add screenshot: {imagePath}</span>
      </div>
    </div>
  );
}

function RoleTags({
  roles: supportedRoles,
  activeRole,
}: {
  roles: readonly SpecialtyRole[];
  activeRole: PortfolioRole;
}) {
  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Relevant roles">
      {supportedRoles.map((role) => (
        <span
          key={role}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            activeRole === role
              ? "bg-accent text-white dark:text-slate-950"
              : "bg-accent-soft text-accent"
          }`}
        >
          {roleShortName[role]}
        </span>
      ))}
    </div>
  );
}
