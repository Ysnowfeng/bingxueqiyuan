"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { studioProfile } from "@/data/studio";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "制度概览" },
  { href: "/blog", label: "公告归档" },
  { href: "/projects", label: "建设项目" },
  { href: "/contact", label: "联络方式" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/8 bg-white/88 backdrop-blur-md">
      <div className="site-shell">
        <div className="flex h-17 items-center justify-between gap-6">
          <Link href="/" className="min-w-0">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Studio Charter</p>
            <p className="font-display truncate pt-1 text-lg text-foreground">{studioProfile.name}</p>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm transition-colors ${
                  isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.href) && <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-accent" />}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="rounded-full border border-black/10 px-3 py-2 text-sm text-muted-foreground md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            菜单
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-black/8 py-3 md:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 text-sm ${
                    isActive(link.href) ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
