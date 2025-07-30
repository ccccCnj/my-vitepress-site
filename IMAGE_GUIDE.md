# 🖼️ 图片上传与引用指南（非开发人员）

> 本指南适用于 **非开发人员** 在编辑文档时插入图片的需求。

---

## 📂 图片上传位置

请将图片统一上传至以下目录：

```
docs/assets/uploads/
```

该路径会自动被 VitePress 识别并生成静态资源。

---

## ⬆️ 如何上传图片

1. 打开项目 GitHub 页面
2. 点击右上角按钮：`Add file → Upload files`
3. 拖拽图片或点击选择图片上传
4. 填写提交信息，点击 **Commit changes**

---

## 🖊️ 如何在文档中插入图片

在对应的 Markdown 文件中插入以下格式：

```md
![图片描述](/assets/uploads/your-image-name.png)
```

示例：

```md
![登录界面示意图](/assets/uploads/login-page.png)
```

⚠️ 注意：

* 路径必须以 `/assets/uploads/` 开头
* 不要使用 `https://github.com/...user-attachments/...` 的临时图片地址
* 图片文件名建议使用小写英文 + `-` 命名，例如：`proxy-guide-step1.png`

---

## ✅ 示例展示

Markdown 源码：

```md
![示意图](/assets/uploads/demo-image.png)
```

显示效果：

![示意图](/assets/uploads/demo-image.png)

---

## ❓ 常见问题

### ❌ 我把图片拖进 Markdown 编辑器了，可以用吗？

不能直接使用 GitHub 自动生成的 `user-attachments` 链接，那些链接是临时的，**不会打包到网站中**，因此线上无法显示。

请改为上传到项目目录的 `docs/assets/uploads/` 文件夹，并使用上面的写法引用。

---

如需帮助，请联系维护人员或开发同事。
