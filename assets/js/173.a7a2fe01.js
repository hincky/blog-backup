(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{485:function(a,s,e){"use strict";e.r(s);var t=e(14),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"depmod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#depmod"}},[a._v("#")]),a._v(" depmod")]),a._v(" "),s("p",[a._v("分析可载入模块的相依性")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("depmod命令")]),a._v(" 可产生模块依赖的映射文件，在构建嵌入式系统时，需要由这个命令来生成相应的文件，由modprobe使用。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("depmod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-a或--all：分析所有可用的模块；\n-d或debug：执行排错模式；\n-e：输出无法参照的符号；\n-i：不检查符号表的版本；\n-m"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("或system-map"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：使用指定的符号表文件；\n-s或--system-log：在系统记录中记录错误；\n-v或--verbose：执行时显示详细的信息；\n-V或--version：显示版本信息；\n--help：显示帮助。\n")])])]),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("depmod "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" /home/windsome/EMMA3PF-KernelSource-20080626/install_pos "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" ./boot/System.map "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.6")]),a._v(".18_pro500-bcm91250-mips2_fp_be "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n")])])]),s("ul",[s("li",[s("code",[a._v("/home/windsome/EMMA3PF-KernelSource-20080626/install_pos")]),a._v("是我"),s("code",[a._v("make mod_install")]),a._v("后，所有模块的存放路径。")]),a._v(" "),s("li",[s("code",[a._v("./boot/System.map")]),a._v("是"),s("code",[a._v("make linux")]),a._v("后生成，我拷贝到此目录的。")]),a._v(" "),s("li",[s("code",[a._v("2.6.18_pro500-bcm91250-mips2_fp_be")]),a._v("是我build的linux的版本。")])]),a._v(" "),s("p",[a._v("编译linux过程及执行depmod的例子：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("genkernel.sh "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("at linux-2.6.18_pro500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#######")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("INSTALL_ROOT_EMMA3PF")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/home/windsome/EMMA3PF-KernelSource-20080626/install_pos"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("INSTALL_MOD_EMMA3PF")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/home/windsome/EMMA3PF-KernelSource-20080626/install_pos"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /home/windsome/EMMA3PF-KernelSource-20080626/install_pos/lib "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /home/windsome/EMMA3PF-KernelSource-20080626/install_pos/boot/* "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("linux_src_dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" modules_install\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" vmlinux System.map /home/windsome/EMMA3PF-KernelSource-20080626/install_pos/boot/ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/windsome/EMMA3PF-KernelSource-20080626/install_pos\ndepmod "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" /home/windsome/EMMA3PF-KernelSource-20080626/install_pos "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" ./boot/System.map "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.6")]),a._v(".18_pro500-bcm91250-mips2_fp_be "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n")])])]),s("p",[a._v("其他用法：")]),a._v(" "),s("p",[a._v("在linux桌面系统中，当你编译了新的驱动，为了能够用"),s("code",[a._v("modprobe ***")]),a._v("加载模块, 你需要先将模块拷贝到"),s("code",[a._v("/lib/modules /2.6.31-20-generic")]),a._v("目录下，然后运行"),s("code",[a._v("sudo depmod -a")]),a._v("将模块信息写入modules.dep、modules.dep.bin、modules.alias.bin、modules.alias和modules.pcimap文件中。")]),a._v(" "),s("p",[a._v("如，我编译了一个新的wifi驱动r8192se_pci.ko，将其拷贝到"),s("code",[a._v("/lib/modules/2.6.31-20-generic/wireless")]),a._v("下，然后到"),s("code",[a._v("/lib/modules/2.6.31-20-generic")]),a._v("运行"),s("code",[a._v("depmod -a")]),a._v("，之后可以在任意目录运行modprobe r8192se_pci。")])])}),[],!1,null,null,null);s.default=r.exports}}]);