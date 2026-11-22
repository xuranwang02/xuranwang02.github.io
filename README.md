# Minimalist Academic Homepage

清爽极简、零构建依赖的个人学术主页（支持 **EN / 中文** 无刷新双语切换），借鉴 `yiranzhu06.github.io` 的学院派极简布局与交互组件。

## 目录结构

```text
homepage/
├── index.html                           # 页面主入口（可直接双击打开预览）
├── README.md                            # 使用与部署说明
└── assets/
    ├── css/main.css                     # 极简学院风样式与响应式布局
    ├── js/
    │   ├── site-data.js                 # 【核心配置】所有个人简介、论文、经历、致谢与联系方式
    │   └── app.js                       # 页面渲染、双语切换与交互逻辑
    └── images/                          # 头像、论文配图与机构 Logo（替换其中的占位图即可）
```

## 快速自定义步骤

1. **编辑个人内容**：打开 `assets/js/site-data.js`，按字段依次替换：
   - `profile`：头像路径、姓名、身份简介与外链（GitHub / Google Scholar / CV / ORCID 等）
   - `about`：个人简介与研究方向（中英双语）
   - `news`：按时间倒序的最新动态
   - `publications`：论文标题、会议徽章（`badge`）、缩略图、作者列表（自己设置 `isOwner: true` 会自动加粗）、发表信息与外链
   - `experience`：科研经历与教育背景（`active: true` 显示实心黑点，`false` 显示空心圆点）
   - `acknowledgements`：致谢对象列表（支持按首字母自动排序及键盘切换）
   - `contact`：修改 `emailUser` 与 `emailDomain`（点击展开防爬虫）；如需启用在线留言，前往 [Formspree](https://formspree.io/) 免费创建表单并将地址填入 `formspreeEndpoint`
2. **替换图片素材**：把你的个人照片、论文架构图和学校/机构 Logo 放入 `assets/images/`，并在 `site-data.js` 中更新对应路径即可。

## 部署到 GitHub Pages

1. 在 GitHub 新建名为 `<你的用户名>.github.io` 的公开仓库。
2. 将本目录（`homepage/` 下的全部文件）推送到仓库的 `main` 分支根目录：
   ```bash
   cd homepage
   git init
   git add .
   git commit -m "Initial academic homepage"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
   git push -u origin main
   ```
3. 在仓库 **Settings → Pages** 中确认 Source 为 `Deploy from a branch`（`main` / `/ (root)`），等待约 1 分钟即可通过 `https://<你的用户名>.github.io/` 访问。
