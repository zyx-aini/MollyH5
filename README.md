# Angry Molly · 炽热之心 🔥

> 大广赛参赛作品 · 互动 H5 · POP MART × MOLLY 20 周年

## 📱 作品简介

"Angry Molly · 炽热之心" 是一款移动端互动 H5 作品。用户通过触控操作帮助 Molly 释放内心的愤怒，经历三道关卡：沉默之墙、标签迷宫、炽热之心。最终生成专属分享海报。

## 🎮 游戏玩法

| 关卡 | 名称 | 操作 |
|-----|------|------|
| Lv.1 | 沉默之墙 | 长按/点击积蓄怒火，冲破砖墙 |
| Lv.2 | 标签迷宫 | 左右移动躲避标签弹幕，反击释放冲击波 |
| Lv.3 | 炽热之心 | 滑动瞄准，释放燃烧风暴，击碎所有标签 |

## 🏗️ 项目结构

```
d:\H5\
├── index.html              # 入口 HTML
├── package.json            # 项目配置
├── vite.config.js          # Vite 构建配置
├── src/
│   ├── main.js             # JS 入口
│   ├── game.js             # 游戏核心引擎（状态机、渲染、触控）
│   ├── levels.js           # 三道关卡的逻辑实现
│   ├── poster.js           # 分享海报生成
│   └── style.css           # 全局样式
├── public/                 # Vite public 目录（原样复制到 dist）
│   ├── 素材/               # 角色图片资源（01-05.png）
│   └── submit.html         # 比赛提交页（二维码 + 链接）
├── 素材/                   # 原始素材（开发用）
└── dist/                   # 构建产物（Git 已忽略）
    ├── index.html          # 作品首页
    ├── submit.html         # 比赛提交页
    ├── assets/             # JS、CSS、图片（带 hash，缓存友好）
    └── 素材/               # 运行时加载的角色图片
```

## 🚀 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（http://localhost:5173）
npm run dev

# 3. 生产构建
npm run build

# 4. 本地预览构建产物（http://localhost:4173）
npm run preview
```

## 🌐 部署到 GitHub Pages（比赛推荐方案）

### 步骤 1：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名建议：`angry-molly-heart`（或任意名称）
3. 设为 **Public**（公开仓库，Pages 才能免费使用）
4. 点击 **Create repository**

### 步骤 2：推送本地代码

```bash
cd d:\H5
git init
git add -A
git commit -m "feat: Angry Molly 炽热之心 H5 初版发布"
git branch -M main
git remote add origin https://github.com/你的用户名/angry-molly-heart.git
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

1. 打开仓库页面：`https://github.com/你的用户名/angry-molly-heart`
2. 点击顶部 **Settings**
3. 左侧菜单选择 **Pages**
4. **Source** 选择 **GitHub Actions**（不是 Deploy from branch）
5. 保存

### 步骤 4：触发自动部署

1. 仓库顶部点击 **Actions** 标签
2. 看到 **Deploy to GitHub Pages** workflow 正在运行
3. 等待约 1-2 分钟完成（首次可能需要额外 30 秒 DNS 生效）
4. 完成后页面显示绿色 ✅

### 步骤 5：获取作品链接

部署成功后，访问地址为：

```
https://你的用户名.github.io/angry-molly-heart/
```

例如：
- 作品主页：`https://john-doe.github.io/angry-molly-heart/`
- 比赛提交页：`https://john-doe.github.io/angry-molly-heart/submit.html`

### 步骤 6：比赛提交

1. 手机打开作品链接，确认可正常访问
2. 打开 **submit.html** 页面：自动生成二维码 + 链接
3. **截图二维码**（用于比赛海报/PPT）
4. **复制链接**（用于比赛报名系统填写）

**提交页功能：**
- ✅ 自动根据部署域名生成二维码
- ✅ 一键复制作品链接
- ✅ 一键跳转至作品首页
- ✅ 可作为手机端的作品入口

## ✅ 本地手动部署验证

如果不想用 GitHub Actions，也可手动发布 dist 目录：

```bash
# 1. 构建
npm run build

# 2. 将 dist/ 目录的内容推送到 gh-pages 分支
#    或直接在 Settings → Pages 选择 branch = main, folder = /(root)
#    并把 dist/ 内容放到仓库根目录
```

## 🔒 长期稳定性保障

| 措施 | 说明 |
|-----|------|
| **纯静态产物** | 无后端、无数据库，不依赖任何服务端 |
| **资源相对路径** | `base: './'`，部署到任何目录/子域名均可正常访问 |
| **文件名带 hash** | `assets/index-xxx.js`，浏览器强缓存，访问速度快 |
| **图片多重 fallback** | 优先加载 PNG 素材，加载失败时 Canvas 手绘角色 |
| **GitHub Pages** | 微软旗下服务，长期稳定，全球 CDN 加速 |
| **完整 Git 版本库** | 所有源码版本化，可随时重建或迁移到其他托管 |

## 📊 构建产物大小

```
index.html           2.59 kB  (gzip 1.08 kB)
index-*.css          6.79 kB  (gzip 2.08 kB)
index-*.js          65.34 kB  (gzip 17.64 kB)
素材/图片 (5 张)    ~12 MB   (游戏内按需加载)
```

首屏加载 ~80 KB（gzip），移动端 4G 网络下 1 秒内可打开。

## 📱 兼容性

| 环境 | 支持情况 |
|-----|---------|
| iOS Safari 14+ | ✅ |
| Android Chrome | ✅ |
| 微信内置浏览器 | ✅ |
| PC Chrome/Edge/Firefox | ✅ |
| PC 预览（固定 9:16） | ✅ 两侧自动留白居中 |

## 🎯 操作方式

- **移动端**：触控操作（长按、点击、滑动）
- **PC 端**：鼠标模拟触控（同样支持）
- **无需下载**：浏览器直接打开即玩

## 🔧 常见问题

**Q: 部署后页面空白？**
A: 检查浏览器控制台，确认资源路径正确。首次部署 Pages 可能需要 1 分钟生效。

**Q: 角色图片加载失败？**
A: 代码有 Canvas 手绘 fallback，即使图片加载失败也能正常显示角色。

**Q: 想更换仓库名？**
A: 仓库名不影响运行，`base: './'` 配置确保任何路径下都能正常访问。

**Q: 如何更换素材图片？**
A: 替换 `public/素材/01.png` 等文件，重新构建发布即可。

**Q: 比赛二维码怎么生成？**
A: 访问 `submit.html`，页面自动根据部署地址生成二维码，截图即可使用。

---

## 📝 License

仅供参赛作品使用。MOLLY、POP MART 为相关公司商标。

Built with ❤️ + 🔥 — Vite + Canvas 2D
