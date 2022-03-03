## htxt是又一种纯文本标记语言。通过简单的变量定义和替换规则，可转化成任何足够丰富的html。

htxt试图保持文本最大可读性同时保留灵活美观的排版输出需求。主要用于博客，文档等场景

## 示例

```

<h1>
入门手册

<p>
查看<htxt github>,了解更多

-title=htxt入门
-htxt github=<a href="https://github.com/tans/htxt">Github地址</a>

```

生成的文档是

```

<h1>入门手册</h1>
<p><a href="https://github.com/tans/htxt">Github地址</a></p>

```

parse 同时会把`title`和`htxt github`的参数返回, 供程序调用。


## 基本语法

1. 变量定义, 使用`-`开头定义文档变量

```

-title=入门手册
-Github地址=<a href="https://github.com/tans/htxt">Github地址</a>

```

变量不会输入页面， 只用作替换和解析返回。

2. 标签
	1. 块标签 - 包裹至下一个空行位置
	2. 行内标签 - 直接使用同名变量替换

## 常见问题

1. 外部输入变量，parse时候传入即可
2. 输入空行， 块元素中包含空行，可以用`|`一行代表空行。


