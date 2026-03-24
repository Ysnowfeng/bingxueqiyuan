"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ posts: 0, projects: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/posts").then((r) => r.json()),
      fetch("/api/projects").then((r) => r.json()),
    ]).then(([postsData, projectsData]) => {
      setStats({
        posts: Array.isArray(postsData) ? postsData.length : 0,
        projects: Array.isArray(projectsData) ? projectsData.length : 0,
      });
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-muted-foreground">加载中...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">仪表盘</h1>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Link
          href="/admin/posts"
          className="p-6 bg-muted/30 border border-border rounded-xl hover:border-accent transition-colors"
        >
          <div className="text-3xl mb-2">📝</div>
          <div className="text-2xl font-bold">{stats.posts}</div>
          <div className="text-sm text-muted-foreground">文章总数</div>
        </Link>

        <Link
          href="/admin/projects"
          className="p-6 bg-muted/30 border border-border rounded-xl hover:border-accent transition-colors"
        >
          <div className="text-3xl mb-2">🛠️</div>
          <div className="text-2xl font-bold">{stats.projects}</div>
          <div className="text-sm text-muted-foreground">项目总数</div>
        </Link>

        <Link
          href="/admin/profile"
          className="p-6 bg-muted/30 border border-border rounded-xl hover:border-accent transition-colors"
        >
          <div className="text-3xl mb-2">👤</div>
          <div className="text-2xl font-bold">1</div>
          <div className="text-sm text-muted-foreground">个人资料</div>
        </Link>

        <a
          href="/"
          target="_blank"
          className="p-6 bg-muted/30 border border-border rounded-xl hover:border-accent transition-colors"
        >
          <div className="text-3xl mb-2">🌐</div>
          <div className="text-2xl font-bold">查看</div>
          <div className="text-sm text-muted-foreground">访问网站</div>
        </a>
      </div>

      {/* Quick Actions */}
      <h2 className="text-lg font-semibold mb-4">快速操作</h2>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/posts?action=new"
          className="px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
        >
          + 新建文章
        </Link>
        <Link
          href="/admin/projects?action=new"
          className="px-4 py-2 bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors"
        >
          + 新建项目
        </Link>
        <Link
          href="/admin/profile"
          className="px-4 py-2 bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors"
        >
          编辑资料
        </Link>
      </div>
    </div>
  );
}
