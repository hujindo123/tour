<template>
  <div class="login">
    <div class="login_top">
      <span class="iconfont icon-icon08"></span>
      <span class="login_singin">注册</span>
    </div>
    <div class="login_nav">
      <div class="account_login" :class="{'active': accountShow}">
        <span @click="accountShow = true">账号登录</span>
      </div>
      <div class="phone_login" :class="{'active': !accountShow}">
        <span @click="accountShow = false">手机验证码登录</span>
      </div>
    </div>
    <div class="account_div">
      <div class="account_m" v-if="accountShow">
        <group class="account input">
          <x-input placeholder="请输入手机号码"></x-input>
        </group>
        <group class="account input">
          <x-input type="password" placeholder="请输入密码"></x-input>
        </group>
      </div>
      <div class="phone_m" v-if="!accountShow">
        <group class="account input">
          <x-input placeholder="请输入手机号码"></x-input>
        </group>
        <group class="account input">
          <x-input placeholder="请输入验证码">
            <span slot="right">发送验证码</span>
          </x-input>
        </group>
      </div>
      <x-button type="primary" class="login_btn">登录</x-button>
      <divider>第三方账号登录</divider>
      <div class="third">
        <i class="iconfont icon-weixin"></i>
        <i class="iconfont icon-tengxun"></i>
        <i class="iconfont icon-iconfonticonfontweibo"></i>
      </div>
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
        showSpace: false
      }
    },
    methods: {
      choiceTab(){
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .login {
    display: flex;
    flex-flow: column;
    .login_top {
      display: flex;
      @include wh(100%, 44px);
      box-sizing: border-box;
      padding: 0 12px;
      flex-flow: row;
      @include sc(14px, rgba(153, 153, 153, 1));
      @include fj();
      line-height: 44px;
      overflow: hidden;
      .icon-icon08 {
        padding-top: 4px;
        padding-right: 20px;
        @include sc(16px, rgba(76, 76, 76, 1));
      }
      .login_singin {
        padding-left: 20px;
        @include sc(14px, rgba(76, 76, 76, 1))
      }
    }
    .login_nav {
      @include wh(100%, 42px);
      flex: 1;
      flex-flow: row;
      margin-top: 4px;
      @include sc(13px, rgba(153, 153, 153, 1));
      @include fj();
      .account_login, .phone_login {
        flex: 0 0 50%;
        text-align: center;
        &.active {
          span {
            position: relative;
            display: inline-block;
            color: $fc;
            line-height: 42px;
            &:after {
              position: absolute;
              content: '';
              bottom: 0;
              left: -3%;
              width: 106%;
              height: 2px;
              background: $fc;
            }
          }
        }
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

        }
      }
      .login_btn {
        margin-top: 30px;
        line-height: 2.65;
      }
      .vux-divider {
        @include sc(11px, rgba(205, 207, 209, 1));
      }
      .third {
        display: flex;
        @include fj(space-around);
        .iconfont {
          @include sc(25px, rgb(225, 227, 229));
        }
      }
    }
  }
</style>
