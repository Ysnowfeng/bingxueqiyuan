export default function About() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            关于我 <span className="wave">👨‍💻</span>
          </h1>
          <div className="h-1 w-20 bg-accent rounded mb-8" />
        </section>

        {/* Bio */}
        <section className="mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            你好！我是一名全栈开发者，目前专注于 Node.js 和 TypeScript 技术栈。
            从 2018 年开始编程，已经在这个行业深耕多年。
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            我热爱开源，活跃于 GitHub社区，也有一些自己的开源项目。
            同时，我也是技术博客的作者，喜欢把所学知识总结分享出去。
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            在工作之余，我喜欢研究新技术、打游戏、偶尔写写技术文章。
            如果你也有相同的兴趣爱好，欢迎和我交流！
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-accent">##</span> 专业技能
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">前端开发</h3>
              <p className="text-muted-foreground">
                熟悉 React、Vue、Next.js 等主流框架，精通 TypeScript，
                有丰富的响应式设计和性能优化经验。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">后端开发</h3>
              <p className="text-muted-foreground">
                擅长 Node.js 生态，熟悉 Express、NestJS 等框架，
                能够设计高可用的微服务架构。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">数据库</h3>
              <p className="text-muted-foreground">
                熟悉 PostgreSQL、MongoDB、Redis 等数据库，
                能够根据业务场景选择合适的存储方案。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">DevOps</h3>
              <p className="text-muted-foreground">
                掌握 Docker、Kubernetes CI/CD 流程，
                有 AWS 云服务使用经验。
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-accent">##</span> 经历
          </h2>
          
          <div className="space-y-8 border-l-2 border-border pl-8">
            {[
              { year: "2024-现在", title: "高级全栈工程师", company: "某科技公司" },
              { year: "2022-2024", title: "全栈开发工程师", company: "创业公司" },
              { year: "2020-2022", title: "前端开发工程师", company: "某互联网公司" },
              { year: "2018-2020", title: "学习 & 实习", company: "大学期间" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.6rem] w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <time className="text-sm text-muted-foreground">{item.year}</time>
                <h3 className="font-semibold mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-8 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground mb-4">想了解更多？</p>
          <a href="/contact" className="text-accent hover:underline font-medium">
            联系我 →
          </a>
        </section>
      </div>
    </div>
  );
}
