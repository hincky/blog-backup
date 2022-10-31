(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{858:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-agent"}},[s._v("#")]),s._v(" ssh-agent")]),s._v(" "),a("p",[s._v("ssh密钥管理器")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("ssh-agent命令")]),s._v(" 是一种控制用来保存公钥身份验证所使用的私钥的程序。ssh-agent在X会话或登录会话之初启动，所有其他窗口或程序则以客户端程序的身份启动并加入到ssh-agent程序中。通过使用环境变量，可定位代理并在登录到其他使用ssh机器上时使用代理自动进行身份验证。")]),s._v(" "),a("p",[s._v("其实ssh-agent就是一个密钥管理器，运行ssh-agent以后，使用ssh-add将私钥交给ssh-agent保管，其他程序需要身份验证的时候可以将验证申请交给ssh-agent来完成整个认证过程。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-agent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-a bind_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t life"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nssh-agent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" bind_address：bind the agent to the UNIX-domain socket bind_address.\n-c：生成C-shell风格的命令输出。\n-d：调试模式。\n-k：把ssh-agent进程杀掉。\n-s：生成Bourne shell 风格的命令输出。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" life：设置默认值添加到代理人的身份最大寿命。\n")])])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("运行ssh-agent：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-agent\n")])])]),a("p",[s._v("运行ssh-agent，它会打印出来它使用的环境和变量。")])])}),[],!1,null,null,null);a.default=n.exports}}]);