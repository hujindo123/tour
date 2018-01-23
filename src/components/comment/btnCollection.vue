<template>
  <div>
    <div class="love_say" :class="{trans: show}">
      <i class="iconfont love" @click="collection()" :class="collect?'icon-yixihuan':'icon-weixihuan'"></i>
      <i class="iconfont icon-xiaoxi" @click="goPath('/comment')">
        <badge :text="num" class="badge"></badge>
      </i>
      <i class="iconfont icon-gengduo2" :class="{rotate: show}" @click="showComponent"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    Badge,
  } from 'vux'
  export default {
    data(){
      return {
        collect: false, //收藏
        numCount: 0, //總數,
        show: false
      }
    },
    props: {
      like: {
        type: Boolean,
        default: false,
      },
      num: {
        type: Number,
        default: 0,
      }
    },
    components: {
      Badge
    },
    mounted(){
      this.numCount = this.num;
    },
    methods: {
      showComponent(){
        this.show = !this.show;
      },
      goPath(url){
        this.$router.push(url)
      },
      collection(){
        //axios
        this.collect = !this.collect
        if(this.collect){
            alert('收藏了')
        }else{
            alert('没收藏');
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/mixin";

  .love_say {
    @include wh(160px, 48px);
    position: fixed;
    bottom: 45px;
    left: -120px;
    background: rgba(255, 255, 255, 0.5);
    transition: all cubic-bezier(.67, .21, .9, .99) 0.3s;
    border-radius: 0 40px 40px 0;
    box-shadow: 0 0 2px rgba(60, 60, 60, 0.35);
    @include fj(space-around);
    i {
      @include sc(27px, $fc);
      position: relative;
      .badge {
        top: -5px;
        right: -15px;
        position: absolute;
      }
      &.rotate{
        transform: rotate(180deg);
      }
    }
  }

  .trans {
    left: 0;
    transition: all cubic-bezier(.67, .21, .9, .99) 0.3s;
  }
</style>
