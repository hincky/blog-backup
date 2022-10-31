(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{959:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"xargs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xargs"}},[a._v("#")]),a._v(" xargs")]),a._v(" "),s("p",[a._v("给其他命令传递参数的一个过滤器")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("xargs 命令")]),a._v(" 是给其他命令传递参数的一个过滤器，也是组合多个命令的一个工具。它擅长将标准输入数据转换成命令行参数，xargs 能够处理管道或者 stdin 并将其转换成特定命令的命令参数。xargs 也可以将单行或多行文本输入转换为其他格式，例如多行变单行，单行变多行。xargs 的默认命令是 echo，空格是默认定界符。这意味着通过管道传递给 xargs 的输入将会包含换行和空白，不过通过 xargs 的处理，换行和空白将被空格取代。xargs 是构建单行命令的重要组件之一。")]),a._v(" "),s("h3",{attrs:{id:"xargs-命令用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xargs-命令用法"}},[a._v("#")]),a._v(" xargs 命令用法")]),a._v(" "),s("p",[a._v("xargs 用作替换工具，读取输入数据重新格式化后输出。")]),a._v(" "),s("p",[a._v("定义一个测试文件，内有多行文本数据：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" test.txt\n\na b c d e f g\nh i j k l m n\no p q\nr s t\nu "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("v")]),a._v(" w x y z\n")])])]),s("p",[a._v("多行输入单行输出：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" test.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v("\n\na b c d e f g h i j k l m n o p q r s t u "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("v")]),a._v(" w x y z\n")])])]),s("h4",{attrs:{id:"使用-n-进行多行输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-n-进行多行输出"}},[a._v("#")]),a._v(" 使用 -n 进行多行输出")]),a._v(" "),s("p",[s("strong",[a._v("-n 选项")]),a._v(" 多行输出：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" test.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n3")]),a._v("\n\na b c\nd e f\ng h i\nj k l\nm n o\np q r\ns t u\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("v")]),a._v(" w x\ny z\n")])])]),s("h4",{attrs:{id:"使用-d-分割输入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-d-分割输入"}},[a._v("#")]),a._v(" 使用 -d 分割输入")]),a._v(" "),s("p",[s("strong",[a._v("-d 选项")]),a._v(" 可以自定义一个定界符：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nameXnameXnameXname"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dX")]),a._v("\n\nname name name name\n")])])]),s("p",[a._v("结合 "),s("strong",[a._v("-n 选项")]),a._v(" 使用：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nameXnameXnameXname"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dX")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n2")]),a._v("\n\nname name\nname name\n")])])]),s("h4",{attrs:{id:"读取-stdin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读取-stdin"}},[a._v("#")]),a._v(" 读取 stdin")]),a._v(" "),s("p",[s("strong",[a._v("读取 stdin，将格式化后的参数传递给命令")])]),a._v(" "),s("p",[a._v("假设一个命令为 sk.sh 和一个保存参数的文件 arg.txt：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#sk.sh 命令内容，打印出所有参数。")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$*")]),a._v("\n")])])]),s("p",[a._v("arg.txt 文件内容：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" arg.txt\n\naaa\nbbb\nccc\n")])])]),s("h4",{attrs:{id:"结合-i-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结合-i-选项"}},[a._v("#")]),a._v(" 结合 -I 选项")]),a._v(" "),s("p",[a._v("xargs 的一个 "),s("strong",[a._v("选项 -I")]),a._v(" ，使用 -I 指定一个替换字符串{}，这个字符串在 xargs 扩展时会被替换掉，当 -I 与 xargs 结合使用，每一个参数命令都会被执行一次：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" arg.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" ./sk.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" aaa "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" bbb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" ccc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n")])])]),s("p",[a._v("复制所有图片文件到 /data/images 目录下：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" *.jpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n1")]),a._v(" -I"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" /data/images\n")])])]),s("h4",{attrs:{id:"结合-find-命令使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结合-find-命令使用"}},[a._v("#")]),a._v(" 结合 find 命令使用")]),a._v(" "),s("p",[s("strong",[a._v("xargs 结合 find 使用")])]),a._v(" "),s("p",[a._v("用 rm 删除太多的文件时候，可能得到一个错误信息："),s("code",[a._v("/bin/rm Argument list too long")]),a._v(". 用 "),s("code",[a._v("xargs")]),a._v(" 去避免这个问题：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-type")]),a._v(" f "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*.log"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-print0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n")])])]),s("p",[a._v("xargs -0 将 "),s("code",[a._v("\\0")]),a._v(" 作为定界符。")]),a._v(" "),s("p",[a._v("统计一个源代码目录中所有 php 文件的行数：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-type")]),a._v(" f "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*.php"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-print0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n")])])]),s("p",[a._v("查找所有的 jpg 文件，并且压缩它们：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-type")]),a._v(" f "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*.jpg"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-czvf")]),a._v(" images.tar.gz\n")])])]),s("h4",{attrs:{id:"打印出执行的命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打印出执行的命令"}},[a._v("#")]),a._v(" 打印出执行的命令")]),a._v(" "),s("p",[a._v("结合 "),s("code",[a._v("-t")]),a._v(" 选项可以打印出 "),s("code",[a._v("xargs")]),a._v(" 执行的命令")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("ls | xargs -t -I{} echo {}\n")])])]),s("p",[a._v("会输出当前目录下的文件列表和执行的 echo 命令")]),a._v(" "),s("h4",{attrs:{id:"使用-p-选项确认执行的命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-p-选项确认执行的命令"}},[a._v("#")]),a._v(" 使用 -p 选项确认执行的命令")]),a._v(" "),s("p",[s("code",[a._v("-p")]),a._v(" 选项会在执行每一个命令时弹出确认，当你需要非常准确的确认每一次操作时可以使用 "),s("code",[a._v("-p")]),a._v(" 参数，比如，查找当前目录下 "),s("code",[a._v(".log")]),a._v(" 文件，每一次删除都需要确认：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('find . -maxdepth 1 -name "*.log" | xargs -p -I{} rm {}\n')])])]),s("h4",{attrs:{id:"执行多个命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行多个命令"}},[a._v("#")]),a._v(" 执行多个命令")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("-I")]),a._v(" 选项可以让 "),s("code",[a._v("xargs")]),a._v(" 执行多个命令")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("cat foo.txt\none\ntwo\nthree\n\ncat foo.txt | xargs -I % sh -c 'echo %; mkdir %'\none\ntwo\nthree\n\nls\none two three\n")])])]),s("h4",{attrs:{id:"其他应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他应用"}},[a._v("#")]),a._v(" 其他应用")]),a._v(" "),s("p",[s("strong",[a._v("xargs 其他应用")])]),a._v(" "),s("p",[a._v("假如你有一个文件包含了很多你希望下载的 URL，你能够使用 xargs 下载所有链接：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" url-list.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v("\n")])])]),s("h3",{attrs:{id:"子-shell-subshells"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子-shell-subshells"}},[a._v("#")]),a._v(" 子 Shell（Subshells）")]),a._v(" "),s("p",[a._v("运行一个 shell 脚本时会启动另一个命令解释器.，就好像你的命令是在命令行提示下被解释的一样，类似于批处理文件里的一系列命令。每个 shell 脚本有效地运行在父 shell(parent shell) 的一个子进程里。这个父 shell 是指在一个控制终端或在一个 xterm 窗口中给你命令指示符的进程。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("cmd1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" cmd2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" cmd3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" cmd4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" cmd5\n")])])]),s("p",[a._v("如果 cmd2 是 cd /，那么就会改变子 Shell 的工作目录，这种改变只是局限于子 shell 内部，cmd5 则完全不知道工作目录发生的变化。子 shell 是嵌在圆括号 () 内部的命令序列，子 Shell 内部定义的变量为局部变量。")]),a._v(" "),s("p",[a._v("子 shell 可用于为一组命令设定临时的环境变量：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("COMMAND1\nCOMMAND2\nCOMMAND3\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(":\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/bin\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" TERMINFO\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("shift")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n  COMMAND4\n  COMMAND5\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 只是从子 shell 退出。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 父 shell 不受影响，变量值没有更改。")]),a._v("\nCOMMAND6\nCOMMAND7\n")])])]),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[a._v("#")]),a._v(" reference")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://shapeshed.com/unix-xargs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://shapeshed.com/unix-xargs/"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);