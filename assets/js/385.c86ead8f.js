(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{698:function(a,s,t){"use strict";t.r(s);var e=t(14),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mii-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mii-tool"}},[a._v("#")]),a._v(" mii-tool")]),a._v(" "),s("p",[a._v("配置网络设备协商方式的工具")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("mii-tool命令")]),a._v(" 是用于查看、管理介质的网络接口的状态，有时网卡需要配置协商方式，比如10/100/1000M的网卡半双工、全双工、自动协商的配置。但大多数的网络设备是不用我们来修改协商，因为大多数网络设置接入的时候，都采用自动协商来解决相互通信的问题。不过自动协商也不是万能的，有时也会出现错误，比如丢包率比较高，这时就要我们来指定网卡的协商方式。mii-tool就是能指定网卡的协商方式。下面我们说一说mii-tool的用法。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("usage: mii-tool "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-VvRrwl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-A media,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" media"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("interface "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-V")]),a._v(" 显示版本信息；\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" 显示网络接口的信息；\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" 重设MII到开启状态；\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" 重启自动协商模式；\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" 查看网络接口连接的状态变化；\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" 写入事件到系统日志；\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" 指令特定的网络接口；\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" 更改网络接口协商方式；\n\nmedia: 100baseT4, 100baseTx-FD, 100baseTx-HD, 10baseT-FD, 10baseT-HD,\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("to advertise both HD and FD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 100baseTx, 10baseT\n")])])]),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("查看网络接口的协商状态：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mii-tool -v eth0")]),a._v("\neth0: negotiated 100baseTx-FD, "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" ok\n  product info: vendor 00:50:ef, model "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rev")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n  basic mode:   autonegotiation enabled\n  basic status: autonegotiation complete, "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" ok\n  capabilities: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD\n  advertising:  100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD flow-control\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" partner: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD\n")])])]),s("p",[a._v("注：上面的例子，我们可以看得到是自动协商，注意红字的部份。")]),a._v(" "),s("p",[a._v("更改网络接口协商方式：")]),a._v(" "),s("p",[a._v("更改网络接口的协商方式，我们要用到"),s("code",[a._v("-F")]),a._v("选项，后面可以接100baseT4, 100baseTx-FD, 100baseTx-HD, 10baseT-FD, 10baseT-HD等参数；")]),a._v(" "),s("p",[a._v("如果我们想把网络接口eth0改为1000Mb/s全双工的模式应该怎么办呢？")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mii-tool -F 100baseTx-FD")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mii-tool -v eth0")]),a._v("\neth0: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" Mbit, full duplex, "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" ok\n  product info: vendor 00:00:00, model "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rev")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n  basic mode:   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" Mbit, full duplex\n  basic status: "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" ok\n  capabilities: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD\n  advertising:  100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD\n")])])]),s("p",[a._v("注：是不是已经改过来了？当然，我们也一样用ethtool工具来更改，比如执行下面的命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ethtool -s eth0 speed 100 duplex full")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);