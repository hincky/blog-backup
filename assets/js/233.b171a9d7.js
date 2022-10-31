(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{545:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"finger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finger"}},[t._v("#")]),t._v(" finger")]),t._v(" "),s("p",[t._v("用于查找并显示用户信息")]),t._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),s("p",[s("strong",[t._v("finger命令")]),t._v(" 用于查找并显示用户信息。包括本地与远端主机的用户皆可，帐号名称没有大小写的差别。单独执行finger指令，它会显示本地主机现在所有的用户的登陆信息，包括帐号名称，真实姓名，登入终端机，闲置时间，登入时间以及地址和电话。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("finger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("-l：列出该用户的帐号名称，真实姓名，用户专属目录，登入所用的Shell，登入时间，转信地址，电子邮件状态，还有计划文件和方案文件内容；\n-m：排除查找用户的真实姓名；\n-s：列出该用户的帐号名称，真实姓名，登入终端机，闲置时间，登入时间以及地址和电话；\n-p：列出该用户的帐号名称，真实姓名，用户专属目录，登入所用的Shell，登入时间，转信地址，电子邮件状态，但不显示该用户的计划文件和方案文件内容。\n")])])]),s("p",[t._v("不指定finger的选项如果提供操作者的话，缺省设为"),s("code",[t._v("-l")]),t._v("输出风格，否则为"),s("code",[t._v("-s")]),t._v("风格，注意在两种格式中，如果信息不足，都有一些域可能丢失，如果没有指定参数finger会为当前登录的每个用户打印一个条目。")]),t._v(" "),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("p",[t._v("用户名：指定要查询信息的用户。")]),t._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("p",[t._v("在计算机上使用finger：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# finger")]),t._v("\nlogin Name Tty Idle Login "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" Office Office Phone\nroot root tty1 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nroot root pts/0 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nroot root *pts/1 Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n")])])]),s("p",[t._v("如果要查询远程机上的用户信息，需要在用户名后面接"),s("code",[t._v("@主机名")]),t._v("，采用"),s("code",[t._v("用户名@主机名")]),t._v("的格式，不过要查询的网络主机需要运行finger守护进程的支持。")])])}),[],!1,null,null,null);s.default=r.exports}}]);