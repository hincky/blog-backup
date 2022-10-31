(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{419:function(t,a,s){"use strict";s.r(a);var v=s(14),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"atop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atop"}},[t._v("#")]),t._v(" atop")]),t._v(" "),a("p",[t._v("监控Linux系统资源与进程的工具")]),t._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),a("p",[t._v("[非内部程序，需要安装]它以一定的频率记录系统的运行状态，所采集的数据包含系统资源(CPU、内存、磁盘和网络)使用情况和进程运行情况，并能以日志文件的方式保存在磁盘中，服务器出现问题后，我们可获取相应的atop日志文件进行分析。atop是一款开源软件，我们可以从这里获得其源码和rpm安装包。")]),t._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("atop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("p",[a("strong",[t._v("ATOP列")]),t._v("：该列显示了主机名、信息采样日期和时间点")]),t._v(" "),a("p",[a("strong",[t._v("PRC列")]),t._v("：该列显示进程整体运行情况")]),t._v(" "),a("ul",[a("li",[t._v("sys、usr字段分别指示进程在内核态和用户态的运行时间")]),t._v(" "),a("li",[t._v("#proc字段指示进程总数")]),t._v(" "),a("li",[t._v("#zombie字段指示僵死进程的数量")]),t._v(" "),a("li",[t._v("#exit字段指示atop采样周期期间退出的进程数量")])]),t._v(" "),a("p",[a("strong",[t._v("CPU列")]),t._v("：该列显示CPU整体(即多核CPU作为一个整体CPU资源)的使用情况，我们知道CPU可被用于执行进程、处理中断，也可处于空闲状态(空闲状态分两种，一种是活动进程等待磁盘IO导致CPU空闲，另一种是完全空闲)")]),t._v(" "),a("ul",[a("li",[t._v("sys、usr字段指示CPU被用于处理进程时，进程在内核态、用户态所占CPU的时间比例")]),t._v(" "),a("li",[t._v("irq字段指示CPU被用于处理中断的时间比例")]),t._v(" "),a("li",[t._v("idle字段指示CPU处在完全空闲状态的时间比例")]),t._v(" "),a("li",[t._v("wait字段指示CPU处在“进程等待磁盘IO导致CPU空闲”状态的时间比例")])]),t._v(" "),a("p",[t._v("CPU列各个字段指示值相加结果为N00%，其中N为cpu核数。")]),t._v(" "),a("p",[t._v("cpu列：该列显示某一核cpu的使用情况，各字段含义可参照CPU列，各字段值相加结果为100%")]),t._v(" "),a("p",[a("strong",[t._v("CPL列")]),t._v("：该列显示CPU负载情况")]),t._v(" "),a("ul",[a("li",[t._v("avg1、avg5和avg15字段：过去1分钟、5分钟和15分钟内运行队列中的平均进程数量")]),t._v(" "),a("li",[t._v("csw字段指示上下文交换次数")]),t._v(" "),a("li",[t._v("intr字段指示中断发生次数")])]),t._v(" "),a("p",[a("strong",[t._v("MEM列")]),t._v("：该列指示内存的使用情况")]),t._v(" "),a("ul",[a("li",[t._v("tot字段指示物理内存总量")]),t._v(" "),a("li",[t._v("free字段指示空闲内存的大小")]),t._v(" "),a("li",[t._v("cache字段指示用于页缓存的内存大小")]),t._v(" "),a("li",[t._v("buff字段指示用于文件缓存的内存大小")]),t._v(" "),a("li",[t._v("slab字段指示系统内核占用的内存大小")])]),t._v(" "),a("p",[a("strong",[t._v("SWP列")]),t._v("：该列指示交换空间的使用情况")]),t._v(" "),a("ul",[a("li",[t._v("tot字段指示交换区总量")]),t._v(" "),a("li",[t._v("free字段指示空闲交换空间大小")])]),t._v(" "),a("p",[a("strong",[t._v("PAG列")]),t._v("：该列指示虚拟内存分页情况")]),t._v(" "),a("p",[t._v("swin、swout字段：换入和换出内存页数")]),t._v(" "),a("p",[a("strong",[t._v("DSK列")]),t._v("：该列指示磁盘使用情况，每一个磁盘设备对应一列，如果有sdb设备，那么增多一列DSK信息")]),t._v(" "),a("ul",[a("li",[t._v("sda字段：磁盘设备标识")]),t._v(" "),a("li",[t._v("busy字段：磁盘忙时比例")]),t._v(" "),a("li",[t._v("read、write字段：读、写请求数量")])]),t._v(" "),a("p",[a("strong",[t._v("NET列")]),t._v("：多列NET展示了网络状况，包括传输层(TCP和UDP)、IP层以及各活动的网口信息")]),t._v(" "),a("ul",[a("li",[t._v("XXXi  字段指示各层或活动网口收包数目")]),t._v(" "),a("li",[t._v("XXXo 字段指示各层或活动网口发包数目")])]),t._v(" "),a("h2",{attrs:{id:"atop日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atop日志"}},[t._v("#")]),t._v(" atop日志")]),t._v(" "),a("p",[t._v('每个时间点采样页面组合起来就形成了一个atop日志文件，我们可以使用"atop -r XXX"命令对日志文件进行查看。那以什么形式保存atop日志文件呢？')]),t._v(" "),a("p",[t._v("对于atop日志文件的保存方式，我们可以这样：")]),t._v(" "),a("ul",[a("li",[t._v("每天保存一个atop日志文件，该日志文件记录当天信息")]),t._v(" "),a("li",[t._v('日志文件以"atop_YYYYMMDD"的方式命名')]),t._v(" "),a("li",[t._v("设定日志失效期限，自动删除一段时间前的日志文件")])]),t._v(" "),a("p",[t._v("其实atop开发者已经提供了以上日志保存方式，相应的atop.daily脚本可以在源码目录下找到。在atop.daily脚本中，我们可以通过修改INTERVAL变量改变atop信息采样周期(默认为10分钟)；通过修改以下命令中的数值改变日志保存天数(默认为28天)：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sleep "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LOGPATH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atop_*'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-mtime")]),t._v(" +28 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" \n")])])]),a("p",[t._v("最后，我们修改cron文件，每天凌晨执行atop.daily脚本：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" * * * root /etc/cron.daily/atop.daily\n")])])]),a("h2",{attrs:{id:"相关资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关资料"}},[t._v("#")]),t._v(" 相关资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.atoptool.nl/download/man_atop-1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方手册"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);