import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "小增老师 | 全栈开发者",
  description: "热爱技术，专注于构建优雅的 Web 应用。喜欢分享 Node.js、TypeScript、React 等技术心得。",
  keywords: ["全栈开发", "Node.js", "TypeScript", "React", "Vue", "技术博客"],
  authors: [{ name: "小增老师" }],
  openGraph: {
    title: "小增老师 | 全栈开发者",
    description: "热爱技术，专注于构建优雅的 Web 应用",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
