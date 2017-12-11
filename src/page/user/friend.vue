<template>
  <div class="friends">
    <x-header :left-options="{backText: ''}" title="评论列表"></x-header>
    <div class="friends_main">
      <div class="blur" :style="{backgroundImage: 'url('+URL+')'}"></div>
      <div class="zhut">
        <p class="center"><img :src="URL"><i class="iconfont icon-ttpodicon"></i></p>
      </div>
    </div>

  </div>
</template>

<script>
  import {Blur, Group, CellBox, Cell, XHeader} from 'vux';

  export default {
    components: {
      Blur,
      Group,
      CellBox,
      Cell,
      XHeader
    },
    data () {
      return {
        URL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512116865699&di=da0eea64a26c83bf65a83d9d40409676&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104cd5598bec26ac7253264c9598d.png'
      }
    },
    methods: {
      goPath(url){
        this.$router.push(url);
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
        position: relative;
        .center {
          @include wh(50px, 50px);
          text-align: center;
          padding-top: 20px;
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
            @include wh(15px,15px);
            position: absolute;
            right: -10px;
            bottom: 3px;
            padding: 2px;
            color: #fff;
            font-size: 12px;
            @include borderRadius(50%);
            &.icon-ttpodicon {
              background: #63ACF4;
            }
            &.icon-nv {
              background: rgba(244, 126, 126, 1);
            }
          }
        }

      }

    }

  }
</style>
