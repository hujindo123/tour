<template>
  <div class="editor_user">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="back"></span>
      <span class="register_singin">报名信息填写</span>
      <span class="iconfont icon-wechaticon27" :style="{opacity: save ? 1:0.5}"></span>
    </div>
    <div class="user_basic_message">
      <div class="bs_other">
        <group>
          <cell :title="'昵称'" :value="name"></cell>
        </group>
        <group>
          <cell :title="'性别'" :value="sex"></cell>
        </group>
        <group>
          <x-input title="人数" type="number" v-model="num" placeholder="填写报名人数" text-align="right"
                   class="require" placeholder-align="right"></x-input>
        </group>
        <group>
          <x-input title="联系方式" is-type="china-mobile" v-model="phone" placeholder="填写电话号码" text-align="right"
                   class="require" placeholder-align="right"></x-input>
        </group>
        <group>
          <cell :title="'车辆信息'" :value="value" placeholder="选择有无车辆" @click.native="show=true" is-link
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
          <x-input title="需要的座位" type="number" v-show="value==='无车'" v-model="carNum" placeholder="填写需要的座位数量"
                   class="require"
                   text-align="right"
                   placeholder-align="right"></x-input>
        </group>
        <group>
          <x-input title="可提供的座位" type="number" v-show="value==='有车'" v-model="carNum" placeholder="填写可提供的座位数量"
                   class="require"
                   text-align="right"
                   placeholder-align="right"></x-input>
        </group>
        <group>
          <label for="file">
            <cell :title="'驾驶证'" is-link :value="'上传'"></cell>
            <input type="file" id="file" accept="image/*" style="opacity: 0;position: absolute;top: 0;left: 0;width: 100%;height: 100%;"/>
          </label>
        </group>
        <div style="padding: 15px">
          <img src="../../../static/img/car.png" style="width: 100%; height: auto;display: inline-block"/>
        </div>
        <group>
          <x-switch :title="'用户协议已读'" :value-map="['0', '1']" v-model="switchs"></x-switch>
        </group>
        <div style="color: #3385ff;font-size: 12px;padding:15px 25px" @click="showDialogStyle=true">查看协议</div>
      </div>
    </div>
    <x-dialog v-model="showDialogStyle" hide-on-blur
              :dialog-style="{'max-width': '100%', width: '100%', height: '100%', '-webkit-overflow-scrolling':'touch', 'overflow-y':'auto', 'background-color': 'transparent'}">
      <div style="color:#fff;" @click="showDialogStyle = false">
        <div>
          <span style="font-size:30px;text-align:center;">自助旅游安全协议书</span>
          <br>
          <p style="text-align: left;padding: 0 5px">请仔细阅读此协议<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            此文件为有关责任的豁免、权利的放弃、风险的承担和赔偿的协议。通过签订此文件，你已经完全获知和理解以下的条款和内容。你放弃了某些法律的权利，包括向活动策划人和其他同行成员提起诉讼的权利。活动的参与者均为自发自愿参加的自驾游活动爱好者。活动宗旨提倡弘扬健康、快乐、放松的情结。一切活动恪守安全第一、绿色环保。培养积极向上的团结、互助精神。<br>
            &nbsp;&nbsp;&nbsp;&nbsp; 参加活动的成员，均已事前通过电话、面谈及聚会方式知道活动计划及行程安排，充分了解活动可能出现的各种意外风险。在自愿选择参加活动时，做出并确认遵守下列承诺：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            在签署本承诺书前，本人已明确悉知：自驾游活动匿藏风险；虽然同行所有成员主动防备可能发生的各种风险，但事故隐患仍然不能完全排除。因此，经谨慎思考后，本人郑重承诺如下：<br>
            一、风险的承担<br>
            &nbsp;&nbsp;&nbsp;&nbsp; 我自愿参加此次自驾游活动。我理解、同意和签署此有关责任豁免、权利放弃和风险承担的协议。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            本次活动是自由集约式的自驾游活动，因共同的爱好和理念自由组合、自主活动。本人根据自己的能力（对体能、自驾游技能和经济能力等）谨慎决定后参加本次自助、自驾游活动，并自主关注自身的人身及财产安全。活动中，同行所有成员之间只有相互关心帮助和遇险施救的道义责任。因此，除因同行成员故意导致本人人身伤害和财产损失外，仅因意外过失（包括自己或其他同行成员意外过失）导致的伤害和损失，愿意由本人承担责任，同时放弃对同行成员提出民事赔偿的权利。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            活动策划者是活动项目的信息提供者，也是参加自助、自驾游活动的同行成员，并不是职业的领队、向导或急救人员。所有人员均没有参加过专业户外领队的课程、或急救（包括野外）的培训和经验。我知道他们并不对我安全负责。受全体同行成员认可，活动策划者按同行成员最终确定的活动方案指导活动。在活动中，活动策划者仅对活动的计划行程负责，同行成员应相互谨慎提醒合理限度范围内的安全注意事项，但不承担同行成员在活动中的事故出险责任（包括意外事故，活动策划者为侵权人之外的侵害事件和无过错责任事故）。本人充分理解并尊重此项共识，做好自身安全防范措施，并对活动中的事故风险自负其责。<br>
            二、关于豁免责任，放弃权利和赔偿的协议<br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            1.活动中，车辆所有者及驾驶员是受同行成员的委托无偿提供活动车辆及义务驾驶服务的同行成员，其车辆及驾驶服务为全体同行成员所共享。因此，活动途中意外发生交通事故给本人造成伤害的，除非经专业鉴定确定事故是因故意行为所致外，本人放弃对车辆所有者及驾驶员的损害赔偿请求；作为损害救济，意外事故造成车辆或本人人身伤损的，由保险公司按车损保险或驾乘座位保险赔付，并以此为限，本人放弃追究和要求其他同行成员赔偿的权利，同时免除其他同行成员的法律责任。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            2.我理解并清楚知道车辆行驶过程中，以及中途游览过程中身体活动和车辆的行驶过程是有潜在危害的。我也理解自驾游的活动也包含有导致受伤，心脏病和甚至死亡的风险，我知道有可能涉及危险，我自愿参加这些活动和乘坐车辆。因此，我同意承担和接受任何和所有的伤害的风险，甚至死亡的风险，并且，我永远免除此次活动的同行成员的法律责任。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            3.在此我仅宣布我自己身体健康，没有那些会影响我参加自助游自驾游活动或驾乘车辆的不适，损伤，病痛或其它疾病。除了以上声明的情况，我清楚获知，身体健康状况在是否有专业医务指导的情况下都能够参加自助、自驾游活动，并承担所有的由参加自助、自驾游活动引起的责任。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            4.我同意承担由于我选择了自己的交通方式往返活动地点而引起的相关的风险和责任。假如我帮助参加活动的其他人员提供交通工具及运输工作，由此引发的交通事故、车辆损害及经济损失由我自己承担事故的处理及遭受的损害。<br>
            &nbsp;&nbsp;&nbsp;&nbsp; 5我清楚获知，我的安全是我个人的责任和取决于我的警惕和良好的判断。我同意和保证，如果，任何时候我相信条件是不安全的，那么我会立刻中断活动的进一步参加。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            6.活动中，意外事故是因同行成员之外的第三者责任造成的，则由第三者负责对受损车辆及受害同行成员（包括本人）赔偿。同时，本人和其他同行成员有义务协助（包括协助调查、作证等）获得此种赔偿。<br>
            三、本人确认已自购人身意外伤害保险。<br>
            四．为规范自驾游活动，减少因此带来的纠纷，特制定以上协议。<br>
            五．本次活动的时间为 2011年8月7日至2011年8月14日。<br>
            六．本人确认：<br>
            &nbsp;&nbsp;&nbsp;&nbsp; 本承诺是本人的真实意思表示，不以任何理由撤销本承诺。<br>
            &nbsp;&nbsp;&nbsp;&nbsp; 我同意，一旦签署，此责任豁免协议将生效。此协议同样有效于我的继承人、近亲（即相关权利人和受益人）、执行人、管理人、个人代表和转让人。<br>
            由我以下签署，我保证：<br>
            &nbsp;&nbsp;&nbsp;&nbsp; 我已经阅读和理解以上声明及协议；<br>
            &nbsp;&nbsp;&nbsp;&nbsp; 我理解参加此次自助游自驾游活动相关的风险；<br>
            &nbsp;&nbsp;&nbsp;&nbsp; 我承担由于选择了参加此次自助游自驾游活动而随之来的全部责任；<br>
          </p>
        </div>
      </div>
      <br>
      <br>
      <x-icon type="ios-close-outline" @click.native="showDialogStyle=false" style="fill:#fff;" size="50"></x-icon>
    </x-dialog>
    <x-button type="default" class="add_submit" @click.native="submit">提交报名</x-button>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';
  import {Scroller, FormPreview, Radio, XButton, Group, XSwitch, Cell, XInput, TransferDom, Popup, XDialog} from 'vux';
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
      XDialog,
      vTitle
    },
    data () {
      return {
        show: false,
        name: '鲁迅居然姓周',
        sex: '男',
        num: '',
        phone: '',
        car: '',
        carNum: '',
        switchs: 0,
        options: ['无车', '有车'],
        value: '选择有无车辆',
        showDialogStyle: false,
      }
    },
    mounted () {

    },
    methods: {
      hide(){
        this.radioShow = false;
        this.inputShow = false;
      },
      back(){
        this.$router.go(-1);
      },
      submit(){
        if (this.save) {
          this.$router.push('/joinSucess/1');
        }
      }
    },
    computed: {
      save(){
        if (this.name && this.sex && this.num > 0 && this.phone && this.value && this.carNum.length > 0 && this.switchs) {
          return true
        }
        return false
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .editor_user {
    width: 100%;
    height: 100%;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-flow: column;
    .user_top {
      display: flex;
      background: $fc;
      @include wh(100%, 44px);
      flex: 0 0 44px;
      box-sizing: border-box;
      flex-flow: row;
      @include sc(15px, #fff);
      @include fj();
      line-height: 44px;
      overflow: hidden;
      position: fixed;
      z-index: 500;
      left: 0;
      top: 0;
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
    .user_basic_message {
      flex: 1;
      padding-top: 44px;
      @include wh(100%, 100%);
      .bs_other {
        @include wh(100%, 100%);
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
      &:after {
        border: 0;
        border-radius: 0;
      }
    }
  }
</style>
