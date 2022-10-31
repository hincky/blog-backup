(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{411:function(s,a,t){"use strict";t.r(a);var n=t(14),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"arping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arping"}},[s._v("#")]),s._v(" arping")]),s._v(" "),a("p",[s._v("通过发送ARP协议报文测试网络")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("arping命令")]),s._v(" 是用于发送arp请求到一个相邻主机的工具，arping使用arp数据包，通过ping命令检查设备上的硬件地址。能够测试一个ip地址是否是在网络上已经被使用，并能够获取更多设备信息。功能类似于ping。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("arping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-b：用于发送以太网广播帧（FFFFFFFFFFFF）。arping一开始使用广播地址，在收到响应后就使用unicast地址。\n-q：quiet output不显示任何信息；\n-f：表示在收到第一个响应报文后就退出；\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" timeout：设定一个超时时间，单位是秒。如果到了指定时间，arping还没到完全收到响应则退出；\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" count：表示发送指定数量的ARP请求数据包后就停止。如果指定了deadline选项，则arping会等待相同数量的arp响应包，直到超时为止；\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" source：设定arping发送的arp数据包中的SPA字段的值。如果为空，则按下面处理，如果是DAD模式（冲突地址探测），则设置为0.0.0.0，如果是Unsolicited ARP模式（Gratutious ARP）则设置为目标地址，否则从路由表得出；\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" interface：设置ping使用的网络接口。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("目的主机：指定发送ARP报文的目的主机。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# arping www.baidu.com ")]),s._v("\nARPING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("173.231")]),s._v(".43.132 eth0\nUnicast reply from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 00:D0:03:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bc:48:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".666ms\nUnicast reply from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:D0:03:BC:48:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".677ms\nUnicast reply from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:D0:03:BC:48:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".691ms\nUnicast reply from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:D0:03:BC:48:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".728ms\nUnicast reply from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:D0:03:BC:48:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".626ms\nUnicast reply from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:D0:03:BC:48:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".292ms\nUnicast reply from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:D0:03:BC:48:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".429ms\nUnicast reply from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".111.147 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:D0:03:BC:48:00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".042ms\nSent "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" probes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" broadcast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\nReceived "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);