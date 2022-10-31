(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{772:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"pvck"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pvck"}},[a._v("#")]),a._v(" pvck")]),a._v(" "),s("p",[a._v("检测物理卷的LVM元数据的一致性")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("pvck命令")]),a._v(" 用来检测物理卷的LVM元数据的一致性。默认情况下，物理卷中的前4个扇区保存着LVM卷标，可以使用"),s("code",[a._v("--labelsector")]),a._v("选项指定其他的位置（例如：数据恢复时）。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("pvck"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-d：调试模式；\n-v：详细信息模式；\n--labelsector：指定LVE卷标所在扇区。\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("物理卷：指定要检查的物理卷对应的设备文件。")]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("使用pvck命令检查物理卷"),s("code",[a._v("/dev/sdb1")]),a._v("。在命令行中输入下面的命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("pvck "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /dev/sdb1    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#检查物理卷元数据")]),a._v("\nScanning /dev/sdb1  \nFound label on /dev/sdb1, sector "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("LVM2 001  \nFound text metadata area: "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("offset")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4096")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192512")]),a._v(" \nFound LVM2 metadata record at "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("offset")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("125952")]),a._v(",  \n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("70656")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("offset2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("size2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);