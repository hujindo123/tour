<template>
  <div class="box_view">
    <scrollTop v-on:scrollTop="top"></scrollTop>
    <scroller lock-x :scrollbar-y=false :bounce=false @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :scroll-bottom-offst="100" :height="'-50px'">
      <div>
        <swiper ref="swiper" :loop="true" :aspect-ratio="400/750" @on-get-height="showList">
          <swiper-item class="swiper-demo-img" v-for="(item, index) in banner" :key="index">
            <router-link :to="{path: '/details/'+item.id}">
              <img :src="item.img" style="width: 100%">
            </router-link>
          </swiper-item>
        </swiper>
        <div v-show="mainShow">
          <scroller lock-y :scrollbar-x=true :bounce=false>
            <div class="box" ref="div">
              <div class="box-item" v-for="(item, index) in label">
                <router-link :to="{path: '/action/'+index}">
                  <div class="tab"><i class="iconfont" :class="item.icon"></i>{{item.name}}</div>
                </router-link>
              </div>
            </div>
          </scroller>
          <scroller lock-y :scrollbar-x=false :bounce=false>
            <div class="Img_banner" ref="divs">
              <div class="box-img" v-for="x in test.guanggao">
                <router-link to="/details/15">
                  <img :src=x alt="">
                </router-link>
              </div>
            </div>
          </scroller>
          <sticky :offset="44">
            <tab :line-width="1" class="tab_message" v-model="index">
              <tab-item selected @on-item-click="tab">最新活动</tab-item>
            <!--  <tab-item @on-item-click="tab">
                回顾活动
              </tab-item>-->
              <tab-item @on-item-click="tab">目的地</tab-item>
              <tab-item @on-item-click="tab">图片新闻</tab-item>
            </tab>
          </sticky>
          <div class="main_list">
            <!--最新活动-->
            <list :list="test.list" v-if="index===0"></list>
            <!--回顾活动-->
            <!--  <list :list="test.list" v-if="index===1" :notButton="true"></list>-->
            <!--目的地-->
            <list :list="test.list" v-if="index===1" :notButton="true"></list>
            <!--图片新闻-->
            <list2 v-if="index===2"></list2>
          </div>
          <load-more tip="loading"></load-more>
        </div>
      </div>
    </scroller>

  </div>
</template>

<script>
  import scrollTop from 'src/components/little/scrollTop';
  import List from 'src/components/list/list';
  import List2 from 'src/components/list/list2'
  import {Swiper, SwiperItem, Sticky, Scroller, Tab, TabItem, LoadMore} from 'vux';
  import {banner} from 'src/service/getDate'
  export default {
    components: {
      Sticky,
      Swiper,
      SwiperItem,
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
        index: 0, // 选项卡
        label: [ // 标签
          {
            icon: 'icon-mingpianxuanzhong06',
            name: '热度'
          }, {
            icon: 'icon-qinzi',
            name: '亲子'
          }, {
            icon: 'icon-friend',
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
        test: {
          guanggao: [
            'https://static.vux.li/demo/1.jpg',
            'https://static.vux.li/demo/1.jpg',
            'https://static.vux.li/demo/1.jpg',
            'https://static.vux.li/demo/1.jpg',
            'https://static.vux.li/demo/1.jpg',
            'https://static.vux.li/demo/1.jpg'
          ],
          list: [
            {
              title: "成都的“香格里拉”，周边三日游的绝佳去处到泸沽湖",
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png',
              label: ['自驾', '大明湖', '情侣'],
              intru: '成都的“香格里拉”，周边三日游的绝佳去处到泸沽湖,成都的“香格里拉”，周边三日游的绝佳去处到泸沽湖,成都的“香格里拉”，周边三日游的绝佳去处到泸沽湖,5月1日 从成都出发，到泸沽湖、香格里径西昌行程总计大概6天来回、要求带车性别不限人数4人，绝佳去处、美丽山河约一起准备出发吧。',
              singup: '14月28日',
              url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865914&di=dd4ecf4506ba07fb4f9cc7ed537dcce5&imgtype=0&src=http%3A%2F%2Fwww.qqzhuangban.com%2Fuploadfile%2F2014%2F07%2F1%2F20140731061147783.jpg',
              name: 'FGRLSxlkd',
              id: '11144',
              time: '04-18 11:02',
              see: 5673,
              say: 5267
            },
            {
              title: "成都的“香格里拉”，周边三日游的绝佳去处到泸沽湖",
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865914&di=dd4ecf4506ba07fb4f9cc7ed537dcce5&imgtype=0&src=http%3A%2F%2Fwww.qqzhuangban.com%2Fuploadfile%2F2014%2F07%2F1%2F20140731061147783.jpg',
              label: ['自驾', '大明湖', '情侣'],
              intru: '5月1日 从成都出发，到泸沽湖、香格里径西昌行程总计大概6天来回、要求带车性别不限人数4人，绝佳去处、美丽山河约一起准备出发吧。',
              singup: '14月28日',
              url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865914&di=dd4ecf4506ba07fb4f9cc7ed537dcce5&imgtype=0&src=http%3A%2F%2Fwww.qqzhuangban.com%2Fuploadfile%2F2014%2F07%2F1%2F20140731061147783.jpg',
              name: 'FGRLSxlkd',
              id: '11144',
              time: '04-18 11:02',
              see: 5673,
              say: 5267
            },
            {
              title: "成都的“香格里拉”，周边三日游的绝佳去处到泸沽湖",
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865901&di=a2fb4a7a620afb4bf36f088f6f94bd99&imgtype=0&src=http%3A%2F%2Fdl.bbs.9game.cn%2Fattachments%2Fforum%2F201603%2F16%2F231420io1ozrprnp6iik6r.jpg',
              label: ['自驾', '大明湖', '情侣'],
              intru: '5月1日 从成都出发，到泸沽湖、香格里径西昌行程总计大概6天来回、要求带车性别不限人数4人，绝佳去处、美丽山河约一起准备出发吧。',
              singup: '14月28日',
              url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865901&di=a2fb4a7a620afb4bf36f088f6f94bd99&imgtype=0&src=http%3A%2F%2Fdl.bbs.9game.cn%2Fattachments%2Fforum%2F201603%2F16%2F231420io1ozrprnp6iik6r.jpg',
              name: 'FGRLSxlkd',
              id: '11144',
              time: '04-18 11:02',
              see: 5673,
              say: 5267
            },
            {
              title: "成都的“香格里拉”，周边三日游的绝佳去处到泸沽湖",
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865895&di=1aeccc96546e81af4420278f460b7ace&imgtype=0&src=http%3A%2F%2Fwww.qqzhuangban.com%2Fuploadfile%2F2014%2F07%2F1%2F20140726053359626.jpg',
              label: ['自驾', '大明湖', '情侣'],
              intru: '5月1日 从成都出发，到泸沽湖、香格里径西昌行程总计大概6天来回、要求带车性别不限人数4人，绝佳去处、美丽山河约一起准备出发吧。',
              singup: '14月28日',
              url: 'https://static.vux.li/demo/1.jpg',
              name: 'FGRLSxlkd',
              id: '11144',
              time: '04-18 11:02',
              see: 5673,
              say: 5267
            }

          ]
        }
      }
    },
    mounted(){
    },
    async created(){
      await banner().then(data => {
        this.banner = data;
      })
    },
    computed: {},
    methods: {
      top(){
        this.$refs.scrollerBottom._xscroll.scrollTop(0);
      },
      showList(){
        this.mainShow = true;
        this.$refs.div.style.width = (98 + 15) * this.$refs.div.children.length > window.innerWidth ? (98 + 15) * this.$refs.div.children.length + 'px' : '100%';
        this.$refs.divs.style.width = (160 + 4) * this.$refs.divs.children.length > window.innerWidth ? (160 + 4) * this.$refs.divs.children.length + 'px' : '100%';
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
              this.$refs.scrollerBottom.reset();
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
    @include wh(100%, 100%);
    display: flex;
    flex-flow: column;
    .banner {
      position: relative;
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
        text-align: center;
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
    }

    .Img_banner {
      display: flex;
      flex-flow: row;
      @include fj();
      .box-img {
        img {
          box-sizing: border-box;
          padding: 0 1px;
          @include wh(160px, 90px);
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
