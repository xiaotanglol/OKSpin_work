# 玩法制作

## okspin-tml-v2 仓库文件目录结构

> 说明：玩法与 EndCard（EC）项目通常在 src/views/ 下创建独立目录。

```text
okspin-tml-v2/
├─ dist/                  # 构建产物目录（打包输出）
├─ src/                   # 核心业务源码目录
│  ├─ assets/             # 静态资源（图片、音频、字体等）
│  │  └─ css/             # 样式资源
│  │     ├─ common.scss   # 常规动画库
│  │     ├─ index.scss    # 样式库
│  │     └─ mixin.scss    # 背景图片、flex定位、文字边框 混入逻辑
│  ├─ components/         # 通用基础组件
│  ├─ DomainUIComponents/ # 域名 UI 组件（玩法/UI 相关）
│  ├─ util/               # 工具函数封装
│  │  ├─ HdAd.js          # 封装弹窗方法
│  │  └─ index.js         # 封装内置方法
│  └─ views/              # 项目页面 我们制作玩法、endCard（ec）主要在这个下面创建项目
├─ country.json           # 国家/地区配置数据
└─ package.json           # 项目依赖与脚本配置
```

## 创建项目

第一步 创建项目

-   主要在 okspin-tml-v2\src\views 下面创建项目文件夹
-   玩法名称（build 变量）：推荐大驼峰/小驼峰，最终通常会体现在上线后的 xxx.html（如 DiamondScratchCard.html）
-   项目目录（dir 变量）：本地目录名，可加前缀区分制作人/版本（如 RTB_DiamondScratchCard）

```js
RTB_DiamondScratchCard/
├─ assets/              # * 静态资源
│  ├─ image/            # * 图片资源
├─ ├─ card.json         # 奖品/卡牌配置数据
│  └─ js/               # 第三方或独立脚本
├─ components/          # 业务组件（老虎机 / 转盘等）
│  ├─ SlotMachine.vue
│  └─ Turntable.vue
├─ view/                # 页面与入口组件
│  ├─ home.vue          # * 主页面
│  ├─ home.scss         # * 页面样式
│  └─ App.vue           # * 根组件
├─ build.json           # * 构建配置
└─ main.js              # * 应用入口

* 表示必填项
```

第二步 配置 build.json

```json
{
	"DiamondScratchCard": {
		"lan": "en",
        "showIcon": [0,1,2],
		"music": true,
		"adSceneId": 9,
		"DomainUI": "common",
		"theme": "DiamondScratchCard",
        "isExa": false,
        ...
	}
    ...
}

{
	"最终项目名称": {
		"lan": "en", // 语言（需要问运营是否是特殊语言，默认en）
        "showIcon": [0,1,2], // 显示版本的icon（根据版本来配置，默认0,1,2）
		"music": true, // 是否开启交互音乐（根据运营需求配置，默认flase，功能需要自己在home.vue写，可参考其他小伙伴项目）
		"adSceneId": 9, // SG版本 必带
		"DomainUI": "common", // 域名UI（需要问运营是否是特殊域名UI，默认common）
		"theme": "最终项目名称html", // 项目名称（可以默认不填）
        "isExa": false, // 是否是定制版本
        ...(后续内容可以自定义配置)
	}
    (有多个版本的时候，项目配置方式同上，直接在对象中添加即可)
}
```

第三步 配置 package.json

```json
    // 运行命令
    "serve-DiamondScratchCard": "cross-env build=DiamondScratchCard dir=RTB_DiamondScratchCard vite",

    "serve-玩法名称": "cross-env build=玩法名称 dir=项目名称 vite",
    // 玩法名称和项目名称可以相同
    // 玩法名称主要是上线后的html文件名DiamondScratchCard.html，尽量小驼峰或者大驼峰
    // 项目名称主要是本地项目目录名称，可以带短前缀区分制作人员

    // 构建命令
    "build-DiamondScratchCard": "cross-env build=DiamondScratchCard dir=RTB_DiamondScratchCard suffix=true vite build",

    "build-玩法名称": "cross-env build=玩法名称 dir=项目名称 suffix=true vite build",
    // suffix只有通用版需要配置

    /****** 上传命令 ******/
    // 正式
    "rsync": "node lib/s3sync.js --mode prod --src dist --dst tml --exclude=js --exclude=css",
    // 测试
    "rsync-test": "node lib/s3sync.js --mode test --src dist --dst tml --exclude=js --exclude=css",

```

## 运行/构建/上传项目

![alt text](image.png)

## 文件配置

:::info 文件配置说明

-   RTB 通用版：showIcon 通常为 [1,2]，构建需 suffix=true
-   RTB 定制版：isExa=true，showIcon 通常为 [1,2]，构建需 suffix=true
-   直媒版：showIcon 通常为 [0,1,2]（并可能存在自动跳转逻辑，按项目实现）
-   SG 版本：通常要求 adSceneId=9（以团队实际约定为准）

:::

## 玩法开发说明

1. 用到的数据上报包括（请自行查看 Hdad 和 sdk 相关 JS 文件）：

    - 互动率（getReward）
    - 互动展现（showReward）
    - 互动点击（clickReward）
    - 我的奖品（getMyRewards）

2. 页面加载调取数据：需要用到公共方法 `getData();`

    - 首次加载自执行文件需要使用 `whenPvFn` 方法。

3. 每个玩法项目都需要引入：

    - 模版退出 close 组件
    - 公共 option / 自定义 option（左上角选...共 CommonPopTip 弹窗组件（未中奖、没次数、规则）~~）
    - 游戏开始时互动需要限制 flag，并确认 bingo 返回数据。

4. 如需实物奖品配置：请使用 `this.pageMetaData.rewards` 获取实物奖品图片。

5. 公共文件中有很多方法、组件以及动效，可以自行引用。

6. 所有中奖弹窗分为无边框和有边框两种，需要引入对应公共组件 Prize 配置。
