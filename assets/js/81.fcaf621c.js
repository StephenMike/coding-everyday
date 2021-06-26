(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{639:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"字符串匹配的kmp算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串匹配的kmp算法"}},[t._v("#")]),t._v(" 字符串匹配的KMP算法")]),t._v(" "),a("p",[t._v("字符串匹配是计算机的基本任务之一。")]),t._v(" "),a("p",[t._v('举例来说，有一个字符串"BBC ABCDAB ABCDABCDABDE"，我想知道，里面是否包含另一个字符串"ABCDABD"？')]),t._v(" "),a("p",[t._v("许多算法可以完成这个任务，"),a("strong",[t._v("Knuth-Morris-Pratt算法（简称KMP）"),a("strong",[t._v("是最常用的之一。它以三个发明者命名，起头的那个K就是著名科学家")]),t._v("Donald Knuth")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"一、字符串匹配的暴力解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、字符串匹配的暴力解法"}},[t._v("#")]),t._v(" 一、字符串匹配的暴力解法")]),t._v(" "),a("p",[t._v("我们需要对s1和s2这两个字符串逐个进行比较。如果两个字符相同，则比较下一个字符。如果不相同，则将s2子串向后移位，再重新进行比较。直到将s2遍历完或s2的尾端对齐s1的尾端，则算法结束。")]),t._v(" "),a("h3",{attrs:{id:"二、部分匹配表-partial-match-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、部分匹配表-partial-match-table"}},[t._v("#")]),t._v(" 二、部分匹配表(Partial Match Table)")]),t._v(" "),a("p",[t._v('首先，要了解两个概念："前缀"和"后缀"。 '),a("strong",[t._v('"前缀"指除了最后一个字符以外，一个字符串的全部头部组合；"后缀"指除了第一个字符以外，一个字符串的全部尾部组合')]),t._v("。一个简单的例子如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200709082427_9f51455133e1.png",alt:"img"}})]),t._v(" "),a("p",[t._v('"部分匹配值"就是"前缀"和"后缀"的最长的共有元素的长度。以"ABCDABD"为例，')]),t._v(" "),a("blockquote",[a("p",[t._v('－　"A"的前缀和后缀都为空集，共有元素的长度为0；\n－　"AB"的前缀为[A]，后缀为[B]，共有元素的长度为0；\n－　"ABC"的前缀为[A, AB]，后缀为[BC, C]，共有元素的长度0；\n－　"ABCD"的前缀为[A, AB, ABC]，后缀为[BCD, CD, D]，共有元素的长度为0；\n－　"ABCDA"的前缀为[A, AB, ABC, ABCD]，后缀为[BCDA, CDA, DA, A]，共有元素为"A"，长度为1；\n－　"ABCDAB"的前缀为[A, AB, ABC, ABCD, ABCDA]，后缀为[BCDAB, CDAB, DAB, AB, B]，共有元素为"AB"，长度为2；\n－　"ABCDABD"的前缀为[A, AB, ABC, ABCD, ABCDA, ABCDAB]，后缀为[BCDABD, CDABD, DABD, ABD, BD, D]，共有元素的长度为0。')])]),t._v(" "),a("p",[t._v("所以'ABCDABD'的部分匹配表就是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200709082657_f9650cd5585a.png",alt:"img"}})]),t._v(" "),a("p",[t._v('"部分匹配"的实质是，有时候，字符串头部和尾部会有重复。比如，"ABCDAB"之中有两个"AB"，那么它的"部分匹配值"就是2（"AB"的长度）。'),a("strong",[t._v('搜索词移动的时候，第一个"AB"向后移动4位（字符串长度-部分匹配值），就可以来到第二个"AB"的位置')]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200709082826_41ba34e73a20.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"三、kmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、kmp"}},[t._v("#")]),t._v(" 三、KMP")]),t._v(" "),a("ol",[a("li",[t._v("当搜索词移动到如下位置时，")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200709083156_6b12680b4bff.png",alt:"img"}})]),t._v(" "),a("p",[t._v('已知空格与D不匹配时，前面六个字符"ABCDAB"是匹配的。查表可知，'),a("strong",[t._v('最后一个匹配字符B对应的"部分匹配值"为2')]),t._v("，因此按照下面的公式算出向后移动的位数：")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("移动位数 = 已匹配的字符数 - 对应的部分匹配值")])])]),t._v(" "),a("p",[t._v("因为 6 - 2 等于4，所以将搜索词向后移动4位。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200709083212_f9fb3c50fd47.png",alt:"img"}})]),t._v(" "),a("p",[t._v('因为空格与Ｃ不匹配，搜索词还要继续往后移。这时，已匹配的字符数为2（"AB"），对应的"部分匹配值"为0。所以，移动位数 = 2 - 0，结果为 2，于是将搜索词向后移2位。')]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200709083224_07f857b70d68.png",alt:"img"}})]),t._v(" "),a("p",[t._v("因为空格与A不匹配，继续后移一位。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200709083238_56fd40534814.png",alt:"img"}})]),t._v(" "),a("p",[t._v("逐位比较，直到发现C与D不匹配。于是，移动位数 = 6 - 2，继续将搜索词向后移动4位。")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200709083246_3a33af2963fe.png",alt:"img"}})]),t._v(" "),a("p",[t._v("逐位比较，直到搜索词的最后一位，发现完全匹配，于是搜索完成。如果还要继续搜索（即找出全部匹配），移动位数 = 7 - 0，再将搜索词向后移动7位，这里就不再重复了。")]),t._v(" "),a("h3",{attrs:{id:"四、python实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、python实现"}},[t._v("#")]),t._v(" 四、python实现")]),t._v(" "),a("p",[t._v("next数组即为ptr中相同前后缀的最长长度，用-1代表没有，0代表1个字符，1代表2个字符，以此类推")]),t._v(" "),a("p",[t._v("eg: ptr 'ababaca'，next数组有ptr长度位，即7位")]),t._v(" "),a("p",[t._v("对第一位'a'而言，没有相同前后缀，next[0] = -1")]),t._v(" "),a("p",[t._v("对前两位'ab'而言，next[1] = -1")]),t._v(" "),a("p",[t._v("对前三位'aba'而言，next[2] = 0")]),t._v(" "),a("p",[t._v("以此类推，next为[-1, -1, 0, 1, 2, -1, 0]。 注意‘ababa’中前后缀为aba和aba,前缀不包含最后一位，后缀不包含第0位，意味着前后缀不能等于总长。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal_next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ptr第一位的没有最长前后缀，直接赋值为-1")]),t._v("\n\n  k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# k代表最长前后缀长度，赋值为-1")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从第二位开始遍历ptr")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设已有最长前缀为A，最长后缀为B，B的下一位ptr[p] != A的下一位ptr[k+1]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明最长前后缀不能持续下去")]),t._v("\n      \n      k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 往前回溯，尝试部分前缀，而非从第一位开始重新寻找最长前缀")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果A B的下一位相同")]),t._v("\n  \n      k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最长前后缀长度 + 1")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第p位的最长前后缀赋值为k")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kmp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cal_next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 求解next")]),t._v("\n  k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处k相当于ptr中已匹配的长度，类似一个指针指向ptr中已匹配的最后一位")]),t._v("\n  num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# str中ptr的数量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 遍历str")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设str中的A片段和ptr中的前A位已匹配，但A的下一位和ptr中A+1位不匹配")]),t._v("\n      k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 放弃A片段中的前若干位，因为它们不可能再匹配了")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用A片段的后若干位去匹配ptr中某一个最大前缀，像上面矩形图所示")]),t._v("\n      \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果A的下一位和ptr中A+1位相匹配")]),t._v("\n      k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果ptr走到尽头")]),t._v("\n      num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配到了一个")]),t._v("\n      k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num\n")])])]),a("h3",{attrs:{id:"五、时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、时间复杂度"}},[t._v("#")]),t._v(" 五、时间复杂度")]),t._v(" "),a("p",[t._v("简单来讲， 找到模式字符串中每位字符之前的最长相同前后缀的这个方法中，如果模式字符串的长度为m，那么上面的字符串的指向是一直向前移动的，下面字符串的整体也是一直向前移动的，最终移动的结果将会是长度为2m，所以比较次数也是最大为2m，时间复杂度为O(m)")]),t._v(" "),a("p",[t._v("kmp算法中，运用了找到模式字符串中每位字符之前的最长相同前后缀的这个方法的结果，然后使用类似的方法进行比较和移动，和上边的解释类似，如果这个要匹配的字符串长度为n，那最长的移动举例也超不过2n，所以总的时间复杂度为O(m+n)")]),t._v(" "),a("h3",{attrs:{id:"六、参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、参考资料"}},[t._v("#")]),t._v(" 六、参考资料")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("https://blog.csdn.net/CSDNwzl/article/details/88085359")])])])}),[],!1,null,null,null);s.default=r.exports}}]);