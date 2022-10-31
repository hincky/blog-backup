(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{882:function(a,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"tail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[a._v("#")]),a._v(" tail")]),a._v(" "),t("p",[a._v("在屏幕上显示指定文件的末尾若干行")]),a._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),t("p",[t("strong",[a._v("tail命令")]),a._v(" 用于输入文件中的尾部内容。")]),a._v(" "),t("ul",[t("li",[a._v("默认在屏幕上显示指定文件的末尾10行。")]),a._v(" "),t("li",[a._v("处理多个文件时会在各个文件之前附加含有文件名的行。")]),a._v(" "),t("li",[a._v("如果没有指定文件或者文件名为"),t("code",[a._v("-")]),a._v("，则读取标准输入。")]),a._v(" "),t("li",[a._v("如果表示字节或行数的"),t("code",[a._v("NUM")]),a._v("值之前有一个"),t("code",[a._v("+")]),a._v("号，则从文件开头的第"),t("code",[a._v("NUM")]),a._v("项开始显示，而不是显示文件的最后"),t("code",[a._v("NUM")]),a._v("项。")]),a._v(" "),t("li",[t("code",[a._v("NUM")]),a._v("值后面可以有后缀：\n"),t("ul",[t("li",[t("code",[a._v("b")]),a._v("  : 512")]),a._v(" "),t("li",[t("code",[a._v("kB")]),a._v(" : 1000")]),a._v(" "),t("li",[t("code",[a._v("k")]),a._v(" : 1024")]),a._v(" "),t("li",[t("code",[a._v("MB")]),a._v(" : 1000 * 1000")]),a._v(" "),t("li",[t("code",[a._v("M")]),a._v(" : 1024 * 1024")]),a._v(" "),t("li",[t("code",[a._v("GB")]),a._v(" : 1000 * 1000 * 1000")]),a._v(" "),t("li",[t("code",[a._v("G")]),a._v(" : 1024 * 1024 * 1024")]),a._v(" "),t("li",[t("code",[a._v("T")]),a._v("、"),t("code",[a._v("P")]),a._v("、"),t("code",[a._v("E")]),a._v("、"),t("code",[a._v("Z")]),a._v("、"),t("code",[a._v("Y")]),a._v("等以此类推。")])])])]),a._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--bytes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NUM                 输出文件尾部的NUM（NUM为整数）个字节内容。\n-f, --follow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("descript"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v("                              与 “--follow"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("name --retry” 功能相同。\n-n, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--line")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NUM                  输出文件的尾部NUM（NUM位数字）行内容。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("进程号"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("                  与“-f”选项连用，当指定的进程号的进程终止后，自动退出tail命令。\n-q, --quiet, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--silent")]),a._v("           当有多个文件参数时，不输出各个文件名。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--retry")]),a._v("                         即是在tail命令启动时，文件不可访问或者文件稍后变得不可访问，都始终尝试打开文件。使用此选项时需要与选项“--follow"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("name”连用。\n-s, --sleep-interal"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("秒数"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("      与“-f”选项连用，指定监视文件变化时间隔的秒数。\n-v, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verbose")]),a._v("                   当有多个文件参数时，总是输出各个文件名。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("                          显示指令的帮助信息。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("                       显示指令的版本信息。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),t("p",[a._v("文件列表：指定要显示尾部内容的文件列表。")]),a._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#（显示文件file的最后10行）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" +20 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#（显示文件file的内容，从第20行至文件末尾）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#（显示文件file的最后10个字节）")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-25")]),a._v(" mail.log "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示 mail.log 最后的 25 行")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" mail.log "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等同于--follow=descriptor，根据文件描述符进行追踪，当文件改名或被删除，追踪停止")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" mail.log "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等同于--follow=name --retry，根据文件名进行追踪，并保持重试，即该文件被删除或改名后，如果再次创建相同的文件名，会继续追踪")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);