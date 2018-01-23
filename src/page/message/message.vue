<template>
  <div class="message_user">
    <vTitle name="消息"></vTitle>
    <tab :line-width="1" :custom-bar-width="getBarWidth" class="tab_message" v-model="index">
      <tab-item :selected="index === 0" @on-item-click="tab">
        好友消息
      </tab-item>
      <tab-item :selected="index === 1" @on-item-click="tab">
        <badge text="" class="badge"></badge>
        系统消息
      </tab-item>
      <tab-item :selected="index === 2" @on-item-click="tab">
        <badge text="" class="badge"></badge>
        活动消息
      </tab-item>
      <tab-item :selected="index === 3" @on-item-click="tab">陌生消息</tab-item>
    </tab>
    <div v-if="index==0">
      <div class="tab-swiper vux-center">

      </div>
    </div>
    <div v-if="index==1">
      <!-- 系统信息-->
      <div class="item vux-1px-b">
        <div class="fle_1" @click="showmore(0)"> <!-- 0 为 循环的index-->
          <div class="header">
            <span v-if="!active[0]"></span><!-- 0 为 循环的index-->
          </div>
          <div class="right">
            <div class="top">
              <div class="name">痴头呆脑</div>
              <div class="time">09-09 09:25</div>
            </div>
            <div class="desc" :class="{'ess':childIndex==0}">
              <span ref="he">门户网的会员您已经您注册成为中国自驾游门户网的会员您已经您注册成为中国自驾游您注册成为中国自驾游</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="index==2">
      <!-- 审核 -->
      <div class="item vux-1px-b">
        <div class="fle_1" @click="showmore(1)">
          <div class="header"><span v-if="!active[1]"></span></div>
          <div class="right">
            <div class="top">
              <div class="name">痴头呆脑</div>
              <div class="time">09-09 09:25</div>
            </div>
            <div class="desc" v-if="childIndex!=1">
              <ul class="join_s">
                <li><span class="key">审核状态： </span><span class="vl">未审核</span></li>
                <li><span class="key">昵称： </span><span class="vl">鲁迅居然姓周</span></li>
                <li><span class="key">报名活动：</span><span class="vl">青海到环球5日游青海到环球5日游青海到环球5日游青海到环球5日游</span></li>
              </ul>
              <div class="iconfont icon-gengduo"></div>
            </div>
            <div class="desc ess" v-if="childIndex==1">
              <ul class="join_s">
                <li><span class="key">审核状态： </span><span class="vl">未审核</span></li>
                <li><span class="key">昵称： </span>鲁迅居然姓周</li>
                <li><span class="key">报名活动：</span>青海到环球5日游青海到环球5日游</li>
                <li><span class="key">报名人数：</span>2人</li>
                <li><span class="key">车辆信息：</span>无车 需要两个座位</li>
                <li><span class="key">联系电话：</span>18227648954</li>
              </ul>
              <div class="iconfont icon-gengduo rotate"></div>
            </div>
          </div>
        </div>
        <div class="btn" v-show="childIndex==1">
          <div class="t t1" @click="">审核通过</div>
          <div class="t t2 vux-1px-t" @click="unpass = true">审核不通过</div>
        </div>
      </div>
      <!-- 审核不通过 -->
      <div class="item vux-1px-b">
        <div class="fle_1" @click="showmore(2)">
          <div class="header">
            <span v-if="!active[2]"></span>
          </div>
          <div class="right">
            <div class="top">
              <div class="name">痴头呆脑</div>
              <div class="time">09-09 09:25</div>
            </div>
            <!-- 未展開時候-->
            <div class="desc" v-if="childIndex!=2">
              <ul class="join_s">
                <li><span class="key">审核状态： </span><span class="vl">审核不通过</span></li>
                <li><span class="key">不通过原因：</span><span
                  class="vl">青海到环球5日游青海到环球5日游青海到环球5日游青海到环球5日游青海到环球5日游青海到环球5日游</span></li>
              </ul>
              <div class="iconfont icon-gengduo"></div>
            </div>
            <!--展開的時候-->
            <div class="desc ess" v-if="childIndex==2">
              <ul class="join_s">
                <li><span class="key">审核状态： </span>审核不通过</li>
                <li><span class="key">不通过原因：</span>青海到环球5日游青海到环球5日游青海到环球5日游青海到环球5日游青海到环球5日游青海到环球5日游</li>
                <li><span class="key">昵称： </span>鲁迅居然姓周</li>
                <li><span class="key">报名活动：</span>青海到环球5日游青海到环球5日游</li>
                <li><span class="key">报名人数：</span>2人</li>
                <li><span class="key">车辆信息：</span>无车 需要两个座位</li>
                <li><span class="key">联系电话：</span>18227648954</li>
              </ul>
              <div class="iconfont icon-gengduo rotate"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="index==3"></div>
    <div class="write_ms" v-show="unpass">
      <div class="user_top">
        <span class="iconfont icon-fanhui" @click="unpass=false"></span>
        <span class="register_singin">不通过的原因</span>
        <span class="iconfont icon-wechaticon27" :style="{opacity:reason.length>10?1:0.5}"></span>
      </div>
      <x-textarea :placeholder="'请输入审核不通过的原因'" v-model="reason"></x-textarea>
    </div>
  </div>
</template>

<script>
  import {Scroller, Swiper, SwiperItem, Tab, TabItem, Badge, Panel, XTextarea} from 'vux';
  import vTitle from 'src/components/user/header';

  export default {
    components: {
      XTextarea,
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
        childIndex: -1,
        active: [],
        unpass: false,
        reason: '',
        getBarWidth: function () {
          return 75 + 'px'
        }
      }
    },
    created(){
      if (this.$route.query.type) {
        this.index = (Math.round(this.$route.query.type) > 0 && Math.round(this.$route.query.type) < 4) ? Math.round(this.$route.query.type) : 0;
      }
    },
    methods: {
      tab(index){
        this.index = index;
        this.childIndex = -1;
      },
      showmore(index){
        if (this.childIndex === index) {
          this.childIndex = -1;
          return
        }
        this.active[index] = true;
        this.childIndex = index;
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
      .vux-tab-item {
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
      @include wh(100%, auto);
      display: flex;
      flex-flow: column;
      box-sizing: border-box;
      padding: 12px 0 0 0;
      .fle_1 {
        width: 100%;
        display: flex;
        flex-flow: row;
        box-sizing: border-box;
        padding: 0 12px 12px 12px;
        .header {
          @include wh(45px, 45px);
          flex: 0 0 45px;
          @include borderRadius(50%);
          background: #ffc5b7;
          position: relative;
          font-size: 0;
          span {
            @include wh(10px, 10px);
            background: red;
            display: inline-block;
            position: absolute;
            right: 0;
            border-radius: 50%;
            text-align: center;
            @include sc(9px, rgba(255, 255, 255, 1));
            line-height: 12px;
          }
        }
        .right {
          width: 100%;
          box-sizing: border-box;
          flex: 1;
          padding-left: 13px;
          flex-flow: column;
          position: relative;
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
            @include ess(2);
            padding-right: 18px;
            position: relative;
            @include sc(13px, rgba(77, 77, 77, 1));
            .join_s {
              li {
                @include es();
                display: flex;
                flex-flow: row;
                line-height: 1.4;
                .key {
                  flex: 0 0 70px;
                }
                .vl {
                  flex: 1;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
            &.ess {
              /*display: inline-block;*/
              li {
                overflow: auto;
                text-overflow: initial;
                white-space: normal;
              }
            }
            /*   .labe {
                 margin: 0 auto;
                 @include wh(85%, auto);
                 display: flex;
                 @include fj(space-around);
                 a {
                   padding: 15px 0;
                   color: $fc;
                 }
               }*/
            .icon-gengduo {
              position: absolute;
              right: 0;
              top: 5px;
              color: #ccc;
              &.rotate {
                transform: rotate(180deg)
              }
            }
          }
        }
      }
      .btn {
        width: 100%;
        display: flex;
        flex-flow: row;
        .t {
          @include wh(100%, 45px);
          line-height: 45px;
          text-align: center;
          font-size: 15px;
          flex: 0 0 1;
          &.t1 {
            background: $fc;
            color: #fff;
          }
          &.t2 {
            color: $fc;
          }
        }

      }
    }
    .write_ms {
      @include wh(100%, 100%);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 500;
      background: #fff;
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
        position: relative;
        .iconfont {
          @include wh(46px, 44px);
          flex: 0 0 46px;
          text-align: center;
          @include sc(22px, #fff);
        }
        .icon-wechaticon27 {
          font-size: 24px;
          color: rgba(255, 255, 255, 1);
        }
        .register_singin {
          flex: 1;
          text-align: center;
          @include sc(15px, #fff)
        }
      }
    }

  }
</style>
