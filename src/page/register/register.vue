<template>
  <div class="register">
    <vHeader :title="'注册'" :type="true"></vHeader>
    <div class="account_div">
      <div class="account_m">
        <group class="account input">
          <x-input placeholder="请输入手机号码" v-model="login.phone"></x-input>
        </group>
        <group class="account input">
          <x-input placeholder="请输入验证码" v-model="login.code">
            <span slot="right" class="time" @click="send" :class="{'hasSend': hasSend}">{{login.desc}}</span>
          </x-input>
        </group>
        <toast v-model="show7"  type="text" :position="'middle'" text="注册成功"></toast>
        <group class="account input">
          <x-input placeholder="请输入新密码（最少xx位，数字+字母）" v-model="login.password"></x-input>
        </group>
      </div>
      <x-button type="primary" class="login_btn" @click.native="register">注册</x-button>
      <router-link to="/login" class="tba_ss">登录</router-link>
    </div>
  </div>
</template>

<script>
  import vHeader from '../../components/login/header';
  import {XInput, Group, XButton, Divider, Cell, Toast} from 'vux';

  export default {
    components: {
      vHeader,
      Cell,
      Group,
      XInput,
      XButton,
      Divider,
      Toast
    },
    data () {
      return {
        accountShow: true,
        hasSend: false,
        show7: false,
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
      register(){
          this.show7 = true;
          let self = this;
          setInterval(()=>{
            self.$router.push('/main');
          },500)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .register {
    display: flex;
    flex-flow: column;
    background: #fff;
    @include wh(100%, 100%);
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
        padding-right: 20px;
        padding-left: 12px;
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
      .tba_ss {
        width: 30px;
        margin: 0 auto;
        font-size: 14px;
        color: #cdcfd1;
        padding: 16px 15px;
        display: block;
        text-align: center;
      }
      .login_btn {
        margin-top: 24px;
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
