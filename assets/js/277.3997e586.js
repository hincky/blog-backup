(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{589:function(s,t,a){"use strict";a.r(t);var n=a(14),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[s._v("#")]),s._v(" host")]),s._v(" "),t("p",[s._v("常用的分析域名查询工具")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("host命令")]),s._v(" 是常用的分析域名查询工具，可以用来测试域名系统工作是否正常。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-a：显示详细的DNS信息；\n-c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("类型"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定查询类型，默认值为“IN“；\n-C：查询指定主机的完整的SOA记录；\n-r：在查询域名时，不使用递归的查询方式；\n-t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("类型"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定查询的域名信息类型；\n-v：显示指令执行的详细信息；\n-w：如果域名服务器没有给出应答信息，则总是等待，直到域名服务器给出应答；\n-W"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("时间"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定域名查询的最长时间，如果在指定时间内域名服务器没有给出应答信息，则退出指令；\n-4：使用IPv4；\n-6：使用IPv6.\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("主机：指定要查询信息的主机信息。")]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# host www.jsdig.com ")]),s._v("\nwww.jsdig.com is an "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" host.1.jsdig.com.\nhost.1.jsdig.com has address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.42")]),s._v(".212.8\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# host -a www.jsdig.com")]),s._v("\nTrying "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www.jsdig.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("HEADER"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),s._v(" opcode: QUERY, status: NOERROR, id: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34671")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" flags: qr rd ra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" QUERY: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", ANSWER: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", AUTHORITY: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", ADDITIONAL: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" QUESTION SECTION:\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("www.jsdig.com.               IN      ANY\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ANSWER SECTION:\nwww.jsdig.com.        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("463")]),s._v("     IN      CNAME   host.1.jsdig.com.\n\nReceived "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v(" bytes from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.96")]),s._v(".104.15"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#53 in 0 ms")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);