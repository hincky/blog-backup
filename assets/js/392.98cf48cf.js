(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{705:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mknod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mknod"}},[t._v("#")]),t._v(" mknod")]),t._v(" "),a("p",[t._v("创建字符设备文件和块设备文件")]),t._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),a("p",[a("strong",[t._v("mknod命令")]),t._v(" 用于创建Linux中的字符设备文件和块设备文件。")]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mknod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("-Z：设置安全的上下文；\n-m：设置权限模式；\n-help：显示帮助信息；\n--version：显示版本信息。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[t._v("文件名：要创建的设备文件名；")]),t._v(" "),a("li",[t._v("类型：指定要创建的设备文件的类型；")]),t._v(" "),a("li",[t._v("主设备号：指定设备文件的主设备号；")]),t._v(" "),a("li",[t._v("次设备号：指定设备文件的次设备号。")])]),t._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-la")]),t._v(" /dev/ttyUSB*\ncrw-rw—- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root dialout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("188")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v("-02-13 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":32 /dev/ttyUSB0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mknod")]),t._v(" /dev/ttyUSB32 c "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("188")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\n")])])]),a("h3",{attrs:{id:"扩展知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展知识"}},[t._v("#")]),t._v(" 扩展知识")]),t._v(" "),a("p",[t._v("Linux的设备管理是和文件系统紧密结合的，各种设备都以文件的形式存放在/dev目录 下，称为设备文件。应用程序可以打开、关闭和读写这些设备文件，完成对设备的操作，就像操作普通的数据文件一样。")]),t._v(" "),a("p",[t._v("为了管理这些设备，系统为设备编了号，每 个设备号又分为主设备号和次设备号。主设备号用来区分不同种类的设备，而次设备号用来区分同一类型的多个设备。对于常用设备，Linux有约定俗成的编 号，如硬盘的主设备号是3。")]),t._v(" "),a("p",[t._v("Linux为所有的设备文件都提供了统一的操作函数接口，方法是使用数据结构struct file_operations。这个数据结构中包括许多操作函数的指针，如open()、close()、read()和write()等，但由于外设 的种类较多，操作方式各不相同。Struct file_operations结构体中的成员为一系列的接口函数，如用于读/写的read/write函数和用于控制的ioctl等。")]),t._v(" "),a("p",[t._v("打开一个文件就是调用这个文件file_operations中的open操作。不同类型的文件有不同的file_operations成员函数，如普通的磁盘数据文件， 接口函数完成磁盘数据块读写操作；而对于各种设备文件，则最终调用各自驱动程序中的I/O函数进行具体设备的操作。这样，应用程序根本不必考虑操作的是设 备还是普通文件，可一律当作文件处理，具有非常清晰统一的I/O接口。所以file_operations是文件层次的I/O接口。")])])}),[],!1,null,null,null);a.default=r.exports}}]);