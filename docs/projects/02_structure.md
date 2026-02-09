# 域名制作

> 目标：新人 5 分钟读完即可开始制作域名。

---

## 1. 域名仓库说明

所有域名项目都在仓库：

```
official_website
```

路径结构：

```
official_website/
├── www.xxx.com/
├── www.xxx.com/
├── www.xxx.com/
```

每一个文件夹就是一个独立域名。

👉 **不要在其他仓库创建域名项目** 
👉 所有域名必须放在 `official_website` 内统一管理

---

## 2. 域名制作流程（记住这一条就够）

```
需求确认
→ AI 生成模板
→ 替换素材 + 商品数据
→ 接入 IP 验证
→ 本地测试
→ Jenkins 部署
```

👉 域名首次制作必须使用 **提示词 + AI 模板生成**，不要手写整站。

---

## 3. 域名必须具备的功能

每个域名至少包含：

-   首页 / 商品列表 / 商品详情
-   购物车 / 结算
-   登录注册
-   隐私政策
-   移动端适配

缺一不可。

---

## 4. 数据架构（必须理解）

### 数据存储

项目为纯前端：

👉 **LocalStorage + 本地 JSON**

商品默认读取：

```
assets/js/data.json
```

---

### 商品接口文档

前端接口使用说明：

👉 [https://interactive.craft.me/n4a5trVfFt4W1F](https://interactive.craft.me/n4a5trVfFt4W1F)

大多数项目流程：

```
接口拉数据
→ 整理
→ 写入 data.json
→ 前端读取本地
```

只有实时库存项目才直接请求远程 API。

---

## 5. IP 验证

接口：

```
https://s.hodbtc.com/ip
```

用途：

```
获取国家
→ 限制注册
```

修改位置：

```
register.html
```

---

## 6. 常用修改入口

日常开发只改这几个地方：

```
assets/js/data.json   商品数据
assets/js/lan.js      文案
assets/css/           样式
assets/js/ui.js       页面逻辑
assets/js/utils.js    数据映射
```

---

## 7. 本地运行

VS Code → Live Server → 打开：

```
index.html
```

如果异常：

清除浏览器缓存。

---

## 8. 上线前检查（必须跑一遍）

-   图片全部替换
-   商品数据真实
-   Console 无报错
-   移动端正常
-   IP 校验工作
-   登录 + 购物流程可用

---

## 9. Jenkins 自动部署

流程：

```
提交代码
→ 合并 master
→ Jenkins Build
→ 线上验证
```

部署时确认：

-   分支 = master
-   环境 = test / prod
-   域名填写正确

部署完成后立即线上检查。

---

## 10. 新人最低要求

新人必须能：

-   独立制作一个域名
-   替换商品数据
-   接入 IP 验证
-   完成测试
-   Jenkins 部署

---
