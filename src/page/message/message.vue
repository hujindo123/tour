<template>
  <div class="message_user">
    <vTitle name="消息"></vTitle>
    <div style="height:44px;flex: 0 0 44px">
      <sticky :offset="44">
        <div>
          <tab :line-width="1" class="tab_message" v-model="index">
            <tab-item :selected="index === 0" @on-item-click="tab">
              <!--<badge text="" class="badge"></badge>-->
              好友消息
            </tab-item>
            <tab-item :selected="index === 1" @on-item-click="tab">
              <badge text="" class="badge" v-if="data && data.some(watchReady)"></badge> <!-- ES6 some 数组方法-->
              系统消息
            </tab-item>
            <tab-item :selected="index === 2" @on-item-click="tab">
              <badge text="" class="badge" v-if="data1 &&data1.some(watchReady)"></badge>
              活动消息
            </tab-item>
            <tab-item :selected="index === 3" @on-item-click="tab">
              <!--<badge text="" class="badge"></badge>-->
              陌生消息
            </tab-item>
          </tab>
        </div>

      </sticky>
    </div>
    <!--好友消息-->
    <div v-if="index==0" class="div">
      <div>

      </div>
      <divider>暂无信息</divider>
    </div>
    <!-- 系统消息-->
    <div v-if="index==1" class="div">
      <div class="item vux-1px-b" v-for="(item, indexs) in data">
        <div class="fle_1" @click="showmore(indexs,item.isReady,index,index,item.id)">
          <div class="header"><span v-if="!item.isReady"></span></div>
          <div class="right">
            <div class="top">
              <div class="name">{{item.name}}</div>
              <div class="time">{{item.time}}</div>
            </div>
            <div class="desc" :class="{'ess': indexs == childIndex && index==1}">
              <span>{{item.desc}}</span>
            </div>
          </div>
        </div>
      </div>
      <divider>暂无信息</divider>
    </div>
    <!--活动消息-->
    <div v-if="index==2" class="div">
      <div class="item vux-1px-b" v-for="(item, indexs) in data1">
        <div class="fle_1" @click="showmore(indexs,item.isReady,index,item.id)">
          <div class="header"><span v-if="!item.isReady"></span></div>
          <div class="right">
            <div class="top">
              <div class="name">{{item.nickname}}</div>
              <div class="time">{{item.time}}</div>
            </div>
            <!--摘要-->
            <div class="desc" v-if="childIndex!=indexs">
              <ul class="join_s">
                <li><span class="key">审核状态： </span>
                  <!-- 0 未审核   1 审核不通过-->
                  <span class="vl" v-if="item.status ==0">未审核</span>
                  <span class="vl" v-if="item.status ==1">审核不通过</span>
                </li>
                <li><span class="key" v-show="item.status ===1">不通过原因：</span><span class="vl">{{item.upass}}</span></li>
                <li><span class="key">昵称： </span><span class="vl">{{item.nickname}}</span></li>
                <li><span class="key">报名活动：</span><span class="vl">{{item.action}}</span></li>
              </ul>
              <div class="iconfont icon-gengduo"></div>
            </div>
            <!--全文-->
            <div class="desc ess" v-if="childIndex==indexs">
              <ul class="join_s">
                <li><span class="key">审核状态： </span> <!-- 0 未审核   1 审核不通过-->
                  <span class="vl" v-if="item.status ==0">未审核</span>
                  <span class="vl" v-if="item.status ==1">审核不通过</span>
                </li>
                <li><span class="key" v-show="item.status ===1">不通过原因：</span><span class="vl">{{item.upass}}</span></li>
                <li><span class="key">昵称： </span>{{item.nickname}}</li>
                <li><span class="key">报名活动：</span>{{item.action}}</li>
                <li><span class="key">报名人数：</span>{{item.actionNum}}人</li>
                <li><span class="key">车辆信息：</span>{{item.car}}</li>
                <li><span class="key">联系电话：</span>{{item.phone}}</li>
              </ul>
              <div class="iconfont icon-gengduo rotate"></div>
            </div>
          </div>
        </div>
        <div class="btn" v-show="childIndex==indexs && item.status == 0">
          <div class="t t1" @click="pass(item.id)">审核通过</div>
          <div class="t t2 vux-1px-t" @click="Upass(item.id)">审核不通过</div>
        </div>
      </div>
    </div>
    <!--陌生消息-->
    <div v-if="index==3" class="div">
      <divider>暂无信息</divider>
    </div>
    <div class="write_ms" v-show="unpass">
      <div class="user_top">
        <span class="iconfont icon-fanhui" @click="unpass=false"></span>
        <span class="register_singin">不通过的原因</span>
        <span class="iconfont icon-wechaticon27" :style="{opacity:reason.length>10?1:0.5}"></span>
      </div>
      <x-textarea :placeholder="'请输入审核不通过的原因'" v-model="reason"></x-textarea>
    </div>

  </div>
</template>

<script>
  import {Sticky, Tab, TabItem, Badge, XTextarea, Divider} from 'vux';
  import vTitle from 'src/components/user/header';

  export default {
    components: {
      XTextarea,
      Sticky,
      Tab,
      TabItem,
      Badge,
      Divider,
      vTitle,

    },
    data () {
      return {
        index: 0, // tab 序列
        childIndex: -1, //列表中的序列
        unpass: false,
        reason: '',
        //系统消息 data
        data: [
          {id: 0, name: '痴头呆脑', time: '09-09 09:25', desc: '门户网的会员您已经您注册成为中国自驾', isReady: 1},
          {
            id: 1,
            name: '痴头呆脑',
            time: '09-09 09:25',
            desc: '门户网的会员您已经您注册成为中国自驾游门户网的会员您已经您注册成为中国自驾游您注册成为中国自驾游',
            isReady: 1
          },
        ],
        //活动消息 data1
        data1: [
          {
            id: 0, //消息id
            status: 0, //审核状态 0 未审核
            time: '09-09 09:25',
            nickname: '鲁迅居然姓周',
            action: '青海到环球5日游青海到环球5日游12345',
            actionNum: '5',
            car: '无车 需要两个座位',
            phone: '18227648954',
            isReady: 0 //是否读取了 0 未读取 1读取
          },
          {
            id: 1,
            status: 1, //已审核
            time: '09-09 09:25',
            upass: '已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满',
            nickname: '鲁迅居然姓周',
            action: '青海到环球5日游青海到环球5日游已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满',
            actionNum: '5',
            car: '无车 需要两个座位',
            phone: '18227648954',
            isReady: 1 //是否读取了 0 未读取
          },
        ],
        //点击访问后的新消息 data2
        data2: [
          {
            id: 0, //消息id
            status: 0, //审核状态 0 未审核
            time: '09-09 09:25',
            nickname: '鲁迅居然姓周',
            action: '青海到环球5日游青海到环球5日游12345',
            actionNum: '5',
            car: '无车 需要两个座位',
            phone: '18227648954',
            isReady: 1 //是否读取了 0 未读取 1读取
          },
          {
            id: 1,
            status: 1, //已审核
            time: '09-09 09:25',
            upass: '已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满',
            nickname: '鲁迅居然姓周',
            action: '青海到环球5日游青海到环球5日游已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满已满',
            actionNum: '5',
            car: '无车 需要两个座位',
            phone: '18227648954',
            isReady: 1 //是否读取了 0 未读取
          }
        ]
      }
    },
    created(){
      if (this.$route.query.type) {
        this.index = (Math.round(this.$route.query.type) > 0 && Math.round(this.$route.query.type) < 4) ? Math.round(this.$route.query.type) : 0;
      }
    },
    methods: {
      tab(index){
        this.index = index;
        this.childIndex = -1;
      },
      async showmore(C_indexs, isReady, index, id){ /*子集序列  是否展开 父级序列, 活动id*/
        if (this.childIndex === C_indexs) { // 如果已经展开则收起
          this.childIndex = -1;
        } else {
          this.childIndex = C_indexs; //展开信息
          //如果是未读信息 访问接口
          if (!isReady) {
            switch (index) {
              case 0: //好友消息
                //axios
                alert('设置读取')
                break;
              case 1: //系统消息
                alert('设置读取')
                //await  axios //设置读取
                // 再次拉取 活动信息
                break;
              case 2: //活动消息
                alert('设置读取');
                this.data1 = this.data2; //假设获取到的新数据是data2
                break;
              case 3: //陌生消息
                alert('设置读取')
                break;
            }
          }
        }
      },
      pass(id){
        /*v 评论id */
        //axios
        console.log(id);
      },
      Upass(id){
        /*v 评论id */
        //axios
        this.unpass = true;
      },
      watchReady(value){
        return value.isReady === 0;
      }
    },
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .message_user {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-flow: column;
    .tab_message {
      .vux-tab-item {
        @include sc(15px, rgba(76, 76, 76, 1));
      }
      .badge {
        @include wh(7px, 7px);
        border-radius: 50%;
        padding: 0;
        margin-top: -2px;
        margin-right: 2px;
      }
    }
    .div {
      flex: 0 0 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .item {
        @include wh(100%, auto);
        display: flex;
        flex-flow: column;
        box-sizing: border-box;
        padding: 12px 0 0 0;
        .fle_1 {
          width: 100%;
          display: flex;
          flex-flow: row;
          box-sizing: border-box;
          padding: 0 12px 12px 12px;
          .header {
            @include wh(45px, 45px);
            flex: 0 0 45px;
            @include borderRadius(50%);
            background: #ffc5b7;
            position: relative;
            font-size: 0;
            span {
              @include wh(10px, 10px);
              background: red;
              display: inline-block;
              position: absolute;
              right: 0;
              border-radius: 50%;
              text-align: center;
              @include sc(9px, rgba(255, 255, 255, 1));
              line-height: 12px;
            }
          }
          .right {
            width: 100%;
            box-sizing: border-box;
            flex: 1;
            padding-left: 13px;
            flex-flow: column;
            position: relative;
            overflow: hidden;
            .top {
              display: flex;
              flex: 1;
              flex-flow: row;
              align-items: center;
              .name {
                padding: 3px 0;
                flex: 1;
                @include sc(15px, rgba(1, 1, 1, 1));
              }
              .time {
                text-align: right;
                flex: 0 0 80px;
                @include sc(10px, rgba(124, 124, 124, 1));
              }
            }
            .desc {
              padding-right: 18px;
              position: relative;
              @include ess(2);
              @include sc(13px, rgba(77, 77, 77, 1));
              .join_s {
                display: flex;
                flex-flow: column;
                li {
                  display: flex;
                  flex-flow: row;
                  line-height: 1.4;
                  .key {
                    width: 80px;
                    flex: 0 0 80px;
                  }
                  .vl {
                    flex: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }

                }
              }
              &.ess {
                display: block;
                li {
                  overflow: auto;
                  text-overflow: initial;
                  white-space: normal;
                }
              }
              .icon-gengduo {
                position: absolute;
                right: 0;
                top: 5px;
                color: #ccc;
                &.rotate {
                  transform: rotate(180deg)
                }
              }
            }
          }
        }
        .btn {
          width: 100%;
          display: flex;
          flex-flow: row;
          .t {
            @include wh(100%, 45px);
            line-height: 45px;
            text-align: center;
            font-size: 15px;
            flex: 0 0 1;
            &.t1 {
              background: $fc;
              color: #fff;
            }
            &.t2 {
              color: $fc;
            }
          }

        }
      }
    }

    .write_ms {
      @include wh(100%, 100%);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 500;
      background: #fff;
      .user_top {
        display: flex;
        background: $fc;
        @include wh(100%, 44px);
        box-sizing: border-box;
        flex-flow: row;
        @include sc(14px, #fff);
        @include fj();
        line-height: 44px;
        overflow: hidden;
        position: relative;
        .iconfont {
          @include wh(46px, 44px);
          flex: 0 0 46px;
          text-align: center;
          @include sc(22px, #fff);
        }
        .icon-wechaticon27 {
          font-size: 24px;
          color: rgba(255, 255, 255, 1);
        }
        .register_singin {
          flex: 1;
          text-align: center;
          @include sc(15px, #fff)
        }
      }
    }
    .vux-divider {
      padding: 15px;
      font-size: 15px;
    }

  }
</style>
