<template>
  <div class="index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from 'src/components/footer/footer';
  export default {
    components: {
      vfooter
    },
    data () {
      return {}
    },
    methods: {},
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .index {
    @include wh(100%, 100%);
    display: flex;
    flex-flow: column;
  }
</style>
