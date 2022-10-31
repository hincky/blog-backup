(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{707:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mount"}},[a._v("#")]),a._v(" mount")]),a._v(" "),t("p",[a._v("用于挂载Linux系统外的文件")]),a._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),t("p",[t("strong",[a._v("mount命令")]),a._v(" Linux mount命令是经常会使用到的命令，它用于挂载Linux系统外的文件。")]),a._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-hV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-fFnrsvw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-t vfstype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-fnrsvw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o options "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" device "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-fnrsvw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-t vfstype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" device "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v("\n")])])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-V：显示程序版本\n-h：显示辅助讯息\n-v：显示较讯息，通常和 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" 用来除错。\n-a：将 /etc/fstab 中定义的所有档案系统挂上。\n-F：这个命令通常和 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" 一起使用，它会为每一个 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" 的动作产生一个行程负责执行。在系统需要挂上大量 NFS 档案系统时可以加快挂上的动作。\n-f：通常用在除错的用途。它会使 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" 并不执行实际挂上的动作，而是模拟整个挂上的过程。通常会和 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" 一起使用。\n-n：一般而言，mount 在挂上后会在 /etc/mtab 中写入一笔资料。但在系统中没有可写入档案系统存在的情况下可以用这个选项取消这个动作。\n-s-r：等于 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ro\n-w：等于 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" rw\n-L：将含有特定标签的硬盘分割挂上。\n-U：将档案分割序号为 的档案系统挂下。-L 和 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-U")]),a._v(" 必须在/proc/partition 这种档案存在时才有意义。\n-t：指定档案系统的型态，通常不必指定。mount 会自动选择正确的型态。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" async：打开非同步模式，所有的档案读写动作都会用非同步模式执行。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" sync：在同步模式下执行。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" atime、-o noatime：当 atime 打开时，系统会在每次读取档案时更新档案的『上一次调用时间』。当我们使用 flash 档案系统时可能会选项把这个选项关闭以减少写入的次数。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" auto、-o noauto：打开/关闭自动挂上模式。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" defaults:使用预设的选项 rw, suid, dev, exec, auto, nouser, and async.\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" dev、-o nodev-o exec、-o noexec允许执行档被执行。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" suid、-o nosuid：\n允许执行档在 root 权限下执行。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" user、-o nouser：使用者可以执行 mount/umount 的动作。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" remount：将一个已经挂下的档案系统重新用不同的方式挂上。例如原先是唯读的系统，现在用可读写的模式重新挂上。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ro：用唯读模式挂上。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" rw：用可读写模式挂上。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("loop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("：使用 loop 模式用来将一个档案当成硬盘分割挂上系统。\n")])])]),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),t("p",[a._v("将 "),t("code",[a._v("/dev/hda1")]),a._v(" 挂在 "),t("code",[a._v("/mnt")]),a._v(" 之下。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#mount /dev/hda1 /mnt")]),a._v("\n")])])]),t("p",[a._v("将 "),t("code",[a._v("/dev/hda1")]),a._v(" 用唯读模式挂在 "),t("code",[a._v("/mnt")]),a._v(" 之下。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#mount -o ro /dev/hda1 /mnt")]),a._v("\n")])])]),t("p",[a._v("将 "),t("code",[a._v("/tmp/image.iso")]),a._v(" 这个光碟的 "),t("code",[a._v("image")]),a._v(" 档使用 "),t("code",[a._v("loop")]),a._v(" 模式挂在 "),t("code",[a._v("/mnt/cdrom")]),a._v(" 之下。用这种方法可以将一般网络上可以找到的 "),t("code",[a._v("Linux")]),a._v(" 光 碟 ISO 档在不烧录成光碟的情况下检视其内容。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#mount -o loop /tmp/image.iso /mnt/cdrom")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);