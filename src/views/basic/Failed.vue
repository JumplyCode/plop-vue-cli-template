<template>
  <div class="failed-box details-model radius">
     <Error ref="error"></Error>
  </div>
</template>

<script>

  export default {
    name:'Failed',
    props: ['text', 'type'],
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
      const type = this.type;
      const text = this.text;
      this.$nextTick(() => {
        this.$refs.error.wdrError({
          type: type,
          text: text
        })
      })
    },

    created() {}

  }

</script>
<style lang='scss' scoped>
.failed-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - .625rem );
  background: #fff;
  .wonder-error-box {
    margin: -5rem 0 0;
  }
}
</style>
