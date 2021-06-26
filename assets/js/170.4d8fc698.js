(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{778:function(t,e,s){"use strict";s.r(e);var r=s(42),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),s("h3",{attrs:{id:"react16架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react16架构"}},[t._v("#")]),t._v(" React16架构")]),t._v(" "),s("p",[t._v("React16架构可以分为三层：")]),t._v(" "),s("ul",[s("li",[t._v("Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入 Reconciler")]),t._v(" "),s("li",[t._v("Reconciler（协调器）—— 负责找出变化的组件")]),t._v(" "),s("li",[t._v("Renderer（渲染器）—— 负责将变化的组件渲染到页面上")])]),t._v(" "),s("h3",{attrs:{id:"scheduler、reconciler、renderer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scheduler、reconciler、renderer"}},[t._v("#")]),t._v(" Scheduler、Reconciler、Renderer")]),t._v(" "),s("p",[s("code",[t._v("Reconciler")]),t._v("工作的阶段被称为"),s("code",[t._v("render")]),t._v("阶段。因为在该阶段会调用组件的"),s("code",[t._v("render")]),t._v("方法。")]),t._v(" "),s("p",[s("code",[t._v("Renderer")]),t._v("工作的阶段被称为"),s("code",[t._v("commit")]),t._v("阶段。就像你完成一个需求的编码后执行"),s("code",[t._v("git commit")]),t._v("提交代码。"),s("code",[t._v("commit")]),t._v("阶段会把"),s("code",[t._v("render")]),t._v("阶段提交的信息渲染在页面上。")]),t._v(" "),s("p",[s("code",[t._v("render")]),t._v("与"),s("code",[t._v("commit")]),t._v("阶段统称为"),s("code",[t._v("work")]),t._v("，即React在工作中。相对应的，如果任务正在"),s("code",[t._v("Scheduler")]),t._v("内调度，就不属于"),s("code",[t._v("work")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"代数效应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代数效应"}},[t._v("#")]),t._v(" 代数效应")]),t._v(" "),s("p",[t._v("代数效应是函数式编程中的一个概念，用于将副作用从函数调用中分离。\n假设我们有一个函数"),s("code",[t._v("getTotalPicNum")]),t._v("，传入2个用户名称后，分别查找该用户在平台保存的图片数量，最后将图片数量相加后返回。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTotalPicNum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPicNum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPicNum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" picNum1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" picNum2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们虚构一个类似"),s("code",[t._v("try...catch")]),t._v("的语法 —— "),s("code",[t._v("try...handle")]),t._v("与两个操作符"),s("code",[t._v("perform")]),t._v("、"),s("code",[t._v("resume")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPicNum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" picNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" perform name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" picNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTotalPicNum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kaSong'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xiaoMing'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("who")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("who"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kaSong'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      resume "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("230")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xiaoMing'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      resume "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      resume "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("与"),s("code",[t._v("try...catch")]),t._v("最大的不同在于：当"),s("code",[t._v("Error")]),t._v("被"),s("code",[t._v("catch")]),t._v("捕获后，之前的调用栈就销毁了。而"),s("code",[t._v("handle")]),t._v("执行"),s("code",[t._v("resume")]),t._v("后会回到之前"),s("code",[t._v("perform")]),t._v("的调用栈。")]),t._v(" "),s("h3",{attrs:{id:"异步可中断更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步可中断更新"}},[t._v("#")]),t._v(" 异步可中断更新")]),t._v(" "),s("p",[t._v("在React15及以前，Reconciler采用递归的方式创建虚拟DOM，"),s("strong",[t._v("递归过程是不能中断的。如果组件树的层级很深，递归会占用线程很多时间，造成卡顿")]),t._v("。")]),t._v(" "),s("p",[t._v("为了解决这个问题，React16将递归的无法中断的更新重构为异步的可中断更新。")]),t._v(" "),s("p",[t._v("异步可中断更新可以理解为：更新在执行过程中可能会被打断（浏览器时间分片用尽或有更高优任务插队），当可以继续执行时恢复之前执行的中间状态。")]),t._v(" "),s("h3",{attrs:{id:"fiber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber"}},[t._v("#")]),t._v(" Fiber")]),t._v(" "),s("p",[t._v("我们可以将纤程("),s("code",[t._v("Fiber")]),t._v(")、协程("),s("code",[t._v("Generator")]),t._v(")理解为代数效应思想在JS中的体现。")]),t._v(" "),s("p",[s("code",[t._v("React Fiber")]),t._v("可以理解为：")]),t._v(" "),s("p",[t._v("React内部实现的一套状态更新机制。"),s("strong",[t._v("支持任务不同优先级")]),t._v("，"),s("strong",[t._v("可中断与恢复")]),t._v("，"),s("strong",[t._v("并且恢复后可以复用之前的中间状态")]),t._v("。")]),t._v(" "),s("p",[t._v("其中每个任务更新单元为"),s("code",[t._v("React Element")]),t._v("对应的"),s("code",[t._v("Fiber")]),t._v("节点。")]),t._v(" "),s("p",[t._v("Fiber节点可以保存对应的DOM节点。相应的，Fiber节点构成的Fiber树就对应DOM树。")]),t._v(" "),s("h3",{attrs:{id:"双缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双缓存"}},[t._v("#")]),t._v(" 双缓存")]),t._v(" "),s("p",[t._v("当我们用"),s("code",[t._v("canvas")]),t._v("绘制动画，每一帧绘制前都会调用"),s("code",[t._v("ctx.clearRect")]),t._v("清除上一帧的画面。")]),t._v(" "),s("p",[t._v("如果当前帧画面计算量比较大，导致清除上一帧画面到绘制当前帧画面之间有较长间隙，就会出现白屏。")]),t._v(" "),s("p",[t._v("为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。")]),t._v(" "),s("p",[t._v("这种"),s("strong",[t._v("在内存中构建并直接替换")]),t._v("的技术叫做双缓存 ("),s("code",[t._v("opens new window")]),t._v(")。")]),t._v(" "),s("p",[t._v("React使用“双缓存”来完成Fiber树的构建与替换——对应着DOM树的创建与更新。")]),t._v(" "),s("h3",{attrs:{id:"双缓存fiber树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双缓存fiber树"}},[t._v("#")]),t._v(" 双缓存Fiber树")]),t._v(" "),s("p",[t._v("在React中最多会同时存在两棵Fiber树。当前屏幕上显示内容对应的"),s("code",[t._v("Fiber")]),t._v("树称为"),s("code",[t._v("current Fiber")]),t._v("树，正在内存中构建的"),s("code",[t._v("Fiber")]),t._v("树称为"),s("code",[t._v("workInProgress Fiber")]),t._v("树。")]),t._v(" "),s("p",[s("code",[t._v("current Fiber")]),t._v("树中的Fiber节点被称为"),s("code",[t._v("current fiber")]),t._v("，"),s("code",[t._v("workInProgress Fiber")]),t._v("树中的Fiber节点被称为"),s("code",[t._v("workInProgress fiber")]),t._v("，他们通过"),s("code",[t._v("alternate")]),t._v("属性连接。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("currentFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" workInProgressFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworkInProgressFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" currentFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("React应用的根节点通过"),s("code",[t._v("current")]),t._v("指针在不同"),s("code",[t._v("Fiber")]),t._v("树的"),s("code",[t._v("rootFiber")]),t._v("间切换来实现Fiber树的切换。")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("workInProgress Fiber")]),t._v("树构建完成交给Renderer渲染在页面上后，应用根节点的current指针指向"),s("code",[t._v("workInProgress Fiber")]),t._v("树，此时"),s("code",[t._v("workInProgress Fiber")]),t._v("树就变为"),s("code",[t._v("current Fiber")]),t._v("树。")]),t._v(" "),s("p",[t._v("每次状态更新都会产生新的"),s("code",[t._v("workInProgress Fiber")]),t._v("树，通过"),s("code",[t._v("current")]),t._v("与"),s("code",[t._v("workInProgress")]),t._v("的替换，完成DOM更新。")])])}),[],!1,null,null,null);e.default=a.exports}}]);