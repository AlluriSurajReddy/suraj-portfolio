import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import { Cloud, ShieldCheck, Gauge, Wrench } from "lucide-react";
import { Server, Layout, Database, Network, TestTube } from "lucide-react";

const highlightIcons = {
  cloud: Cloud,
  shield: ShieldCheck,
  gauge: Gauge,
  wrench: Wrench,
} as const;

type HighlightIconKey = keyof typeof highlightIcons;

const skillIcons = {
  Backend: Server,
  Frontend: Layout,
  "Cloud & DevOps": Cloud,
  Data: Database,
  "Distributed Systems": Network,
  "Testing & Tools": TestTube,
} as const;

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div
            className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
            style={{ background: `radial-gradient(circle at 30% 30%, rgb(var(--accent)), transparent 60%)` }}
          />
          <div
            className="absolute right-[-220px] top-[240px] h-[520px] w-[520px] rounded-full blur-3xl opacity-20"
            style={{ background: `radial-gradient(circle at 40% 40%, rgb(var(--accent-2)), transparent 60%)` }}
          />
        </div>

        <Section id="about" title="About" eyebrow="Introduction">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="max-w-none space-y-3 text-sm leading-relaxed text-slate-700">
                {profile.about.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="highlights" title="Highlights" eyebrow="At a glance">
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.highlights.map((h, idx) => {
              const Icon = highlightIcons[h.icon as HighlightIconKey] ?? Cloud;
              return (
                <Reveal key={h.title} delayMs={idx * 80}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "rgb(var(--accent) / 0.12)" }}
                      >
                        <Icon className="h-5 w-5" style={{ color: "rgb(var(--accent))" }} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">{h.title}</p>
                        <p className="mt-2 text-sm text-slate-700">{h.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <Section id="skills" title="Skills" eyebrow="Core stack">
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.skills.map((block) => {
              const Icon = skillIcons[block.group as keyof typeof skillIcons] ?? Server;

              return (
                <div key={block.group} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[rgb(var(--accent))]" />
                    <p className="text-sm font-semibold text-slate-900">{block.group}</p>

                  </div>

                  {/* chips below */}
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="chip"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="approach" title="Engineering Approach" eyebrow="How I work">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="max-w-none space-y-3 text-sm leading-relaxed text-slate-700">
                {profile.approach.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="experience" title="Experience" eyebrow="Career">
          <Reveal>
            <div className="space-y-4">
              {profile.experience.map((job) => (
                <article
                  key={`${job.company}-${job.role}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{job.role}</h3>
                      <p className="text-sm text-slate-700">{job.company}</p>
                    </div>
                    <p className="text-sm text-slate-600 sm:text-right">{job.period}</p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    <span className="font-semibold text-slate-900">Context:</span>{" "}
                    {job.context}
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                    {job.impact.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="education" title="Education" eyebrow="Background">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm leading-relaxed text-slate-700">
                <p className="font-semibold text-slate-900">
                  {profile.education.degree} — {profile.education.school}
                </p>
                <p className="mt-1">{profile.education.note}</p>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="projects" title="Featured Projects" eyebrow="Portfolio">
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.projects
              .filter((p) => p.featured)
              .map((p, idx) => (
                <Reveal key={p.name} delayMs={idx * 90}>
                  <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

                    <p className="text-sm font-semibold text-slate-900">{p.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {p.oneLiner}
                    </p>

                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                      <p>
                        <span className="font-semibold text-slate-900">Problem:</span>{" "}
                        {p.problem}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Solution:</span>{" "}
                        {p.solution}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Impact:</span>{" "}
                        {p.impact}
                      </p>
                    </div>

                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      {p.links.github ? (
                        <a
                          href={p.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary"
                        >
                          View on GitHub
                        </a>
                      ) : (
                        <span className="text-sm text-slate-500">
                          GitHub link (add later)
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" eyebrow="Get in touch">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Want to connect?
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Best way: email. I usually respond within a day.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}`} className="btn btn-primary">
                    Email me
                  </a>

                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                {profile.email}
              </div>
            </div>
          </Reveal>
        </Section>
      </div>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-4xl px-6 text-sm text-slate-600">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </main>
  );
}