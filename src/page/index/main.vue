<template>
  <div class="box_view">
    <scrollTop v-on:scrollTop="top"></scrollTop>
    <scroller lock-x :scrollbar-y=false :bounce=false @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :scroll-bottom-offst="100" :height="'-50px'">
      <div>
        <div class="banner">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in banner" :key="index">
              <router-link :to="{path:'/details2/'+item.id}">
                <img :src="item.img" style="width: 100%">
              </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="box" v-if="banner.length">
          <swiper :options="swiperOption1">
            <swiper-slide v-for="(item, index) in label" :key="index">
              <div class="box-item">
                <router-link :to="{path: '/action', query: {id: item.name}}">
                  <div class="tab"><i class="iconfont" :class="item.icon"></i>{{item.name}}</div>
                </router-link>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
        </div>
        <div class="img_banner">
          <swiper :options="swiperOption2">
            <swiper-slide v-for="(item, index) in guanggao" :key="index">
              <div class="box-img">
                <router-link :to="{path:'/details2/'+item.id}">
                  <img :src=item alt="">
                </router-link>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
        </div>

        <tab :line-width="1" class="tab_message" v-model="index">
          <tab-item selected @on-item-click="tab">最新活动</tab-item>
          <!--  <tab-item @on-item-click="tab">
              回顾活动
            </tab-item>-->
          <tab-item @on-item-click="tab">目的地</tab-item>
          <tab-item @on-item-click="tab">图片新闻</tab-item>
        </tab>
        <div class="main_list" v-if="list">
          <!--最新活动-->
          <list :list="list" v-if="index===0"></list>
          <!--目的地-->
          <list :list="list" v-if="index===1" :place="2"></list> <!-- v-if="index===2" :place="2"-->
          <!--图片新闻-->
          <list2 v-if="index===2"></list2>
        </div>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'

  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import scrollTop from 'src/components/little/scrollTop';
  import List from 'src/components/list/list';
  import List2 from 'src/components/list/list2'
  import {Scroller, Tab, TabItem, LoadMore} from 'vux';
  import {banner, guanggao, list} from 'src/service/getDate'
  export default {
    components: {
      swiper,
      swiperSlide,
      Scroller,
      Tab,
      TabItem,
      LoadMore,
      scrollTop,
      List,
      List2,
    },
    data () {
      return {
        banner: '',
        list: [],
        guanggao: [],
        index: 0, // 选项卡
        label: [ // 标签
          {
            icon: 'icon-mingpianxuanzhong06',
            name: '热度'
          }, {
            icon: 'icon-qinzi',
            name: '亲子'
          }, {
            icon: 'icon-yixihuan',
            name: '交友'
          }, {
            icon: 'icon-jiaoyou',
            name: '近郊'
          }, {
            icon: 'icon-changtuqiche',
            name: '长途'
          }, {
            icon: 'icon-minzugongyi',
            name: '民俗'
          }, {
            icon: 'icon-yule',
            name: '娱乐'
          }
        ],
        mainShow: false,
        onFetching: false,
        bottomCount: 5,
        swiperOption: {
          slidesPerView: 1,
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        },
        swiperOption1: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          resistanceRatio:0,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
          }
        },
        swiperOption2: {
          loop: false,
          slidesPerView: 'auto',
          spaceBetween: 8,
          resistanceRatio:0,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
          }
        }
      }
    },
    mounted(){
    },
    async created(){
      await banner().then(data => {
        this.banner = data;
      });
      await guanggao().then(data => {
        this.guanggao = data;
        this.showList();
      });
      await list().then(data => {
        this.list = data;
      })
    },
    computed: {},
    methods: {
      top(){
        this.$refs.scrollerBottom._xscroll.scrollTop(0);
      },
      showList(){
        this.mainShow = true;
      },
      tab(index){
        this.index = index;
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
    },
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .box_view {
    display: flex;
    flex-flow: column;
    .banner {
      position: relative;
      font-size: 0;
      .swiper-pagination-bullet-active {
        background-color: rgba(255, 255, 255, 1);
      }
    }

    .box {
      box-sizing: border-box;
      display: flex;
      flex-flow: row;
      @include fj(space-around);
      .box-item {
        @include borderRadius(20px);
        width: 98px;
        text-align: center;
        margin: 15px 0;
        background: rgba(229, 229, 229, 1);
        a {
          display: inline-block;
          padding: 8px 0;
          text-decoration: none;
          @include sc(11px, rgba(77, 77, 77, 1));
        }
        .tab {
          letter-spacing: 6px;
          .iconfont {
            font-size: 12px;
          }
        }
      }
      .swiper-scrollbar {
        height: 2px;
        bottom: 0;
        background: transparent;
        .swiper-scrollbar-drag {
          background: $fc;
        }
      }
    }
    .img_banner {
      .swiper-container {
        padding-bottom: 2px;
        .swiper-slide {
          @include wh(160px, 90px);
          .box-img {
            @include wh(160px, 90px);
            img {
              box-sizing: border-box;
              padding: 0 1px;
              display: inline-block;
              @include wh(100%, 90px);
            }
          }
        }
        .swiper-scrollbar {
          height: 2px;
          bottom: 0;
          background: transparent;
          .swiper-scrollbar-drag {
            background: $fc;
          }
        }
      }

    }
    .tab_message {
      .vux-tab-item {
        @include sc(15px, rgba(77, 77, 77, 1));
      }
    }
  }

</style>
