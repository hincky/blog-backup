(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{889:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"tcpdump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump"}},[s._v("#")]),s._v(" tcpdump")]),s._v(" "),a("p",[s._v("一款sniffer工具，是Linux上的抓包工具，嗅探器")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("tcpdump命令")]),s._v(" 是一款抓包，嗅探器工具，它可以打印所有经过网络接口的数据包的头信息，也可以使用"),a("code",[s._v("-w")]),s._v("选项将数据包保存到文件中，方便以后分析。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-a：尝试将网络和广播地址转换成名称；\n-c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("数据包数目"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：收到指定的数据包数目后，就停止进行倾倒操作；\n-d：把编译过的数据包编码转换成可阅读的格式，并倾倒到标准输出；\n-dd：把编译过的数据包编码转换成C语言的格式，并倾倒到标准输出；\n-ddd：把编译过的数据包编码转换成十进制数字的格式，并倾倒到标准输出；\n-e：在每列倾倒资料上显示连接层级的文件头；\n-f：用数字显示网际网络地址；\n-F"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("表达文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定内含表达方式的文件；\n-i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("网络界面"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：使用指定的网络截面送出数据包；\n-l：使用标准输出列的缓冲区；\n-n：不把主机的网络地址转换成名字；\n-N：不列出域名；\n-O：不将数据包编码最佳化；\n-p：不让网络界面进入混杂模式；\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v(" ：快速输出，仅列出少数的传输协议信息；\n-r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("数据包文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：从指定的文件读取数据包数据；\n-s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("数据包大小"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：设置每个数据包的大小；\n-S：用绝对而非相对数值列出TCP关联数；\n-t：在每列倾倒资料上不显示时间戳记；\n-tt： 在每列倾倒资料上显示未经格式化的时间戳记；\n-T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("数据包类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：强制将表达方式所指定的数据包转译成设置的数据包类型；\n-v：详细显示指令执行过程；\n-vv：更详细显示指令执行过程；\n-x：用十六进制字码列出数据包资料；\n-w"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("数据包文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：把数据包数据写入指定的文件。\n")])])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[a("strong",[s._v("直接启动tcpdump将监视第一个网络接口上所有流过的数据包")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump\n")])])]),a("p",[a("strong",[s._v("监视指定网络接口的数据包")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" eth1\n")])])]),a("p",[s._v("如果不指定网卡，默认tcpdump只会监视第一个网络接口，一般是eth0，下面的例子都没有指定网络接口。")]),s._v(" "),a("p",[a("strong",[s._v("监视指定主机的数据包")])]),s._v(" "),a("p",[s._v("打印所有进入或离开sundown的数据包。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" sundown\n")])])]),a("p",[s._v("也可以指定ip,例如截获所有210.27.48.1 的主机收到的和发出的所有的数据包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.27")]),s._v(".48.1\n")])])]),a("p",[s._v("打印helios 与 hot 或者与 ace 之间通信的数据包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" helios and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" hot or ace "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("截获主机210.27.48.1 和主机210.27.48.2 或210.27.48.3的通信")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.27")]),s._v(".48.1 and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.27")]),s._v(".48.2 or "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.27")]),s._v(".48.3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("打印ace与任何其他主机之间通信的IP 数据包, 但不包括与helios之间的数据包.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" ace and not helios\n")])])]),a("p",[s._v("如果想要获取主机210.27.48.1除了和主机210.27.48.2之外所有主机通信的ip包，使用命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.27")]),s._v(".48.1 and "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.27")]),s._v(".48.2\n")])])]),a("p",[s._v("抓取eth0网卡上的包，使用:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" tcpdump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" eth0\n")])])]),a("p",[s._v("截获主机hostname发送的所有数据")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" eth0 src "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n")])])]),a("p",[s._v("监视所有送到主机hostname的数据包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" eth0 dst "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n")])])]),a("p",[a("strong",[s._v("监视指定主机和端口的数据包")])]),s._v(" "),a("p",[s._v("如果想要获取主机210.27.48.1接收或发出的telnet包，使用如下命令")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump tcp port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.27")]),s._v(".48.1\n")])])]),a("p",[s._v("对本机的udp 123 端口进行监视 123 为ntp的服务端口")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump udp port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n")])])]),a("p",[a("strong",[s._v("监视指定网络的数据包")])]),s._v(" "),a("p",[s._v("打印本地主机与Berkeley网络上的主机之间的所有通信数据包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump net ucb-ether\n")])])]),a("p",[s._v("ucb-ether此处可理解为“Berkeley网络”的网络地址，此表达式最原始的含义可表达为：打印网络地址为ucb-ether的所有数据包")]),s._v(" "),a("p",[s._v("打印所有通过网关snup的ftp数据包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gateway snup and (port ftp or ftp-data)'")]),s._v("\n")])])]),a("p",[s._v("注意：表达式被单引号括起来了，这可以防止shell对其中的括号进行错误解析")]),s._v(" "),a("p",[s._v("打印所有源地址或目标地址是本地主机的IP数据包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tcpdump "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" and not net localnet\n")])])]),a("p",[s._v("如果本地网络通过网关连到了另一网络，则另一网络并不能算作本地网络。")]),s._v(" "),a("p",[s._v("抓取80端口的HTTP报文，以文本形式展示：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" tcpdump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" any port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);