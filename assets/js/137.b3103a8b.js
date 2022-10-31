(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{451:function(a,t,s){"use strict";s.r(t);var r=s(14),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"chattr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chattr"}},[a._v("#")]),a._v(" chattr")]),a._v(" "),t("p",[a._v("用来改变文件属性")]),a._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),t("p",[t("strong",[a._v("chattr命令")]),a._v(" 用来改变文件属性。这项指令可改变存放在ext2文件系统上的文件或目录属性，这些属性共有以下8种模式：")]),a._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("chattr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("a：让文件或目录仅供附加用途；\nb：不更新文件或目录的最后存取时间；\nc：将文件或目录压缩后存放；\nd：将文件或目录排除在倾倒操作之外；\ni：不得任意更动文件或目录；\ns：保密性删除文件或目录；\nS：即时更新文件或目录；\nu：预防意外删除。\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-R：递归处理，将指令目录下的所有文件及子目录一并处理；\n-v"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("版本编号"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：设置文件或目录版本；\n-V：显示指令执行过程；\n+"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("属性"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：开启文件或目录的该项属性；\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("属性"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：关闭文件或目录的该项属性；\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("属性"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定文件或目录的该项属性。\n")])])]),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),t("p",[a._v("用chattr命令防止系统中某个关键文件被修改：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("chattr +i /etc/fstab\n")])])]),t("p",[a._v("然后试一下rm、mv、rename等命令操作于该文件，都是得到Operation not permitted的结果。")]),a._v(" "),t("p",[a._v("让某个文件只能往里面追加内容，不能删除，一些日志文件适用于这种操作：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("chattr +a /data1/user_act.log\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);