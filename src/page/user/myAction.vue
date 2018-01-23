<template>
  <div class="myaction">
    <vTitle name="我的活动"></vTitle>
    <sticky :offset="46">
      <tab :line-width="1" class="tab_message" v-model="index">
        <tab-item selected @on-item-click="tab">发起</tab-item>
        <tab-item @on-item-click="tab">
          参与
        </tab-item>
      <!--  <tab-item @on-item-click="tab">回顾</tab-item>-->
        <tab-item @on-item-click="tab">收藏</tab-item>
      </tab>
    </sticky>
    <scroller lock-x height="-86px">
      <div>
        <div class="main_list">
          <!--发起活动 -->
          <startList :list="list" v-if="index===0"></startList>
          <!--参与活动 -->
          <joinList :list="list" v-if="index===1"></joinList>
          <!--收藏活动 -->
          <collectionList :list="list" v-if="index===2"></collectionList>
        </div>
        <load-more tip="loading"></load-more>
      </div>

    </scroller>
  </div>

</template>

<script>
  import {Badge, XHeader, Scroller, Tab, LoadMore,TabItem, Popover, ViewBox, Group, CellBox, Cell, XButton, Divider, Sticky} from 'vux';

  import StartList from 'src/components/list/startList'; //发起的
  import joinList from 'src/components/list/joinList'; //参与的
  import collectionList from 'src/components/list/collectionList'; //参与的
  import {list1,list2,list3} from 'src/service/getDate'
  import vTitle from 'src/components/user/header';
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
      XButton, Divider,LoadMore,StartList,joinList,collectionList,vTitle

    },

    data () {
      return {
        index: 0,
        list: [],
      }
    },
    async created(){
      await list1().then(data => {
        this.list = data;
      })
    },
    methods: {
      async tab(index){
        this.index = index;
        if(this.index ===0){
          await list1().then(data => {
            this.list = data;
          })
        }else if(this.index ===1){
          await list2().then(data => {
            this.list = data;
          })
        }else if(this.index ===2){
          await list3().then(data => {
            this.list = data;
          })
        }
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
  }
</style>
