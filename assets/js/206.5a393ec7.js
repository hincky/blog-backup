(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{518:function(a,s,e){"use strict";e.r(s);var t=e(14),l=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"e2label"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#e2label"}},[a._v("#")]),a._v(" e2label")]),a._v(" "),s("p",[a._v("设置第二扩展文件系统的卷标")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("e2label命令")]),a._v(" 用来设置第二扩展文件系统的卷标。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("e2label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("ul",[s("li",[a._v("文件系统：指定文件系统所对应的设备文件名；")]),a._v(" "),s("li",[a._v("新卷标：为文件系统指定新卷标。")])]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("许多用了多年Linux的人可能也没有用过e2label命令。但是这个命令相当有效。在介绍它之前,我们先看看"),s("code",[a._v("/etc/fstab文")]),a._v("件：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("//ext3 defaults "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n/dev/hda7 /usr ext3 defaults "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("p",[a._v("第二行的意思很容易懂，就是把"),s("code",[a._v("/dev/hda7")]),a._v(" mount到"),s("code",[a._v("/usr")]),a._v("上。第一行没有指明分区，意思是把label(卷标)为/ 的分区mount到/上。这样写的好处在于即使如果把硬盘从主板上的ide0(hda) 换到ide2(hdc)上，系统仍然可以自动挂载正确的分区。通常Linux安装的时候已经自动指定了卷标。如果是手动增加的新分区，可以用下边的命令为 其指定卷标：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("e2label /dev/hdax /new\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /new\n")])])]),s("p",[a._v("然后在"),s("code",[a._v("/etc/fstab")]),a._v("里加入：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/new  /new  ext3  defaults  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("p",[a._v("下次重新起动机器的时候，就会把卷标为"),s("code",[a._v("/new")]),a._v("的分区挂接到"),s("code",[a._v("/new")]),a._v("上。")])])}),[],!1,null,null,null);s.default=l.exports}}]);