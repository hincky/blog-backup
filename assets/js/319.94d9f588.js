(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{634:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[a._v("#")]),a._v(" join")]),a._v(" "),t("p",[a._v("两个文件中指定栏位内容相同的行连接起来")]),a._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),t("p",[t("strong",[a._v("join命令")]),a._v(" 用来将两个文件中，制定栏位内容相同的行连接起来。找出两个文件中，指定栏位内容相同的行，并加以合并，再输出到标准输出设备。")]),a._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("或"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("：除了显示原来的输出内容之外，还显示指令文件中没有相同栏位的行；\n-e"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("字符串"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：若"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("与"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("中找不到指定的栏位，则在输出中填入选项中的字符串；\n-i或--ignore-case：比较栏位内容时，忽略大小写的差异；\n-o"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("格式"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：按照指定的格式来显示结果；\n-t"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("字符"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：使用栏位的分割字符；\n-v"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("或"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("：更-a相同，但是只显示文件中没有相同栏位的行；\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v("<")]),a._v("栏位"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：连接"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("指定的栏位；\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v("<")]),a._v("栏位"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：连接"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("指定的栏位。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),t("ul",[t("li",[a._v("文件1：要进行合并操作的第1个文件参数；")]),a._v(" "),t("li",[a._v("文件2：要进行合并操作的第2个文件参数。")])]),a._v(" "),t("h3",{attrs:{id:"常见用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见用法"}},[a._v("#")]),a._v(" 常见用法")]),a._v(" "),t("p",[a._v("把两个文件制定栏位内容相同的行连接起来：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat name ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" xiaoming\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" xiaowang\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" xiaoliu\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat city ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" beijing  beijing\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" hubei   wuhan \n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" hunan   changsha\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# city文件在后，则拼接在后，如果city文件在前，则name文件拼接在后。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# join  name  city ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" xiaoming beijing beijing\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" xiaowang hubei wuhan \n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" xiaoliu hunan changsha\n")])])]),t("p",[a._v("把两个文件指定列拼接起来：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 把name文件的第2列和city文件的第3列拼接起来")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# join -o 1.2 2.3 name  city ")]),a._v("\nxiaoming beijing\nxiaowang wuhan\nxiaoliu changsha\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);