<template>
  <div class="wonder-error-box">
     <p>
       <slot name="error-img"><img :src="errorImg" v-if="errorImg"/></slot>
     </p>
     <div class="wonder-error-info">
       <slot name="error-info">
         <h2>{{errorCon}}</h2>
       </slot>
      </div>
  </div>
</template>

<script>
  /**
   * @param {string} noData - 没有找到数据
   * @param {string} desert - 网络开小差
   * @param {string} fail - 操作失败了
   */
  export default {
    name:'Error',
    props:[''],
    data () {
      return {
        errorCon: '抱歉！没有找到相关数据',
        errorImg: require('./../../assets/img/basic/img_01.png'),
        NODATA: require('./../../assets/img/basic/img_01.png'),
        DESERT: require('./../../assets/img/basic/img_02.png'),
        FAIL: require('./../../assets/img/basic/img_03.png'),
        DEFAULT: require('./../../assets/img/basic/img_04.png')
      };
    },

    components: {},

    watch: {},

    computed: {},

    methods: {
      // 暂无数据
      wdrError({type, text='抱歉！没有找到相关数据'}={}) {
        this.errorCon = text;
        if(type==='noData') {
            this.errorImg = this.NODATA;
        }else if(type==='desert') {
            this.errorImg = this.DESERT;
        }else if(type==='fail') {
          this.errorImg = this.FAIL
        }else{
          this.errorImg = this.DEFAULT;
        }
      }
    },

    beforeMount() {},

    mounted() {},

    created() {}

  }

</script>
<style lang='scss' scoped>
.wonder-error-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  >p {
    width: 60%;
    margin: 0 auto;
    overflow: hidden;
    img {
      margin: 0 auto;
    }
  }
  >.wonder-error-info {
    width: 80%;
    line-height: 1.5rem;
    margin: 0 auto;
    font-size: 0.9375rem;
    color: #8fabc4;
  }
}
</style>
