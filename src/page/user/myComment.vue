<template>
  <div class="myaction">
    <x-header :left-options="{backText: ''}" title="我的评论"></x-header>
    <scroller lock-x height="-46px">
      <div>
        <sticky :offset="44">
          <tab :line-width="1" class="tab_message" v-model="index">
            <tab-item selected @on-item-click="tab">收到的评论</tab-item>
            <tab-item @on-item-click="tab">
              发出的评论
            </tab-item>
          </tab>
        </sticky>
        <div class="main_list">
          <!--收到的评论-->
          <div v-if="index==0">
            <div v-for="item in 10">
              <comment></comment>
            </div>
          </div>
          <!--发出的评论-->
        </div>
        <load-more tip="loading"></load-more>
      </div>

    </scroller>
  </div>

</template>

<script>
  import {
    Badge,
    XHeader,
    Scroller,
    Tab,
    LoadMore,
    TabItem,
    Popover,
    ViewBox,
    Group,
    CellBox,
    Cell,
    XButton,
    Divider,
    Sticky
  } from 'vux';
  import List from 'src/components/list/list';
  import comment from 'src/components/comment/comment';


  export default {
    components: {
      Scroller,
      Sticky,
      Badge,
      Group,
      CellBox,
      Popover,
      ViewBox,
      XHeader,
      Cell,
      Tab,
      TabItem,
      XButton, Divider, LoadMore, List, comment

    },
    data () {
      return {
        index: 0,
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
    methods: {
      tab(index){
        this.index = index;
      },
      showAnswer(){
        this.$emit('showAnswer',
          {
            id: 123,
            txt: 1234
          })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .myaction {
    width: 100%;
    height: 100%;
    background: #fff;
    flex-flow: column;
    .vux-header {
      h1 {
        font-size: 15px;
      }
    }
    .tab_message {
      .vux-tab-item {
        @include sc(15px, rgba(77, 77, 77, 1));
      }
    }
    .main_list {
      padding: 0 10px;
      .comment_list {
        display: flex;
        flex-flow: column;
        padding: 15px 0;
        .header_line {
          display: flex;
          flex-flow: row;
          font-size: 0;
          align-items: center;
          .header_img {
            @include wh(30px, 30px);
            flex: 0 0 30px;
            overflow: hidden;
            img {
              width: 100%;
              display: block;
              @include borderRadius(50%)
            }
          }
          .other_comment {
            flex: 1;
            align-items: center;
            flex-flow: column;
            margin-left: 10px;
            .other_comment_top {
              display: flex;
              flex-flow: row;
              .comment_name {
                flex: 1;
                @include sc(14px, rgba(26, 26, 26, 1));
                span {
                  @include sc(10px, rgba(255, 199, 65, 1));
                  padding: 0 2px;
                  border: 1px solid #FFC741;
                  @include borderRadius(2px);
                  margin-left: 13px;
                }
              }
              .comment_answer {
                flex: 0 0 60px;
                width: 60px;
                text-align: right;
                @include sc(14px, rgba(77, 77, 77, 1));
              }
            }
            .comment_time {
              flex: 0 0 60px;
              width: 60px;
              text-align: left;
              @include sc(10px, rgba(128, 128, 128, 1));
            }
          }

        }
        .txt {
          margin-top: 3px;
          padding-left: 40px;
          @include sc(14px, rgba(77, 77, 77, 1))
        }
      }
    }
  }
</style>
