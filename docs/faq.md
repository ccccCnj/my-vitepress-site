---
title: 常见问题
description: 常见问题解答
---

# 常见问题

## 基础问题

### Q: 如何启动开发服务器？

A: 在项目根目录运行以下命令：

```bash
npm run docs:dev
```

服务器将在 `http://localhost:5173` 启动。

### Q: 如何添加新页面？

A: 按照以下步骤：

1. 在 `docs/zh/` 目录下创建新的 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 中添加导航配置
3. 重启开发服务器

### Q: 如何修改站点标题？

A: 在 `docs/.vitepress/config.mts` 中修改 `title` 配置：

```typescript
export default {
  title: '你的站点标题',
  // ... 其他配置
}
```

## 配置问题

### Q: 如何添加自定义 CSS？

A: 在 `docs/.vitepress/` 目录下创建 `custom.css` 文件，然后在配置中引入：

```typescript
export default {
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ]
}
```

### Q: 如何配置搜索功能？

A: VitePress 默认支持搜索。如果需要更高级的搜索，可以配置 Algolia DocSearch：

```typescript
export default {
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME'
      }
    }
  }
}
```

### Q: 如何添加 Google Analytics？

A: 在配置中添加：

```typescript
export default {
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' }],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'GA_MEASUREMENT_ID');`]
  ]
}
```

## 部署问题

### Q: 如何部署到 GitHub Pages？

A: 按照以下步骤：

1. 构建项目：`npm run docs:build`
2. 将 `docs/.vitepress/dist` 目录的内容推送到 GitHub
3. 在仓库设置中启用 GitHub Pages

### Q: 如何部署到 Netlify？

A: 按照以下步骤：

1. 将代码推送到 GitHub
2. 在 Netlify 中连接你的 GitHub 仓库
3. 设置构建命令：`npm run docs:build`
4. 设置发布目录：`docs/.vitepress/dist`

### Q: 如何解决语言切换404问题？

A: 确保你的VitePress配置正确：

1. 检查 `docs/.vitepress/config.mts` 中的 `locales` 配置
2. 确保根语言（中文）的文件在根目录
3. 确保英文文件在 `/en/` 目录下
4. 检查侧边栏和导航链接是否正确

## 性能优化

### Q: 如何优化构建速度？

A: 可以尝试以下方法：

1. 使用 `--minify false` 选项跳过压缩
2. 减少不必要的依赖
3. 使用缓存机制

### Q: 如何优化页面加载速度？

A: 可以尝试以下方法：

1. 启用 `cleanUrls: true`
2. 使用 CDN 加速
3. 压缩图片资源
4. 启用 gzip 压缩 