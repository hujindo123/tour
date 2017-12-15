<template>
  <div class="friends">
    <x-header :left-options="{backText: ''}" title=""></x-header>
    <div class="friends_main">
      <div class="blur" :style="{backgroundImage: 'url('+URL+')'}"></div>
      <div class="zhut">
        <p class="center"><img :src="URL"><i class="iconfont icon-ttpodicon"></i></p>
        <div class="comment_name"><label>精卫填的海</label> <span>LV7</span></div>
      <!--  <div class="comment_time">关注 21丨 粉丝 16</div>-->
        <div class="intr">个人简介为某人的简要介绍。个人简介可以是表格 的形式，也可以是其他形式。一般用于初次见面时 个人介绍中或者个人履历表中等。</div>
        <!--<div class="btn_21">
          <button class="btn1">联系TA</button>
          <button class="btn2">关 注</button>
        </div>-->
      </div>
    </div>
    <div class="friends_wrapper">
      <sticky :offset="44">
        <tab :line-width="1" class="tab_message" v-model="index">
          <tab-item selected @on-item-click="tab">活动</tab-item>
   <!--       <tab-item @on-item-click="tab">
            评论
          </tab-item>
          <tab-item @on-item-click="tab">个人相册</tab-item>-->
          <tab-item @on-item-click="tab">基本信息</tab-item>
        </tab>
        <checker v-if="index == 0" v-model="checkNum" default-item-class="list_item"
                 selected-item-class="list_item_selected">
          <checker-item :value="1">
            发起
          </checker-item>
          <checker-item :value="2">
            参与
          </checker-item>
        <!--  <checker-item :value="3">
            回顾
          </checker-item>-->
          <checker-item :value="4">
            收藏
          </checker-item>
        </checker>

      </sticky>
      <div v-if="index == 0">
        <div class="content_f">
          <div v-if="checkNum==1">
            <list :list="test.list"></list>
          </div>
          <div v-if="checkNum==2">
            <list :list="test.list"></list>
          </div>
          <div v-if="checkNum==3">
            <list :list="test.list" :notButton="true"></list>
          </div>
          <div v-if="checkNum==4">
            <list :list="test.list" :notButton="true"></list>
          </div>
        </div>
      </div>
     <!-- <div v-if="index == 2"></div>-->
      <div v-if="index == 1" class="bs_other">
        <group>
          <cell title="昵称" :value="'鲁迅居然姓周'">
            <i slot="icon" width="20" class="iconfont icon-touxiang-copy"></i>
          </cell>
        </group>
        <group>
          <cell title="ID" :value="'001226'">
            <i slot="icon" width="20" class="iconfont icon-IDnumber"></i>
          </cell>
        </group>
        <group>
          <cell title="性别" :value="'女'">
            <i slot="icon" width="20" class="iconfont icon-xingbie"></i>
          </cell>
        </group>
        <group>
          <cell title="年龄" :value="'22岁'">
            <i slot="icon" width="20" class="iconfont icon-shengri"></i>
          </cell>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
  import {Blur, Group, CellBox, Cell, XHeader, Sticky, Tab, TabItem, Checker, CheckerItem} from 'vux';
  import List from 'src/components/list/list';

  export default {
    components: {
      Blur,
      Group,
      CellBox,
      Cell,
      XHeader,
      Sticky, Tab, TabItem, Checker, CheckerItem, List
    },
    data () {
      return {
        URL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png',
        index: 0,
        checkNum: 1,
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
      goPath(url){
        this.$router.push(url);
      },
      tab(index){
        this.index = index;
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .friends {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    .vux-header {
      h1 {
        font-size: 15px;
      }
    }
    .friends_main {
      @include wh(100%, 250px);
      flex: 0 0 250px;
      position: relative;
      overflow: hidden;
      .blur {
        @include wh(100%, 100%);
        position: absolute;
        left: 0;
        top: 0;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-filter: blur(4px);
        transform: scale(1.1);
      }
      .zhut {
        @include wh(100%, 100%);
        z-index: 100;
        background: rgba(0, 0, 0, 0.3);
        padding-top: 16px;
        position: relative;
        .center {
          @include wh(50px, 50px);
          text-align: center;
          color: #fff;
          font-size: 18px;
          position: relative;
          margin: 0 auto;
          img {
            width: 100%;
            display: inline-block;
            border-radius: 50%;
          }
          .iconfont {
            @include wh(14px, 14px);
            position: absolute;
            right: -4px;
            bottom: 3px;
            text-align: center;
            line-height: 14px;
            padding: 2px;
            color: #fff;
            font-size: 10px;
            @include borderRadius(50%);
            &.icon-ttpodicon {
              background: #63ACF4;
            }
            &.icon-nv {
              background: rgba(244, 126, 126, 1);
            }
          }
        }
        .comment_name {
          text-align: center;
          margin-top: 10px;
          @include sc(18px, rgb(255, 255, 255));
          label {
            margin-left: 28px;
          }
          span {
            @include sc(10px, rgba(255, 199, 65, 1));
            padding: 0 2px;
            display: inline-block;
            vertical-align: middle;
            margin-top: -3px;
            border: 1px solid #FFC741;
            @include borderRadius(2px);
            margin-left: 5px;
          }
        }
        .comment_time {
          text-align: center;
          flex: 1;
          margin-top: 10px;
          @include sc(14px, rgb(255, 255, 255));
        }
        .intr {
          margin-top: 10px;
          padding: 0 24px;
          @include sc(14px, rgb(255, 255, 255));
          @include ess(3);
        }
        .btn_21 {
          width: 100%;
          display: flex;
          flex-flow: row;
          margin-top: 10px;
          @include fj(space-around);
          box-sizing: border-box;
          .btn1 {
            @include wh(120px, 25px);
            line-height: 24px;
            box-sizing: border-box;
            @include sc(12px, rgba(236, 236, 236, 1));
            background: rgba(116, 117, 123, 1);
            border-radius: 3px;
            border: 1px solid #fff;
            &:active {
              background: rgb(155, 156, 164);
            }
          }
          .btn2 {
            outline: none;
            @include wh(120px, 25px);
            line-height: 25px;
            box-sizing: border-box;
            @include sc(12px, #fff);
            background: rgba(120, 202, 165, 1);
            border-radius: 3px;
            border: 0;
            &:active {
              background: rgb(156, 247, 209);
            }
          }
        }
      }

    }
    .friends_wrapper {
      flex: 1;
      .tab_message {
        .vux-tab-item {
          font-size: 15px;
        }
      }
      .vux-checker-box {
        width: 100%;
        display: flex;
        flex-flow: row;
        font-size: 15px;
        .list_item {
          flex: 1;
          padding: 10px 0;
          @include sc(15px, rgba(77, 77, 77, 1));
          text-align: center;
          background: #fff;
        }
        .list_item_selected {
          color: rgba(21, 156, 94, 1);
        }
      }
      .bs_other {
        color: rgba(77,77,77,1);
        .weui-cell {
          .weui-cell__ft{
            color: rgba(77,77,77,1);
          }
          .iconfont{
            font-size: 18px;
            margin-right: 13px;
            &.icon-IDnumber{
              margin-top: 3px;
              display: inline-block;
            }
          }
        }
        .weui-cells {
          margin-top: 0;
          @include sc(15px, rgba(57, 64, 67, 1));
          &:before {
            border: 0;
          }
        }
        .weui-cell_access .weui-cell__ft:after {
          border-width: 1px 1px 0 0
        }
      }
    }
  }
</style>
