# GitHub Pages 部署指南

## 自动部署（推荐）

### 1. 准备工作

1. **创建 GitHub 仓库**
   - 在 GitHub 上创建一个新的仓库
   - 仓库名称建议：`your-username.github.io`（这样可以直接使用 `https://your-username.github.io` 访问）

2. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

### 2. 配置 GitHub Pages

1. **启用 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 `Settings` 标签
   - 在左侧菜单中找到 `Pages`
   - 在 `Source` 部分选择 `GitHub Actions`

2. **自动部署**
   - 当你推送代码到 `main` 分支时，GitHub Actions 会自动构建和部署
   - 你可以在 `Actions` 标签中查看部署进度

### 3. 访问你的网站

部署完成后，你的网站将在以下地址可用：
- `https://your-username.github.io/your-repo-name`（如果仓库名不是 `your-username.github.io`）
- `https://your-username.github.io`（如果仓库名是 `your-username.github.io`）

## 手动部署

如果你想要手动部署，可以按照以下步骤：

### 1. 构建项目
```bash
npm run docs:build
```

### 2. 创建部署分支
```bash
# 创建 gh-pages 分支
git checkout -b gh-pages

# 删除所有文件（除了构建输出）
git rm -rf .

# 复制构建输出
cp -r docs/.vitepress/dist/* .

# 提交更改
git add .
git commit -m "Deploy to GitHub Pages"

# 推送到 GitHub
git push origin gh-pages
```

### 3. 配置 GitHub Pages
- 进入仓库设置
- 在 Pages 设置中选择 `gh-pages` 分支作为源

## 自定义域名

如果你想要使用自定义域名：

1. **购买域名**（如 `example.com`）

2. **配置 DNS**
   - 添加 CNAME 记录：`your-repo-name.your-username.github.io`
   - 或者添加 A 记录指向 GitHub Pages 的 IP

3. **在仓库中配置**
   - 在仓库根目录创建 `CNAME` 文件
   - 内容为你的域名：`example.com`

4. **在 GitHub Pages 设置中启用**
   - 在 Pages 设置中输入你的自定义域名

## 故障排除

### 常见问题

1. **404 错误**
   - 检查 `docs/.vitepress/config.mts` 中的 `base` 配置
   - 如果仓库名不是 `your-username.github.io`，需要设置 `base: '/your-repo-name/'`

2. **构建失败**
   - 检查 Node.js 版本（需要 16+）
   - 确保所有依赖都已安装
   - 查看 GitHub Actions 日志

3. **语言切换问题**
   - 确保多语言配置正确
   - 检查文件路径是否正确

### 调试技巧

1. **本地测试**
   ```bash
   npm run docs:build
   npm run docs:preview
   ```

2. **检查构建输出**
   - 查看 `docs/.vitepress/dist` 目录
   - 确保所有文件都正确生成

3. **查看部署日志**
   - 在 GitHub 仓库的 `Actions` 标签中查看详细日志

## 性能优化

1. **启用压缩**
   - VitePress 默认会压缩 HTML、CSS 和 JS

2. **使用 CDN**
   - GitHub Pages 已经提供了 CDN 加速

3. **图片优化**
   - 使用 WebP 格式
   - 压缩图片大小

## 安全注意事项

1. **不要提交敏感信息**
   - 确保 `.env` 文件在 `.gitignore` 中
   - 不要在代码中硬编码 API 密钥

2. **定期更新依赖**
   ```bash
   npm audit
   npm update
   ```

## 监控和维护

1. **设置监控**
   - 使用 GitHub 的 Pages 分析功能
   - 配置错误监控

2. **定期备份**
   - 定期备份你的代码和配置

3. **更新文档**
   - 保持部署文档的更新 