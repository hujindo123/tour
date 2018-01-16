<template>
  <div>
    <vTitle name="提交成功"></vTitle>
    <Scroller lock-x :scrollbar-y=false :bounce=false @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :scroll-bottom-offst="100" :height="'-44px'">
      <div>
        <div class="join_desc">
          <span class="iconfont icon-wechaticon27"></span>
          <span v-show="$route.params.type ==0">发起活动信息成功</span>
          <span v-show="this.$route.params.type ==1">提交报名信息成功</span>
        </div>
        <div class="join_sm">
          <ul class="join_s" v-if="this.$route.params.type ==0">
            <li><span class="key">发起人： </span>鲁迅居然姓周</li>
            <li><span class="key">报名名称：</span>青海到环球5日游青海到环球5日游</li>
          </ul>
          <ul class="join_s" v-if="this.$route.params.type ==1">
            <li><span class="key">昵称： </span>鲁迅居然姓周</li>
            <li><span class="key">报名活动：</span>青海到环球5日游青海到环球5日游</li>
            <li><span class="key">报名人数：</span>2人</li>
            <li><span class="key">车辆信息：</span>无车 需要两个座位</li>
            <li><span class="key">联系电话：</span>18227648954</li>
          </ul>
          <div class="labe">
            <router-link to="/details/15">返回活动</router-link>
            <router-link to="/">返回首页</router-link>
          </div>
          <divider>推荐活动</divider>
        </div>
        <list :list="test.list" v-if="index===0"></list>
      </div>

    </Scroller>
  </div>
</template>

<script>
  import List from 'src/components/list/list';
  import vTitle from 'src/components/user/header';
  import {Scroller, LoadMore,Divider} from 'vux';
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
      List,
      LoadMore,
      Divider,
      vTitle

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

  .join_desc {
    text-align: center;
    font-size: 0;
    padding: 10px 0;
    background: #fff;
    .icon-wechaticon27 {
      padding: 0 5px;
      font-size: 38px;
      font-weight: 600;
      color: #159C5E;
    }
    span {
      font-size: 18px;
      height: 38px;
      line-height: 38px;
      vertical-align: middle;
      display: inline-block;
    }
  }

  .join_sm {
    @include wh(100%, auto);
    background: #fff;
    box-sizing: border-box;
    padding: 0 12px;
    .join_s {

      width: 85%;
      margin: 0 auto;
      border: 1px solid #ccc;
      overflow: hidden;
      li {
        @include es();
      }
      .key {
        width: 90px;
        display: inline-block;
        padding: 8px;
      }

    }
    .labe {
      margin: 0 auto;
      @include wh(85%, auto);
      display: flex;
      @include fj(space-around);
      a {
        padding: 15px 0;
        color: $fc;
      }
    }
  }

  .list_search {
    @include wh(100%, 100%);
    z-index: 3000;
    box-sizing: border-box;
    display: flex;
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
