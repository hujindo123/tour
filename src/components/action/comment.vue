<template>
  <div>
    <div class="comment vux-1px-t">
      <div class="comment_list">
        <div class="header_line">
          <div class="header_img">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png" alt="">
          </div>
          <div class="other_comment">
            <div class="other_comment_top">
              <div class="comment_name">精卫填的海 <span>LV7</span></div>
              <div class="comment_answer">回复</div>
            </div>
            <div class="comment_time">1小时前</div>
          </div>
        </div>
        <div class="txt">总是有雨啊，感觉下雨哪都不想去总是有雨啊，感觉下雨哪都不想去总是有雨啊，感觉下雨哪都不想去总是有雨啊，感觉下雨哪都不想去</div>
      </div>
    </div>
  </div>

</template>

<script>
  import {Badge, Popover, ViewBox, Group, CellBox, Cell, XButton, Divider} from 'vux';

  export default {
    components: {
      Badge,
      Group,
      CellBox,
      Popover,
      ViewBox,
      Cell,
      XButton, Divider

    },
    data () {
      return {
        label: ['自驾', '大明湖', '情侣'],
        messagesShow: false
      }
    },
    methods: {}
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .comment {
    width: 100%;
    background: #fff;
    padding: 15px 0;
    display: flex;
    flex-flow: column;
    .details_top {
      @include wh(100%, 44px);
      @include sc(14px, #fff);
      @include fj();
      display: flex;
      z-index: 3000;
      background: $fc;
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      flex-flow: row;
      line-height: 44px;
      .iconfont {
        padding: 2px 12px 0 10px;
        @include sc(22px, #fff);
      }
      .icon-tubiaozhizuomoban {
        padding-right: 7px;
      }
      .share {
        flex: 1;
        text-align: right;
        .message {
          position: absolute;
          right: 10px;
          top: 44px;
          z-index: 3000;
          .arrow {
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #fff;
            right: 0;
            top: 0;
            position: absolute;
            width: 0;
            height: 0;
          }
          .content {
            width: 100%;
            margin-top: 7px;
            position: relative;
            background: #fff;
            text-align: left;
            .tab {
              display: block;
              text-decoration: none;
              padding: 0 13px;
              @include sc(12px, rgba(77, 77, 77, 1));
              .iconfont {
                width: 15px;
                padding: 0;
                @include sc(13px, #4D4D4D);
                margin-right: 11px;
              }
            }
          }
        }
        .icon-share {
          padding: 0;
          font-size: 19px;
        }
      }
    }
    .comment_list {
      display: flex;
      flex-flow: column;
      .header_line {
        display: flex;
        flex-flow: row;
        font-size: 0;
        align-items: center;
        .header_img {
          @include wh(30px,30px);
          flex: 0 0 30px;
          overflow: hidden;
          img {
            width: 100%;
            display: block;
            @include borderRadius(50%)
          }
        }
        .other_comment{
          flex: 1;
          align-items: center;
          flex-flow: column;
          margin-left: 10px;
          .other_comment_top{
            display: flex;
            flex-flow: row;
            .comment_name {
              flex: 1;
              @include sc(14px, rgba(26, 26, 26, 1));
              span {
                @include sc(10px,rgba(255,199,65,1));
                padding: 0 2px;
                border: 1px solid #FFC741;
                @include borderRadius(2px);
                margin-left: 13px;
              }
            }
            .comment_answer {
              flex: 0 0 60px;
              width: 60px;
              text-align: right;
              @include sc(14px,rgba(77,77,77,1));
            }
          }
          .comment_time{
            flex: 0 0 60px;
            width: 60px;
            text-align: left;
            @include sc(10px, rgba(128, 128, 128, 1));
          }
        }

      }
      .txt{
        margin-top: 3px;
        padding-left: 40px;
        @include sc(14px,rgba(77,77,77,1))
      }
    }
  }
</style>
