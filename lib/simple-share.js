/*
 * simple-share
 * @yujiangshui
 * https://github.com/yujiangshui/simple-share.js
 *
 * Licensed under the MIT license.
 */

var SimpleShare = function (options) {

	// get share content
	options = options || {};
	var url = options.url || window.location.href;
	var title = options.title || document.title;
	var content = options.content || '';
	var pic = options.pic || '';

	// fix content format
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
	content = encodeURIComponent(content);
	pic = encodeURIComponent(pic);

	// share target url
	var qzone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={content}';
	var weibo = 'http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false';
	var tqq = 'http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey=801cf76d3cfc44ada52ec13114e84a96';
	var renren = 'http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&description={content}';
	var douban = 'http://www.douban.com/share/service?href={url}&name={title}&text={content}&image={pic}';
	var facebook = 'https://www.facebook.com/sharer/sharer.php?u={url}&t={title}&pic={pic}';
	var twitter = 'https://twitter.com/intent/tweet?text={title}&url={url}';
	var linkedin = 'https://www.linkedin.com/shareArticle?title={title}&summary={content}&mini=true&url={url}&ro=true';
	var weixin = 'http://qr.liantu.com/api.php?text={url}';
	var qq = 'http://connect.qq.com/widget/shareqq/index.html?url={url}&desc={title}&pics={pic}';

	// replace content functions
	function replaceAPI (api) {
		api = api.replace('{url}', url);
		api = api.replace('{title}', title);
		api = api.replace('{content}', content);
		api = api.replace('{pic}', pic);

		return api;
	}

	// share target
	this.qzone = function() {
		window.open(replaceAPI(qzone));
	};
	this.weibo = function() {
		window.open(replaceAPI(weibo));
	};
	this.tqq = function() {
		window.open(replaceAPI(tqq));
	};
	this.renren = function() {
		window.open(replaceAPI(renren));
	};
	this.douban = function() {
		window.open(replaceAPI(douban));
	};
	this.facebook = function() {
		window.open(replaceAPI(facebook));
	};
	this.twitter = function() {
		window.open(replaceAPI(twitter));
	};
	this.linkedin = function() {
		window.open(replaceAPI(linkedin));
	};
	this.qq = function() {
		window.open(replaceAPI(qq));
	};
	this.weixin = function(callback) {
		if (!callback) {
			window.open(replaceAPI(weixin));
		}else{
			callback(replaceAPI(weixin));
		}
	};

};