(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{787:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"quotacheck"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quotacheck"}},[a._v("#")]),a._v(" quotacheck")]),a._v(" "),t("p",[a._v("检查磁盘的使用空间与限制")]),a._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),t("p",[t("strong",[a._v("quotacheck命令")]),a._v(" 通过扫描指定的文件系统，获取磁盘的使用情况，创建、检查和修复磁盘配额（quota）文件。执行quotacheck指令，扫描挂入系统的分区，并在各分区的文件系统根目录下产生quota.user和quota.group文件，设置用户和群组的磁盘空间限制。")]),a._v(" "),t("p",[a._v("如果在执行quotacheck命令时出现了以下信息：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("quotacheck: Your kernel probably supports journaled "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("quota")]),a._v(" but you are not using it. Consider switching to journaled "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("quota")]),a._v(" to avoid running "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("quotacheck")]),a._v(" after an unclean shutdown. \n")])])]),t("p",[a._v("可以考虑将之前在文件系统的配置文件中添加的quota相关字段修改为："),t("code",[a._v("usrjquota=aquota.user,grpjquota=aquota.group,jqfmt=vfsv1")]),a._v("，然后重新挂载文件系统："),t("code",[a._v("mount -vo remount 挂载目录")]),a._v("（注意，如果这一步操作出现了任何问题，千万不要试图通过重启解决！将配置文件恢复原状是一个好的选择）")]),a._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("quotacheck"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-a：扫描在/etc/fstab文件里，有加入quota设置的分区；\n-c：对目标文件系统进行一次新的扫描，并创建新的quota文件；\n-d：详细显示指令执行过程，便于排错或了解程序执行的情形；\n-g：扫描磁盘空间时，计算每个群组识别码所占用的目录和文件数目；\n-R：排除根目录所在的分区；\n-u：扫描磁盘空间时，计算每个用户识别码所占用的目录和文件数目；\n-v：显示指令执行过程。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),t("p",[a._v("文件系统：指定要扫描的文件系统。")]),a._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),t("p",[a._v("将所有的在"),t("code",[a._v("/etc/mtab")]),a._v("内，含有quota支持的partition进行扫描：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@linux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# quotacheck -avug")]),a._v("\nquotacheck: Scanning /dev/hdb1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("/disk2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\nquotacheck: Checked "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" directories and "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" files\n")])])]),t("p",[a._v("强制扫描已挂载的filesystem：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@linux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# quotacheck -avug -m")]),a._v("\n")])])]),t("p",[a._v("扫描指定的filesystem：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@linux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# quotacheck -cvug /disk2")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);