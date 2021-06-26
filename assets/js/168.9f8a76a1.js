(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{773:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#1-react-router"}},[t._v("1. React-Router")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#11-browserrouter%E5%92%8Chashrouter"}},[t._v("1.1. "),s("code",[t._v("BrowserRouter")]),t._v("和"),s("code",[t._v("HashRouter")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#12-%E6%B7%B7%E5%90%88%E7%BB%84%E4%BB%B6%E5%8C%96"}},[t._v("1.2. 混合组件化")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#13-%E5%AE%9E%E7%8E%B0404"}},[t._v("1.3. 实现404")])])])])]),t._v(" "),s("h2",{attrs:{id:"_1-react-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-react-router"}},[t._v("#")]),t._v(" 1. React-Router")]),t._v(" "),s("h3",{attrs:{id:"_1-1-browserrouter和hashrouter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-browserrouter和hashrouter"}},[t._v("#")]),t._v(" 1.1. "),s("code",[t._v("BrowserRouter")]),t._v("和"),s("code",[t._v("HashRouter")])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("<BrowserRouter>")]),t._v("使用HTML5提供的"),s("code",[t._v("history API")]),t._v(" ("),s("code",[t._v("pushState")]),t._v(","),s("code",[t._v("replaceState")]),t._v("和 "),s("code",[t._v("popstate")]),t._v(" 事件) 来保持 UI 和 URL 的同步。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("<HashRouter>")]),t._v("使用 URL 的hash部分（即 "),s("code",[t._v("window.location.hash")]),t._v("）来保持 UI 和 URL 的同步。")])])]),t._v(" "),s("p",[t._v("一般就这两种，用它包裹住"),s("code",[t._v("<Route/>")])]),t._v(" "),s("p",[s("code",[t._v("Switch")]),t._v("当第一个路由匹配成功后，就不再往下走了")]),t._v(" "),s("h3",{attrs:{id:"_1-2-混合组件化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-混合组件化"}},[t._v("#")]),t._v(" 1.2. 混合组件化")]),t._v(" "),s("p",[t._v("就是路由当组件使用。")]),t._v(" "),s("ul",[s("li",[t._v("3.0版本是"),s("code",[t._v("<Router history=''>")])]),t._v(" "),s("li",[t._v("4.0是"),s("code",[t._v("<HashRouter></HashRouter>")])])]),t._v(" "),s("p",[t._v("注意：")]),t._v(" "),s("ul",[s("li",[t._v("一个"),s("code",[t._v("HashRouter")]),s("strong",[t._v("只能有一个子节点")]),t._v("，不能有多个。")]),t._v(" "),s("li",[s("code",[t._v("<Route/>")]),t._v("标签中的"),s("code",[t._v("component")]),t._v("一定是小写。")]),t._v(" "),s("li",[t._v("根标签必须是"),s("code",[t._v("Router")]),t._v("("),s("code",[t._v("BrowserRouter")]),t._v("或"),s("code",[t._v("HashRouter")]),t._v(")，否则没法跳转。")]),t._v(" "),s("li",[t._v("路由匹配不到有两种处理方式，一是404，二是跳转到默认的首页。")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-实现404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-实现404"}},[t._v("#")]),t._v(" 1.3. 实现404")]),t._v(" "),s("p",[t._v("必须使用"),s("code",[t._v("switch")]),t._v("，写一个"),s("strong",[t._v("不带path")]),t._v("的"),s("code",[t._v("Route")]),t._v("放在所有"),s("code",[t._v("Route")]),t._v("的最后，"),s("code",[t._v("component")]),t._v("就是404页面")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Switch")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/about"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("About"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("notMatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Switch")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);