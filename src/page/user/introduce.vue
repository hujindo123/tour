<template>
  <div class="upload_phone">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
      <span class="register_singin">修改电话</span>
      <span class="iconfont icon-wechaticon27" :class="{'right': right}"></span>
    </div>
    <div class="editor_phone">
      <group class="txt">
        <x-textarea :max="300" v-model="value" @on-change="change" autosize :placeholder="'自我介绍下吧'"></x-textarea>
      </group>
    </div>
  </div>
</template>

<script>
  import {Group, XTextarea} from 'vux';
  export default {
    data () {
      return {
        value: '',
        right: 0
      }
    },
    components: {
      Group,
      XTextarea
    },
    methods: {
      change () {
        if (this.value.length > 10) {
          console.log(1);
          this.right = true;
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
