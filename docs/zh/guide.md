---
title: 使用指南
description: 详细的使用指南和开发说明
---

# 使用指南

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

## 开发命令

### 启动开发服务器

```bash
npm run docs:dev
```

这将在 `http://localhost:5173` 启动开发服务器。

### 构建生产版本

```bash
npm run docs:build
```

这将在 `docs/.vitepress/dist` 目录生成静态文件。

### 预览生产版本

```bash
npm run docs:preview
```

这将在本地预览构建后的站点。

## 添加新页面

1. 在 `docs/zh/` 目录下创建新的 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 中添加导航和侧边栏配置
3. 重启开发服务器查看效果

## 自定义主题

VitePress 支持高度自定义的主题。你可以：

- 修改 `docs/.vitepress/config.mts` 中的配置
- 创建自定义 CSS 文件
- 使用 VitePress 的主题 API

## 部署

### GitHub Pages

1. 构建项目：`npm run docs:build`
2. 将 `docs/.vitepress/dist` 目录的内容部署到 GitHub Pages

### Netlify

1. 连接你的 GitHub 仓库
2. 设置构建命令：`npm run docs:build`
3. 设置发布目录：`docs/.vitepress/dist`

## 多语言支持

这个项目已经配置了中英文支持：

- 中文文档在 `docs/zh/` 目录
- 英文文档在 `docs/en/` 目录
- 语言切换在导航栏中

## 常用功能

### 代码高亮

```javascript
function hello() {
  console.log('Hello, VitePress!')
}
```

### 表格

| 功能 | 描述 | 状态 |
|------|------|------|
| 多语言 | 支持中英文切换 | ✅ |
| 搜索 | 全文搜索功能 | ✅ |
| 主题 | 自定义主题支持 | ✅ |

### 提示框

::: tip
这是一个提示框，用于显示重要信息。
:::

::: warning
这是一个警告框，用于显示需要注意的内容。
:::

::: danger
这是一个危险框，用于显示重要的警告信息。
:::
