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

### Q: 部署后页面显示 404？

A: 这通常是因为路由配置问题。确保：

1. 在 `docs/.vitepress/config.mts` 中正确配置了 `base` 路径
2. 如果部署到子目录，需要设置 `base: '/your-repo-name/'`

## 性能问题

### Q: 如何优化构建速度？

A: 可以尝试以下方法：

1. 使用更快的包管理器（如 pnpm）
2. 减少不必要的依赖
3. 使用缓存（如 GitHub Actions 缓存）

### Q: 如何减少包大小？

A: 可以尝试以下方法：

1. 使用 tree-shaking 移除未使用的代码
2. 压缩图片和静态资源
3. 使用 CDN 加载第三方库

## 故障排除

### Q: 开发服务器启动失败？

A: 检查以下几点：

1. 确保 Node.js 版本 >= 16
2. 删除 `node_modules` 和 `package-lock.json`，重新安装依赖
3. 检查端口是否被占用

### Q: 构建失败？

A: 检查以下几点：

1. 确保所有 Markdown 文件语法正确
2. 检查配置文件语法
3. 查看构建日志中的具体错误信息

### Q: 页面样式异常？

A: 检查以下几点：

1. 确保 CSS 文件路径正确
2. 检查浏览器控制台是否有错误
3. 清除浏览器缓存

## 更多帮助

如果以上问题没有解决你的问题，可以：

- 查看 [VitePress 官方文档](https://vitepress.dev/)
- 在 [GitHub Issues](https://github.com/vuejs/vitepress/issues) 中搜索类似问题
- 加入 VitePress 社区讨论
