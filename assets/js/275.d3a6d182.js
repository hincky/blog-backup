(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{588:function(a,s,t){"use strict";t.r(s);var e=t(14),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"hexdump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexdump"}},[a._v("#")]),a._v(" hexdump")]),a._v(" "),s("p",[a._v("显示文件十六进制格式")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("hexdump命令")]),a._v(" 一般用来查看“二进制”文件的十六进制编码，但实际上它能查看任何文件，而不只限于二进制文件。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("hexdump "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" length 只格式化输入文件的前length个字节。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" 输出规范的十六进制和ASCII码。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" 单字节八进制显示。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" 单字节字符显示。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" 双字节十进制显示。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" 双字节八进制显示。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-x")]),a._v(" 双字节十六进制显示。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" 从偏移量开始输出。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" 指定格式字符串，格式字符串包含在一对单引号中，格式字符串形如："),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'a/b "format1" "format2"\'')]),a._v("。\n")])])]),s("p",[a._v("每个格式字符串由三部分组成，每个由空格分隔，第一个形如a/b，b表示对每b个输入字节应用format1格式，a表示对每a个输入字节应用format2格式，一般a>b，且b只能为1，2，4，另外a可以省略，省略则a=1。format1和format2中可以使用类似printf的格式字符串，如：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("%02d：两位十进制\n%03x：三位十六进制\n%02o：两位八进制\n%c：单个字符等\n")])])]),s("p",[a._v("还有一些特殊的用法：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("%_ad：标记下一个输出字节的序号，用十进制表示。\n%_ax：标记下一个输出字节的序号，用十六进制表示。\n%_ao：标记下一个输出字节的序号，用八进制表示。\n%_p：对不能以常规字符显示的用 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" 代替。\n")])])]),s("p",[a._v("同一行如果要显示多个格式字符串，则可以跟多个"),s("code",[a._v("-e")]),a._v("选项。")]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("hexdump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'16/1 "%02X " "  |  "\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'16/1 "%_p" "\\n"\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(" 1A 1B 1C 1D 1E 1F  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("26")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("28")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" 2A 2B 2C 2D 2E 2F  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v('"#$%'),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("*+,-./ \n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);