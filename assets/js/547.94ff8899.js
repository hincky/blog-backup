(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{856:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh-copy-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-copy-id"}},[s._v("#")]),s._v(" ssh-copy-id")]),s._v(" "),a("p",[s._v("把本地的ssh公钥文件安装到远程主机对应的账户下")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("ssh-copy-id命令")]),s._v(" 可以把本地主机的公钥复制到远程主机的authorized_keys文件上，ssh-copy-id命令也会给远程主机的用户主目录（home）和"),a("code",[s._v("~/.ssh")]),s._v(", 和"),a("code",[s._v("~/.ssh/authorized_keys")]),s._v("设置合适的权限。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-copy-id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("identity_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("machine\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-i：指定公钥文件\n")])])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("1、把本地的ssh公钥文件安装到远程主机对应的账户下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-copy-id user@server\nssh-copy-id "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" ~/.ssh/id_rsa.pub user@server\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);