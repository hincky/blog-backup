(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{804:function(a,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"rev"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rev"}},[a._v("#")]),a._v(" rev")]),a._v(" "),t("p",[a._v("将文件内容以字符为单位反序输出")]),a._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),t("p",[t("strong",[a._v("rev命令")]),a._v(" 将文件中的每行内容以字符为单位反序输出，即第一个字符最后输出，最后一个字符最先输出，依次类推。")]),a._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("rev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),t("p",[a._v("文件：指定要反序显示内容的文件。")]),a._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat iptables.bak")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Generated by iptables-save v1.3.5 on Thu Dec 26 21:25:15 2013")]),a._v("\n*filter\n:INPUT DROP "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("48113")]),a._v(":2690676"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:FORWARD accept "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:OUTPUT ACCEPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3381959")]),a._v(":1818595115"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" lo "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" RELATED,ESTABLISHED "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" icmp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" OUTPUT "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" lo "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\nCOMMIT\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Completed on Thu Dec 26 21:25:15 2013")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rev iptables.bak ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3102")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("51")]),a._v(":52:12 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("62")]),a._v(" ceD uhT no "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.3")]),a._v(".1v evas-selbatpi yb detareneG "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\nretlif*\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6760962")]),a._v(":31184"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" PORD TUPNI:\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" TPECCA DRAWROF:\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5115958181")]),a._v(":9591833"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" TPECCA TUPTUO:\n TPECCA j- ol i- TUPNI A-\n TPECCA j- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" tropd-- pct m- pct p- TUPNI A-\n TPECCA j- 08 tropd-- pct m- pct p- TUPNI A-\n TPECCA j- DEHSILBATSE,DETALER etats-- etats m- TUPNI A-\n TPECCA j- pmci p- TUPNI A-\n TPECCA j- ol o- TUPTUO A-\nTIMMOC\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3102")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("51")]),a._v(":52:12 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("62")]),a._v(" ceD uhT no detelpmoC "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);