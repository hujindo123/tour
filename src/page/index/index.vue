<template>
  <div class="index">
    <div class="banner">
      <swiper :list="baseList" loop auto :aspect-ratio="400/750" dots-position="center"
              dots-class="banner_active"></swiper>
    </div>
    <scroller lock-y :scrollbar-x=false :bounce=false>
      <div class="box" ref="div">
        <div class="box-item">
          <div class="tab"><i class="iconfont icon-mingpianxuanzhong06"></i>热度</div>
        </div>
        <div class="box-item">
          <div class="tab"><i class="iconfont icon-qinzi"></i>亲子</div>
        </div>
        <div class="box-item">
          <div class="tab"><i class="iconfont icon-friend"></i>爱心</div>
        </div>
        <div class="box-item">
          <div class="tab"><i class="iconfont icon-mingpianxuanzhong06"></i>热度</div>
        </div>
        <div class="box-item">
          <div class="tab"><i class="iconfont icon-qinzi"></i>亲子</div>
        </div>
        <div class="box-item">
          <div class="tab"><i class="iconfont icon-friend"></i>爱心</div>
        </div>
      </div>
    </scroller>
    <scroller lock-y :scrollbar-x=false :bounce=false>
      <div class="Img_banner" ref="divs">
        <div class="box-img">
          <img src="https://static.vux.li/demo/1.jpg" alt="">
        </div>
        <div class="box-img">
          <img src="https://static.vux.li/demo/1.jpg" alt="">
        </div>
        <div class="box-img">
          <img src="https://static.vux.li/demo/1.jpg" alt="">
        </div>
        <div class="box-img">
          <img src="https://static.vux.li/demo/1.jpg" alt="">
        </div>
      </div>
    </scroller>
    <tab :line-width="1"  class="tab_message" v-model="index">
      <tab-item selected @on-item-click="tab">最新活动</tab-item>
      <tab-item @on-item-click="tab">
        回顾活动
      </tab-item>
      <tab-item @on-item-click="tab">目的地</tab-item>
      <tab-item @on-item-click="tab">图片新闻</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false" height="100px">
      <swiper-item>
        1
      </swiper-item>
      <swiper-item>
      2
      </swiper-item>
      <swiper-item>
       3
      </swiper-item>
      <swiper-item>
        4
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

  import {Swiper, SwiperItem, Scroller,  Tab, TabItem,} from 'vux';

  export default {
    components: {
      Swiper,
      SwiperItem,
      Scroller,
      Tab,
      TabItem,
    },
    data () {
      return {
        baseList: [
            {
          url: 'http://www.baidu.com',
          img: 'https://static.vux.li/demo/1.jpg',

        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',

        },
          {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',

          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }],
        index: 0,

      }
    },
    mounted(){
      this.$refs.div.style.width = (98 + 15) * this.$refs.div.children.length > window.innerWidth ? (98 + 15) * this.$refs.div.children.length + 'px' : '100%';
      this.$refs.divs.style.width = (160 + 4) * this.$refs.divs.children.length > window.innerWidth ? (160 + 4) * this.$refs.divs.children.length + 'px' : '100%';

    },
    methods: {
      tab(index){
        this.index = index;
      }
    },
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .index {
    display: flex;
    flex-flow: column;
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
      .vux-tab-item{
        @include sc(15px, rgba(77,77,77,1));
      }
    }
  }
</style>
