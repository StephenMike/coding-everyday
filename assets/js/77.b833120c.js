(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{634:function(s,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#1-%E6%95%B0%E5%AD%A6%E9%A2%98"}},[s._v("1. 数学题")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-%E9%98%B6%E4%B9%98%E6%9C%AB%E5%B0%BE0%E7%9A%84%E4%B8%AA%E6%95%B0"}},[s._v("1.1. 阶乘末尾0的个数")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#12-%E4%B9%B0%E8%8B%B9%E6%9E%9C%E5%8F%AA%E8%83%BD%E7%94%A86%E4%B8%AA%E6%AF%8F%E8%A2%8B%E5%92%8C8%E4%B8%AA%E6%AF%8F%E8%A2%8B%E7%9A%84%E5%8C%85%E8%A3%85%E9%97%AE%E9%9C%80%E8%A6%81%E5%87%A0%E4%B8%AA%E8%A2%8B%E5%AD%90%E8%A2%8B%E5%AD%90%E8%A3%85%E6%BB%A1"}},[s._v("1.2. 买苹果：只能用6个每袋和8个每袋的包装，问需要几个袋子（袋子装满）")])])])])]),s._v(" "),a("h2",{attrs:{id:"_1-数学题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数学题"}},[s._v("#")]),s._v(" 1. 数学题")]),s._v(" "),a("h3",{attrs:{id:"_1-1-阶乘末尾0的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-阶乘末尾0的个数"}},[s._v("#")]),s._v(" 1.1. 阶乘末尾0的个数")]),s._v(" "),a("p",[s._v("题目描述：\n输入一个正整数n，求n!的末尾有多少个0？比如："),a("code",[s._v("n=10，n!=3628800")]),s._v("，所以答案为2。")]),s._v(" "),a("p",[s._v("例如，输入：10，输出为：2")]),s._v(" "),a("p",[s._v("思路：\n只要求出因子中包含多少个5")]),s._v(" "),a("ol",[a("li",[s._v("因为2很多，5较少，根据木桶效应，末尾出现0的次数由因子是5的个数决定。")]),s._v(" "),a("li",[s._v("注意：如果是50的阶乘，"),a("code",[s._v("50 = 5 *5*2")]),s._v("，包含2个5。")])]),s._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFactorSuffixZero")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    \n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" num\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n")])])]),a("h3",{attrs:{id:"_1-2-买苹果-只能用6个每袋和8个每袋的包装-问需要几个袋子-袋子装满"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-买苹果-只能用6个每袋和8个每袋的包装-问需要几个袋子-袋子装满"}},[s._v("#")]),s._v(" 1.2. 买苹果：只能用6个每袋和8个每袋的包装，问需要几个袋子（袋子装满）")]),s._v(" "),a("p",[s._v("例如，输入：20，输出：3")]),s._v(" "),a("p",[s._v("思路：\n数学题")]),s._v(" "),a("ol",[a("li",[s._v("如果num不为偶数或者等于10或者小于6都无解，剩下的数都有解，比如"),a("code",[s._v("6 8 12 14 16 18 20")]),s._v("。")]),s._v(" "),a("li",[s._v("所以要求最少的袋子，就先除以8，得到"),a("code",[s._v("count")]),s._v("，有余数的话，"),a("code",[s._v("count+1")]),s._v("。")])]),s._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  \n  k "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    k "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" k\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);