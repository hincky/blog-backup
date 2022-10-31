(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{460:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"cksum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cksum"}},[s._v("#")]),s._v(" cksum")]),s._v(" "),a("p",[s._v("检查文件的CRC是否正确")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("cksum命令")]),s._v(" 是检查文件的CRC是否正确，确保文件从一个系统传输到另一个系统的过程中不被损坏。这种方法要求校验和在源系统中被计算出来，在目的系统中又被计算一次，两个数字进行比较，如果校验和相等，则该文件被认为是正确传输了。")]),s._v(" "),a("p",[s._v("注意：CRC是指一种排错检查方法，即循环冗余校验法。")]),s._v(" "),a("p",[s._v('指定文件交由cksum命令进行校验后，会返回校验结果供用户核对文件是否正确无误。若不指定任何文件名称或是所给予的文件名为"-"，则cksum命令会从标准输入设备中读取数据。')]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("cksum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("--help：在线帮助；\n--version：显示版本信息。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("文件：指定要计算校验的版本信息。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v('使用cksum命令计算文件"testfile1"的完整性，输入如下命令：')]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cksum")]),s._v(" testfile1            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对指定文件进行CRC校验")]),s._v("\n")])])]),a("p",[s._v("以上命令执行后，将输出校验码等相关的信息，具体输出信息如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1263453430")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v(" testfile1     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出信息")]),s._v("\n")])])]),a("p",[s._v('上面的输出信息中，"1263453430"表示校验码，"78"表示字节数。')]),s._v(" "),a("p",[s._v("注意：如果文件中有任何字符被修改，都将改变计算后CRC校验码的值。")])])}),[],!1,null,null,null);a.default=r.exports}}]);