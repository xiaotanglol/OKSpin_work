console.log("CONFIG LOADED:", __filename);
module.exports = {
	base: "/OKSpin_work/",
	lang: "zh-CN",
	title: "前端新员工交接文档",
	description: "面向新同事的一站式入职/项目/规范文档",

	themeConfig: {
		nav: [
			{ text: "入职", link: "/onboarding/01_accounts" },
			{ text: "流程", link: "/workflow/01_project_flow" },
			{ text: "项目交接", link: "/projects/01_overview" },
			{ text: "技术规范", link: "/tech/01_coding" },
			{ text: "AI", link: "/ai/workflow" },
			{ text: "日报/周报/月报", link: "/daily/01_daily" },
			{ text: "附录", link: "/appendix/links" },
		],
		sidebarDepth: 2,
		initialOpenGroupIndex: 0,
		sidebar: [
			{
				text: "入职引导（第一天）",
				children: [
					{ text: "账号 / 权限 / 平台", link: "/onboarding/01_accounts" },
					{ text: "团队与技术栈", link: "/onboarding/02_intro" },
					{ text: "开发环境与工具", link: "/onboarding/03_environment" },
					{ text: "第一天任务清单", link: "/onboarding/04_first_day" },
				],
			},
			{
				text: "工作流程",
				children: [
					{ text: "项目从需求到上线", link: "/workflow/01_project_flow" },
				],
			},
			{
				text: "项目交接（核心）",
				children: [
					{ text: "玩法制作", link: "/projects/01_overview" },
					{ text: "域名制作", link: "/projects/02_structure" },
					{ text: "域名UI制作", link: "/projects/03_run_build" },
					{ text: "EndCard(ec)制作", link: "/projects/04_deploy" },
				],
			},
			{
				text: "技术规范（长期资产）",
				children: [
					{ text: "代码规范", link: "/tech/01_coding" },
					{ text: "Vue3 约定", link: "/tech/02_vue" },
					{ text: "资源与动画规范", link: "/tech/03_assets" },
					{ text: "性能与质量", link: "/tech/04_performance" },
				],
			},
			{
				text: "AI 与效率工具",
				children: [
					{ text: "AI 开发工作流", link: "/ai/workflow" },
					{ text: "Prompt 模板库", link: "/ai/prompt" },
					{ text: "工具清单（Cursor 等）", link: "/ai/tools" },
				],
			},
			{
				text: "日报/周报/月报",
				children: [
					{ text: "工作填写", link: "/daily/01_daily" },
				],
			},
			{
				text: "附录",
				children: [
					{ text: "名词解释", link: "/appendix/glossary" },
					{ text: "常用链接", link: "/appendix/links" },
				],
			},
		],
	},
};
