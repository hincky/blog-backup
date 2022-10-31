(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{505:function(a,e,s){"use strict";s.r(e);var t=s(14),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"dpkg-divert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dpkg-divert"}},[a._v("#")]),a._v(" dpkg-divert")]),a._v(" "),e("p",[a._v("Debian Linux中创建并管理一个转向列表")]),a._v(" "),e("h2",{attrs:{id:"补充说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),e("p",[e("strong",[a._v("dpkg-divert命令")]),a._v(" 是Debian Linux中创建并管理一个转向（diversion）列表，其使得安装文件的默认位置失效的工具。")]),a._v(" "),e("h3",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("dpkg-divert"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("h3",{attrs:{id:"选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("--add：添加一个转移文件；\n--remove：删除一个转移文件；\n--list：列出匹配的转移；\n--truename：对应转移文件真实文件名；\n--quidet：安静模式。\n")])])]),e("h3",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),e("p",[a._v("文件：指定转移文件名。")]),a._v(" "),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),e("p",[a._v("指定软件包wibble安装时，写入"),e("code",[a._v("/usr/bin/example.foo")]),a._v("，而不是"),e("code",[a._v("/usr/bin/example")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("dpkg-divert "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--package")]),a._v(" wibble "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--divert")]),a._v(" /usr/bin/example.foo "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rename")]),a._v(" /usr/bin/example\n")])])]),e("p",[a._v("指定软件包wibble安装时，删除对"),e("code",[a._v("/usr/bin/example")]),a._v("的转移修改：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("dpkg-divert "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--package")]),a._v(" wibble "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rename")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--remove")]),a._v(" /usr/bin/example\n")])])]),e("p",[a._v("删除对"),e("code",[a._v("/usr/bin/example")]),a._v("的转移修改：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("dpkg-divert "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rename")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--remove")]),a._v(" /usr/bin/example\n")])])]),e("p",[a._v("添加一个软件包安装时，写入"),e("code",[a._v("/usr/bin/example.foo")]),a._v("，而不是"),e("code",[a._v("/usr/bin/example")]),a._v("的修改：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("dpkg-divert "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--divert")]),a._v(" /usr/bin/example.foo "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rename")]),a._v(" /usr/bin/example\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);