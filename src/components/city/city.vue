<template>
  <div class="list_city">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="back"></span>
      <span class="register_singin">选择城市</span>
      <span class="iconfont"></span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {},
    props: {},
    methods: {
      back(){
        this.$emit('hide')
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .list_city {
    @include wh(100%, 100%);
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
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
  }


</style>
