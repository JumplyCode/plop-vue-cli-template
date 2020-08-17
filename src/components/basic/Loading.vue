<template>
  <div class="wonder-loading-box">
      <div class="box">
        <div class="loader-17"></div>
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
    name:'wdrLoading',
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

    mounted() {},

    created() {}

  }

</script>
<style lang='scss' scoped>
.wonder-loading-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  height: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #fff, $alpha: 0);

}
.box {
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 1px solid currentcolor;
    border-radius: 3px;
    font-size: 30px;
    color: rgba(200, 200, 200, 0.5);
    padding: 1em;
    margin-bottom: .25em;
    vertical-align: top;
    -webkit-transition: .3s color, .3s border;
    transition: .3s color, .3s border;
}
.box:hover {
    color: #d60b52;
    font-size: 0;
    padding: 0;
    border-width: 3px;
    line-height: 200px;
}
.box:hover [class*="loader-"] {
    font-size: 70px;
    line-height: 200px;
}
[class*="loader-"] {
    display: inline-block;
    width: 1em;
    height: 1em;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
}
.loader-17 {
    position: relative;
    background-color: currentcolor;
    border-radius: 50%;
}
.loader-17:after,
.loader-17:before {
    content: "";
    position: absolute;
    width: .25em;
    height: .25em;
    border-radius: 50%;
    opacity: .8;
}
.loader-17:after {
    left: -.5em;
    top: -.25em;
    background-color: currentcolor;
    -webkit-transform-origin: .75em 1em;
    transform-origin: .75em 1em;
    -webkit-animation: loader-17 1s linear infinite;
    animation: loader-17 1s linear infinite;
    opacity: .6;
}
.loader-17:before {
    left: -1.25em;
    top: -.75em;
    background-color: currentcolor;
    -webkit-transform-origin: 1.5em 1em;
    transform-origin: 1.5em 1em;
    -webkit-animation: loader-17 2s linear infinite;
    animation: loader-17 2s linear infinite;
}
@-webkit-keyframes loader-17 {
    0% {
        -webkit-transform: rotateZ(0deg) translate3d(0, 0, 0);
        transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    100% {
        -webkit-transform: rotateZ(360deg) translate3d(0, 0, 0);
        transform: rotateZ(360deg) translate3d(0, 0, 0);
    }
}
@keyframes loader-17 {
    0% {
        -webkit-transform: rotateZ(0deg) translate3d(0, 0, 0);
        transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    100% {
        -webkit-transform: rotateZ(360deg) translate3d(0, 0, 0);
        transform: rotateZ(360deg) translate3d(0, 0, 0);
    }
}
</style>
