# VitePress GitHub Pages 部署脚本

Write-Host "🚀 开始部署 VitePress 到 GitHub Pages..." -ForegroundColor Green

# 检查是否在 Git 仓库中
if (-not (Test-Path ".git")) {
    Write-Host "❌ 错误：当前目录不是 Git 仓库" -ForegroundColor Red
    Write-Host "请先运行：git init" -ForegroundColor Yellow
    exit 1
}

# 构建项目
Write-Host "📦 构建项目..." -ForegroundColor Yellow
npm run docs:build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 构建成功" -ForegroundColor Green

# 检查是否有远程仓库
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "⚠️  警告：没有配置远程仓库" -ForegroundColor Yellow
    Write-Host "请运行：git remote add origin <your-repo-url>" -ForegroundColor Yellow
}

# 提交更改
Write-Host "📝 提交更改..." -ForegroundColor Yellow
git add .
git commit -m "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 推送到 GitHub
Write-Host "🚀 推送到 GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 部署完成！" -ForegroundColor Green
    Write-Host "🌐 你的网站将在几分钟内可用" -ForegroundColor Cyan
    Write-Host "📖 查看部署状态：https://github.com/your-username/your-repo-name/actions" -ForegroundColor Cyan
} else {
    Write-Host "❌ 推送失败" -ForegroundColor Red
    Write-Host "请检查网络连接和 GitHub 权限" -ForegroundColor Yellow
} 