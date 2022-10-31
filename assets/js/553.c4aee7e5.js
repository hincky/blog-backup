(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{865:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"stat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stat"}},[s._v("#")]),s._v(" stat")]),s._v(" "),t("p",[s._v("用于显示文件的状态信息")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("stat命令")]),s._v(" 用于显示文件的状态信息。stat命令的输出信息比ls命令的输出信息要更详细。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("stat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-L：支持符号连接；\n-f：显示文件系统状态而非文件状态；\n-t：以简洁方式输出信息；\n--help：显示指令的帮助信息；\n--version：显示指令的版本信息。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("文件：指定要显示信息的普通文件或者文件系统对应的设备文件名。")]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l myfile")]),s._v("\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2010")]),s._v("-10-09 myfile\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# stat myfile")]),s._v("\nfile: “myfile”\nSize: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               Blocks: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("          IO Block: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   一般空文件\nDevice: fd00h/64768d    Inode: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("194805815")]),s._v("   Links: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nAccess: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0644/-rw-r--r--"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  Uid: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/    root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   Gid: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/    root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAccess: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2010")]),s._v("-12-12 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":22:35.000000000 +0800\nModify: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2010")]),s._v("-10-09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":44:21.000000000 +0800\nChange: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2010")]),s._v("-10-09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":44:21.000000000 +0800\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# stat -f myfile")]),s._v("\nFile: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myfile"')]),s._v("\nid: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        Namelen: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v("     type: ext2/ext3\nBlock size: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("       Fundamental block size: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\nBlocks: Total: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("241555461")]),s._v("  free: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("232910771")]),s._v("  Available: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220442547")]),s._v("\nInodes: Total: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("249364480")]),s._v("  Free: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("249139691")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# stat -t myfile")]),s._v("\nmyfile "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" 81a4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" fd00 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("194805815")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1292127755")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1286628261")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1286628261")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);