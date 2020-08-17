/**
 * mixins
 */

const mixins = {
    data() {
        return {
           text: '抱歉！没有找到相关数据',
           type: 'DEFAULT'
        }
    },
    methods: {

       // 跳转到出错页面
       toFailed(e = {}) {
           this.$router[e.routeType || 'replace'] ({
               name: 'Failed',
               params: {
                   text: e.text || this.text,
                   type: e.type || this.type
               }
           })
       }
    },

    created() {

    }
};


export default mixins