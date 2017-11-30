<template>
  <div class="action_components">
    <div class="action_top">
      <span class="city">
         <label @click="cityShow =true">成都 <i class="iconfont icon-gengduo"></i></label>
      </span>
      <span></span>
      <span class="iconfont icon-sousuo">
        <i @click="searchShow =true"></i>
      </span>
    </div>
    <tab :line-width="1" class="tab_message" v-model="index">
      <tab-item selected @on-item-click="tab">最新活动</tab-item>
      <tab-item @on-item-click="tab">
        回顾活动
      </tab-item>
      <tab-item @on-item-click="tab">目的地</tab-item>
      <tab-item @on-item-click="tab">图片新闻</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false" height="400px">
      <swiper-item>
        <!-- <list></list>-->
        <scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
                  :scroll-bottom-offst="200">
          <div class="box2">
            <p v-for="i in bottomCount">placeholder {{i}}</p>
            <load-more tip="loading"></load-more>
          </div>
        </scroller>
      </swiper-item>
      <swiper-item>
        <list1></list1>
      </swiper-item>
      <swiper-item>
        <list1></list1>
      </swiper-item>
      <swiper-item>
        <list2></list2>
      </swiper-item>
    </swiper>
    <div v-transfer-dom>
      <popup v-model="cityShow" position="left" width="100%">
        <city v-on:hide="hide"></city>
        <!--<div class="position-horizontal-demo">
          <span class="vux-close" @click="show8 = false"></span>
        </div>-->
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="searchShow" position="left" width="100%">
        <search v-on:hide="hide"></search>
        <!--<div class="position-horizontal-demo">
          <span class="vux-close" @click="show8 = false"></span>
        </div>-->
      </popup>
    </div>
  </div>
</template>

<script>
  import vTitle from 'src/components/user/header';
  import List from 'src/components/list/list';
  import List1 from 'src/components/list/list1';
  import List2 from 'src/components/list/list2';
  import city from 'src/components/city/city';
  import search from 'src/components/search/search';
  import {Swiper, SwiperItem, Scroller, Tab, TabItem, LoadMore, TransferDom, Popup} from 'vux';
  export default {
    directives: {
      TransferDom
    },
    components: {
      Swiper,
      SwiperItem,
      Scroller,
      Tab,
      TabItem,
      LoadMore,
      Popup,
      List,
      List1,
      List2,
      city,
      search,
    },
    data () {
      return {
        index: 0,
        cityShow: false,
        searchShow: false,
        onFetching: false,
        bottomCount: 10

      }
    },
    methods: {
      tab(index){
        this.index = index;
      },
      hide(){
        this.cityShow = false;
      },
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true;
          setTimeout(() => {
            this.bottomCount += 10
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
          }, 2000)
        }
      },
    },
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .action_components {
    .action_top {
      display: flex;
      background: $fc;
      @include wh(100%, 44px);
      box-sizing: border-box;
      flex-flow: row;
      @include sc(14px, #fff);
      @include fj();
      padding: 0 12px;
      line-height: 44px;
      overflow: hidden;
      @include fj();
      span {
        flex: 1;
        text-align: center;
        &.city {
          text-align: left;
          vertical-align: middle;
          label {
            display: inline-block;
            height: 44px;
            .iconfont {
              font-size: 12px;
              line-height: 38px;
              margin-left: 5px;
              vertical-align: middle;
              height: 44px;
              padding-right: 20px;
              display: inline-block;
            }
          }

        }
        &.icon-sousuo {
          text-align: right;
          i {
            position: absolute;
            right: 0;
            display: inline-block;
            @include wh(60px, 44px);
          }
        }
      }
    }

    .tab_message {
      .vux-tab-item {
        @include sc(15px, rgba(77, 77, 77, 1));
      }
    }
    .city_components {
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 3000;
    }
  }

</style>
