<template>
  <div class="action_components">
    <div class="action_top">
      <span class="city">
            <x-address style="display:none;" :hide-district=true :title="'选择城市'" @on-shadow-change="onShadowChange"
                       :list="addressData" :show.sync="showAddress"></x-address>
         <label @click="showAddress = true">
           {{name[0]}}
           <i class="iconfont icon-gengduo"></i></label>
      </span>
      <span></span>
      <!-- <router-link to="/search" class="iconfont icon-sousuo"></router-link>-->
    </div>
    <sticky :check-sticky-support="false" :offset="0">
      <tab :line-width="1" class="tab_message" v-model="index">
        <tab-item selected @on-item-click="tab">最新活动</tab-item>
        <tab-item @on-item-click="tab">
          回顾活动
        </tab-item>
      </tab>
      <scroller lock-y :scrollbar-x=false :bounce="false">
        <div class="box vux-1px-b" ref="div">
          <checker default-item-class="demo1-item" v-model="label.value" selected-item-class="demo1-item-selected">
            <checker-item @on-item-click="onItemClick"
                          v-for="(item, index) in label.item" :key="index" :value="item">
              <div class="box-item">
                <div class="tab">{{item}}</div>
              </div>
            </checker-item>
          </checker>
        </div>
      </scroller>
    </sticky>
    <scroller lock-x :scrollbar-y=false :bounce=false @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :height="'-178px'">
      <div>
        <div class="main_list">
          <!--最新活动-->
          <list :list="list" v-if="index===0"></list>
          <!--回顾活动-->
          <!-- <list :list="test.list" v-if="index===1" :notButton="true"></list>-->
        </div>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>
  </div>

</template>

<script>
  import List from 'src/components/list/list';
  import List2 from 'src/components/list/list2'
  import {list} from 'src/service/getDate'

  import {
    Scroller,
    Tab,
    TabItem,
    LoadMore,
    XAddress,
    ChinaAddressV4Data,
    Sticky,
    Checker,
    CheckerItem,
    Value2nameFilter as value2name
  } from 'vux';
  export default {
    components: {
      Scroller,
      Tab,
      TabItem,
      LoadMore,
      XAddress,
      Sticky,
      Checker,
      CheckerItem,
      List,
      List2,
    },
    data () {
      return {
        label: {  // 选择的标签
          value: '',
          item: ['热度', '亲子', '交友', '近郊', '长途', '民俗', '娱乐'],
        },
        list: [],
        name: ['成都'],
        addressData: ChinaAddressV4Data,
        index: 0,
        cityShow: false,
        showAddress: false,
        searchShow: false,
        onFetching: false,
        bottomCount: 10,
      }
    },
    async created(){
      await list().then(data => {
        this.list = data;
      })
    },
    mounted(){
      /* 设置scroll长度 设置每个初始长度为60px scroll长度= 初始长度* 子元素个数*长度*/
      this.$refs.div.style.width = 62 * this.$refs.div.children[0].children.length > window.innerWidth ? 62
        * this.$refs.div.children[0].children.length + 'px' : '100%';
      this.label.value = this.$route.params.typeName;
    },
    methods: {
      /*切换导航*/
      tab(index){
        this.index = index;
      },
      /*选择标签*/
      onItemClick (value) {
        console.log(value);
      },
      onShadowChange (ids, names) {
        //console.log(ids, names)
        this.name = names || ['成都'];
      },
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true;
          setTimeout(() => {
            this.bottomCount += 10
            this.$nextTick(() => {
//              /this.$refs.scrollerBottom.reset()
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

  .action_components {
    .action_top {
      display: flex;
      background: $fc;
      @include wh(100%, 44px);
      box-sizing: border-box;
      flex-flow: row;
      @include fj();
      padding: 0 12px;
      overflow: hidden;
      .city {
        @include sc(14px, #fff);
        text-align: left;
        vertical-align: middle;
        label {
          display: inline-block;
          height: 44px;
          .iconfont {
            @include sc(12px, #fff);
            line-height: 38px;
            margin-left: 5px;
            vertical-align: middle;
            height: 44px;
            padding-right: 20px;
            display: inline-block;
          }
        }
      }
      .icon-sousuo {
        text-decoration: none;
        @include wh(60px, 44px);
        text-align: right;
        line-height: 44px;
        @include sc(17px, #fff);
      }
    }
    .box {
      box-sizing: border-box;
      display: flex;
      flex-flow: row;
      .vux-checker-box {
        font-size: 0;
        .demo1-item {
          font-size: 0;
          .box-item {
            flex: 0 0 62px;
            width: 62px;
            @include sc(14px, rgba(163, 163, 163, 1));
            text-align: center;
            padding: 11px 0
          }
        }
        .demo1-item-selected {
          .box-item > .tab {
            color: rgba(21, 156, 94, 1);
          }
        }
      }
    }
  }

</style>
