(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{730:function(e,c,t){"use strict";t.r(c);var _=t(42),o=Object(_.a)({},(function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"#1-websocket"}},[e._v("1. WebSocket")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#11-%E6%8F%A1%E6%89%8B%E5%8D%8F%E8%AE%AE"}},[e._v("1.1. 握手协议")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#111-%E4%BE%8B%E5%AD%90"}},[e._v("1.1.1. 例子")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#12-sec-websocket-keyaccept%E7%9A%84%E4%BD%9C%E7%94%A8"}},[e._v("1.2. "),t("code",[e._v("Sec-WebSocket-Key/Accept")]),e._v("的作用")])])])])]),e._v(" "),t("h2",{attrs:{id:"_1-websocket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-websocket"}},[e._v("#")]),e._v(" 1. WebSocket")]),e._v(" "),t("h3",{attrs:{id:"_1-1-握手协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-握手协议"}},[e._v("#")]),e._v(" 1.1. 握手协议")]),e._v(" "),t("p",[e._v("WebSocket 是独立的、创建在TCP上的协议。")]),e._v(" "),t("p",[e._v("Websocket 通过 HTTP/1.1 协议的101状态码进行握手。")]),e._v(" "),t("p",[e._v("为了创建 Websocket 连接，需要通过浏览器发出请求，之后服务器进行回应，这个过程通常称为“握手”（"),t("code",[e._v("Handshaking")]),e._v("）。")]),e._v(" "),t("h4",{attrs:{id:"_1-1-1-例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-例子"}},[e._v("#")]),e._v(" 1.1.1. 例子")]),e._v(" "),t("p",[e._v("一个典型的Websocket握手请求如下：")]),e._v(" "),t("p",[e._v("客户端请求：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GET /chat HTTP/1.1\nHost: server.example.com\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\nOrigin: http://example.com\nSec-WebSocket-Protocol: chat, superchat\nSec-WebSocket-Version: 13\n")])])]),t("p",[e._v("服务器回应：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=\nSec-WebSocket-Protocol: chat\n")])])]),t("p",[e._v("字段说明")]),e._v(" "),t("ol",[t("li",[t("strong",[t("code",[e._v("Connection")]),e._v("必须设置"),t("code",[e._v("Upgrade")]),e._v("，表示客户端希望连接升级")]),e._v("。")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("Upgrade")]),e._v("字段必须设置"),t("code",[e._v("Websocket")]),e._v("，表示希望升级到 "),t("code",[e._v("Websocket")]),e._v(" 协议")]),e._v("。")]),e._v(" "),t("li",[e._v("**"),t("code",[e._v("Sec-WebSocket-Key")]),e._v("是随机的字符串，服务器端会用这些数据来构造出一个SHA-1的信息摘要。**把"),t("code",[e._v("“Sec-WebSocket-Key”")]),e._v("加上一个特殊字符串"),t("code",[e._v("“258EAFA5-E914-47DA-95CA-C5AB0DC85B11”")]),e._v("，然后计算SHA-1摘要，之后进行"),t("code",[e._v("Base64")]),e._v("编码，将结果做为"),t("code",[e._v("“Sec-WebSocket-Accept”")]),e._v("头的值，返回给客户端。如此操作，可以尽量避免普通HTTP请求被误认为"),t("code",[e._v("Websocket")]),e._v("协议。")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("Sec-WebSocket-Version")]),e._v(" 表示支持的Websocket版本")]),e._v("。"),t("code",[e._v("RFC6455")]),e._v("要求使用的版本是13，之前草案的版本均应当弃用。")]),e._v(" "),t("li",[t("code",[e._v("Origin")]),e._v(" 字段是可选的，通常用来表示在浏览器中发起此 Websocket 连接所在的页面，类似于Referer。但是，与Referer 不同的是，Origin 只包含了协议和主机名称。")]),e._v(" "),t("li",[e._v("其他一些定义在 HTTP 协议中的字段，如 "),t("code",[e._v("Cookie")]),e._v(" 等，也可以在 Websocket 中使用。")])]),e._v(" "),t("h3",{attrs:{id:"_1-2-sec-websocket-key-accept的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-sec-websocket-key-accept的作用"}},[e._v("#")]),e._v(" 1.2. "),t("code",[e._v("Sec-WebSocket-Key/Accept")]),e._v("的作用")]),e._v(" "),t("p",[t("code",[e._v("Sec-WebSocket-Key/Sec-WebSocket-Accept")]),e._v("在主要作用在于提供基础的防护，减少恶意连接、意外连接。\n但连接是否安全、数据是否安全、客户端/服务端是否合法的 ws客户端、ws服务端，其实并没有实际性的保证。")]),e._v(" "),t("p",[e._v("作用大致归纳如下：")]),e._v(" "),t("ol",[t("li",[e._v("避免服务端收到非法的 "),t("code",[e._v("websocket")]),e._v(" 连接（比如 "),t("code",[e._v("http")]),e._v(" 客户端不小心请求连接 "),t("code",[e._v("websocket")]),e._v(" 服务，此时服务端可以直接拒绝连接）")]),e._v(" "),t("li",[e._v("确保服务端理解 "),t("code",[e._v("websocket")]),e._v(" 连接。因为ws握手阶段采用的是 "),t("code",[e._v("http")]),e._v(" 协议，因此可能 "),t("code",[e._v("ws")]),e._v(" 连接是被一个http服务器处理并返回的，此时客户端可以通过 "),t("code",[e._v("Sec-WebSocket-Key")]),e._v(" 来确保服务端认识ws协议。（并非百分百保险，比如总是存在那么些无聊的http服务器，光处理Sec-WebSocket-Key，但并没有实现ws协议。）")]),e._v(" "),t("li",[e._v("用浏览器里发起ajax请求，设置 header 时，"),t("code",[e._v("Sec-WebSocket-Key")]),e._v("以及其他相关的"),t("code",[e._v("header")]),e._v("是被禁止的。这样可以避免客户端发送 ajax 请求时，意外请求协议升级（"),t("code",[e._v("websocket upgrade")]),e._v("）")]),e._v(" "),t("li",[e._v("可以防止反向代理（不理解ws协议）返回错误的数据。比如反向代理前后收到两次ws连接的升级请求，反向代理把第一次请求的返回给cache住，然后第二次请求到来时直接把 cache 住的请求给返回（无意义的返回）。")]),e._v(" "),t("li",[t("code",[e._v("Sec-WebSocket-Key")]),e._v("主要目的并不是确保数据的安全性，因为"),t("code",[e._v("Sec-WebSocket-Key")]),e._v("、"),t("code",[e._v("Sec-WebSocket-Accept")]),e._v("的转换计算公式是公开的，而且非常简单，最主要的作用是预防一些常见的意外情况（非故意的）。")])]),e._v(" "),t("p",[e._v("参考资料：")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket, wikipedia"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/chyingp/p/websocket-deep-in.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket协议：5分钟从入门到精通"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);c.default=o.exports}}]);