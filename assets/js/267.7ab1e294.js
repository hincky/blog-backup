(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{580:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"grub2-set-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grub2-set-default"}},[t._v("#")]),t._v(" grub2-set-default")]),t._v(" "),s("p",[t._v("设置系统默认的启动内核")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("Usage: grub2-set-default "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" MENU_ENTRY\nSet the default boot menu entry "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" GRUB.\nThis requires setting "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GRUB_DEFAULT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("saved "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /etc/default/grub.\n\n  -h, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("              print this message and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  -v, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("           print the version information and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  --boot-directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DIR    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),t._v(" GRUB images under the directory DIR/grub2\n                          instead of the /boot/grub2 directory\n\nMENU_ENTRY is a number, a menu item title or a menu item identifier.\n\nReport bugs to "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("bug-grub@gnu.org"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\n\n")])])]),s("h2",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("p",[t._v("查看可选的系统内核：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# awk -F\\' '$1==\"menuentry \" {print $2}' /etc/grub2.cfg")]),t._v("\nCentOS Linux "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.4")]),t._v(".219-1.el7.elrepo.x86_64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCentOS Linux "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.10")]),t._v(".0-1160.76.1.el7.x86_64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCentOS Linux "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.10")]),t._v(".0-862.el7.x86_64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCentOS Linux "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("-rescue-3221d376917c458992a952d6327f2d6a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("grub2-set-default后面的序号从0开始。所以，如果想设置第一个选项为默认启动内核，则可以使用下面的命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# grub2-set-default 0")]),t._v("\n")])])]),s("p",[t._v("如果想使用CentOS Linux (3.10.0-862.el7.x86_64) 7 (Core)内核版本,则可以将0改为2")]),t._v(" "),s("p",[t._v("重启系统")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# init 6")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);