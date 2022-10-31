(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{608:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[t._v("#")]),t._v(" init")]),t._v(" "),a("p",[t._v("init进程是所有Linux进程的父进程")]),t._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),a("p",[a("strong",[t._v("init命令")]),t._v(" 是Linux下的进程初始化工具，init进程是所有Linux进程的父进程，它的进程号为1。init命令是Linux操作系统中不可缺少的程序之一，init进程是Linux内核引导运行的，是系统中的第一个进程。")]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("-b：不执行相关脚本而直接进入单用户模式；\n-s：切换到单用户模式。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("p",[t._v("运行等级：指定Linux系统要切换到的运行等级。")]),t._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),a("p",[t._v("几个常用的命令")]),t._v(" "),a("p",[t._v("查看系统进程命令："),a("code",[t._v("ps -ef | head")]),a("br"),t._v("\n查看init的配置文件："),a("code",[t._v("more /etc/inittab")]),a("br"),t._v("\n查看系统当前运行的级别："),a("code",[t._v("runlevel")])]),t._v(" "),a("p",[a("strong",[t._v("运行级别")])]),t._v(" "),a("p",[t._v("到底什么是运行级呢？简单的说，运行级就是操作系统当前正在运行的功能级别。这个级别从0到6 ，具有不同的功能。你也可以在"),a("code",[t._v("/etc/inittab")]),t._v("中查看它的英文介绍。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#0  停机（千万不能把initdefault 设置为0）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1  单用户模式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2  多用户，没有 NFS(和级别3相似，会停止部分服务)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3  完全多用户模式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4  没有用到")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#5  x11(Xwindow)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#6  重新启动（千万不要把initdefault 设置为6）")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);