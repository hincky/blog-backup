(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{855:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"split"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split"}},[t._v("#")]),t._v(" split")]),t._v(" "),s("p",[t._v("分割任意大小的文件")]),t._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),s("p",[s("strong",[t._v("split命令")]),t._v(" 可以将一个大文件分割成很多个小文件，有时需要将文件分割成更小的片段，比如为提高可读性，生成日志等。")]),t._v(" "),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("-b：值为每一输出档案的大小，单位为 byte。\n-C：每一输出档中，单行的最大 byte 数。\n-d：使用数字作为后缀。\n-l：值为每一输出档的行数大小。\n-a：指定后缀长度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认为2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。\n")])])]),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("p",[t._v("生成一个大小为100KB的测试文件：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dd if=/dev/zero bs=100k count=1 of=date.file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("+0 records "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("+0 records out\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("102400")]),t._v(" bytes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),t._v(" kB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" copied, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00043")]),t._v(" seconds, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("238")]),t._v(" MB/s\n")])])]),s("p",[t._v("使用split命令将上面创建的date.file文件分割成大小为10KB的小文件：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# split -b 10k date.file ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\ndate.file  xaa  xab  xac  xad  xae  xaf  xag  xah  xai  xaj\n")])])]),s("p",[t._v("文件被分割成多个带有字母的后缀文件，如果想用数字后缀可使用-d参数，同时可以使用-a length来指定后缀的长度：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# split -b 10k date.file -d -a 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\ndate.file  x000  x001  x002  x003  x004  x005  x006  x007  x008  x009\n")])])]),s("p",[t._v("为分割后的文件指定文件名的前缀：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# split -b 10k date.file -d -a 3 split_file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\ndate.file  split_file000  split_file001  split_file002  split_file003  split_file004  split_file005  split_file006  split_file007  split_file008  split_file009\n")])])]),s("p",[t._v("使用-l选项根据文件的行数来分割文件，例如把文件分割成每个包含10行的小文件：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" date.file\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);