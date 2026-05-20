"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sectionLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

const pageLinks = [
  { href: "/about", label: "About Page" },
  { href: "/projects", label: "Projects Page" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "/contact", label: "GH", title: "GitHub" },
  { href: "/contact", label: "LI", title: "LinkedIn" },
  { href: "/contact", label: "FB", title: "Facebook" },
  {
    href: "mailto:akmhumayounalom@gmail.com",
    label: "@",
    title: "Email",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const homeMode = pathname === "/";

  const navItems = homeMode ? sectionLinks : pageLinks;

  return (
    <header className="sticky top-0 z-50">
      <div className="page-shell pt-5">
        <div className="panel-strong flex items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-5 lg:px-6">
          <Link
            href="/"
            className="shrink-0 text-xs font-black tracking-[0.38em] text-white sm:text-sm"
          >
            AKM HUMAYOUN
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/68 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {socialLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                aria-label={item.title}
                title={item.title}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-bold text-white/76 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 lg:hidden"
          >
            Menu
          </button>
        </div>

        {isOpen ? (
          <div className="panel mt-3 rounded-[1.75rem] p-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white/72 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              {socialLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/72 hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
