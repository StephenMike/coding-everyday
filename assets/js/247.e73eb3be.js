(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{856:function(t,_,r){"use strict";r.r(_);var a=r(42),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("ul",[r("li",[r("a",{attrs:{href:"#1-rnn%E4%B8%8Elstm"}},[t._v("1. RNN与LSTM")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#11-rnn%E6%A6%82%E8%BF%B0"}},[t._v("1.1. RNN概述")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#12-rnn%E5%88%86%E7%B1%BB"}},[t._v("1.2. RNN分类")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#121-%E8%BE%93%E5%85%A5%E4%B8%8E%E8%BE%93%E5%87%BA%E5%A4%9A%E5%AF%B9%E5%A4%9A"}},[t._v("1.2.1. 输入与输出多对多")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#122-%E8%BE%93%E5%85%A5%E4%B8%8E%E8%BE%93%E5%87%BA%E5%A4%9A%E5%AF%B9%E4%B8%80"}},[t._v("1.2.2. 输入与输出多对一")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#123-%E8%BE%93%E5%85%A5%E4%B8%8E%E8%BE%93%E5%87%BA%E4%B8%80%E5%AF%B9%E5%A4%9A"}},[t._v("1.2.3. 输入与输出一对多")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#13-rnn%E7%9A%84%E8%AE%AD%E7%BB%83"}},[t._v("1.3. RNN的训练")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#14-vanilla-rnn%E7%9A%84%E8%AE%AD%E7%BB%83%E9%97%AE%E9%A2%98"}},[t._v("1.4. VANILLA RNN的训练问题")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#15-long-short-term-memory-lstm"}},[t._v("1.5. Long-Short Term Memory (LSTM)")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#16-%E7%90%86%E8%A7%A3lstm"}},[t._v("1.6. 理解LSTM")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#17-lstm%E7%9A%84%E6%A0%B8%E5%BF%83%E6%80%9D%E6%83%B3"}},[t._v("1.7. LSTM的核心思想")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#18-%E4%B8%89%E4%B8%AA%E9%97%A8"}},[t._v("1.8. 三个门")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#19-lstm%E7%9A%84%E5%8F%98%E7%A7%8D"}},[t._v("1.9. LSTM的变种")])])])])]),t._v(" "),r("h2",{attrs:{id:"_1-rnn与lstm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-rnn与lstm"}},[t._v("#")]),t._v(" 1. RNN与LSTM")]),t._v(" "),r("h3",{attrs:{id:"_1-1-rnn概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-rnn概述"}},[t._v("#")]),t._v(" 1.1. RNN概述")]),t._v(" "),r("p",[t._v("RNN（"),r("strong",[t._v("Recurrent Neural Network")]),t._v("）是一类用于"),r("strong",[t._v("处理序列数据")]),t._v("的神经网络。")]),t._v(" "),r("p",[t._v("首先我们要明确什么是序列数据，时间序列数据是指在不同时间点上收集到的数据，这类数据反映了某一事物、现象等"),r("strong",[t._v("随时间的变化状态或程度")]),t._v("。")]),t._v(" "),r("p",[t._v("这是时间序列数据的定义，当然这里"),r("strong",[t._v("也可以不是时间，比如文字序列")]),t._v("，但总归序列数据有一个特点——"),r("strong",[t._v("后面的数据跟前面的数据有关系")]),t._v("。")]),t._v(" "),r("p",[t._v("基础的神经网络只在"),r("strong",[t._v("层与层之间建立了权连接")]),t._v("，RNN最大的不同之处就是在"),r("strong",[t._v("层之间的神经元之间也建立的权连接")]),t._v("。如图。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610090550_4399444fb943.png",alt:"img"}})]),t._v(" "),r("p",[t._v("循环神经网络(Recurrent Neural Network, RNN): "),r("strong",[t._v("t时刻的状态，与t-1时刻的状态和t时刻的输入有关。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610090739_c604e2c51327.png",alt:"img"}})]),t._v(" "),r("p",[t._v("其中，"),r("strong",[t._v("ℎt为t时刻的状态，xt为t时刻的输入")]),t._v("。")]),t._v(" "),r("p",[t._v("请注意："),r("strong",[t._v("fW与t无关")]),t._v("。")]),t._v(" "),r("p",[t._v("可以证明若"),r("strong",[t._v("fW为三层神经网络")]),t._v("，且状态数有限， 则"),r("strong",[t._v("RNN可以模拟GMM-HMM")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610090927_4676279abda7.png",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"_1-2-rnn分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-rnn分类"}},[t._v("#")]),t._v(" 1.2. RNN分类")]),t._v(" "),r("p",[t._v("RNN可以根据输入和输出的数量关系，分为以下几类：")]),t._v(" "),r("h4",{attrs:{id:"_1-2-1-输入与输出多对多"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-输入与输出多对多"}},[t._v("#")]),t._v(" 1.2.1. 输入与输出多对多")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610091013_f10d7d9e9232.png",alt:"img"}})]),t._v(" "),r("p",[t._v("典型应用："),r("strong",[t._v("大词汇连续语音识别、机器翻译")])]),t._v(" "),r("p",[r("strong",[t._v("RNN做语音识别:")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610091622_21dbabea7c27.png",alt:"img"}})]),t._v(" "),r("p",[t._v("输入特征向量，输出对应的文字。用RNN进行Triphone的识别，在TIMIT数据集上获得了比DNN-HMM更高的识别率。")]),t._v(" "),r("blockquote",[r("p",[t._v("A. Graves, A. Mohamed and G. Hinton, Speech Recognition with Deep Recurrent Neural Networks, arXiv:1303.5778")])]),t._v(" "),r("h4",{attrs:{id:"_1-2-2-输入与输出多对一"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-输入与输出多对一"}},[t._v("#")]),t._v(" 1.2.2. 输入与输出多对一")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610091126_c7e6f9be35de.png",alt:"img"}})]),t._v(" "),r("p",[t._v("典型应用：动作识别、行为识别、单词量有限的语音识别")]),t._v(" "),r("h4",{attrs:{id:"_1-2-3-输入与输出一对多"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-输入与输出一对多"}},[t._v("#")]),t._v(" 1.2.3. 输入与输出一对多")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610091204_b617525fbea7.png",alt:"img"}})]),t._v(" "),r("p",[t._v("典型应用："),r("strong",[t._v("文本生成、图像文字标注")])]),t._v(" "),r("p",[r("strong",[t._v("RNN做文本生成：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610091728_d631d719f5fb.png",alt:"img"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610091804_f3b2a42275a9.png",alt:"img"}})]),t._v(" "),r("p",[t._v("输入h、e、l、o，四个字母，期待输出hello。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610092109_9a3a04aeb1e5.png",alt:"img"}})]),t._v(" "),r("p",[t._v("训练样本为莎士比亚文本。")]),t._v(" "),r("p",[r("strong",[t._v("RNN做图像注释 （IMAGE CAPTIONING）：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610092229_bb668c56df58.png",alt:"img"}})]),t._v(" "),r("p",[t._v("输入：图像，输出：描述性文字。")]),t._v(" "),r("blockquote",[r("p",[t._v("O. Vinyals et al. Show and tell: A neural image caption generator, arXiv:1411.4555v1, 2014.")])]),t._v(" "),r("h3",{attrs:{id:"_1-3-rnn的训练"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-rnn的训练"}},[t._v("#")]),t._v(" 1.3. RNN的训练")]),t._v(" "),r("p",[t._v("可以将RNN沿时间轴展开，如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610091328_ddf0c69a4af4.png",alt:"img"}})]),t._v(" "),r("p",[t._v("前向计算后，将每一个时刻t的LOSS加到一起作为总的目标函数，逐级求导。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610091425_d60d07b9cbe1.png",alt:"img"}})]),t._v(" "),r("p",[t._v("由于所有数据都求导不现实，所以实际中采用的是"),r("strong",[t._v("将RNN截断有限步，实际中只求有限步的导数")])]),t._v(" "),r("h3",{attrs:{id:"_1-4-vanilla-rnn的训练问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-vanilla-rnn的训练问题"}},[t._v("#")]),t._v(" 1.4. VANILLA RNN的训练问题")]),t._v(" "),r("blockquote",[r("p",[t._v("\\1. Bengio et al. Learning long-term dependencies with gradient descent is difficult. IEEE Transactions on Neural Networks, 1994\n\\2. Pascanu et al, On the difficulty of training recurrent neural networks.")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610092928_2064a7fe24e5.png",alt:"img"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610093014_2a1699a3dcdc.png",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("训练中h0获得的梯度，将是矩阵W的对应于h0的部分被乘了很多次，将会导致梯度暴涨或梯度消失。")])]),t._v(" "),r("h3",{attrs:{id:"_1-5-long-short-term-memory-lstm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-long-short-term-memory-lstm"}},[t._v("#")]),t._v(" 1.5. Long-Short Term Memory (LSTM)")]),t._v(" "),r("p",[t._v("LSTM是RNN中的一种，"),r("strong",[t._v("增加了RNN中单元的复杂度")]),t._v("，使模型更复杂，"),r("strong",[t._v("增加系统表现力")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610093131_16d126df5771.png",alt:"img"}})]),t._v(" "),r("blockquote",[r("p",[t._v("Hochreiter and Schmidhuber, Long Short Term Memory, Neural Computation, 1997")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610093228_2eb0415884c2.png",alt:"img"}})]),t._v(" "),r("p",[t._v("相比VANILLA RNN， "),r("strong",[t._v("LSTM的误差反向传播更方便和直接，梯度更新不存在RNN中的暴涨或消失现象。")])]),t._v(" "),r("p",[t._v("LSTM"),r("strong",[t._v("用更复杂的函数代替原来的简单的函数****，使模型更有表现力。同时它的误差通过c传递回去将会非常直接")]),t._v(" 。\n"),r("strong",[t._v("建议涉及RNN的应用都用LSTM或LSTM相关的变种")]),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"_1-6-理解lstm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-理解lstm"}},[t._v("#")]),t._v(" 1.6. 理解LSTM")]),t._v(" "),r("p",[t._v("如果我们需要预测“"),r("strong",[t._v("the clouds are in the sky")]),t._v("”这句话的最后一个字，我们不需要其他的信息，通过前面的语境就能知道最后一个字应该是sky。在这种情况下，"),r("strong",[t._v("相关信息与需要该信息的位置距离较近")]),t._v("，RNN能够学习利用以前的信息来对当前任务进行相应的操作。")]),t._v(" "),r("p",[t._v("假设现在有个更为复杂的任务，需要预测“"),r("strong",[t._v("I grew up in France… I speak fluent French")]),t._v(".”中的最后一个字，这次的有"),r("strong",[t._v("用信息与需要进行处理信息的地方之间的距离较远")]),t._v("，这样容易导致RNN不能学习到有用的信息，最终推导的任务可能失败。")]),t._v(" "),r("p",[t._v("LSTM设计出来是"),r("strong",[t._v("为了解决长依赖问题")]),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"_1-7-lstm的核心思想"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-lstm的核心思想"}},[t._v("#")]),t._v(" 1.7. LSTM的核心思想")]),t._v(" "),r("p",[t._v("LSTM的核心是"),r("strong",[t._v("细胞状态，用贯穿细胞的水平线表示")]),t._v("。")]),t._v(" "),r("p",[t._v("细胞状态像"),r("strong",[t._v("传送带一样。它贯穿整个细胞却只有很少的分支")]),t._v("，这样能保证信息不变的流过整个RNN。细胞状态如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610094405_a6b27b248299.png",alt:"img"}})]),t._v(" "),r("p",[t._v("LSTM网络能"),r("strong",[t._v("通过一种被称为门的结构对细胞状态进行删除或者添加信息")]),t._v("。")]),t._v(" "),r("p",[t._v("门能够有选择性的决定让哪些信息通过。其实"),r("strong",[t._v("门的结构很简单，就是一个sigmoid层和一个点乘操作的组合")]),t._v("。如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610094454_f1fca6ff442c.png",alt:"img"}})]),t._v(" "),r("p",[t._v("因为sigmoid层的输出是0-1的值，这代表有多少信息能够流过sigmoid层。"),r("strong",[t._v("0表示都不能通过，1表示都能通过。")])]),t._v(" "),r("h3",{attrs:{id:"_1-8-三个门"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-三个门"}},[t._v("#")]),t._v(" 1.8. 三个门")]),t._v(" "),r("p",[t._v("一个LSTM里面包含三个门来控制细胞状态，这三个门分别称为"),r("strong",[t._v("忘记门、输入门和输出门")]),t._v("。")]),t._v(" "),r("p",[t._v("LSTM的第一步就是"),r("strong",[t._v("决定细胞状态需要丢弃哪些信息")]),t._v("。这部分操作是通过一个称为忘记门的sigmoid单元来处理的。它通过查看ht-1和xt信息来输出一个0-1之间的向量，该向量里面的0-1值表示细胞状态Ct-1中的哪些信息保留或丢弃多少。0表示不保留，1表示都保留。忘记门如下图所示。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610094604_9bf4692b78d6.png",alt:"img"}})]),t._v(" "),r("p",[t._v("下一步是"),r("strong",[t._v("决定给细胞状态添加哪些新的信息")]),t._v("。这一步又分为两个步骤，首先，利用ht-1和xt通过一个称为输入门的操作来决定更新哪些信息。然后利用ht-1和xt通过一个tanh层得到新的候选细胞信息Ct'，这些信息可能会被更新到细胞信息中。这两步描述如下图所示。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610095417_6d97cb7832fd.png",alt:"img"}})]),t._v(" "),r("p",[t._v("下面将"),r("strong",[t._v("更新旧的细胞信息Ct-1，变为新的细胞信息Ct")]),t._v("。更新的规则就是通过忘记门选择忘记旧细胞信息的一部分，通过输入门选择添加候选细胞信息Ct'的一部分得到新的细胞信息Ct。更新操作如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610095520_dbd124b53737.png",alt:"img"}})]),t._v(" "),r("p",[t._v("更新完细胞状态后需要"),r("strong",[t._v("根据输入的ht-1和xt来判断输出细胞的哪些状态特征")]),t._v("，这里需要将输入经过一个称为输出门的sigmoid层得到判断条件，然后将细胞状态经过tanh层得到一个-1~1之间值的向量，该向量与输出门得到的判断条件相乘就得到了最终该RNN单元的输出。该步骤如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610095656_7e0f024d23f0.png",alt:"img"}})]),t._v(" "),r("p",[t._v("总结如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610101327_920750760bed.png",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"_1-9-lstm的变种"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-lstm的变种"}},[t._v("#")]),t._v(" 1.9. LSTM的变种")]),t._v(" "),r("p",[t._v("之前描述的LSTM结构是最为普通的。在实际的文章中LSTM的结构存在各种变式，虽然变化都不会太大，但是也值得一提。\n其中一个很受欢迎的变式由"),r("a",{attrs:{href:"https://links.jianshu.com/go?to=ftp%3A%2F%2Fftp.idsia.ch%2Fpub%2Fjuergen%2FTimeCount-IJCNN2000.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gers & Schmidhuber (2000)"),r("OutboundLink")],1),t._v("提出，它在LSTM的结构中加入了“peephole connections.”结构，peephole connections结构的作用是允许各个门结构能够看到细胞信息，具体如下图所示。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610095820_671430f4cd49.png",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("上图描绘的是所有门都能看到细胞信息，还有一些变式是在其中的某些门引入细胞信息")]),t._v("。")]),t._v(" "),r("p",[t._v("还有一种变式是在忘记门与输入门之间引入一个耦合。不同于之前的LSTM结构，"),r("strong",[t._v("忘记门和输入门是独立的")]),t._v("，这个变式是在忘记门删除历史信息的位置加入新的信息，在加入新信息的位置删除旧信息。该结构如下图所示。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610095929_8d3f15a4c61b.png",alt:"img"}})]),t._v(" "),r("p",[t._v("一种比其他形式变化更为显著的LSTM变式是由 Cho, et al. (2014)提出的门循环单元（GRU）。"),r("strong",[t._v("它将忘记门和输入门合并成一个新的门，称为更新门")]),t._v("。GRU还有一个门称为重置门。如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.uwayfly.com/article_mike_20200610100003_19faebd2b667.png",alt:"img"}})]),t._v(" "),r("p",[r("em",[t._v("其中重置门为上图中前面那个门，决定了如何将新的输入信息与前面的记忆相结合。更新门为上图中后面那个门，定义了前面记忆保存到当前时间步的量")]),t._v("。由于该变式的简单有效，后来被广泛应用。")]),t._v(" "),r("p",[t._v("这里介绍的只是一些较为有名的LSTM变式，关于LSTM的变式其实还有很多种，像 "),r("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Farxiv.org%2Fpdf%2F1508.03790v2.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yao, et al. (2015)"),r("OutboundLink")],1),t._v("提出的Depth Gated RNNs。还有其他用于解决长依赖问题的方法，如由 "),r("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Farxiv.org%2Fpdf%2F1402.3511v1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Koutnik, et al. (2014)"),r("OutboundLink")],1),t._v("提出的 Clockwork RNNs。")]),t._v(" "),r("p",[t._v("至于哪种变式效果最好？各种差异对LSTM的影响有多少？这些问题 "),r("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Farxiv.org%2Fpdf%2F1503.04069.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Greff, et al. (2015)"),r("OutboundLink")],1),t._v("做了一些对比，结论是他们基本是一样的。 "),r("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Fjmlr.org%2Fproceedings%2Fpapers%2Fv37%2Fjozefowicz15.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jozefowicz, et al. (2015)"),r("OutboundLink")],1),t._v("测试了一万多种RNN结构，发现一些架构在某些任务上也取得了比 LSTM 更好的结果。")])])}),[],!1,null,null,null);_.default=v.exports}}]);