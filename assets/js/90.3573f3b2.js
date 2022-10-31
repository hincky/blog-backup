(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{406:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"apt-get"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apt-get"}},[a._v("#")]),a._v(" apt-get")]),a._v(" "),t("p",[a._v("Debian Linux发行版中的APT软件包管理工具")]),a._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),t("p",[t("strong",[a._v("apt-get命令")]),a._v(" 是Debian Linux发行版中的APT软件包管理工具。所有基于Debian的发行都使用这个包管理系统。deb包可以把一个应用的文件包在一起，大体就如同Windows上的安装文件。")]),a._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" PACKAGE\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装新包")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" remove   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载已安装的包（保留配置文件）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" purge    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载已安装的包（删除配置文件）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新软件包列表")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" upgrade  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新所有已安装的包")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" autoremove   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载已不需要的包依赖")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" dist-upgrade "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 自动处理依赖包升级")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" autoclean    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将已经删除了的软件包的.deb安装文件从硬盘中删除掉")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" clean        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除软件包的安装包")]),a._v("\n\n-c：指定配置文件。\n")])])]),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),t("ul",[t("li",[a._v("管理指令：对APT软件包的管理操作；")]),a._v(" "),t("li",[a._v("软件包：指定要操纵的软件包。")])]),a._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),t("p",[a._v("使用apt-get命令的第一步就是引入必需的软件库，Debian的软件库也就是所有Debian软件包的集合，它们存在互联网上的一些公共站点上。把它们的地址加入，apt-get就能搜索到我们想要的软件。/etc/apt/sources.list是存放这些地址列表的配置文件，其格式如下：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("deb web或"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ftp地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("发行版名字"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" main/contrib/non-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("free"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("我们常用的Ubuntu就是一个基于Debian的发行，我们使用apt-get命令获取这个列表，以下是我整理的常用命令：")]),a._v(" "),t("p",[a._v("在修改"),t("code",[a._v("/etc/apt/sources.list")]),a._v("或者"),t("code",[a._v("/etc/apt/preferences")]),a._v("之后运行该命令。此外您需要定期运行这一命令以确保您的软件包列表是最新的：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n")])])]),t("p",[a._v("安装一个新软件包：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" packagename\n")])])]),t("p",[a._v("卸载一个已安装的软件包（保留配置文件）：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" remove packagename\n")])])]),t("p",[a._v("卸载一个已安装的软件包（删除配置文件）：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" –purge remove packagename\n")])])]),t("p",[a._v("会把已装或已卸的软件都备份在硬盘上，所以如果需要空间的话，可以让这个命令来删除你已经删掉的软件：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" autoclean "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v("\n")])])]),t("p",[a._v("这个命令会把安装的软件的备份也删除，不过这样不会影响软件的使用的：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" clean\n")])])]),t("p",[a._v("更新所有已安装的软件包：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" upgrade\n")])])]),t("p",[a._v("将系统升级到新版本：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" dist-upgrade\n")])])]),t("p",[a._v("定期运行这个命令来清除那些已经卸载的软件包的.deb文件。通过这种方式，您可以释放大量的磁盘空间。如果您的需求十分迫切，可以使用"),t("code",[a._v("apt-get clean")]),a._v("以释放更多空间。这个命令会将已安装软件包裹的.deb文件一并删除。大多数情况下您不会再用到这些.debs文件，因此如果您为磁盘空间不足 而感到焦头烂额，这个办法也许值得一试：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" autoclean\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);