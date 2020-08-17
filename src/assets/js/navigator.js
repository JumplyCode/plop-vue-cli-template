/**
 * 判断终端
 */

var getNavigator = {
	userAgent: navigator.userAgent,
	toLowerCase: navigator.userAgent.toLowerCase(),
	init: function() {
		//
	},
	// 判断是否为移动终端
	mobile: function() {
		var isMobile = this.userAgent.match(/AppleWebKit.*Mobile.*/);
		return isMobile
	},
	// 判断微信
	wx: function() {
		var isWeixin = this.toLowerCase.indexOf('micromessenger') != -1;
		return isWeixin
	},
	// 判断QQ
	qq: function() {
		var isQQ = this.toLowerCase.match(/QQ/i) == "QQ";
		return isQQ
	},
	// 判断微博
	weibo: function() {
		var isWeiBo = this.toLowerCase.match(/WeiBo/i) == "WeiBo";
		return isWeiBo
	},
	// 判断ios
	ios: function() {
		var isIos = !!this.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		return isIos
	},
	// 判断android
	android: function() {
		var isAndroid = this.userAgent.indexOf('Android') != -1;
		return isAndroid
	},
	// 判断是否为iPhone或者QQHD浏览器
	iPhone: function() {
		var isIphone = this.userAgent.indexOf('iPhone') != -1;
		return isIphone
	},
	// 判断是否为iPhone或者QQHD浏览器
	iPad: function() {
		var isIpad = this.userAgent.indexOf('iPad') != -1;
		return isIpad
	},
	// 是否web应该程序，没有头部与底部
	webApp: function() {
		var isSafari = this.userAgent.indexOf('Safari') != -1;
		return isSafari
	},
	// IE内核
	trident: function() {
		var isTrident = this.userAgent.indexOf('Trident') != -1;
		return isTrident
	},
	// opera内核
	presto: function() {
		var isPresto = this.userAgent.indexOf('presto') != -1;
		return isPresto
	},
	// 苹果、谷歌内核
	webKit: function() {
		var isAppleWebKit = this.userAgent.indexOf('AppleWebKit') != -1;
		return isAppleWebKit
	},
	// 火狐内核
	gecko: function() {
		var isGecko = this.userAgent.indexOf('Gecko') > -1 && this.userAgent.indexOf('KHTML') == -1;
		return isGecko
	}
		
};

export default getNavigator