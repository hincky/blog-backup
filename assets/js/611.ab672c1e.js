(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{925:function(a,s,t){"use strict";t.r(s);var e=t(14),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"unzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unzip"}},[a._v("#")]),a._v(" unzip")]),a._v(" "),s("p",[a._v("用于解压缩由zip命令压缩的压缩包")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("unzip命令")]),a._v(" 用于解压缩由zip命令压缩的“.zip”压缩包。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("unzip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-c：将解压缩的结果显示到屏幕上，并对字符做适当的转换；\n-f：更新现有的文件；\n-l：显示压缩文件内所包含的文件；\n-p：与-c参数类似，会将解压缩的结果显示到屏幕上，但不会执行任何的转换；\n-t：检查压缩文件是否正确；\n-u：与-f参数类似，但是除了更新现有的文件外，也会将压缩文件中的其他文件解压缩到目录中；\n-v：执行时显示详细的信息；\n-z：仅显示压缩文件的备注文字；\n-a：对文本文件进行必要的字符转换；\n-b：不要对文本文件进行字符转换；\n-C：压缩文件中的文件名称区分大小写；\n-j：不处理压缩文件中原有的目录路径；\n-L：将压缩文件中的全部文件名改为小写；\n-M：将输出结果送到more程序处理；\n-n：解压缩时不要覆盖原有的文件；\n-o：不必先询问用户，unzip执行后覆盖原有的文件；\n-P"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("密码"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：使用zip的密码选项；\n-q：执行时不显示任何信息；\n-s：将文件名中的空白字符转换为底线字符；\n-V：保留VMS的文件版本信息；\n-X：解压缩时同时回存文件原来的"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("UID")]),a._v("/GID；\n-d"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("目录"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定文件解压缩后所要存储的目录；\n-x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定不要处理.zip压缩文件中的哪些文件；\n-Z：unzip-Z等于执行zipinfo指令。\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("压缩包：指定要解压的“.zip”压缩包。")]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("将压缩文件text.zip在当前目录下解压缩。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" test.zip\n")])])]),s("p",[a._v("将压缩文件text.zip在指定目录"),s("code",[a._v("/tmp")]),a._v("下解压缩，如果已有相同的文件存在，要求unzip命令不覆盖原先的文件。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" test.zip "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /tmp\n")])])]),s("p",[a._v("查看压缩文件目录，但不解压。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" test.zip\n")])])]),s("p",[a._v("将压缩文件test.zip在指定目录"),s("code",[a._v("/tmp")]),a._v("下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" test.zip "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" tmp/\n")])])]),s("p",[a._v("解压指定文件，* 用作通配符。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" test.zip "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*.jpg"')]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);