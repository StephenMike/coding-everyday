(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{751:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#1-babel%E5%B7%A5%E4%BD%9C%E6%B5%81"}},[s._v("1. babel工作流")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-ast"}},[s._v("1.1. AST")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#12-babel-%E5%A4%A7%E6%A6%82%E5%88%86%E4%B8%BA%E4%B8%89%E5%A4%A7%E9%83%A8%E5%88%86"}},[s._v("1.2. Babel 大概分为三大部分:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#121-%E6%96%87%E6%9C%AC-----ast%E8%A7%A3%E6%9E%90%E7%9A%84%E8%BF%87%E7%A8%8B%E4%B8%AD%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%85%B3%E9%94%AE%E6%AD%A5%E9%AA%A4"}},[s._v("1.2.1. "),a("code",[s._v("文本 ---\x3e AST")]),s._v("(解析)的过程中有两个关键步骤:")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#122-%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90tokenizer----%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%99%A8"}},[s._v("1.2.2. 词法分析(Tokenizer -- 词法分析器)")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#123-%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90"}},[s._v("1.2.3. 语法分析")])])])]),s._v(" "),a("li",[a("a",{attrs:{href:"#13-%E5%A6%82%E4%BD%95%E8%BD%AC%E6%8D%A2%E4%BB%A3%E7%A0%81"}},[s._v("1.3. 如何转换代码?")])])])]),s._v(" "),a("li",[a("a",{attrs:{href:"#2-toolings"}},[s._v("2. Toolings")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#3-plugins"}},[s._v("3. Plugins")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#4-presets"}},[s._v("4. Presets")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#5-polyfills"}},[s._v("5. Polyfills")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#6-babel7%E5%81%9A%E7%9A%84%E6%9B%B4%E6%96%B0"}},[s._v("6. babel7做的更新")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#7-babel%E5%B0%86ecmascript-2015-%E7%89%88%E6%9C%AC%E7%9A%84%E4%BB%A3%E7%A0%81%E5%88%86%E4%B8%BA%E4%BA%86%E4%B8%A4%E7%A7%8D%E6%83%85%E5%86%B5%E5%A4%84%E7%90%86"}},[s._v("7. babel将"),a("code",[s._v("ECMAScript 2015+")]),s._v(" 版本的代码分为了两种情况处理：")])])]),s._v(" "),a("h3",{attrs:{id:"_1-babel工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-babel工作流"}},[s._v("#")]),s._v(" 1. babel工作流")]),s._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[s._v("输入字符串 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("parser parser "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" transformer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("generator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" 输出字符串\n")])])]),a("h4",{attrs:{id:"_1-1-ast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ast"}},[s._v("#")]),s._v(" 1.1. AST")]),s._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("抽象语法树（"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" syntax tree或者缩写为AST），或者语法树（syntax tree），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。\n\n和抽象语法树相对的是具体语法树（concrete syntaxtree），通常称作分析树（parse tree）。\n\n一般的，在源代码的翻译和编译过程中，语法分析器创建出分析树。一旦AST被创建出来，在后续的处理过程中，比如语义分析阶段，会添加一些信息。\n")])])]),a("ol",[a("li",[a("a",{attrs:{href:"http://esprima.org/demo/parse.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("AST示例"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("AST Explorer"),a("OutboundLink")],1)])]),s._v(" "),a("h4",{attrs:{id:"_1-2-babel-大概分为三大部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-babel-大概分为三大部分"}},[s._v("#")]),s._v(" 1.2. Babel 大概分为三大部分:")]),s._v(" "),a("ol",[a("li",[s._v("解析: 将代码(其实就是字符串)转换成 "),a("code",[s._v("AST")]),s._v("( 抽象语法树)")]),s._v(" "),a("li",[s._v("转换: 访问 "),a("code",[s._v("AST")]),s._v(" 的节点进行变换操作生成新的 "),a("code",[s._v("AST")])]),s._v(" "),a("li",[s._v("生成: 以新的 "),a("code",[s._v("AST")]),s._v(" 为基础生成代码")])]),s._v(" "),a("h5",{attrs:{id:"_1-2-1-文本-ast-解析-的过程中有两个关键步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-文本-ast-解析-的过程中有两个关键步骤"}},[s._v("#")]),s._v(" 1.2.1. "),a("code",[s._v("文本 ---\x3e AST")]),s._v("(解析)的过程中有两个关键步骤:")]),s._v(" "),a("ol",[a("li",[s._v("词法分析: 将代码(字符串)分割为 "),a("code",[s._v("token")]),s._v(" 流，即语法单元成的数组")]),s._v(" "),a("li",[s._v("语法分析: 分析 "),a("code",[s._v("token")]),s._v(" 流(上面生成的数组)并生成 "),a("code",[s._v("AST")])])]),s._v(" "),a("h5",{attrs:{id:"_1-2-2-词法分析-tokenizer-词法分析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-词法分析-tokenizer-词法分析器"}},[s._v("#")]),s._v(" 1.2.2. 词法分析(Tokenizer -- 词法分析器)")]),s._v(" "),a("p",[s._v("要做词法分析,首先我们需要明白在 JavaScript 中哪些属于语法单元")]),s._v(" "),a("ul",[a("li",[s._v("数字：JavaScript 中的科学记数法以及普通数组都属于语法单元.")]),s._v(" "),a("li",[s._v("括号："),a("code",[s._v("()")]),s._v("只要出现,不管任何意义都算是语法单元")]),s._v(" "),a("li",[s._v("标识符：连续字符,常见的有变量,常量(例如: null true)，关键字(if break)等等")]),s._v(" "),a("li",[s._v("运算符："),a("code",[s._v("+、-、*、/")]),s._v("等等")]),s._v(" "),a("li",[s._v("当然还有注释,中括号等")])]),s._v(" "),a("blockquote",[a("p",[s._v("在我们 parser 的过程中,应该换一个角度看待代码,我们平时工作用的代码.本质是就是字符串或者一段文本,它没有任何意义,是 JavaScript 引擎赋予了它意义,所以我们在解析过程中代码只是一段字符串.")])]),s._v(" "),a("h5",{attrs:{id:"_1-2-3-语法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-语法分析"}},[s._v("#")]),s._v(" 1.2.3. 语法分析")]),s._v(" "),a("p",[s._v("语法分析要比词法分析复杂得多")]),s._v(" "),a("h4",{attrs:{id:"_1-3-如何转换代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-如何转换代码"}},[s._v("#")]),s._v(" 1.3. 如何转换代码?")]),s._v(" "),a("p",[s._v("在 Babel 中我们使用者最常使用的地方就是代码转换，大家常用的 Babel 插件就是定义代码转换规则而生的，而代码解析和生成这一头一尾都主要是 Babel 负责。")]),s._v(" "),a("p",[s._v("前端可以利用编译原理相关的东西还有很多，除了我们常见的es6转换工具 "),a("code",[s._v("babel")]),s._v("，代码检测的 "),a("code",[s._v("eslint")]),s._v("等等。")]),s._v(" "),a("h3",{attrs:{id:"_2-toolings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-toolings"}},[s._v("#")]),s._v(" 2. Toolings")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("@babel/parser")]),s._v(" 将源代码解析成 AST。")]),s._v(" "),a("li",[a("code",[s._v("@babel/generator")]),s._v(" 将AST解码生 js代码。")]),s._v(" "),a("li",[a("code",[s._v("@babel/core")]),s._v(" 包括了整个babel工作流，也就是说在@babel/core里面我们会使用到"),a("code",[s._v("@babel/parser")]),s._v("、"),a("code",[s._v("transformer[s]")]),s._v("、以及"),a("code",[s._v("@babel/generator")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("@babel/code-frame")]),s._v(" 用于生成错误信息并且打印出错误原因和错误行数。（其实就是个console工具类）")]),s._v(" "),a("li",[a("code",[s._v("@babel/helpers")]),s._v(" 也是工具类，提供了一些内置的函数实现，主要用于babel插件的开发。")]),s._v(" "),a("li",[a("code",[s._v("@babel/runtime")]),s._v(" 也是工具类，但是是为了babel编译时提供一些基础工具库。作用于"),a("code",[s._v("transformer[s]")]),s._v("阶段，当然这是一个工具库，如果要使用这个工具库，还需要引入"),a("code",[s._v("@babel/plugin-transform-runtime")]),s._v("，它才是"),a("code",[s._v("transformer[s]")]),s._v("阶段里面的主角。")]),s._v(" "),a("li",[a("code",[s._v("@babel/template")]),s._v(" 也是工具类，主要用途是为"),a("code",[s._v("parser")]),s._v("提供模板引擎，更加快速的转化成AST")]),s._v(" "),a("li",[a("code",[s._v("@babel/traverse")]),s._v(" 也是工具类，主要用途是来便利AST树，也就是在"),a("code",[s._v("@babel/generator")]),s._v("过程中生效。")]),s._v(" "),a("li",[a("code",[s._v("@babel/types")]),s._v(" 也是工具类，主要用途是在创建AST的过程中判断各种语法的类型。")])]),s._v(" "),a("p",[s._v("通过了解这每一个工具的用途 我们对前面简略的工作流坐下填充。")]),s._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[s._v("@babel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("frame 为全局错误捕获工具类\n\n"),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[s._v("@babel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("core\n├── 输入字符串\n├── "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[s._v("@babel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("parser\n│   └── "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[s._v("@babel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template\n│       └── "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[s._v("@babel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("types\n├── AST\n├── transformer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n│   └── "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[s._v("@babel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("helpers\n├── AST\n├── "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[s._v("@babel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("generator\n│   └── "),a("span",{pre:!0,attrs:{class:"token metadata symbol"}},[s._v("@babel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("traverse\n")])])]),a("h3",{attrs:{id:"_3-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-plugins"}},[s._v("#")]),s._v(" 3. Plugins")]),s._v(" "),a("p",[s._v("每一个Plugin处理自己的一种AST Type语法。\n重点讲一下"),a("code",[s._v("@babel/plugin-transform-runtime")]),s._v("，用来解析"),a("code",[s._v("@babel/runtime")]),s._v("工具类内的函数")]),s._v(" "),a("p",[a("code",[s._v("core-js")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/plugin-transform-runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否启用corejs https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"helpers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 各种辅助函数")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"regenerator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用generator 支持async await")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"useESModules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/plugins",target:"_blank",rel:"noopener noreferrer"}},[s._v("Plugins List"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"_4-presets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-presets"}},[s._v("#")]),s._v(" 4. Presets")]),s._v(" "),a("p",[s._v("而Presets可能理解起来更为简单，翻译过来是预设的意思，他几乎就是一个"),a("code",[s._v("Plugins")]),s._v("数组和配置的集合。")]),s._v(" "),a("p",[a("code",[s._v("@babel/preset-env")]),s._v(" 重点讲一下，他是以前es2015、es2016和es2017的集合。需要注意的是"),a("code",[s._v("@babel/preset-env")]),s._v("不支持所有在"),a("code",[s._v("stage-x")]),s._v("的plugin。"),a("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[s._v("browserslist"),a("OutboundLink")],1),s._v(" 会和"),a("code",[s._v("caniuse")]),s._v("数据结合来判断当前语法是否需要转换。target属性完全按照 browserslist 规则实现。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"targets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 目标环境")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browsers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 浏览器")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ie >= 10"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"current"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否转译module syntax，默认是 commonjs")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否输出启用的plugins列表")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spec"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否允许more spec compliant，但可能转译出的代码更慢https://babeljs.io/docs/en/babel-preset-env#spec")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"loose"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否允许生成更简单es5的代码，但可能不那么完全符合ES6语义")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"useBuiltIns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 怎么运用 polyfill"usage" | "entry" | false 测试了一下 usage的包最小')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 总是启用的 plugins")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 强制不启用的 plugins")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"forceAllTransforms"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 强制使用所有的plugins，用于只能支持ES5的uglify可以正确压缩代码")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"configPath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//browserslist的路径")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignoreBrowserslistConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" boolean "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否忽略browserslist的配置")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("useBuiltIns: 'usage' 按需加载，实验性")]),s._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// input")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// b.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// output")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core-js/modules/es6.promise"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// b.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core-js/modules/es6.map"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("useBuiltIns: 'entry'")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// input")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/polyfill"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// output")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core-js/modules/es7.string.pad-start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core-js/modules/es7.string.pad-end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("useBuiltIns: false\n解释为不使用polyfill。\n其他presets列表")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nstage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nstage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nstage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nflow\nreact\ntypescript\nminify  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//比较鸡肋的压缩preset 我也不知道为什么放在presets里面 我觉得他更应该是一个plugin。当然看名字也看的出来babel-preset-minify 这个模块并没有在这次升级中被移到@babel的私有域下。")]),s._v("\n")])])]),a("h3",{attrs:{id:"_5-polyfills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-polyfills"}},[s._v("#")]),s._v(" 5. Polyfills")]),s._v(" "),a("p",[a("code",[s._v("@babel/polyfill")]),s._v("和"),a("code",[s._v("runtime")]),s._v("的差别")]),s._v(" "),a("p",[a("code",[s._v("runtime")]),s._v("提供的其实是一个工具类合集，例如 _extend，是为了减少编译时产生的冗余代码，它不包括所有新的es API比如Set Map Promise等。")]),s._v(" "),a("p",[s._v("而polyfill则是用来提供上述的新的ES API，其中也包括了Array.form Object.assign等新增的原型方法。")]),s._v(" "),a("p",[s._v("使用方法\nhttps://babeljs.io/docs/en/babel-polyfill#usage-in-node-browserify-webpack")]),s._v(" "),a("h3",{attrs:{id:"_6-babel7做的更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-babel7做的更新"}},[s._v("#")]),s._v(" 6. babel7做的更新")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("babel7")]),s._v("的"),a("code",[s._v("npm")]),s._v("包正式更名为"),a("code",[s._v("@babel/core")]),s._v("、"),a("code",[s._v("@babel/cli")]),s._v("等。")]),s._v(" "),a("li",[a("code",[s._v("babel7")]),s._v("不在支持"),a("code",[s._v("Node.js")]),s._v(" "),a("code",[s._v("0.10")]),s._v(", "),a("code",[s._v("0.12")]),s._v(", "),a("code",[s._v("4")]),s._v(" 和 "),a("code",[s._v("5")]),s._v("版本。")]),s._v(" "),a("li",[a("code",[s._v("babel7")]),s._v("移除了"),a("code",[s._v("@babel/polyfill")]),s._v("内的"),a("code",[s._v("polyfills")]),s._v("支持，现在"),a("code",[s._v("@babel/polyfill")]),s._v("几乎只是"),a("code",[s._v("core-js")]),s._v(" "),a("code",[s._v("v2")]),s._v("的映射。")]),s._v(" "),a("li",[a("code",[s._v("babylon")]),s._v("现在被重命名为"),a("code",[s._v("@babel/parser")])]),s._v(" "),a("li",[s._v("去除包名上的年份。")]),s._v(" "),a("li",[s._v("将"),a("code",[s._v("react")]),s._v("和"),a("code",[s._v("flow")]),s._v("预设分离。")])]),s._v(" "),a("h3",{attrs:{id:"_7-babel将ecmascript-2015-版本的代码分为了两种情况处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-babel将ecmascript-2015-版本的代码分为了两种情况处理"}},[s._v("#")]),s._v(" 7. babel将"),a("code",[s._v("ECMAScript 2015+")]),s._v(" 版本的代码分为了两种情况处理：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("语法层")]),s._v("： let、const、class、箭头函数等，这些需要在"),a("strong",[s._v("构建时进行转译")]),s._v("，是指在语法层面上的转译")]),s._v(" "),a("li",[a("strong",[s._v("api方法层")]),s._v("：Promise、includes、map等，这些是在全局或者Object、Array等的原型上新增的方法，它们可以由相应es5的方式重新定义")])]),s._v(" "),a("p",[s._v("参考资料：")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/9aaa99762a52",target:"_blank",rel:"noopener noreferrer"}},[s._v("babel入门到精通"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/duxinyi/p/11576583.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("面试官: 聊一聊Babel"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000023077637",target:"_blank",rel:"noopener noreferrer"}},[s._v("用了babel还需要polyfill吗？"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844904132294213639",target:"_blank",rel:"noopener noreferrer"}},[s._v("带你一步一步配置Babel7"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);