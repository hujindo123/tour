<template>
  <div class="comment">
    <x-header :left-options="{backText: ''}" title="评论列表"></x-header>
    <div class="answer_txt">
      <input class="answer_txt_input" placeholder="评论" ref="chatpannel"/>
      <x-button mini type="primary" class="answer_txt_button">发布</x-button>
    </div>
    <scroller lock-x height="-94px">
      <div>
        <div  v-for="item in 10">
          <comment></comment>
        </div>
      </div>
    </scroller>
  </div>

</template>

<script>
  import {Badge, XHeader, Scroller, Popover, ViewBox, Group, CellBox, Cell, XButton, Divider} from 'vux';
  import comment from 'src/components/comment/comment';
  export default {
    components: {
      Scroller,
      Badge,
      Group,
      CellBox,
      Popover,
      ViewBox,
      XHeader,
      Cell,
      XButton, Divider, comment

    },
    data () {
      return {
        label: ['自驾', '大明湖', '情侣'],
        messagesShow: false
      }
    },
    methods: {
      showAnswer(){
        this.$emit('showAnswer',
          {
            id: 123,
            txt: 1234
          })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .comment {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3000;
    background: #fff;
    flex-flow: column;
    .vux-header {
      h1 {
        font-size: 14px;
      }
    }
    .answer_txt {
      padding: 10px;
      display: flex;
      line-height: 34px;
      flex-flow: row;
      background: rgba(246, 246, 246, 1);
      .answer_txt_input {
        height: 34px;
        padding-left: 10px;
        box-sizing: border-box;
        outline: none;
        flex: 1;
        -webkit-appearance: none;
        border: 1px solid #d4d4d4;
        @include borderRadius(6px);
        font-size: 14px;
        background: #fff;

      }
      .answer_txt_button {
        text-align: center;
        background: $fc;
        outline: none;
        border: 0;
        margin-left: 8px;
        @include borderRadius(4px);
        @include sc(14px, rgba(237, 237, 237, 1));
        flex: 0 0 65px;
        width: 65px;
      }
    }
    .list {
      position: relative;
      padding: 15px 10px;
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
            @include wh(30px, 30px);
            flex: 0 0 30px;
            overflow: hidden;
            img {
              width: 100%;
              display: block;
              @include borderRadius(50%)
            }
          }
          .other_comment {
            flex: 1;
            align-items: center;
            flex-flow: column;
            margin-left: 10px;
            .other_comment_top {
              display: flex;
              flex-flow: row;
              .comment_name {
                flex: 1;
                @include sc(14px, rgba(26, 26, 26, 1));
                span {
                  @include sc(10px, rgba(255, 199, 65, 1));
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
                @include sc(14px, rgba(77, 77, 77, 1));
              }
            }
            .comment_time {
              flex: 0 0 60px;
              width: 60px;
              text-align: left;
              @include sc(10px, rgba(128, 128, 128, 1));
            }
          }

        }
        .txt {
          margin-top: 3px;
          padding-left: 40px;
          @include sc(14px, rgba(77, 77, 77, 1))
        }
      }
    }

  }
</style>
