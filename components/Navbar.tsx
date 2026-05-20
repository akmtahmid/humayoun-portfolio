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

const socialLinks = [
  { href: "/contact", label: "GitHub" },
  { href: "/contact", label: "LinkedIn" },
  { href: "/contact", label: "Facebook" },
  { href: "mailto:akmhumayounalom@gmail.com", label: "Email" },
  { href: "#", label: "Theme" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1b1b1b]/92 backdrop-blur-xl">
      <div className="page-shell py-4">
        <div className="nav-pill flex items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:rounded-[2rem]">
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/58 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className="justify-self-center rounded-full border border-white/14 px-5 py-3 text-center text-sm font-black tracking-[0.28em] text-white sm:px-7"
          >
            AKM HUMAYOUN
          </Link>

          <div className="hidden items-center justify-end gap-4 lg:flex">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/55 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-full border border-white/14 px-4 py-2 text-sm font-semibold text-white lg:hidden"
          >
            Menu
          </button>
        </div>

        {isOpen ? (
          <div className="dark-card mt-4 rounded-[1.6rem] p-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
