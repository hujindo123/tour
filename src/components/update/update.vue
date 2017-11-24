<template>
  <div class="upload_user">
    <div class="user_top">
      <span class="iconfont icon-fanhui"></span>
      <span class="register_singin">修改{{type}}</span>
    </div>
  </div>
</template>

<script>
  import {Badge, Group, CellBox, Cell} from 'vux';
  import update from 'src/components/update/update';
  export default {
    components: {
      Badge,
      Group,
      CellBox,
      Cell,
      update
    },
    props: {
      type: {
        Object: String
      }
    },
    data () {
      return {
        panel: false,
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        headerImage: '',
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .upload_user {
    width: 100%;
    height: 100%;
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
        padding: 2px 12px 0 12px;
        @include sc(22px, #fff);
      }
      .register_singin {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        padding-right: 46px;
        text-align: center;
        @include sc(14px, #fff)
      }
    }
  }
</style>
