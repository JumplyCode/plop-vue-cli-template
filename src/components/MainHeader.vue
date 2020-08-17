<template>
  <div class="main-header">
    <h2>{{title}}</h2>
  </div>
</template>

<script>

  export default {
    name:'MainHeader',
    props:{
      title: {
        type: String,
        default: '标题'
      }
    },
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

    created() {
    
    }

  }

</script>
<style lang='scss' scoped>
.main-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  min-height: 8.125rem;
  background-image: url('./../assets/img/img_01.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  >h2 {
    padding: 0 0.9375rem;
    margin: 1.25rem 0 0;
    font-size: 1.375rem;
    color: #fff;
  }
  &::after{
    content: '';
    display: block;
    width: 100%;
    height: 2.25rem;
    background: #fff;
    border-radius: 1.125rem 1.125rem 0 0;
  }
}
</style>