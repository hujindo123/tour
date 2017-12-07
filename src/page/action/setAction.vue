<template>
  <div class="set_action">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
      <span class="register_singin">发起活动</span>
      <span class="iconfont icon-wechaticon27"></span>
    </div>
    <div class="editor_phone">
      <group>
        <x-input placeholder="请输入标题"></x-input>
      </group>
      <group>
        <cell :title="'出行信息(请选择)'" is-link @click.native="isShow=true"></cell>
      </group>
      <group class="txt">
        <x-textarea autosize></x-textarea>
      </group>
    </div>
    <chocieMessage v-if="isShow"></chocieMessage>
  </div>
</template>

<script>
  import chocieMessage from 'src/page/action/chocieMessage';
  import {Group,Cell, XInput, XTextarea} from 'vux';
  export default {
    data () {
      return {
          isShow: false
      }
    },
    components: {
      Group,
      Cell,
      XInput,
      XTextarea,
      chocieMessage
    },
    methods: {
      showComponents1(){

      },
      change (value, label) {
        console.log('change:', value, label)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .set_action {
    @include wh(100%, 100%);
    background: rgba(236, 236, 236, 1);
    display: flex;
    flex-flow: column;
    position: absolute;
    left: 0;
    top: 0;
    .user_top {
      display: flex;
      background: $fc;
      @include wh(100%, 44px);
      box-sizing: border-box;
      flex-flow: row;
      @include sc(14px, #fff);
      @include fj();
      line-height: 44px;
      overflow: hidden;
      .iconfont {
        @include wh(46px, 44px);
        flex: 0 0 46px;
        text-align: center;
        @include sc(22px, #fff);
      }
      .icon-wechaticon27 {
        font-size: 24px;
      }
      .register_singin {
        flex: 1;
        text-align: center;
        @include sc(15px, #fff)
      }
    }
    .editor_phone {
      display: flex;
      flex: 1;
      background: #fff;
      flex-flow: column;
      padding: 0 16px;
      .weui-cells{
        margin-top: 0;
        @include sc(15px, rgba(57, 64, 67, 1));
        p{
          margin: 0;
        }
        &:before {
          border: 0;
        }
      }
      .weui-cell{
        padding-left: 0;
      }
      .weui-cell_access .weui-cell__ft:after {
        border-width: 1px 1px 0 0
      }
    }
    .txt{
      .weui-cells:after {
        height: 0;
      }
    }
  }
</style>
