(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{610:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"insmod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insmod"}},[s._v("#")]),s._v(" insmod")]),s._v(" "),t("p",[s._v("将给定的模块加载到内核中")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("insmod命令")]),s._v(" 用于将给定的模块加载到内核中。Linux有许多功能是通过模块的方式，在需要时才载入kernel。如此可使kernel较为精简，进而提高效率，以及保有较大的弹性。这类可载入的模块，通常是设备驱动程序。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("insmod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-f：不检查目前kernel版本与模块编译时的kernel版本是否一致，强制将模块载入；\n-k：将模块设置为自动卸除；\n-m：输出模块的载入信息；\n-o"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("模块名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定模块的名称，可使用模块文件的文件名；\n-p：测试模块是否能正确地载入kernel；\n-s：将所有信息记录在系统记录文件中；\n-v：执行时显示详细的信息；\n-x：不要汇出模块的外部符号；\n-X：汇出模块所有的外部符号，此为预设置。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("内核模块：指定要加载的内核模块文件。")]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("p",[s._v("加载RAID1阵列级别模块，如下所示：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost boot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# insmod /lib/modules/2.6.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("-8.el5/kernel/drivers/md/raid1.ko  \n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost boot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsmod | grep raid1")]),s._v("\nraid1                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25153")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[s._v("从以上显示结果可知，RAID1模块已加载成功。只是在使用insmod命令加载模块时，需要使用绝对路径方能加载，且加载时无法自动解决依赖关系。")])])}),[],!1,null,null,null);t.default=e.exports}}]);