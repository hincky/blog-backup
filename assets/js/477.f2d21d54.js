(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{788:function(a,s,e){"use strict";e.r(s);var t=e(14),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"read"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[a._v("#")]),a._v(" read")]),a._v(" "),s("p",[a._v("从键盘读取变量值")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("read命令")]),a._v(" 从键盘读取变量的值，通常用在shell脚本中与用户进行交互的场合。该命令可以一次读取多个变量的值，变量和输入的值都需要使用空格隔开。在read命令后面，如果没有指定变量名，读取的数据将被自动赋值给特定的变量REPLY")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-p：指定读取值时的提示符；\n-t：指定读取值时等待的时间（秒）。\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("变量：指定读取值的变量名。")]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("下面的列表给出了read命令的常用方式：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" 1987name\n从标准输入读取输入并赋值给变量1987name。\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" first last\n从标准输入读取输入到第一个空格或者回车，将输入的第一个单词放到变量first中，并将该行其他的输入放在变量last中。\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v("\n从标准输入读取一行并赋值给特定变量"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("REPLY")]),a._v("。\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" arrayname\n把单词清单读入arrayname的数组里。\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"text"')]),a._v("\n打印提示（text），等待输入，并将输入存储在"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("REPLY")]),a._v("中。\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" line\n允许输入包含反斜杠。\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n指定读取等待时间为3秒。\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" var\n从输入中读取两个字符并存入变量var，不需要按回车读取。\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('":"')]),a._v(" var\n用定界符“:”结束输入行。\n")])])]),s("h2",{attrs:{id:"read命令示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read命令示例"}},[a._v("#")]),a._v(" read命令示例")]),a._v(" "),s("p",[a._v("从标准输入读取输入并赋值给变量1987name。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#read 1987name        #等待读取输入，直到回车后表示输入完毕，并将输入赋值给变量answer")]),a._v("\nHelloWorld            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#控制台输入Hello")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#echo $1987name       #打印变量")]),a._v("\nHelloWorld\n")])])]),s("p",[a._v("等待一组输入，每个单词之间使用空格隔开，直到回车结束，并分别将单词依次赋值给这三个读入变量。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#read one two three")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#在控制台输入1 2 3，它们之间用空格隔开。")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('#echo "one = $one, two = $two, three = $three"')]),a._v("\none "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(", two "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(", three "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])])]),s("p",[a._v("REPLY示例")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#read                  #等待控制台输入，并将结果赋值给特定内置变量REPLY。")]),a._v("\nThis is "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("REPLY")]),a._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#在控制台输入该行。 ")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#echo $REPLY           #打印输出特定内置变量REPLY，以确认是否被正确赋值。")]),a._v("\n\nThis is "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("REPLY")]),a._v("\n")])])]),s("p",[a._v("-p选项示例")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('#read -p "Enter your name: "            #输出文本提示，同时等待输入，并将结果赋值给REPLY。')]),a._v("\nEnter you name: stephen                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#在提示文本之后输入stephen")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#echo $REPLY")]),a._v("\nstephen\n")])])]),s("p",[a._v("等待控制台输入，并将输入信息视为数组，赋值给数组变量friends，输入信息用空格隔开数组的每个元素。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#read -a friends")]),a._v("\nTim Tom Helen\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('#echo "They are ${friends[0]}, ${friends[1]} and ${friends[2]}."')]),a._v("\nThey are Tim, Tom and Helen.\n")])])]),s("p",[s("strong",[a._v("补充一个终端输入密码时候，不让密码显示出来的例子。")])]),a._v(" "),s("p",[a._v("方法1：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"输入密码："')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" password read, is "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$pwd")]),a._v('"')]),a._v("\n")])])]),s("p",[a._v("方法2：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\nstty "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-echo")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"输入密码："')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v("\nstty "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" 输入完毕。\n")])])]),s("p",[a._v("其中，选项"),s("code",[a._v("-echo")]),a._v("禁止将输出发送到终端，而选项"),s("code",[a._v("echo")]),a._v("则允许发送输出。")]),a._v(" "),s("p",[a._v("使用read命令从键盘读取变量值，并且将值赋给指定的变量，输入如下命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" v1 v3          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#读取变量值")]),a._v("\n")])])]),s("p",[a._v("执行上面的指令以后，要求键入两个数据，如下所示：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Linux c+            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#输入数据")]),a._v("\n")])])]),s("p",[a._v("完成之后，可以使用echo命令将指定的变量值输出查看，输入如下命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$v1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$v3")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#输出变量的值")]),a._v("\n")])])]),s("p",[a._v("执行输出变量值的命令以后，将显示用户所输入的数据值，如下所示：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Linux c+           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#输出变量值")]),a._v("\n")])])]),s("p",[a._v("注意：使用echo命令输出变量值时，必须在变量名前添加符号"),s("code",[a._v("$")]),a._v("。否则，echo将直接输出变量名。")])])}),[],!1,null,null,null);s.default=n.exports}}]);