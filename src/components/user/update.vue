<template>
  <div>
    <div class="upload_user">
      <div class="user_top">
        <span class="iconfont icon-fanhui" @click="back"></span>
        <span class="register_singin">修改{{keys}}</span>
        <span class="iconfont icon-wechaticon27"></span>
      </div>
      <div class="input_rs">
        <group label-width="84%" label-margin-right="4%">
          <x-input :value="value"></x-input>
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
        }
      }
    },
    components: {
      Group,
      XInput
    },
    props: {
      keys: {
        Object: String,
        default: ''
      },
      value: {
        Object: String,
        default: ''
      }
    },
    methods: {
      back(){
        this.$emit('hide');
      },
      change (value, label) {
        console.log('change:', value, label)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .upload_user {
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
    .input_rs {
      width: 84%;
      margin: 10px auto 0;
      .weui-cells {
        @include sc(15px, rgba(77, 77, 77, 1));
        @include borderRadius(5px)
      }
    }
  }
</style>
