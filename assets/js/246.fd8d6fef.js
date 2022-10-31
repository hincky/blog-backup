(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{558:function(a,s,e){"use strict";e.r(s);var t=e(14),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"fuser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fuser"}},[a._v("#")]),a._v(" fuser")]),a._v(" "),s("p",[a._v("使用文件或文件结构识别进程")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("fuser命令")]),a._v(" 用于报告进程使用的文件和网络套接字。fuser命令列出了本地进程的进程号，那些本地进程使用file，参数指定的本地或远程文件。对于阻塞特别设备，此命令列出了使用该设备上任何文件的进程。")]),a._v(" "),s("p",[a._v("每个进程号后面都跟随一个字母，该字母指示进程如何使用文件。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("c")]),a._v(" ：指示进程的工作目录。")]),a._v(" "),s("li",[s("code",[a._v("e")]),a._v(" ：指示该文件为进程的可执行文件(即进程由该文件拉起)。")]),a._v(" "),s("li",[s("code",[a._v("f")]),a._v(" ：指示该文件被进程打开，默认情况下f字符不显示。")]),a._v(" "),s("li",[s("code",[a._v("F")]),a._v(" ：指示该文件被进程打开进行写入，默认情况下F字符不显示。")]),a._v(" "),s("li",[s("code",[a._v("r")]),a._v(" ：指示该目录为进程的根目录。")]),a._v(" "),s("li",[s("code",[a._v("m")]),a._v(" ：指示进程使用该文件进行内存映射，抑或该文件为共享库文件，被进程映射进内存。")])]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("fuser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-a：显示命令行中指定的所有文件；\n-k：杀死访问指定文件的所有进程；\n-i：杀死进程前需要用户进行确认；\n-l：列出所有已知信号名；\n-m：指定一个被加载的文件系统或一个被加载的块设备；\n-n：选择不同的名称空间；\n-u：在每个进程后显示所属的用户名。\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("文件：可以是文件名或者TCP、UDP端口号。")]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("要列出使用"),s("code",[a._v("/etc/passwd")]),a._v("文件的本地进程的进程号，请输入：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fuser")]),a._v(" /etc/passwd\n")])])]),s("p",[a._v("要列出使用"),s("code",[a._v("/etc/filesystems")]),a._v("文件的进程的进程号和用户登录名，请输入：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fuser")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" /etc/filesystems\n")])])]),s("p",[a._v("要终止使用给定文件系统的所有进程，请输入：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fuser")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-k")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" /dev/hd1  或者  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fuser")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-kxuc")]),a._v(" /home\n")])])]),s("p",[a._v("任一命令都列出了进程号和用户名，然后终止每个正在使用"),s("code",[a._v("/dev/hd1 (/home)")]),a._v("文件系统的进程。仅有root用户能终止属于另一用户的进程。如果您正在试图卸下"),s("code",[a._v("/dev/hd1")]),a._v("文件系统，而一个正在访问"),s("code",[a._v("/dev/hd1")]),a._v("文件系统的进程不允许这样，您可能希望使用此命令。")]),a._v(" "),s("p",[a._v("要列出正在使用已从给定文件系统删除的文件的全部进程，请输入：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fuser")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /usr文件\n")])])]),s("p",[s("code",[a._v("/dev/kmem")]),a._v(" 用于系统映像。"),s("br"),a._v(" "),s("code",[a._v("/dev/mem")]),a._v("  也用于系统映像。")])])}),[],!1,null,null,null);s.default=r.exports}}]);