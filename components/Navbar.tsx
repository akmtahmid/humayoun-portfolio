"use client";

import { Menu, X } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/demo", label: "Demo" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "/contact", label: "GitHub", icon: FaGithub, title: "GitHub not added yet" },
  { href: "/contact", label: "LinkedIn", icon: FaLinkedinIn, title: "LinkedIn not added yet" },
  { href: "/contact", label: "Facebook", icon: FaFacebookF, title: "Facebook" },
  {
    href: "mailto:akmhumayounalom@gmail.com",
    label: "Email",
    icon: MdEmail,
    title: "Email Akm Humayoun Alom",
  },
];

const demoNavLinks = [
  { href: "/demo#filters", label: "Web Development" },
  { href: "/demo#filters", label: "App Development" },
  { href: "/demo#filters", label: "UI/UX Design" },
  { href: "/demo#filters", label: "Branding" },
  { href: "/demo#filters", label: "SEO" },
  { href: "/demo#filters", label: "Social Media" },
  { href: "/demo#filters", label: "Inventory" },
];

function DemoNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/demo" className="text-xl font-black tracking-tight text-slate-900">
          DemoProjects
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {demoNavLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(124,58,237,0.22)] hover:bg-violet-700"
          >
            Contact About Demo
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle demo navigation"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 xl:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {demoNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-700"
            >
              Contact About Demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith("/demo")) {
    return <DemoNavbar />;
  }

  return (
    <header className="sticky top-0 z-50 animate-slide-down">
      <div className="page-shell pt-5">
        <div className="panel-strong flex items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-5 lg:px-6">
          <Link
            href="/"
            className="shrink-0 text-xs font-black tracking-[0.35em] text-white sm:text-sm"
          >
            AKM HUMAYOUN
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative pb-1 text-sm font-medium ${
                    isActive ? "text-white" : "text-white/68 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-blue-400 transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                title={item.title}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-bold tracking-[0.15em] text-white/78 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="panel mt-3 rounded-[1.75rem] p-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-white/[0.07] text-white"
                        : "text-white/72 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/72 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
