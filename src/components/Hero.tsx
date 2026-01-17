// src/components/Hero.tsx
import { profile } from "@/data/profile";
import { Mail, Linkedin, Github, Download } from "lucide-react";

export default function Hero() {
  const hasPhoto = true;

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-[1fr_180px] sm:items-start">
          <div>
            <p className="text-sm text-slate-600">{profile.location}</p>

            <h1 className="text-4xl sm:text-5xl font-semibold">
              {profile.headline}
            </h1>

            <p className="mt-2 text-lg text-slate-600">
              {profile.subHeadline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
              {profile.summary[0]}
            </p>

            {"availability" in profile && (
              <p className="mt-3 text-sm text-slate-600">{profile.availability}</p>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-outline gap-2">
                <Mail className="h-4 w-4" />
                Email
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="/Suraj_Reddy_Alluri_Resume.pdf"
                className="btn btn-primary gap-2 shadow-md"
                download
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>


            {"topTech" in profile && (
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.topTech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="sm:justify-self-end">
            <div className="h-28 w-28 overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:h-40 sm:w-40">
              {hasPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/profile.jpg"
                  alt={`${profile.name} profile photo`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-50">
                  <span className="text-sm font-semibold text-slate-500">
                    {profile.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {"stats" in profile && (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-base font-semibold leading-tight text-slate-900">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}