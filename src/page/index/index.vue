<template>
  <div class="index">
    <view-box>
      <keep-alive>
        <router-view slot="default" class="main"></router-view>
      </keep-alive>
      <vfooter slot="bottom"></vfooter>
    </view-box>
  </div>
</template>

<script>
  import vfooter from 'src/components/footer/footer';
  import {ViewBox,Scroller} from 'vux';

  export default {
    components: {
      ViewBox,
      vfooter,
      Scroller,
    },
    data () {
      return {}
    },
    methods: {},
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .index {
    @include wh(100%, 100%);
    display: flex;
    flex-flow: column;
    overflow: hidden;
    /*.main{
      flex: 1;
      .banner {
        .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot {
          background-color: #fff;
          opacity: 0.5;
        }
        .vux-slider > .vux-indicator > a > .active {
          background-color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
      }
      .box {
        padding: 15px 0;
        box-sizing: border-box;
        display: flex;
        flex-flow: row;
        @include fj(space-around);
        .box-item {
          @include borderRadius(20px);
          width: 98px;
          @include sc(11px, rgba(77, 77, 77, 1));
          text-align: center;
          padding: 8px 0;
          background: rgba(229, 229, 229, 1);
          .tab {
            letter-spacing: 6px;
            .iconfont {
              font-size: 12px;
            }
          }
        }
      }
      .Img_banner {
        display: flex;
        flex-flow: row;
        @include fj();
        .box-img {
          img {
            @include wh(160px, 90px);
          }
        }
      }
      .tab_message {
        .vux-tab-item {
          @include sc(15px, rgba(77, 77, 77, 1));
        }
      }
    }*/
  }
</style>
