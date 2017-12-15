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
          <list :list="test.list" v-if="index===0"></list>
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
      }
    },
    mounted(){
      /* 设置scroll长度 设置每个初始长度为60px scroll长度= 初始长度* 子元素个数*长度*/
      this.$refs.div.style.width = 62 * this.$refs.div.children[0].children.length > window.innerWidth ? 62
        * this.$refs.div.children[0].children.length + 'px' : '100%';
      this.label.value = this.label.item[this.$route.params.id];
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
