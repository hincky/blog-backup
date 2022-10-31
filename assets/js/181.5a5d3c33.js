(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{494:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dig"}},[t._v("#")]),t._v(" dig")]),t._v(" "),s("p",[t._v("域名查询工具")]),t._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),s("p",[s("strong",[t._v("dig命令")]),t._v(" 是常用的域名查询工具，可以用来测试域名系统工作是否正常。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("dig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("@"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("服务器地址"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：指定进行域名解析的域名服务器；\n-b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ip地址"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：当主机具有多个IP地址，指定使用本机的哪个IP地址向域名服务器发送域名查询请求；\n-f"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：指定dig以批处理的方式运行，指定的文件中保存着需要批处理查询的DNS任务信息；\n-P：指定域名服务器所使用端口号；\n-t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("类型"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：指定要查询的DNS数据类型；\n-x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP地址"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：执行逆向域名查询；\n-4：使用IPv4；\n-6：使用IPv6；\n-h：显示指令帮助信息。\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[t._v("主机：指定要查询域名主机；")]),t._v(" "),s("li",[t._v("查询类型：指定DNS查询的类型；")]),t._v(" "),s("li",[t._v("查询类：指定查询DNS的class；")]),t._v(" "),s("li",[t._v("查询选项：指定查询选项。")])]),t._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dig www.jsdig.com")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" DiG "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.3")]),t._v(".6-P1-RedHat-9.3.6-20.P1.el5_8.1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" www.jsdig.com\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" global options:  printcmd\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Got answer:\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("HEADER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),t._v(" opcode: QUERY, status: NOERROR, id: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2115")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" flags: qr rd ra"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" QUERY: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", ANSWER: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", AUTHORITY: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", ADDITIONAL: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" QUESTION SECTION:\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("www.jsdig.com.               IN      A\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ANSWER SECTION:\nwww.jsdig.com.        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("       IN      CNAME   host.1.jsdig.com.\nhost.1.jsdig.com.     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("       IN      A       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.42")]),t._v(".212.8\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" AUTHORITY SECTION:\njsdig.com.            "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("       IN      NS      f1g1ns2.dnspod.net.\njsdig.com.            "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("       IN      NS      f1g1ns1.dnspod.net.\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Query time: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" msec\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" SERVER: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("202.96")]),t._v(".104.15"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#53(202.96.104.15)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" WHEN: Thu Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":14:37 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2013")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" MSG SIZE  rcvd: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("121")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);