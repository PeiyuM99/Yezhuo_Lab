// Single-file React + Tailwind starter page
// Usage:
// 1) Create a Vite React + Tailwind project (or CRA + Tailwind).
// 2) Replace src/App.jsx with this file and ensure Tailwind + framer-motion installed.
//    npm i framer-motion
// 3) Start dev server: npm run dev

import React, {useState} from 'react';
import { motion } from 'framer-motion';

export default function App(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({name:'', email:'', message:''});
  const onChange = (e) => setForm({...form, [e.target.name]: e.target.value});
  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent('Contact from '+form.name)}&body=${encodeURIComponent(form.message+'\n\nfrom: '+form.email)}`;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">PM</div>
          <div>
            <div className="font-semibold text-lg">Peiyu Starter</div>
            <div className="text-xs text-gray-500">A minimal, responsive landing page</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:underline" href="#features">功能</a>
          <a className="hover:underline" href="#about">关于</a>
          <a className="hover:underline" href="#contact">联系</a>
          <button onClick={()=>setMenuOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Get started</button>
        </nav>

        <button className="md:hidden px-2 py-1" onClick={()=>setMenuOpen(!menuOpen)} aria-label="menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {menuOpen && (
        <motion.div initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} className="md:hidden bg-white shadow-sm px-6 py-4">
          <div className="flex flex-col gap-3">
            <a href="#features" onClick={()=>setMenuOpen(false)}>功能</a>
            <a href="#about" onClick={()=>setMenuOpen(false)}>关于</a>
            <a href="#contact" onClick={()=>setMenuOpen(false)}>联系</a>
          </div>
        </motion.div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-2 items-center">
        <section>
          <motion.h1 initial={{x:-20, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.05}} className="text-4xl md:text-5xl font-extrabold leading-tight">漂亮且可定制的单页模板</motion.h1>
          <motion.p initial={{x:-10, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.12}} className="mt-4 text-gray-600 max-w-xl">
            这是一个使用 React + Tailwind + Framer Motion 构建的起始页。包含响应式导航、特色区块、简单联系表单与 CTA。适合快速原型或论文/项目展示页。
          </motion.p>

          <div className="mt-6 flex gap-3">
            <a className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-md shadow-md" href="#contact">联系我们</a>
            <a className="inline-flex items-center gap-2 px-5 py-3 border rounded-md" href="#features">查看特色</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-sm font-semibold">响应式</div>
              <div className="text-xs text-gray-500 mt-1">手机/平板/桌面都好看</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-sm font-semibold">易定制</div>
              <div className="text-xs text-gray-500 mt-1">修改文案、颜色、图片都简单</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-sm font-semibold">动画自然</div>
              <div className="text-xs text-gray-500 mt-1">Framer Motion 使动画平滑</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-sm font-semibold">部署方便</div>
              <div className="text-xs text-gray-500 mt-1">可部署到 Netlify / Vercel / GitHub Pages</div>
            </div>
          </div>
        </section>

        <aside className="bg-white rounded-xl shadow-lg p-6">
          <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.08}}>
            <h3 className="text-lg font-semibold">示例预览</h3>
            <p className="text-xs text-gray-500 mt-1">这是一段演示文本，替换成你的图片或演示 GIF。</p>

            <div className="mt-4 w-full h-44 bg-gradient-to-br from-gray-100 to-gray-50 rounded-md border border-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-400">屏幕预览占位</span>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium">快速设置</h4>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li>1) 替换 logo 文本和主色。</li>
                <li>2) 把预览图片替换为项目截图。</li>
                <li>3) 若需联系表单后端，可连接 Formspree、Netlify Forms 或自建 API。</li>
              </ul>
            </div>
          </motion.div>
        </aside>
      </main>

      <section id="features" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">特色</h3>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Feature title="可定制布局">把区块拖拽/替换文案即可</Feature>
          <Feature title="轻量且易扩展">不依赖复杂框架，容易集成后台</Feature>
          <Feature title="无障碍友好">语义化标签与合理对比度</Feature>
          <Feature title="性能优化">图片懒加载、按需打包</Feature>
          <Feature title="部署便捷">支持 Vercel / Netlify / GitHub Pages</Feature>
          <Feature title="多语言支持">可扩展为中/英双语站点</Feature>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold">关于这个模板</h3>
          <p className="text-sm text-gray-600 mt-2">该模板为单页展示用途设计，适合科研项目主页、简历页或小型产品页。代码结构简单，便于按需扩展（增加路由、CMS、内容编辑器等）。</p>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold">联系我</h3>
          <form onSubmit={onSubmit} className="mt-4 grid gap-3">
            <input name="name" value={form.name} onChange={onChange} className="w-full px-3 py-2 border rounded-md" placeholder="你的姓名" required />
            <input name="email" value={form.email} onChange={onChange} className="w-full px-3 py-2 border rounded-md" placeholder="邮箱" required />
            <textarea name="message" value={form.message} onChange={onChange} className="w-full px-3 py-2 border rounded-md" rows={5} placeholder="写下你的信息或需求" required />
            <div className="flex items-center justify-between">
              <button type="submit" className="px-5 py-2 bg-indigo-600 text-white rounded-md">发送</button>
              <div className="text-xs text-gray-500">或发邮件到 <strong>hello@example.com</strong></div>
            </div>
          </form>
        </div>
      </section>

      <footer className="mt-10 py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500 flex justify-between items-center">
          <div>© {new Date().getFullYear()} Peiyu Ma</div>
          <div>Built with ❤️ — React + Tailwind</div>
        </div>
      </footer>
    </div>
  );
}

function Feature({title, children}){
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-gray-500 mt-1">{children}</div>
    </div>
  );
}
