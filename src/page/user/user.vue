<template>
  <div class="user">
    <vHeader  :name="'我的'"></vHeader>
    <div class="user_basic_message">
      <div class="tp" @click="goPath('/editorUserMessage')">
        <div class="tp_left">
          <i class="iconfont icon-touxiang"></i>
          <!-- <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=547138142,3998729701&fm=27&gp=0.jpg"
                alt="">-->
        </div>
        <div class="tp_right">
          <span class="name">鲁迅居然姓周</span>
          <span class="level">L V 1</span>
        <!--  <div class="num">
            <span @click.stop="goPath('/follow')">关注 21</span> 丨 <span @click.stop="goPath('/fans')">粉丝 16</span>
          </div>-->
        </div>
        <i class="iconfont icon-fanhui-copy"></i>
      </div>
      <div class="bs_other">
        <group>
          <cell :title="'我的活动'" is-link :link="{path:'/myAction'}"></cell>
        </group>
        <group>
          <cell :title="'我的消息'" is-link :link="{path:'/message'}">
            <badge text="8" class="badge"></badge>
          </cell>
        </group>
       <!-- <group>
          <cell :title="'我的评论'" is-link :link="{path:'/myComment'}"></cell>
        </group>
        <group>
          <cell :title="'我的相册'" is-link :link="{path:'/demo'}"></cell>
        </group>
        <group>
          <cell :title="'会员福利'" is-link :link="{path:'/demo'}"></cell>
        </group>-->
      </div>

    </div>
  </div>
</template>

<script>
  import {Badge, Group, CellBox, Cell} from 'vux';
  import vHeader from '../../components/user/header';
  export default {
    components: {
      Badge,
      Group,
      CellBox,
      Cell,
      vHeader,
    },
    data () {
      return {
        accountShow: true,
        hasSend: false,
        login: {
          phone: '',
          password: '',
          code: '',
          desc: '发送验证码'
        }
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

  .user {
    background: rgba(236, 236, 236, 1);
    display: flex;
    flex-flow: column;
    .user_basic_message {
      .tp {
        padding: 24px 12px 24px 25px;
        background: #fff;
        margin-bottom: 10px;
        align-items: center;
        display: flex;
        flex-flow: row;
        text-decoration: none;
        .tp_left {
          flex: 0 0 50px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          text-align: center;
          .icon-touxiang {
            @include sc(47px, rgba(230, 230, 230, 1))
          }
          img {
            width: 100%;
            display: block;
            border-radius: 50%;
          }
        }
        .tp_right {
          flex: 1;
          padding-left: 7px;
          flex-flow: row;
          .name {
            @include sc(18px, rgba(57, 64, 67, 1))
          }
          .level {
            display: inline-block;
            padding: 0 5px;
            height: 15px;
            line-height: 15px;
            vertical-align: text-top;
            margin-top: 1px;
            @include sc(10px, #fff);
            text-align: center;
            background: rgba(255, 199, 65, 1);
          }
          .num {
            margin-top: 5px;
            flex: 1;
            @include sc(12px, rgba(57, 64, 67, 1))
          }
        }
        .icon-fanhui-copy {
          @include sc(12px, rgba(215, 215, 215, 1))
        }

      }
      .bs_other {
        .weui-cells {
          margin-top: 0;
          @include sc(15px, rgba(57, 64, 67, 1));
          &:before {
            border: 0;
          }
        }
        .weui-cell_access .weui-cell__ft:after {
          border-width: 1px 1px 0 0
        }
      }
    }
  }
</style>
