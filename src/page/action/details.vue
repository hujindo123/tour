<template>
  <div class="details">
    <view-box :body-padding-top="'44px'">
      <div slot="header" class="details_top">
      <span class="iconfont icon-shezhi">
      </span>
        <div class="share">
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
        </div>
      </div>
      <div>
        <div class="banner">
          <img src="http://pic.58pic.com/58pic/16/73/00/25x58PICySY_1024.jpg" alt="">
          <div class="txt">10 天 13 小时 27 分钟 36 秒 后报名结束</div>
        </div>
        <div class="main">
          <div class="title">春游，踏青，赏花-带家人去透透气，品尝正统地道的客家美食~</div>
          <div class="main_wrapper">
            <div class="top">
              <div class="header">
                <img src="http://pic.58pic.com/58pic/16/73/00/25x58PICySY_1024.jpg"/>
                <i class="iconfont" :class="{'icon-ttpodicon': true, 'icon-nv':  false}"></i>
              </div>
              <div class="msg">
                <div>
                  <span class="name">Catherine1226 <span class="lv">LV1</span></span>
                </div>
                <div class="line">
                  <span>17-9-20</span>
                  <span><i class="iconfont icon-liulan"></i>5673</span>
                  <span><i class="iconfont icon-pinglun"></i>76</span>
                </div>
              </div>
              <div class="button">
                <x-button text="修改报名" class="txt" type="primary"></x-button>
              </div>
            </div>
            <div class="label">
              <i class="iconfont icon-biaoqian1"></i>
              <span v-for="item in label">{{item}}</span>
            </div>
            <divider class="divider">出行信息</divider>
            <ul class="ul">
              <li><i class="iconfont icon-chufadi"></i><span>出发地</span><span class="txt">广州</span></li>
              <li><i class="iconfont icon-mudedi"></i><span>目的地</span><span class="txt">新丰</span></li>
              <li><i class="iconfont icon-riqi"></i><span>往返时间</span><span class="txt">2天</span></li>
              <li><i class="iconfont icon-weibiaoti102"></i><span>约团人数</span><span class="txt">5-10人</span></li>
              <li><i class="iconfont icon-qian"></i><span>费用分摊</span><span class="txt">AA制</span></li>
              <li><i class="iconfont icon-che"></i><span>有无车</span><span class="txt">有车无空位</span></li>
            </ul>
            <div class="content">
              广州出发需要组队的请于5.6日早上9点到黄埔大道的跑马场汇合后9:20分准时发车.行车里程约160公里.在城北方位的车友,建议自行前往,
              请设置导航"新丰 丰衣足食"这个"五星级农庄"进行午餐,午饭时间12:30分准时开始,早到的吹水交流,迟到的请自行安排用餐.行车,路线不特定,届时根据实时路况多走高速.本次活动费用
              全程AA,提倡低碳出行(拼车并A路途中的油费和路桥费用),同时征集活动赞助商.组队的车友敬请自备手台,频率为438.450
              参与活动的所有车友在抵达新丰后,由资深地陪--咱
              们的黄版做领队并安排一系列活动,包括晚餐和住宿.先谢谢咱们这头"老黄牛"其他事宜需要补充的会及时更新,敬请关注论坛.
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
          <scroller lock-y :scrollbar-x=false :bounce=false>
            <div class="Img_banner" v-show="index ==0" ref="divs">
              <div class="box-img" v-for="x in 12">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                  alt="">
              </div>
            </div>
            <div class="Img_banner" v-show="index ==1" ref="div">
              <div class="box-img" v-for="x in 2">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png"
                  alt="">
              </div>
            </div>
          </scroller>
          <h2>评论列表</h2>
          <comment></comment>
        </div>
      </div>
      <!--<div class="love_say">
        <i class="iconfont icon-aixin"></i>
        <i class="iconfont icon-xiaoxi" @click="comment=true">
          <badge text="222" class="badge"></badge>
        </i>
      </div>-->
      <vbottom></vbottom>
    </view-box>
    <!--   -->
  </div>
</template>

<script>
  import comment from 'src/components/action/comment';
  import vbottom from 'src/components/action/bottom';
  import {Badge, Tab, TabItem, Scroller, Popover, ViewBox, Group, CellBox, Cell, XButton, Divider} from 'vux';

  export default {
    components: {
      Badge,
      Group,
      CellBox,
      Popover,
      ViewBox,
      Cell,
      XButton, Divider,
      Tab, TabItem, Scroller, comment, vbottom

    },
    data () {
      return {
        index: 0,
        label: ['自驾', '大明湖', '情侣'],
        messagesShow: false,
      }
    },
    mounted(){
      this.$refs.divs.style.width = (52 + 4) * this.$refs.divs.children.length > window.innerWidth ? (52 + 4) * this.$refs.divs.children.length + 'px' : '100%';
      this.$refs.div.style.width = (52 + 4) * this.$refs.div.children.length > window.innerWidth ? (52 + 4) * this.$refs.div.children.length + 'px' : '100%';

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

          }
          .button {
            flex: 0 0 72px;
            @include fj();
            justify-content: flex-end;
            .txt {
              line-height: 1;
              @include borderRadius(0);
              padding: 8px 12px;
              text-align: center;
              @include sc(12px, #fff);
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
      padding: 0 12px 12px;
      .tab_message{
        @include wh(160px,40px);
        .vux-tab-item{
          background: transparent;
          @include sc(15px, rgba(77, 77, 77, 1));
          text-align: left;
        }
        .vux-tab-bar-inner{
         background-color: rgba(77, 77, 77, 1);
        }
        .vux-tab-item.vux-tab-selected{
          color: rgba(77, 77, 77, 1);
        }
        .vux-tab-bar-inner{
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
        display: flex;
        flex-flow: row;
        padding-top: 15px;
        .box-img {
          margin-right: 18px;
          img {
            box-sizing: border-box;
            padding: 0 1px;
            @include wh(40px, 40px);
            @include borderRadius(50%);
          }
        }
      }

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
