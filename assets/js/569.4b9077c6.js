(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{881:function(a,s,t){"use strict";t.r(s);var e=t(14),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"tac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tac"}},[a._v("#")]),a._v(" tac")]),a._v(" "),s("p",[a._v("连接多个文件并以行为单位反向打印到标准输出。")]),a._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[a._v("#")]),a._v(" 概要")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tac")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("FILE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),s("h2",{attrs:{id:"主要用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[a._v("#")]),a._v(" 主要用途")]),a._v(" "),s("ul",[s("li",[a._v("按行为单位反向显示文件内容，如果没有文件或文件为"),s("code",[a._v("-")]),a._v("则读取标准输入。")]),a._v(" "),s("li",[a._v("处理多个文件时，依次将每个文件反向显示，而不是将所有文件连在一起再反向显示。")])]),a._v(" "),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("FILE（可选）：要处理的文件，可以为一或多个。")]),a._v(" "),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("长选项与短选项等价\n\n-b, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--before")]),a._v("              在之前而不是之后连接分隔符。\n-r, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--regex")]),a._v("               将分隔符作为基础正则表达式（BRE）处理。\n-s, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--separator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("STRING    使用STRING作为分隔符代替默认的换行符。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("                    显示帮助信息并退出。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("                 显示版本信息并退出。\n")])])]),s("h2",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[a._v("#")]),a._v(" 返回值")]),a._v(" "),s("p",[a._v("返回状态为成功除非给出了非法选项或非法参数。")]),a._v(" "),s("h2",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 选自官方info文档的例子：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 一个接着一个字符的反转一个文件：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tac")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'x\\|[^x]'")]),a._v(" test.log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 关于-b选项：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("seq")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tac")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用-b选项：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("seq")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tac")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出，注意21后面没有换行符：")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 前一个例子相当于将 '1\\n2\\n3\\n' 转换为 '3\\n2\\n1\\n'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 前一个例子相当于将 '1\\n2\\n3\\n' 转换为 '\\n\\n3\\n21'")]),a._v("\n")])])]),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[a._v("#")]),a._v(" 注意")]),a._v(" "),s("ol",[s("li",[a._v("该命令是"),s("code",[a._v("GNU coreutils")]),a._v("包中的命令，相关的帮助信息请查看"),s("code",[a._v("man -s 1 tac")]),a._v("或"),s("code",[a._v("info coreutils 'tac invocation'")]),a._v("。")]),a._v(" "),s("li",[a._v("关于基础正则表达式（BRE）的内容，详见"),s("code",[a._v("man -s 1 grep")]),a._v("的"),s("code",[a._v("REGULAR EXPRESSIONS")]),a._v("段落。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);