<template>
  <div class="set_action">
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
        <x-address title="往返时间" popup-title="往返时间"  :list='dayList' raw-value  v-model='day'></x-address>
      </group>
      <group>
        <popup-picker  popup-title="请选择约团人数" title="组团人数" :data="years1" v-model="year4" ></popup-picker>
      </group>
      <group>
        <popup-picker  popup-title="请选择费用分摊方式" title="费用分摊方式" :data="year5" v-model="year6" ></popup-picker>
      </group>

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
    ChinaAddressV4Data,
    Value2nameFilter as value2name
  } from 'vux';
  let dayLists = []
  for (var i = 1; i <= 30; i++) {
    dayLists.push({
      name: i + '天',
      value: i + ''
    })
  }
  ;
  export default {
    data () {
      return {

        title: '123',
        name: ['成都'],
        addressData: ChinaAddressV4Data,
        dayList: dayLists,
        day: [],
        years1: [[1,2,3,4,5,6,7,8], ['至'],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
        year4: ['2002', '4'],
        year5: ['你付账','AA制', '我全包'],
        year6: []

      }
    },
    components: {
      Group,
      Cell,
      XInput,
      XTextarea,
      XNumber,
      PopupPicker,
      XAddress,
    },
    methods: {
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

  .set_action {
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
    }
    .txt {
      .weui-cells:after {
        height: 0;
      }
    }
  }
</style>
