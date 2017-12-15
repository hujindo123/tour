<template>
  <div class="choice_action">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
      <span class="register_singin">发起活动</span>
      <span class="iconfont icon-wechaticon27"></span>
    </div>
    <div class="editor_phone">
      <group>
        <x-address title="出发地" popup-title="请选择出发地" raw-value :list="addressData"></x-address>
      </group>
      <group>
        <x-address popup-title="请选择目的地地" title="目的地" raw-value :list="addressData"></x-address>
      </group>
      <group>
        <x-address title="往返时间" popup-title="往返时间" :list='time.dayList' v-model='time.day'></x-address>
      </group>
      <group>
        <popup-picker popup-title="请选择约团人数" title="组团人数" :data="team.basicList"
                      v-model="team.Num"></popup-picker>
      </group>
      <group>
        <popup-picker popup-title="费用分摊方式" title="费用分摊方式"   :data="methods.List" v-model="methods.data"></popup-picker>
      </group>
      <group>
        <x-address  popup-title="有无车" title="有无车" :list="Car.List"></x-address>
      </group>
      <group>
        <cell title="标签" :value="popup.data" class="label" is-link @click.native="popup.showPopup=true"></cell>
      </group>
      <div v-transfer-dom>
        <popup v-model="popup.showPopup" class="checker_popup">
          <checker
            v-model="popup.data"
            type="checkbox"
            default-item-class="item"
            selected-item-class="item-selected">
            <checker-item v-for="(item, index) in popup.label" :value="item" :key="index" @on-item-click="onItemClick">
              {{item}}
            </checker-item>
          </checker>
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
  export default {
    directives: {
      TransferDom
    },
    data () {
      return {
        title: '123',
        name: ['成都'],
        addressData: ChinaAddressV4Data,
        time: {
          maxTime: 30,
          dayList: [],
          day: []
        },
        team: {
          maxPeople: 10,
          basicList: [],
          peopleList: [
            {
              name: '无车',
              value: '1',
              parent: 0
            }, {
              name: '有车',
              value: '2',
              parent: 0
            }, {
              name: '',
              value: '1-2',
              parent: '1'
            }, {
              name: '无座位',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩1座',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩2座',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩3座',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩4座',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩5座',
              value: '2-2',
              parent: '2'
            }, , {
              name: '剩6座',
              value: '2-2',
              parent: '2'
            }],
          Num: [],
        },
        Car: {
          List: [
            {
              name: '无车',
              value: '1',
              parent: 0
            }, {
              name: '有车',
              value: '2',
              parent: 0
            }, {
              name: '',
              value: '1-2',
              parent: '1'
            }, {
              name: '无座位',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩1座',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩2座',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩3座',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩4座',
              value: '2-2',
              parent: '2'
            }, {
              name: '剩5座',
              value: '2-2',
              parent: '2'
            }, , {
              name: '剩6座',
              value: '2-2',
              parent: '2'
            }],
        },
        methods: {
          List: [['你付账', 'AA制', '我全包']],
          data: []
        },
        popup: {
          label: ['交友', '亲子游', '近郊', '长途', '民俗', '娱乐'],
          showPopup: false,
          data: ''
        }

      }
    },
    created(){
      this.setTime(); //构建往返时间数据
      this.setTeam(); //构建往返时间数据
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
    },
    methods: {
      setTeam(){
        let List = [];
        for (let i = 1; i <= this.team.maxPeople; i++) {
          List.push(i + ' 人');
        }
        this.team.basicList = [List, ['至'], List]
      },
      setTime(){
        for (let i = 1; i <= this.time.maxTime; i++) {
          this.time.dayList.push({
            name: i + '天',
            value: i + ''
          });
        }
      },
      onItemClick (value, disabled) {
        this.showPopup = false
      },
      onShadowChange (ids, names) {
        //console.log(ids, names)
        this.name = names || ['成都'];
      },
      change (value, label) {
        console.log('change:', value, label)
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
      }
      .register_singin {
        flex: 1;
        text-align: center;
        @include sc(15px, #fff)
      }
    }
    .editor_phone {
      display: flex;
      flex: 1;
      background: #fff;
      flex-flow: column;
      .weui-cells {
        margin-top: 0;
        @include sc(15px, rgba(57, 64, 67, 1));
        p {
          margin: 0;
        }
      }
      .vux-cell-box:before {
        border: 0;
      }
      .weui-cell {
        padding-left: 0;
      }
      .weui-cell_access .weui-cell__ft:after {
        border-width: 1px 1px 0 0
      }
      .label {
        .vux-cell-bd > p > .vux-label {
          min-width: 35px;
        }
      }
    }
  }

  .checker_popup {
    padding: 10px 10px 40px 10px;
    .item {
      @include sc(13px, rgba(76, 76, 76, 1));
      padding: 2px 15px;
      border-radius: 3px;
      border: 1px solid #b1b1b1;
      margin-top: 10px;
      display: inline-block;
      margin-right: 13px;
    }
    .item-selected {
      background: rgba(204, 245, 226, 1);
      color: $fc;
      border: 1px solid $fc;
    }
  }
</style>
