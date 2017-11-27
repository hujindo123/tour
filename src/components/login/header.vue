<template>
  <div class="login_top">
    <span class="iconfont icon-icon08"></span>
    <span class="register_title" v-show="title">{{title}}</span>
    <span class="iconfont login_singin" v-show="type">
        <router-link to="/register">注册</router-link>
      </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      type: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/mixin";

  .login_top {
    display: flex;
    @include wh(100%, 44px);
    box-sizing: border-box;
    flex-flow: row;
    @include sc(14px, rgba(153, 153, 153, 1));
    @include fj();
    line-height: 44px;
    overflow: hidden;
    .icon-icon08 {
      @include wh(52px, 48px);
      flex: 0 0 52px;
      box-sizing: border-box;
      padding: 4px 24px 0 12px;
      @include sc(16px, rgba(76, 76, 76, 1));
    }
    .register_title {
      flex: 1;
      text-align: center;
      @include sc(14px, rgba(76, 76, 76, 1))
    }
    .login_singin {
      @include wh(52px, 48px);
      flex: 0 0 52px;
      padding-left: 12px;
      box-sizing: border-box;
      a {
        @include sc(14px, rgba(76, 76, 76, 1));
        text-decoration: none;
      }
    }
  }
</style>
