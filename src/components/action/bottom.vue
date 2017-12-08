<template>
  <div class="details_bottom vux-1px-t">
    <div class="left_de">
      <i class="iconfont icon-aixin"></i>
      <span>76 评论</span> <span>1756阅览</span>
    </div>
    <div class="right_bt vux-1px-l">编辑活动 <i class="iconfont icon-down-copy"></i></div>
  </div>
</template>

<script>
  import {Badge, Tab, TabItem, Scroller,Popover, ViewBox, Group, CellBox, Cell, XButton, Divider} from 'vux';

  export default {
    components: {
      Badge,
      Group,
      CellBox,
      Popover,
      ViewBox,
      Cell,
      XButton, Divider,
      Tab, TabItem,Scroller

    },
    data () {
      return {
        index: 0,
        label: ['自驾', '大明湖', '情侣'],
        messagesShow: false,
      }
    },
    mounted(){
    },
    methods: {}
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .details_bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    @include wh(100%,60px);
    line-height: 60px;
    background: #fff;
    display: flex;
    flex-flow: row;
    .right_bt{
      flex: 0 0 127px;
      width: 127px;
      @include sc(15px,rgba(21,156,94,1));
      text-align: center;
      .icon-down-copy{
        font-size: 27px;
        vertical-align: middle;
      }
    }
    .left_de{
      flex: 1;
      @include sc(15px, #999999);
      @include fj(space-around);
    }
    .love_say {
      @include wh(160px, 48px);
      position: fixed;
      bottom: 65px;
      left: 0;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 0 40px 40px 0;
      box-shadow: 0 0 2px rgba(60, 60, 60, 0.35);
      @include fj(space-around);
      i {
        @include sc(27px, $fc);
        .badge {
          top: 5px;
          right: 10px;
          position: absolute;
        }
      }
    }
  }
</style>
