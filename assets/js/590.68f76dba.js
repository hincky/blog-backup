(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{900:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"tr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tr"}},[s._v("#")]),s._v(" tr")]),s._v(" "),t("p",[s._v("将字符进行替换压缩和删除")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("tr命令")]),s._v(" 可以对来自标准输入的字符进行替换、压缩和删除。它可以将一组字符变成另一组字符，经常用来编写优美的单行命令，作用很强大。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("tr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-c或——complerment：取代所有不属于第一字符集的字符；\n-d或——delete：删除所有属于第一字符集的字符；\n-s或--squeeze-repeats：把连续重复的字符以单独一个字符表示；\n-t或--truncate-set1：先删除第一字符集较第二字符集多出的字符。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("ul",[t("li",[s._v("字符集1：指定要转换或删除的原字符集。当执行转换操作时，必须使用参数“字符集2”指定转换的目标字符集。但执行删除操作时，不需要参数“字符集2”；")]),s._v(" "),t("li",[s._v("字符集2：指定要转换成的目标字符集。")])]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("p",[s._v("将输入字符由大写转换为小写：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HELLO WORLD"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A-Z'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a-z'")]),s._v("\nhello world\n")])])]),t("p",[s._v("'A-Z' 和 'a-z'都是集合，集合是可以自己制定的，例如：'ABD-}'、'bB.,'、'a-de-h'、'a-c0-9'都属于集合，集合里可以使用'\\n'、'\\t'，可以可以使用其他ASCII字符。")]),s._v(" "),t("p",[s._v("使用tr删除字符：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello 123 world 456"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0-9'")]),s._v("\nhello  world \n")])])]),t("p",[s._v("将制表符转换为空格：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v("\n")])])]),t("p",[s._v("字符集补集，从输入文本中将不在补集中的所有字符删除：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" aa.,a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$bb 2 c*/cc 3 ddd 4 | tr -d -c '0-9 \\n'")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])])]),t("p",[s._v("此例中，补集中包含了数字0~9、空格和换行符\\n，所以没有被删除，其他字符全部被删除了。")]),s._v(" "),t("p",[s._v("用tr压缩字符，可以压缩输入中重复的字符：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"thissss is      a text linnnnnnne."')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' sn'")]),s._v("\nthis is a text line.\n")])])]),t("p",[s._v("巧妙使用tr做数字相加操作：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("删除Windows文件“造成”的'^M'字符：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" new_file\n或\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" new_file\n")])])]),t("p",[t("strong",[s._v("tr可以使用的字符类：")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":alnum:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：字母和数字\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":alpha:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：字母\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":cntrl:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：控制（非打印）字符\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":digit:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：数字\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":graph:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：图形字符\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":lower:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：小写字母\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":print:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：可打印字符\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":punct:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：标点符号\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":space:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：空白字符\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":upper:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：大写字母\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":xdigit:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：十六进制字符  \n")])])]),t("p",[s._v("使用方式：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[:lower:]'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[:upper:]'")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);