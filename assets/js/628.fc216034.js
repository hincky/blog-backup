(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{942:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vgreduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vgreduce"}},[s._v("#")]),s._v(" vgreduce")]),s._v(" "),a("p",[s._v("从卷组中删除物理卷")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("vgreduce命令")]),s._v(" 通过删除LVM卷组中的物理卷来减少卷组容量。不能删除LVM卷组中剩余的最后一个物理卷。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vgreduce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-a：如果命令行中没有指定要删除的物理卷，则删除所有的空物理卷；\n--removemissing：删除卷组中丢失的物理卷，使卷组恢复正常状态。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("ul",[a("li",[s._v("卷组：指定要操作的卷组名称；")]),s._v(" "),a("li",[s._v("物理卷列表：指定要删除的物理卷列表。")])]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v('使用vgreduce命令从卷组"vg2000"中移除物理卷'),a("code",[s._v("/dev/sdb2")]),s._v("。在命令行中输入下面的命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# vgreduce vg2000 /dev/sdb2    #将物理卷"/dev/sdb2"从卷组"vg2000"中删除')]),s._v("\n")])])]),a("p",[s._v("输出信息如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Removed "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/sdb2"')]),s._v(" from volume group "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vg2000"')]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);