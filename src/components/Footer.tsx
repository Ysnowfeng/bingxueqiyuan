"use client";

import Link from "next/link";
import { studioProfile } from "@/data/studio";

const quickLinks = [
  { href: "/about", label: "制度" },
  { href: "/blog", label: "文告" },
  { href: "/projects", label: "建设" },
  { href: "/contact", label: "联系" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-black/8">
      <div className="site-shell py-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Footer Note</p>
            <h2 className="font-display mt-3 text-2xl text-foreground">{studioProfile.name}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">
              {studioProfile.description}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-foreground">快速入口</p>
              <div className="mt-4 flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">联络</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <p>核心宗旨：{studioProfile.corePurpose}</p>
                <p>联系邮箱：{studioProfile.publicEmail}</p>
                <p>重建时间：{studioProfile.rebuiltAt}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/8 pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {studioProfile.name}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-left transition-colors hover:text-foreground sm:text-right"
          >
            返回页首
          </button>
        </div>
      </div>
    </footer>
  );
}
