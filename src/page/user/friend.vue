<template>
  <div class="friends">
    <vHeader :name="''"></vHeader>
    <scrollTop v-on:scrollTop="top"></scrollTop>
    <scroller lock-x :scrollbar-y=false :bounce=false @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :scroll-bottom-offst="100"  :height="'-44px'">
      <div>
        <div class="friends_main">
          <div class="blur" :style="{backgroundImage: 'url('+URL+')'}"></div>
          <div class="zhut">
            <p class="center"><img :src="URL"><i class="iconfont icon-ttpodicon"></i></p>
            <div class="comment_name"><label>精卫填的海</label> <span>LV7</span></div>
            <!--  <div class="comment_time">关注 21丨 粉丝 16</div>-->
            <div class="intr">个人简介为某人的简要介绍。个人简介可以是表格 的形式，也可以是其他形式。一般用于初次见面时 个人介绍中或者个人履历表中等。</div>
            <!--<div class="btn_21">
              <button class="btn1">联系TA</button>
              <button class="btn2">关 注</button>
            </div>-->
          </div>
        </div>
        <div class="friends_wrapper">
          <sticky :offset="44">
            <tab :line-width="1" class="tab_message" v-model="index">
              <tab-item selected @on-item-click="tab">活动</tab-item>
              <!--       <tab-item @on-item-click="tab">
                       评论
                     </tab-item>
                     <tab-item @on-item-click="tab">个人相册</tab-item>-->
              <tab-item @on-item-click="tab">基本信息</tab-item>
            </tab>
            <checker v-if="index == 0" v-model="checkNum" default-item-class="list_item"
                     selected-item-class="list_item_selected">
              <checker-item :value="0" @on-item-click="onItemClick(0)">
                发起
              </checker-item>
              <checker-item :value="1" @on-item-click="onItemClick(1)">
                参与
              </checker-item>
              <!--  <checker-item :value="3">
                  回顾
                </checker-item>-->
              <checker-item :value="2" @on-item-click="onItemClick(2)">
                收藏
              </checker-item>
            </checker>

          </sticky>
          <div v-if="index == 0">
            <div class="content_f">
              <!--发起活动 -->
              <startList :list="list" v-if="checkNum===0"></startList>
              <!--参与活动 -->
              <joinList :list="list" v-if="checkNum===1"></joinList>
              <!--收藏活动 -->
              <collectionList :list="list" v-if="checkNum===2"></collectionList>
            </div>
          </div>
          <!-- <div v-if="index == 2"></div>-->
          <div v-if="index == 1" class="bs_other">
            <group>
              <cell title="昵称" :value="'鲁迅居然姓周'">
                <i slot="icon" width="20" class="iconfont icon-touxiang-copy"></i>
              </cell>
            </group>
            <group>
              <cell title="ID" :value="'001226'">
                <i slot="icon" width="20" class="iconfont icon-IDnumber"></i>
              </cell>
            </group>
            <group>
              <cell title="性别" :value="'女'">
                <i slot="icon" width="20" class="iconfont icon-xingbie"></i>
              </cell>
            </group>
            <group>
              <cell title="年龄" :value="'22岁'">
                <i slot="icon" width="20" class="iconfont icon-shengri"></i>
              </cell>
            </group>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import {Blur, Scroller, Group, CellBox, Cell, XHeader, Sticky, Tab, TabItem, Checker, CheckerItem} from 'vux';
  import StartList from 'src/components/list/startList'; //发起的
  import joinList from 'src/components/list/joinList'; //参与的
  import collectionList from 'src/components/list/collectionList'; //参与的
  import vHeader from '../../components/user/header';
  import scrollTop from 'src/components/little/scrollTop';
  import {list1, list2, list3} from 'src/service/getDate'
  export default {
    components: {
      Scroller,
      Blur,
      Group,
      CellBox,
      Cell,
      XHeader,
      Sticky, Tab, TabItem, Checker, CheckerItem, StartList, joinList, collectionList, vHeader,scrollTop
    },
    data () {
      return {
        URL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png',
        index: 0,
        checkNum: 0,
        list: [],
        onFetching: false,
        bottomCount: 5,
      }
    },
    created(){
      this.onItemClick(0);
    },
    methods: {
      top(){
        this.$refs.scrollerBottom._xscroll.scrollTop(0);
      },
      goPath(url){
        this.$router.push(url);
      },
      tab(index){
        this.index = index;
      },
      async onItemClick(index){
        if (index === 0) {
          await list1().then(data => {
            this.list = data;
          })
        } else if (index === 1) {
          await list2().then(data => {
            this.list = data;
          })
        } else if (index === 2) {
          await list3().then(data => {
            this.list = data;
          })
        }
      },
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          console.log(1);
          this.onFetching = true;
          setTimeout(() => {
            this.bottomCount += 1;
            this.$nextTick(() => {
//              /this.$refs.scrollerBottom.reset();
              //this.$refs.swiper.xheight = this.basicHeight * this.bottomCount + 'px';
            })
            this.onFetching = false
          }, 2000)
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .friends {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    .friends_main {
      @include wh(100%, 250px);
      flex: 0 0 250px;
      position: relative;
      overflow: hidden;
      .blur {
        @include wh(100%, 100%);
        position: absolute;
        left: 0;
        top: 0;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-filter: blur(4px);
        transform: scale(1.1);
      }
      .zhut {
        @include wh(100%, 100%);
        z-index: 100;
        background: rgba(0, 0, 0, 0.3);
        padding-top: 16px;
        position: relative;
        .center {
          @include wh(50px, 50px);
          text-align: center;
          color: #fff;
          font-size: 18px;
          position: relative;
          margin: 0 auto;
          img {
            width: 100%;
            display: inline-block;
            border-radius: 50%;
          }
          .iconfont {
            @include wh(14px, 14px);
            position: absolute;
            right: -4px;
            bottom: 3px;
            text-align: center;
            line-height: 14px;
            padding: 2px;
            color: #fff;
            font-size: 10px;
            @include borderRadius(50%);
            &.icon-ttpodicon {
              background: #63ACF4;
            }
            &.icon-nv {
              background: rgba(244, 126, 126, 1);
            }
          }
        }
        .comment_name {
          text-align: center;
          margin-top: 10px;
          @include sc(18px, rgb(255, 255, 255));
          label {
            margin-left: 28px;
          }
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
          text-align: center;
          flex: 1;
          margin-top: 10px;
          @include sc(14px, rgb(255, 255, 255));
        }
        .intr {
          margin-top: 10px;
          padding: 0 24px;
          @include sc(14px, rgb(255, 255, 255));
          @include ess(3);
        }
        .btn_21 {
          width: 100%;
          display: flex;
          flex-flow: row;
          margin-top: 10px;
          @include fj(space-around);
          box-sizing: border-box;
          .btn1 {
            @include wh(120px, 25px);
            line-height: 24px;
            box-sizing: border-box;
            @include sc(12px, rgba(236, 236, 236, 1));
            background: rgba(116, 117, 123, 1);
            border-radius: 3px;
            border: 1px solid #fff;
            &:active {
              background: rgb(155, 156, 164);
            }
          }
          .btn2 {
            outline: none;
            @include wh(120px, 25px);
            line-height: 25px;
            box-sizing: border-box;
            @include sc(12px, #fff);
            background: rgba(120, 202, 165, 1);
            border-radius: 3px;
            border: 0;
            &:active {
              background: rgb(156, 247, 209);
            }
          }
        }
      }

    }
    .friends_wrapper {
      flex: 1;
      .tab_message {
        .vux-tab-item {
          font-size: 15px;
        }
      }
      .vux-checker-box {
        width: 100%;
        display: flex;
        flex-flow: row;
        font-size: 15px;
        .list_item {
          flex: 1;
          padding: 10px 0;
          @include sc(15px, rgba(77, 77, 77, 1));
          text-align: center;
          background: #fff;
        }
        .list_item_selected {
          color: rgba(21, 156, 94, 1);
        }
      }
      .bs_other {
        color: rgba(77, 77, 77, 1);
        .weui-cell {
          .weui-cell__ft {
            color: rgba(77, 77, 77, 1);
          }
          .iconfont {
            font-size: 18px;
            margin-right: 13px;
            &.icon-IDnumber {
              margin-top: 3px;
              display: inline-block;
            }
          }
        }
        .weui-cells {
          margin-top: 0;
          @include sc(15px, rgba(57, 64, 67, 1));
          &:before {
            border: 0;
          }
        }
        .weui-cell_access .weui-cell__ft:after {
          border-width: 1px 1px 0 0
        }
      }
    }
  }
</style>
