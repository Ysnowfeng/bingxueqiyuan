# Cloudflare Pages 部署指南

## 方式一：通过 Cloudflare Dashboard（推荐）

### 第一步：推送代码到 GitHub

```bash
cd personal-site
git init
git add .
git commit -m "Initial commit"
```

```bash
# 创建 GitHub 仓库后推送
git remote add origin https://github.com/你的用户名/personal-site.git
git push -u origin main
```

### 第二步：连接 Cloudflare

1. 访问 https://pages.cloudflare.com
2. 点击 "Create a project"
3. 选择 "Connect to Git"
4. 用 GitHub 账号授权
5. 选择你的仓库 `personal-site`
6. 配置：
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next` 或 `out`（看下面）
   
   ⚠️ **重要**：Next.js 15+ 输出目录是 `.next/static`，需要配置 `null`

7. 点击 "Save and Deploy"

### 第三步：获取网址

部署完成后，访问：`https://your-name.pages.dev`

---

## 方式二：Wrangler CLI 命令行部署

### 安装 Wrangler

```bash
npm install -g wrangler
```

### 登录

```bash
wrangler login
```
（会打开浏览器授权）

### 部署

```bash
cd personal-site
wrangler pages deploy .next/server/app
```

---

## ⚠️ 重要配置

由于 Next.js 是 SSR 框架，需要额外配置：

### 选项 A：使用 `@cloudflare/next-on-pages`（推荐）

```bash
npm install @cloudflare/next-on-pages
```

1. 修改 `next.config.ts`：

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
```

2. 安装适配器：

```bash
npm install @cloudflare/next-on-pages
```

3. 修改 `next.config.mjs`：

```javascript
import { withNextra } from 'nextra'
import { getNextjsAdapter } from '@cloudflare/next-on-pages/next-dev'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 你的配置
};

export default withNextra(nextConfig);
```

### 选项 B：导出静态版本

```bash
npm run build
```

然后将 `.next/static` 目录手动上传到 Cloudflare Pages。

---

## 绑定自定义域名

1. 进入 Cloudflare Dashboard
2. 选择你的 Pages 项目
3. 点击 "Custom domains"
4. 添加你的域名（如 `xiaozeng.com`）
5. 按提示添加 DNS 记录

---

## 常见问题

**Q：部署后页面空白？**
A：检查 build 输出目录是否正确，Next.js 15+ 需要特殊配置。

**Q：API 路由不工作？**
A：Cloudflare Pages 支持 API 路由，但需要使用 `@cloudflare/next-on-pages`。

**Q：样式丢失？**
A：确保 Tailwind CSS 正确加载，检查 `_next/static` 路径。

---

## 下一步

1. 先把代码推送到 GitHub
2. 按方式一部署
3. 如有问题再调整配置
