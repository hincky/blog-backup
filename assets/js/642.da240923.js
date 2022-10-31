(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{953:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"whereis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#whereis"}},[s._v("#")]),s._v(" whereis")]),s._v(" "),t("p",[s._v("查找二进制程序、代码等相关文件路径")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("whereis命令")]),s._v(" 用来定位指令的二进制程序、源代码文件和man手册页等相关文件的路径。")]),s._v(" "),t("p",[s._v("whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。")]),s._v(" "),t("p",[s._v("和find相比，whereis查找的速度非常快，这是因为linux系统会将 系统内的所有文件都记录在一个数据库文件中，当使用whereis和下面即将介绍的locate时，会从数据库中查找数据，而不是像find命令那样，通 过遍历硬盘来查找，效率自然会很高。 但是该数据库文件并不是实时更新，默认情况下时一星期更新一次，因此，我们在用whereis和locate 查找文件时，有时会找到已经被删除的数据，或者刚刚建立文件，却无法查找到，原因就是因为数据库文件没有被更新。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("whereis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-b：只查找二进制文件；\n-B"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：只在设置的目录下查找二进制文件；\n-f：不显示文件名前的路径名称；\n-m：只查找说明文件；\n-M"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：只在设置的目录下查找说明文件；\n-s：只查找原始代码文件；\n-S"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("只在设置的目录下查找原始代码文件；\n-u：查找不包含指定类型的文件。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("指令名：要查找的二进制程序、源文件和man手册页的指令名。")]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("p",[s._v("将相关的文件都查找出来")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis tomcat")]),s._v("\ntomcat:\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis svn")]),s._v("\nsvn: /usr/bin/svn /usr/local/svn /usr/share/man/man1/svn.1.gz\n")])])]),t("p",[s._v("说明：tomcat没安装，找不出来，svn安装找出了很多相关文件")]),s._v(" "),t("p",[s._v("只将二进制文件查找出来")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis -b svn")]),s._v("\nsvn: /usr/bin/svn /usr/local/svn\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis -m svn")]),s._v("\nsvn: /usr/share/man/man1/svn.1.gz\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis -s svn")]),s._v("\nsvn:\n")])])]),t("p",[s._v("说明："),t("code",[s._v("whereis -m svn")]),s._v("查出说明文档路径，"),t("code",[s._v("whereis -s svn")]),s._v("找source源文件。")])])}),[],!1,null,null,null);t.default=e.exports}}]);