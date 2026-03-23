import Link from "next/link";

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: "🐙" },
  { href: "https://twitter.com", label: "Twitter", icon: "🐦" },
  { href: "https://juejin.cn", label: "掘金", icon: "✏️" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} 小增老师. 用 ❤️ 和代码构建.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:scale-110 hover:text-accent transition-all"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            ↑ 回到顶部
          </Link>
        </div>
      </div>
    </footer>
  );
}
