<template>
  <div class="radius-box radius">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name:'RadiusBox',
    props:{},
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
.radius-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  min-height: calc(100vh - .625rem);
  margin: .625rem 0 0;
  background: #fff;
  overflow: hidden;
  &.radius {
    border-radius: 1rem 1rem 0 0;
  }
}
</style>