(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{890:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"telnet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#telnet"}},[t._v("#")]),t._v(" telnet")]),t._v(" "),s("p",[t._v("登录远程主机和管理(测试ip端口是否连通)")]),t._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),s("p",[s("strong",[t._v("telnet命令")]),t._v(" 用于登录远程主机，对远程主机进行管理。telnet因为采用明文传送报文，安全性不好，很多Linux服务器都不开放telnet服务，而改用更安全的ssh方式了。但仍然有很多别的系统可能采用了telnet方式来提供远程登录，因此弄清楚telnet客户端的使用方式仍是很有必要的。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("telnet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("-8：允许使用8位字符资料，包括输入与输出；\n-a：尝试自动登入远端系统；\n-b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("主机别名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：使用别名指定远端主机名称；\n-c：不读取用户专属目录里的.telnetrc文件；\n-d：启动排错模式；\n-e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("脱离字符"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：设置脱离字符；\n-E：滤除脱离字符；\n-f：此参数的效果和指定"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-F"')]),t._v("参数相同；\n-F：使用Kerberos V5认证时，加上此参数可把本地主机的认证数据上传到远端主机；\n-k"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("域名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：使用Kerberos认证时，加上此参数让远端主机采用指定的领域名，而非该主机的域名；\n-K：不自动登入远端主机；\n-l"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("用户名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：指定要登入远端主机的用户名称；\n-L：允许输出8位字符资料；\n-n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("记录文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：指定文件记录相关信息；\n-r：使用类似rlogin指令的用户界面；\n-S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("服务类型"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：设置telnet连线所需的ip TOS信息；\n-x：假设主机有支持数据加密的功能，就使用它；\n-X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("认证形态"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：关闭指定的认证形态。\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[t._v("远程主机：指定要登录进行管理的远程主机；")]),t._v(" "),s("li",[t._v("端口：指定TELNET协议使用的端口号。")])]),t._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ telnet "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".2.10\nTrying "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".2.10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nConnected to "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".2.10 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".2.10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\nEscape character is "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^]'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n    localhost "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Linux release "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.6")]),t._v(".18-274.18.1.el5 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1 SMP Thu Feb 9 12:45:44 EST 2012) (1)")]),t._v("\n\nlogin: root\nPassword:\nLogin incorrect\n")])])]),s("p",[t._v("一般情况下不允许root从远程登录，可以先用普通账号登录，然后再用su -切到root用户。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ telnet "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".188.132\nTrying "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".188.132"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\ntelnet: connect to address "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".188.132: Connection refused\ntelnet: Unable to connect to remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("\n")])])]),s("p",[t._v("处理这种情况方法：")]),t._v(" "),s("ol",[s("li",[t._v("确认ip地址是否正确？")]),t._v(" "),s("li",[t._v("确认ip地址对应的主机是否已经开机？")]),t._v(" "),s("li",[t._v("如果主机已经启动，确认路由设置是否设置正确？（使用route命令查看）")]),t._v(" "),s("li",[t._v("如果主机已经启动，确认主机上是否开启了telnet服务？（使用netstat命令查看，TCP的23端口是否有LISTEN状态的行）")]),t._v(" "),s("li",[t._v("如果主机已经启动telnet服务，确认防火墙是否放开了23端口的访问？（使用iptables-save查看）")])]),t._v(" "),s("p",[s("strong",[t._v("启动telnet服务")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" xinetd restart\n")])])]),s("p",[t._v("配置参数，通常的配置如下：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" telnet\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    disable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" no "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启用")]),t._v("\n    flags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" REUSE "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#socket可重用")]),t._v("\n    socket_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stream "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#连接方式为TCP")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" no "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为每个请求启动一个进程")]),t._v("\n    user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动服务的用户为root")]),t._v("\n    server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /usr/sbin/in.telnetd "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#要激活的进程")]),t._v("\n    log_on_failure "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" USERID "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#登录失败时记录登录用户名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果要配置允许登录的客户端列表，加入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("only_from = 192.168.0.2 #只允许192.168.0.2登录\n")])])]),s("p",[t._v("如果要配置禁止登录的客户端列表，加入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("no_access = 192.168.0.{2,3,4} #禁止192.168.0.2、192.168.0.3、192.168.0.4登录\n")])])]),s("p",[t._v("如果要设置开放时段，加入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("access_times = 9:00-12:00 13:00-17:00 # 每天只有这两个时段开放服务（我们的上班时间：P）\n")])])]),s("p",[t._v("如果你有两个IP地址，一个是私网的IP地址如192.168.0.2，一个是公网的IP地址如218.75.74.83，如果你希望用户只能从私网来登录telnet服务，那么加入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("bind = 192.168.0.2\n")])])]),s("p",[t._v("各配置项具体的含义和语法可参考xined配置文件属性说明（man xinetd.conf）")]),t._v(" "),s("p",[t._v("配置端口，修改services文件：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vi /etc/services")]),t._v("\n")])])]),s("p",[t._v("找到以下两句")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("telnet "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("/tcp\ntelnet "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("/udp\n")])])]),s("p",[t._v("如果前面有#字符，就去掉它。telnet的默认端口是23，这个端口也是黑客端口扫描的主要对象，因此最好将这个端口修改掉，修改的方法很简单，就是将23这个数字修改掉，改成大一点的数字，比如61123。注意，1024以下的端口号是internet保留的端口号，因此最好不要用，还应该注意不要与其它服务的端口冲突。")]),t._v(" "),s("p",[t._v("启动服务：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("service xinetd restart\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);