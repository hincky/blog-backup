(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{495:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"dirs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dirs"}},[s._v("#")]),s._v(" dirs")]),s._v(" "),t("p",[s._v("显示目录堆栈。")]),s._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-clpv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+N"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-N"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"主要用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("显示目录堆栈。")])]),s._v(" "),t("li",[t("p",[s._v("清空目录堆栈。")])])]),s._v(" "),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("    清空目录堆栈。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("    堆栈内以~开头的目录在显示时展开。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("    将目录堆栈内的每一个目录按行显示。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("    将目录堆栈内的每一个目录按行显示并在每行前加上堆栈内的位置编号。\n")])])]),t("h2",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("+N（可选）：不带参数执行"),t("code",[s._v("dirs")]),s._v("命令显示的列表中，左起的第N个目录将被显示。（从0开始计数）")]),s._v(" "),t("p",[s._v("-N（可选）：不带参数执行"),t("code",[s._v("dirs")]),s._v("命令显示的列表中，右起的第N个目录将被显示。（从0开始计数）")]),s._v(" "),t("h2",{attrs:{id:"返回值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),t("p",[s._v("返回成功除非提供了非法选项或执行出现错误。")]),s._v(" "),t("h2",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加目录到堆栈。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v("\n~\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" ~/Desktop\n~ ~/Desktop\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" ~/Pictures\n~ ~/Pictures ~/Desktop\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" ~/bin\n~ ~/bin ~/Pictures ~/Desktop\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选项和参数的示例：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n/home/user2 /home/user2/bin /home/user2/Pictures /home/user2/Desktop\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n~\n~/bin\n~/Pictures\n~/Desktop\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  ~\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  ~/bin\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  ~/Pictures\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  ~/Desktop\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v(" +2\n~/Pictures\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-2")]),s._v("\n~/bin\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirs")]),s._v("\n~\n")])])]),t("h3",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("bash")]),s._v("的目录堆栈命令包括"),t("code",[s._v("dirs popd pushd")]),s._v("。")]),s._v(" "),t("li",[s._v("当前目录始终是目录堆栈的顶部。")]),s._v(" "),t("li",[s._v("该命令是bash内建命令，相关的帮助信息请查看"),t("code",[s._v("help")]),s._v("命令。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);