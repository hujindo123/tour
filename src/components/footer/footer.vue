<template>
  <div class="footer">
    <tabbar class="vux-center">
      <tabbar-item selected link="/main">
        <span slot="icon" class="iconfont icon-shouye"></span>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/action">
        <span slot="icon" class="iconfont icon-reqiqiu"></span>
        <span slot="label">活动</span>
      </tabbar-item>
      <tabbar-item @on-item-click="show=true">
        <span slot="icon" class="iconfont  icon-jiahao"></span>
        <span slot="label">发起</span>
      </tabbar-item>

      <tabbar-item link="/place">
        <span slot="icon" class="iconfont icon-mudedi"></span>
        <span slot="label">目的地</span>
      </tabbar-item>
      <tabbar-item link="/user">
        <span slot="icon" class="iconfont icon-wode"></span>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="click"></actionsheet>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, Actionsheet} from 'vux';
  export default {
    data () {
      return {
        show: false,
        menus: ['发起活动', '发起回顾', '取消']
      }
    },
    components: {
      TabbarItem,
      Tabbar,
      Actionsheet
    },
    methods: {
      click (key, item) {
        if(key === 0){
            this.$router.push('/setAction');
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .footer {
    @include wh(100%, 50px);
    background: #fff;
    box-sizing: border-box;
    .vux-center {
      color: red;
    }
    .weui-tabbar {
      position: fixed;
      .weui-tabbar__item {
        text-decoration: none;
        .iconfont {
          font-size: 18px;
        }
        .weui-tabbar__icon {
          height: auto;
        }
        .icon-jiahao {
          color: $fc;
        }
        .weui-tabbar__label {
          font-size: 12px;
          line-height: 0;
        }
      }

    }
    .weui-actionsheet__cell{
      @include sc(15px, rgba(77,77,77,1))
      padding: 15px 0;
    }
  }


</style>
