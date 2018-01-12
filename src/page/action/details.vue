<template>
  <div class="details" v-if="details">
    <view-box :body-padding-top="'44px'">
      <div slot="header" class="details_top">
      <span class="iconfont icon-fanhui" @click="$router.go(-1)">
      </span>
        <!--   <div class="share">
             <span class="iconfont icon-share"></span>
             <span class="iconfont icon-tubiaozhizuomoban" @click="messagesShow=true"></span>
             <div v-if="messagesShow" class="message">
               <div class="arrow"></div>
               <div class="content">
                 <router-link to="/message" class="tab vux-1px-b"><i class="iconfont icon-xiaoxi1"></i>消息</router-link>
                 <router-link to="/message" class="tab vux-1px-b"><i class="iconfont icon-feiji"></i>私信TA</router-link>
                 <router-link to="/message" class="tab vux-1px-b"><i class="iconfont icon-shouye"></i>首页</router-link>
               </div>
             </div>
           </div>-->
      </div>
      <div>
        <div class="banner">
          <img src="http://pic.58pic.com/58pic/16/73/00/25x58PICySY_1024.jpg" alt="">
          <div class="txt">
            <!--    <Countdown endTime="1513353600" :callback="callback" endText="已经结束了"></Countdown>-->
            <!--10 天 13 小时 27 分钟 36 秒 后报名结束-->
            <span v-if="timeShow"><clocker :time="time1" slots="123" @on-finish="finish"></clocker> 后报名结束</span> <span
            v-if="!timeShow">已经结束</span>
          </div>


        </div>
        <div class="main">
          <div class="title">{{details.title}}</div>
          <div class="main_wrapper">
            <div class="top">
              <router-link to="/friend">
                <div class="header">
                  <img src="http://pic.58pic.com/58pic/16/73/00/25x58PICySY_1024.jpg"/>
                  <i class="iconfont" :class="{'icon-ttpodicon': !details.user.sex, 'icon-nv': details.user.sex}"></i>
                </div>
              </router-link>
              <div class="msg">
                <div>
                  <span class="name">Catherine1226 <span class="lv">LV{{details.user.level}}</span></span>
                </div>
                <div class="line">
                  <span>{{details.user.birthday}}</span>
                  <span><i class="iconfont icon-liulan"></i> {{details.user.see}}</span>
                  <span><i class="iconfont icon-pinglun"></i> {{details.user.msg}}</span>
                </div>
                <div class="button">
                  <x-button text="修改报名" class="txt" type="primary"></x-button>
                  <div style="margin-top: 1px">
                    <x-button text="取消报名" class="txt" type="primary"></x-button>
                  </div>
                </div>
                <!--
                 <div class="button">
                  <x-button text="编辑活动" class="txt" type="primary"></x-button>
                  <div style="margin-top: 1px">
                    <x-button text="取消报名" class="txt" type="primary"></x-button>
                    <x-button text="截止报名" class="txt update" type="primary"></x-button>
                  </div>
                </div>
                -->
              </div>
            </div>
            <div class="label">
              <i class="iconfont icon-biaoqian1"></i>
              <span v-for="item in details.user.label">
                <router-link :to="{path: '/action/'+item.name}">{{item}} </router-link>
              </span>
            </div>
            <divider class="divider">出行信息</divider>
            <ul class="ul">
              <li><i class="iconfont icon-chufadi"></i><span>出发地</span><span
                class="txt">{{details.message.start}}</span></li>
              <li><i class="iconfont icon-mudedi"></i><span>目的地</span><span class="txt">{{details.message.end}}</span>
              </li>
              <li><i class="iconfont icon-riqi"></i><span>往返时间</span><span class="txt">{{details.message.day}}</span>
              </li>
              <li><i class="iconfont icon-weibiaoti102"></i><span>约团人数</span><span
                class="txt">{{details.message.num}}</span></li>
              <li><i class="iconfont icon-qian"></i><span>费用分摊</span><span class="txt">{{details.message.money}}</span>
              </li>
              <li><i class="iconfont icon-che"></i><span>有无车</span><span class="txt">{{details.message.bus}}</span></li>
            </ul>
            <div class="content">
              {{details.context}}
            </div>
          </div>
        </div>
        <div class="comment_pople">
          <tab :line-width="2" custom-bar-width="40px" class="tab_message" v-model="index">
            <tab-item selected @on-item-click="tab">已审核</tab-item>
            <tab-item @on-item-click="tab">
              未审核
            </tab-item>
          </tab>
          <div class="Img_banner" :style="{paddingLeft: paddingLeft }" v-show="index ==0">
            <div class="box-img" v-for="x in num">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                alt="">
            </div>
            <!--<div class="box-img" v-for="x in 12">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                alt="">
            </div>-->
            <div class="box-img" v-show="isShow && index == 0 " v-for="x in 3">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                alt="">
            </div>
            <div class="icon_more" v-show="false " :class="{rotate: isShow && index == 0}">
              <i class="iconfont icon-gengduo" @click="iconMore"></i>
            </div>
          </div>
          <div class="Img_banner" :style="{paddingLeft: paddingLeft }" v-show="index ==1">
            <div class="box-img" v-for="x in num">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                alt="">
            </div>
            <!--<div class="box-img" v-for="x in 12">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                alt="">
            </div>-->
            <div class="box-img" v-show="isShow && index == 1 " v-for="x in 13">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                alt="">
            </div>
            <div class="icon_more" v-show="true" :class="{rotate: isShow && index == 1}">
              <i class="iconfont icon-gengduo" @click="iconMore"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- 评论 -->
      <div class="love_say">
        <i class="iconfont icon-aixin"></i>
        <i class="iconfont icon-xiaoxi" @click="goPath('/comment')">
          <badge :text="details.comment.num" class="badge"></badge>
        </i>
      </div>
    </view-box>
  </div>
</template>

<script>

  import {Badge, Tab, TabItem, Scroller, Popover, Clocker, ViewBox, Group, CellBox, Cell, XButton, Divider} from 'vux';
  import Countdown from 'src/components/HelloFromVux';
  import {details} from 'src/service/getDate'
  export default {
    components: {
      Badge,
      Group,
      CellBox,
      Popover,
      ViewBox,
      Cell,
      XButton, Divider,
      Clocker,
      Tab, TabItem, Scroller, Countdown
    },
    data () {
      return {
        index: 0,
        details: '',
        messagesShow: false,
        time1: '2018-07-13 21:54',
        timeShow: true,
        num: 0,
        isShow: false
      }
    },
    mounted(){
      this.num = parseInt(window.innerWidth / 48);
      this.paddingLeft = (window.innerWidth - this.num * 48) / 2 + 'px';
    },
    async created(){
      await details().then(data => {
        this.details = data[0];
      })
    },
    methods: {
      tab(index){
        this.index = index;
        this.isShow = false;
      },
      iconMore(){
        if (this.isShow) {
          this.isShow = !this.isShow;
        } else {
          this.isShow = true;
        }
      },
      goPath(url){
        this.$router.push(url)
      },
      callback(v){
        console.log(v);
      },
      finish(){
        this.timeShow = false
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .details {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-flow: column;
    .details_top {
      @include wh(100%, 44px);
      @include sc(14px, #fff);
      @include fj();
      display: flex;
      z-index: 2000;
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
    .banner {
      @include wh(100%, 190px);
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        display: inline-block;
      }
      .txt {
        padding: 9px 15px;
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        bottom: 0;
        left: 0;
        @include sc(15px, #fff);
        background: rgba(0, 0, 0, 0.5);
      }
    }
    .main {
      padding: 12px;
      .title {
        @include sc(18px, rgba(77, 77, 77, 1))
      }
      .main_wrapper {
        width: 100%;
        box-sizing: border-box;
        margin-top: 10px;
        display: flex;
        flex-flow: column;
        .top {
          width: 100%;
          display: flex;
          flex-flow: row;
          position: relative;
          .header {
            position: relative;
            flex: 0 0 60px;
            img {
              @include wh(60px, 60px);
              @include borderRadius(50%);
            }
            .iconfont {
              position: absolute;
              right: -3px;
              bottom: 10px;
              padding: 2px;
              color: #fff;
              font-size: 14px;
              @include borderRadius(50%);
              &.icon-ttpodicon {
                background: #63ACF4;
              }
              &.icon-nv {
                background: rgba(244, 126, 126, 1);
              }
            }
          }
          .msg {
            flex: 1;
            padding: 11px 0 11px 10px;
            box-sizing: border-box;
            flex-flow: column;
            @include fj();
            align-items: flex-start;
            @include sc(10px, rgba(128, 128, 128, 1));
            @include es();
            .name {
              @include sc(14px, rgba(77, 77, 77, 1));
              .lv {
                vertical-align: top;
                padding: 1px 3px;
                background: rgba(255, 199, 65, 1);
                @include sc(10px, rgba(255, 255, 255, 1));
                @include borderRadius(2px);
              }
            }
            .line {
              width: 100%;
              flex-flow: row;
              .iconfont {
                margin-left: 10px;
                margin-right: 3px;
                @include sc(10px, rgba(128, 128, 128, 1));
              }
              .icon-liulan {
                font-size: 16px;
                height: 15px;
                display: inline-block;
                line-height: 12px;
                vertical-align: middle;
              }
            }
            .button {
              position: absolute;
              width: 72px;
              right: 5px;
              top: 10px;
              .txt {
                line-height: 1;
                @include borderRadius(0);
                padding: 8px;
                text-align: center;
                @include sc(12px, #fff);
                &.update {
                  margin-top: 1px;
                }
              }
            }
          }
        }
        .label {
          width: 100%;
          height: 18px;
          font-size: 0;
          text-align: center;
          .iconfont {
            vertical-align: middle;
            margin-top: -5px;
            margin-right: 5px;
            display: inline-block;
            @include sc(10px, rgba(230, 230, 230, 1));
          }
          span {
            height: 18px;
            box-sizing: border-box;
            line-height: 18px;
            margin-left: 5px;
            padding: 2px 5px;
            @include borderRadius(3px);
            background: rgba(230, 230, 230, 1);
            @include sc(9px, rgba(153, 153, 153, 1));
          }

        }
        .divider {
          @include sc(12px, rgba(77, 77, 77, 1));
          padding: 5px 0;
        }
        .ul {
          padding: 0;
          margin: 0;
          position: relative;
          width: 100%;
          @include sc(12px, rgba(77, 77, 77, 1));
          li {
            list-style: none;
            float: left;
            width: 50%;
            margin: 5px 0;
            .iconfont {
              margin-right: 6px;
              font-size: 12px;
            }
            .txt {
              margin-left: 10px;
            }
          }
        }
        .content {
          margin-top: 20px;
          text-indent: 2em;
        }
      }
    }
    .comment_pople {
      /* padding: 0 12px 12px;*/
      .tab_message {
        margin-left: 12px;
        @include wh(160px, 40px);
        .vux-tab-item {
          background: transparent;
          @include sc(15px, rgba(77, 77, 77, 1));
          text-align: left;
        }
        .vux-tab-bar-inner {
          background-color: rgba(77, 77, 77, 1);
        }
        .vux-tab-item.vux-tab-selected {
          color: rgba(77, 77, 77, 1);
        }
        .vux-tab-bar-inner {
          margin: 0;
        }
      }
      h2 {
        display: inline-block;
        padding-bottom: 5px;
        font-weight: normal;
        @include sc(15px, rgba(77, 77, 77, 1));
        border-bottom: 2px solid rgba(77, 77, 77, 1);
      }
      .Img_banner {
        width: 100%;
        text-align: left;
        font-size: 0;
        .box-img {
          @include wh(40px, 40px);
          display: inline-block;
          margin: 15px 4px 0 4px;
          transition: all 5s;
          /* margin-left: 8px;*/
          img {
            box-sizing: border-box;
            padding: 0 1px;
            @include wh(40px, 40px);
            @include borderRadius(50%);
          }
        }
        .icon_more {
          text-align: center;
          &.rotate {
            transform: rotate(180deg);
          }
          .icon-gengduo {
            padding: 5px;
            font-size: 20px;
            color: #999;
            animation: an 2.5s ease-in-out infinite alternate;
          }
          @keyframes an {
            from {
              opacity: 0.5;
            }
            to {
              opacity: 1;
            }
          }
        }
      }

    }
    .love_say {
      @include wh(160px, 48px);
      position: fixed;
      bottom: 165px;
      left: 0;
      background: rgba(255, 255, 255, 0.5);
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
