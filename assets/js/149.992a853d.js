(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{461:function(a,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"clock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clock"}},[a._v("#")]),a._v(" clock")]),a._v(" "),t("p",[a._v("用于调整 RTC 时间")]),a._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),t("p",[t("strong",[a._v("clock命令")]),a._v("用于调整 RTC 时间。 RTC 是电脑内建的硬件时间，执行这项指令可以显示现在时刻，调整硬件时钟的时间，将系统时间设成与硬件时钟之时间一致，或是把系统时间回存到硬件时钟。")]),a._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("clock "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--adjust"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--debug"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--directisa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--getepoch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--hctosys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--set "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--date")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<日期时间>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--setepoch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--epoch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--show"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--systohc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--utc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--adjust")]),a._v(" 　第一次使用"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--set"')]),a._v("或"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--systohc"')]),a._v("参数设置硬件时钟，会在/etc目录下产生一个名称为adjtime的文件。当再次使用这两个参数调整硬件时钟，此文件便会记录两次调整间之差异，日后执行clock指令加上"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--adjust"')]),a._v("参数时，程序会自动根 据记录文件的数值差异，计算出平均值，自动调整硬件时钟的时间。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--debug")]),a._v(" 　详细显示指令执行过程，便于排错或了解程序执行的情形。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--directisa")]),a._v(" 　告诉clock指令不要通过/dev/rtc设备文件，直接对硬件时钟进行存取。这个参数适用于仅有ISA总线结构的老式电脑。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--getepoch")]),a._v(" 　把系统核心内的硬件时钟新时代数值，呈现到标准输出设备。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hctosys")]),a._v(" 　Hardware Clock to System Time，把系统时间设成和硬件时钟一致。由于这个动作将会造成系统全面更新文件的存取时间，所以最好在系统启动时就执行它。\n--set--date 　设置硬件时钟的日期和时间。\n--setepoch--epoch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("年份"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 　设置系统核心之硬件时钟的新时代数值，年份以四位树字表示。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--show")]),a._v(" 　读取硬件时钟的时间，并将其呈现至标准输出设备。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--systohc")]),a._v(" 　System Time to Hardware Clock，将系统时间存回硬件时钟内。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--test")]),a._v(" 　仅作测试，并不真的将时间写入硬件时钟或系统时间。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--utc")]),a._v(" 　把硬件时钟上的时间时为CUT，有时也称为UTC或UCT。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v(" 　显示版本信息。\n")])])]),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),t("p",[a._v("获取当前的时间")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("clock "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 获取当前的时间")]),a._v("\n")])])]),t("p",[a._v("显示UTC时间")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("clock "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-utc")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示UTC时间")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);