<template>
  <div>
    <div class="login_top">
      <i>X</i><span>账号注册</span>
    </div>
  </div>
</template>

<script>
  import {Tab, TabItem, Sticky, XButton} from 'vux';

  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      XButton
    },
    data () {
      return {
        showSpace: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/mixin";

  .login_top {
    padding: 0.9rem;
    @include sc(.7rem, #842711);
  }
</style>
