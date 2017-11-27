<template>
  <div class="register">
    <vHeader :type="true" :title="'绑定手机号'"></vHeader>
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
  import vHeader from '../../components/login/header';

  import {XInput, Group, XButton, Divider, Cell} from 'vux';

  export default {
    components: {
      vHeader,
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
