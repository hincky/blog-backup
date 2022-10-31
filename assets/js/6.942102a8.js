(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,a,s){t.exports=s.p+"assets/img/pod-map.b64987e3.png"},304:function(t,a,s){t.exports=s.p+"assets/img/pod-k8s-map.6513ad14.png"},305:function(t,a,s){t.exports=s.p+"assets/img/pod-structure.088ff1ee.png"},369:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod"}},[t._v("#")]),t._v(" pod")]),t._v(" "),a("p",[t._v("是 Kubernetes 项目的原子调度单位，如果k8s是操作系统，那pod就是虚拟机。")]),t._v(" "),a("p",[t._v("下图是由pod发散的k8s重要 API 对象，比如配置信息 ConfigMap、离线作业 Job、多实例部署 Deployment 等等，它们都分别对应到现实中的各种实际运维需求\n"),a("img",{attrs:{src:s(303),alt:""}})]),t._v(" "),a("p",[t._v("下面这个是更直观的pod为中心的k8s对象关系图")]),t._v(" "),a("p",[a("img",{attrs:{src:s(304),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"pod-组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-组成"}},[t._v("#")]),t._v(" pod 组成")]),t._v(" "),a("p",[t._v("pod里能运行多个容器，"),a("strong",[t._v("多个容器共享同一个网络，还可以声明共享同一个volume。")])]),t._v(" "),a("p",[t._v("每个pod都运行一个Pause的基础容器，用作共享网络和挂载卷；其他容器都以业务容器，共享pause容器的网络和挂载。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(305),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"开发容器网络插件的注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发容器网络插件的注意点"}},[t._v("#")]),t._v(" 开发容器网络插件的注意点")]),t._v(" "),a("p",[t._v("如果要为 Kubernetes 开发一个网络插件时，不是关注每一个用户容器如何使用你的网络配置，这是没有意义的。")]),t._v(" "),a("p",[t._v("应该重点考虑的是如何配置这个 Pod 的 "),a("code",[t._v("Network Namespace")]),t._v("。")]),t._v(" "),a("p",[t._v("如果你的网络插件需要在容器里安装某些包或者配置才能完成的话，是不可取的：Infra 容器镜像的 rootfs 里几乎什么都没有，没有你随意发挥的空间。")]),t._v(" "),a("p",[t._v("当然，这同时也意味着你的网络插件完全不必关心用户容器的启动与否，而只需要关注如何配置 Pod，也就是 Infra 容器的 Network Namespace 即可。")]),t._v(" "),a("h2",{attrs:{id:"如何共享volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何共享volume"}},[t._v("#")]),t._v(" 如何共享volume")]),t._v(" "),a("p",[t._v("Kubernetes 项目只要把所有 "),a("code",[t._v("Volume")]),t._v(" 的定义都"),a("strong",[t._v("设计在 Pod 层级")]),t._v("即可。")]),t._v(" "),a("p",[t._v("在Pod里面，定义所有的volume")]),t._v(" "),a("p",[t._v("一个 Volume 对应的宿主机目录对于 Pod 来说就只有一个，Pod 里的容器只要声明挂载这个 Volume，就一定可以共享这个 Volume 对应的宿主机目录")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("containers\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restartPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Never\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      \n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/share/nginx/html\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debian\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/sh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo Hello from the debian container > /pod-data/index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("这个pod里面有两个容器 debian-container 和 nginx-container")]),t._v(" "),a("p",[t._v("pod声明挂载了 shared-data 这个 hostPath 类型的Volume，hostPath对应在宿主机上的目录就是：/data")]),t._v(" "),a("p",[t._v("而两个容器都绑定挂载了 shared-data ，即nginx-container 的/usr/share/nginx/html 和debian-container 的/pod-data 实际是同一个目录")]),t._v(" "),a("p",[t._v("因此，nginx-container 可以从它的 /usr/share/nginx/html 目录中，读取到 debian-container 生成的 index.html 文件")])])}),[],!1,null,null,null);a.default=e.exports}}]);