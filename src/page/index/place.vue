<template>
  <div class="place_components">
    <div class="action_top">
      <span class="city">
            <x-address style="display:none;" :hide-district=true :title="title" @on-shadow-change="onShadowChange"
                       :list="addressData"
                       :show.sync="showAddress"></x-address>
         <label for="a" @click="showAddress = true">
           {{name[0]}}
           <i class="iconfont icon-gengduo" id="a"></i></label>
      </span>
      <!-- <span class="iconfont icon-sousuo">
         <i @click="searchShow =true"></i>
       </span>-->
    </div>
    <div class="choicePlace">
      <span class="city">
         <x-address style="display:none;" :hide-district=true :title="title" @on-shadow-change="onShadowChange"
                    :list="addressData"
                    :show.sync="showAddress"></x-address>
         <label @click="showAddress = true">目的地<i class="iconfont icon-gengduo"></i></label>
          <x-address style="display:none;" :hide-district=true :title="title" @on-shadow-change="onShadowChange"
                     :list="addressData"
                     :show.sync="showAddress"></x-address>
        <label for="b" @click="showLabel">标签 <i class="iconfont icon-gengduo" :class="{'rotate':Label}"
                                                id="b"></i></label>
              <div class="checker_popup" v-if="Label">
                <checker
                  v-model="popup.data"
                  type="checkbox"
                  default-item-class="item"
                  selected-item-class="item-selected">
                <checker-item v-for="(item, index) in popup.label" :value="item" :key="index"
                              @on-item-click.native="onItemClick"> {{item}}
                </checker-item>
              </checker>
            </div>
      </span>
    </div>
    <!--  <div class="hot_search">
       <span>九寨沟</span>
       <span>九寨沟</span>
       <span>上古古镇</span>
       <span>九寨沟</span>
     </div>-->
    <scroller lock-x :scrollbar-y=false :bounce=false @on-scroll-bottom="onScrollBottom"
              ref="scrollerBottom"
              :scroll-bottom-offst="100" :height="'-137px'">
      <div>

        <div class="main_list">
          <!--最新活动-->
          <list :list="test.list" v-if="index===0"></list>
        </div>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>
    <!--滑出搜索-->
    <div v-transfer-dom>
      <popup v-model="searchShow" position="left" width="100%">
        <search v-on:hide="searchShow=false"></search>
      </popup>
    </div>
    <!--返回顶部-->
    <scrollTop v-on:scrollTop="$refs.scrollerBottom._xscroll.scrollTop(0)"></scrollTop>

  </div>
</template>

<script>
  import vTitle from 'src/components/user/header';
  import scrollTop from 'src/components/little/scrollTop';
  import List from 'src/components/list/list';
  import List2 from 'src/components/list/list2'
  import city from 'src/components/city/city';
  import search from 'src/page/search/search';
  import {
    Swiper,
    SwiperItem,
    Scroller,
    Tab,
    TabItem,
    LoadMore,
    TransferDom,
    Popup,
    XAddress,
    Checker,
    CheckerItem,
    ChinaAddressV4Data,
    Value2nameFilter as value2name
  } from 'vux';
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
      XAddress,
      List,
      List2,
      city,
      search,
      Checker,
      CheckerItem,
      scrollTop,
    },
    data () {
      return {
        title: '',
        name: ['成都'],
        addressData: ChinaAddressV4Data,
        index: 0,
        cityShow: false,
        showAddress: false,
        searchShow: false,
        onFetching: false,
        bottomCount: 10,
        test: {
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
        },
        popup: {
          label: ['交友', '亲子游', '近郊', '长途', '民俗', '娱乐'],
          showPopup: false,
          data: ''
        },
        Label: false
      }
    },
    methods: {
      /*切换导航*/
      tab(index){
        this.index = index;
      },
      onShadowChange (ids, names) {
        //console.log(ids, names)
        this.name = names || ['成都'];
      },
      showLabel(){
        this.Label = !this.Label;
      },
      onItemClick (value, disabled) {
        this.showPopup = false
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
    computed: {
      getName(){
        return value2name(this.value, ChinaAddressV4Data)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .place_components {
    .action_top, .choicePlace {
      display: flex;
      background: $fc;
      @include wh(100%, 44px);
      box-sizing: border-box;
      flex-flow: row;
      @include sc(14px, #fff);
      @include fj();
      padding: 0 12px;
      line-height: 44px;
      @include fj();
      position: relative;
      span {
        flex: 1;
        text-align: center;
        &.city {
          text-align: left;
          vertical-align: middle;
          display: flex;
          flex-flow: row;
          label {
            height: 44px;
            display: flex;
            flex-flow: row;
            @include fj();
            .iconfont {
              transition: all 0.5s;
              font-size: 12px;
              line-height: 38px;
              vertical-align: middle;
              height: 44px;
              width: 40px;
              display: inline-block;
              text-align: center;
            }
            .rotate {
              transition: all 0.5s;
              line-height: 44px;
              transform-origin: center;
              transform: rotate(180deg);
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
      .checker_popup {
        position: absolute;
        z-index: 200;
        left: 0;
        background: #fff;
        padding: 0 10px;
        top: 44px;
        .item {
          @include sc(13px, rgba(76, 76, 76, 1));
          padding: 2px 15px;
          line-height: 1.3;
          border-radius: 3px;
          border: 1px solid #b1b1b1;
          margin-top: 10px;
          display: inline-block;
          margin-right: 13px;
        }
        .item-selected {
          background: rgba(204, 245, 226, 1);
          color: $fc;
          border: 1px solid $fc;
        }
      }
    }
    .choicePlace {
      background: #fff;
      @include sc(13px, rgba(77, 77, 77, 1));
      i {
        font-style: normal;
      }
    }
    .hot_search {
      box-sizing: border-box;
      padding: 9px 12px 20px 12px;
      .weui-cells__title {
        padding-left: 0;
        margin-top: 25px;
      }
      span {
        @include sc(13px, rgba(76, 76, 76, 1));
        padding: 2px 15px;
        border-radius: 3px;
        border: 1px solid #b1b1b1;
        margin-top: 10px;
        display: inline-block;
        margin-right: 13px;
      }
    }
  }

</style>
