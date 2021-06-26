(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{543:function(t,s,n){t.exports=n.p+"assets/img/union_find_dynamic_connection.be74bce7.png"},544:function(t,s,n){t.exports=n.p+"assets/img/union_find_api.36110e1b.png"},676:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#1-%E5%B9%B6%E6%9F%A5%E9%9B%86-unionfind"}},[t._v("1. 并查集 UnionFind")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-%E5%85%B3%E4%BA%8E%E5%8A%A8%E6%80%81%E8%BF%9E%E9%80%9A%E6%80%A7"}},[t._v("1.1. 关于动态连通性")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#111-%E5%8A%A8%E6%80%81%E8%BF%9E%E9%80%9A%E6%80%A7%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF"}},[t._v("1.1.1. 动态连通性的应用场景")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#12-%E5%AF%B9%E9%97%AE%E9%A2%98%E5%BB%BA%E6%A8%A1"}},[t._v("1.2. 对问题建模")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#13-%E5%AF%B9%E5%8A%A8%E6%80%81%E8%BF%9E%E9%80%9A%E5%9B%BE%E5%B9%B6%E6%9F%A5%E9%9B%86%E6%9C%89%E5%87%A0%E7%A7%8D%E5%8F%AF%E8%83%BD%E7%9A%84%E6%93%8D%E4%BD%9C"}},[t._v("1.3. 对动态连通图（并查集）有几种可能的操作")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#14-quick-find"}},[t._v("1.4. Quick-Find")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#15-quick-union"}},[t._v("1.5. Quick-Union")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#16-%E8%B7%AF%E5%BE%84%E5%8E%8B%E7%BC%A9"}},[t._v("1.6. 路径压缩")])])])])]),t._v(" "),a("h3",{attrs:{id:"_1-并查集-unionfind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-并查集-unionfind"}},[t._v("#")]),t._v(" 1. 并查集 UnionFind")]),t._v(" "),a("p",[t._v("主要两个操作"),a("code",[t._v("union")]),t._v("和 "),a("code",[t._v("find")]),t._v("\n解决动态连通性一类问题")]),t._v(" "),a("h4",{attrs:{id:"_1-1-关于动态连通性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-关于动态连通性"}},[t._v("#")]),t._v(" 1.1. 关于动态连通性")]),t._v(" "),a("p",[t._v("我们看一张图来了解一下什么是动态连通性：")]),t._v(" "),a("p",[a("img",{attrs:{src:n(543),alt:"动态连通性"}})]),t._v(" "),a("p",[t._v("假设我们输入了一组整数对，即上图中的(4, 3) (3, 8)等等，每对整数代表这两个"),a("code",[t._v("points/sites")]),t._v("是连通的。那么随着数据的不断输入，整个图的连通性也会发生变化，从上图中可以很清晰的发现这一点。同时，对于已经处于连通状态的"),a("code",[t._v("points/sites")]),t._v("，直接忽略，比如上图中的(8, 9)。")]),t._v(" "),a("h5",{attrs:{id:"_1-1-1-动态连通性的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-动态连通性的应用场景"}},[t._v("#")]),t._v(" 1.1.1. 动态连通性的应用场景")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("网络连接判断")]),t._v("：\n如果每个pair中的两个整数分别代表一个网络节点，那么该pair就是用来表示这两个节点是需要连通的。那么为所有的pairs建立了动态连通图后，就能够尽可能少的减少布线的需要，因为已经连通的两个节点会被直接忽略掉。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("变量名等同性")]),t._v("(类似于指针的概念)：\n在程序中，可以声明多个引用来指向同一对象，这个时候就可以通过为程序中声明的引用和实际对象建立动态连通图，来"),a("strong",[t._v("判断哪些引用实际上是指向同一对")]),t._v("象。")])])]),t._v(" "),a("h4",{attrs:{id:"_1-2-对问题建模"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-对问题建模"}},[t._v("#")]),t._v(" 1.2. 对问题建模")]),t._v(" "),a("p",[t._v("在对问题进行建模的时候，我们应该尽量想清楚需要解决的问题是什么。因为模型中选择的数据结构和算法显然会根据问题的不同而不同，就"),a("strong",[t._v("动态连通性")]),t._v("这个场景而言，我们需要解决的问题可能是：")]),t._v(" "),a("ol",[a("li",[t._v("给出两个节点，判断它们是否连通，如果连通，"),a("strong",[t._v("不需要给出具体的路径")])]),t._v(" "),a("li",[t._v("给出两个节点，判断它们是否连通，如果连通，需要给出具体的路径")])]),t._v(" "),a("p",[t._v("就上面两种问题而言，虽然只有是否能够给出具体路径的区别，但是这个区别导致了选择算法的不同，本文主要介绍的是第一种情况，即不需要给出具体路径的"),a("code",[t._v("Union-Find")]),t._v("算法，而第二种情况可以使用基于"),a("code",[t._v("DFS")]),t._v("的算法。")]),t._v(" "),a("p",[t._v("类比一下，二分查找比顺序查找快，因为顺序查找做的事情多，不仅找到了"),a("code",[t._v("rank")]),t._v("，还找到了"),a("code",[t._v("rank")]),t._v("以前的所有元素")]),t._v(" "),a("h4",{attrs:{id:"_1-3-对动态连通图-并查集-有几种可能的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-对动态连通图-并查集-有几种可能的操作"}},[t._v("#")]),t._v(" 1.3. 对动态连通图（并查集）有几种可能的操作")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("查询节点属于的组"),a("code",[t._v("find")])])]),t._v(" "),a("ul",[a("li",[t._v("数组对应位置的值即为组号")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("判断两个节点是否属于同一个组"),a("code",[t._v("isConnected")])])]),t._v(" "),a("ul",[a("li",[t._v("分别得到两个节点的组号，然后判断组号是否相等。")]),t._v(" "),a("li",[t._v("用数组表示，"),a("code",[t._v("d[i]=3")]),t._v("、"),a("code",[t._v("d[j]=3")]),t._v("，组号都为3，就说明它们是互相连接的。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("连接两个节点，使之属于同一个组"),a("code",[t._v("union")])])]),t._v(" "),a("ul",[a("li",[t._v("分别得到两个节点的组号，组号相同时操作结束，不同时，将其中的一个节点的组号换成另一个节点的组号")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("获取组的数目"),a("code",[t._v("count")])])]),t._v(" "),a("ul",[a("li",[t._v("初始化为节点的数目，然后每次成功连接两个节点之后，递减1")])])])]),t._v(" "),a("p",[t._v("我们可以设计相应的API：")]),t._v(" "),a("p",[a("img",{attrs:{src:n(544),alt:"并查集API"}})]),t._v(" "),a("h4",{attrs:{id:"_1-4-quick-find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-quick-find"}},[t._v("#")]),t._v(" 1.4. Quick-Find")]),t._v(" "),a("p",[a("code",[t._v("Quickfind")]),t._v("，"),a("code",[t._v("find")]),t._v("的时间复杂度为"),a("code",[t._v("O(1)")]),t._v("，即返回"),a("code",[t._v("A[index]")]),t._v("，很快。\n举个例子，比如输入的 Pair 是"),a("code",[t._v("(5，9)")]),t._v("，那么首先通过"),a("code",[t._v("find")]),t._v("方法发现它们的组号并不相同，然后在"),a("code",[t._v("union")]),t._v("的时候通过一次遍历，将组号"),a("code",[t._v("1")]),t._v("都改成"),a("code",[t._v("8")]),t._v("。当然，由"),a("code",[t._v("8")]),t._v("改成"),a("code",[t._v("1")]),t._v("也是可以的，保证操作时都使用一种规则就行。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("union")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获得p和q的组号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" qID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果两个组号相等，直接返回")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" qID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历一次，改变组号使他们属于一个组")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" pID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("对于需要添加新路径的情况，就涉及到对于组号的修改，因为并不能确定哪些节点的组号需要被修改，因此就必须对整个数组进行遍历，找到需要修改的节点，逐一修改，这一下每次添加新路径带来的复杂度就是线性关系了，如果要添加的新路径的数量是"),a("code",[t._v("M")]),t._v("，节点数量是"),a("code",[t._v("N")]),t._v("，那么最后的时间复杂度就是"),a("code",[t._v("MN")])]),t._v(" "),a("h4",{attrs:{id:"_1-5-quick-union"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-quick-union"}},[t._v("#")]),t._v(" 1.5. Quick-Union")]),t._v(" "),a("p",[t._v("为什么以上的解法会造成“牵一发而动全身”？因为每个节点所属的组号都是单独记录，各自为政的，没有将它们以更好的方式组织起来，当涉及到修改的时候，除了逐一通知、修改，别无他法。")]),t._v(" "),a("p",[t._v("如何将节点以更好的方式组织起来，组织的方式有很多种，但是最直观的还是将组号相同的节点组织在一起，想想所学的数据结构，什么样子的数据结构能够将一些节点给组织起来？常见的就是链表，图，树，什么的了。但是哪种结构对于查找和修改的效率最高？毫无疑问是树，因此考虑"),a("strong",[t._v("如何将节点和组的关系以树的形式表现出来")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//寻找p节点所在组的根节点，根节点具有性质id[root] = root")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("union")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Give p and q the same root.")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pRoot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" qRoot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pRoot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" qRoot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pRoot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qRoot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将一颗树(即一个组)变成另外一课树(即一个组)的子树")]),t._v("\n\tcount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("优化")]),t._v(" "),a("ol",[a("li",[t._v("根据"),a("code",[t._v("size")]),t._v("（需要维护一个"),a("code",[t._v("size")]),t._v("数组）、"),a("code",[t._v("rank")]),t._v("（维护一个"),a("code",[t._v("rank")]),t._v("数组）决定谁指向谁，让高度更小，可以更快找到")]),t._v(" "),a("li",[t._v("路径压缩，将层数减少")])]),t._v(" "),a("h4",{attrs:{id:"_1-6-路径压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-路径压缩"}},[t._v("#")]),t._v(" 1.6. 路径压缩")]),t._v(" "),a("p",[t._v("巧妙的实现方式")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将p节点的父节点设置为它的爷爷节点")]),t._v("\n\t\tid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("路径压缩后的并查集的操作，时间复杂度近乎是"),a("code",[t._v("O(1)")]),t._v("的。")]),t._v(" "),a("p",[t._v("这几种算法的时间复杂度如下所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Algorithm")])]),t._v(" "),a("th",[a("strong",[t._v("Constructor")])]),t._v(" "),a("th",[a("strong",[t._v("Union")])]),t._v(" "),a("th",[a("strong",[t._v("Find")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("Quick-Find")])]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Quick-Union")])]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("Tree height")]),t._v(" "),a("td",[t._v("Tree height")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Weighted Quick-Union")])]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("lgN")]),t._v(" "),a("td",[t._v("lgN")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Weighted Quick-Union With Path Compression")])]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("Very near to 1 (amortized)")]),t._v(" "),a("td",[t._v("Very near to 1 (amortized)")])])])]),t._v(" "),a("p",[t._v("参考资料：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/dm_vincent/article/details/7655764?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase",target:"_blank",rel:"noopener noreferrer"}},[t._v("并查集(Union-Find)算法介绍"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);