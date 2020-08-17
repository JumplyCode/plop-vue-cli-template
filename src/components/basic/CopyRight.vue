<template>
  <div class="coypright" :style="{'position': position}"><slot></slot></div>
</template>

<script>

  export default {
    name:'CopyRight',
    props: {
      'position': {
        type: String,
        default: 'fixed'
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

    created() {}

  }

</script>
<style lang='scss' scoped>
.coypright {
  position: fixed;
  bottom: 1.25rem;
  left: 0;
  width: 100%;
  line-height: 1.25rem;
  text-align: center;
  font-size: .625rem;
  color: #bbb;
}
</style>
