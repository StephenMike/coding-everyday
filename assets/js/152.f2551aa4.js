(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{752:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#1-babelpreset-env"}},[t._v("1. "),a("code",[t._v("@babel/preset-env")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2-babelpolyfill-"}},[t._v("2. "),a("code",[t._v("@babel/polyfill")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-babel-preset-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-babel-preset-env"}},[t._v("#")]),t._v(" 1. "),a("code",[t._v("@babel/preset-env")])]),t._v(" "),a("p",[a("code",[t._v("@babel/preset-env")]),t._v("这个包官方说是智能预设，怎么智能了，你"),a("strong",[t._v("只要给出一个浏览器的版本号，就知道哪些语法要转，哪些语法不要转")]),t._v("。可以有效的"),a("strong",[t._v("避免把不需要转换的语法也转换了，浪费性能")]),t._v("，浏览器都有这个语法，再加个转换就没必要了。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v(".babelrc")]),t._v("文件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"targets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"58"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ie"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("所以官方不建议以这种方式使用预设环境，因为它没有利用针对特定浏览器的功能。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你以为这样就完了吗，然后并不是，重要的是要注意，"),a("code",[t._v("@babel/preset-env")]),t._v("不支持"),a("code",[t._v("stage-x")]),t._v("插件。与之相比，"),a("code",[t._v("stage-x")]),t._v("直接被删了。这是因为 babel 团队认为为这些 “不稳定的草案” 花费精力去更新 preset 相当浪费。")]),t._v(" "),a("h3",{attrs:{id:"_2-babel-polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-babel-polyfill"}},[t._v("#")]),t._v(" 2. "),a("code",[t._v("@babel/polyfill")])]),t._v(" "),a("p",[t._v("@babel/polyfill 是对 core-js 的封装，引用了 core-js 的内容和生成器（regenerator-runtime)。 v7.4 之后，这个仓库就被废弃了，希望用户自己选择使用哪个兼容库。")]),t._v(" "),a("p",[t._v("换言之，以前：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/polyfill"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("需要被替换成")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"core-js/stable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regenerator-runtime/runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("不过我不建议这么做。对于绝大部分情况，使用 "),a("code",[t._v("@babel/preset-env")]),t._v(" + "),a("code",[t._v("useBuiltIns: 'usage'")]),t._v(" 仍然是最好的选择。")]),t._v(" "),a("p",[t._v("参考资料：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.babeljs.cn/docs/babel-preset-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel 官方文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/wuxianqiang/p/11339462.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel需要这样配置"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);