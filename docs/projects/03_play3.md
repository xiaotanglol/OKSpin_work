# 域名 UI 制作

> 目标：新人能独立创建、测试并提交一个新的 DomainUI。

## 1. DomainUI 是什么

每个玩法都会配套一个 **DomainUI**。

DomainUI 控制玩法左上角 **shopIcon** 的实际功能和 UI 展示，主要包含：

-   玩法规则弹窗
-   奖品列表弹窗
-   客服弹窗

DomainUI 属于玩法仓库的一部分，是可以被多个玩法复用的域名 UI 组件。

## 2. DomainUI 存放位置

所有 DomainUI 都在：

```
okspin-tml-v2/src/DomainUIComponents
```

每个文件夹代表一个域名 UI。

示例：

```
DomainUIComponents/
├── demo/
├── common/
├── xxx/
```

## 3. 创建新的 DomainUI

当需要制作新域名 UI 时：

### Step 1：创建目录

如果域名是：

```
www.demo.com
```

则在 `DomainUIComponents` 下创建：

```
demo
```

👉 文件夹名 = 域名主体（去掉 www 和后缀）

### Step 2：实现三个核心功能

在该目录中完成：

-   规则弹窗 UI
-   奖品列表 UI
-   客服弹窗 UI

这些内容将显示在玩法左上角的 shopIcon 中，奖品列表是否配置根据运营决定。

## 4. 测试 DomainUI

仓库中有一个专门用于测试的玩法：

```
demoUi
```

测试方式：

1. 打开 `demoUi` 项目
2. 在 `build.json` 中配置新 DomainUI
3. 本地运行玩法
4. 检查三个弹窗是否正常

测试重点：

-   UI 显示正常
-   弹窗交互可用
-   文案正确
-   无 Console 报错

## 5. 提交与复用

测试通过后：

1. 提交代码
2. 更新仓库

完成后：

该 DomainUI 可被其他玩法直接引用，供团队复用。

## 6. 新人最低要求

新人必须能：

-   创建一个新的 DomainUI
-   完成三个弹窗功能
-   使用 demoUi 进行测试
-   成功提交仓库
