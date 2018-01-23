<template>

  <div class="article">
    <!-- 头部 -->
    <vHeader  :name="'她是收视女王，常被丈夫暴打，离婚后人财两空，却被世界冠军捧在手心'"></vHeader>
    <!-- 文章 -->
    <scroller lock-x ref="scrollerBottom">
      <div class="article_main">
        <h1 class="title">她是收视女王，常被丈夫暴打，离婚后人财两空，却被世界冠军捧在手心</h1>
        <div class="author_time">
          <span>雨过恬晴  2017-08-28 04:15</span>
          <span><i class="iconfont icon-liulan"></i>  5673</span></div>
        <div class="article_content">
          <p>不管是80后还是90后，记忆里肯定会有几部有关爱情和乡村的电视剧，《趟过河的男人》《搭错车》这些剧名是不是听着莫名熟悉。其实这两部剧的主演都是一个人，李琳。</p>
          <img src="https://static.vux.li/demo/3.jpg" alt="">
          <p>不管是80后还是90后，记忆里肯定会有几部有关爱情和乡村的电视剧，《趟过河的男人》《搭错车》这些剧名是不是听着莫名熟悉。其实这两部剧的主演都是一个人，李琳。</p>
          <p>不管是80后还是90后，记忆里肯定会有几部有关爱情和乡村的电视剧，《趟过河的男人》《搭错车》这些剧名是不是听着莫名熟悉。其实这两部剧的主演都是一个人，李琳。</p>
          <p>不管是80后还是90后，记忆里肯定会有几部有关爱情和乡村的电视剧，《趟过河的男人》《搭错车》这些剧名是不是听着莫名熟悉。其实这两部剧的主演都是一个人，李琳。</p>
          <p>不管是80后还是90后，记忆里肯定会有几部有关爱情和乡村的电视剧，《趟过河的男人》《搭错车》这些剧名是不是听着莫名熟悉。其实这两部剧的主演都是一个人，李琳。</p>
          <img src="https://static.vux.li/demo/3.jpg" alt="">
          <span class="img-total">图1/5</span>
          <img src="https://static.vux.li/demo/3.jpg" alt="">
          <span class="img-total">图1/5</span>
          <img src="https://static.vux.li/demo/3.jpg" alt="">
          <span class="img-total">图1/5</span>
          <img src="https://static.vux.li/demo/3.jpg" alt="">
          <span class="img-total">图1/5</span>
        </div>
      </div>
    </scroller>
  </div>


</template>

<script type="text/ecmascript-6">
  import vHeader from '../../components/user/header';
  import { Scroller, Group } from 'vux';
  export default {
    data () {
      return {
        active: false,
        commentActive: false
      };
    },
    components: {
      Group,
      Scroller,
      vHeader,
    },

    methods: {
      back () {
        this.active === true ? this.active = false : this.$router.go(-1);
      }
    }
  };
</script>

<style lang="scss">
  @import "../../style/mixin";

  .article {
    @include wh(100%, 100%);
    .top {
      @include wh(100%, 47px);
      line-height: 47px;
      padding: 0 12px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      .iconfont {
        display: inline-block;

        &.icon-daohang {
          position: absolute;
          padding-right: 16px;
          right: 0;
        }
      }
    }
    .article_main {
      width: 100%;
      padding: 0 15px 150px 15px;
      box-sizing: border-box;
      .title {
        padding: 20px 0;
        color:#222;
        line-height: 1.3;
        font-size: 22px;
      }
      .author_time {
        color:#545454;
        line-height: 1.3;
        font-size: 12px;
        @include fj();
        span {
          margin-right: 10px;
        }
      }
      .article_content {
        padding: 20px 0 0 0;
        word-wrap: break-word;
        word-break: break-all;
        text-indent: 2em;
        text-align: justify;
        color: #222;
        font-size: 16px;
        img {
          display: inline-block;
          width: 100%;
          height: 200px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
