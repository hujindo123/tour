<template>
  <div class="fans">
    <x-header :left-options="{backText: ''}" title="粉丝"></x-header>
    <scroller lock-x height="-46px">
      <div>
        <div v-for="x in 10" class="list vux-1px-b">
          <div class="comment_list">
            <div class="header_line">
              <div class="header_img">
                <router-link to="/friend">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                  alt="">
                </router-link>
              </div>
              <div class="other_comment">
                <div class="other_comment_top_follow">
                  <div class="comment_name">精卫填的海 <span>LV7</span></div>
                  <div class="comment_time">关注 21丨 粉丝 16</div>
                </div>
                <div class="comment_answer" @click="showAnswer"><i class="iconfont icon-wechaticon27"></i> 互相关注</div>
              </div>
            </div>
          </div>
          <div class="comment_list">
            <div class="header_line">
              <div class="header_img">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                  alt="">
              </div>
              <div class="other_comment">
                <div class="other_comment_top_follow">
                  <div class="comment_name">精卫填的海 <span>LV7</span></div>
                  <div class="comment_time">关注 21丨 粉丝 16</div>
                </div>
                <div class="comment_answer_add" @click="showAnswer"><i class="iconfont icon-jiahao2"></i> 关注</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroller>
  </div>

</template>

<script>
  import {Badge, XHeader, Popover, ViewBox, Group, CellBox, Cell, XButton, Divider} from 'vux';
  import Scroller from "../../../node_modules/vux/src/components/scroller/index";
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
      XButton, Divider

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

  .fans {
    width: 100%;
    height: 100%;
    background: #fff;
    flex-flow: column;
    .vux-header {
      h1 {
        font-size: 15px;
      }
    }
    .list {
      position: relative;
      display: flex;
      flex-flow: column;
      .comment_list {
        padding: 15px;
        display: flex;
        flex-flow: column;
        .header_line {
          display: flex;
          flex-flow: row;
          font-size: 0;
          align-items: center;
          .header_img {
            @include wh(50px, 50px);
            flex: 0 0 50px;
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
            display: flex;
            flex-flow: row;
            margin-left: 5px;
            @include fj(space-around);
            .other_comment_top_follow {
              display: flex;
              flex-flow: column;
              flex: 1;
              .comment_name {
                @include sc(18px, rgba(57, 64, 67, 1));
                span {
                  @include sc(10px, rgba(255, 199, 65, 1));
                  padding: 0 2px;
                  display: inline-block;
                  vertical-align: middle;
                  margin-top: -3px;
                  border: 1px solid #FFC741;
                  @include borderRadius(2px);
                  margin-left: 5px;
                }
              }
              .comment_time {
                flex: 1;
                text-align: left;
                margin-top: 4px;
                @include sc(12px, rgba(128, 128, 128, 1));
              }
            }
            .comment_answer {
              flex: 0 0 70px;
              width: 70px;
              padding: 5px 0;
              box-sizing: border-box;
              text-align: center;
              @include sc(12px, rgb(255, 255, 255));
              background: rgba(120, 202, 165, 1);
              i {
                font-size: 12px;
              }
            }
            .comment_answer_add {
              flex: 0 0 60px;
              width: 60px;
              padding: 5px 0;
              text-align: center;
              border: 1px solid rgba(120, 202, 165, 1);
              box-sizing: border-box;
              @include sc(12px, rgba(120, 202, 165, 1));
              background: rgb(255, 255, 255);
              i {
                display: inline-block;
                margin-top: -2px;
                vertical-align: middle;
                font-size: 16px;
              }
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
