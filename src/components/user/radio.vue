<template>
  <div>
    <div class="upload_user">
      <div class="user_top">
        <span class="iconfont icon-fanhui" @click="back"></span>
        <span class="register_singin">修改{{keys}}</span>
        <span class="iconfont"></span>
      </div>
      <group class="radio_ed">
        <radio :options="sex" :value="sex[0]" @on-change="change" v-if="!link"></radio>
        <span v-if="link">
            <radio :options="phone" @on-change="change"></radio>
            <cell :title="'修改'" is-link  link="/updatePhone"></cell>
        </span>
      </group>
    </div>
  </div>
</template>

<script>
  import vTitle from 'src/components/user/header';
  import {Group, XInput, Radio, Cell} from 'vux';
  export default {
    data () {
      return {
        editorPhone: false,
        update: {
          phone: '',
          code: '',
          hasSend: false,
          desc: '发送验证码',
        },
        sex: ['保密', '男', '女'],
        phone: ['保密', '公开']
      }
    },
    components: {
      vTitle,
      Group,
      XInput,
      Radio,
      Cell
    },
    props: {
      keys: {
        Object: String,
        default: ''
      },
      value: {
        Object: String,
        default: ''
      },
      link: {
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
        @include sc(22px, rgba(255, 255, 255, 0.5));
      }
      .right {
        @include sc(22px, rgba(255, 255, 255, 1));
      }
      .register_singin {
        flex: 1;
        text-align: center;
        @include sc(15px, #fff)
      }
    }
    .radio_ed {
      .weui-cells {
        margin-top: 0;
        @include sc(15px, rgba(57, 64, 67, 1));
        .weui-cell {
          padding: 0 15px;
        }
      }

    }
  }


</style>
