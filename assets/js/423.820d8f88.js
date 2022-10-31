(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{736:function(a,s,t){"use strict";t.r(s);var e=t(14),l=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nologin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nologin"}},[a._v("#")]),a._v(" nologin")]),a._v(" "),s("p",[a._v("拒绝用户登录系统")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("nologin命令")]),a._v(" 可以实现礼貌地拒绝用户登录系统，同时给出信息。如果尝试以这类用户登录，就在log里添加记录，然后在终端输出This account is currently not available信息，就是这样。一般设置这样的帐号是给启动服务的账号所用的，这只是让服务启动起来，但是不能登录系统。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("nologin\n")])])]),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("Linux禁止用户登录：")]),a._v(" "),s("p",[a._v("禁止用户登录后，用户不能登录系统，但可以登录ftp、SAMBA等。我们在Linux下做系统维护的时候，希望个别用户或者所有用户不能登录系统，保证系统在维护期间正常运行。这个时候我们就要禁止用户登录。")]),a._v(" "),s("p",[a._v("1、禁止个别用户登录，比如禁止lynn用户登录。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" lynn\n")])])]),s("p",[a._v("这就话的意思是锁定lynn用户，这样该用户就不能登录了。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" lynn\n")])])]),s("p",[a._v("上面是对锁定的用户lynn进行解锁，用户可登录了。")]),a._v(" "),s("p",[a._v("2、我们通过修改"),s("code",[a._v("/etc/passwd")]),a._v("文件中用户登录的shell")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/passwd\n")])])]),s("p",[a._v("更改为：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("lynn:x:500:500::/home/lynn:/sbin/nologin\n")])])]),s("p",[a._v("该用户就无法登录了。")]),a._v(" "),s("p",[a._v("3、禁止所有用户登录。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" /etc/nologin\n")])])]),s("p",[a._v("除root以外的用户不能登录了。")])])}),[],!1,null,null,null);s.default=l.exports}}]);