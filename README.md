# My VitePress Site

一个基于 VitePress 构建的现代化文档站点，支持中英文双语。

## 特性

- 🚀 基于 Vite 构建，开发体验极佳
- 📝 使用 Markdown 编写文档
- 🌐 支持中英文双语切换
- 📱 响应式设计，完美适配各种设备
- 🔍 内置搜索功能
- 🎨 可自定义主题

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看站点。

### 构建生产版本

```bash
npm run docs:build
```

### 预览生产版本

```bash
npm run docs:preview
```

## 项目结构

```
my-vitepress-site/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts          # VitePress 配置文件
│   ├── zh/                     # 中文文档
│   │   ├── index.md            # 中文首页
│   │   ├── guide.md            # 中文指南
│   │   └── faq.md              # 中文常见问题
│   └── en/                     # 英文文档
│       ├── index.md            # 英文首页
│       ├── guide.md            # 英文指南
│       └── faq.md              # 英文常见问题
├── package.json                # 项目配置文件
└── README.md                   # 项目说明
```

## 添加新页面

1. 在 `docs/zh/` 或 `docs/en/` 目录下创建新的 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 中添加导航和侧边栏配置
3. 重启开发服务器查看效果

## 部署

### GitHub Pages

1. 构建项目：`npm run docs:build`
2. 将 `docs/.vitepress/dist` 目录的内容部署到 GitHub Pages

### Netlify

1. 连接你的 GitHub 仓库
2. 设置构建命令：`npm run docs:build`
3. 设置发布目录：`docs/.vitepress/dist`

## 技术栈

- [VitePress](https://vitepress.dev/) - 现代化的静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Markdown](https://daringfireball.net/projects/markdown/) - 简单易用的文档格式

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License 