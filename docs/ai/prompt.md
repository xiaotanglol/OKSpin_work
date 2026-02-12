
# Prompt 模板库（团队标准）

> 用于集中管理和维护团队 Prompt 资产，支持后续扩展与新增

## 1. 团队标准 Prompt 模板

```text
【角色】
你是资深 Vue3 前端工程师。

【上下文】
Vue3 + Vite + Scoped CSS

【输入】
{需求描述}

【约束】
- 使用 <script setup>
- 使用 scoped 样式
- 响应式布局
- 注释关键逻辑

【输出】
1. 设计说明
2. 完整代码
3. 自检清单
```

## 2. Vue3 布局生成

```text
【任务】
生成可复用 Vue3 布局组件。

【技术上下文】
Vue3 + Vite + Scoped CSS

【要求】
- scoped style
- 移动端优先
- flex / grid 布局
- 语义化 class
- 不污染全局样式

【输出】
1. DOM 结构
2. Vue SFC
3. 自检清单
```

## 3. Vue3 组件生成

```text
【任务】
根据需求生成 Vue3 组件。

【技术上下文】
Vue3 + Composition API + Scoped CSS

【要求】
- script setup
- props / emit 类型声明
- scoped 样式
- 注释关键逻辑

【输出】
1. 组件设计说明
2. Vue 组件代码
3. 使用示例
4. 自检清单
```

## 4. jQuery → Vue3 迁移

```text
【任务】
迁移 jQuery 代码到 Vue3。

【输入】
{jQuery 代码}

【要求】
- reactive / ref 管理状态
- 禁止直接 DOM 操作
- 合理拆分组件
- 保持行为一致

【输出】
1. 迁移对照表
2. Vue3 实现
3. 风险说明
4. 自检清单
```

## 5. 校验函数生成

```text
【任务】
生成手机号 / 邮箱 / 金额校验函数。

【输入】
校验类型与规则说明

【输出】
1. 校验规则说明
2. 正则 + 实现代码
3. 测试用例
4. 边界说明
```
