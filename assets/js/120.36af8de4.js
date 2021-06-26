(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{712:function(v,e,_){"use strict";_.r(e);var o=_(42),i=Object(o.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"viewport"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[v._v("#")]),v._v(" Viewport")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("iphone5")]),v._v("的分辨率是 "),_("code",[v._v("640dp * 1136 dp")]),v._v("（物理像素）\n"),_("code",[v._v("dp,pt")]),v._v("： "),_("code",[v._v("device independent pixels")]),v._v(" 设备无关的像素")]),v._v(" "),_("li",[v._v("开发中应该是"),_("code",[v._v("320px * 568px")]),v._v(" （逻辑像素）\n"),_("code",[v._v("px: css pixel")]),v._v(" （逻辑像素），浏览器使用的抽象单位")]),v._v(" "),_("li",[_("code",[v._v("dpr:devicePixelRatio")]),v._v(" 设备像素缩放比\n计算公式："),_("code",[v._v("1px")]),v._v("等于"),_("code",[v._v("dpr的平方")]),v._v("乘"),_("code",[v._v("物理像素")])])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("DPI")]),v._v("：打印机每英寸可以喷的墨汁点（印刷行业）")]),v._v(" "),_("li",[_("code",[v._v("PPI")]),v._v("：屏幕每英寸的像素数量，即单位英寸内的像素密度")])]),v._v(" "),_("p",[_("code",[v._v("viewport")]),v._v(" 的构成：")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("visual viewport")]),v._v("：视口视图（"),_("strong",[v._v("设定缩放scale")]),v._v("）")]),v._v(" "),_("li",[_("code",[v._v("layout viewport")]),v._v("：布局视图（"),_("strong",[v._v("承载底层布局")]),v._v("）")])]),v._v(" "),_("p",[v._v("手机浏览器对页面默认行为：")]),v._v(" "),_("ol",[_("li",[v._v("渲染在"),_("code",[v._v("viewport")]),v._v("（保证基本布局正确）")]),v._v(" "),_("li",[v._v("对页面进行缩放（保证页面显示完整）")])]),v._v(" "),_("p",[v._v("注意：")]),v._v(" "),_("ul",[_("li",[v._v("苹果浏览器默认"),_("code",[v._v("layout viewport")]),v._v("是"),_("code",[v._v("980px")]),v._v("，所以一张"),_("code",[v._v("320px")]),v._v("或者"),_("code",[v._v("640px")]),v._v("的图片都是铺不满的。")]),v._v(" "),_("li",[_("code",[v._v("meta")]),v._v("标签设置的是"),_("code",[v._v("layout viewport")])])]),v._v(" "),_("p",[_("code",[v._v("layout viewport")]),v._v("和"),_("code",[v._v("visual viewport")]),v._v("对应的获取宽度API")]),v._v(" "),_("ul",[_("li",[v._v("布局 viewport 宽度（meta 设置）："),_("code",[v._v("document.body.clientWidth")])]),v._v(" "),_("li",[v._v("度量 viewport 宽度（css 设置）："),_("code",[v._v("window.innerWidth")])]),v._v(" "),_("li",[v._v("缩放比："),_("code",[v._v("window.innerWidth / document.body.clientWidth")])])]),v._v(" "),_("p",[v._v("设置"),_("code",[v._v("width=device-width")]),v._v("后, 如果页面中宽度小于"),_("code",[v._v("device-width")]),v._v("，比如"),_("code",[v._v("320px")]),v._v("，显示是没问题的， "),_("code",[v._v("document.body.clientWidth = window.innerWidth = 320")]),v._v("。")]),v._v(" "),_("p",[v._v("但是，如果页面总宽度大于"),_("code",[v._v("device-width")]),v._v("，那么会自动缩小，比如"),_("code",[v._v("document.body.clientWidth = 320，window.innerWidth = 390")]),v._v("，默认缩放比就是"),_("code",[v._v("390/320")]),v._v("，这时就需要设置"),_("code",[v._v("initial-scale=1.0")]),v._v("，不让它自动缩放，这样"),_("code",[v._v("document.body.clientWidth")]),v._v(" 和 "),_("code",[v._v("window.innerWidth")]),v._v(" 都是"),_("code",[v._v("320")]),v._v("了")]),v._v(" "),_("p",[v._v("总结："),_("code",[v._v("width=device-width")]),v._v("，让"),_("code",[v._v("布局viewport")]),v._v("时刻等于设备宽度；"),_("code",[v._v("initial-scale=1")]),v._v("，让"),_("code",[v._v("布局viewport")]),v._v("时刻等于"),_("code",[v._v("度量viewport")]),v._v("。")]),v._v(" "),_("p",[v._v("移动web最佳"),_("code",[v._v("viewpoint")]),v._v("设置：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("布局viewport")]),v._v(" = 设备宽度 = "),_("code",[v._v("度量viewpoint")])])]),v._v(" "),_("p",[v._v("最常用代码：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">\n')])])])])}),[],!1,null,null,null);e.default=i.exports}}]);