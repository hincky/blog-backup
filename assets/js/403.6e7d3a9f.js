(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{716:function(a,s,e){"use strict";e.r(s);var t=e(14),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mysqldump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump"}},[a._v("#")]),a._v(" mysqldump")]),a._v(" "),s("p",[a._v("MySQL数据库中备份工具")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("mysqldump命令")]),a._v(" 是mysql数据库中备份工具，用于将MySQL服务器中的数据库以标准的sql语言的方式导出，并保存到文件中。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysqldump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("--add-drop-table：在每个创建数据库表语句前添加删除数据库表的语句；\n--add-locks：备份数据库表时锁定数据库表；\n--all-databases：备份MySQL服务器上的所有数据库；\n--comments：添加注释信息；\n--compact：压缩模式，产生更少的输出；\n--complete-insert：输出完成的插入语句；\n--databases：指定要备份的数据库；\n--default-character-set：指定默认字符集；\n--force：当出现错误时仍然继续备份操作；\n--host：指定要备份数据库的服务器；\n--lock-tables：备份前，锁定所有数据库表；\n--no-create-db：禁止生成创建数据库语句；\n--no-create-info：禁止生成创建数据库库表语句；\n--password：连接MySQL服务器的密码；\n--port：MySQL服务器的端口号；\n--user：连接MySQL服务器的用户名。\n--skip-lock-tables: 不锁表导出\n")])])]),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[s("strong",[a._v("导出整个数据库")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" 用户名 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" 数据库名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 导出的文件名\nmysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" linuxde "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" smgp_apps_linuxde "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" linuxde.sql\n")])])]),s("p",[s("strong",[a._v("导出一个表")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" 用户名 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" 数据库名 表名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 导出的文件名\nmysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" linuxde "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" smgp_apps_linuxde "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("users")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" linuxde_users.sql\n")])])]),s("p",[s("strong",[a._v("导出一个数据库结构")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" linuxde "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" --add-drop-table smgp_apps_linuxde "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" linuxde_db.sql\n")])])]),s("p",[s("code",[a._v("-d")]),a._v("没有数据，"),s("code",[a._v("--add-drop-tabl")]),a._v("e每个create语句之前增加一个"),s("code",[a._v("drop table")])]),a._v(" "),s("h3",{attrs:{id:"问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[a._v("#")]),a._v(" 问题解决")]),a._v(" "),s("p",[s("strong",[a._v("锁表失败")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysqldump: Got error: 1044: \"Access denied for user 'appuser'@'1%' to database 'tc_mall'\" when doing LOCK TABLES\n")])])]),s("p",[a._v("可使用"),s("code",[a._v("--skip-lock-tables")]),a._v("在导出数据阶段跳过锁表流程")])])}),[],!1,null,null,null);s.default=r.exports}}]);