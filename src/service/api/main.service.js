/**
 * 基本接口,请不要在这文件里加其它接口
 * @param {string} url - 接口
 * @param {string} method - 请求类型
 * @param {string} encrypt - 1 不加密, 2 数字信封加密, 3 rsa加密
 * @param {string} headers - 请求头
 * @param {string} data - 参数体
 */

import request from "./../request";

const api = {};

// 示例
api.getList = function(params) {
    return request({
        url: './getList',
        method: 'post',
        data: params,
        headers: {
            'encrypt': 2
        }
    })
};





export default api