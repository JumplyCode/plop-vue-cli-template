/**
 * @param {object} serviceApi - 接口API
 */

let serviceApi = {};
function importAll(serviceArr) {
    serviceArr.keys().forEach(key => {
        Object.assign(serviceApi, serviceArr(key).default);
    });
}
  
importAll(require.context(".", true, /\.service\.js/));

export default serviceApi
