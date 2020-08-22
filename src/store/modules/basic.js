/**
 * 用户信息
 */

import httpApi from "../../service/api/basic.service";

const types = {
    USER_INFO: 'USER_INFO'
}

const store = { 
    state: {
        userData: null
    },

    getters: {
        userData: state => {
            return state.userData
        }
    },

    mutations: {
        [types.USER_INFO] (state, data) {  
            state.userData = data
        }
    },

    actions: {
        // 获取用户信息
        getUserInfo ({ commit }, params) {
            return new Promise( (resolve, reject) => {
                httpApi.getUser(params).then(res => {
                    const result = res.data;
                    console.log(result.data)
                    if(result.code == 200) {
                        let data = result.data;
                        commit(types.USER_INFO, data);
                        resolve(data);
                        
                    }else {
                        reject(result)
                    }
    
                }).catch (error => {
                    reject(error)
                })
            })
        }
    }
    
}


export default store;