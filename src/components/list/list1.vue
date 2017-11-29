<template>
  <div class="list_tab">
    <div class="title">成都的“香格里拉”，周边三日游的绝佳去处</div>
    <div class="tab_center">
      <div class="tab_center_left">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=977430626,2956604235&fm=27&gp=0.jpg" alt="">
      </div>
      <div class="tab_center_right">
        <div class="label">
          <i class="iconfont icon-biaoqian1"></i>
          <span>自驾</span>
          <span>泸沽湖</span>
          <span>亲子游</span>
        </div>
        <div class="desc desc1" >
          5月1日 从成都出发，到泸沽湖、香格里
          径西昌行程总计大概6天来回、要求带车
          性别不限人数4人，绝佳去处、美丽山河
          约一起准备出发吧。
          5月1日 从成都出发，到泸沽湖、香格里
          径西昌行程总计大概6天来回、要求带车
          性别不限人数4人，绝佳去处、美丽山河
          约一起准备出发吧。
          5月1日 从成都出发，到泸沽湖、香格里
          径西昌行程总计大概6天来回、要求带车
          性别不限人数4人，绝佳去处、美丽山河
          约一起准备出发吧。
        </div>

      </div>
    </div>
    <div class="tab_bottom">
      <span>
       <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=977430626,2956604235&fm=27&gp=0.jpg" alt="">
      </span>
      <span class="name">Gdkskwfrkf11</span>
      <span class="userid">ID:000001</span>
      <span class="time">04-18 11:02</span>
      <span><i class="iconfont icon-liulan"></i>5673</span>
      <span><i class="iconfont icon-pinglun"></i>5673</span>
    </div>
  </div>
</template>

<script>
  import vTitle from 'src/components/user/header';
  export default {
    data () {
      return {}
    },
    components: {},
    props: {},
    methods: {}
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .list_tab {
    width: 100%;
    padding: 12px;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    .title {
      line-height: 1.2;
      @include sc(18px, rgba(77, 77, 77, 1));
      @include ess(2);
    }
    .tab_center {
      margin-top: 9px;
      @include wh(100%, 117px);
      position: relative;
      display: flex;
      flex-flow: row;
      .tab_center_left {
        @include wh(117px, 117px);
        flex: 0 0 117px;
        overflow: hidden;
        img {
          @include wh(117px, 117px);
        }
      }
      .tab_center_right {
        padding-left: 10px;
        flex: 1;
        flex-flow: column;
        .label {
          vertical-align: text-top;
          .iconfont {
            display: inline-block;
            vertical-align: text-top;
            @include sc(11px, rgba(230, 230, 230, 1));
          }
          span {
            vertical-align: top;
            margin-left: 5px;
            padding: 3px 6px;
            background: rgba(230, 230, 230, 1);
            @include sc(9px, rgba(153, 153, 153, 1));
          }

        }
        .desc1 {
          line-height: 1.4;
          @include sc(12px, rgba(26, 26, 26, 1));
          @include ess(6);
        }
        .singup {
          margin-top: 9px;
          @include wh(161px, 25px);
          line-height: 24px;
          box-sizing: border-box;
          border: 1px solid $fc;
          position: absolute;
          right: 0;
          bottom: 0;
          display: flex;
          flex-flow: row;
          text-align: center;
          .time {
            flex: 1;
            @include sc(10px, rgba(51, 51, 51, 1));
            text-align: center;
          }
          .btn {
            flex: 0 0 60px;
            width: 60px;
            background: $fc;
            @include sc(12px, rgba(255, 255, 255, 1))
          }
        }
      }
    }
    .tab_bottom {
      padding: 10px 0;
      @include wh(100%, 23px);
      line-height: 23px;
      display: flex;
      flex-flow: row;
      @include fj();
      img {
        @include wh(23px, 23px);
        flex: 0 0 23px;
        vertical-align: bottom;
      }
      .name {
        width: 63px;
        flex: 0 0 63px;
        line-height: 19px;
        margin-left: 6px;
        @include sc(12px, $fc ());
        @include es();
      }
      .userid {
        line-height: 26px;
        @include sc(9px, rgba(128, 128, 128, 1));
        @include es();
      }
      .iconfont {
        margin-right: 6px;
        &.icon-liulan{
          height: 15px;
          display: inline-block;
          line-height: 10px;
          font-size: 16px;
        }
      }
      span, .iconfont {
        @include sc(10px, $fc);
      }
      .time {
        @include sc(10px, rgba(128, 128, 128, 1))
      }
    }
  }


</style>
