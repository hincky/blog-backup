(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{921:function(a,s,t){"use strict";t.r(s);var e=t(14),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"unset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unset"}},[a._v("#")]),a._v(" unset")]),a._v(" "),s("p",[a._v("删除指定的shell变量或函数。")]),a._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[a._v("#")]),a._v(" 概要")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"主要用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[a._v("#")]),a._v(" 主要用途")]),a._v(" "),s("ul",[s("li",[a._v("删除一到多个shell变量（不包括只读变量）。")]),a._v(" "),s("li",[a._v("删除一到多个shell函数。")]),a._v(" "),s("li",[a._v("删除一到多个具有引用属性的变量（如果-n选项存在）。")])]),a._v(" "),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-f：仅删除函数。\n-v：仅删除变量（不包括只读变量）。\n-n：删除具有引用属性的变量名（如果该选项存在）。\n")])])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("name（可选）：要删除的变量或函数。")]),a._v(" "),s("h2",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[a._v("#")]),a._v(" 返回值")]),a._v(" "),s("p",[a._v("返回成功除非选项错误或要删除的变量或函数有只读属性。")]),a._v(" "),s("h2",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除变量。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("paper_size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'B5'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" paper_size\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除函数。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("show_result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Last Command Return: $?'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" show_result\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 当不指定选项时，优先删除变量，如果失败则删除函数。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("aa")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("aa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'aa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" aa\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 变量'aa'已被删除。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" aa\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 函数'aa'存在。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" -F"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" aa\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 演示unset使用-n选项，name指定了引用变量时的情况。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义引用变量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("a\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# 查看属性，显示declare -n b="a"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" b\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${b}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示a")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("b}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定-n选项时")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" b\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 引用变量b已被删除")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" b\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 被引用的变量a未被删除")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" a\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 演示unset不使用-n选项，name指定了引用变量时的情况。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义引用变量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("a\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# 查看属性，显示declare -n b="a"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" b\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${b}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示a")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("b}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 不指定-n选项时")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" b\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# 引用变量b未被删除，显示declare -n b="a"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" b\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 被引用的变量a被删除")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("declare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" a\n")])])]),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[a._v("#")]),a._v(" 注意")]),a._v(" "),s("ol",[s("li",[a._v("该命令是bash内建命令，相关的帮助信息请查看"),s("code",[a._v("help")]),a._v("命令。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);