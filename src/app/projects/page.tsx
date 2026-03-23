import Link from "next/link";

const projects = [
  {
    name: "fast-api-starter",
    description: "轻量级 Node.js RESTful API 脚手架，开箱即用的认证、权限、日志方案",
    tech: ["TypeScript", "Express", "Prisma", "PostgreSQL"],
    stars: 520,
    icon: "🚀",
    link: "#",
  },
  {
    name: "vue-dashboard",
    description: "美观实用的 Vue3 后台管理模板，集成 ECharts 图表和权限控制",
    tech: ["Vue3", "Pinia", "Element+", "ECharts"],
    stars: 380,
    icon: "📊",
    link: "#",
  },
  {
    name: "cli-toolkit",
    description: "命令行工具开发框架，支持交互式问答、进度条、表格渲染",
    tech: ["Node.js", "Commander", "Inquirer"],
    stars: 245,
    icon: "🛠️",
    link: "#",
  },
  {
    name: "react-hook-utils",
    description: "实用的 React Hooks 工具库，包含 useDebounce、useStorage 等常用 hooks",
    tech: ["React", "TypeScript", "Rollup"],
    stars: 890,
    icon: "⚓",
    link: "#",
  },
  {
    name: "mini-orm",
    description: "轻量级 ORM 库，支持链式调用、事务、关联查询",
    tech: ["TypeScript", "Knex"],
    stars: 156,
    icon: "💾",
    link: "#",
  },
  {
    name: "blog-cms",
    description: "基于 Next.js 的博客 CMS 系统，支持 Markdown 编辑和主题切换",
    tech: ["Next.js", "MDX", "TailwindCSS"],
    stars: 420,
    icon: "✍️",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">开源项目</h1>
          <p className="text-muted-foreground text-lg">
            热爱开源，分享代码 💻
          </p>
          <div className="h-1 w-20 bg-accent rounded mt-4" />
        </section>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 bg-muted/30 border border-border rounded-xl hover:border-accent-purple transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <a
                  href={project.link}
                  className="text-muted-foreground hover:text-accent transition-colors"
                  title="查看源码"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                <a href={project.link}>{project.name}</a>
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-accent-green">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <span>⭐</span> {project.stars}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center py-8 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground mb-4">
            想看更多？访问我的 GitHub
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            <span>🐙</span> github.com/xiaozeng
          </a>
        </div>
      </div>
    </div>
  );
}
