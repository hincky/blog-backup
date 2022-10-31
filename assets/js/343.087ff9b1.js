(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{656:function(a,s,t){"use strict";t.r(s);var r=t(14),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"logger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[a._v("#")]),a._v(" logger")]),a._v(" "),s("p",[a._v("在系统日志中记录相应条目")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("logger命令")]),a._v(" 是用于往系统中写入日志，他提供一个shell命令接口到syslog系统模块")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("logger "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v(" -T, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tcp")]),a._v("             使用流连接"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TCP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n -d, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--udp")]),a._v("             使用数据报"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("UDP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n -i, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--id")]),a._v("              逐行记录每一次logger的进程ID\n -f, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     记录特定的文件\n -h, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("            显示帮助文本并退出\n -n, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   写入指定的远程syslog服务器，使用UDP代替内装式syslog的例程\n -P, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     使用指定的UDP端口。默认的端口号是514\n -p, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--priority")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("prio"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 指定输入消息的优先级，优先级可以是数字或者指定为 "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" facility.level"')]),a._v(" 的格式。\n                       比如："),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" -p local3.info "')]),a._v(" local3 这个设备的消息级别为 info。\n                       默认级别是 "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user.notice"')]),a._v("\n -s, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--stderr")]),a._v("          输出标准错误到系统日志。\n -t, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tag")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("       指定标记记录\n -u, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--socket")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("socket"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 写入指定的socket，而不是到内置系统日志例程。\n -V, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("         输出版本信息并退出\n")])])]),s("h3",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("logger "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" syslog.info "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"backup.sh is starting"')]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);