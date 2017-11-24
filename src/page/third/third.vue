<template>
  <div class="register">
    <div class="register_top">
      <span class="iconfont icon-icon08"></span>
      <span class="register_singin">绑定手机号</span>
    </div>
    <div class="account_div">
      <div class="account_m">
        <group class="account desc" title="授权成功，请绑定手机号">
        </group>
        <group class="account input">
          <x-input placeholder="请输入手机号码" v-model="login.phone"></x-input>
        </group>
        <group class="account input">
          <x-input placeholder="请输入验证码" v-model="login.code">
            <span slot="right" class="time" :class="{'hasSend': hasSend}">{{login.desc}}</span>
          </x-input>
        </group>
      </div>
      <x-button type="primary" class="login_btn">绑定</x-button>
    </div>
  </div>
</template>

<script>
  import {XInput, Group, XButton, Divider, Cell} from 'vux';

  export default {
    components: {
      Cell,
      Group,
      XInput,
      XButton,
      Divider
    },
    data () {
      return {
        accountShow: true,
        hasSend: false,
        login: {
          phone: '',
          password: '',
          code: '',
          desc: '发送验证码'
        }
      }
    },
    methods: {}
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .register {
    display: flex;
    flex-flow: column;
    .register_top {
      display: flex;
      @include wh(100%, 44px);
      box-sizing: border-box;
      flex-flow: row;
      @include sc(14px, rgba(153, 153, 153, 1));
      @include fj();
      line-height: 44px;
      overflow: hidden;
      .icon-icon08 {
        padding: 4px 12px 0 12px;
        @include sc(16px, rgba(76, 76, 76, 1));
      }
      .register_singin {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        padding-right: 32px;
        text-align: center;
        @include sc(14px, rgba(76, 76, 76, 1))
      }
    }
    .account_div {
      padding: 5px 30px;
      .account, .input {
        .weui-cells {
          font-size: 14px;
          margin-top: 0;
          &:before {
            border-top: 0;
          }
          .vux-x-input {
            padding: 14px 0;
          }
          .weui-input {
            &::-webkit-input-placeholder {
              color: rgba(205, 207, 209, 1);
            }
          }
          .time {
            color: rgba(57, 64, 67, 1);
          }
          .hasSend {
            color: rgba(153, 153, 153, 1);
          }

        }
      }
      .desc {
        .weui-cells__title {
          padding-left: 0;
          padding-bottom: 5px;
        }
      }
      .login_btn {
        margin-top: 30px;
        line-height: 2.65;
      }
     /* .vux-divider {
        @include sc(11px, rgba(205, 207, 209, 1));
      }
      .third {
        display: flex;
        @include fj(space-around);
        .iconfont {
          @include sc(25px, rgb(225, 227, 229));
        }
      }*/
    }
  }
</style>
