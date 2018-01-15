<template>
  <div>
    <div class="list_tab" v-if="list" v-for="x in list">
      <router-link to="/details/15">
        <div class="title">{{x.title}}</div>
        <div class="tab_center">
          <div class="tab_center_left">
            <img :src=x.img alt="">
          </div>
          <div class="tab_center_right">
            <div class="label">
              <i class="iconfont icon-biaoqian1"></i>
              <span v-for="item in x.label">{{item}}</span>
            </div>
            <div class="desc" :class="{nobuttton:notButton}">
              {{x.intru}}
            </div>
            <div class="singup" :class="{isHide:notButton}">
              <div class="time">报名截止：{{x.singup}}</div>
              <router-link  class="btn"   v-if="x.status == 0" to="/joinAction">我要报名</router-link>
              <div  class="btn"   v-if="x.status == 1" @click.prevent="show= true">取消报名</div>
            <!--  <div class="btn" v-if="x.status == 0" @click.prevent="goRegister(x.status)">我要报名</div>
              <div class="btn" v-if="x.status == 1" @click.prevent="goRegister(x.status)">取消报名</div>-->
            </div>
          </div>
        </div>
        <div class="tab_bottom">
      <span>
       <img :src=x.url alt="">
        {{x.name}}
      </span>
          <!--<span class="name"></span>-->
          <!--<span class="userid">{{x.id}}</span>-->
          <span class="time">{{x.time}}</span>
          <!--     <span><i class="iconfont icon-liulan"></i>{{x.see}}</span>
               <span><i class="iconfont icon-pinglun"></i>{{x.say}}</span>-->
        </div>
      </router-link>
    </div>
    <div v-transfer-dom>
      <confirm v-model="show"
               :close-on-confirm="false"
               @on-confirm="onConfirm4">
        <p style="text-align:center;">确定取消报名吗?</p>
      </confirm>
    </div>
    <loading :show="show1" :text="text1"></loading>
  </div>
</template>

<script>
  import {Loading,TransferDomDirective as TransferDom,Confirm} from 'vux';
  export default {
    data () {
      return {
        show:false,
        show1: false,
        text1: ''
      }
    },
    directives: {
      TransferDom
    },
    components: {
      Loading,
      Confirm
    },
    props: {
      list: {
        type: Array,
        default: null
      },
      notButton: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      goRegister(v){
        let self = this;
        setTimeout(() => {
          self.$router.push('/details/15')
        }, 1000)
      },
      onConfirm4(){
        this.$vux.loading.show({
          transition: '',
          text: 'processing'
        });
        setTimeout(() => {
          this.$vux.loading.hide();
          this.show = false;
        }, 1000)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .list_tab {
    position: relative;
    overflow: hidden;
    padding: 12px 12px 5px 12px;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    font-size: 0;
    .title {
      line-height: 1.2;
      @include sc(18px, rgba(77, 77, 77, 1));
      @include ess(2);
    }
    .tab_center {
      margin-top: 5px;
      @include wh(100%, 117px);
      position: relative;
      overflow: hidden;
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
        height: 117px;
        padding-left: 10px;
        flex: 1;
        flex-flow: column;
        position: relative;
        font-size: 0;
        .label {
          height: 18px;
          font-size: 0;
          .iconfont {
            vertical-align: middle;
            margin-top: -5px;
            margin-right: 5px;
            display: inline-block;
            @include sc(10px, rgba(230, 230, 230, 1));
          }
          span {
            height: 18px;
            box-sizing: border-box;
            line-height: 18px;
            margin-left: 5px;
            padding: 2px 5px;
            @include borderRadius(3px);
            background: rgba(230, 230, 230, 1);
            @include sc(9px, rgba(153, 153, 153, 1));
          }

        }
        .desc {
          margin-top: 5px;
          line-height: 1.4;
          @include sc(12px, rgba(26, 26, 26, 1));
          @include ess(4);
          &.nobuttton {
            @include ess(6);
          }
        }
        .singup {
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
            text-decoration: none;
            background: $fc;
            @include sc(12px, rgba(255, 255, 255, 1))
          }
        }
        .isHide {
          display: none;
        }
      }
    }
    .tab_bottom {
      position: relative;
      height: 23px;
      margin-top: 5px;
      @include wh(100%, 23px);
      line-height: 23px;
      display: flex;
      flex-flow: row;
      @include fj();
      img {
        @include wh(23px, 23px);
        flex: 0 0 23px;
        vertical-align: bottom;
        @include borderRadius(50%)
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
        &.icon-liulan {
          font-size: 16px;
          height: 15px;
          display: inline-block;
          line-height: 10px;
          vertical-align: middle;
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
