<template>
  <div class="upload_phone">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
      <span class="register_singin">修改电话</span>
      <span class="iconfont"></span>
    </div>
    <div class="editor_phone">
      <div class="account_div">
        <group class="account input">
          <x-input placeholder="请输入手机号码" is-type="china-mobile" v-model="update.phone">
            <span slot="right" class="time" @click="send" :class="{'hasSend': update.hasSend}">{{update.desc}}</span>
          </x-input>
        </group>
        <group class="account input">
          <x-input placeholder="请输入验证码" v-model="update.code"></x-input>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
  import {Group, XInput} from 'vux';
  export default {
    data () {
      return {
        update: {
          phone: '',
          code: '',
          hasSend: false,
          desc: '发送验证码',
          time: 60,
        }
      }
    },
    components: {
      Group,
      XInput
    },
    methods: {
      change (value, label) {
        console.log('change:', value, label)
      },
      send(){
        if (this.update.hasSend) {
          return
        } else {
          this.update.desc = `(${this.update.time})秒后重新发送`;
          setInterval(() => {
            this.update.time--;
            this.update.desc = `(${this.update.time})秒后重新发送`;
            if (this.update.time <= 0) {
              this.update.desc = '发送验证码';
              this.update.hasSend = false;
              clearInterval();
            }
          }, 1000)
        }
        this.update.hasSend = true;
      },
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .upload_phone {
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
      .account_div {
        padding: 20px;
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
              &.hasSend {
                color: #999999;
              }
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
      }
    }
  }
</style>
