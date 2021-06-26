(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{832:function(t,s,a){"use strict";a.r(s);var r=a(42),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"linux命令之重定向-、-、-1-、-2-、-1-、-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux命令之重定向-、-、-1-、-2-、-1-、-2"}},[t._v("#")]),t._v(" Linux命令之重定向 >、 >>、 1>、 2>、 1>>、 2>>")]),t._v(" "),a("ol",[a("li",[t._v("> 和 >>")])]),t._v(" "),a("p",[t._v("这两个区别在于 "),a("strong",[a("code",[t._v("\\>")]),t._v("是重定向到一个文件，"),a("code",[t._v(">>")]),t._v("是追加内容到一个文件")]),t._v("。如果文件不存在，那么这两个命令都会首先创建这个文件。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" test.log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" test.log\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" test.log\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("1> 和 2>")])]),t._v(" "),a("p",[t._v("他们两个用于将一个文件正确的输出，和错误的输出分开保存。")]),t._v(" "),a("p",[a("strong",[t._v("1> 将正确的输出重定向到某个文件")])]),t._v(" "),a("p",[a("strong",[t._v("2> 将错误的输出重定向到某个文件")])]),t._v(" "),a("p",[a("strong",[t._v("将错误输出和正确输出保存到同一个文件")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" a.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" \n或者：command "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("1>> 和 2>>")])]),t._v(" "),a("p",[t._v("同理1>>, 2>>其实也就是追加数据到文件中，和前面介绍的>>没有什么不同，需要提到的一点是，如果我们"),a("strong",[t._v("想将错误的和正确的信息重定向追加到同一个文件")]),t._v("应该怎么做呢？你可能会想到"),a("code",[t._v("2>>&1")]),t._v("。")]),t._v(" "),a("p",[t._v("然而现实是，并没有这个语法。 然而我们却可以使用"),a("code",[t._v("1>> a.txt 2>&1")]),t._v("的语法实现这个功能，比如：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">>")]),t._v(" a.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" \n")])])]),a("p",[t._v("看似1>, 1>>, 2>, 2>>是相一一对应的，但是其实不是，他们可以混用，比方说"),a("strong",[t._v("正确的结果想追加，错误的结果我想覆盖")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">>")]),t._v(" right.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" wrong.txt \n")])])]),a("p",[t._v("如果我们想"),a("strong",[t._v("保存正确的结果，错误的结果直接丢向垃圾站，既不保存为文件，也不在标准输出打印")]),t._v("又该怎么做呢？")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">>")]),t._v(" right.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" /dev/null \n")])])]),a("p",[t._v("直接将错误输出重定向到"),a("code",[t._v("/dev/null")]),t._v("就好了，他好像就是一个无底洞，丢进去的东西就不见了。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("<")])]),t._v(" "),a("p",[t._v("< 可以将原本由标准输入改为由指定地方输入。")])])}),[],!1,null,null,null);s.default=e.exports}}]);