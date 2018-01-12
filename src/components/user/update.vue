<template>
  <div>
    <div class="upload_user">
      <div class="user_top">
        <span class="iconfont icon-fanhui" @click="back"></span>
        <span class="register_singin">修改{{keys}}</span>
        <span class="iconfont icon-wechaticon27" :class="{'right': right}"></span>
      </div>
      <div class="input_rs">
        <group label-width="84%" label-margin-right="4%">
          <x-input v-model="values" placeholder="" @on-change="change"></x-input>
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
        values: '',
        right: 0,
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
    created(){
      console.log(this.keys);
    },
    methods: {
      back(){
        this.$emit('hide');
      },
      change(){
        let pattern, message;
        try {
          if (this.keys === '昵称') {
            pattern = new RegExp(/^[\u4E00-\u9FFF,0-9,a-z,A-Z]{3,10}$/);
            message = '您的昵称必须由3至10位字母、汉字或数字组成';
          }else if(this.keys === '真实姓名'){
            pattern = new RegExp(/^[\u4E00-\u9FFF,0-9,a-z,A-Z ]{2,20}$/);
            message = '您的真实姓名必须由2至20位字母或汉字组成';
          } else if(this.keys === 'QQ'){
            pattern = new RegExp(/^[1-9][0-9]{4,12}$/);
            message = '请输入正确的QQ号码';
          }
          else if(this.keys === '微信'){
            pattern = new RegExp(/^[0-9,a-z,A-Z ]{2,20}$/);
            message = '请输入正确的微信号码';
          }
          this.right = pattern.test(this.values) ? 1 : 0;
          if (!this.right) {
            throw new Error(message)
          }
        } catch (err) {
          //alert(err.message);
        }

      },
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
        @include sc(24px, rgba(255, 255, 255, 0.5));
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
