<template>
  <div class="message_user">
    <vTitle name="消息"></vTitle>
    <tab :line-width="1" :custom-bar-width="getBarWidth" class="tab_message" v-model="index">
      <tab-item selected @on-item-click="tab">好友消息</tab-item>
      <tab-item @on-item-click="tab">
        <badge text="" class="badge"></badge>
        系统消息
      </tab-item>
      <tab-item @on-item-click="tab">陌生消息</tab-item>
    </tab>
   <!-- <scroller lock-x height="-44">


    </scroller>-->
    <swiper v-model="index" :show-dots="false" height="100px">
      <swiper-item>
        <div class="tab-swiper vux-center">
          <div class="item vux-1px-b">
            <div class="header">
              <span>1</span>
            </div>
            <div class="right">
              <div class="top">
                <div class="name">痴头呆脑</div>
                <div class="time">09-09 09:25</div>
              </div>
              <div class="desc">门户网的会员您已经您注册成为中国自驾游门户网的会员您已经您注册成为中国自驾游</div>
            </div>
          </div>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center">
          <div class="item vux-1px-b">
            <div class="header"></div>
            <div class="right">
              <div class="top">
                <div class="name">系统消息</div>
                <div class="time">昨天 09:25</div>
              </div>
              <div class="desc">门户网的会员您已经您注册成为中国自驾游门户网的会员您已经您注册成为中国自驾游</div>
            </div>
          </div>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center">
          <div class="item vux-1px-b">
            <div class="header"></div>
            <div class="right">
              <div class="top">
                <div class="name">嗯嗯</div>
                <div class="time">09-09 09:25</div>
              </div>
              <div class="desc">门户网的会员您已经您注册成为中国自驾游门户网的会员您已经您注册成为中国自驾游</div>
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>

  </div>
</template>

<script>
  import {Scroller, Swiper, SwiperItem, Tab, TabItem, Badge, Panel} from 'vux';
  import vTitle from 'src/components/user/header';

  export default {
    components: {
      Scroller,
      Swiper,
      SwiperItem,
      Tab,
      TabItem,
      Badge,
      Panel,
      vTitle,

    },
    data () {
      return {
        index: 0,
        getBarWidth: function () {
          return 75 + 'px'
        }
      }
    },
    methods: {
      tab(index){
        this.index = index;
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .message_user {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-flow: column;
    .tab_message {
      .vux-tab-item{
        @include sc(15px, rgba(76, 76, 76, 1));
      }
      .badge {
        @include wh(7px, 7px);
        border-radius: 50%;
        padding: 0;
        margin-top: -2px;
        margin-right: 2px;
      }
    }
    .item {
      @include wh(100%, 70px);
      display: flex;
      flex-flow: row;
      box-sizing: border-box;
      padding: 12px;
      .header {
        @include wh(45px, 45px);
        flex: 0 0 45px;
        @include borderRadius(50%);
        background: #ffc5b7;
        position: relative;
        font-size: 0;
        span{
          @include wh(12px, 12px);
          background: red;
          display: inline-block;
          position: absolute;
          right: 0;
          border-radius: 50%;
          text-align: center;
          @include sc(9px,rgba(255,255,255,1));
          line-height: 12px;
        }
      }
      .right {
        width: 100%;
        box-sizing: border-box;
        flex: 1;
        padding-left: 13px;
        flex-flow: column;
        overflow: hidden;
        .top {
          display: flex;
          flex: 1;
          flex-flow: row;
          .name {
            padding: 3px 0;
            flex: 1;
            @include sc(15px, rgba(1, 1, 1, 1));
          }
          .time {
            text-align: right;
            flex: 0 0 80px;
            @include sc(10px, rgba(124, 124, 124, 1));
          }

        }
        .desc {
          @include es();
          @include sc(13px, rgba(77, 77, 77, 1));
        }
      }
    }

  }
</style>
