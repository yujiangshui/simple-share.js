simple-share.js
===============

简单高效的社会化分享代码。

当网站需要添加社会化分享功能的时候，你会马上想到 [Baidu Share](http://share.baidu.com/) 或者 [JiaThis](http://www.jiathis.com/) 这类的第三方分享聚合工具。你可以通过配置获取一段代码，粘贴进你自己得网站上即可完成功能需求。

有利也有弊，使用这种方式最大的问题就是**性能问题**和**自定义不方便**。

* 性能方面，哪怕你只需要分享到微博功能，你也需要加载一坨 JS，而常用的社会化分享只有几个而已；
* 自定义方面，你设计的分享图标等需要按照对方的结构进行自定义还需要对自带 CSS 做冲突处理，也会造成一些成本和代码冗余。

So，这个小插件就是应对这个需求产生的。

## 特性

简单、高效。本插件只支持八种最常用的社会化分享功能（微博、QQ空间、腾讯微博、人人、豆瓣、facebook、twitter、linkedin），并可以根据自己需求增加新的社会化分享目标。

所以只有几十行代码体积 1kb 左右。直接引入使用即可无须依赖其他库。

## 用法

1，在页面中引入该插件

`<script src="../build/simple-share.min.js"></script>`

2，new 一个实例并调用对应分享功能

new 一个实例并设置分享内容，后端动态输出

```
var share = new SimpleShare({
	url: 'http://www.taobao.com/',
	title: '淘宝',
	content: '淘宝是个很不错的购物网站',
	pic: 'http://gtms01.alicdn.com/tps/i1/T1SwHiFnlkXXc.QAHh-202-55.png'
});
```

在页面上触发调用

```
<a href="javascript:share.weibo();">weibo</a>
<a href="javascript:share.qzone();">qzone</a>
<a class="sharetotqq" href="javascript:;">tqq</a>
<a href="javascript:share.renren();">renren</a>
<a href="javascript:share.douban();">douban</a>
<a href="javascript:share.facebook();">facebook</a>
<a href="javascript:share.twitter();">twitter</a>
<a href="javascript:share.linkedin();">linkedin</a>
<a href="javascript:share.weixin();">weixin</a>
```
或者用其他事件触发

```
document.querySelector('.sharetotqq').addEventListener('click',function() {
	share.tqq();
});
```

同一页面多个不同的分享功能，请参照 `test/multiple-share.html` demo，new 多个实例调用。

由于微信的分享基于二维码，从简单灵活的角度考虑，你可以传递一个回调函数获取二维码进行下一步操作，比如将二维码图片插入到某个 img 标签里面并自定义样式外观等。用法如下：

```
share.weixin(function(qrcode){
	alert(qrcode);
});
```

## 参数

为了保证简洁，支持四个自定义参数：

```
{
	url: '分享的网址',
	title: '分享的标题',
	content: '分享摘要或者内容',
	pic: '分享图片 url '
}
```
参数全部可选，当全部为空时，会自动获取当前页面的 url 和 title 作为 url 和 title 属性调用分享。

## 添加更多社会化分享目标

方法1：查找对方 API 文档，找到分享接口格式等，组合添加。

方法2（推荐）：查看百度分享对应分享目标的接口格式，例如点击微博会跳转到

```
http://service.weibo.com/share/share.php?url=......&title=...&appkey=...&searchPic=false
```

这样得分享按钮，即可获得微博的分享格式，修改添加进 JS 文件中即可。

## TODO

* 测试添加 requirejs、seajs 支持

## 协议

MIT


