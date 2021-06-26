(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{961:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#1-%E6%B3%A8%E8%A7%A3"}},[t._v("1. 注解")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#11-%E5%85%83%E6%B3%A8%E8%A7%A3"}},[t._v("1.1. 元注解")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#12-target"}},[t._v("1.2. @Target")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#13-retention"}},[t._v("1.3. @Retention")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#14-repeatable"}},[t._v("1.4. @Repeatable")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#15-inherited"}},[t._v("1.5. @Inherited")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#2-%E5%A4%84%E7%90%86%E6%B3%A8%E8%A7%A3"}},[t._v("2. 处理注解")])])]),t._v(" "),s("h3",{attrs:{id:"_1-注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-注解"}},[t._v("#")]),t._v(" 1. 注解")]),t._v(" "),s("p",[t._v("Java的注解可以分为三类：")]),t._v(" "),s("p",[t._v("第一类是由编译器使用的注解，例如：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@Override")]),t._v("：让编译器检查该方法是否正确地实现了覆写；")]),t._v(" "),s("li",[s("code",[t._v("@SuppressWarnings")]),t._v("：告诉编译器忽略此处代码产生的警告。")])]),t._v(" "),s("p",[t._v("这类注解不会被编译进入"),s("code",[t._v(".class")]),t._v("文件，它们在编译后就被编译器扔掉了。")]),t._v(" "),s("p",[t._v("第二类是由工具处理"),s("code",[t._v(".class")]),t._v("文件使用的注解，比如有些工具会在加载class的时候，对class做动态修改，实现一些特殊的功能。这类注解会被编译进入"),s("code",[t._v(".class")]),t._v("文件，但加载结束后并不会存在于内存中。这类注解只被一些底层库使用，一般我们不必自己处理。")]),t._v(" "),s("p",[t._v("第三类是在程序运行期能够读取的注解，它们在加载后一直存在于JVM中，这也是最常用的注解。例如，一个配置了"),s("code",[t._v("@PostConstruct")]),t._v("的方法会在调用构造方法后自动被调用（这是Java代码读取该注解实现的功能，JVM并不会识别该注解）。")]),t._v(" "),s("p",[t._v("定义一个注解时，还可以定义配置参数。配置参数可以包括：")]),t._v(" "),s("ul",[s("li",[t._v("所有基本类型；")]),t._v(" "),s("li",[t._v("String；")]),t._v(" "),s("li",[t._v("枚举类型；")]),t._v(" "),s("li",[t._v("基本类型、String、Class以及枚举的数组。")])]),t._v(" "),s("p",[t._v("因为配置参数必须是常量，所以，上述限制保证了注解在定义时就已经确定了每个参数的值。")]),t._v(" "),s("p",[t._v("注解的配置参数可以有默认值，缺少某个配置参数时将使用默认值。")]),t._v(" "),s("p",[t._v("此外，大部分注解会有一个名为"),s("code",[t._v("value")]),t._v("的配置参数，对此参数赋值，可以只写常量，相当于省略了value参数。")]),t._v(" "),s("p",[t._v("如果只写注解，相当于全部使用默认值。")]),t._v(" "),s("p",[t._v("举个例子：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @Check(value=99)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Check")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_1-1-元注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-元注解"}},[t._v("#")]),t._v(" 1.1. 元注解")]),t._v(" "),s("p",[t._v("有一些注解可以修饰其他注解，这些注解就称为元注解（meta annotation）")]),t._v(" "),s("h4",{attrs:{id:"_1-2-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-target"}},[t._v("#")]),t._v(" 1.2. @Target")]),t._v(" "),s("p",[t._v("最常用的元注解是"),s("code",[t._v("@Target")]),t._v("。使用"),s("code",[t._v("@Target")]),t._v("可以定义"),s("code",[t._v("Annotation")]),t._v("能够被应用于源码的哪些位置：")]),t._v(" "),s("ul",[s("li",[t._v("类或接口："),s("code",[t._v("ElementType.TYPE")]),t._v("；")]),t._v(" "),s("li",[t._v("字段："),s("code",[t._v("ElementType.FIELD")]),t._v("；")]),t._v(" "),s("li",[t._v("方法："),s("code",[t._v("ElementType.METHOD")]),t._v("；")]),t._v(" "),s("li",[t._v("构造方法："),s("code",[t._v("ElementType.CONSTRUCTOR")]),t._v("；")]),t._v(" "),s("li",[t._v("方法参数："),s("code",[t._v("ElementType.PARAMETER")]),t._v("。")])]),t._v(" "),s("p",[t._v("例如，定义注解"),s("code",[t._v("@Report")]),t._v("可用在方法上，我们必须添加一个"),s("code",[t._v("@Target(ElementType.METHOD)")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("METHOD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("定义注解"),s("code",[t._v("@Report")]),t._v("可用在方法或字段上，可以把"),s("code",[t._v("@Target")]),t._v("注解参数变为数组"),s("code",[t._v("{ ElementType.METHOD, ElementType.FIELD }")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"_1-3-retention"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-retention"}},[t._v("#")]),t._v(" 1.3. @Retention")]),t._v(" "),s("p",[t._v("另一个重要的元注解"),s("code",[t._v("@Retention")]),t._v("定义了"),s("code",[t._v("Annotation")]),t._v("的生命周期：")]),t._v(" "),s("ul",[s("li",[t._v("仅编译期："),s("code",[t._v("RetentionPolicy.SOURCE")]),t._v("；")]),t._v(" "),s("li",[t._v("仅class文件："),s("code",[t._v("RetentionPolicy.CLASS")]),t._v("；")]),t._v(" "),s("li",[t._v("运行期："),s("code",[t._v("RetentionPolicy.RUNTIME")]),t._v("。")])]),t._v(" "),s("p",[t._v("如果"),s("code",[t._v("@Retention")]),t._v("不存在，则该"),s("code",[t._v("Annotation")]),t._v("默认为"),s("code",[t._v("CLASS")]),t._v("。因为通常我们自定义的"),s("code",[t._v("Annotation")]),t._v("都是"),s("code",[t._v("RUNTIME")]),t._v("，所以，务必要加上"),s("code",[t._v("@Retention(RetentionPolicy.RUNTIME)")]),t._v("这个元注解：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUNTIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_1-4-repeatable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-repeatable"}},[t._v("#")]),t._v(" 1.4. @Repeatable")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("@Repeatable")]),t._v("这个元注解可以定义"),s("code",[t._v("Annotation")]),t._v("是否可重复。这个注解应用不是特别广泛。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Repeatable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Reports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("经过"),s("code",[t._v("@Repeatable")]),t._v("修饰后，在某个类型声明处，就可以添加多个"),s("code",[t._v("@Report")]),t._v("注解：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" level"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" level"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warning"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_1-5-inherited"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-inherited"}},[t._v("#")]),t._v(" 1.5. @Inherited")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("@Inherited")]),t._v("定义子类是否可继承父类定义的"),s("code",[t._v("Annotation")]),t._v("。"),s("code",[t._v("@Inherited")]),t._v("仅针对"),s("code",[t._v("@Target(ElementType.TYPE)")]),t._v("类型的"),s("code",[t._v("annotation")]),t._v("有效，并且仅针对"),s("code",[t._v("class")]),t._v("的继承，对"),s("code",[t._v("interface")]),t._v("的继承无效：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Inherited")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在使用的时候，如果一个类用到了"),s("code",[t._v("@Report")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("则它的子类默认也定义了该注解：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("小结：")]),t._v(" "),s("ol",[s("li",[t._v("Java使用"),s("code",[t._v("@interface")]),t._v("定义注解：")]),t._v(" "),s("li",[t._v("可定义多个参数和默认值，核心参数使用"),s("code",[t._v("value")]),t._v("名称；")]),t._v(" "),s("li",[t._v("必须设置"),s("code",[t._v("@Target")]),t._v("来指定"),s("code",[t._v("Annotation")]),t._v("可以应用的范围；")]),t._v(" "),s("li",[t._v("应当设置"),s("code",[t._v("@Retention(RetentionPolicy.RUNTIME)")]),t._v("便于运行期读取该"),s("code",[t._v("Annotation")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"_2-处理注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-处理注解"}},[t._v("#")]),t._v(" 2. 处理注解")]),t._v(" "),s("p",[t._v("注解定义后也是一种"),s("code",[t._v("class")]),t._v("，所有的注解都继承自"),s("code",[t._v("java.lang.annotation.Annotation")]),t._v("，因此，读取注解，需要使用反射API。")]),t._v(" "),s("p",[t._v("Java提供的使用反射API读取"),s("code",[t._v("Annotation")]),t._v("的方法包括：")]),t._v(" "),s("p",[t._v("判断某个注解是否存在于"),s("code",[t._v("Class")]),t._v("、"),s("code",[t._v("Field")]),t._v("、"),s("code",[t._v("Method")]),t._v("或"),s("code",[t._v("Constructor")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Class.isAnnotationPresent(Class)")])]),t._v(" "),s("li",[s("code",[t._v("Field.isAnnotationPresent(Class)")])]),t._v(" "),s("li",[s("code",[t._v("Method.isAnnotationPresent(Class)")])]),t._v(" "),s("li",[s("code",[t._v("Constructor.isAnnotationPresent(Class)")])])]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断@Report是否存在于Person类:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAnnotationPresent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("使用反射API读取Annotation：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Class.getAnnotation(Class)")])]),t._v(" "),s("li",[s("code",[t._v("Field.getAnnotation(Class)")])]),t._v(" "),s("li",[s("code",[t._v("Method.getAnnotation(Class)")])]),t._v(" "),s("li",[s("code",[t._v("Constructor.getAnnotation(Class)")])])]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取Person定义的@Report注解:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),t._v(" report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAnnotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" level "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("使用反射API读取"),s("code",[t._v("Annotation")]),t._v("有两种方法。方法一是先判断"),s("code",[t._v("Annotation")]),t._v("是否存在，如果存在，就直接读取：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),t._v(" cls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAnnotationPresent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),t._v(" report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAnnotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("第二种方法是直接读取"),s("code",[t._v("Annotation")]),t._v("，如果"),s("code",[t._v("Annotation")]),t._v("不存在，将返回"),s("code",[t._v("null")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),t._v(" cls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),t._v(" report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAnnotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("读取方法、字段和构造方法的"),s("code",[t._v("Annotation")]),t._v("和Class类似。但要读取方法参数的"),s("code",[t._v("Annotation")]),t._v("就比较麻烦一点，因为方法参数本身可以看成一个数组，而每个参数又可以定义多个注解，所以，一次获取方法参数的所有注解就必须用一个二维数组来表示。例如，对于以下方法定义的注解：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotNull")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotNull")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" prefix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("要读取方法参数的注解，我们先用反射获取"),s("code",[t._v("Method")]),t._v("实例，然后读取方法参数的所有注解：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取Method实例:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取所有参数的Annotation:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Annotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" annos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParameterAnnotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个参数（索引为0）的所有Annotation:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Annotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" annosOfName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" annos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Annotation")]),t._v(" anno "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" annosOfName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anno "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @Range注解")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Range")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" anno"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anno "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotNull")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @NotNull注解")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotNull")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotNull")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" anno"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);