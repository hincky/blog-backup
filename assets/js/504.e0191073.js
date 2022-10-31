(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{816:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rsync"}},[s._v("#")]),s._v(" rsync")]),s._v(" "),a("p",[s._v("远程数据同步工具")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("rsync命令")]),s._v(" 是一个远程数据同步工具，可通过LAN/WAN快速同步多台主机间的文件。rsync使用所谓的“rsync算法”来使本地和远程两个主机之间的文件达到同步，这个算法只传送两个文件的不同部分，而不是每次都整份传送，因此速度相当快。 rsync是一个功能非常强大的工具，其命令也有很多功能特色选项，我们下面就对它的选项一一进行分析说明。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". SRC DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". SRC "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("host:DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("HOST:SRC DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("HOST::SRC DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". SRC "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("HOST::DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". rsync://"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/SRC "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("对应于以上六种命令格式，rsync有六种不同的工作模式：")]),s._v(" "),a("ol",[a("li",[s._v('拷贝本地文件。当SRC和DES路径信息都不包含有单个冒号":"分隔符时就启动这种工作模式。如：'),a("code",[s._v("rsync -a /data /backup")])]),s._v(" "),a("li",[s._v('使用一个远程shell程序(如rsh、ssh)来实现将本地机器的内容拷贝到远程机器。当DST路径地址包含单个冒号":"分隔符时启动该模式。如：'),a("code",[s._v("rsync -avz *.c foo:src")])]),s._v(" "),a("li",[s._v('使用一个远程shell程序(如rsh、ssh)来实现将远程机器的内容拷贝到本地机器。当SRC地址路径包含单个冒号":"分隔符时启动该模式。如：'),a("code",[s._v("rsync -avz foo:src/bar /data")])]),s._v(" "),a("li",[s._v('从远程rsync服务器中拷贝文件到本地机。当SRC路径信息包含"::"分隔符时启动该模式。如：'),a("code",[s._v("rsync -av root@192.168.78.192::www /databack")])]),s._v(" "),a("li",[s._v('从本地机器拷贝文件到远程rsync服务器中。当DST路径信息包含"::"分隔符时启动该模式。如：'),a("code",[s._v("rsync -av /databack root@192.168.78.192::www")])]),s._v(" "),a("li",[s._v("列远程机的文件列表。这类似于rsync传输，不过只要在命令中省略掉本地机信息即可。如："),a("code",[s._v("rsync -v rsync://192.168.78.192/www")])])]),s._v(" "),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-v, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v(" 详细模式输出。\n-q, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--quiet")]),s._v(" 精简输出模式。\n-c, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--checksum")]),s._v(" 打开校验开关，强制对文件传输进行校验。\n-a, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--archive")]),s._v(" 归档模式，表示以递归方式传输文件，并保持所有文件属性，等于-rlptgoD。\n-r, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--recursive")]),s._v(" 对子目录以递归模式处理。\n-R, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--relative")]),s._v(" 使用相对路径信息。\n-b, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--backup")]),s._v(" 创建备份，也就是对于目的已经存在有同样的文件名时，将老的文件重新命名为~filename。可以使用--suffix选项来指定不同的备份文件前缀。\n--backup-dir 将备份文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如~filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("存放在在目录下。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-suffix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SUFFIX 定义备份文件前缀。\n-u, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--update")]),s._v(" 仅仅进行更新，也就是跳过所有已经存在于DST，并且文件时间晚于要备份的文件，不覆盖更新的文件。\n-l, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--links")]),s._v(" 保留软链结。\n-L, --copy-links 想对待常规文件一样处理软链结。\n--copy-unsafe-links 仅仅拷贝指向SRC路径目录树以外的链结。\n--safe-links 忽略指向SRC路径目录树以外的链结。\n-H, --hard-links 保留硬链结。\n-p, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--perms")]),s._v(" 保持文件权限。\n-o, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--owner")]),s._v(" 保持文件属主信息。\n-g, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--group")]),s._v(" 保持文件属组信息。\n-D, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--devices")]),s._v(" 保持设备文件信息。\n-t, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--times")]),s._v(" 保持文件时间信息。\n-S, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--sparse")]),s._v(" 对稀疏文件进行特殊处理以节省DST的空间。\n-n, --dry-run现实哪些文件将被传输。\n-w, --whole-file 拷贝文件，不进行增量检测。\n-x, --one-file-system 不要跨越文件系统边界。\n-B, --block-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SIZE 检验算法使用的块尺寸，默认是700字节。\n-e, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rsh")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("command 指定使用rsh、ssh方式进行数据同步。\n--rsync-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" 指定远程服务器上的rsync命令所在路径信息。\n-C, --cvs-exclude 使用和CVS一样的方法自动忽略文件，用来排除那些不希望传输的文件。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--existing")]),s._v(" 仅仅更新那些已经存在于DST的文件，而不备份那些新创建的文件。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" 删除那些DST中SRC没有的文件。\n--delete-excluded 同样删除接收端那些被该选项指定排除的文件。\n--delete-after 传输结束以后再删除。\n--ignore-errors 及时出现IO错误也进行删除。\n--max-delete"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUM 最多删除NUM个文件。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--partial")]),s._v(" 保留那些因故没有完全传输的文件，以是加快随后的再次传输。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v(" 强制删除目录，即使不为空。\n--numeric-ids 不将数字的用户和组id匹配为用户名和组名。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("time ip超时时间，单位为秒。\n-I, --ignore-times 不跳过那些有同样的时间和长度的文件。\n--size-only 当决定是否要备份文件时，仅仅察看文件大小而不考虑文件时间。\n--modify-window"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUM 决定文件是否时间相同时使用的时间戳窗口，默认为0。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" --temp-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DIR 在DIR中创建临时文件。\n--compare-dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DIR 同样比较DIR中的文件来决定是否需要备份。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" 等同于 --partial。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--progress")]),s._v(" 显示备份过程。\n-z, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--compress")]),s._v(" 对备份的文件在传输时进行压缩处理。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PATTERN 指定排除不需要传输的文件模式。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--include")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PATTERN 指定不排除而需要传输的文件模式。\n--exclude-from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE 排除FILE中指定模式的文件。\n--include-from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE 不排除FILE指定模式匹配的文件。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v(" 打印版本信息。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--address")]),s._v(" 绑定到特定的地址。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE 指定其他的配置文件，不使用默认的rsyncd.conf文件。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PORT 指定其他的rsync服务端口。\n--blocking-io 对远程shell使用阻塞IO。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-stats")]),s._v(" 给出某些文件的传输状态。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--progress")]),s._v(" 在传输时显示传输过程。\n--log-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("formAT 指定日志文件格式。\n--password-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE 从FILE中得到密码。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--bwlimit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("KBPS 限制I/O带宽，KBytes per second。\n-h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v(" 显示帮助信息。\n")])])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[a("strong",[s._v("SSH方式")])]),s._v(" "),a("p",[s._v("首先在服务端启动ssh服务：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd start\n启动 sshd： "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("确定"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("strong",[s._v("使用rsync进行同步")])]),s._v(" "),a("p",[s._v("接下来就可以在客户端使用rsync命令来备份服务端上的数据了，SSH方式是通过系统用户来进行备份的，如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vzrtopg")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--progress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" work@172.16.78.192:/www/* /databack/experiment/rsync\nwork@172.16.78.192's password:\nreceiving "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" files to consider\ntest/\na\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00kB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("527")]),s._v(":35:41 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.0")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nb\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),s._v(".43kB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40.0")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00kB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("527")]),s._v(":35:41 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60.0")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100663296")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v(".22MB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:02 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80.0")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsent "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),s._v(" bytes received "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("98190")]),s._v(" bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11563.06")]),s._v(" bytes/sec\ntotal size is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100663363")]),s._v(" speedup is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024.19")]),s._v("\n")])])]),a("p",[s._v("上面的信息描述了整个的备份过程，以及总共备份数据的大小。")]),s._v(" "),a("p",[a("strong",[s._v("后台服务方式")])]),s._v(" "),a("p",[s._v("启动rsync服务，编辑"),a("code",[s._v("/etc/xinetd.d/rsync")]),s._v("文件，将其中的"),a("code",[s._v("disable=yes")]),s._v("改为"),a("code",[s._v("disable=no")]),s._v("，并重启xinetd服务，如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/xinetd.d/rsync\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#default: off")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# description: The rsync server is a good addition to an ftp server, as it \\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# allows crc checksumming etc.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\ndisable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" no\nsocket_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stream\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" no\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" root\nserver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/bin/rsync\nserver_args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--daemon")]),s._v("\nlog_on_failure "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" USERID\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/etc/init.d/xinetd restart\n停止 xinetd： "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("确定"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n启动 xinetd： "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("确定"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("创建配置文件，默认安装好rsync程序后，并不会自动创建rsync的主配置文件，需要手工来创建，其主配置文件为“/etc/rsyncd.conf”，创建该文件并插入如下内容：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/rsyncd.conf\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\nmax "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("connections")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nlog "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/rsyncd.log\npid "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/rsyncd.pid\nlock "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/rsyncd.lock\nsecrets "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/rsyncd.passwd\nhosts "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("deny")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".78.0/22\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" backup web\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/www\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" only "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" no\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test\nauth "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("work\n")])])]),a("p",[s._v("创建密码文件，采用这种方式不能使用系统用户对客户端进行认证，所以需要创建一个密码文件，其格式为“username:password”，用户名可以和密码可以随便定义，最好不要和系统帐户一致，同时要把创建的密码文件权限设置为600，这在前面的模块参数做了详细介绍。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"work:abc123"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/rsyncd.passwd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" /etc/rsyncd.passwd\n")])])]),a("p",[s._v("备份，完成以上工作，现在就可以对数据进行备份了，如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-avz")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--progress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" work@172.16.78.192::www /databack/experiment/rsync\n\nPassword:\nreceiving "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" files to consider\n./ files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\na\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00kB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("528")]),s._v(":20:41 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50.0")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nb\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),s._v(".43kB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("66.7")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00kB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("528")]),s._v(":20:41 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83.3")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100663296")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(".49MB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:02 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsent "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172")]),s._v(" bytes received "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("98276")]),s._v(" bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17899.64")]),s._v(" bytes/sec\ntotal size is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150995011")]),s._v(" speedup is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1533.75")]),s._v("\n")])])]),a("p",[s._v("恢复，当服务器的数据出现问题时，那么这时就需要通过客户端的数据对服务端进行恢复，但前提是服务端允许客户端有写入权限，否则也不能在客户端直接对服务端进行恢复，使用rsync对数据进行恢复的方法如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-avz")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--progress")]),s._v(" /databack/experiment/rsync/ work@172.16.78.192::www\n\nPassword:\nbuilding "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" files to consider\n./\na\nb\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00kB/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("66.7")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc\nsent "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("258")]),s._v(" bytes received "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("76")]),s._v(" bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("95.43")]),s._v(" bytes/sec\ntotal size is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150995011")]),s._v(" speedup is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("452080.87")]),s._v("\n")])])]),a("p",[a("strong",[s._v("将源目录同步到目标目录")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" destination\n")])])]),a("p",[s._v("上面命令中，"),a("code",[s._v("-r")]),s._v(" 表示递归，即包含子目录。注意，"),a("code",[s._v("-r")]),s._v("是必须的，否则 "),a("code",[s._v("rsync")]),s._v(" 运行不会成功。"),a("code",[s._v("source")]),s._v(" 目录表示源目录，"),a("code",[s._v("destination")]),s._v(" 表示目标目录。")]),s._v(" "),a("p",[a("strong",[s._v("多个文件或目录同步")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" source1 source2 destination\n")])])]),a("p",[s._v("上面命令中，"),a("code",[s._v("source1")]),s._v("、"),a("code",[s._v("source2")]),s._v(" 都会被同步到 "),a("code",[s._v("destination")]),s._v(" 目录。")]),s._v(" "),a("p",[a("strong",[s._v("同步元信息")])]),s._v(" "),a("p",[a("code",[s._v("-a")]),s._v(" 参数可以替代 "),a("code",[s._v("-r")]),s._v("，除了可以递归同步以外，还可以同步元信息（比如修改时间、权限等）。由于 "),a("code",[s._v("rsync")]),s._v(" 默认使用文件大小和修改时间决定文件是否需要更新，所以 "),a("code",[s._v("-a")]),s._v(" 比 "),a("code",[s._v("-r")]),s._v(" 更有用。下面的用法才是常见的写法。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" destination\n")])])]),a("p",[s._v("目标目录 "),a("code",[s._v("destination")]),s._v(" 如果不存在，"),a("code",[s._v("rsync")]),s._v(" 会自动创建。执行上面的命令后，源目录 "),a("code",[s._v("source")]),s._v(" 被完整地复制到了目标目录 "),a("code",[s._v("destination")]),s._v(" 下面，即形成了 "),a("code",[s._v("destination/source")]),s._v(" 的目录结构。")]),s._v(" "),a("p",[s._v("如果只想同步源目录 "),a("code",[s._v("source")]),s._v(" 里面的内容到目标目录 "),a("code",[s._v("destination")]),s._v(" ，则需要在源目录后面加上斜杠。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" source/ destination\n")])])]),a("p",[s._v("上面命令执行后，"),a("code",[s._v("source")]),s._v(" 目录里面的内容，就都被复制到了 "),a("code",[s._v("destination")]),s._v(" 目录里面，并不会在 "),a("code",[s._v("destination")]),s._v(" 下面创建一个 "),a("code",[s._v("source")]),s._v(" 子目录。")]),s._v(" "),a("p",[a("strong",[s._v("模拟执行的结果")])]),s._v(" "),a("p",[s._v("如果不确定 "),a("code",[s._v("rsync")]),s._v(" 执行后会产生什么结果，可以先用 "),a("code",[s._v("-n")]),s._v(" 或 "),a("code",[s._v("--dry-run")]),s._v(" 参数模拟执行的结果。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-anv")]),s._v(" source/ destination\n")])])]),a("p",[s._v("上面命令中，"),a("code",[s._v("-n")]),s._v(" 参数模拟命令执行的结果，并不真的执行命令。"),a("code",[s._v("-v")]),s._v(" 参数则是将结果输出到终端，这样就可以看到哪些内容会被同步。")]),s._v(" "),a("p",[a("strong",[s._v("目标目录成为源目录的镜像副本")])]),s._v(" "),a("p",[s._v("默认情况下，"),a("code",[s._v("rsync")]),s._v(" 只确保源目录的所有内容（明确排除的文件除外）都复制到目标目录。它不会使两个目录保持相同，并且不会删除文件。如果要使得目标目录成为源目录的镜像副本，则必须使用 "),a("code",[s._v("--delete")]),s._v(" 参数，这将删除只存在于目标目录、不存在于源目录的文件。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" source/ destination\n")])])]),a("p",[s._v("上面命令中，"),a("code",[s._v("--delete")]),s._v(" 参数会使得 "),a("code",[s._v("destination")]),s._v(" 成为 "),a("code",[s._v("source")]),s._v(" 的一个镜像。")]),s._v(" "),a("p",[a("strong",[s._v("排除文件")])]),s._v(" "),a("p",[s._v("有时，我们希望同步时排除某些文件或目录，这时可以用--exclude参数指定排除模式。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.txt'")]),s._v(" source/ destination\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.txt'")]),s._v(" source/ destination\n")])])]),a("p",[s._v("上面命令排除了所有 "),a("code",[s._v("TXT")]),s._v(" 文件。")]),s._v(" "),a("p",[s._v("注意，"),a("code",[s._v("rsync")]),s._v(' 会同步以"点"开头的隐藏文件，如果要排除隐藏文件，可以这样写 '),a("code",[s._v('--exclude=".*"')]),s._v("。")]),s._v(" "),a("p",[s._v("如果要排除某个目录里面的所有文件，但不希望排除目录本身，可以写成下面这样。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dir1/*'")]),s._v(" source/ destination\n")])])]),a("p",[s._v("多个排除模式，可以用多个 "),a("code",[s._v("--exclude")]),s._v(" 参数。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file1.txt'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dir1/*'")]),s._v(" source/ destination\n")])])]),a("p",[s._v("多个排除模式也可以利用 Bash 的大扩号的扩展功能，只用一个 "),a("code",[s._v("--exclude")]),s._v(" 参数。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file1.txt'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dir1/*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" source/ destination\n")])])]),a("p",[s._v("如果排除模式很多，可以将它们写入一个文件，每个模式一行，然后用 "),a("code",[s._v("--exclude-from")]),s._v(" 参数指定这个文件。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" --exclude-from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exclude-file.txt'")]),s._v(" source/ destination\n")])])]),a("p",[a("strong",[s._v("指定必须同步的文件模式")])]),s._v(" "),a("p",[a("code",[s._v("--include")]),s._v(" 参数用来指定必须同步的文件模式，往往与 "),a("code",[s._v("--exclude")]),s._v(" 结合使用。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--include")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v(" source/ destination\n")])])]),a("p",[s._v("上面命令指定同步时，排除所有文件，但是会包括 "),a("code",[s._v("TXT")]),s._v(" 文件。")])])}),[],!1,null,null,null);a.default=n.exports}}]);