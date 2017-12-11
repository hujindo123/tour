<template>
  <div>
    <div class="answer">
      <div class="answer_top vux-1px">
        <span>正在回复 痴头呆脑</span>
        <span>取消回复</span>
      </div>
      <div class="answer_txt">
        <input class="answer_txt_input" ref="chatpannel" @focus="focus"/>
        <div class="answer_txt_button">发布</div>
      </div>
    </div>
  </div>

</template>

<script>
  import {XInput, Group} from 'vux';

  export default {
    components: {
      XInput,
      Group
    },
    data () {
      return {
        label: ['自驾', '大明湖', '情侣'],
        messagesShow: false
      }
    },
    methods: {
      focus(){
        let self = this;
        setTimeout(() => {
          let pannel = self.$refs.chatpannel;
          pannel.scrollIntoView(true);
        }, 200);
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .answer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0;
    background: #fff;
    .answer_top {
      padding: 10px;
      @include sc(14px, rgba(157, 157, 157, 1));
      background: rgba(246, 246, 246, 1);
      @include fj()
    }
    .answer_txt {
      padding: 10px 0 10px 10px;
      display: flex;
      line-height: 32px;
      flex-flow: row;
      .answer_txt_input {
        height: 32px;
        box-sizing: border-box;
        outline: none;
        flex: 1;
        -webkit-appearance: none;
        border: 1px solid #d4d4d4;
        @include borderRadius(6px);
        font-size: 14px;
        background: rgba(246, 246, 246, 1);

      }
      .answer_txt_button {
        text-align: center;
        @include sc(14px, rgba(237, 237, 237, 1));
        flex: 0 0 55px;
        width: 55px;
      }
    }

  }
</style>
