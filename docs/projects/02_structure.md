# 域名制作

```text
src/
├─ assets/        # 图片/音频/动画资源
├─ components/    # 通用组件（不写业务）
├─ pages/         # 页面/模块
├─ services/      # API 请求
├─ utils/         # 工具方法
└─ main.ts        # 入口
```

## 约定
- components：通用、可复用、低耦合
- pages：业务聚合，页面级状态放这里
- services：统一封装请求、错误处理、鉴权

## 验收标准 ✅
- 新人能快速定位：入口、路由、接口层、资源路径
