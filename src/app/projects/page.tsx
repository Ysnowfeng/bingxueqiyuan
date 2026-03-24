import Link from "next/link";

const projects = [
  {
    name: "冰雪祁缘工作室公约制定",
    description: "工作室核心规章制度，明确宗旨理念、组织架构、成员权责及纪律要求，为工作室运行提供根本遵循",
    tech: ["规章制度", "组织建设", "权责规范"],
    stars: 4,
    icon: "📜",
    link: "#",
  },
  {
    name: "姚雪豹奖评选体系",
    description: "工作室专属荣誉表彰体系，制定奖项设立规则、评选流程及表彰标准，激励成员践行抽象精神",
    tech: ["荣誉表彰", "评选机制", "精神激励"],
    stars: 4,
    icon: "🏆",
    link: "#",
  },
  {
    name: "肃清消极怠工专项行动",
    description: "针对集体任务怠工行为设立专项委员会，建立排查、认定、整改全流程整治工作体系",
    tech: ["纪律整治", "专项治理", "行为规范"],
    stars: 4,
    icon: "🔍",
    link: "#",
  },
  {
    name: "工作室组织架构搭建",
    description: "构建全员大会、常务会议及各类专项委员会的组织体系，明确各机构职责与运行机制",
    tech: ["组织架构", "权责划分", "民主决策"],
    stars: 4,
    icon: "🏛️",
    link: "#",
  },
  {
    name: "外卖失窃排查行动",
    description: "制定诱饵排查实施计划，建立工作室财物保护机制，规范成员财产行为与纠纷解决方式",
    tech: ["财产纪律", "安全防控", "纠纷调解"],
    stars: 4,
    icon: "🚨",
    link: "#",
  },
  {
    name: "工作室视觉标识体系",
    description: "设计蓝金配色工作室标志徽，打造公章等权威象征物，确立工作室专属视觉与身份标识",
    tech: ["视觉设计", "标识建设", "品牌塑造"],
    stars: 4,
    icon: "🖼️",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">工作室建设项目</h1>
          <p className="text-muted-foreground text-lg">
            深耕建设，凝聚力量 ✊
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
                  title="查看详情"
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

        {/* Studio CTA */}
        <div className="mt-12 text-center py-8 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground mb-4">
            了解更多工作室建设详情
          </p>
          <a
            href="#about"
            target="_self"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            <span>❄️</span> 冰雪祁缘工作室详情
          </a>
        </div>
      </div>
    </div>
  );
}