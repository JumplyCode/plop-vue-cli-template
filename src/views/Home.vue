<template>
  <div class="main-box">

     <Error ref="error"></Error>

  </div>
</template>

<script>
  
  import mixins from '../mixins'

  export default {
    name:'Home',
    mixins: [mixins],
    props:[''],
    data () {
      return {
        
      };
    },

    components: {},

    watch: {},

    computed: {},

    methods: {

    },

    beforeMount() {},

    mounted() {
      // 局部出错页面请调用这个方法
      // this.$nextTick( ()=> {
      //   this.$refs.error.wdrError({
      //     type: 'fail',
      //     text: '抱歉！网络开小差了'
      //   });
      // })
      
    },

    created() {
 
    }

  }

</script>
<style lang='scss' scoped>
.main-box {
  background: #fff;
}
</style>
