<template>
  <div>
    <div class="list_tab_s" v-if="list" v-for="(x, i) in list">
      <router-link :to="{path:'/details/'+x.id}">
        <div class="title">{{x.title}}</div>
        <div class="tab_center">
          <div class="tab_center_left">
            <img :src=x.img alt="">
          </div>
          <div class="tab_center_right">
            <div class="label">
              <template v-for="(item,index) in x.label">
                <i class="iconfont icon-biaoqian1" v-if="index==0"> </i> <span @click.prevent="goPath('action',item)">{{item}}</span>
              </template>
            </div>
            <div class="desc">{{x.intru}}</div>
            <div class="singup" :class="'singup'+x.status">
              <div class="time">报名截止：{{x.singup}}</div>
              <!-- 发起的活动 修改-->
              <div class="btn" v-if="x.status == 1" @click.prevent="showBtn(i)">编辑活动</div>
              <div style="position: absolute;right: 0; top:24px; z-index: 500" @click.prevent="showBtn(i)"
                   v-if="btnShow && indexs === i && x.status == 1">
                <div style="margin-top: 1px">
                  <x-button text="修改活动" class="txt" type="primary" link='/setAction'></x-button>
                </div>
                <div style="margin-top: 1px">
                  <x-button text="审核报名" class="txt" type="primary" link='/message?type=2'></x-button>
                </div>
                <div style="margin-top: 1px">
                  <x-button text="取消活动" class="txt" type="primary" @click.native="show = true"></x-button>
                </div>
              </div>
              <!-- 发起的活动 结束-->
              <div class="btn over" v-if="x.status == 2">已结束</div>
              <!-- 发起的活动 取消-->
              <div class="btn cancel" v-if="x.status == 3">已取消</div>
            </div>
          </div>
        </div>
        <div class="tab_bottom" v-if="x.status != 3">
          <span><img :src=x.url alt="">   {{x.name}}</span>
          <span class="time">{{x.time}}</span>
          <span><i class="iconfont icon-liulan"></i>{{x.see}}</span>
          <span><i class="iconfont icon-pinglun"></i>{{x.say}}</span>
        </div>
      </router-link>
      <!--回顾 没有按钮-->
      <router-link :to="{path:'/details1/'+x.id}" v-if="place ==1 ">
        <div class="title">{{x.title}}</div>
        <div class="tab_center">
          <div class="tab_center_left">
            <img :src=x.img alt="">
          </div>
          <div class="tab_center_right">
            <div class="label">
              <template v-for="(item,index) in x.label">
                <i class="iconfont icon-biaoqian1" v-if="index==0"> </i> <span @click.prevent="goPath('action',item)">{{item}}</span>
              </template>
            </div>
            <div class="desc nobuttton">
              {{x.intru}}
            </div>
          </div>
        </div>
        <div class="tab_bottom">
      <span>
       <img :src=x.url alt="">
        {{x.name}}
      </span>
          <!--<span class="userid">{{x.id}}</span>-->
          <span class="time">{{x.time}}</span>
          <span><i class="iconfont icon-liulan"></i>{{x.see}}</span>
          <span><i class="iconfont icon-pinglun"></i>{{x.say}}</span>
        </div>
      </router-link>
      <!--目的地 没有按钮-->
      <router-link :to="{path:'/details2/'+x.id}" v-if="place ==2 ">
        <div class="title">{{x.title}}</div>
        <div class="tab_center">
          <div class="tab_center_left">
            <img :src=x.img alt="">
          </div>
          <div class="tab_center_right">
            <div class="label">
              <template v-for="(item,index) in x.label">
                <i class="iconfont icon-biaoqian1" v-if="index==0"> </i> <span @click.prevent="goPath('action',item)">{{item}}</span>
              </template>
            </div>
            <div class="desc nobuttton">
              {{x.intru}}
            </div>
          </div>
        </div>
        <div class="tab_bottom">
      <span>
       <img :src=x.url alt="">
        {{x.name}}
      </span>
          <!--<span class="userid">{{x.id}}</span>-->
          <span class="time">{{x.time}}</span>
          <span><i class="iconfont icon-liulan"></i>{{x.see}}</span>
          <span><i class="iconfont icon-pinglun"></i>{{x.say}}</span>
        </div>
      </router-link>
    </div>
    <div v-transfer-dom>
      <confirm v-model="show"
               :close-on-confirm="false"
               @on-confirm="onConfirm4">
        <p style="text-align:center;">确定取消活动吗?</p>
      </confirm>
    </div>
    <loading :show="show1" :text="text1"></loading>
  </div>
</template>

<script>
  import {Loading, TransferDomDirective as TransferDom, Confirm, XButton} from 'vux';
  export default {
    data () {
      return {
        show: false, //confirm
        show1: false, //loading
        indexs: -1, //点击的列表中的某个
        btnShow: false, //按钮展示
        text1: ''
      }
    },
    directives: {
      TransferDom
    },
    components: {
      Loading,
      Confirm,
      XButton
    },
    props: {
      list: {
        type: Array,
        default: null
      },
      place: {
        type: Number,
        default: 0 //0 活动 1回顾 2目的地
      }
    },
    methods: {
      onConfirm4(){
        this.$vux.loading.show({
          transition: '',
          text: 'processing'
        });
        setTimeout(() => {
          this.$vux.loading.hide();
          this.show = false;
        }, 1000)
      },
      showBtn(i){
        this.btnShow = !this.btnShow;
        if (i !== this.indexs) {
          this.btnShow = true
        }
        this.indexs = i;

      },
      goPath(name, v){
        this.$router.push(`${name}?id=${v}`);
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .list_tab_s {
    position: relative;
    /*overflow: hidden;*/
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
      /* overflow: hidden;*/
      display: flex;
      flex-flow: row;
      .tab_center_left {
        @include wh(117px, 117px);
        flex: 0 0 117px;
        /*overflow: hidden;*/
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
          display: flex;
          flex-flow: row;
          position: relative;
          @include fj(space-around);
          .iconfont {
            top: 3px;
            display: block;
            position: absolute;
            left: 0;
            @include sc(10px, rgba(230, 230, 230, 1));
          }
          span {
            display: flex;
            box-sizing: border-box;
            margin-left: 5px;
            padding: 2px 10px;
            letter-spacing: 1px;
            @include borderRadius(3px);
            background: #f0f0f0;
            @include sc(13px, rgba(153, 153, 153, 1));
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
          border: 1px solid rgba(21, 156, 94, 0.55);
          position: absolute;
          right: 0;
          bottom: 0;
          display: flex;
          flex-flow: row;
          text-align: center;
          &.singup2 {
            border: 1px solid rgba(198, 198, 198, 0.55);
          }
          &.singup3 {
            border: 1px solid rgba(240, 68, 71, 0.55);
          }
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
            @include sc(12px, rgba(255, 255, 255, 1));
            &.over {
              background: rgb(198, 198, 198);
            }
            &.cancel {
              background: rgb(240, 68, 71);
            }
          }
          .txt {
            line-height: 24px;
            @include borderRadius(0);
            padding: 0;
            text-align: center;
            width: 60px;
            @include sc(12px, #fff);
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
