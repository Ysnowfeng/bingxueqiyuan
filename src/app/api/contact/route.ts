import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    
    const { name, email, message } = body;
    
    // 验证必填字段
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 }
      );
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "请输入有效的邮箱地址" },
        { status: 400 }
      );
    }
    
    // TODO: 在这里发送邮件或保存到数据库
    // 例如：使用 nodemailer 发送邮件，或保存到 MongoDB
    
    console.log("收到联系表单:", { name, email, message });
    
    return NextResponse.json({
      success: true,
      message: "消息已收到，我会尽快回复！"
    });
  } catch (error) {
    console.error("处理联系表单时出错:", error);
    return NextResponse.json(
      { error: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}
