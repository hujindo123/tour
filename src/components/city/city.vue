<template>
  <div class="list_city">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="back"></span>
      <span class="register_singin">选择城市</span>
      <span class="iconfont"></span>
    </div>
    <div class="list_city_main">
      <div class="header">定位城市：定位失败，请手动选择</div>
      <group-title>最近访问</group-title>
      <grid :cols="4">
        <grid-item v-for="i in 6" :key="i">
          上海
        </grid-item>
      </grid>
      <group-title>热门城市</group-title>
      <grid :cols="4">
        <grid-item v-for="i in 6" :key="i">
          上海
        </grid-item>
      </grid>
      <group-title>全部城市</group-title>
      <x-address  :title="title" v-model="value" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder"></x-address>
      <!--<grid :cols="5" class="allcity">
        <grid-item>A</grid-item>
        <grid-item>B</grid-item>
        <grid-item>C</grid-item>
        <grid-item>D</grid-item>
        <grid-item>E</grid-item>
        <grid-item>F</grid-item>
        <grid-item>G</grid-item>
        <grid-item>H</grid-item>
        <grid-item>J</grid-item>
        <grid-item>K</grid-item>
        <grid-item>L</grid-item>
        <grid-item>M</grid-item>
        <grid-item>N</grid-item>
        <grid-item>P</grid-item>
        <grid-item>Q</grid-item>
        <grid-item>R</grid-item>
        <grid-item>S</grid-item>
        <grid-item>T</grid-item>
        <grid-item>W</grid-item>
        <grid-item>X</grid-item>
        <grid-item>Y</grid-item>
        <grid-item>Z</grid-item>
      </grid C>-->
    </div>
  </div>
</template>

<script>
  import {Grid, GridItem, GroupTitle,  XAddress, ChinaAddressV4Data,} from 'vux'
  export default {
    data () {
      return {
        title: '默认为空',
        value: [],
        addressData: ChinaAddressV4Data,
      }
    },
    components: {
      XAddress,
      Grid,
      GridItem,
      GroupTitle,
    },
    props: {},
    methods: {
      back(){
        this.$emit('hide')
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .list_city {
    @include wh(100%, 100%);
    background: #f0efed;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    .user_top {
      display: flex;
      background: $fc;
      @include wh(100%, 44px);
      box-sizing: border-box;
      flex-flow: row;
      @include sc(15px, #fff);
      @include fj();
      line-height: 44px;
      overflow: hidden;
      .iconfont {
        @include wh(46px, 44px);
        flex: 0 0 46px;
        text-align: center;
        @include sc(22px, #fff);
      }
      .register_singin {
        flex: 1;
        text-align: center;
        @include sc(14px, #fff)
      }
    }
    .list_city_main {
      padding: 12px;
      .weui-cells__title{
        padding-left: 0;
        color: #333;
        font-weight: 600;
      }
      .header {
        @include sc(14px, #333);
        @include wh(100%, 43px);
        line-height: 43px;
        box-sizing: border-box;
        padding-left: 14px;
        border: 1px solid #DDD8CE;
        @include borderRadius(3px);
        background: #FDFDFC;
      }
      a {
        text-align: center;
        text-decoration: none;
        @include sc(14px, #333);
        padding: 10px;
        background: #fff;
        font-family: Helvetica;
        &:active{
          background: #f0efed ;
        }
      }
      .allcity {
        a {
          color: $fc;
          &:before, &:after {
            border: 0;
          }
        }

      }
    }
  }


</style>
