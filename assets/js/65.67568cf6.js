(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{599:function(p,a,t){p.exports=t.p+"assets/img/JSbridge.4943e5ec.jpg"},811:function(p,a,t){"use strict";t.r(a);var _=t(42),r=Object(_.a)({},(function(){var p=this,a=p.$createElement,_=p._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[_("ul",[_("li",[_("a",{attrs:{href:"#1-h5"}},[p._v("1. H5")]),p._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#11-%E5%8E%9F%E7%94%9F-app"}},[p._v("1.1. 原生 App")])]),p._v(" "),_("li",[_("a",{attrs:{href:"#12-web-app"}},[p._v("1.2. Web App")])]),p._v(" "),_("li",[_("a",{attrs:{href:"#13-%E6%B7%B7%E5%90%88-app"}},[p._v("1.3. 混合 App")])]),p._v(" "),_("li",[_("a",{attrs:{href:"#14-api-bridge"}},[p._v("1.4. API Bridge")])]),p._v(" "),_("li",[_("a",{attrs:{href:"#15-%E5%B0%8F%E7%A8%8B%E5%BA%8F"}},[p._v("1.5. 小程序")])])])])]),p._v(" "),_("h3",{attrs:{id:"_1-h5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-h5"}},[p._v("#")]),p._v(" 1. H5")]),p._v(" "),_("p",[p._v("手机 App 可以分成三大类。")]),p._v(" "),_("blockquote",[_("ul",[_("li",[p._v("原生应用（native application，简称 native App）")]),p._v(" "),_("li",[p._v("Web 应用（web application，简称 Web App）")]),p._v(" "),_("li",[p._v("混合应用（hybrid application，简称 hybrid App）")])])]),p._v(" "),_("p",[_("strong",[p._v("H5 这个词，可以理解成就是混合 App 模型，只不过它特指混合 App 的前端部分。")]),p._v(" 因为混合 App 的前端就是 HTML5 网页，所以简称 H5。这个词是国内独有的，基本上都是前端程序员在用，国外不用这个词，就直接叫混合 App。")]),p._v(" "),_("h4",{attrs:{id:"_1-1-原生-app"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-原生-app"}},[p._v("#")]),p._v(" 1.1. 原生 App")]),p._v(" "),_("p",[_("strong",[p._v("原生 App 是专门为特定手机平台开发的应用程序")]),p._v(" ，无法在其他平台运行。一个手机软件如果要同时支持苹果手机和安卓手机，就需要为它们各写一个原生 App。")]),p._v(" "),_("p",[p._v("原生 App 使用与手机操作系统相同的语言。iOS 的原生 App 使用 Objective-C 语言或 Swift 语言，安卓使用 Java 语言或 Kotlin 语言。由于跟底层系统的语言和技术模型一致，所以原生 App 的性能和用户体验都很好。")]),p._v(" "),_("h4",{attrs:{id:"_1-2-web-app"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-web-app"}},[p._v("#")]),p._v(" 1.2. Web App")]),p._v(" "),_("p",[_("strong",[p._v("Web App 是使用网页做的应用程序，必须在浏览器中使用。")]),p._v(" 比如，你在浏览器中收发邮件，就是在使用 Web App。")]),p._v(" "),_("p",[p._v("Web App 主要使用网页技术，即 HTML、JavaScript 和 CSS。")]),p._v(" "),_("h4",{attrs:{id:"_1-3-混合-app"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-混合-app"}},[p._v("#")]),p._v(" 1.3. 混合 App")]),p._v(" "),_("p",[_("strong",[p._v("混合 App （hybrid App）顾名思义就是原生 App 与 Web App 的结合。它的壳是原生 App，但是里面放的是网页。")]),p._v(" 可以理解成，混合 App 里面隐藏了一个浏览器，用户看到的实际上是这个隐藏浏览器渲染出来的网页。")]),p._v(" "),_("p",[p._v('混合 App 的原生外壳称为"容器"，内部隐藏的浏览器，通常使用系统提供的网页渲染控件（即 WebView 控件），也可以自己内置一个浏览器内核。结构上，混合 App 从上到下分成三层：HTML5 网页层、网页引擎层（本质上是一个隔离的浏览器实例）、容器层。')]),p._v(" "),_("h4",{attrs:{id:"_1-4-api-bridge"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-api-bridge"}},[p._v("#")]),p._v(" 1.4. API Bridge")]),p._v(" "),_("p",[p._v("混合 App 里面的网页不同于普通网页，可以调用底层系统所有的 API。奥秘就在于外层容器提供了 API Bridge，充当底层 API 的中介，允许内部的网页调用底层。")]),p._v(" "),_("p",[p._v("所谓 API Bridge 就是容器在底层接口和网页之间，建立一座桥梁，让双方通信。容器一旦接到网页的请求，就根据请求去调用底层系统的 API，然后再返回结果给网页。API Bridge 往往以 JavaScript 语言提供，方便网页调用，这时又称为 JSbridge。")]),p._v(" "),_("p",[_("img",{attrs:{src:t(599),alt:"img"}})]),p._v(" "),_("p",[p._v("不同容器的 API Bridge 是不一样的。为某个容器写的网页，不能放在另一个容器使用，也无法在浏览器使用，除非网页脚本做了兼容处理。")]),p._v(" "),_("p",[p._v("容器提供的 API Bridge 必须跟着平台更新。比如，iOS 发了新版本，有了新的硬件 API，容器也必须跟着推出新版的 API Bridge。如果容器没有跟上，开发者为了使用新的硬件，就只能想办法自己来写缺失的 API Bridge。")]),p._v(" "),_("h4",{attrs:{id:"_1-5-小程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-小程序"}},[p._v("#")]),p._v(" 1.5. 小程序")]),p._v(" "),_("p",[p._v("所谓小程序，可以看作是针对特定容器的 H5 开发。微信本身是一个容器，开放自己的接口（JSbridge），外部开发者使用规定的语法，编写页面，容器可以动态加载这些页面。")]),p._v(" "),_("p",[p._v("小程序对于微信官方的好处是，扩展了功能和应用场景，吸引外部开发者加入，繁荣了生态。对于外部开发者的好处是，有了流量入口，可以直接调用微信的各种功能（比如支付）。")])])}),[],!1,null,null,null);a.default=r.exports}}]);