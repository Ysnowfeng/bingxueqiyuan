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
const compactTimeline = latestTimeline.slice(0, 4);

export default function Home() {
  return (
    <div className="page-shell">
      <div className="site-shell section-stack">
        <section className="hero-card px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-7">
              <div className="space-y-5">
                <p className="eyebrow">Studio Charter Index</p>
                <h1 className="font-display max-w-4xl text-4xl leading-[1.06] text-foreground sm:text-5xl lg:text-[4.25rem]">
                  用同一套制度语言，
                  <br />
                  重写冰雪祁缘工作室的公开叙事。
                </h1>
                <p className="lead max-w-3xl text-[1.06rem]">
                  {studioProfile.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/about"
                  className="brand-button px-6 py-3 text-sm font-semibold"
                >
                  查看制度总览
                </Link>
                <Link
                  href="/blog"
                  className="brand-button-soft px-6 py-3 text-sm"
                >
                  进入文告归档
                </Link>
              </div>

              <div className="panel-soft grid gap-4 p-5 sm:grid-cols-3 sm:p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">站点定位</p>
                  <p className="mt-3 text-base leading-7 text-foreground">公开制度站与室史索引，不再是分散页面的内容拼接。</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">内容策略</p>
                  <p className="mt-3 text-base leading-7 text-foreground">时间线、组织、纪律、文告和联系口径全部同源维护。</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">当前版本</p>
                  <p className="mt-3 text-base leading-7 text-foreground">{studioProfile.charterTitle}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-accent-gold">
                    Charter Signals
                  </p>
                  <span className="tag-pill">统一数据源</span>
                </div>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground">核心宗旨</p>
                    <p className="mt-2 font-display text-4xl text-foreground">
                      {studioProfile.corePurpose}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">核心理念</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {studioProfile.coreValues.map((value) => (
                        <span key={value} className="tag-pill">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="hero-stat">
                      <p className="text-sm text-muted-foreground">前身成立</p>
                      <p className="mt-3 hero-stat-value">{studioProfile.foundedAt}</p>
                    </div>
                    <div className="hero-stat">
                      <p className="text-sm text-muted-foreground">正式重建</p>
                      <p className="mt-3 hero-stat-value">{studioProfile.rebuiltAt}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {studioProfile.charterTitle} 是当前所有页面内容的源头。时间线、组织、纪律、荣誉和项目说明均以同一份整理数据为准。
                  </p>
                </div>
              </div>

              <div className="panel-soft p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-foreground">最近修订节点</p>
                  <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    查看全程
                  </Link>
                </div>
                <div className="mt-5 space-y-4">
                  {compactTimeline.map((event) => (
                    <article key={`${event.date}-${event.title}`} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-sm text-accent-gold">{event.date}</p>
                        <span className="tag-pill">{event.category}</span>
                      </div>
                      <h2 className="mt-2 text-base font-semibold text-foreground">{event.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{event.summary}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-divider mt-10 pt-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {studioMetrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <p className="metric-value">{metric.value}</p>
                  <h2 className="mt-4 text-lg font-semibold text-foreground">{metric.label}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{metric.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">制度总览</p>
            <h2 className="section-title mt-4">一套可执行的组织结构</h2>
            <p className="lead mt-5 max-w-3xl">
              站点首页不再只是展示气氛，而是把工作室的制度框架直接展开：谁决策、谁执行、谁审查、谁整治，都有对应位置。
            </p>

            <div className="mt-10 grid gap-5">
              <div className="panel-soft p-6">
                <p className="text-sm text-accent-gold">组织原则</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">平等与团结替代个人化领导</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  重建后不再设置室长，改由全员大会与常务会议协同运转，减少组织对单一角色的依赖。
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {governanceBodies.slice(0, 2).map((body) => (
                  <article key={body.name} className="panel-soft p-6">
                    <p className="text-sm text-accent">{body.type}</p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{body.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{body.composition}</p>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">纪律边界</p>
            <h2 className="section-title mt-4">三大纪律构成站点语气的底层约束</h2>
            <p className="lead mt-5">
              公共页面的表达方式、联系方式展示和文告整理方式，全部受这三条底线约束。
            </p>
            <div className="mt-8 space-y-4">
              {disciplineRules.map((rule) => (
                <div key={rule.name} className="panel-soft p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{rule.name}</h3>
                    <span className="text-xs uppercase tracking-[0.18em] text-accent-gold">Rule</span>
                  </div>
                  <p className="mt-3 text-sm text-foreground">{rule.principle}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{rule.details[0]}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="glass-card p-6 sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">最近节点</p>
                <h2 className="section-title mt-4">时间线不再散落在页面角落</h2>
              </div>
              <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                查看全程
              </Link>
            </div>

            <div className="timeline-rail mt-10 space-y-7">
              {latestTimeline.map((event) => (
                <article key={`${event.date}-${event.title}`} className="timeline-item">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm text-accent-gold">{event.date}</p>
                    <span className="tag-pill">{event.category}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{event.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{event.summary}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="glass-card p-6 sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">文告精选</p>
                <h2 className="section-title mt-4">首页直接指向核心制度文本</h2>
              </div>
              <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                全部文告
              </Link>
            </div>

            <div className="mt-10 space-y-5">
              {featuredDocuments.map((document) => (
                <Link
                  key={document.slug}
                  href={`/blog/${document.slug}`}
                  className="panel-soft block p-6 transition-transform hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{document.date}</span>
                    <span>·</span>
                    <span>{document.category}</span>
                    <span>·</span>
                    <span>{document.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">{document.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{document.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {document.highlights.map((highlight) => (
                      <span key={highlight} className="tag-pill">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </article>
        </section>

        <section className="glass-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">建设项目</p>
              <h2 className="section-title mt-4">制度不是静态文本，而是连续建设工程</h2>
              <p className="lead mt-5 max-w-3xl">
                从公约修订、成员审查到荣誉表彰和专项整治，项目页记录的是规则如何一步步被建起来，而不是抽象地罗列口号。
              </p>
            </div>
            <Link href="/projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              查看全部建设 →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredInitiatives.map((initiative) => (
              <article key={initiative.slug} className="panel-soft p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl">{initiative.icon}</span>
                  <span className="tag-pill">{initiative.status}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{initiative.name}</h3>
                <p className="mt-3 text-sm text-accent-gold">{initiative.period}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{initiative.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {initiative.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
