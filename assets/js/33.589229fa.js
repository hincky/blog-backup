(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{339:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"select查询语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select查询语法"}},[t._v("#")]),t._v(" select查询语法")]),t._v(" "),a("h2",{attrs:{id:"语句顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语句顺序"}},[t._v("#")]),t._v(" 语句顺序")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("order by 放在最后，且"),a("strong",[t._v("多利用索引进行排序")])]),t._v(" "),a("p",[t._v("limit 确定查询行数可以提高查询效率")]),t._v(" "),a("h2",{attrs:{id:"执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[t._v("#")]),t._v(" 执行顺序")]),t._v(" "),a("blockquote",[a("p",[t._v("注意是执行，执行顺序！！！不是sql的语句编写顺序")])]),t._v(" "),a("p",[t._v("sql语句实际执行顺序")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("的字段 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v("\n")])])]),a("h2",{attrs:{id:"like用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#like用法"}},[t._v("#")]),t._v(" like用法")]),t._v(" "),a("p",[a("strong",[t._v("不能以%开头，否则索引失效，导致全表扫描")])]),t._v(" "),a("p",[t._v("如果使用like '东%'，同时对字段进行索引，才不会进行全表扫描")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("通配符")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("例句")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("_")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配一个字符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配多个字符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配括号内任意一个字符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("[陈杨]")]),t._v(" 含有陈杨姓氏")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不匹配括号内字符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("^[陈杨]")]),t._v(" 不含有陈杨姓氏")])])])]),t._v(" "),a("h2",{attrs:{id:"最值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最值"}},[t._v("#")]),t._v(" 最值")]),t._v(" "),a("p",[t._v("max()\nmin()")]),t._v(" "),a("h2",{attrs:{id:"特殊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊"}},[t._v("#")]),t._v(" 特殊")]),t._v(" "),a("p",[a("strong",[t._v("聚合函数作为筛选条件")]),t._v(" 不能用where，用having")]),t._v(" "),a("h2",{attrs:{id:"关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[t._v("#")]),t._v(" 关键字")]),t._v(" "),a("blockquote",[a("p",[t._v("如何通过问题的关键字去确定sql语句")])]),t._v(" "),a("p",[t._v("count() 有多少/xx数（用户数）\navg() 平均\nround(表达式,1) 保留一位小数\ngroup by 每个/各个/不同xx（不同大学）\nasc/desc升序/降序\n"),a("strong",[t._v("关联子查询：")]),t._v(" 每个/各个/不同xxx中大于/小于xxx的平均yyy（查询每个球队大于球队平均身高/ 每个商品种类中高于商品种类平均价格的）")]),t._v(" "),a("h2",{attrs:{id:"子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子查询"}},[t._v("#")]),t._v(" 子查询")]),t._v(" "),a("ul",[a("li",[t._v("关联子查询")]),t._v(" "),a("li",[t._v("非关联子查询")])])])}),[],!1,null,null,null);a.default=r.exports}}]);