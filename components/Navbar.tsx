"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const utilityLinks = [
  { href: "#", label: "M", title: "Moon" },
  { href: "/contact", label: "GH", title: "GitHub" },
  { href: "/contact", label: "LI", title: "LinkedIn" },
  { href: "/contact", label: "FB", title: "Facebook" },
  { href: "mailto:akmhumayounalom@gmail.com", label: "@", title: "Email" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#07070f]/72 backdrop-blur-2xl">
      <div className="page-shell py-4">
        <div className="nav-pill relative flex items-center justify-between gap-4 rounded-full px-4 py-3 shadow-[0_22px_70px_-45px_rgba(124,58,237,0.88)] lg:grid lg:grid-cols-[auto_1fr_auto] lg:px-6">
          <Link
            href="/"
            className="shrink-0 rounded-full border border-[#9f67ff]/28 bg-white/[0.03] px-4 py-3 text-xs font-black tracking-[0.28em] text-white shadow-[0_0_0_1px_rgba(159,103,255,0.18)] sm:px-5 sm:text-sm"
          >
            {"</>"} AKM HUMAYOUN
          </Link>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-sm font-semibold ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/62 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[linear-gradient(90deg,#7c3aed,#a855f7,#4f9cff)]" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {utilityLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                aria-label={link.title}
                title={link.title}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-black text-white/72 hover:border-[#9f67ff]/40 hover:bg-[#9f67ff]/12 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="purple-button inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
            >
              Hire Me
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white lg:hidden"
          >
            Menu
          </button>
        </div>

        {isOpen ? (
          <div className="dark-card mt-4 rounded-[1.8rem] p-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold ${
                    isActive(link.href)
                      ? "text-[#c9a8ff]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              {utilityLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="inline-flex min-w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/75 hover:border-[#9f67ff]/40 hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="purple-button inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
              >
                Hire Me
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
