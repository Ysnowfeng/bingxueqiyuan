# 个人网站框架

基于 Next.js 14 + TypeScript + Tailwind CSS 构建的现代化个人网站框架。

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行生产版本
npm start
```

## 📁 项目结构

```
personal-site/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API 路由
│   │   │   └── contact/    # 联系表单 API
│   │   ├── about/          # 关于页面
│   │   ├── blog/           # 博客列表
│   │   ├── projects/       # 项目展示
│   │   ├── contact/        # 联系页面
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 首页
│   ├── components/         # React 组件
│   │   ├── Navbar.tsx      # 导航栏
│   │   └── Footer.tsx      # 页脚
│   └── lib/                # 工具函数
│       └── utils.ts        # 通用工具
├── public/                 # 静态资源
├── package.json
└── README.md
```

## 🎨 页面路由

| 路径 | 页面 | 描述 |
|------|------|------|
| `/` | 首页 | Hero + 技能标签 + 最新文章 |
| `/about` | 关于 | 个人介绍 + 技能 + 经历 |
| `/blog` | 博客 | 文章列表 |
| `/projects` | 项目 | 开源项目展示 |
| `/contact` | 联系 | 联系表单 |

## 🔧 自定义配置

### 1. 修改个人信息

编辑 `src/app/layout.tsx` 中的 `metadata`：
```typescript
export const metadata: Metadata = {
  title: "你的名字 | 全栈开发者",
  description: "你的个人简介...",
};
```

### 2. 修改技能标签

编辑 `src/app/page.tsx` 中的技能数组。

### 3. 添加博客文章

在 `src/content/blog/` 目录下创建 Markdown 文件。

### 4. 配置联系表单 API

编辑 `src/app/api/contact/route.ts`，接入邮件服务或数据库。

## 🎯 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **字体**: Inter, JetBrains Mono
- **图标**: Lucide React (可选)

## 📝 开发规范

- 使用 `src/` 目录存放源代码
- 组件使用函数式组件 + TypeScript
- 样式优先使用 Tailwind CSS
- 提交前运行 `npm run lint`

## 🚴 下一步

1. 修改 `layout.tsx` 的 metadata 为你的信息
2. 更新 `page.tsx` 的内容和样式
3. 添加你的项目到 `/projects` 页面
4. 配置联系表单 API
5. 部署到 Vercel

## 📦 部署

```bash
# Vercel (推荐)
npx vercel

# 或者 GitHub Actions 自动部署
```

---

祝你建站愉快！ 🎉
