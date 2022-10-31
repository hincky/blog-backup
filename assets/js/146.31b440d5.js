(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{459:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"chsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chsh"}},[s._v("#")]),s._v(" chsh")]),s._v(" "),a("p",[s._v("用来更换登录系统时使用的shell")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("chsh命令")]),s._v(" 用来更换登录系统时使用的shell。若不指定任何参数与用户名称，则chsh会以应答的方式进行设置。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("chsh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("shell 名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("shell 名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：更改系统预设的shell环境。；\n-l或--list-shells：列出目前系统可用的shell清单；\n-u或--help：在线帮助；\n-v或-version：显示版本信息。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("用户名：要改变默认shell的用户。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[a("strong",[s._v("查看系统安装了哪些shell的两种方法：")])]),s._v(" "),a("p",[s._v("第一种：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rocrocket@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ chsh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n/bin/sh\n/bin/bash\n/sbin/nologin\n/bin/zsh\n")])])]),a("p",[s._v("第二种：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rocrocket@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shells\n/bin/sh\n/bin/bash\n/sbin/nologin\n/bin/zsh\n")])])]),a("p",[s._v("其实"),a("code",[s._v("chsh -l")]),s._v("也是来查看这个文件。")]),s._v(" "),a("p",[a("strong",[s._v("查看当前正在使用的shell：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rocrocket@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n/bin/bash\n")])])]),a("p",[s._v("注意SHELL一定要是大写。可以看到，目前使用的shell是"),a("code",[s._v("/bin/bash")])]),s._v(" "),a("p",[a("strong",[s._v("把我的shell改成zsh：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rocrocket@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ chsh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /bin/zsh\nChanging shell "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" rocrocket.\nPassword:\nShell changed.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rocrocket@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\n")])])]),a("p",[s._v("使用chsh加选项"),a("code",[s._v("-s")]),s._v("就可以修改登录的shell了！你会发现你现在执行"),a("code",[s._v("echo $SHELL")]),s._v("后仍然输出为"),a("code",[s._v("/bin/bash")]),s._v("，这是因为你需要重启你的shell才完全投入到zsh怀抱中去。"),a("code",[s._v("chsh -s")]),s._v("其实修改的就是"),a("code",[s._v("/etc/passwd")]),s._v("文件里和你的用户名相对应的那一行。现在来查看下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rocrocket@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ^rocrocket\nrocrocket:x:500:500:rocrocket,China:/rocrocket/PSB/home:/bin/zsh\n")])])]),a("p",[s._v("你可以发现输出内容的最后部分已经变成了"),a("code",[s._v("/bin/zsh")]),s._v("了，下次重启的时候，linux就会读取这一命令来启动shell了！")]),s._v(" "),a("p",[a("strong",[s._v("把shell修改回/bin/bash：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rocrocket@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ chsh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /bin/bash\nChanging shell "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" rocrocket.\nPassword:\nShell changed.\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);