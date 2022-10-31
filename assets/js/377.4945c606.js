(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{689:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mail"}},[s._v("#")]),s._v(" mail")]),s._v(" "),a("p",[s._v("命令行下发送和接收电子邮件")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("mail命令")]),s._v(" 是命令行的电子邮件发送和接收工具。操作的界面不像elm或pine那么容易使用，但功能非常完整。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定密件副本的收信人地址；\n-c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定副本的收信人地址；\n-f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("邮件文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：读取指定邮件文件中的邮件；\n-i：不显示终端发出的信息；\n-I：使用互动模式；\n-n：程序使用时，不使用mail.rc文件中的设置；\n-N：阅读邮件时，不显示邮件的标题；\n-s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("邮件主题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：指定邮件的主题；\n-u"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("用户帐号"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：读取指定用户的邮件；\n-v：执行时，显示详细的信息。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("邮件地址：收信人的电子邮箱地址。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[a("strong",[s._v("直接使用shell当编辑器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mail "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello from jsdig.com by shell"')]),s._v(" admin@jsdig.com\nhello,this is the content of mail.\nwelcome to www.jsdig.com\n")])])]),a("p",[s._v("第一行是输入的命令，"),a("code",[s._v("-s")]),s._v("表示邮件的主题，后面的"),a("code",[s._v("admin@jsdig.com")]),s._v("则是邮件的接收人，输入完这行命令后回车，会进入邮件正文的编写，我们可以输入任何文字，比如上面的两行。当邮件正文输入完成后，需要按 "),a("strong",[s._v("CTRL+D")]),s._v(" 结束输入，此时会提示你输入Cc地址，即邮件抄送地址，没有直接回车就完成了邮件的发送。")]),s._v(" "),a("p",[a("strong",[s._v("使用管道进行邮件发送")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello,this is the content of mail.welcome to www.jsdig.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mail "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello from jsdig.com by pipe"')]),s._v(" admin@jsdig.com\n")])])]),a("p",[s._v("使用管道直接敲入这行命令即可完成邮件的发送，其中echo后的是邮件正文。")]),s._v(" "),a("p",[a("strong",[s._v("使用文件进行邮件发送")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mail "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello from jsdig.com by file"')]),s._v(" admin@jsdig.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" mail.txt\n")])])]),a("p",[s._v("使用上面的命令后，我们就可以把mail.txt文件的内容作为邮件的内容发送给admin@jsdig.com了。")]),s._v(" "),a("p",[s._v("使用上述三种方式都可以给外部邮箱进行邮件发送，但因为前面2中都是直接在shell中敲入邮件内容，因此无法输入中文，即使我们使用粘贴的方式输入了中文，那么收到的邮件也是乱码的。但第3种方式，我们可以在window下编辑好邮件内容后，放到linux下，再进行发送，这样就可以正常发送中文了。不过目前邮件的中文标题暂时没有找到解决办法。")]),s._v(" "),a("p",[s._v("因为mail程序本身就是调用sendmail来进行邮件发送的，因此我们可以在mail命令中使用sendmail的参数进行配置，比如我想使用特定的发件人发送邮件，可以使用如下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mail "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello from jsdig.com with sender"')]),s._v(" admin@jsdig.com -- "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" user@jsdig.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mail.txt\n")])])]),a("p",[s._v("上面的命令中，我们使用了– -f user@jsdig.com这样的参数，这是sendmail的选项，其中-f表示邮件的发送人邮件地址。")]),s._v(" "),a("p",[s._v("很多情况下，我们也需要使用邮件来发送附件，在linux下使用mail命令发送附件也很简单，不过首先需要安装uuencode软件包，这个程序是对二进制文件进行编码使其适合通过邮件进行发送，在CentOS上安装该软件包如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" sharutils\n")])])]),a("p",[s._v("安装完成后我们就可以来进行附件的发送了，使用如下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uuencode")]),s._v(" test.txt "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mail "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello,see the attachement"')]),s._v(" admin@jsdig.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mail.txt\n")])])]),a("p",[s._v("完成后就可以把text.txt文件作为邮件的附件发送出去了。uuencode有两个参数，第一个是要发送的文件，第二个是显示的文件名称。")]),s._v(" "),a("p",[s._v("这里我主要介绍的是在CentOS下使用mail发送电子邮件的一些使用方法，需要的要求是你的linux必须安装了sendmail并开启了，同时保证可以连接外网。另外，文章中提到的命令本人都经过亲自测试，保证完全可用，不过你需要将命令中的电子邮件地址换成自己的电子邮件地址。")])])}),[],!1,null,null,null);a.default=r.exports}}]);