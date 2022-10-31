(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{759:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ping"}},[s._v("#")]),s._v(" ping")]),s._v(" "),t("p",[s._v("测试主机之间网络的连通性")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("ping命令")]),s._v(" 用来测试主机之间网络的连通性。执行ping指令会使用ICMP传输协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ping"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-d：使用Socket的SO_DEBUG功能；\n-c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("完成次数"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：设置完成要求回应的次数；\n-f：极限检测；\n-i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("间隔秒数"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定收发信息的间隔时间；\n-I"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("网络界面"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：使用指定的网络界面送出数据包；\n-l"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("前置载入"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：设置在送出要求信息之前，先行发出的数据包；\n-n：只输出数值；\n-p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("范本样式"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：设置填满数据包的范本样式；\n-q：不显示指令执行过程，开头和结尾的相关信息除外；\n-r：忽略普通的Routing Table，直接将数据包送到远端主机上；\n-R：记录路由过程；\n-s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("数据包大小"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：设置数据包的大小；\n-t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("存活数值"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：设置存活数值TTL的大小；\n-v：详细显示指令的执行过程。\n-w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("超时秒数"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：无论之前发送或接受了多少包，只要超过此秒数，程序退出；\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("目的主机：指定发送ICMP报文的目的主机。")]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@AY1307311912260196fcZ ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping www.jsdig.com")]),s._v("\nPING host.1.jsdig.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.42")]),s._v(".212.8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("-42-212-8.static.webnx.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.42")]),s._v(".212.8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("177")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("-42-212-8.static.webnx.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.42")]),s._v(".212.8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("178")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("-42-212-8.static.webnx.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.42")]),s._v(".212.8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("174")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("-42-212-8.static.webnx.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.42")]),s._v(".212.8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("177")]),s._v(" ms\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".按Ctrl+C结束\n\n--- host.1.jsdig.com "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" packets transmitted, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" received, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss, "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" 2998ms\nrtt min/avg/max/mdev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("174.068")]),s._v("/176.916/178.182/1.683 ms\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);