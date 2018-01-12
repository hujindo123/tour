<template>
  <div class="choice_action">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="hide"></span>
      <span class="register_singin">发起活动</span>
      <span class="iconfont icon-wechaticon27" :style="{opacity: onRight ? 1 : 0.5}" @click="save"></span>
    </div>
    <div class="editor_phone">
      <group>
        <x-address v-model="address1" title="出发地" raw-value :list="addressData"></x-address>
      </group>
      <group>
        <x-address v-model="address2" title="目的地" raw-value :list="addressData"></x-address>
      </group>
      <group>
        <x-address title="往返时间" :list='time.dayList' v-model='time.day'></x-address>
      </group>
      <!-- <group>
         <popup-picker popup-title="请选择约团人数" title="组团人数" :data="team.basicList" v-model="team.Num"></popup-picker>
       </group>-->
      <group>
        <x-address title="请选择约团人数" :list="team.basicList" v-model="team.Num"></x-address>
      </group>
      <group>
        <popup-picker popup-title="费用分摊方式" title="费用分摊方式" :data="methods.List" v-model="methods.data"></popup-picker>
      </group>
      <group>
        <x-address title="有无车" :list="Car.basicList" v-model="Car.data"></x-address>
      </group>
      <group class="sunxz">
        <cell title="标签" :value="popup.data" class="label" is-link @click.native="popup.showPopup=true"></cell>
      </group>
      <div v-transfer-dom>
        <popup v-model="popup.showPopup" class="checker_popup">
          <vlable v-model="popup.showPopup" class="checker_popup" :arrData=popup.arrData
                  v-on:getTab="Showlabel"></vlable>
        </popup>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Group,
    Cell,
    XInput,
    XNumber,
    XTextarea,
    XAddress,
    PopupPicker,
    TransferDom,
    ChinaAddressV4Data,
    Popup,
    Checker,
    CheckerItem,
    Value2nameFilter as value2name
  } from 'vux';
  import Vlable from 'src/components/label/label.vue'
  export default {
    directives: {
      TransferDom
    },
    data () {
      return {
        addressData: ChinaAddressV4Data,
        address1: [],
        address2: [],
        time: {
          maxTime: 30,
          dayList: [],
          day: [],
        },
        team: {
          maxPeople: 3,
          basicList: [],
          Num: [],
        },
        Car: {
          type: 2, //两种类型 有车|没车
          max: 6, //最大座位数 6个
          basicList: [],
          data: []
        },
        methods: {
          List: [['你付账', 'AA制', '我全包']],
          data: [],
        },
        popup: {
          label: ['交友', '亲子游', '近郊', '长途', '民俗', '娱乐'],
          showPopup: false, //选项卡
          arrData: [], //初始值
          data: '',

        },
      }
    },
    created(){
      this.setTime(); //构建往返时间数据
      this.setCar(); //构建座位数据
      this.setTeam(); //构建组团人数
    },
    components: {
      Group,
      Cell,
      XInput,
      XTextarea,
      XNumber,
      PopupPicker,
      XAddress,
      Popup,
      Checker,
      CheckerItem,
      Vlable
    },
    methods: {
      setTime(){
        for (let i = 1; i <= this.time.maxTime; i++) {
          this.time.dayList.push({
            name: i + '天',
            value: i + ''
          });
        }
      },
      setTeam(){
        for (let i = 1; i <= this.team.maxPeople; i++) {
          this.team.basicList.push({
            name: `${i} -`,
            value: `${i}`,
          });
          for (let j = i; j <= this.team.maxPeople; j++) {
            this.team.basicList.push({
              name: `${j} 人`,
              value: `${i}-${j}`,
              parent: `${i}`,
            });
          }
        }
      },
      setCar(){
        for (let i = 1; i <= this.Car.type; i++) {
          if (i === 1) {
            this.Car.basicList.push(
              {
                name: '无车',
                value: `${i}`,
              }, {
                name: '',
                value: `${i}-${i}`,
                parent: `${i}`,
              },
              {
                name: '有车',
                value: `${i + 1}`,
              }
            );
          } else {
            for (let j = this.Car.max; j >= 0; j--) {
              this.Car.basicList.push(
                {
                  name: `有${j}座`,
                  value: `${i}-${j}`,
                  parent: `${i}`
                }
              );
            }
          }
        }
      },
      Showlabel(v){
        this.popup.data = [];
        this.popup.data = v.join(' ').trim();
        this.popup.arrData = [];
        if (this.popup.data.length > 0) {
          this.popup.arrData = v;
        } else {
          this.popup.arrData = [];
        }
      },
      save () {
        if (!this.onRight) {
          return
        }
        this.$emit('onRight',
          {
            address1: this.address1,
            address2: this.address2,
            time: this.time.day,
            Num: this.team.Num,
            method: this.methods.data,
            Car: this.Car.data,
            label: this.popup.arrData
          }
        )
      },
      hide(){
        this.$emit('hideChoice')
      }
    },
    computed: {
      onRight(){
        if (this.address1.length > 0
          && this.address2.length > 0
          && this.time.day.length > 0
          && this.team.Num.length > 0
          && this.methods.data.length > 0
          && this.Car.data.length > 0
          && this.popup.arrData.length > 0) {
          return true
        }
        return false
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .choice_action {
    @include wh(100%, 100%);
    background: rgba(236, 236, 236, 1);
    display: flex;
    flex-flow: column;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 400;
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
      .iconfont {
        @include wh(46px, 44px);
        flex: 0 0 46px;
        text-align: center;
        @include sc(22px, #fff);
      }
      .icon-wechaticon27 {
        font-size: 24px;
        opacity: 0.5;
      }
      .register_singin {
        flex: 1;
        text-align: center;
        @include sc(15px, #fff)
      }
    }
    .editor_phone {
      display: flex;
      background: #fff;
      flex-flow: column;
      overflow: scroll;
      .sunxz{
        .weui-cells {
          &:after{
            border-bottom: 1px solid #D9D9D9;
          }
        }
      }
      .weui-cells {
        margin-top: 0;
        @include sc(15px, rgba(57, 64, 67, 1));
        &:after{
          border-bottom: 0;
        }
        .weui-cell {
          padding-left: 0;
        }
      }
      .label {
        .vux-cell-bd > p > .vux-label {
          min-width: 35px;
        }
      }
    }
  }


</style>
