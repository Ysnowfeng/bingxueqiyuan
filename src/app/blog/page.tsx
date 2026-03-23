import Link from "next/link";

const posts = [
  {
    slug: "typescript-decorators",
    title: "TypeScript 5.0 装饰器完全指南",
    date: "2026-03-20",
    excerpt: "深入解析 TC39 装饰器提案，探讨如何在现代 TypeScript 项目中优雅地使用装饰器模式。涵盖装饰器的基础语法、常见场景和最佳实践。",
    tags: ["TypeScript", "装饰器"],
    readingTime: "8 min",
  },
  {
    slug: "microservices-architecture",
    title: "从零打造高可用微服务架构",
    date: "2026-03-15",
    excerpt: "基于 NestJS + Docker + K8s 的微服务实战经验总结，涵盖服务发现、熔断降级、链路追踪等核心概念和实现方案。",
    tags: ["架构", "微服务", "NestJS"],
    readingTime: "12 min",
  },
  {
    slug: "nodejs-performance",
    title: "Node.js 性能优化十大法则",
    date: "2026-03-08",
    excerpt: "结合实际项目经验，分享 V8 引擎、内存管理、异步 IO 等方面的优化技巧，让你的 Node.js 应用飞起来！",
    tags: ["Node.js", "性能"],
    readingTime: "10 min",
  },
  {
    slug: "react-best-practices",
    title: "React 最佳实践清单",
    date: "2026-02-28",
    excerpt: "总结多年 React 开发经验，涵盖组件设计、状态管理、性能优化、测试等方面的一些实用建议和避坑指南。",
    tags: ["React", "最佳实践"],
    readingTime: "15 min",
  },
];

export default function Blog() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">博客</h1>
          <p className="text-muted-foreground text-lg">
            记录技术心得，分享成长历程 📝
          </p>
          <div className="h-1 w-20 bg-accent rounded mt-4" />
        </section>

        {/* Post List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-6 sm:p-8 bg-muted/30 border border-border rounded-xl hover:border-accent transition-colors group"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readingTime} 阅读</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-accent hover:underline"
                >
                  阅读全文 →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state hint */}
        <div className="mt-12 text-center py-12 border border-dashed border-border rounded-xl">
          <p className="text-muted-foreground">
            更多文章正在路上... 🚧
          </p>
        </div>
      </div>
    </div>
  );
}
