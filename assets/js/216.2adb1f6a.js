(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{528:function(s,t,a){"use strict";a.r(t);var n=a(14),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[s._v("#")]),s._v(" env")]),s._v(" "),t("p",[s._v("显示系统中已存在的环境变量")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("env命令")]),s._v(' 用于显示系统中已存在的环境变量，以及在定义的环境中执行指令。该命令只使用"-"作为参数选项时，隐藏了选项"-i"的功能。若没有设置任何选项和参数时，则直接显示当前的环境变量。')]),s._v(" "),t("p",[s._v('如果使用env命令在新环境中执行指令时，会因为没有定义环境变量"PATH"而提示错误信息"such file or directory"。此时，用户可以重新定义一个新的"PATH"或者使用绝对路径。')]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-i：开始一个新的空的环境；\n-u"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("变量名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：从当前环境中删除指定的变量。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("ul",[t("li",[s._v("变量定义：定义在新的环境中变量，定义多个变量定义用空格隔开。格式为“变量名=值”；")]),s._v(" "),t("li",[s._v("指定：指定要执行的指令和参数。")])]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# env")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hostname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LinServ-1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/bash\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HISTSIZE")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SSH_CLIENT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.111 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2705")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SSH_TTY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/pts/0\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LS_COLORS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("00:fi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("00:di"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v(":ln"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v(":pi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v(":so"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":bd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("01:cd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("01:or"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("05"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(":mi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("05"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(":ex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(":*.cmd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(":*.exe"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(":*.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(":*.btm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(":*.bat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(":*.sh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(":*.csh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(":*.tar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.tgz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.arj"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.taz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.lzh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.zip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.z"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.Z"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.gz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.bz2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.bz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.tz"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.rpm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.cpio"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(":*.jpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":*.gif"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":*.bmp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":*.xbm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":*.xpm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":*.png"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":*.tif"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mail")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/spool/mail/root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INPUTRC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/inputrc\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LANG")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh_CN.UTF-8\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHLVL")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SSH_CONNECTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.111 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2705")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LESSOPEN")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/usr/bin/lesspipe.sh %s\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("G_BROKEN_FILENAMES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("_")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/env\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);