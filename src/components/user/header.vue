<template>
  <div class="user_top">
    <span class="iconfont icon-fanhui" @click="back"></span>
    <span class="register_singin">{{name}}</span>
    <span class="iconfont"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      name: {
        type: String
      }
    },
    methods: {
      back(){
        this.$emit('hide');
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/mixin";

  .user_top {
    display: flex;
    background: $fc;
    @include wh(100%, 44px);
    box-sizing: border-box;
    flex-flow: row;
    @include sc(15px, #fff);
    @include fj();
    line-height: 44px;
    overflow: hidden;
    .iconfont {
      @include wh(46px, 44px);
      flex: 0 0 46px;
      text-align: center;
      @include sc(22px, #fff);
    }
    .register_singin {
      flex: 1;
      text-align: center;
      @include sc(14px, #fff)
    }
  }
</style>
