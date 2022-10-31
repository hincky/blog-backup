(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{463:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"clockdiff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clockdiff"}},[s._v("#")]),s._v(" clockdiff")]),s._v(" "),t("p",[s._v("检测两台linux主机的时间差")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[s._v("在ip报文的首部和ICMP报文的首部都可以放入时间戳数据。 "),t("strong",[s._v("clockdiff")]),s._v(" 程序正是使用时间戳来测算目的主机和本地主机的系统时间差。")]),s._v(" "),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-o：使用IP时间戳选项来测量系统时间差。时间戳只用3个。\n-o1：使用IP时间戳选项来测量系统时间差。用4个时间戳。如果-o和-o1都没有设置，那么就是用ICMP时间戳来测试系统时间差。\n")])])]),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lixi@lixi-desktop:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" tsandaddr www.ustc.edu.cn "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nPING www.ustc.edu.cn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.38")]),s._v(".64.9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.38")]),s._v(".64.9: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("62")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.823")]),s._v(" ms\nTS:     lixi-desktop.local "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.45")]),s._v(".74.25"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12522473")]),s._v(" absolute\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.45")]),s._v(".74.1    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-251")]),s._v("\n    local-gw.ustc.edu.cn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.38")]),s._v(".64.126"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("248")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.38")]),s._v(".64.9    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-857514")]),s._v("\nUnrecorded hops: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n--- www.ustc.edu.cn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" packets transmitted, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" received, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss, "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" 0ms\nrtt min/avg/max/mdev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.823")]),s._v("/0.823/0.823/0.000 ms\n")])])]),t("p",[s._v("首先由上面的得出在RRT不大的时候，几个ICMP时间戳的关系。本地主机和202.38.64.9之间的时间差约为：-857514+248-251=-857517。分别用-o（IP选项中时间戳）和不带选项（ICMP路由时间戳）上述路由的系统时间进行测试。得到的结果：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lixi@lixi-desktop:~"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./clockdiff -o 202.38.64.9  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.38")]),s._v(".64.9 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rtt")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("ms/1ms "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("delta")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-857517ms/-857517ms Wed Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":28:30 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lixi@lixi-desktop:~"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./clockdiff 202.38.64.9")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.38")]),s._v(".64.9 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rtt")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("187")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("ms/0ms "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("delta")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-857517ms/-857517ms Wed Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":28:35 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v("\n")])])]),t("p",[s._v("两种方法测试的都比较准确。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lixi@lixi-desktop:~"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#./clockdiff gigagate1.Princeton.EDU")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gigagate1.Princeton.EDU "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rtt")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("307")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("ms/271ms "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("delta")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-5ms/-5ms Wed Dec "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":50:16 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2008")]),s._v("\n")])])]),t("p",[s._v("上面是测试一个RTT较大的目的主机和本地主机的系统时间差。不过在使用clockdiff的时候，需要一点运气，因为很多路由会忽略ICMP或IP时间戳。")])])}),[],!1,null,null,null);t.default=e.exports}}]);