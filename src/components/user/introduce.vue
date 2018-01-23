<template>
  <div class="upload_phone">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="back()"></span>
      <span class="register_singin">修改简介</span>
      <span class="iconfont icon-wechaticon27" @click="save" :style="{opacity: onRight  ? 1 : 0.5}"></span>
    </div>
    <div class="editor_phone">
      <group class="txt">
        <x-textarea :max="300" v-model="values" autosize :placeholder="'自我介绍下吧'"></x-textarea>
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
  import {Group, XTextarea, TransferDomDirective as TransferDom, Confirm} from 'vux';
  export default {
    directives: {
      TransferDom
    },
    data () {
      return {
        show: false,
        values: '',
        right: 0
      }
    },
    components: {
      Group,
      XTextarea,
      Confirm
    },
    props: {
      keys: {
        Object: String,
        default: ''
      },
      name: { //字段名
        Object: String,
        default: ''
      },
      value: {
        Object: String,
        default: ''
      }
    },
    mounted(){
      this.values = this.value;
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
        if (this.onRight) {
          let self = this;
          // axios this.name this.values
          setTimeout(() => {
            self.$emit('hide');
          }, 1000)
        }
      },
    },
    computed: {
      onRight(){
        if (this.values.length > 0) {
          return true
        }
      }
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
      @include sc(14px, rgba(255, 255, 255, 1));
      @include fj();
      line-height: 44px;
      overflow: hidden;
      .iconfont {
        @include wh(46px, 44px);
        flex: 0 0 46px;
        text-align: center;
        @include sc(22px, #fff);
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
      .txt {
        .weui-cells {
          margin-top: 0;
          @include sc(14px, rgba(76, 76, 76, 1))
        }
      }

    }
  }
</style>
