import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Web Development",
  "WordPress Development",
  "Web Design",
  "SEO Optimization",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="page-shell py-12">
        <div className="dark-card purple-glow grid gap-8 rounded-[2rem] p-8 sm:p-10 lg:grid-cols-[1.15fr_0.8fr_0.85fr_0.95fr]">
          <div>
            <p className="text-2xl font-black tracking-tight text-white">
              AKM HUMAYOUN
            </p>
            <p className="mt-4 max-w-md text-base leading-7 text-white/68">
              Full Stack Developer, Expert Next.js Developer, Web Designer, and
              WordPress Developer creating modern websites for growing brands.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/62">
              <p>Email: akmhumayounalom@gmail.com</p>
              <p>Phone: 01748303987</p>
              <p>Location: Bangladesh</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c9a8ff]">
              Quick Links
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-white/68 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c9a8ff]">
              Services
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <p key={service} className="text-sm font-semibold text-white/68">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c9a8ff]">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm font-semibold text-white/68">
              <p>Facebook: Akm tahmidul Alom Tahmid</p>
              <p>LinkedIn: Not added yet</p>
              <p>GitHub: Not added yet</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/42">
          Copyright 2026 Akm Humayoun Alom. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
