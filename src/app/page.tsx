import Link from "next/link";
import {
  disciplineRules,
  governanceBodies,
  studioDocuments,
  studioInitiatives,
  studioMetrics,
  studioProfile,
  studioTimeline,
} from "@/data/studio";

const latestTimeline = [...studioTimeline].slice(-6).reverse();
const featuredDocuments = studioDocuments.slice(0, 3);
const featuredInitiatives = studioInitiatives.slice(0, 3);

export default function Home() {
  return (
    <div className="page-shell">
      <div className="site-shell">
        <section className="grid gap-10 border-b border-black/8 pb-14 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Studio Charter Index</p>
            <h1 className="font-display mt-5 max-w-4xl text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              冰雪祁缘工作室
              <br />
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">
              {studioProfile.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="brand-button px-6 py-3 text-sm font-semibold">
                查看制度总览
              </Link>
              <Link href="/blog" className="brand-button-soft px-6 py-3 text-sm">
                进入文告归档
              </Link>
            </div>
          </div>

          <div className="grid content-start gap-6">
            <div className="border-b border-black/8 pb-6">
              <p className="text-sm text-muted-foreground">核心宗旨</p>
              <p className="font-display mt-2 text-3xl text-foreground">{studioProfile.corePurpose}</p>
            </div>
            <div className="border-b border-black/8 pb-6">
              <p className="text-sm text-muted-foreground">核心理念</p>
              <p className="mt-2 text-lg text-foreground">{studioProfile.coreValues.join(" / ")}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">前身成立</p>
                <p className="mt-2 text-lg text-foreground">{studioProfile.foundedAt}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">正式重建</p>
                <p className="mt-2 text-lg text-foreground">{studioProfile.rebuiltAt}</p>
              </div>
            </div>
            <p className="text-sm leading-8 text-muted-foreground">
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-b border-black/8 py-12 md:grid-cols-2 xl:grid-cols-4">
          {studioMetrics.map((metric) => (
            <article key={metric.label}>
              <p className="font-display text-4xl text-foreground">{metric.value}</p>
              <h2 className="mt-3 text-lg font-semibold text-foreground">{metric.label}</h2>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">{metric.note}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-12 border-b border-black/8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground"> </p>
            <h2 className="font-display mt-4 text-3xl text-foreground sm:text-4xl">运转方式</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              工作室的治理骨架：谁负责决策、谁负责日常运行、谁承担专项审查与整治
            </p>
          </div>

          <div className="divide-y divide-black/8">
            <div className="py-5 first:pt-0">
              <p className="text-sm text-accent">组织原则</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">平等与团结</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                重建后不再设置室长，改由全员大会与常务会议协同运转，减少组织对单一角色的依赖
              </p>
            </div>

            {governanceBodies.slice(0, 3).map((body) => (
              <article key={body.name} className="grid gap-3 py-5 sm:grid-cols-[180px_1fr]">
                <div>
                  <p className="text-sm text-accent">{body.type}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{body.name}</h3>
                </div>
                <p className="text-sm leading-8 text-muted-foreground">{body.composition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-b border-black/8 py-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Timeline</p>
                <h2 className="font-display mt-4 text-3xl text-foreground sm:text-4xl">重要时间节点</h2>
              </div>
              <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                查看全程
              </Link>
            </div>

            <div className="mt-8 divide-y divide-black/8">
              {latestTimeline.map((event) => (
                <article key={`${event.date}-${event.title}`} className="grid gap-3 py-5 sm:grid-cols-[170px_1fr]">
                  <div>
                    <p className="text-sm text-accent-gold">{event.date}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{event.category}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                    <p className="mt-2 text-sm leading-8 text-muted-foreground">{event.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Documents</p>
                <h2 className="font-display mt-4 text-3xl text-foreground sm:text-4xl">重点文告</h2>
              </div>
              <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                全部文告
              </Link>
            </div>

            <div className="mt-8 divide-y divide-black/8">
              {featuredDocuments.map((document) => (
                <Link key={document.slug} href={`/blog/${document.slug}`} className="block py-5 transition-colors hover:text-accent">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{document.date}</span>
                    <span>·</span>
                    <span>{document.category}</span>
                    <span>·</span>
                    <span>{document.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">{document.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-muted-foreground">{document.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-12 border-b border-black/8 py-14 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Discipline</p>
            <h2 className="font-display mt-4 text-3xl text-foreground sm:text-4xl">三大纪律</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            </p>
          </div>

          <div className="divide-y divide-black/8">
            {disciplineRules.map((rule) => (
              <article key={rule.name} className="grid gap-3 py-5 sm:grid-cols-[170px_1fr]">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{rule.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Rule</p>
                </div>
                <div>
                  <p className="text-sm text-foreground">{rule.principle}</p>
                  <p className="mt-3 text-sm leading-8 text-muted-foreground">{rule.details[0]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Initiatives</p>
              <h2 className="font-display mt-4 text-3xl text-foreground sm:text-4xl">建设项目</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                从公约修订、成员审查到荣誉表彰和专项整治，项目页记录的是规则如何被逐步建立
              </p>
            </div>
            <Link href="/projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              查看全部建设 →
            </Link>
          </div>

          <div className="mt-8 grid gap-x-10 gap-y-8 lg:grid-cols-3">
            {featuredInitiatives.map((initiative) => (
              <article key={initiative.slug} className="border-t border-black/8 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">{initiative.name}</h3>
                  <span className="text-2xl">{initiative.icon}</span>
                </div>
                <p className="mt-3 text-sm text-accent-gold">{initiative.period}</p>
                <p className="mt-3 text-sm leading-8 text-muted-foreground">{initiative.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
