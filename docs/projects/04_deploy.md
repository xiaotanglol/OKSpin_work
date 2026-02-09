# EndCard（EC）制作

> 目标：新人能独立创建、制作、测试并上线一个 EC 页面。

---

## 1. EC 制作位置

所有 EC 和玩法一样，都在：

```
E:\Projects\okspin-tml-v2\src\views
```

每个 EC 是一个独立项目目录。

命名规则：

```
ec + 项目名
```

例如：

```
ecDemo
ecReward
```

文件结构与玩法基本一致，根据需求定制实现。

---

## 2. EC 文案配置规则（非常重要）

👉 **所有 EC 文案必须写在 `build.json`**

原则：

* EC 页面不允许写死文案
* 所有文本通过 build 配置读取
* `home.vue` 动态提取 build.json 内容

说明：

第一次确定文案后保存到 build.json，
每次运行只读取最新保存的 build 配置：

👉 **不会热更新**

所以修改文案必须重新运行。

---

## 3. EC 核心组件

### 必须引入

```js
import EndCard from "@/util/EndCard";
```

所有跳转交互必须使用：

```js
EndCard.click();
```

---

### 初始化逻辑（必须写）

```js
onMounted(() => {
  nextTick(async () => {
    const res = await EndCard.ready();
    data.info = { ...res };

    if (res.ec && res.ec.ext) {
      const { ext } = res.ec;
      data.obj = ext?.obj || proxy.$build.obj;
    }
  });
});
```

这是 EC 初始化的标准流程。

---

### 可选组件（按需求使用）

```js
import ECVideo from "@/components/EcVideo/index.vue";
```

使用方式：

```vue
<ECVideo
  class="reward-video-section__video"
  :info="data.info"
/>
```

ECVideo 用于视频展示，是否使用由需求决定。

---

## 4. 开发完成后的操作

EC 制作完成后必须：

* 压缩图片资源
* 打包项目
* 上传部署

确保：

* 页面无报错
* 文案读取正常
* 跳转交互可用

---

## 5. 新人最低要求

新人必须能：

* 独立制作一个 EC
* 使用 build.json 配置文案
* 正确接入 EndCard
* 完成测试并打包上传

---

