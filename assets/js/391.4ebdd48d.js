(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{704:function(a,s,t){"use strict";t.r(s);var r=t(14),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mkisofs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mkisofs"}},[a._v("#")]),a._v(" mkisofs")]),a._v(" "),s("p",[a._v("建立ISO 9660映像文件")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("mkisofs命令")]),a._v(" 用来将指定的目录与文件做成ISO 9660格式的映像文件，以供刻录光盘。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mkisofs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-a或--all：mkisofs通常不处理备份文件。使用此参数可以把备份文件加到映像文件中；\n-A"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("应用程序id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("或-appid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("应用程序ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定光盘的应用程序ID；\n-abstract"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("摘要文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定摘要文件的文件名；\n-b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("开机映像文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("或-eltorito-boot"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("开机映像文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定在制作可开机光盘时所需的开机映像文件；\n-biblio"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ISBN文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定ISBN文件的文件名，ISBN文件位于光盘根目录下，记录光盘的ISBN；\n-c"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("开机文件名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：制作可开机光盘时，mkisofs会将开机映像文件中的全-eltorito-catalog"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("开机文件名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("全部内容作成一个文件；\n-C"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("盘区编号，盘区编号"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：将许多节区合成一个映像文件时，必须使用此参数；\n-copyright"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("版权信息文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定版权信息文件的文件名；\n-d或-omit-period：省略文件后的句号；\n-D或-disable-deep-relocation：ISO "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9660")]),a._v("最多只能处理8层的目录，超过8层的部分，RRIP会自动将它们设置成ISO "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9660")]),a._v("兼容的格式。使用-D参数可关闭此功能；\n-f或-follow-links：忽略符号连接；\n-h：显示帮助；\n-hide"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("目录或文件名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：使指定的目录或文件在ISO "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9660")]),a._v("或Rock RidgeExtensions的系统中隐藏；\n-hide-joliet"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("目录或文件名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：使指定的目录或文件在Joliet系统中隐藏；\n-J或-joliet：使用Joliet格式的目录与文件名称；\n-l或-full-iso9660-filenames：使用ISO "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9660")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v("字符长度的文件名；\n-L或-allow-leading-dots：允许文件名的第一个字符为句号；\n-log-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("记录文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：在执行过程中若有错误信息，预设会显示在屏幕上；\n-m"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("目录或文件名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("或-exclude"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("目录或文件名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定的目录或文件名将不会房入映像文件中；\n-M"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("映像文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("或-prev-session"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("映像文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：与指定的映像文件合并；\n-N或-omit-version-number：省略ISO "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9660")]),a._v("文件中的版本信息；\n-o"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("映像文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("或-output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("映像文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定映像文件的名称；\n-p"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("数据处理人"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("或-preparer"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("数据处理人"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：记录光盘的数据处理人；\n-print-size：显示预估的文件系统大小；\n-quiet：执行时不显示任何信息；\n-r或-rational-rock：使用Rock Ridge Extensions，并开放全部文件的读取权限；\n-R或-rock：使用Rock Ridge Extensions；\n-sysid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("系统ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定光盘的系统ID；\n-T或-translation-table：建立文件名的转换表，适用于不支持Rock Ridge Extensions的系统上；\n-v或-verbose：执行时显示详细的信息；\n-V"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("光盘ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("或-volid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("光盘ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定光盘的卷册集ID；\n-volset-size"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("光盘总数"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定卷册集所包含的光盘张数；\n-volset-seqno"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("卷册序号"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定光盘片在卷册集中的编号；\n-x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("目录"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("：指定的目录将不会放入映像文件中；\n-z：建立通透性压缩文件的SUSP记录，此记录目前只在Alpha机器上的Linux有效。\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("路径：需要添加到映像文件中的路径。")]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("linux中用mkisofs命令把文件制作成ISO步骤：")]),a._v(" "),s("p",[a._v("把NFS服务器上的目录挂载到本地/mnt/nfs/的目录：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nfs "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".2.2:/linuxos/rhel4.0_update3/ /mnt/nfs/\n")])])]),s("p",[a._v("把已挂载的文件复制到本地：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" /mnt/NFS/* /root/Decp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" /mnt/nfs/* /root/Desktop/rhel4.0/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("sktop/rhel4.0/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("p",[a._v("查找boot.cat文件并删除掉：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" rhel4.0/ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" boot.cat "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v("\n")])])]),s("p",[a._v("查找TRANS.TBL文件并删除掉：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" rhel4.0/ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" TRANS.TBL "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("复制本地的所需文件到指定目录：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /usr/share/comps/i386/.discinfo rhel4.0/\n")])])]),s("p",[a._v("把指定目录下的所有文件制作成ISO文件：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkisofs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-J")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" -no-emul-boot -boot-load-size "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" -boot-info-table "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-V")]),a._v(" RHEL4ASDVD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" isolinux/isolinux.bin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" isolinux/boot.cat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /RHEL4AS.iso rhel4.0/\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);