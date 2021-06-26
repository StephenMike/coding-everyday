(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{885:function(_,t,a){"use strict";a.r(t);var v=a(42),r=Object(v.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#1-%E8%A1%8C%E5%88%97%E5%BC%8F%E4%B8%8E%E5%85%8B%E6%8B%89%E9%BB%98%E6%B3%95%E5%88%99"}},[_._v("1. 行列式与克拉默法则")]),_._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%89%8D%E8%A8%80"}},[_._v("前言")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#11-%E5%85%A8%E6%8E%92%E5%88%97"}},[_._v("1.1. 全排列")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#12-%E9%80%86%E5%BA%8F%E6%95%B0"}},[_._v("1.2. 逆序数")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#13-%E5%A5%87%E6%8E%92%E5%88%97%E5%81%B6%E6%8E%92%E5%88%97"}},[_._v("1.3. 奇排列、偶排列")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#14-%E8%A1%8C%E5%88%97%E5%BC%8F%E5%AE%9A%E4%B9%89"}},[_._v("1.4. 行列式定义：")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#15-dsuptsupd"}},[_._v("1.5. D"),a("sup",[_._v("T")]),_._v("=D")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#16-%E5%85%8B%E6%8B%89%E9%BB%98%E6%B3%95%E5%88%99"}},[_._v("1.6. 克拉默法则")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#17-%E4%B8%BA%E4%BD%95%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0%E7%9A%84determinant%E8%A2%AB%E7%BF%BB%E8%AF%91%E6%88%90%E8%A1%8C%E5%88%97%E5%BC%8F"}},[_._v("1.7. 为何线性代数的「determinant」被翻译成「行列式」？")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#18-%E7%BA%BF%E6%80%A7%E5%8F%98%E6%8D%A2%E7%9A%84%E7%89%B9%E7%82%B9"}},[_._v("1.8. 线性变换的特点")])]),_._v(" "),a("li",[a("a",{attrs:{href:"#19-%E8%A1%8C%E5%88%97%E5%BC%8F%E6%98%AF%E7%BA%BF%E6%80%A7%E5%8F%98%E6%8D%A2%E7%9A%84%E4%BC%B8%E7%BC%A9%E5%9B%A0%E5%AD%90"}},[_._v("1.9. 行列式是线性变换的伸缩因子")])])])])]),_._v(" "),a("h2",{attrs:{id:"_1-行列式与克拉默法则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-行列式与克拉默法则"}},[_._v("#")]),_._v(" 1. 行列式与克拉默法则")]),_._v(" "),a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),a("ul",[a("li",[_._v("定义行列式的目的是什么？")]),_._v(" "),a("li",[_._v("定义行列式的思路是什么？")]),_._v(" "),a("li",[_._v("行列式的具体定义是什么？")])]),_._v(" "),a("p",[_._v("历史上，定义行列式的目的就是为了 "),a("strong",[_._v("解线性方程组")]),_._v("。")]),_._v(" "),a("p",[_._v("定义行列式的思路：想解方程组 => 构造行列式 => 证明行列式可解方程组 => 构造成功")]),_._v(" "),a("h3",{attrs:{id:"_1-1-全排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-全排列"}},[_._v("#")]),_._v(" 1.1. 全排列")]),_._v(" "),a("p",[_._v("把n个不同的元素排成一列，叫做这n个元素的全排列（简称排列）。")]),_._v(" "),a("p",[_._v("比如1,2,3=>(1,2,3),(1,3,2),(2,1,3,),(2,3,1),(3,1,2),(3,2,1)")]),_._v(" "),a("h3",{attrs:{id:"_1-2-逆序数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-逆序数"}},[_._v("#")]),_._v(" 1.2. 逆序数")]),_._v(" "),a("p",[_._v("在一个排列中，"),a("strong",[_._v("如果一对数的前后位置与大小顺序相反，即前面的数大于后面的数，那么它们就称为一个逆序")]),_._v("。一个排列中逆序的总数就称为这个排列的逆序数。")]),_._v(" "),a("p",[_._v("比如3,1,4,5,2的你逆序数为0+1+0+0+3=4")]),_._v(" "),a("h3",{attrs:{id:"_1-3-奇排列、偶排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-奇排列、偶排列"}},[_._v("#")]),_._v(" 1.3. 奇排列、偶排列")]),_._v(" "),a("p",[a("strong",[_._v("逆序数为奇数的排列称为奇排列，逆序数为偶数的排列称为偶排列")]),_._v("。")]),_._v(" "),a("p",[a("strong",[_._v("一个排列中任意的两个元素对换，排列改变奇偶性")]),_._v("。")]),_._v(" "),a("h3",{attrs:{id:"_1-4-行列式定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-行列式定义"}},[_._v("#")]),_._v(" 1.4. 行列式定义：")]),_._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200529075526_0a8207fb862f.png",alt:"img"}})]),_._v(" "),a("p",[_._v("比如三阶行列式：")]),_._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200529075732_8a93d315d1de.png",alt:"img"}})]),_._v(" "),a("p",[_._v("脚标第一项都是按照“1,2,3”排列的，而脚标的第二项是“1,2,3”的全排列，正负号怎么来的呢？是由逆序数决定的。")]),_._v(" "),a("p",[a("strong",[_._v("举例：计算5阶行列式因子a52a33a41a14a25的正负号")])]),_._v(" "),a("p",[a("strong",[_._v("先把脚标的第一项按顺序排列，得到：a14a25a33a41a52，其逆序数为0+0+2+3+3 = 8，所以为正")]),_._v("。")]),_._v(" "),a("h3",{attrs:{id:"_1-5-dt-d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-dt-d"}},[_._v("#")]),_._v(" 1.5. D"),a("sup",[_._v("T")]),_._v("=D")]),_._v(" "),a("p",[a("strong",[_._v("行列式D"),a("sup",[_._v("T")]),_._v("称为行列式D的转置行列式。")])]),_._v(" "),a("h3",{attrs:{id:"_1-6-克拉默法则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-克拉默法则"}},[_._v("#")]),_._v(" 1.6. 克拉默法则")]),_._v(" "),a("p",[_._v("观察三元一次方程组的解：")]),_._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200529081654_2650d812a3c4.png",alt:"img"}})]),_._v(" "),a("p",[_._v("可以看到如下规律：")]),_._v(" "),a("ul",[a("li",[_._v("分母都是系数组成的行列式")]),_._v(" "),a("li",[_._v("分子也是系数组成的行列式，只是对应于不同的xi，第i列被替换为了常数项")])]),_._v(" "),a("p",[_._v("克拉默法则定义：")]),_._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200529081817_15676d844928.png",alt:"img"}})]),_._v(" "),a("h3",{attrs:{id:"_1-7-为何线性代数的「determinant」被翻译成「行列式」"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-为何线性代数的「determinant」被翻译成「行列式」"}},[_._v("#")]),_._v(" 1.7. 为何线性代数的「determinant」被翻译成「行列式」？")]),_._v(" "),a("blockquote",[a("p",[_._v("行列式的本质，就是矩阵所描绘的线性变换前后，任何一个“体积”缩放的比例。\n线性变换对空间的影响可以分为两大类。\n一种情况是，行列式的值不为0，这说明变换过后，维数不变，只是“体积”变大或变小；\n另一种情况是，行列式的值为0，就说明“体积”变成了0，实际上就是发生了降维，如立体空间变成了平面（降了一维），平面变成了点（降了两维）。（降的维数就是阶数减秩 n–rank。）\n因此，行列式的值就是一个很重要、很值得关注的问题，它决定了“体积”被拉伸了还是压缩，拉伸或压缩了多大，或者有没有“被拍扁”而直接变成0。所以，叫它“determinant”（决定因素）毫不过分。")])]),_._v(" "),a("h3",{attrs:{id:"_1-8-线性变换的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-线性变换的特点"}},[_._v("#")]),_._v(" 1.8. 线性变换的特点")]),_._v(" "),a("ul",[a("li",[_._v("变换前是直线的，变换后依然是直线")]),_._v(" "),a("li",[_._v("直线比例保持不变")]),_._v(" "),a("li",[_._v("变换前是原点的，变换后依然是原点")]),_._v(" "),a("li",[_._v("比如旋转、扭曲")])]),_._v(" "),a("h3",{attrs:{id:"_1-9-行列式是线性变换的伸缩因子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-行列式是线性变换的伸缩因子"}},[_._v("#")]),_._v(" 1.9. 行列式是线性变换的伸缩因子")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("行列式 > 1，对图形有放大作用")])]),_._v(" "),a("li",[a("strong",[_._v("0 < 行列式 < 1，对图形有缩小作用")])]),_._v(" "),a("li",[a("strong",[_._v("行列式 = 1，线性变换不可逆")])]),_._v(" "),a("li",[a("strong",[_._v("行列式 < 0，改变了基的相对左右顺序")]),_._v("。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);