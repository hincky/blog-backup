(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{342:function(e,t,n){"use strict";n.r(t);var r=n(14),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"主题的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题的配置"}},[e._v("#")]),e._v(" 主题的配置")]),e._v(" "),t("p",[e._v("和插件几乎一样，主题的配置文件 themeEntry 应该导出一个普通的 "),t("code",[e._v("JavaScript")]),e._v(" 对象（"),t("code",[e._v("#1")]),e._v("），它也可以是一个返回对象的函数（"),t("code",[e._v("#2")]),e._v("），这个函数接受用户在 "),t("code",[e._v("siteConfig.themeConfig")]),e._v(" 为第一个参数、包含编译期上下文的 "),t("code",[e._v("ctx")]),e._v(" 对象作为第二个参数。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// .vuepress/theme/index.js\n// #1\nmodule.exports = {\n   // ...\n}\n// .vuepress/theme/index.js\n// #2\nmodule.exports = (themeConfig, ctx) => {\n   return {\n      // ...\n   }\n}\n")])])]),t("blockquote",[t("p",[e._v("TIP")])]),e._v(" "),t("ol",[t("li",[e._v("你应该能看到 "),t("code",[e._v("themeEntry")]),e._v(" 和 "),t("code",[e._v("themeConfig")]),e._v(" 的区别，前者是一个主题本身的配置，这些配置由 "),t("code",[e._v("VuePress")]),e._v(" 本身提供；而后者则是用户对主题的配置，这些配置选项则由当前使用的主题来实现，如 默认主题配置。")]),e._v(" "),t("li",[e._v("除了本节列出的选项，"),t("code",[e._v("themeEntry")]),e._v(" 也支持插件支持的所有 "),t("a",{attrs:{href:"https://www.vuepress.cn/plugin/option-api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置选项"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://www.vuepress.cn/plugin/life-cycle.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("生命周期"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" plugins")]),e._v(" "),t("ul",[t("li",[e._v("类型: Array|Object")]),e._v(" "),t("li",[e._v("默认值: undefined")])]),e._v(" "),t("p",[e._v("参考:\n"),t("a",{attrs:{href:"https://www.vuepress.cn/plugin/using-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("插件 > 使用插件."),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"ssrtemplate-danger-zone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssrtemplate-danger-zone"}},[e._v("#")]),e._v(" ssrTemplate Danger Zone")]),e._v(" "),t("p",[e._v("类型: String\n默认值: undefined\nbuild 模式下使用的 HTML 模板路径，默认模板:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<!DOCTYPE html>\n<html lang="{{ lang }}">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,initial-scale=1">\n    <title>{{ title }}</title>\n    <meta name="generator" content="VuePress {{ version }}">\n    {{{ userHeadTags }}}\n    {{{ pageMeta }}}\n    {{{ canonicalLink }}}\n    {{{ renderResourceHints() }}}\n    {{{ renderStyles() }}}\n  </head>\n  <body>\n    \x3c!--vue-ssr-outlet--\x3e\n    {{{ renderScripts() }}}\n  </body>\n</html>\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);