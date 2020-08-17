/** 公共配置
 * @config {object}
 */

const utils = {};

utils.setLocalStorage = function(name, data) {
    localStorage.setItem(name, data);
};

utils.getLocalStorage = function(name) {
    return localStorage.getItem(name);
};

utils.removeLocalStorage = function(name) {
    localStorage.removeItem(name);
};

utils.setSessionStorage = function(name, data) {
    sessionStorage.setItem(name, data);
};

utils.getSessionStorage = function(name) {
    return sessionStorage.getItem(name);
};

utils.removeSessionStorage = function(name) {
    sessionStorage.removeItem(name);
};

// 获取cookie
utils.getCookie = function(key) {
    // 获取cookie
    var data = document.cookie
    // 获取key第一次出现的位置    pwd=
    var startIndex = data.indexOf(key + '=')
    // name=123;pwd=abc
    // 如果开始索引值大于0表示有cookie
    if (startIndex > -1) {
      // key的起始位置等于出现的位置加key的长度+1
      startIndex = startIndex + key.length + 1
      // 结束位置等于从key开始的位置之后第一次;号所出现的位置
      var endIndex = data.indexOf(';', startIndex)
      // 如果未找到结尾位置则结尾位置等于cookie长度，之后的内容全部获取
      endIndex = endIndex < 0 ? data.length : endIndex
      return decodeURIComponent(data.substring(startIndex, endIndex))
    } else {
      return ''
    }
};

// 设置cookie
utils.setCookie = function(key, value, time=1) {
    var cur = new Date()
    cur.setTime(cur.getTime() + time * 24 * 3600 * 1000)
    document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + (time === undefined ? '' : cur.toGMTString())
};

// 删除cookie
utils.delCookie = function(key) {
    var data = this.getCookie(key)
    if (data !== false) {
      this.setCookie(key, data, -1)
    }
};

// 获取url参数
utils.getQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
};

// 图片压缩
utils.compress = function(file) {
    return new Promise(function(resolve, reject) {
        let fileObj = file;
        let reader = new FileReader();
        reader.readAsDataURL(fileObj); //转base64
        reader.onload = function (e) {
            let image = new Image(); //新建一个img标签（还没嵌入DOM节点)
            image.src = e.target.result;
            image.onload = function () {
                let canvas = document.createElement('canvas'), // 新建canvas
                    context = canvas.getContext('2d'),
                    imageWidth = image.width*1,    //压缩后图片的大小
                    imageHeight = image.height*1,
                    data = '';
                canvas.width = imageWidth;
                canvas.height = imageHeight;
                context.drawImage(image, 0, 0, imageWidth, imageHeight);
                data = canvas.toDataURL('image/jpeg'); // 输出压缩后的base64
                let arr = data.split(','), mime = arr[0].match(/:(.*?);/)[1], // 转成blob
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                let files = new window.File([new Blob([u8arr], {type: mime})], file.name, {type: 'image/jpeg'}) // 转成file
                resolve(files) // 回调
            }
        }
    });
    
},

// 获取主机域名
utils.getHost = function() {
    return '//'+window.location.host
},

// 脱敏
utils.desensitization = function(str, beginLen, endLen) {
    let len = str.length;
    let firstStr = str.substr(0, beginLen);
    let lastStr = str.substr(endLen);
    let middleStr = str.substring(beginLen, len-Math.abs(endLen)).replace(/[\s\S]/ig, '*');
    let tempStr = firstStr+middleStr+lastStr;
    return tempStr;
},


// 获取页面请求头
utils.getHeaders = function() {
    let req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    let headers = req.getAllResponseHeaders().toLowerCase();
    return req
}


export default utils