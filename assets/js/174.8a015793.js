(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{486:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"df"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#df"}},[s._v("#")]),s._v(" df")]),s._v(" "),a("p",[s._v("显示磁盘的相关信息")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("df命令")]),s._v(" 用于显示磁盘分区上的可使用的磁盘空间。默认显示单位为KB。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-a或--all：包含全部的文件系统；\n--block-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("区块大小"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：以指定的区块大小来显示区块数目；\n-h或--human-readable：以可读性较高的方式来显示信息；\n-H或--si：与-h参数相同，但在计算时是以1000 Bytes为换算单位而非1024 Bytes；\n-i或--inodes：显示inode的信息；\n-k或--kilobytes：指定区块大小为1024字节；\n-l或--local：仅显示本地端的文件系统；\n-m或--megabytes：指定区块大小为1048576字节；\n--no-sync：在取得磁盘使用信息前，不要执行sync指令，此为预设值；\n-P或--portability：使用POSIX的输出格式；\n--sync：在取得磁盘使用信息前，先执行sync指令；\n-t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件系统类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件系统类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：仅显示指定文件系统类型的磁盘信息；\n-T或--print-type：显示文件系统的类型；\n-x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件系统类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--exclude-type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件系统类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：不要显示指定文件系统类型的磁盘信息；\n--help：显示帮助；\n--version：显示版本信息。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("文件：指定文件系统上的文件。")]),s._v(" "),a("h3",{attrs:{id:"大小格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大小格式"}},[s._v("#")]),s._v(" 大小格式")]),s._v(" "),a("p",[s._v("显示值以 "),a("code",[s._v("--block-size")]),s._v(" 和 "),a("code",[s._v("DF_BLOCK_SIZE")]),s._v("，"),a("code",[s._v("BLOCK_SIZE")]),s._v(" 和 "),a("code",[s._v("BLOCKSIZE")]),s._v(" 环境变量中的第一个可用 "),a("code",[s._v("SIZE")]),s._v(" 为单位。 否则，单位默认为 "),a("code",[s._v("1024")]),s._v(" 个字节（如果设置 "),a("code",[s._v("POSIXLY_CORRECT")]),s._v("，则为"),a("code",[s._v("512")]),s._v("）。")]),s._v(" "),a("p",[s._v("SIZE是一个整数和可选单位（例如：10M是10 * 1024 * 1024）。 单位是K，M，G，T，P，E，Z，Y（1024的幂）或KB，MB，...（1000的幂）。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("查看系统磁盘设备，默认是KB为单位：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@LinServ-1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df")]),s._v("\n文件系统               1K-块        已用     可用 已用% 挂载点\n/dev/sda2            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("146294492")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28244432")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110498708")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("% /\n/dev/sda1              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1019208")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("62360")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("904240")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("% /boot\ntmpfs                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032204")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032204")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/sdb1            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2884284108")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("218826068")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2518944764")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("% /data1\n")])])]),a("p",[s._v("使用"),a("code",[s._v("-h")]),s._v("选项以KB以上的单位来显示，可读性高：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@LinServ-1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\n文件系统              容量  已用 可用 已用% 挂载点\n/dev/sda2             140G   27G  106G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("% /\n/dev/sda1             996M   61M  884M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("% /boot\ntmpfs                1009M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 1009M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/sdb1             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".7T  209G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".4T   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("% /data1\n")])])]),a("p",[s._v("查看全部文件系统：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@LinServ-1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -a")]),s._v("\n文件系统               1K-块        已用     可用 已用% 挂载点\n/dev/sda2            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("146294492")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28244432")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110498708")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("% /\nproc                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   -  /proc\nsysfs                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   -  /sys\ndevpts                       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   -  /dev/pts\n/dev/sda1              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1019208")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("62360")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("904240")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("% /boot\ntmpfs                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032204")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032204")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/sdb1            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2884284108")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("218826068")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2518944764")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("% /data1\nnone                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   -  /proc/sys/fs/binfmt_misc\n")])])]),a("p",[s._v("显示 "),a("code",[s._v("public")]),s._v(" 目录中的可用空间量，如以下输出中所示：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" public\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Filesystem     1K-blocks     Used Available Use% Mounted on")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /dev/loop0      18761008 15246924   2554392  86% /d Avail")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);