<template>
  <div class="login">
    <vHeader :type="true" :title="'登录'"></vHeader>
    <tab :line-width="1" :custom-bar-width="getBarWidth" v-model="index">
      <tab-item selected @on-item-click="accountShow">账号登录</tab-item>
      <tab-item @on-item-click="accountShow">手机验证码登录</tab-item>
    </tab>
    <div class="account_div">
      <swiper v-model="index" height="120px" :show-dots="false">
        <swiper-item>
          <div class="account_m">
            <group class="account input">
              <x-input placeholder="请输入手机号码" v-model="login.phone"></x-input>
            </group>
            <group class="account input">
              <x-input type="password" placeholder="请输入密码" v-model="login.password"></x-input>
            </group>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="phone_m">
            <group class="account input">
              <x-input placeholder="请输入手机号码" v-model="login.phone"></x-input>
            </group>
            <group class="account input">
              <x-input placeholder="请输入验证码" v-model="login.code">
                <span slot="right" class="time" @click="send" :class="{'hasSend': hasSend}">{{login.desc}}</span>
              </x-input>
            </group>
          </div>
        </swiper-item>
      </swiper>
      <x-button type="primary" class="login_btn">登录</x-button>
      <router-link to="/register" class="tba_ss">注册</router-link>
     <!-- <divider>第三方账号登录</divider>
      <div class="third">
        <i class="iconfont icon-weixin"></i>
        <i class="iconfont icon-tengxun"></i>
        <i class="iconfont icon-iconfonticonfontweibo"></i>
      </div>-->
    </div>
  </div>
</template>

<script>
  import vHeader from '../../components/login/header';
  import {XInput, Group, XButton, Tab, TabItem, Divider, Cell, Swiper, SwiperItem} from 'vux';

  export default {
    components: {
      vHeader,
      Tab,
      TabItem,
      Cell,
      Group,
      XInput,
      XButton,
      Swiper,
      SwiperItem,
      Divider
    },
    data () {
      return {
        index: 0,
        getBarWidth: function (v) {
          return (v + 1) * 50 + 'px'
        },
        hasSend: false,
        login: {
          phone: '',
          password: '',
          code: '',
          time: 60,
          desc: '发送验证码'
        }
      }
    },
    methods: {
      send(){
        if (this.hasSend) {
          return
        } else {
          this.login.desc = `(${this.login.time})秒后重新发送`;
          setInterval(() => {
            this.login.time--;
            this.login.desc = `(${this.login.time})秒后重新发送`;
            if (this.login.time <= 0) {
              this.login.desc = '发送验证码';
              this.hasSend = false;
              clearInterval();
            }
          }, 1000)
        }
        this.hasSend = true;
      },
      accountShow(i){
        this.index = i;
      }
    },
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .login {
    display: flex;
    flex-flow: column;
    background: #fff;
    @include wh(100%, 100%);
    .vux-tab .vux-tab-item {
      background: transparent;
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
      .tba_ss{
        width: 30px;
        margin: 0 auto;
        font-size: 14px;
        color: #cdcfd1;
        padding: 16px 15px;
        display: block;
        text-align: center;
      }
      .login_btn {
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
