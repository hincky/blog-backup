(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(s,t,a){s.exports=a.p+"assets/img/service.94dfffa5.png"},240:function(s,t,a){s.exports=a.p+"assets/img/ingress-service-ingressclass.78c0fa53.png"},278:function(s,t,a){s.exports=a.p+"assets/img/nginx-ingress-controller.cb1e8cc8.png"},279:function(s,t,a){s.exports=a.p+"assets/img/ingress-class.78935c40.png"},280:function(s,t,a){s.exports=a.p+"assets/img/ingressController-ingress-service-ingressClass.1f113d20.png"},362:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ingress-集群的流量出入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ingress-集群的流量出入口"}},[s._v("#")]),s._v(" ingress:集群的流量出入口")]),s._v(" "),t("blockquote",[t("p",[s._v("本节三个重要角色：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ingress")])]),s._v(" "),t("li",[t("code",[s._v("ingress class")])]),s._v(" "),t("li",[t("code",[s._v("ingress controller")])])]),s._v(" "),t("h2",{attrs:{id:"为什么要有ingress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有ingress"}},[s._v("#")]),s._v(" 为什么要有ingress")]),s._v(" "),t("h3",{attrs:{id:"路由访问角度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由访问角度"}},[s._v("#")]),s._v(" 路由访问角度")]),s._v(" "),t("p",[s._v("service适合进群内部的相互访问，如果要对外暴露，只能走两条路：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("NodePort")])]),s._v(" "),t("li",[t("code",[s._v("LoadBalancer")])])]),s._v(" "),t("p",[s._v("不够灵活，不能根据"),t("code",[s._v("url/文件路径/")]),s._v("来定制负载")]),s._v(" "),t("h3",{attrs:{id:"负载角度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负载角度"}},[s._v("#")]),s._v(" 负载角度")]),s._v(" "),t("p",[s._v("由于service本质上是一个由 "),t("code",[s._v("kube-proxy")]),s._v(" 控制的四层负载均衡，在 "),t("code",[s._v("TCP/IP")]),s._v(" 协议栈上转发流量，只能够依据 IP 地址和端口号做一些简单的判断和组合：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(239),alt:""}})]),s._v(" "),t("p",[s._v("而跑在七层的 "),t("code",[s._v("HTTP/HTTPS")]),s._v(" 协议上的，有更多的高级路由条件，比如主机名、URI、请求头、证书等等。")]),s._v(" "),t("p",[s._v("而这些在 "),t("code",[s._v("TCP/IP")]),s._v(" 网络栈里是根本看不见的，因此"),t("code",[s._v("service")]),s._v("并不能完全解决网络流量的管理问题。")]),s._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("综合以上两点，所以k8s需要新的API对象："),t("code",[s._v("ingress")]),s._v("，来作为七层的负载均衡")]),s._v(" "),t("h2",{attrs:{id:"为什么要有ingress-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有ingress-controller"}},[s._v("#")]),s._v(" 为什么要有ingress controller")]),s._v(" "),t("p",[s._v("类比"),t("code",[s._v("Service")]),s._v("，"),t("code",[s._v("Ingress")]),s._v(" 也只是一些 HTTP 路由规则（用 "),t("code",[s._v("HTTP/HTTPS")]),s._v(" 协议定义流量应该如何分配、转发）的集合，相当于一份静态的描述文件。")]),s._v(" "),t("p",[t("code",[s._v("Ingress Controller")]),s._v("才是真正把这些规则在集群里实施运行，它的作用就相当于 "),t("code",[s._v("Service")]),s._v(" 的 "),t("code",[s._v("kube-proxy")]),s._v("，能够读取、应用 "),t("code",[s._v("Ingress")]),s._v(" 规则，处理、调度流量。")]),s._v(" "),t("blockquote",[t("p",[s._v("下表是k8s中API对象的对应关系")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[s._v("规则")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("读取，调度，应用规则")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("service")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("kube-proxy")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("ingress")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("ingress controller")])])])]),s._v(" "),t("p",[s._v("然而因为"),t("code",[s._v("Ingress Controller")]),s._v("要做的事情太多，与上层业务联系太密切。")]),s._v(" "),t("p",[s._v("所以k8s没有将"),t("code",[s._v("Ingress Controller")]),s._v("内置成API对象，反而把"),t("code",[s._v("Ingress Controller")]),s._v("的实现交给社区")]),s._v(" "),t("p",[s._v("其中最富盛名的就是下图的"),t("code",[s._v("Nginx Ingress Controller")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(278),alt:""}})]),s._v(" "),t("p",[s._v("nic可以将ingress对象转化成Nginx的配置文件并使之生效")]),s._v(" "),t("h2",{attrs:{id:"为什么要有-ingress-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-ingress-class"}},[s._v("#")]),s._v(" 为什么要有 ingress class")]),s._v(" "),t("p",[s._v("随着 "),t("code",[s._v("Ingress")]),s._v(" 规则太多，都交给一个 "),t("code",[s._v("Ingress Controller")]),s._v(" 处理会让它不堪重负:")]),s._v(" "),t("ol",[t("li",[s._v("多个 Ingress 对象没有很好的逻辑分组方式，管理和维护成本很高；")]),s._v(" "),t("li",[s._v("集群里有不同的租户，他们对 Ingress 的需求差异很大甚至有冲突，无法部署在同一个 Ingress Controller 上。")])]),s._v(" "),t("p",[s._v("基于缓存思维：“一层不行就再加一层” 的原则")]),s._v(" "),t("p",[s._v("于是提出"),t("code",[s._v("Ingress Class")]),s._v("的概念，夹在前面两者之间，作为解耦强绑定的中间层。")]),s._v(" "),t("p",[s._v("K8s 用户可以转向管理 "),t("code",[s._v("Ingress Class")]),s._v("，用它来定义不同的业务逻辑分组，简化 "),t("code",[s._v("Ingress")]),s._v(" 规则的复杂度。比如说，我们可以用 "),t("code",[s._v("Ingress Class A")]),s._v(" 处理博客流量、"),t("code",[s._v("Ingress Class B")]),s._v(" 处理短视频流量、"),t("code",[s._v("Ingress Class C")]),s._v(" 处理购物流量。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(279),alt:""}})]),s._v(" "),t("h2",{attrs:{id:"如何用yaml编写ingress-ingress-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何用yaml编写ingress-ingress-class"}},[s._v("#")]),s._v(" 如何用yaml编写ingress，ingress class")]),s._v(" "),t("p",[s._v("像之前学习 "),t("code",[s._v("Deployment")]),s._v("、"),t("code",[s._v("Service")]),s._v(" 对象一样，首先用命令 "),t("code",[s._v("kubectl api-resources")]),s._v(" 查看它们的基本信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl api-resources "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ingress\n")])])]),t("p",[s._v("打印结果")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl api-resources | grep ingress")]),s._v("\nNAME                SHORTNAMES      APIVERSION          NAMESPACED     KIND\ningressclasses                   networking.k8s.io/v1     "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("       IngressClass\ningresses               ing      networking.k8s.io/v1     "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("        Ingress\n")])])]),t("p",[t("code",[s._v("ingress")]),s._v("的简写是"),t("code",[s._v("ing")]),s._v("，两者的版本都是"),t("code",[s._v("networking.k8s.io/v1")])]),s._v(" "),t("p",[s._v("没有"),t("code",[s._v("Ingress Controller")]),s._v("是因为它和其他两个对象不太一样")]),s._v(" "),t("p",[s._v("它不只是描述文件，是一个要实际干活、处理流量的应用程序。")]),s._v(" "),t("p",[s._v("而应用程序在 K8s 里早就有对象来管理了，那就是 "),t("code",[s._v("Deployment")]),s._v(" 和 "),t("code",[s._v("DaemonSet")])]),s._v(" "),t("p",[s._v("所以我们只需要再学习 "),t("code",[s._v("Ingress")]),s._v(" 和 "),t("code",[s._v("Ingress Class")]),s._v(" 的用法就可以了。")]),s._v(" "),t("h3",{attrs:{id:"ingress-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ingress-yml"}},[s._v("#")]),s._v(" ingress.yml")]),s._v(" "),t("h4",{attrs:{id:"创建模板yaml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建模板yaml"}},[s._v("#")]),s._v(" 创建模板yaml")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("kubectl create")]),s._v(" 来创建模板文件，需要加两个参数：")]),s._v(" "),t("ul",[t("li",[s._v("--class，指定 Ingress 从属的 Ingress Class 对象。")]),s._v(" "),t("li",[s._v("--rule，指定路由规则，基本形式是“URI=Service”，也就是说是访问 HTTP 路径就转发到对应的 Service 对象，再由 Service 对象转发给后端的 Pod。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("out")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--dry-run=client -o yaml"')]),s._v("\nkubectl create ing ngx-ing "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rule")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ngx.test/=ngx-svc:80"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ngx-ink "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$out")]),s._v("\n")])])]),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ingress\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ing\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ingressClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ink  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对应参数 --class=ngx-ink ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx.test  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#对应参数 --rule="ngx.test/=ngx-svc:80"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pathType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Exact\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# --rule="ngx.test/=ngx-svc:80"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# --rule="ngx.test/=ngx-svc:80"')]),s._v("\n")])])]),t("h3",{attrs:{id:"ingress-class-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ingress-class-yml"}},[s._v("#")]),s._v(" ingress-class.yml")]),s._v(" "),t("p",[t("code",[s._v("ingress class")]),s._v("只是起到联系 "),t("code",[s._v("Ingress")]),s._v(" 和 "),t("code",[s._v("Ingress Controller")]),s._v(" 的作用。")]),s._v(" "),t("p",[s._v("所以它的定义非常简单，在“spec”里只有一个必需的字段“controller”，表示要使用哪个 Ingress Controller，具体的名字就要看实现文档了。")]),s._v(" "),t("p",[s._v("比如nginx的"),t("code",[s._v("IngressClass")]),s._v("，就要在"),t("code",[s._v("spec")]),s._v("里面标明"),t("code",[s._v("nginx.org/ingress-controller")])]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IngressClass\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ink\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("controller")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx.org/ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("controller\n")])])]),t("p",[s._v("下图是"),t("code",[s._v("Ingress")]),s._v("，"),t("code",[s._v("ingress class")]),s._v("，"),t("code",[s._v("service")]),s._v(" yaml文件的对应关系")]),s._v(" "),t("p",[t("img",{attrs:{src:a(240),alt:""}})]),s._v(" "),t("p",[s._v("由于"),t("code",[s._v("ingress class")]),s._v("的yaml文件比较小，因此将其和"),t("code",[s._v("ingress")]),s._v("的yaml合并为单个"),t("code",[s._v("ingress.yml")]),s._v("方便使用")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ingress\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ing\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ingressClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ink  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对应参数 --class=ngx-ink ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx.test  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#对应参数 --rule="ngx.test/=ngx-svc:80"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pathType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Exact\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# --rule="ngx.test/=ngx-svc:80"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# --rule="ngx.test/=ngx-svc:80"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IngressClass\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ink\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("controller")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx.org/ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("controller\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])])]),t("h2",{attrs:{id:"在k8s中使用ingress-ingress-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在k8s中使用ingress-ingress-class"}},[s._v("#")]),s._v(" 在k8s中使用ingress，ingress class")]),s._v(" "),t("h2",{attrs:{id:"在k8s中使用ingress-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在k8s中使用ingress-controller"}},[s._v("#")]),s._v(" 在k8s中使用ingress controller")]),s._v(" "),t("p",[s._v("ic本质上是一个pod，所以支持deployment和daemonSet两种方式部署到k8s上面。")]),s._v(" "),t("p",[s._v("所以部署步骤")]),s._v(" "),t("ol",[t("li",[s._v("给ic创建namespace")]),s._v(" "),t("li",[s._v("deployment部署ic的pod")]),s._v(" "),t("li",[s._v("service对外暴露ic的pod，以供访问")])]),s._v(" "),t("p",[s._v("最后贴出ic，ingress，ingressClass，service的对应关系图")]),s._v(" "),t("p",[t("img",{attrs:{src:a(280),alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);