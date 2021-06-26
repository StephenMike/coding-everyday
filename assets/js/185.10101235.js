(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{791:function(h,s,a){"use strict";a.r(s);var _=a(42),t=Object(_.a)({},(function(){var h=this,s=h.$createElement,a=h._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":h.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#1-%E7%BC%93%E5%AD%98"}},[h._v("1. 缓存")]),h._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-webpack-%E4%B8%AD%E7%9A%84-hashchunkhashcontenthash-%E5%8C%BA%E5%88%AB"}},[h._v("1.1. webpack 中的 hash、chunkhash、contenthash 区别")])])])])]),h._v(" "),a("h2",{attrs:{id:"_1-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-缓存"}},[h._v("#")]),h._v(" 1. 缓存")]),h._v(" "),a("h3",{attrs:{id:"_1-1-webpack-中的-hash、chunkhash、contenthash-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-webpack-中的-hash、chunkhash、contenthash-区别"}},[h._v("#")]),h._v(" 1.1. webpack 中的 hash、chunkhash、contenthash 区别")]),h._v(" "),a("p",[h._v("hash 一般是结合 CDN 缓存来使用，通过 webpack 构建之后，生成对应文件名自动带上对应的 MD5 值。")]),h._v(" "),a("p",[h._v("如果文件内容改变的话，那么对应文件哈希值也会改变，对应的 HTML 引用的 URL 地址也会改变，触发 CDN 服务器从源服务器上拉取对应数据，进而更新本地缓存。但是在实际使用的时候，这几种 hash 计算还是有一定区别。")]),h._v(" "),a("ol",[a("li",[a("code",[h._v("hash")])])]),h._v(" "),a("p",[h._v("hash 是跟"),a("strong",[h._v("整个项目")]),h._v("的构建相关，只要项目里有文件更改，整个项目构建的 hash 值都会更改，并且全部文件都共用相同的 hash 值")]),h._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[h._v("chunkhash")])])]),h._v(" "),a("p",[h._v("采用 "),a("code",[h._v("hash")]),h._v(" 计算的话，每一次构建后生成的哈希值都不一样，即使文件内容压根没有改变。这样子是没办法实现缓存效果，我们需要换另一种哈希值计算方式，即 "),a("code",[h._v("chunkhash")]),h._v(" 。")]),h._v(" "),a("p",[a("code",[h._v("chunkhash")]),h._v(" 和 "),a("code",[h._v("hash")]),h._v(" 不一样，它根据"),a("strong",[h._v("不同的入口文件")]),h._v("("),a("code",[h._v("Entry")]),h._v(")进行依赖文件解析、构建对应的 chunk，生成对应的哈希值。")]),h._v(" "),a("p",[h._v("我们在生产环境里把一些"),a("strong",[h._v("公共库")]),h._v("和"),a("strong",[h._v("程序入口文件")]),h._v("区分开，单独打包构建，接着我们采用 "),a("code",[h._v("chunkhash")]),h._v(" 的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。")]),h._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[h._v("contenthash")])])]),h._v(" "),a("p",[h._v("在使用 "),a("code",[h._v("chunkhash")]),h._v(" 的例子中，如果 "),a("code",[h._v("index.css")]),h._v(" 被 "),a("code",[h._v("index.js")]),h._v(" 引用了，那么就会共用相同的 "),a("code",[h._v("chunkhash")]),h._v(" 值。")]),h._v(" "),a("p",[h._v("但是这样子有个问题，如果 index.js 更改了代码，css 文件就算内容没有任何改变，由于是该模块发生了改变，导致 css 文件会重复构建。")]),h._v(" "),a("p",[h._v("这个时候，我们可以使用 "),a("code",[h._v("extra-text-webpack-plugin")]),h._v(" 里的 "),a("code",[h._v("contenthash")]),h._v(" 值，保证即使 css 文件所处的模块里就算其他文件内容改变，只要 css 文件内容不变，那么不会重复构建。")])])}),[],!1,null,null,null);s.default=t.exports}}]);