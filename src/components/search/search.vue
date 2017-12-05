<template>
  <div class="list_search">
    <div class="top_search">
      <x-input class="search_input" placeholder="搜索活动、回顾、目的地" novalidate icon-type="search" :show-clear="true"
               placeholder-align="left">
        <icon slot="label" type="search"></icon>
      </x-input>
      <span @click="$emit('hide')">取消</span>
    </div>
    <!--<div class="hot_search">
      <group title="热门搜索"></group>
      <span>九寨沟</span>
      <span>九寨沟</span>
      <span>上古古镇</span>
      <span>九寨沟</span>
    </div>-->
    <div class="search_tab">
      <sticky :check-sticky-support="false" :offset="0">
        <tab :line-width="1" custom-bar-width="40px" class="tab_message" v-model="index">
          <tab-item selected @on-item-click="tab">活动</tab-item>
          <tab-item @on-item-click="tab">
            回顾
          </tab-item>
          <tab-item @on-item-click="tab">目的地</tab-item>
        </tab>
      </sticky>
    </div>
    <Scroller lock-x :scrollbar-y=false :bounce=false @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :scroll-bottom-offst="100" :height="'-88px'">
      <div class="main_list">
        <!--最新活动-->
        <list :list="test.list" v-if="index===0"></list>
        <!--回顾活动-->
        <list :list="test.list" v-if="index===1" :notButton="true"></list>
        <!--目的地-->
        <list :list="test.list" v-if="index===2" :notButton="true"></list>
        <!--图片新闻-->
        <list2 v-if="index===3"></list2>
        <load-more tip="loading"></load-more>
      </div>
    </Scroller>

  </div>
</template>

<script>
  import List from 'src/components/list/list';
  import List2 from 'src/components/list/list2'
  import {Scroller, XInput, Icon, Group, Tab, TabItem, LoadMore,Sticky} from 'vux';
  export default {
    data () {
      return {
        index: 0,
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
        }
      }
    },
    components: {
      Scroller,
      XInput,
      Icon,
      Sticky,
      Group,
      Tab,
      TabItem,
      List,
      List2,
      LoadMore
    },
    props: {},
    mounted(){
    },
    methods: {
      tab(index){
        this.index = index;
      },
      onScrollBottom () {
        console.log(1);
        console.log(this.onFetching);
        if (this.onFetching) {
          // do nothing
        } else {
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
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .list_search {
    @include wh(100%, 100%);
    z-index: 3000;
    box-sizing: border-box;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    flex-flow: column;
    background: #fff;
    .top_search {
      @include wh(100%, 44px);
      padding: 9px 12px;
      flex: 0 0 44px;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-flow: row;
      .search_input {
        background: rgba(236, 236, 236, 1);
        border-radius: 4px;
        padding: 5px 2px 5px 5px;
        font-size: 13px;
        flex: 1;
        i {
          vertical-align: middle;
          &.weui-icon-search {
            font-size: 15px;
            padding-right: 2px;
          }
        }
      }
      span {
        flex: 0 0 45px;
        line-height: 30px;
        text-align: right;
        @include sc(15px, rgba(76, 76, 76, 1))
      }
    }
    .hot_search {
      box-sizing: border-box;
      padding: 9px 12px 0 12px;
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
    .search_tab {
      flex: 0 0 44px;
      .vux-tab .vux-tab-item {
        line-height: 50px;
      }
    }
  }


</style>
