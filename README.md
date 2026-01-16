# VitePress 前端新员工交接文档模板（可跑）

## 1. 安装依赖
```bash
npm i -D vitepress@0.22.4
```

## 2. 本地预览（开发）
```bash
npm run dev
```
打开终端提示的地址（默认 http://localhost:5173）。

## 3. 构建与预览
```bash
npm run build
npm run preview
```

## 4. 文档放哪里？
- 所有文档写在 `docs/` 目录下（Markdown：`.md`）
- 图片建议放在 `docs/public/images/`，引用方式：`/images/xxx.png`

## 5. 左侧目录怎么配？
编辑：`docs/.vitepress/config.mjs` 的 `sidebar`。
