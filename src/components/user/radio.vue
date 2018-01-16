<template>
  <div>
    <div class="upload_user">
      <div class="user_top">
        <span class="iconfont icon-fanhui" @click="back"></span>
        <span class="register_singin">修改{{keys}}</span>
        <span class="iconfont"></span>
        <span class="iconfont icon-wechaticon27" :style="{opacity: (onRight || keys=='性别') ? 1 : 0.5}"
              @click="save"></span>
      </div>
      <group class="radio_ed">
        <radio :options="sexOptions" :value="sexOptions[sexIndex]" @on-change="change" v-show="keys=='性别'"></radio>
         <span  v-show="keys!='性别'">
             <radio :options="phone" @on-change="change"></radio>
             <cell :title="'修改'" is-link link="/updatePhone"></cell>
         </span>
      </group>
    </div>
    <div v-transfer-dom>
      <confirm v-model="show"
               :close-on-confirm="false"
               @on-confirm="onConfirm4">
        <p style="text-align:center;">信息尚未保存，确定返回吗?</p>
      </confirm>
    </div>
  </div>
</template>

<script>
  import vTitle from 'src/components/user/header';
  import {Group, XInput, Radio, Cell, TransferDomDirective as TransferDom, Confirm,} from 'vux';
  export default {
    directives: {
      TransferDom
    },
    data () {
      return {
        editorPhone: false,
        show:false,
        update: {
          phone: '',
          code: '',
          hasSend: false,
          desc: '发送验证码',
        },
        sexOptions: ['保密', '男', '女'],
        sexIndex: 0,
        values: '',
        phone: ['保密', '公开']
      }
    },
    components: {
      vTitle,
      Group,
      XInput,
      Radio,
      Confirm,
      Cell
    },
    mounted(){
      for (let i in this.sexOptions) {
        if (this.sexOptions[i] === this.value) {
          this.sexIndex = i;
        }
      }
    },
    props: {
      keys: {
        Object: String,
        default: ''
      },
      name: {
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
        if (this.values !== this.value) {
          this.show = true;
        } else {
          this.onConfirm4();
        }
      },
      onConfirm4(){
        this.$emit('hide');
      },
      save(){
        // axios this.name this.values
        let self = this;
        setTimeout(() => {
          self.$emit('hide');
        },1000)

      },
      change (value, label) {
        this.values = value; //改变的值
        console.log(this.value, value);
      }
    },
    computed: {
      onRight(){
        if(this.values){
            return true
        }
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
        @include sc(22px, rgba(255, 255, 255, 1));
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
