<template>
  <div class="place_components">
    <div class="action_top">
      目的地
    </div>
    <div class="choicePlace vux-1px-b">
      <span class="city">
        <!--地址-->
         <x-address style="display:none;" :hide-district=true :title="title" @on-shadow-change="onShadowChange"
                    :list="addressData"
                    :show.sync="showAddress"></x-address>
         <label @click="showAddress = true"> {{name[0]}}<i class="iconfont icon-gengduo"></i></label>
        <!-- 标签-->
          <label for="b" @click="openLabel">标签
            <em v-for="x in LabelData" v-if="x">{{x}}</em>
            <i class="iconfont icon-gengduo" :class="{'rotate':Label}" id="b"></i>
          </label>
          <div class="place_component_label">
              <vlable v-show="Label" :arrData=[] v-on:getTab="Showlabel"></vlable>
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
          <list :list="list" :place="true"></list>
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
  import Vlable from 'src/components/label/label.vue'
  import List from 'src/components/list/list';
  import List2 from 'src/components/list/list2'
  import city from 'src/components/city/city';
  import search from 'src/page/search/search';
  import {list} from 'src/service/getDate'

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
      Vlable
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
        list:[],
        LabelData: [],
        Label: false
      }
    },
    async created(){
      await list().then(data => {
        this.list = data;
      })
    },
    methods: {
      /*切换导航*/
      onShadowChange (ids, names) {
        //console.log(ids, names)
        this.name = names || ['成都'];
      },
      openLabel(){
        this.Label = !this.Label;
      },
      Showlabel(v){
        this.LabelData = [];
        this.LabelData = v;
        console.log(this.LabelData);
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
      @include sc(15px, #fff);
      @include fj(center);
      padding: 0 12px;
      line-height: 44px;
      text-align: center;
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
            em {
              font-style: normal;
              margin-left: 5px;
              color: #159C5E;
            }
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
          .place_component_label {
            position: absolute;
            z-index: 200;
            left: 0;
            background: #fff;
            top: 44px;
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
