"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Next.js Development",
  "Full Stack Web Apps",
  "Web Design",
  "WordPress Development",
];

const contactItems = [
  "Bangladesh",
  "akmhumayounalom@gmail.com",
  "01748303987",
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/demo")) {
    return null;
  }

  return (
    <footer className="page-shell pb-8 pt-6">
      <div className="panel rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <p className="text-lg font-semibold tracking-[0.28em] text-white">
              AKM HUMAYOUN
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
              Full Stack Web App Developer creating modern, conversion-focused
              digital experiences with Next.js, design clarity, and reliable delivery.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/62">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
              Services
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/62">
              {services.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
              Contact Info
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/62">
              {contactItems.map((item) => (
                <p key={item} className="break-all">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/45">
          Copyright © 2026 Akm Humayoun Alom. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
