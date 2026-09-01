# 内容维护指南

这个网站没有网页后台。GitHub 仓库就是唯一后台，只有拥有仓库写入权限的人可以修改公开内容。

## 发布代码项目

1. 复制 `templates/project.md` 到 `src/content/projects/`。
2. 文件名建议使用 `project-key.zh.md` 或 `project-key.en.md`。
3. 填写真实仓库地址、技术栈、状态和正文。
4. 将 `draft` 改成 `false` 后提交。
5. 第一个真实项目发布后，首页才会出现“代码”板块和导航入口。

## 发布写作

1. 复制 `templates/writing.md` 到 `src/content/writing/`。
2. `kind` 可选 `article`、`note` 或 `log`。
3. 将 `draft` 改成 `false` 后提交。

## 发布视频

1. 先把视频发布到 Bilibili。
2. 复制 `templates/video.md` 到 `src/content/videos/`。
3. 填写 Bilibili 地址，不要把视频文件放入仓库。
4. 将 `draft` 改成 `false` 后提交。

## 可选翻译

同一内容的中英文版本使用相同的 `translationKey`，但分别设置 `lang: zh` 和 `lang: en`。只发布一个语言也完全有效；网站会保留原文并显示语言标记。

## 修改个人资料

编辑 `src/data/site.ts`：

- `handle`：站点显示名称。
- `github`：GitHub 地址。
- `email`：留空则不显示邮箱。
- `bilibili`：留空则不显示 Bilibili 入口。
- `description` 和 `introduction`：首页中英文介绍。

## 本机检查

运行 `npm install`，然后运行 `npm run dev` 预览。提交到 `main` 分支后，GitHub Actions 会自动构建并发布。
