(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{831:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"setpci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setpci"}},[s._v("#")]),s._v(" setpci")]),s._v(" "),t("p",[s._v("查询和配置PCI设备的使用工具")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("setpci命令")]),s._v(" 是一个查询和配置PCI设备的使用工具。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("setpci"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-v：显示指令执行的细节信息；\n-f：当没有任何操作需要完成时，不显示任何信息；\n-D：测试模式，并不真正将配置信息写入寄存器；\n-d：仅显示给定厂商和设备的信息；\n-s：仅显示指定总线、插槽上的设备或设备上的功能块信息。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("ul",[t("li",[s._v("PCI设备：指定要配置的PCI设备；")]),s._v(" "),t("li",[s._v("操作：指定要完成的配置操作。")])]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("p",[s._v("Linux下调节笔记本屏幕亮度方法：")]),s._v(" "),t("p",[s._v("首先进入终端输入lspci命令，列出各种设备的地址：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lspci\n00:00.0 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" bridge: Intel Corporation Mobile 945GM/PM/GMS, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("943")]),s._v("/940GML and 945GT Express Memory Controller Hub "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rev 03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n00:02.0 VGA compatible controller: Intel Corporation Mobile 945GM/GMS, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("943")]),s._v("/940GML Express Integrated Graphics Controller "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rev 03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n00:02.1 Display controller: Intel Corporation Mobile 945GM/GMS/GME, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("943")]),s._v("/940GML Express Integrated Graphics Controller "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rev 03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n00:1b.0 Audio device: Intel Corporation N10/ICH "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" Family High Definition Audio Controller "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rev 02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n00:1c.0 PCI bridge: Intel Corporation N10/ICH "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" Family PCI Express Port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rev 02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n00:1c.1 PCI bridge: Intel Corporation N10/ICH "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" Family PCI Express Port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rev 02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),t("p",[s._v("发现00:02.0是VGA设备，于是我们修改它的属性：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" setpci "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" 00:02.0 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("F4.B")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FF\n")])])]),t("p",[s._v("解释一下：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("setpci")]),s._v("  是修改设备属性的命令。")]),s._v(" "),t("li",[t("strong",[s._v("-s")]),s._v("  表示接下来输入的是设备的地址。")]),s._v(" "),t("li",[t("strong",[s._v("00:02.0")]),s._v("  VGA设备地址（<总线>:<接口>.<功能>）。")]),s._v(" "),t("li",[t("strong",[s._v("F4")]),s._v("  要修改的属性的地址，这里应该表示“亮度”。")]),s._v(" "),t("li",[t("strong",[s._v(".B")]),s._v("  修改的长度（B应该是字节（Byte），还有w（应该是Word，两个字节）、L（应该是Long，4个字节））。")]),s._v(" "),t("li",[t("strong",[s._v("=FF")]),s._v("  要修改的值（可以改）。")])]),s._v(" "),t("p",[s._v("我这里00是最暗，FF是最亮，不同的电脑可能不一样。比如说我嫌FF太闪眼了，我就可以：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" setpci "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" 00:02.0 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("F4.B")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CC\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);