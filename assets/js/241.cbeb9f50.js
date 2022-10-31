(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{555:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ftp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ftp"}},[t._v("#")]),t._v(" ftp")]),t._v(" "),s("p",[t._v("用来设置文件系统相关功能")]),t._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),s("p",[s("strong",[t._v("ftp命令")]),t._v(" 用来设置文件系统相关功能。ftp服务器在网上较为常见，Linux ftp命令的功能是用命令的方式来控制在本地机和远程机之间传送文件，这里详细介绍Linux ftp命令的一些经常使用的命令，相信掌握了这些使用Linux进行ftp操作将会非常容易。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("ftp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("-d：详细显示指令执行过程，便于排错或分析程序执行的情况；\n-i：关闭互动模式，不询问任何问题；\n-g：关闭本地主机文件名称支持特殊字符的扩充特性；\n-n：不使用自动登录；\n-v：显示指令执行过程。\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("p",[t._v("主机：指定要连接的FTP服务器的主机名或ip地址。")]),t._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("ftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ascii  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设定以ASCII方式传送文件(缺省值) ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bell   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每完成一次文件传送,报警提示. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" binary "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设定以二进制方式传送文件. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bye    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 终止主机FTP进程,并退出FTP管理方式. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当为ON时,用MGET命令拷贝的文件名到本地机器中,全部转换为小写字母. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同UNIX的CD命令. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cdup   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回上一级目录. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改变远端主机的文件权限. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" close  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 终止远端的FTP进程,返回到FTP命令状态, 所有的宏定义都被删除. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" delete "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远端主机中的文件. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("local-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出当前远端主机目录中的文件.如果有本地文件,就将结果写至本地文件. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" get "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("local-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远端主机中传送至本地主机中. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出命令的解释. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lcd "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改变当前本地主机的工作目录,如果缺省,就转到当前用户的HOME目录. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("local-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同DIR. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" macdef                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义宏命令. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mdelete "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除一批文件. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mget "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远端主机接收一批文件至本地主机. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" directory-name   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在远端主机中建立目录. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mput local-files "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地主机中一批文件传送至远端主机. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新建立一个新的连接. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" prompt           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 交互提示模式. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" put local-file "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地一个文件传送至远端主机中. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出当前远端主机目录. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" quit "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同BYE. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" recv remote-file "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("local-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同GET. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改变远端主机中的文件名. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rmdir")]),t._v(" directory-name   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远端主机中的目录. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" send local-file "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同PUT. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" status   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前FTP的状态. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" system   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示远端主机系统类型. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" user user-name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新以别的用户名登录远端主机. ")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同HELP. [command]指定需要帮助的命令名称。如果没有指定 command，ftp 将显示全部命令的列表。")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 ftp 子系统退出到外壳。")]),t._v("\n")])])]),s("p",[t._v("FTP 匿名登录账号密码")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("账号：anonymous\n密码: anonymous@\n")])])]),s("p",[t._v("关闭FTP连接")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("bye\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\nquit\n")])])]),s("p",[t._v("下载文件")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("ftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" get readme.txt "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载 readme.txt 文件")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mget *.txt     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载 ")]),t._v("\n")])])]),s("p",[t._v("上传文件")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("ftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" put /path/readme.txt "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传 readme.txt 文件")]),t._v("\nftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mput *.txt           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以上传多个文件")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);