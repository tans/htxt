let test1 = `

<h1>
标题1

<p>
段落1
-
段落1


<p>
段落2 访问<地址1>， 
展示 <图片1>


-标题=我是标题
-地址1=<a href="github.com/tans">tans</a>
-图片1=<img src="test.jpg"/>

`


console.log(test1);

let parse = require('./parse')


console.log(parse(test1))