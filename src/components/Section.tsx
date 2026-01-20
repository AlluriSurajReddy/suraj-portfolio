import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      className="py-10 sm:py-12"
      style={{ scrollMarginTop: "var(--nav-offset)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-widest text-slate-500">
            {eyebrow.toUpperCase()}
          </p>
        ) : null}

        <div className="mt-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <div
            className="mt-3 h-1 w-10 rounded-full"
            style={{ backgroundColor: `rgb(var(--accent))` }}
          />
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}