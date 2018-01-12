<template>
  <div class="editor_user">
    <vTitle name="报名信息填写"></vTitle>
    <scroller lock-x height="-44">
      <div class="user_basic_message">
        <div class="bs_other">
          <group>
            <!--   <x-input title="昵称" class="require" :value="'鲁迅居然姓周'">123</x-input>-->
            <cell :title="'昵称'" :value="'鲁迅居然姓周'" class="require"></cell>
          </group>
          <group>
            <cell :title="'性别'" :value="'女'" class="require"></cell>
          </group>
          <group>
            <x-input title="人数" type="number" placeholder="填写报名人数" class="require" text-align="right"
                     placeholder-align="right"></x-input>
          </group>
          <group>
            <x-input title="联系方式" is-type="china-mobile" placeholder="填写电话号码" class="require" text-align="right"
                     placeholder-align="right"></x-input>
          </group>
          <group>
            <cell :title="'车辆信息'" :value="'选择有无车辆'" placeholder="选择有无车辆" @click.native="show=true" is-link
                  class="require"></cell>
          </group>
          <div v-transfer-dom>
            <popup v-model="show">
              <div class="popup0">
                <group>
                  <radio title="title" :options="options" v-model="value"></radio>
                </group>
              </div>
            </popup>
          </div>
          <group>
            <x-input title="需要的座位" type="number" placeholder="填写需要的座位数量" class="require" text-align="right"
                     placeholder-align="right"></x-input>
          </group>
          <group>
            <cell :title="'驾驶证'" is-link :link="{path:'/demo'}" :value="'上传'"></cell>
          </group>
          <group>
            <x-switch :title="'用户协议已读'"></x-switch>
          </group>
        </div>
      </div>
    </scroller>
    <x-button type="default" class="add_submit">提交报名</x-button>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';
  import {Scroller, FormPreview, Radio, XButton, Group, XSwitch, Cell, XInput, TransferDom, Popup} from 'vux';
  import update from 'src/components/user/update';
  import vTitle from 'src/components/user/header';
  import vRadio from 'src/components/user/radio';
  export default {
    directives: {
      TransferDom
    },
    components: {
      Scroller,
      FormPreview,
      Group,
      Radio,
      Cell,
      XInput,
      XSwitch,
      Popup,
      XButton,
      vTitle
    },
    data () {
      return {
        show: false,
        options: ['无车', '有车'],
        value: ''
      }
    },
    mounted () {

    },
    methods: {
      hide(){
        this.radioShow = false;
        this.inputShow = false;
      },
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .editor_user {
    width: 100%;
    height: 100%;
    background: rgba(236, 236, 236, 1);
    display: flex;
    flex-flow: column;
    .user_basic_message {
      flex: 1;
      .bs_other {
        .weui-cell {
          padding-left: 25px !important;
          &.require {
            padding-left: 15px !important;
            label {
              &:before {
                content: "*";
                color: red;
                left: 0;
                margin-right: 6px;
                vertical-align: middle;
                top: 15px;
              }
            }
          }
          &.jj {
            label {
              width: 100px;
            }
          }

          &.vux-datetime {
            div p {
              @include sc(15px, rgba(57, 64, 67, 1));
              &:before {
                content: "*";
                color: red;
                left: 0;
                margin-right: 6px;
                vertical-align: middle;
                top: 15px;
              }
            }
          }
        }

        .weui-cells {
          margin-top: 0;
          @include sc(15px, rgba(57, 64, 67, 1));
          &:before {
            border: 0;
          }
          a:-webkit-any-link {
            text-decoration: none;
          }
        }
        .weui-cell_access .weui-cell__ft:after {
          border-width: 1px 1px 0 0
        }
        .scroller-content > .scroller-item {
          font-size: 0;
          color: red !important;
        }
      }
    }
    .add_submit {
      height: 52px;
      width: 100%;
      font-size: 15px;
      border-radius: 0;
      background: #dfdfdf;
      &:after{
        border: 0;
        border-radius: 0;
      }
    }
  }
</style>
