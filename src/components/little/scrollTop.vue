<template>
  <div class="BackTop-wrapper_3XDbcaq" @click="BackTop">
    <i class="iconfont icon-huidingbu"></i>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      BackTop(){
        this.$emit('scrollTop');
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/mixin";

  .BackTop-wrapper_3XDbcaq {
    position: fixed;
    @include wh(30px, 30px);
    bottom: 100px;
    line-height: 30px;
    right: 30px;
    text-align: center;
    border: 1px solid #d2d2d2;
    border-radius: 50%;
    background: transparent;
    .icon-huidingbu{
      @include sc(20px, #d2d2d2);
    }
  }
</style>
