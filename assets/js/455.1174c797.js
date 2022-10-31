(window.webpackJsonp=window.webpackJsonp||[]).push([[455],{766:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pssh"}},[s._v("#")]),s._v(" pssh")]),s._v(" "),a("p",[s._v("批量管理执行")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("pssh命令")]),s._v(" 是一个python编写可以在多台服务器上执行命令的工具，同时支持拷贝文件，是同类工具中很出色的，类似pdsh，个人认为相对pdsh更为简便，使用必须在各个服务器上配置好密钥认证访问。")]),s._v(" "),a("h3",{attrs:{id:"安装pssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装pssh"}},[s._v("#")]),s._v(" 安装pssh")]),s._v(" "),a("p",[s._v("在CentOS系统环境下，介绍yum的安装和源码安装的方式：")]),s._v(" "),a("p",[a("strong",[s._v("yum方法")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pssh\n")])])]),a("p",[a("strong",[s._v("编译安装")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://parallel-ssh.googlecode.com/files/pssh-2.3.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf pssh-2.3.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" pssh-2.3.1/\npython setup.py "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("--version：查看版本\n--help：查看帮助，即此信息\n-h：主机文件列表，内容格式”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("”\n-H：主机字符串，内容格式”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("”\n-：登录使用的用户名\n-p：并发的线程数【可选】\n-o：输出的文件目录【可选】\n-e：错误输入文件【可选】\n-t：TIMEOUT 超时时间设置，0无限制【可选】\n-O：SSH的选项\n-v：详细模式\n-A：手动输入密码模式\n-x：额外的命令行参数使用空白符号，引号，反斜线处理\n-X：额外的命令行参数，单个参数模式，同-x\n-i：每个服务器内部处理信息输出\n-P：打印出服务器返回信息\n")])])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("获取每台服务器的uptime：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pssh -h ip.txt -i uptime")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":15:03 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Mar.mars.he\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":15:11 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":25,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" user,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":15:03 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Jan.mars.he\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":15:12 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":26,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" users,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":15:03 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Feb.mars.he\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":15:12 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":26,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" users,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.08")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("\n")])])]),a("p",[s._v("查看每台服务器上mysql复制IO/SQL线程运行状态信息：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pssh -h IP.txt -i \"/usr/local/mysql/bin/mysql -e 'show slave status \\G'\"|grep Running:")]),s._v("\n             Slave_IO_Running: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n            Slave_SQL_Running: Yes\n             Slave_IO_Running: Yes\n            Slave_SQL_Running: Yes\n             Slave_IO_Running: Yes\n            Slave_SQL_Running: Yes\n")])])]),a("p",[s._v("保存每台服务器运行的结果：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pssh -h IP.txt -i -o /tmp/pssh/ uptime")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:47 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Feb.mars.he\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:55 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":31,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" users,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.03")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:47 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Jan.mars.he\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:56 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":30,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" users,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:47 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Mar.mars.he\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:56 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":30,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" user,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n")])])]),a("p",[s._v("我们来看一下/tmp/pssh/下的文件及其内容")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll /tmp/pssh/")]),s._v("\n总用量 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19 Feb.mars.he\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19 Jan.mars.he\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19 Mar.mars.he\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /tmp/pssh/*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:55 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":31,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" users,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.03")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:56 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":30,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" users,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":19:56 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":30,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" user,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n")])])]),a("p",[s._v("上面介绍的是pssh命令很少的一部分，大家可以将其用到适合自己的场景，发挥它的最大功效。")])])}),[],!1,null,null,null);a.default=e.exports}}]);