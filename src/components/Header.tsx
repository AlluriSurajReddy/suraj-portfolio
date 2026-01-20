import { profile } from "@/data/profile";

const nav = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="w-full px-6">
                <div className="flex h-16 items-center justify-between">

                    {/* Left: Name */}
                    <a
                        href="#"
                        className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 hover:text-[rgb(var(--accent))] transition"
                    >
                        {profile.name}
                    </a>

                    {/* Center Nav (hidden on mobile) */}
                    <nav className="hidden md:flex items-center gap-7 text-sm text-slate-700">
                        {nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="relative text-slate-700 transition hover:text-slate-900 
              after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full 
              after:bg-[rgb(var(--accent))] after:transition-all hover:after:w-full"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Social buttons */}
                    <div className="flex items-center gap-3">
                        <a
                            href={profile.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline px-3 py-1.5"
                        >
                            LinkedIn
                        </a>

                        <a
                            href={profile.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline px-3 py-1.5"
                        >
                            GitHub
                        </a>
                    </div>

                </div>
            </div>
        </header>
    );
}