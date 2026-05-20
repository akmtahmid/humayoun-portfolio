import Link from "next/link";

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="page-shell pb-8 pt-6">
      <div className="panel rounded-[2rem] px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.28em] text-white">
              AKM HUMAYOUN
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
              Full Stack Web App Developer, Expert Next.js Developer, Web
              Designer, and WordPress Developer based in Bangladesh.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/62">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 Akm Humayoun Alom</p>
          <p>Bangladesh • akmhumayounalom@gmail.com • 01748303987</p>
        </div>
      </div>
    </footer>
  );
}
