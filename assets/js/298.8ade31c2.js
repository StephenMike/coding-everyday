(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{908:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#1-pathresolve%E5%92%8Cpathjoin%E7%9A%84%E5%8C%BA%E5%88%AB"}},[t._v("1. path.resolve和path.join的区别")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#11-%E5%8C%BA%E5%88%AB"}},[t._v("1.1. 区别")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#12-pathjoin"}},[t._v("1.2. path.join()")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#13-pathresolve"}},[t._v("1.3. path.resolve()")])])])])]),t._v(" "),s("h2",{attrs:{id:"_1-path-resolve和path-join的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-path-resolve和path-join的区别"}},[t._v("#")]),t._v(" 1. path.resolve和path.join的区别")]),t._v(" "),s("h3",{attrs:{id:"_1-1-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-区别"}},[t._v("#")]),t._v(" 1.1. 区别")]),t._v(" "),s("p",[s("strong",[t._v("path.join只是简单的将路径片段进行拼接")]),t._v("，并规范化生成一个路径，而p"),s("strong",[t._v("ath.resolve则一定会生成一个绝对路径，相当于执行cd操作")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_1-2-path-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-path-join"}},[t._v("#")]),t._v(" 1.2. path.join()")]),t._v(" "),s("ul",[s("li",[t._v("path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。")]),t._v(" "),s("li",[t._v("长度为零的 path 片段会被忽略。 如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录。")]),t._v(" "),s("li",[t._v('注意：如果路径中出现".."，那么它前面的路径片段将被丢失。')])]),t._v(" "),s("p",[t._v("“平台特定的分隔符”：")]),t._v(" "),s("ul",[s("li",[t._v('windows下文件路径分隔符使用的是"\\"')]),t._v(" "),s("li",[t._v('Linux下文件路径分隔符使用的是"/"')])]),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz/asdf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quux'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'..'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回: '/foo/bar/baz/asdf'")]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-3-path-resolve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-path-resolve"}},[t._v("#")]),t._v(" 1.3. path.resolve()")]),t._v(" "),s("ul",[s("li",[t._v("path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。")]),t._v(" "),s("li",[t._v("给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。")]),t._v(" "),s("li",[s("strong",[t._v("如果处理完全部给定的 path 片段后还未生成一个绝对路径，则当前工作目录会被用上")]),t._v("。")]),t._v(" "),s("li",[s("strong",[t._v("生成的路径是规范化后的，且末尾的斜杠会被删除，除非路径被解析为根目录")]),t._v("。")]),t._v(" "),s("li",[t._v("长度为零的 path 片段会被忽略。")]),t._v(" "),s("li",[t._v("如果没有传入 path 片段，则 path.resolve() 会返回当前工作目录的绝对路径。")])]),t._v(" "),s("p",[t._v("举例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo/bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./baz'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回: '/foo/bar/baz'")]),t._v("\n\npath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo/bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp/file/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回: '/tmp/file'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是path.join的话，就会返回/foo/bar/tmp/file")]),t._v("\n\npath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wwwroot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static_files/png/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../gif/image.gif'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前工作目录为 /home/myself/node，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);